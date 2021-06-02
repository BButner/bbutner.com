import { Post } from 'lib/blog/model/Post'
import { imageBuilder } from 'lib/blog/sanity'
import { FC, useEffect, useState } from 'react'
import { Date } from './Date'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import styles from './HeroPost.module.sass'
import { Crosshairs } from './Crosshairs'
import crosshairStyles from './Crosshairs.module.sass'
import { PostPreview } from './PostPreview'

type HeroPostProps = {
  post: Post;
}

export const HeroPost: FC<HeroPostProps> = ({ post }) => {
  const IMAGE_WIDTH: number = 1400
  const IMAGE_HEIGHT_DEFAULT: number = 350
  const [imageHeight, setImageHeight] = useState<number>(IMAGE_HEIGHT_DEFAULT)

  const handleResize = (): void => {
    if (window.innerWidth <= 768) {
      setImageHeight(500)
    } else {
      setImageHeight(IMAGE_HEIGHT_DEFAULT)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    if (window.innerWidth <= 768) handleResize()

    return function cleanup (): void {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <PostPreview post={post} hero />
      </motion.div>
    </section>
  )
}