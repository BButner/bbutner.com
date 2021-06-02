import { SanityClient } from '@sanity/client'
import { Post } from './model/Post'
import client, { previewClient } from './sanity'

const getUniquePosts = (posts: Post[]): Post[] => {
  const slugs = new Set()
  return posts.filter((post) => {
    if (slugs.has(post.slug)) return false
    else {
      slugs.add(post.slug)
      return true
    }
  })
}

const postFields = `
  _id,
  name,
  title,
  'date': publishedAt,
  excerpt,
  'slug': slug.current,
  'coverImage': mainImage,
  'author': author->{name, 'picture': image.asset->url},
  description,
`

const getClient = (preview): SanityClient => (preview ? previewClient : client)

export const getPreviewPostBySlug = async (slug: string): Promise<Post> => {
  return await getClient(true).fetch(
    `*[_type == "post" && slug.current == $slug]${process.env.NODE_ENV == 'production' ? '[draft == false]' : ''} | order(publishedAt desc){
      ${postFields}
      body
    }`,
    { slug }
  )[0]
}

export const getAllPostsWithSlug = async (): Promise<Post[]> => {
  return await client.fetch(`*[_type == "post"]${process.env.NODE_ENV == 'production' ? '[draft == false]' : ''}{ 'slug': slug.current }`)
}

export const getAllPostsForHome = async (preview): Promise<Post[]> => {
  return getUniquePosts(
    await getClient(preview)
      .fetch(`*[_type == "post"]${process.env.NODE_ENV == 'production' ? '[draft == false]' : ''} | order(publishedAt desc){
        ${postFields}
      }`)
  )
}

export const getPostAndMorePosts = async (slug: string, preview) => {
  const curClient = getClient(preview)
  const [post, morePosts] = await Promise.all([
    curClient.fetch(
        `*[_type == "post" && slug.current == $slug]${process.env.NODE_ENV == 'production' ? '[draft == false]' : ''} | order(_updatedAt desc) {
        ${postFields}
        body
      }`,
        { slug }
      )
      .then((res) => res?.[0]),
    curClient.fetch(
      `*[_type == "post" && slug.current != $slug]${process.env.NODE_ENV == 'production' ? '[draft == false]' : ''} | order(publishedAt desc, _updatedAt desc){
        ${postFields}
        body,
      }[0...2]`,
      { slug }
    ),
  ])
  return { post, morePosts: getUniquePosts(morePosts) }
}