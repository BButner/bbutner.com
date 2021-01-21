import React, { FunctionComponent } from 'react'
import { Meta } from './meta'
import { ScrollProgress } from './misc/ScrollProgress'
import { Navbar } from './navbar/Navbar'

type LayoutProps = {
  pageTitle: string;
}

export const Layout: FunctionComponent<LayoutProps> = ({ pageTitle, children }) => {
  return (
    <div>
      <Meta pageTitle={pageTitle} />
      <Navbar />
      {/* <ScrollProgress /> */}
      {children}
    </div>
  )
}