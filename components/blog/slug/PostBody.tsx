import { FC } from 'react'
import styles from './PostBodyMarkdown.module.sass'
import BlockContent from '@sanity/block-content-to-react'
import dynamic from 'next/dynamic'
import { Post } from 'lib/blog/model/Post'

type PostBodyProps = {
  post: Post;
}

let slug: string = ''

const getDynamicComponent = (name: string) => dynamic(() => import(`./post_specific/${slug}/${name}`).catch(err => () => <p>❌ Component not found.</p>), { ssr: false })

const componentRegEx: RegExp = new RegExp(/<Component::(.*?)\/>/)

const BlockRenderer = (props) => {
  const { style = 'normal'} = props.node
  const componentChildren = props.children.filter(child => style === 'normal' && componentRegEx.test(child))

  if (componentChildren.length > 0) {
    return <>{componentChildren.map((child, index) => {
      const componentName: string | null = componentRegEx.exec(child)[1].trim()
      
      if (componentName) {
        const InjectedComponent = getDynamicComponent(componentName)
        return <InjectedComponent key={index} />
      } else return <p key={index}>❌ Component name not found</p>
    })}</>
  } else if (style === 'blockquote') {
    return <blockquote className="dark:bg-gray-700">{props.children.join('')}</blockquote>
  } else return BlockContent.defaultSerializers.types.block(props)
}

export const PostBody: FC<PostBodyProps> = ({ post }) => {
  slug = post.slug

  return <div className="px-10 text-gray-900 dark:text-gray-200"><BlockContent blocks={post.body} serializers={{ types: { block: BlockRenderer } }} className={styles.markdown} /></div>
}