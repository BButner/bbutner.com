import { FC } from 'react'
import { getDatabase } from 'lib/notion/Notion'
import { Layout } from 'components/layout'

export const databaseId = process.env.NOTION_DATABASE_ID

type IndexProps = {
  posts: any;
}

const index: FC<IndexProps> = ({ posts }) => {
  console.log(posts[0].properties)
  return (
    <Layout pageTitle="Blog">
      <div className="w-full h-full flex items-center justify-center">
        <ol>
          {posts.map(post => (
            <p>{post.properties.Name.title[0]?.text?.content} - {post.id}</p>
          ))}
        </ol>
      </div>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const database = await getDatabase(databaseId)

  return {
    props: {
      posts: database
    },
    revalidate: 1
  }
}

export default index