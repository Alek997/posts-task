import { UserDto } from '../types/dto'
import { keyBy } from 'lodash'
import useQuery from './useQuery'

export const useUsers = () => {
  const query = useQuery<UserDto[]>(
    'https://jsonplaceholder.typicode.com/users'
  )
  return {
    ...query,
    byId: keyBy(query.data, 'id')
  }
}
