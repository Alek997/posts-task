import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchPostById } from '../../services/postService'
import { CommentDto, PostDto } from '../../types/dto'
import { fetchCommentsByPost } from '../../services/commentService'
import CommentList from '../../components/CommentList'
import styles from 'PostScreen.module.css'

const PostScreen: React.FC = () => {
  const { postId } = useParams<{ postId: string }>()
  const [post, setPost] = useState<PostDto>()
  const [comments, setComments] = useState<CommentDto[]>([])

  useEffect(() => {
    fetchPostById(parseInt(postId as string)).then(data => {
      setPost(data)
    })
    fetchCommentsByPost(parseInt(postId as string)).then(data => {
      setComments(data)
    })
  }, [postId])

  if (!post) {
    return null
  }

  return (
    <div>
      <h2>PostScreen</h2>
      <h3>postId: {post.id}</h3>
      <h3>userId: {post.userId}</h3>
      <h3>postTitle: {post.title}</h3>
      <p>postBody: {post.body}</p>

      <CommentList comments={comments} />
    </div>
  )
}

export default PostScreen
