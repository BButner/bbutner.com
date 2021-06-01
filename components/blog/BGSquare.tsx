import { FC, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'

export const BGSquare: FC = () => {
  const DEGREES_MIN: number = 20
  const DEGREES_MAX: number = 70
  const [generatedClass, setGeneratedClass] = useState<string>('')

  useEffect(() => {
    setGeneratedClass(generateColor())
  }, [])

  const generateDegrees = (): string => {
    return `${
      Math.ceil(Math.random() * (DEGREES_MAX - DEGREES_MIN) + DEGREES_MIN)
    }deg`
  }

  const generateColor = (): string => {
    const colorValues: string[] = [
      'from-blue-300 to-green-300',
      'from-pink-300 to-purple-300',
      'from-pink-300 to-orange-300',
      'from-red-300 to-blue-300',
      'from-purple-300 to-blue-300'
    ]

    const number = Math.floor(Math.random() * (colorValues.length))

    return colorValues[
      number
    ]
  }

  return <motion.div
          className={clsx(
            'absolute w-1/2 h-screen bg-gradient-to-br opacity-20 -top-1/2',
            generatedClass
          )}
          initial={{ x: '-100%' }}
          animate={{ x: '-50%', rotate: generateDegrees() }}
        />
}