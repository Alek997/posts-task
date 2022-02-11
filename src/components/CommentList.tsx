import React from 'react'
import { CommentDto } from '../types/dto'

interface Props {
  comments: CommentDto[]
}

const CommentList: React.FC<Props> = ({ comments }) => {
  return (
    <div>
      {comments?.map(comment => (
        <div key={comment.id}>
          <h3>commentId: {comment.id}</h3>
          <h3>comment name: {comment.name}</h3>
          <h3>email: {comment.email}</h3>
          <p>commentBody: {comment.body}</p>
        </div>
      ))}
    </div>
  )
}

export default CommentList
