import { FunctionComponent } from 'react'
import Icon from '@mdi/react'
import { mdiChevronUp, mdiChevronDown } from '@mdi/js'
import { motion, useCycle, useAnimation, useViewportScroll } from 'framer-motion'
import styles from './ScrollProgress.module.scss'

export const ScrollProgress: FunctionComponent = () => {
  const { scrollYProgress } = useViewportScroll()
  const arrowUpControls = useAnimation()
  const arrowDownControls = useAnimation()
  const [x, cycleX] = useCycle(0, -10, 10, -10, 10)

  const handleArrowUpClick = (): void => {
    window.scrollTo(0, 0)
  }

  const handleArrowDownClick = (): void => {
    window.scrollTo(0, document.body.scrollHeight)
  }

  return (
    <div className={`${styles['scroll-progress-wrapper']} w-8 z-50 bg-white rounded-3xl shadow-3xl ml-4 mt-20`}>
      <motion.div whileTap={{ scale: 0.9 }} onClick={handleArrowUpClick}>
        <Icon path={mdiChevronUp} size={1.25} className={`${styles['nav-arrow']} w-8`} />
      </motion.div>
      <div className={`${styles['scroll-progress']}`}>
        <svg className="w-8">
          <motion.path
            className="stroke-current text-purple-400"          
            strokeWidth="3"
            stroke="black"
            d="M 10,0 L 10, 100"
            style={{
              pathLength: scrollYProgress
            }}
          />
        </svg>
      </div>
      <motion.div whileTap={{ scale: 0.9 }} onClick={handleArrowDownClick}>
        <Icon path={mdiChevronDown} size={1.25} className={`${styles['nav-arrow']}`} />
      </motion.div>
    </div>
  )
}