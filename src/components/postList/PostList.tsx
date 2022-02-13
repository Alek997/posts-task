import React from 'react'
import { Link } from 'react-router-dom'
import { Post } from '../../types/domain'
import styles from './PostList.module.css'
import CommentList from '../commentList/CommentList'

interface Props {
  posts: Post[] | undefined
}

const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <div className={styles.container}>
      {posts?.map(post => (
        <Link to={`/post/${post.id}`} key={post.id} className={styles.listItem}>
          <div>
            <h3 className={styles.postTitle}>{post.title}</h3>
            <p className={styles.authorName}>{post.author?.username}</p>
            <p className={styles.postBody}>{post.body}</p>

            <CommentList comments={post.comments} />
          </div>
        </Link>
      ))}
    </div>
  )
}

export default PostList
