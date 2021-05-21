import { FC } from 'react'
import { Layout } from '../components/layout'
import { getDatabase } from '../lib/notion/Notion'

const about: FC = () => {
  getDatabase(process.env.NOTION_DATABASE_ID)

  return (
    <Layout pageTitle="blog">
      <div className="w-full h-full flex items-center justify-center">
        <p>This is a test page</p>
      </div>
    </Layout>
  )
}

export default about