import '../styles/global.sass'
import '../styles/prismjs.css'
import React, { useEffect } from 'react'
import { DARK_MODE_OPTION } from '../components/pageoptions/PageOptions'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    if (localStorage) {
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      const html: HTMLElement = document.documentElement

      console.log(e)

      if (e.matches) {
        localStorage.theme = DARK_MODE_OPTION.dark
        if (!html.classList.contains('dark')) html.classList.add('dark')
      } else {
        if (html.classList.contains('dark')) html.classList.remove('dark')
        localStorage.removeItem('theme')
      }
    })

    return function cleanup () {

    }
  }, [])

  return <Component {...pageProps} />
}
