import { renderHook } from '@testing-library/react-hooks'
import { useGroupedPosts } from '../utils/postHooks'
import useQuery from '../utils/useQuery'

describe('useGroupedPosts', () => {
  test(`Check loading state and error response on initial load`, () => {
    const { result } = renderHook(() => useGroupedPosts())
    expect(result.current.data).toStrictEqual([])
    expect(result.current.loading).toBe(true)
    expect(result.current.error).toBe(undefined)
  })
})

describe('useQuery', () => {
  test(`Check loading state on bad args`, () => {
    const { result } = renderHook(() => useQuery('failUrl', true))
    expect(result.current.loading).toBe(true)
  })

  test(`Check loading state on disabled query`, () => {
    const { result } = renderHook(() => useQuery('failUrl', false))
    expect(result.current.loading).toBe(false)
  })
})
