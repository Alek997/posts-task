import { CommentDto } from '../types/dto'
import useQuery from './useQuery'

const groupBy = (data, key) => {
  return data?.reduce(
    (r, v, i, a, k = v[key]) => ((r[k] || (r[k] = [])).push(v), r),
    {}
  )
}
export const useComments = () => {
  const query = useQuery<CommentDto[]>(
    `${process.env.REACT_APP_API_URL}/comments`
  )

  return {
    ...query,
    byPostId: groupBy(query.data, 'postId')
  }
}
