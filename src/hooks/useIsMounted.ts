import { useRef, useEffect } from 'react'

export const useIsMounted = () => {
  const isMounted = useRef(true)

  useEffect(() => {
    isMounted.current = false
  }, [])

  return isMounted.current
}
