import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { Plane, Menu, X, MessageCircle } from 'lucide-react'
import { BRAND, NAV_LINKS, WHATSAPP_LINK } from '../constants'

const NAV_OFFSET = -72 // height of the sticky navbar

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('home')

  // Toggle the "scrolled" look (solid bg + shadow) and track the active section.
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24)

      const offset = window.scrollY + 120
      let current = NAV_LINKS[0].to
      for (const link of NAV_LINKS) {
        const el = document.getElementById(link.to)
        if (el && el.offsetTop <= offset) current = link.to
      }
      setActive(current)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const solid = scrolled || menuOpen

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="container-px flex h-[72px] items-center justify-between">
        {/* Logo */}
        <Link
          to="home"
          smooth
          duration={500}
          offset={NAV_OFFSET}
          onClick={() => setMenuOpen(false)}
          className="flex cursor-pointer items-center gap-2.5"
          aria-label={`${BRAND.name} — home`}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/30">
            <Plane className="h-5 w-5 -rotate-45" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-heading text-lg font-bold tracking-tight text-primary-900 transition-colors">
              {BRAND.line1}
            </span>
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-accent-600 transition-colors">
              {BRAND.line2}
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth
                duration={500}
                offset={NAV_OFFSET}
                className={`relative cursor-pointer rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  active === link.to
                    ? 'text-primary'
                    : 'text-gray-700 hover:text-primary'
                }`}
              >
                {link.label}
                {active === link.to && (
                  <span className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-accent" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop WhatsApp CTA */}
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full bg-whatsapp px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-whatsapp/30 transition-all hover:bg-whatsapp-dark hover:shadow-xl lg:inline-flex"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-primary-900 transition-colors hover:bg-gray-100 lg:hidden"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu panel */}
      <div
        className={`overflow-hidden bg-white transition-[max-height] duration-300 ease-in-out lg:hidden ${
          menuOpen ? 'max-h-96 border-t border-gray-100' : 'max-h-0'
        }`}
      >
        <ul className="container-px flex flex-col gap-1 py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth
                duration={500}
                offset={NAV_OFFSET}
                onClick={() => setMenuOpen(false)}
                className={`block cursor-pointer rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                  active === link.to
                    ? 'bg-primary-50 text-primary'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="mt-2">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full bg-whatsapp px-5 py-3 text-base font-semibold text-white shadow-lg shadow-whatsapp/30 transition-colors hover:bg-whatsapp-dark"
            >
              <MessageCircle className="h-5 w-5" />
              Chat on WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
