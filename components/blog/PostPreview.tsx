import { Post } from 'lib/blog/model/Post'
import { FC, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { imageBuilder } from 'lib/blog/sanity'
import { Date } from './Date'
import clsx from 'clsx'
import styles from './HeroPost.module.sass'
import { Crosshairs } from './Crosshairs'
import crosshairStyles from './Crosshairs.module.sass'
import { motion } from 'framer-motion'

type PostPreviewProps = {
  post: Post;
}

export const PostPreview: FC<PostPreviewProps> = ({ post }) => {
  const IMAGE_WIDTH: number = 800
  const IMAGE_HEIGHT_DEFAULT: number = 350
  const [imageHeight, setImageHeight] = useState<number>(IMAGE_HEIGHT_DEFAULT)

  const handleResize = (): void => {
    if (window.innerWidth <= 768) {
      setImageHeight(400)
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
    <motion.div
      className={clsx(
        'backdrop-filter backdrop-blur bg-white bg-opacity-50 hover:bg-opacity-80',
        styles.hero,
        crosshairStyles['crosshair-wrapper']
      )}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Link as={`/blog/posts/${post.slug}`} href="/blog/posts/[slug]">
        <a aria-label={post.title}>
          <Image
            width={IMAGE_WIDTH}
            height={imageHeight}
            src={imageBuilder(post.coverImage).width(IMAGE_WIDTH).height(imageHeight).url()}
            layout="responsive"
            quality={100}
            alt={`Cover image for ${post.title}`}
          />
          <div className="p-4 flex items-center justify-between">
            {/* Post Information */}
            <div className="space-y-4">
              <h2 className="text-2xl tracking-tighter">
                {post.title}
              </h2>
              <p className="text-lg text-gray-400"><Date dateString={post.date} /></p>
            </div>
            {/* Post Author */}
            <div className="flex items-center space-x-4">
              <Image
                width={40}
                height={40}
                src={post.author.picture}
                className="rounded-full"
                
              />
              <h3 className="text-xl">{post.author.name}</h3>
            </div>
          </div>
        </a>
      </Link>

      <Crosshairs />
    </motion.div>
  )
}