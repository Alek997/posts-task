import React from 'react'
import { PostDto } from '../types/dto'
import { Link } from 'react-router-dom'

interface Props {
  posts: PostDto[]
}

const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <div>
      {posts?.map(post => (
        <Link to={`/post/${post.id}`} key={post.id}>
          <div>
            <h3>postId: {post.id}</h3>
            <h3>userId: {post.userId}</h3>
            <h3>postTitle: {post.title}</h3>
            <p>postBody: {post.body}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default PostList
