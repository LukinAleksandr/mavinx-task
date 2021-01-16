import { useCallback, useState } from 'react'

export const useHttp = () => {
  const [loading, setLoading] = useState(false)
  const [msg, setMsg] = useState(null)

  const request = useCallback(
    async (url, method = 'GET', body = null, headers = {}) => {
      setLoading(true)
      try {
        if (body) {
          body = JSON.stringify(body)
          headers['Content-Type'] = 'application/json'
        }
        const response = await fetch(url, {
          method,
          body,
          headers,
        })
        const data = await response.json()

        setMsg(data.message)
        setLoading(false)
        return data
      } catch (e) {
        setLoading(false)
        setMsg(e.message)
        throw e
      }
    },
    []
  )

  return { loading, request, msg }
}
