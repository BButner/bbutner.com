import { Container } from 'components/blog/Container'
import { Layout } from 'components/blog/Layout'
import { Header } from 'components/blog/slug/Header'
import { Post } from 'lib/blog/model/Post'
import { FC } from 'react'
import { PostBody } from 'components/blog/slug/PostBody'
import { PostHeader } from 'components/blog/slug/PostHeader'
import Error from 'next/error'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { imageBuilder } from 'lib/blog/sanity'
import { getAllPostsWithSlug, getPostAndMorePosts } from 'lib/blog/api'

type SlugProps = {
  post: Post;
  morePosts: Post[];
  preview: any;
}

export const Slug: FC<SlugProps> = ({ post, morePosts, preview }) => {
  const router = useRouter()
  if (!post) return <Error statusCode={404} />

  return (
    <Layout preview={preview}>
      <NextSeo
        title={post.title}
        description={post.description}
        openGraph={{
          url: router.asPath,
          type: 'website',
          title: post.title,
          description: post.description,
          locale: 'en_US',
          images: [
            {
              url: imageBuilder(post.coverImage).width(1200).height(630).url(),
              width: 1200,
              height: 630,
              alt: 'Cover Image for ' + post.title
            }
          ],
          site_name: 'BButner - Blog'
        }}
        twitter={{
          handle: '@BeauButner',
          site: '@bbutner.com',
          cardType: 'summary_large_image',
        }}
      />
      <Container>
        <Header />
        
        <PostHeader post={post} />

        <PostBody post={post} />
      </Container>
    </Layout>
  )
}

export default Slug

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview)

  return {
    props: {
      preview,
      post: data?.post || null,
      morePosts: data?.morePosts || null,
    },
    revalidate: 1
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()

  return {
    paths:
      allPosts?.map((post) => ({
        params: {
          slug: post.slug,
        },
      })) || [],
    fallback: true,
  }
}