import React, { useEffect, useState } from 'react'
import styles from 'PostsScreen.module.css'
import { fetchPosts } from '../../services/postService'
import { PostDto } from '../../types/dto'
import PostList from '../../components/PostList'

const PostsScreen: React.FC = () => {
  const [posts, setPosts] = useState<PostDto[]>([])
  useEffect(() => {
    fetchPosts().then(data => {
      setPosts(data)
    })
  }, [])

  return (
    <div>
      <h2>PostsScreen</h2>
      <PostList posts={posts} />
    </div>
  )
}

export default PostsScreen
