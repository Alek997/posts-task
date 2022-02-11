import { CommentDto, UserDto } from '../types/dto'
import http, { apiUrl } from './httpService'

export const fetchComments = async (params = {}) => {
  const url = apiUrl + '/comments'
  const { data } = await http.get<CommentDto[]>(url, params)
  return data
}

export const fetchCommentsById = async (id: number) => {
  const url = apiUrl + '/comments/' + id

  const { data } = await http.get<CommentDto>(url, {
    params: { id }
  })

  return data
}

export const fetchCommentsByPost = async (postId: number) => {
  const url = apiUrl + '/comments'

  const { data } = await http.get<CommentDto[]>(url, {
    params: { postId }
  })

  return data
}
