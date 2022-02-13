import { useEffect, useState } from 'react'
import { Post } from '../types/domain'
import { CommentDto, PostDto, UserDto } from '../types/dto'
import useQuery from './useQuery'
import { useComments } from './commentHooks'
import { useUsers } from './userHooks'

export const usePosts = () =>
  useQuery<PostDto[]>(`${process.env.REACT_APP_API_URL}/posts`)

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
  const postQuery = useQuery<PostDto>(
    `${process.env.REACT_APP_API_URL}/posts/${postId}`
  )

  const userQuery = useQuery<UserDto>(
    `${process.env.REACT_APP_API_URL}/users/${postQuery.data?.userId}`,
    !!postQuery.data?.userId
  )
  const commentQuery = useQuery<CommentDto[]>(
    `${process.env.REACT_APP_API_URL}/comments?postId=${postId}`
  )

  return {
    data: {
      ...postQuery.data,
      author: userQuery.data,
      comments: commentQuery.data
    },
    loading: postQuery.loading || userQuery.loading || commentQuery.loading,
    error: postQuery.error || userQuery.error || commentQuery.error
  }
}
