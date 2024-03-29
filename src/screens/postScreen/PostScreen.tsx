import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CommentList from '../../components/commentList/CommentList'
import styles from './PostScreen.module.css'
import { usePost } from '../../utils/postHooks'
import { GlobalContext } from '../../context/GlobalProvider'

const PostScreen: React.FC = () => {
  const { postId } = useParams<{ postId: string }>()

  const query = usePost(parseInt(postId as string))

  const { message } = useContext(GlobalContext)
  useEffect(() => {
    console.log(`${message} PostScreen`)
  }, [])

  if (query.loading) {
    return <p>Loading...</p>
  }
  if (query.error) {
    return <p>Error: {query.error}</p>
  }

  return (
    <div className="global">
      <h3 data-testid="post-title-id" className={styles.postTitle}>
        {query.data.title}
      </h3>
      <p data-testid="author-name-id" className={styles.authorName}>
        {query.data.author?.username}
      </p>
      <p data-testid="post-body-id" className={styles.postBody}>
        {query.data.body}
      </p>

      <CommentList
        data-testid="comment-list-id"
        comments={query.data.comments}
      />
    </div>
  )
}

export default PostScreen
