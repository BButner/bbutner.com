import { motion } from 'framer-motion'
import { FunctionComponent } from 'react'
import { mdiTriangle } from '@mdi/js'
import Icon from '@mdi/react'
import { SectionSplashSquares } from './SectionSplashSquares'

export const SectionSplash: FunctionComponent = () => {
  const nameArray: string[] = [...'Beau Butner']
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
        delayChildren: nameDelay * nameArray.length,
        staggerChildren: 0.2
      }
    }
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center relative overflow-hidden">
      <SectionSplashSquares />
      <div className="z-40 space-y-4 md:space-y-8">
        <motion.ul initial="hidden" animate="visible" variants={titleVariants}>
          <img className="w-32 h-32 md:w-52 md:h-52 rounded-full m-auto" src="/img/avatar_small.png" />
        </motion.ul>
        <motion.ul initial="hidden" animate="visible" variants={titleVariants} className="flex justify-center text-6xl md:text-8xl">
          {nameArray.map((char, index) => {
            return <motion.li key={index} variants={titleVariants}>{char === ' ' ? '\u00a0' : char}</motion.li>
          })}
        </motion.ul>
        <motion.ul initial="hidden" animate="visible" variants={positionVariants} className="flex justify-center space-x-2 md:space-x-8 text-xl text-center md:text-left md:text-5xl text-gray-800">
          <motion.li variants={positionVariants}>Senior Systems Analyst</motion.li>
          <motion.li variants={positionVariants} className="flex items-center justify-center text-purple-400"><Icon path={mdiTriangle} rotate={90} size={0.5}/></motion.li>
          <motion.li variants={positionVariants}>UI/UX Engineer</motion.li>
          <motion.li variants={positionVariants} className="flex items-center justify-center text-purple-400"><Icon path={mdiTriangle} rotate={90} size={0.5}/></motion.li>
          <motion.li variants={positionVariants}>Backend Developer</motion.li>
        </motion.ul>
      </div>
    </div>
  )
}
