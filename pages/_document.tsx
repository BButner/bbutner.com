import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class extends Document {
  render () {
    return (
      <Html lang="en">
        <Head />
        <body className="dark:bg-gray-900 dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}