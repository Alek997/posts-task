import { useEffect, useState } from 'react'
import { Post } from '../types/domain'
import { PostDto } from '../types/dto'
import useQuery from './useQuery'
import { useComments } from './commentHooks'
import { useUsers } from './userHooks'

export const usePosts = () =>
  useQuery<PostDto[]>('https://jsonplaceholder.typicode.com/posts')

export const useGroupedPosts = () => {
  const [groupedPosts, setGroupedPosts] = useState<Post[]>([])
  const postQuery = usePosts()
  const commentQuery = useComments()
  const userQuery = useUsers()

  useEffect(() => {
    if (
      postQuery.data &&
      commentQuery.data &&
      userQuery.data &&
      groupedPosts.length === 0
    ) {
      setGroupedPosts(
        postQuery.data?.map(post => ({
          ...post,
          comments: commentQuery.byPostId[post.id],
          author: userQuery.byId[post.userId]
        }))
      )
    }
  }, [postQuery, commentQuery, userQuery])

  return {
    data: groupedPosts,
    loading: postQuery.loading || commentQuery.loading || userQuery.loading,
    error: postQuery.error || commentQuery.error || userQuery.error
  }
}

export const usePost = (postId: number) => {
  useQuery<PostDto[]>('https://jsonplaceholder.typicode.com/posts')

  const postQuery = usePosts()
  const commentQuery = useComments()
  const userQuery = useUsers()
}
