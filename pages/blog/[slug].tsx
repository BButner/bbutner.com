import { Block, Page } from '@notionhq/client/build/src/api-types'
import { BlogHeader } from 'components/blog/BlogHeader'
import { RenderBlock } from 'components/blog/RenderBlock'
import { Text } from 'components/blog/Text'
import { Layout } from 'components/layout'
import { getBlocks, getDatabase, getPage } from 'lib/notion/Notion'
import { FC } from 'react'
import slugify from 'slugify'
import { databaseId } from '.'

type PostProps = {
  page: Page;
  blocks: Block[];
  coverImageUrl: string;
  title: string;
}

const Post: FC<PostProps> = ({ page, blocks, coverImageUrl, title }) => {
  if (!page || !blocks) return <div />

  return (
    <Layout pageTitle={title}>
      <article className="container m-auto">
        <BlogHeader title={title} coverImageUrl={coverImageUrl} />
        <h1 className="text-7xl">{title}</h1>
        <section>
          {blocks.map(block => (
            <RenderBlock key={block.id} block={block} />
          ))}
        </section>
      </article>
    </Layout>
  )
}

export const getStaticPaths = async () => {
  const database: Page[] = await getDatabase(databaseId)

  return {
    paths: database.map(page => ({ params: { slug: page.id } })),
    fallback: true
  }
}

export const getStaticProps = async (context) => {
  const { slug } = context.params
  const database: any[] = await getDatabase(databaseId)
  const id: string = database.filter(page =>
    slugify(page.properties.Name.title[0].plain_text).toLowerCase() === slug.toLowerCase())[0].id

  const pageMeta: any = database.filter(page => page.id === id)[0]

  const title: string = pageMeta.properties.Name.title[0].plain_text
  const coverImageUrl: string = pageMeta.properties.CoverImage.rich_text[0].plain_text

  const page = await getPage(id)
  const blocks = await getBlocks(id)

  return {
    props: {
      page,
      blocks,
      coverImageUrl,
      title
    },
    revalidate: 1
  }
}

export default Post