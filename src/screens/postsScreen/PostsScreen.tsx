import React, { useEffect, useState } from 'react'
import PostList from '../../components/postList/PostList'
import styles from './PostsScreen.module.css'
import { usePosts } from '../../utils/postHooks'
import SearchInput from '../../components/searchInput/SearchInput'

const PostsScreen: React.FC = () => {
  const { groupedPosts } = usePosts()
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredPosts, setFilteredPosts] = useState(groupedPosts)

  useEffect(() => {
    if (groupedPosts.length > 0) {
      setFilteredPosts(
        groupedPosts.filter(post =>
          post.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
    }
  }, [groupedPosts, searchQuery])

  return (
    <div className={`global ${styles.container}`}>
      <SearchInput onChange={event => setSearchQuery(event.target.value)} />
      <PostList posts={filteredPosts} />
    </div>
  )
}

export default PostsScreen
