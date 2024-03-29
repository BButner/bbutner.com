import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { FunctionComponent } from 'react'
import { SectionSplash } from '../components/index/SectionSplash'
import { Layout } from '../components/layout'

const Index: FunctionComponent = () => {
  const router = useRouter()

  return (
    <Layout pageTitle="Beau Butner">
      <NextSeo
        title="BButner - Portfolio"
        description="My personal portfolio website."
        openGraph={{
          url: router.asPath,
          type: 'website',
          title: 'Beau Butner - Portfolio',
          description: 'My personal portfolio website.',
          locale: 'en_US',
          images: [
            {
              url: '/img/avatar_small.png',
              width: 1200,
              height: 630,
              alt: 'Beau Butner'
            }
          ],
        }}
        twitter={{
          handle: '@BeauButner',
          site: '@bbutner.com',
          cardType: 'summary_large_image',
        }}
      />
      <SectionSplash />
    </Layout>
  )
}

export default Index