import { FC } from 'react'
import { getAllPostsForHome } from 'lib/blog/api'
import { Layout } from 'components/blog/Layout'
import Head from 'next/head'
import { Container } from 'components/blog/Container'
import { Intro } from 'components/blog/Intro'
import { Post } from 'lib/blog/model/Post'
import { HeroPost } from 'components/blog/HeroPost'
import { MorePosts } from 'components/blog/MorePosts'

type IndexProps = {
  allPosts: Post[];
  preview: any;
}

const index: FC<IndexProps> = ({ allPosts, preview }) => {
  const heroPost: Post | undefined = allPosts[0]

  return (
    <>
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