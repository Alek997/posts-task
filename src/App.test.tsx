import React from 'react'
import { render, screen } from '@testing-library/react'
import { renderHook, act } from '@testing-library/react-hooks'

import App from './App'
import { useGroupedPosts } from './utils/postHooks'

// test('renders learn react link', () => {
//   render(<App />)
//   const linkElement = screen.getByText(/learn react/i)
//   expect(linkElement).toBeInTheDocument()
// })

describe('useGroupedPosts', () => {
  test(`Check loading state and error response on initial load`, () => {
    const { result } = renderHook(() => useGroupedPosts())
    expect(result.current.data).toStrictEqual([])

    expect(result.current.loading).toBe(true)
    expect(result.current.error).toBe(undefined)
  })

  // test(`Check add will correct change count's value`, () => {
  //   const { result } = renderHook(() => useCounter())

  //   act(() => {
  //     result.current.add(3)
  //   })

  //   expect(result.current.count).toBe(3)
  // })

  // test(`Check callBack will trigger after add executed`, () => {
  //   const callBack = jest.fn()
  //   const { result } = renderHook(() => useCounter(0, callBack))

  //   act(() => {
  //     result.current.add()
  //   })

  //   expect(callBack.mock.calls.length).toBe(2)
  // })
})
