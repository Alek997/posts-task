import React from 'react'
import PostsScreen from '../screens/postsScreen/PostsScreen'
import { act, render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Post screen', () => {
  test('Renders loading state on PostScreen', () => {
    const { getByText } = render(<PostsScreen />)
    expect(getByText('Loading...')).toBeInTheDocument()
  })

  test('Renders Post screen correctly', async () => {
    await act(async () => {
      render(<PostsScreen />)
      const postTitle = screen.queryByTestId('post-title-id')
      const authorName = screen.queryByTestId('author-name-id')
      const postBody = screen.queryByTestId('post-body-id')
      const commentList = screen.queryByTestId('comment-list-id')

      waitFor(() => expect(postTitle).toBeInTheDocument())
      waitFor(() => expect(authorName).toBeInTheDocument())
      waitFor(() => expect(postBody).toBeInTheDocument())
      waitFor(() => expect(commentList).toBeInTheDocument())
    })
  })
})
