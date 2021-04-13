// import { mdiTimer, mdiFire, mdiPencil, mdiMagnify, mdiAccountMultiple, mdiMicrophone, mdiBrain } from '@mdi/js'
import { ClockIcon, FireIcon, PencilIcon, SearchIcon, UserGroupIcon, MicrophoneIcon, ChipIcon } from '@heroicons/react/outline'
import { FunctionComponent, useRef, useState } from 'react'
import { motionFadeInX } from '../../lib/util/GenericAnimations'
import { AboutAttributeIcon } from './AboutAttributeIcon'
import { useIntersection } from 'react-use'
import { motion } from 'framer-motion'

export const AboutAttributes: FunctionComponent = () => {
  interface Attribute {
    description: string;
    icon: React.FC;
  }

  const iconClass: string = "fill-white w-6 h-6"
  const Clock: React.FC = () => <ClockIcon className={iconClass} />
  const Fire: React.FC = () => <FireIcon className={iconClass} />
  const Pencil: React.FC = () => <PencilIcon className={iconClass} />
  const Search: React.FC = () => <SearchIcon className={iconClass} />
  const UserGroup: React.FC = () => <UserGroupIcon className={iconClass} />
  const Microphone: React.FC = () => <MicrophoneIcon className={iconClass} />
  const Chip: React.FC = () => <ChipIcon className={iconClass} />

  const attributes: Attribute[] = [
    { description: "Quick and Efficient", icon: Clock },
    { description: "Performant", icon: Fire },
    { description: "Technical Writing", icon: Pencil },
    { description: "Attention to Detail", icon: Search },
    { description: "Team Collaboration", icon: UserGroup },
    { description: "Oral and Written Communications", icon: Microphone },
    { description: "Critical Thinking and Analysis", icon: Chip }
  ]

  const attributeRef = useRef(null)
  const THRESHOLD: number = 0.1
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
          return <motion.li className="flex items-center md:justify-start text-xl md:text-2xl space-x-4 md:ml-6 text-left" key={attr.description} variants={attributeVariants}>
            <AboutAttributeIcon Icon={attr.icon} />
            <p>{attr.description}</p>
          </motion.li>
        })}
      </motion.ul>
    </div>
  )
}