import { Block } from '@notionhq/client/build/src/api-types'
import { FC } from 'react'
import { Text } from './Text'
import dynamic from 'next/dynamic'

type RenderBlockProps = {
  block: Block;
}

const getDynamicComponent = (name: string) => dynamic(() => import(`./post_specific/${name}`))

export const RenderBlock: FC<RenderBlockProps> = ({ block }) => {
  const { type, id } = block
  const value = block[type]
  const componentRegEx: RegExp = new RegExp(/<Component::(.*?)\/>/)

  // const plainText: string | null = value?.text[0]?.text?.content
  const plainText: string | null = value?.text?.length > 0 ? value?.text[0]?.text?.content : null

  if (componentRegEx.test(plainText)) {
    const matches: RegExpExecArray | null = componentRegEx.exec(plainText)
    const componentName: string | undefined = matches[1]

    if (componentName) {
      const Component = getDynamicComponent(componentName)
      return <Component />
    }
  }

  switch (type) {
    case 'paragraph':
      const plainText: string | null = value.text[0]?.text?.content

      if (componentRegEx.test(plainText)) {
        const matches: RegExpExecArray | null = componentRegEx.exec(plainText)
        const componentName: string | undefined = matches[1]

        if (componentName) {
          return <p>{componentName}</p>
        } else return <p>{`❌ Component not found: ${plainText}`}</p>
      } else return (<p><Text text={value.text} /></p>)
    case 'heading_1':
      return (<h1><Text text={value.text} /></h1>)
    case 'heading_2':
      return (<h2><Text text={value.text} /></h2>)
    case 'heading_3':
      return (<h3><Text text={value.text} /></h3>)
    case 'bulleted_list_item':
    case 'numbered_list_item':
      return (<li><Text text={value.text} /></li>)
    case 'to_do':
      return (
        <div>
          <label htmlFor={id}>
            <input type="checkbox" id={id} defaultChecked={value.checked} />{' '}
            <Text text={value.text} />
          </label>
        </div>
      )
    case 'toggle':
      return (
        <details>
          <summary><Text text={value.text} /></summary>
          It's a toggle!
        </details>
      )
    case 'child_page':
      return <p>{value.title}</p>
    default:
      return <p>{`❌ Unsupported block ${type === 'unsupported' ? 'unsupported by Notion API' : type}`}</p>
  }
}