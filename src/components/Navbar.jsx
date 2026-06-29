import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Menu, X, Facebook, Instagram } from 'lucide-react'
import { BRAND, NAV_LINKS, SOCIAL } from '../constants'
import WhatsAppIcon from './WhatsAppIcon'
import SectionLink from './SectionLink'

const SOCIALS = [
  { key: 'facebook', label: 'Facebook', Icon: Facebook, href: SOCIAL.facebook, color: 'text-[#1877F2]' },
  { key: 'instagram', label: 'Instagram', Icon: Instagram, href: SOCIAL.instagram, color: 'text-[#E4405F]' },
  { key: 'whatsapp', label: 'WhatsApp', Icon: WhatsAppIcon, href: SOCIAL.whatsapp, color: 'text-[#25D366]' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('home')
  const location = useLocation()
  const isHome = location.pathname === '/'

  // Toggle the "scrolled" look and track the active section (home page only).
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(globalThis.scrollY > 24)

      const offset = globalThis.scrollY + 120
      let current = NAV_LINKS[0].to
      for (const link of NAV_LINKS) {
        const el = document.getElementById(link.to)
        if (el && el.offsetTop <= offset) current = link.to
      }
      setActive(current)
    }

    handleScroll()
    globalThis.addEventListener('scroll', handleScroll, { passive: true })
    return () => globalThis.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  // Off the home page there is no landing image behind the bar, so keep it solid.
  const solid = scrolled || menuOpen || !isHome

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="container-px flex h-[72px] items-center justify-between">
        {/* Logo */}
        <SectionLink
          to="home"
          onClick={() => setMenuOpen(false)}
          className="flex cursor-pointer items-center gap-2.5"
        >
          <img src="/logo.png" alt={BRAND.name} className="h-12 w-auto rounded-lg sm:h-14" />
        </SectionLink>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <SectionLink
                to={link.to}
                className={`relative cursor-pointer rounded-lg px-4 py-2 text-[15px] font-medium transition-colors ${
                  isHome && active === link.to
                    ? 'text-primary'
                    : 'text-gray-700 hover:text-primary'
                }`}
              >
                {link.label}
                {isHome && active === link.to && (
                  <span className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-accent" />
                )}
              </SectionLink>
            </li>
          ))}
        </ul>

        {/* Desktop social icons */}
        <div
          className={`hidden items-center gap-1.5 lg:flex lg:border-l lg:pl-3 ${
            solid ? 'lg:border-gray-200' : 'lg:border-white/40'
          }`}
        >
          {SOCIALS.map(({ key, label, Icon, href, color }) => (
            <a
              key={key}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={`flex h-10 w-10 items-center justify-center rounded-full transition-all ${color} ${
                solid ? 'hover:bg-gray-100' : 'bg-white shadow-md hover:shadow-lg'
              }`}
            >
              <Icon className="h-[22px] w-[22px]" />
            </a>
          ))}
        </div>

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
              <SectionLink
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={`block w-full cursor-pointer rounded-lg px-4 py-3 text-left text-base font-medium transition-colors ${
                  isHome && active === link.to
                    ? 'bg-primary-50 text-primary'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
                }`}
              >
                {link.label}
              </SectionLink>
            </li>
          ))}
          <li className="mt-3 flex justify-center gap-3 border-t border-gray-100 pt-4">
            {SOCIALS.map(({ key, label, Icon, href, color }) => (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                onClick={() => setMenuOpen(false)}
                className={`flex h-12 w-12 items-center justify-center rounded-full transition-colors hover:bg-gray-100 ${color}`}
              >
                <Icon className="h-6 w-6" />
              </a>
            ))}
          </li>
        </ul>
      </div>
    </header>
  )
}
