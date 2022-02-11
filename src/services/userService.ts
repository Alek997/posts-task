import { UserDto } from '../types/dto'
import http, { apiUrl } from './httpService'

export const fetchUsers = async (params = {}) => {
  const url = apiUrl + '/users'
  const { data } = await http.get<UserDto[]>(url, params)
  return data
}

export const fetchUserById = async (id: number) => {
  const url = apiUrl + '/posts/' + id

  const { data } = await http.get<UserDto>(url, {
    params: { id }
  })

  return data
}
