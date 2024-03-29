import React, { FunctionComponent } from 'react'
import { Meta } from './meta'
import { Navbar } from './navbar/Navbar'

type LayoutProps = {
  pageTitle: string;
  children: React.ReactNode;
}

export const Layout: FunctionComponent<LayoutProps> = ({ pageTitle, children }) => {
  return (
    <div>
      <Meta pageTitle={pageTitle} />
      <Navbar />
      {children}
    </div>
  )
}