import { Link } from 'react-scroll'
import { Plane, Facebook, Instagram, MapPin, Phone, Mail, ArrowUp } from 'lucide-react'
import { NAV_LINKS, CONTACT, SOCIAL, WHATSAPP_LINK } from '../constants'

const services = [
  'UAE Business Setup',
  'UAE Visa Services',
  'Travel & Ticketing',
  'Europe Services',
  'Study Abroad',
  'Umrah Services',
]

// Inline WhatsApp glyph (lucide has no dedicated brand icon)
function WhatsAppIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.518 5.26l-.999 3.648 3.97-1.042zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  )
}

const socials = [
  { icon: Facebook, href: SOCIAL.facebook, label: 'Facebook' },
  { icon: Instagram, href: SOCIAL.instagram, label: 'Instagram' },
  { icon: WhatsAppIcon, href: SOCIAL.whatsapp, label: 'WhatsApp' },
]

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-100 text-gray-600">
      <div className="container-px py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-primary-950">
                <Plane className="h-5 w-5 -rotate-45" />
              </span>
              <div className="flex flex-col leading-none">
                <span className="font-heading text-lg font-bold text-primary-900">Al Kafeya</span>
                <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-accent-600">
                  Travel Solutions
                </span>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-gray-600">
              Your trusted partner for Hajj, Umrah, holidays and visa services. Travel with
              confidence, every single time.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => {
                const Icon = s.icon
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary shadow-sm ring-1 ring-gray-200 transition-colors hover:bg-accent hover:text-primary-950 hover:ring-accent"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading text-base font-semibold text-primary-900">Quick Links</h4>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth
                    duration={500}
                    offset={-72}
                    className="cursor-pointer text-sm text-gray-600 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-base font-semibold text-primary-900">Our Services</h4>
            <ul className="mt-5 space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    to="services"
                    smooth
                    duration={500}
                    offset={-72}
                    className="cursor-pointer text-sm text-gray-600 transition-colors hover:text-primary"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-base font-semibold text-primary-900">Contact</h4>
            <ul className="mt-5 space-y-4 text-sm text-gray-600">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-accent-600" />
                <span>{CONTACT.address}</span>
              </li>
              <li>
                <a href={CONTACT.phoneHref} className="flex gap-3 transition-colors hover:text-primary">
                  <Phone className="h-5 w-5 shrink-0 text-accent-600" />
                  <span>{CONTACT.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex gap-3 transition-colors hover:text-primary"
                >
                  <Mail className="h-5 w-5 shrink-0 text-accent-600" />
                  <span>{CONTACT.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200">
        <div className="container-px flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-sm text-gray-500">
            © 2025 Al Kafeya Travel Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 transition-colors hover:text-primary"
            >
              Privacy Policy
            </a>
            <Link
              to="home"
              smooth
              duration={500}
              className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white text-primary shadow-sm ring-1 ring-gray-200 transition-colors hover:bg-accent hover:text-primary-950 hover:ring-accent"
              aria-label="Back to top"
            >
              <ArrowUp className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
