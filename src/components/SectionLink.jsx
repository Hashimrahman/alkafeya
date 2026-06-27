import { useLocation, useNavigate } from 'react-router-dom'

export function scrollToSection(id) {
  if (id === 'home') {
    globalThis.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

// A link to an on-page section that also works from other routes:
// if we're not on the home page it navigates home first, then scrolls.
export default function SectionLink({ to, onClick, className, children }) {
  const navigate = useNavigate()
  const location = useLocation()

  const handleClick = () => {
    if (onClick) onClick()
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => scrollToSection(to), 90)
    } else {
      scrollToSection(to)
    }
  }

  return (
    <button type="button" onClick={handleClick} className={className}>
      {children}
    </button>
  )
}
