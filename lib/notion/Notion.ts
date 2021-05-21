import { Client } from '@notionhq/client'
import { BlocksChildrenListResponse, DatabasesQueryResponse, PagesRetrieveResponse } from '@notionhq/client/build/src/api-endpoints'
import { Block, Page } from '@notionhq/client/build/src/api-types'

const notion = new Client({ auth: process.env.NOTION_TOKEN })

export const getDatabase = async (databaseId: string): Promise<Page[]> => {
  const response: DatabasesQueryResponse = await notion.databases.query({ database_id: databaseId })

  // console.log(response.results)

  // console.log(response.results[0].properties.Name.title[0].plain_text)

  return response.results
}

export const getPage = async (pageId: string): Promise<PagesRetrieveResponse> => {
  const response: PagesRetrieveResponse = await notion.pages.retrieve({ page_id: pageId })
  return response
}

export const getBlocks = async (blockId: string): Promise<Block[]> => {
  const response = await notion.blocks.children.list({
    block_id: blockId,
    page_size: 50
  })

  return response.results
}