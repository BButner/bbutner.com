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

type PostPreviewProps = {
  post: Post;
  hero?: boolean;
}

export const PostPreview: FC<PostPreviewProps> = ({ post, hero }) => {
  const IMAGE_WIDTH: number = hero ? 1400 : 800
  const IMAGE_HEIGHT_DEFAULT: number = 350
  const [imageHeight, setImageHeight] = useState<number>(IMAGE_HEIGHT_DEFAULT)

  const handleResize = (): void => {
    if (window.innerWidth <= 768) {
      setImageHeight(hero ? 500 : 400)
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
    <div
      className={clsx(
        'relative backdrop-filter backdrop-blur bg-white dark:bg-gray-800 bg-opacity-50 hover:bg-opacity-60',
        styles.hero,
        crosshairStyles['crosshair-wrapper']
      )}
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
              <p className="text-xl text-gray-500"><Date dateString={post.date} /></p>
            </div>
            {/* Post Author */}
            <div className="flex items-center space-x-4">
              <Image
                width={64}
                height={64}
                src={post.author.picture}
                className="rounded-full"
                
              />
              <h3 className="text-2xl">{post.author.name}</h3>
            </div>
          </div>
        </a>
      </Link>

      <Crosshairs />
    </div>
  )
}