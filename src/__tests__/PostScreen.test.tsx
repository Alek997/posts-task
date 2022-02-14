import React from 'react'
import PostsScreen from '../screens/postsScreen/PostsScreen'
import { act, render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Posts screen', () => {
  test('Renders loading state on PostsScreen', () => {
    const { getByText } = render(<PostsScreen />)
    expect(getByText('Loading...')).toBeInTheDocument()
  })

  test('Renders Posts screen correctly', async () => {
    await act(async () => {
      render(<PostsScreen />)
      const searchInput = screen.queryByTestId('search-input-id')
      const postList = screen.queryByTestId('post-list-id')
      waitFor(() => expect(searchInput).toBeInTheDocument())
      waitFor(() => expect(postList).toBeInTheDocument())
    })
  })
})
