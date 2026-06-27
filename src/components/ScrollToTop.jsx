import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Scroll to the top whenever the route changes (e.g. opening a service page).
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    globalThis.scrollTo(0, 0)
  }, [pathname])

  return null
}
