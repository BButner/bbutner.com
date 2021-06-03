import { FC, useEffect } from 'react'
import { Meta } from './Meta'
import { Footer } from './Footer'
import { BGSquare } from './BGSquare'
import { Navbar } from 'components/navbar/Navbar'

type LayoutProps = {
  preview: any;
}

export const Layout: FC<LayoutProps> = ({ preview, children }) => {
  return (
    <>
      <Meta />
      <BGSquare />
      <Navbar />
      <div className="min-h-screen relative">
        <div className="w-full overflow-hidden absolute top-0 left-0" style={{ minHeight: '100%' }}>
          
        </div>
        <main className="relative">
            {children}
        </main>
      </div>
      <Footer />
    </>
  )
}