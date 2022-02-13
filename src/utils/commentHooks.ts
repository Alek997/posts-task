import { CommentDto } from '../types/dto'
import { groupBy } from 'lodash'
import useQuery from './useQuery'

export const useComments = () => {
  const query = useQuery<CommentDto[]>(
    `${process.env.REACT_APP_API_URL}/comments`
  )

  return {
    ...query,
    byPostId: groupBy(query.data, 'postId')
  }
}
