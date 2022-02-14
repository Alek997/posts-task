import { useState, useEffect, useCallback } from 'react'

const useQuery = <T>(url: string, enabled = true) => {
  const [data, setData] = useState<T>()
  const [error, setError] = useState<string>()
  const [loading, setLoading] = useState(false)

  const handleError = (error: any) => {
    setError(error.response?.data.err)
    setLoading(false)
  }

  // this function is calling useCallback to stop an infinite loop since it is in the dependency array of useEffect
  const runQuery = useCallback(() => {
    const handleSuccess = (res: T) => {
      setData(res)
      setLoading(false)
    }
    setLoading(true)
    fetch(url)
      .then(response => response.json())
      .then(handleSuccess)
      .catch(handleError)
  }, [url])

  useEffect(() => {
    if (enabled) runQuery()
  }, [runQuery, enabled])

  return { data, loading, error, refetch: runQuery }
}

export default useQuery
