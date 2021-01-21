import { FunctionComponent, useState, useRef, useEffect } from 'react'
import styles from './Navbar.module.scss'
import { motion } from 'framer-motion'
import Icon from '@mdi/react'
import { mdiGithub, mdiTwitter, mdiLinkedin } from '@mdi/js'
import Link from 'next/link'
import { ScrollProgress } from '../misc/ScrollProgress'

export const Navbar: FunctionComponent = () => {
  const [navVisible, setNavVisible] = useState<boolean>(false)
  const navBar = useRef(null)
  const burger = useRef(null)

  const navigationVariants = {
    closed: {
      x: '-120%'
    },
    open: {
      x: '0'
    }
  }

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
    if (navVisible) {
      removeListener()
      setNavVisible(false)
    } else {
      addListener()
      setNavVisible(true)
    }
  }

  const addListener = (): void => {
    window.addEventListener('click', handleClick)
  }

  const removeListener = (): void => {
    window.removeEventListener('click', handleClick)
  }

  const handleClick = (event: MouseEvent): void => {
    const clickedElement: Element = document.elementFromPoint(event.clientX, event.clientY)

    if (clickedElement && navBar.current && burger.current && !navBar.current.contains(clickedElement) && !burger.current.contains(clickedElement)) {
      setNavVisible(false)
    }
  }

  useEffect(() => {
    return function cleanup () {
      document.removeEventListener('click', handleClick)
    }
  }, [])

  return (
    <div className={`fixed top-0 left-0 z-50`}>
      <motion.div
        className={`w-8 h-8 ${styles['hamburger-wrapper']} ${navVisible ? styles['hamburger-wrapper-open'] : ''} absolute mb-4 m-auto z-50 mt-4 ml-4`}
        whileTap={{ scale: 0.9 }}
        onClick={handleBurgerClick}
        ref={burger}
      >
        <div className={`h-1 w-8 ${navVisible ? 'bg-white' : 'bg-black'} rounded-full mb-2 m-auto`}></div>
        <div className={`h-1 w-8 ${navVisible ? 'bg-white' : 'bg-black'} rounded-full mb-2 m-auto`}></div>
        <div className={`h-1 w-8 ${navVisible ? 'bg-white' : 'bg-black'} rounded-full m-auto`}></div>
      </motion.div>
      <motion.div
        className="w-64 h-screen top-0 bg-white shadow-2xl absolute left-0 text-left text-3xl pt-16 pl-4 z-10"
        initial="closed"
        animate={navVisible ? "open" : "closed"}
        variants={navigationVariants}
        transition={{ ease: "easeIn", duration: 0.25 }}
        ref={navBar}
      >
        <motion.ul variants={linkVariants} animate={navVisible ? "visible" : "hidden"} className={`space-y-10 ml-1 border-l-2 border-gray-300 pl-10 ${styles['nav-links']}`}>
          <motion.li variants={linkVariants}>
            <Link href="/"><a><p>Home</p></a></Link>
          </motion.li>
          {/* <motion.li variants={linkVariants}>
            <Link href="/projects"><a><p>Projects</p></a></Link>
          </motion.li> */}
          <motion.li variants={linkVariants}>
            <Link href="/about"><a><p>About</p></a></Link>
          </motion.li>
          <div className="text-lg space-y-10">
            <motion.li variants={linkVariants} whileTap={{ scale: 0.9 }}>
              <a href="https://github.com/bbutner"><p className="flex justify-start items-center"><Icon path={mdiGithub} size={1} className="mr-2"/>GitHub</p></a>
            </motion.li>
            <motion.li variants={linkVariants} whileTap={{ scale: 0.9 }}>
              <a href="https://www.linkedin.com/in/beau-butner-1491b7172/"><p className="flex justify-start items-center text-linkedin"><Icon path={mdiLinkedin} size={1} className="text-linkedin mr-2"/>LinkedIn</p></a>
            </motion.li>
            <motion.li variants={linkVariants} className="text-twitter" whileTap={{ scale: 0.9 }}>
              <a href="https://twitter.com/beaubutner"><p className="flex justify-start items-center"><Icon path={mdiTwitter} size={1} className="text-twitter mr-2"/>Twitter</p></a>
            </motion.li>
          </div>
        </motion.ul>
      </motion.div>
      <ScrollProgress />
    </div>
  )
}