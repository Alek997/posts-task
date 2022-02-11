import { PostDto } from '../types/dto'
import http, { apiUrl } from './httpService'

export const fetchPosts = async (params = {}) => {
  const url = apiUrl + '/posts'
  const { data } = await http.get<PostDto[]>(url, params)
  return data
}

export const fetchPostById = async (id: number) => {
  const url = apiUrl + '/posts/' + id

  const { data } = await http.get<PostDto>(url, {
    params: { id }
  })

  return data
}
