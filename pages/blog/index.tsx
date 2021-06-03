import { FC } from 'react'
import { getAllPostsForHome } from 'lib/blog/api'
import { Layout } from 'components/blog/Layout'
import Head from 'next/head'
import { Container } from 'components/blog/Container'
import { Intro } from 'components/blog/Intro'
import { Post } from 'lib/blog/model/Post'
import { HeroPost } from 'components/blog/HeroPost'
import { MorePosts } from 'components/blog/MorePosts'
import { NextSeo } from 'next-seo'
import { NextRouter, useRouter } from 'next/router'
import { imageBuilder } from 'lib/blog/sanity'

type IndexProps = {
  allPosts: Post[];
  preview: any;
}

const index: FC<IndexProps> = ({ allPosts, preview }) => {
  const heroPost: Post | undefined = allPosts[0]
  const router: NextRouter = useRouter()

  return (
    <>
      <NextSeo
        title="BButner - Blog"
        description="My personal blog for tech."
        openGraph={{
          url: router.asPath,
          type: 'website',
          title: 'Beau Butner - Blog',
          description: 'My personal blog for tech.',
          locale: 'en_US',
          images: [
            {
              url: allPosts[0] ? imageBuilder(allPosts[0].coverImage).width(1200).height(630).url() : '',
              width: 1200,
              height: 630,
              alt: allPosts[0] ? 'Cover Image for ' + allPosts[0].title : 'Beau Butner'
            }
          ],
        }}
        twitter={{
          handle: '@BeauButner',
          site: '@bbutner.com',
          cardType: 'summary_large_image',
        }}
      />
      <Layout preview={preview}>
        <Head>
          <title>Beau Butner - Blog</title>
        </Head>
        <Container>
          <Intro />
          <HeroPost post={heroPost} />
          
          <MorePosts posts={allPosts.slice(1)} />
        </Container>
      </Layout>
    </>
  )
}

export default index

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview)
  return {
    props: { allPosts, preview },
    revalidate: 1
  }
}