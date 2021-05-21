import dynamic from 'next/dynamic'

const Dynamic = ({ componentName }) => {
  const Component = dynamic(() => import('./post_specific/' + componentName))

  return Component
}

export default Dynamic