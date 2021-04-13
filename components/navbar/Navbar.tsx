import { FunctionComponent, useState, useRef, useEffect, Fragment } from 'react'
import styles from './Navbar.module.scss'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ScrollProgress } from '../misc/ScrollProgress'
import { Dialog, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { IconGithub, IconLinkedIn, IconTwitter } from '../../lib/util/Icons'

export const Navbar: FunctionComponent = () => {
  const [navVisible, setNavVisible] = useState<boolean>(false)

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

  const handleBurgerClick = (): void => {
    console.log(navVisible)
    if (navVisible) {
      setNavVisible(false)
    } else {
      setNavVisible(true)
    }
  }

  return (
    <nav>
      <button
        onClick={(): void => setNavVisible(!navVisible)}
        className={clsx(
          "w-8 h-8 fixed mb-4 m-auto z-40 mt-4 ml-4 top-0 left-0",
          styles['hamburger-wrapper'],
          navVisible ? styles['hamburger-wrapper-open'] : ''
        )}
        aria-label="Open Navigation"
      >
        <div className={`h-1 w-8 ${navVisible ? 'bg-white' : 'bg-black'} rounded-full mb-2 m-auto`}></div>
        <div className={`h-1 w-8 ${navVisible ? 'bg-white' : 'bg-black'} rounded-full mb-2 m-auto`}></div>
        <div className={`h-1 w-8 ${navVisible ? 'bg-white' : 'bg-black'} rounded-full m-auto`}></div>
      </button>
      <ScrollProgress />
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
            <Transition.Child
              className="fixed top-0 left-0 w-64 h-screen bg-white shadow-2xl text-left text-3xl pt-16 pl-4 z-10"
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
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </nav>
  )
}
