import { mdiTimer, mdiFire, mdiPencil, mdiMagnify, mdiAccountMultiple, mdiMicrophone, mdiBrain } from '@mdi/js'
import { FunctionComponent, useRef, useState } from 'react'
import { motionFadeInX } from '../../lib/util/GenericAnimations'
import { AboutAttributeIcon } from './AboutAttributeIcon'
import { useIntersection } from 'react-use'
import { motion } from 'framer-motion'

export const AboutAttributes: FunctionComponent = () => {
  interface Attribute {
    description: string;
    icon: string;
  }

  const attributes: Attribute[] = [
    { description: "Quick and Efficient", icon: mdiTimer },
    { description: "Performant", icon: mdiFire },
    { description: "Technical Writing", icon: mdiPencil },
    { description: "Attention to Detail", icon: mdiMagnify },
    { description: "Team Collaboration", icon: mdiAccountMultiple },
    { description: "Oral and Written Communications", icon: mdiMicrophone },
    { description: "Critical Thinking and Analysis", icon: mdiBrain }
  ]

  const attributeRef = useRef(null)
  const THRESHOLD: number = 0.5
  const [animated, setAnimated] = useState<boolean>(false)

  const intersection = useIntersection(attributeRef, {
    root: null,
    rootMargin: '0px',
    threshold: THRESHOLD
  })

  const attributeVariants = motionFadeInX(-10, 0.05)
  
  return (
    <div className="" ref={attributeRef}>
      <motion.ul
        className="space-y-4"
        initial="hidden"
        animate="visible"
        variants={attributeVariants}
        onAnimationComplete={intersection && intersection.intersectionRatio > THRESHOLD ? () => {setAnimated(true)} : () => {}}
      >
        <motion.li variants={attributeVariants} className="mb-8"><p>In my work, I take pride in the following attributes:</p></motion.li>
        {attributes.map(attr => {
          return <motion.li className="flex items-center text-2xl space-x-4 ml-6" key={attr.icon} variants={attributeVariants}>
            <AboutAttributeIcon icon={attr.icon} />
            <p>{attr.description}</p>
          </motion.li>
        })}
      </motion.ul>
    </div>
  )
}