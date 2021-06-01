import { FC, useEffect } from 'react'
import Prism from 'prismjs'
require('prismjs/components/prism-typescript')

export const Code: FC = ({ children }) => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <div className="Code">
      <pre>
        {children}
      </pre>
    </div>
  )
}