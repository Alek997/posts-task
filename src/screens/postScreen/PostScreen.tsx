import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchPostById } from '../../services/postService'
import { CommentDto, PostDto, UserDto } from '../../types/dto'
import { fetchCommentsByPost } from '../../services/commentService'
import CommentList from '../../components/commentList/CommentList'
import styles from './PostScreen.module.css'
import { fetchUserById } from '../../services/userService'

const PostScreen: React.FC = () => {
  const { postId } = useParams<{ postId: string }>()
  const [post, setPost] = useState<PostDto>()
  const [comments, setComments] = useState<CommentDto[]>([])
  const [author, setAuthor] = useState<UserDto>()

  useEffect(() => {
    fetchPostById(parseInt(postId as string))
      .then(data => {
        setPost(data)
        return data
      })
      .then(postData => {
        fetchUserById(postData.userId).then(data => {
          setAuthor(data)
        })
      })
    fetchCommentsByPost(parseInt(postId as string)).then(data => {
      setComments(data)
    })
  }, [postId])

  if (!post) {
    return null
  }

  return (
    <div className="global">
      <h3 className={styles.postTitle}>{post.title}</h3>
      <p className={styles.authorName}>{author?.username}</p>
      <p className={styles.postBody}>{post.body}</p>

      <CommentList comments={comments} />
    </div>
  )
}

export default PostScreen
