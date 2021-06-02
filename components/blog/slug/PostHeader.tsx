import { FC, useEffect, useState } from 'react'
import { ImageBlur } from 'components/blog/misc/ImageBlur'
import { Date } from '../Date'
import { Post } from 'lib/blog/model/Post'

type PostHeaderProps = {
  post: Post;
}

export const PostHeader: FC<PostHeaderProps> = ({ post }) => {
  const IMAGE_HEIGHT_DEFAULT: number = 350
  const [imageHeight, setImageHeight] = useState<number>(IMAGE_HEIGHT_DEFAULT)
  const IMAGE_WIDTH: number = 1400

  const handleResize = (): void => {
    if (window.innerWidth <= 768) {
      setImageHeight(700)
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
    <div className="">
      <ImageBlur
        width={IMAGE_WIDTH}
        height={imageHeight}
        layout="responsive"
        priority={true}
        src={post.coverImage}
        quality={100}
      />
      <div className="hidden md:flex items-center justify-between mx-2 md:mx-10 md:-mt-16 relative">
        <div className="space-x-6 flex items-center">
          <div className="w-32 border-4 border-gray-100 dark:border-gray-900 rounded-full">
            <ImageBlur
              width={100}
              height={100}
              src={post.author.picture}
              layout="responsive"
              className="rounded-full"
            />
          </div>
          <h2 className="bg-gray-100 dark:bg-gray-900 py-2 px-4">{post.author.name}</h2>
        </div>
        <p className="bg-gray-100 dark:bg-gray-900 py-2 px-4 text-xl text-gray-600 dark:text-gray-400"><Date dateString={post.date} /></p>
      </div>
      <div className="flex md:hidden items-center space-x-4 pt-8">
        <div className="w-24 h-24 border-4 border-gray-100 dark:border-gray-900 rounded-full">
          <ImageBlur
            width={100}
            height={100}
            src={post.author.picture}
            layout="responsive"
            className="rounded-full"
          />
        </div>
        <div>
          <h2 className="bg-gray-100 dark:bg-gray-900 py-2">{post.author.name}</h2>
          <p className="bg-gray-100 dark:bg-gray-900 py-2 text-xl text-gray-600"><Date dateString={post.date} /></p>
        </div>
      </div>
      <h1 className="py-8 mx-2 md:mx-0 text-7xl tracking-tight mb-10">{post.title}</h1>
    </div>
  )
}