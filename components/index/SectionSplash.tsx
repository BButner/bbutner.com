import { motion } from 'framer-motion'
import { FunctionComponent } from 'react'
import { SectionSplashSquares } from './SectionSplashSquares'
import { LightningBoltIcon } from '@heroicons/react/solid'
import styles from './SectionSplash.module.sass'
import Image from 'next/image'

export const SectionSplash: FunctionComponent = () => {
  const nameDelay: number = 0.07

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: nameDelay
      }
    }
  }

  const positionVariants = {
    hidden: {
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: nameDelay + 0.3,
        staggerChildren: 0.2
      }
    }
  }

  return (
    <main className="w-screen h-screen flex items-center justify-center relative overflow-hidden">
      <SectionSplashSquares />
      <div className="z-40 space-y-4 md:space-y-8">
        <div className="flex justify-center">
          <Image
            className="rounded-full m-auto block"
            src="/img/avatar_small.png"
            alt="Beau Butner Avatar"
            width={150}
            height={150}
          />
        </div>
        <motion.div className="flex justify-center text-center text-4xl md:text-8xl dark:text-gray-100" variants={titleVariants}>
          <div className={styles['emoji-wave']} aria-hidden="true">👋</div>
          <h1 className="text-4xl md:text-8xl"><span aria-hidden="true">, </span>I&apos;m Beau Butner</h1>
        </motion.div>
        <motion.ul initial="hidden" animate="visible" variants={positionVariants} className="flex justify-center items-center space-x-2 md:space-x-8 text-xl text-center md:text-5xl text-gray-800 dark:text-gray-300">
          <motion.li variants={positionVariants}>Software Engineer</motion.li>
          <motion.li variants={positionVariants} className="flex items-center justify-center text-yellow-400"><LightningBoltIcon className="w-6 h-6" /></motion.li>
          <motion.li variants={positionVariants}>UI/UX Engineer</motion.li>
          <motion.li variants={positionVariants} className="flex items-center justify-center text-yellow-400"><LightningBoltIcon className="w-6 h-6" /></motion.li>
          <motion.li variants={positionVariants}>Backend Developer</motion.li>
        </motion.ul>
      </div>
    </main>
  )
}
