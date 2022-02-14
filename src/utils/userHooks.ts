import { UserDto } from '../types/dto'
import useQuery from './useQuery'

const keyBy = (array, key) =>
  (array || []).reduce((r, x) => ({ ...r, [key ? x[key] : x]: x }), {})

export const useUsers = () => {
  const query = useQuery<UserDto[]>(`${process.env.REACT_APP_API_URL}/users`)
  return {
    ...query,
    byId: keyBy(query.data, 'id') as { [index: string]: UserDto }
  }
}
