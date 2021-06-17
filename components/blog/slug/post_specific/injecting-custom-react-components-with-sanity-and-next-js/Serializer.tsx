import { Code } from 'components/blog/misc/Code'
import { FC } from 'react'

const Serializer: FC = () => {
  return (
    <Code>
      <code className="language-typescript text-sm">{`type PostBodyProps = {
  post: Post;
}

let slug: string = ''

const getDynamicComponent = (name: string) => dynamic(() => import(\`./post_specific/\${slug}/\${name}\`).catch(err => () => <p>❌ Component not found.</p>), { ssr: false }) // Look in the /post_specific/$slug directory for the component to load on render

const componentRegEx: RegExp = new RegExp(/<Component::(.*?)\\/>/) // RegEx to search for <Component::Name />

const BlockRenderer = (props) => {
  const { style = 'normal'} = props.node
  const componentChildren = props.children.filter(child => style === 'normal' && componentRegEx.test(child)) // Check for any components in the block child

  if (componentChildren.length > 0) { // If we detected components
    return <>{componentChildren.map((child, index) => {
      const componentName: string | null = componentRegEx.exec(child)[1].trim() // Get the name from <Component::Name />
      
      if (componentName) {
        const InjectedComponent = getDynamicComponent(componentName) // Import the dynamic component by name
        return <InjectedComponent key={index} /> // Return the dynamically loaded component
      } else return <p key={index}>❌ Component name not found</p> // Component name was not found
    })}</>
  } else return BlockContent.defaultSerializers.types.block(props) // If its not a component, we fallback to the default serializer
}

export const PostBody: FC<PostBodyProps> = ({ post }) => {
  slug = post.slug // Set the slug variable so the getDynamicComponent method knows which directory to look in

  return <div className="px-10"><BlockContent blocks={post.body} serializers={{ types: { block: BlockRenderer } }} className={styles.markdown} /></div> // Render BlockContent and pass in our custom BlockRenderer serializer
}`}</code>
    </Code>
  )
}

export default Serializer