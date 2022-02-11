import React from 'react'
import PostList from '../../components/PostList'
import styles from './PostsScreen.module.css'
import { usePosts } from '../../utils/postHooks'

const PostsScreen: React.FC = () => {
  const { groupedPosts } = usePosts()

  return (
    <div className={styles.container}>
      <PostList posts={groupedPosts} />
    </div>
  )
}

export default PostsScreen
