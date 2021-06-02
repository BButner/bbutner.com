import { motion } from 'framer-motion'
import { Post } from 'lib/blog/model/Post'
import { FC } from 'react'
import { PostPreview } from './PostPreview'

type MorePostProps = {
  posts: Post[];
}

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 }
}

export const MorePosts: FC<MorePostProps> = ({ posts }) => {
  return (
    <section>
      <h2 className="py-20 text-4xl md:text-5xl font-bold tracking-tighter leading-tight">More Posts</h2>
      <motion.ul className="grid grid-cols-1 md:grid-cols-2 md:gap-6" initial="hidden" animate="visible" variants={container}>
        {posts.map(post => (
          <motion.li variants={item} key={post._id}>
            <PostPreview post={post} />
          </motion.li>
        ))}
      </motion.ul>
    </section>
  )
}