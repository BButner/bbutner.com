import { RichTextText } from '@notionhq/client/build/src/api-types'
import clsx from 'clsx'
import { FC } from 'react'

// Credit to https://samuelkraft.com/blog/building-a-notion-blog-with-public-api
type TextProps = {
  text: RichTextText[];
}

export const Text: FC<TextProps> = ({ text }) => {
  if(!text) return null

  return (
    <>
      {text.map((value) => {
        const {
          annotations: { bold, code, italic, strikethrough, underline },
          text,
        } = value

        return (
          <span
            className={clsx(
              bold ? 'bold' : '',
              code ? 'code' : '',
              italic ? 'italic' : '',
              strikethrough ? 'line-through' : '',
              underline ? 'underline' : ''
            )}
          >
            {text.link ? <a href={text.link.url}>{text.content}</a> : text.content}
          </span>
        )
      })}
    </>
  )
}