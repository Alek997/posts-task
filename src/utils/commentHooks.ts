import { CommentDto } from '../types/dto'
import { groupBy } from 'lodash'
import useQuery from './useQuery'

export const useComments = () => {
  const query = useQuery<CommentDto[]>(
    'https://jsonplaceholder.typicode.com/comments'
  )

  return {
    ...query,
    byPostId: groupBy(query.data, 'postId')
  }
}
