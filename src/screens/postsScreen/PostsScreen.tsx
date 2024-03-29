import React, { useContext, useEffect, useState } from 'react'
import PostList from '../../components/postList/PostList'
import SearchInput from '../../components/searchInput/SearchInput'
import { useGroupedPosts } from '../../utils/postHooks'
import { PostDto } from '../../types/dto'
import { GlobalContext } from '../../context/GlobalProvider'

const PostsScreen: React.FC = () => {
  const query = useGroupedPosts()
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredPosts, setFilteredPosts] = useState<PostDto[]>([])

  const { message } = useContext(GlobalContext)
  useEffect(() => {
    console.log(`${message} PostsScreen`)
  }, [])

  useEffect(() => {
    if (!query.loading && !query.error) {
      setFilteredPosts(
        query.data?.filter(post =>
          post.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
    }
  }, [searchQuery, query.data])

  if (query.loading) {
    return <p>Loading...</p>
  }
  if (query.error) {
    return <p>Error: {query.error}</p>
  }

  return (
    <div className="global">
      <SearchInput
        data-testid="search-input-id"
        onChange={event => setSearchQuery(event.target.value)}
      />
      <PostList data-testid="post-list-id" posts={filteredPosts} />
    </div>
  )
}

export default PostsScreen
