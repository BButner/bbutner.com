import { FunctionComponent, useRef, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { motionFadeInX } from '../../lib/util/GenericAnimations'
import { useIntersection } from 'react-use'
import devTools from '../../lib/data/devtools.json'

export interface DevTool {
  title: string;
  img: string;
}

export const AboutDevTools: FunctionComponent = () => {
  const devToolsRef = useRef(null)
  const THRESHOLD: number = 0.1
  const [animated, setAnimated] = useState<boolean>(false)

  const intersection = useIntersection(devToolsRef, {
    root: null,
    rootMargin: '0px',
    threshold: THRESHOLD
  })

  const devToolsVariants = motionFadeInX(-10, 0.05)

  return (
    <motion.ul
      ref={devToolsRef}
      variants={devToolsVariants}
      initial="hidden"
      animate={animated ? "visible" : (intersection && intersection.intersectionRatio > THRESHOLD ? "visible" : "hidden")}
      onAnimationComplete={intersection && intersection.intersectionRatio > THRESHOLD ? () => {setAnimated(true)} : () => {}}
      className="space-y-4"
    >
      <motion.li variants={devToolsVariants} className="mb-8"><p>These are the development tools that I regularly use:</p></motion.li>
      {devTools.devTools.map(tool => {
        return <motion.li className="text-xl md:text-2xl flex space-x-4 items-center ml-6" key={tool.title} variants={devToolsVariants}>
          <Image src={tool.img} height={32} width={32} alt={`Icon for ${tool.title}`} />
          <p>{tool.title}</p>
        </motion.li>
      })}
    </motion.ul>
  )
}