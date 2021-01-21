import Head from 'next/head'
import { FunctionComponent } from 'react'

type MetaProps = {
  pageTitle: string;
}

export const Meta: FunctionComponent<MetaProps> = ({ pageTitle }) => {
  return (
    <Head>
      <meta
        name="Beau Butner"
        content="Personal Portfolio Website" />
        <title>{pageTitle}</title>
    </Head>
  )
}