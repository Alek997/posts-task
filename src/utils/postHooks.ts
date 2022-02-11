import React, { useEffect, useState } from 'react'
import { fetchComments } from '../services/commentService'
import { fetchPosts } from '../services/postService'
import { Post } from '../types/domain'
import { groupBy, keyBy, Dictionary } from 'lodash'
import { CommentDto, PostDto, UserDto } from '../types/dto'
import { fetchUsers } from '../services/userService'

export const usePosts = () => {
  const [posts, setPosts] = useState<PostDto[]>([])
  const [comments, setComments] = useState<CommentDto[]>([])
  const [users, setUsers] = useState<Dictionary<UserDto>>()

  const [groupedPosts, setGroupedPosts] = useState<Post[]>([])

  useEffect(() => {
    fetchPosts().then(data => {
      setPosts(data)
    })
    fetchComments().then(data => {
      setComments(data)
    })
    fetchUsers().then(data => {
      const users = keyBy(data, 'id')
      setUsers(users)
    })
  }, [])

  useEffect(() => {
    if (posts.length > 0 && comments.length > 0 && !!users) {
      const groupedComments = groupBy(comments, 'postId')
      setGroupedPosts(
        posts?.map(post => ({
          ...post,
          comments: groupedComments[post.id],
          author: users[post.userId]
        }))
      )
    }
  }, [posts, comments])

  return {
    groupedPosts
  }
}
