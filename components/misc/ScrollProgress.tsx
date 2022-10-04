import { FunctionComponent } from 'react'
import { motion, useViewportScroll } from 'framer-motion'
import clsx from 'clsx'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'

export const ScrollProgress: FunctionComponent = () => {
  const { scrollYProgress } = useViewportScroll()

  const handleArrowUpClick = (): void => {
    window.scrollTo(0, 0)
  }

  const handleArrowDownClick = (): void => {
    window.scrollTo(0, document.body.scrollHeight)
  }

  const iconClassNames = clsx(
    'w-7 h-7 transition duration-200 transform hover:scale-125'
  )
  const buttonClassNames = clsx(
    'w-8 h-8 flex justify-center'
  )

  return (
    <div className="hidden md:fixed z-50 w-8 left-4 top-16" aria-hidden="true">
      <button onClick={handleArrowUpClick} className={buttonClassNames}>
        <ChevronUpIcon className={iconClassNames} />
      </button>
      <svg
        width="5"
        height="100"
        className="m-auto"
      >
        <motion.path
          className="stroke-current text-gray-400"          
          strokeWidth="8"
          stroke="current"
          d="M 0,0 L 0, 100"
          style={{
            pathLength: scrollYProgress
          }}
        />
      </svg>
      <button onClick={handleArrowDownClick} className={buttonClassNames}>
        <ChevronDownIcon className={iconClassNames} />
      </button>
    </div>
  )
}