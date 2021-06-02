import { FunctionComponent, useState, useRef, useEffect, Fragment } from 'react'
import styles from './Navbar.module.scss'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ScrollProgress } from '../misc/ScrollProgress'
import { Dialog, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { IconGithub, IconLinkedIn, IconTwitter } from '../../lib/util/Icons'
import { PageOptions } from '../pageoptions/PageOptions'

export const Navbar: FunctionComponent = () => {
  const [navVisible, setNavVisible] = useState<boolean>(false)
  const [scrollVisible, setScrollVisible] = useState<boolean>(false)

  const linkVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.25,
        staggerChildren: 0.05
      }
    }
  }

  useEffect(() => {
    if (document.body.scrollHeight > window.innerHeight) {
      setScrollVisible(true)
    }
  }, [])

  return (
    <nav>
      <button
        onClick={(): void => setNavVisible(!navVisible)}
        className={clsx(
          "w-8 h-8 fixed mb-4 m-auto z-40 bg-white bg-opacity-70 rounded backdrop-filter backdrop-blur mt-1 ml-1 md:mt-4 md:ml-4 md:backdrop-filter-none md:bg-transparent top-0 left-0",
          styles['hamburger-wrapper'],
          navVisible ? styles['hamburger-wrapper-open'] : ''
        )}
        aria-label="Open Navigation"
      >
        <div className={`h-1 w-8 rounded-full mb-2 m-auto bg-black dark:bg-gray-200`}></div>
        <div className={`h-1 w-8 rounded-full mb-2 m-auto bg-black dark:bg-gray-200`}></div>
        <div className={`h-1 w-8 rounded-full m-auto bg-black dark:bg-gray-200`}></div>
      </button>
      {scrollVisible && <ScrollProgress />}
      <Transition
        show={navVisible}
        as={Fragment}
        unmount
      >
        <Dialog
          static
          open={navVisible}
          onClose={(): void => setNavVisible(false)}
          aria-label="Navigation Popup"
        >
          <div className="fixed z-40 overflow-hidden">
            <Dialog.Overlay className="fixed inset-0 w-screen h-full opacity-90">
              <Transition.Child
                className="fixed w-screen h-screen inset-0 bg-gray-200 dark:bg-gray-900"
                enter="transition duration-200"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              />
            </Dialog.Overlay>
            <Transition.Child
              className="fixed top-0 left-0 w-64 h-full bg-white dark:bg-gray-900 shadow-2xl text-left text-3xl pt-16 pl-4 z-10 flex flex-col transition duration-200"
              enter="transform transition duration-200"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition duration-200"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <nav>
                <button
                  onClick={(): void => setNavVisible(!navVisible)}
                  className={clsx(
                    "w-8 h-8 fixed mb-4 m-auto z-50 mt-4 ml-4 top-0 left-0",
                    styles['hamburger-wrapper'],
                    navVisible ? styles['hamburger-wrapper-open'] : ''
                  )}
                  aria-label="Close Navigation"
                >
                  <div className={`h-1 w-8 ${navVisible ? 'bg-white' : 'bg-black'} rounded-full mb-2 m-auto`}></div>
                  <div className={`h-1 w-8 ${navVisible ? 'bg-white' : 'bg-black'} rounded-full mb-2 m-auto`}></div>
                  <div className={`h-1 w-8 ${navVisible ? 'bg-white' : 'bg-black'} rounded-full m-auto`}></div>
                </button>
                <motion.ul variants={linkVariants} animate={navVisible ? "visible" : "hidden"} className={`space-y-10 ml-1 border-l-2 border-gray-300 pl-10 ${styles['nav-links']}`}>
                  <motion.li variants={linkVariants}>
                    <Link href="/"><a><p>Home</p></a></Link>
                  </motion.li>
                  <motion.li variants={linkVariants}>
                    <Link href="/about"><a><p>About</p></a></Link>
                  </motion.li>
                  <motion.li variants={linkVariants}>
                    <Link href="/blog"><a><p>Blog</p></a></Link>
                  </motion.li>
                  <motion.li variants={linkVariants} whileTap={{ scale: 0.9 }}>
                    <a href="https://github.com/bbutner"><p className="flex justify-start items-center text-lg">
                      <svg
                        viewBox="0 0 24 24"
                        className="w-6 h-6 fill-current mr-2"
                        aria-hidden="true"
                      >
                        <path d={IconGithub} />
                      </svg>
                      GitHub</p></a>
                  </motion.li>
                  <motion.li variants={linkVariants} whileTap={{ scale: 0.9 }}>
                    <a href="https://www.linkedin.com/in/beau-butner-1491b7172/"><p className="flex justify-start items-center text-linkedin text-lg">
                      <svg
                        viewBox="0 0 24 24"
                        className="w-6 h-6 fill-current mr-2"
                        aria-hidden="true"
                      >
                        <path d={IconLinkedIn} />
                      </svg>
                      LinkedIn</p></a>
                  </motion.li>
                  <motion.li variants={linkVariants} className="text-twitter" whileTap={{ scale: 0.9 }}>
                    <a href="https://twitter.com/beaubutner"><p className="flex justify-start items-center text-lg">
                      <svg
                        viewBox="0 0 24 24"
                        className="w-6 h-6 fill-current mr-2"
                        aria-hidden="true"
                      >
                        <path d={IconTwitter} />
                      </svg>
                      Twitter</p></a>
                  </motion.li>
                </motion.ul>
              </nav>
              <div className="flex-1"></div>
              <PageOptions />
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </nav>
  )
}
