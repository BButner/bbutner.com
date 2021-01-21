import { FunctionComponent, useRef, useState } from 'react'
import Image from 'next/image'
import { useIntersection } from 'react-use'
import { motion } from 'framer-motion'
import { motionFadeInX } from '../../lib/util/GenericAnimations'
import technologies from '../../lib/data/technologies.json'

export interface Technology {
  title: string;
  img: string;
}

export const AboutTechnologies: FunctionComponent = () => {
  const technologyRef = useRef(null)
  const THRESHOLD: number = 0.5
  const [animated, setAnimated] = useState<boolean>(false)

  const intersection = useIntersection(technologyRef, {
    root: null,
    rootMargin: '0px',
    threshold: THRESHOLD
  })

  const techVariants = motionFadeInX(-10, 0.05)

  return (
    <div ref={technologyRef}>
      <motion.ul
        className="space-y-4"
        variants={techVariants}
        initial="hidden"
        animate={animated ? "visible" : (intersection && intersection.intersectionRatio > THRESHOLD ? "visible" : "hidden")}
        onAnimationComplete={intersection && intersection.intersectionRatio > THRESHOLD ? () => {setAnimated(true)} : () => {}}
      >
        <motion.li variants={techVariants} className="mb-8"><p>These are the development technologies that I am familiar with:</p></motion.li>
        {technologies.technologies.map((tech, index) => {
          return <motion.li key={tech.title} className="text-xl md:text-2xl flex space-x-4 items-center ml-6" variants={techVariants}>
            <Image src={tech.img} height={32} width={32} />
            <p>{tech.title}</p>
          </motion.li>
        })}
      </motion.ul>
    </div>
  )
}

