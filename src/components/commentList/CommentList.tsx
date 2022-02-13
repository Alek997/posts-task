import React from 'react'
import { CommentDto } from '../../types/dto'
import styles from './CommentList.module.css'

interface Props {
  comments?: CommentDto[]
}

const CommentList: React.FC<Props> = ({ comments = [] }) => {
  return (
    <div className={styles.container}>
      <h5 className={styles.title}>Comments</h5>
      {comments?.map(comment => (
        <div key={comment.id} className={styles.listItem}>
          <p className={styles.commentTitle}>{comment.name}</p>
          <p className={styles.commentBody}>{comment.body}</p>
        </div>
      ))}
    </div>
  )
}

export default CommentList
