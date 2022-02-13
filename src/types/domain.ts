import { CommentDto, PostDto, UserDto } from './dto'

export interface Post extends PostDto {
  comments?: CommentDto[]
  author?: UserDto
}
