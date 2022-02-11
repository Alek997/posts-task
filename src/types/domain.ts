import { CommentDto, UserDto } from './dto'

export interface Post {
  userId: number
  id: number
  title: string
  body: string
  comments?: CommentDto[]
  author?: UserDto
}
