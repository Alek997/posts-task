import React, { useEffect } from 'react'
import styles from 'PostsScreen.module.css'
import { fetchPosts } from '../../services/postService'

const PostsScreen: React.FC = () => {
  useEffect(() => {
    fetchPosts().then(data => {
      console.log('posts', data)
    })
  }, [])

  return (
    <div>
      <h2>PostsScreen</h2>
    </div>
  )
}

export default PostsScreen
