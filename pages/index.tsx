import { FunctionComponent } from 'react'
import { SectionSplash } from '../components/index/SectionSplash'
import { Layout } from '../components/layout'

const index: FunctionComponent = () => {
  return (
    <Layout pageTitle="Beau Butner">
      <SectionSplash />
    </Layout>
  )
}

export default index