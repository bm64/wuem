import { useState, useEffect } from 'react'

export default function useOnScroll(ref) {
  const [shouldShow, setShouldShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const offset = ref.current.getBoundingClientRect().top
        const h = Math.max(
          document.documentElement.clientHeight,
          window.innerHeight || 0
        )

        setShouldShow(offset - h < 0)
      }
    }

    window.addEventListener('scroll', handleScroll)
    setTimeout(() => handleScroll(), 100) // Dirty hack
  }, [])

  return shouldShow
}
