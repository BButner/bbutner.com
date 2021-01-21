import Icon from '@mdi/react'
import { mdiCheck } from '@mdi/js'
import { FunctionComponent, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { motionFadeInX } from '../../lib/util/GenericAnimations'
import { useIntersection } from 'react-use'

export const AboutEducation: FunctionComponent = () => {
  const educationRef = useRef(null)
  const THRESHOLD: number = 0.5
  const [animated, setAnimated] = useState<boolean>(false)

  const intersection = useIntersection(educationRef, {
    root: null,
    rootMargin: '0px',
    threshold: THRESHOLD
  })

  const educationVariants = motionFadeInX(-10, 0.05)

  return (
    <motion.ul
      ref={educationRef}
      variants={educationVariants}
      initial="hidden"
      animate={animated ? "visible" : (intersection && intersection.intersectionRatio > THRESHOLD ? "visible" : "hidden")}
      onAnimationComplete={intersection && intersection.intersectionRatio > THRESHOLD ? () => {setAnimated(true)} : () => {}}
    >
      <p>My education is as follows:</p>
      <motion.li variants={educationVariants} className="flex justify-between items-center text-2xl mb-4 mt-8 ml-6">
        <p className="flex items-center"><Icon path={mdiCheck} size={1.25} className="text-green-500 mr-4" />Danville Area Community College</p>
        <p>Associates in Applied Aciences</p>
        <p className="text-gray-500">2016-2018</p>
      </motion.li>
      <motion.li variants={educationVariants} className="flex justify-between items-center text-2xl ml-6">
        <p className="flex items-center"><Icon path={mdiCheck} size={1.25} className="text-green-500 mr-4" />Southern Illinois University - Carbondale</p>
        <p>Bachelors in Information Systems Technologies</p>
        <p className="text-gray-500">2018-2020</p>
      </motion.li>
    </motion.ul>
  )
}