import { Post } from 'lib/model/Post'
import { FC } from 'react'
import { PostPreview } from './PostPreview'

type MorePostProps = {
  posts: Post[];
}

export const MorePosts: FC<MorePostProps> = ({ posts }) => {
  return (
    <section>
      <h2 className="py-20 text-4xl md:text-5xl font-bold tracking-tighter leading-tight">More Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
        {posts.map(post => (
          <PostPreview key={post._id} post={post} />
        ))}
      </div>
    </section>
  )
}