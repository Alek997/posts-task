import { UserDto } from '../types/dto'
import { keyBy } from 'lodash'
import useQuery from './useQuery'

export const useUsers = () => {
  const query = useQuery<UserDto[]>(`${process.env.REACT_APP_API_URL}/users`)
  return {
    ...query,
    byId: keyBy(query.data, 'id')
  }
}
