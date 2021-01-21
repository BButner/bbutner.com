import { motion } from 'framer-motion'
import { FunctionComponent, useEffect, useState } from 'react'

export const SectionSplashSquares: FunctionComponent = () => {
  const DEFAULT_TOP_TOP: string = '-50%'
  const DEFAULT_TOP_LEFT: string = '-50%'
  const DEFAULT_BOTTOM_TOP: string = '20%'
  const DEFAULT_BOTTOM_LEFT: string = '75%'
  const MOBILE_TOP_TOP: string = '-75%'
  const MOBILE_TOP_LEFT: string = '-75%'
  const MOBILE_BOTTOM_TOP: string = '50%'
  const MOBILE_BOTTOM_LEFT: string = '50%'

  const [rectTopTop, setRectTopTop] = useState<string>(DEFAULT_TOP_TOP)
  const [rectTopLeft, setRectTopLeft] = useState<string>(DEFAULT_TOP_LEFT)
  const [rectBottomTop, setRectBottomTop] = useState<string>(DEFAULT_BOTTOM_TOP)
  const [rectBottomLeft, setRectBottomLeft] = useState<string>(DEFAULT_BOTTOM_LEFT)

  const handleResize = (): void => {
    if (window.innerWidth <= 640) {
      setRectTopTop(MOBILE_TOP_TOP)
      setRectTopLeft(MOBILE_TOP_LEFT)
      setRectBottomTop(MOBILE_BOTTOM_TOP)
      setRectBottomLeft(MOBILE_BOTTOM_LEFT)
    } else {
      setRectTopTop(DEFAULT_TOP_TOP)
      setRectTopLeft(DEFAULT_TOP_LEFT)
      setRectBottomTop(DEFAULT_BOTTOM_TOP)
      setRectBottomLeft(DEFAULT_BOTTOM_LEFT)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    handleResize()

    return function cleanup (): void {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const topRectangleVariants = {
    hidden: {
      top: '-100%',
      left: '-100%',
      rotate: -90
    },
    visible: {
      top: rectTopTop,
      left: rectTopLeft,
      rotate: -45
    }
  }

  const bottomRectangleVariants = {
    hidden: {
      top: '100%',
      left: '100%',
      rotate: 90
    },
    visible: {
      top: rectBottomTop,
      left: rectBottomLeft,
      rotate: 45
    }
  }

  return (
    <>
      <motion.div initial="hidden" animate="visible" variants={topRectangleVariants} className="absolute w-screen h-screen bg-gradient-to-br from-blue-400 to-green-400 opacity-25" />
      <motion.div initial="hidden" animate="visible" variants={bottomRectangleVariants} className="absolute w-screen h-screen bg-gradient-to-br from-red-400 to-purple-400 opacity-25" />
    </>
  )
}