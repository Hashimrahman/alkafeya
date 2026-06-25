import { Link } from 'react-scroll'
import {
  Moon,
  Plane,
  Building2,
  BadgeCheck,
  GraduationCap,
  Globe,
  BedDouble,
  FileCheck2,
} from 'lucide-react'

const tickerItems = [
  { icon: Moon, label: 'Umrah Packages' },
  { icon: Plane, label: 'Worldwide Air Ticketing' },
  { icon: Building2, label: 'UAE Business Setup' },
  { icon: BadgeCheck, label: 'Golden & Visit Visas' },
  { icon: GraduationCap, label: 'Study Abroad' },
  { icon: Globe, label: 'Schengen & UK Visas' },
  { icon: BedDouble, label: 'Hotel Reservations' },
  { icon: FileCheck2, label: 'Documents Attestation' },
]

// Full-width scrolling "ad ticker" overlaid on the hero, just below the navbar.
export default function ServiceTicker() {
  // Duplicate the list so the marquee loops seamlessly (track scrolls by -50%).
  const loop = [...tickerItems, ...tickerItems]

  return (
    <div className="group absolute inset-x-0 top-[72px] z-20 overflow-hidden border-y border-white/10 bg-primary/95 shadow-md backdrop-blur-sm">
      <div className="flex w-max animate-marquee items-center py-3 will-change-transform group-hover:[animation-play-state:paused]">
        {loop.map((item, i) => {
          const Icon = item.icon
          return (
            <div key={i} className="flex items-center" aria-hidden={i >= tickerItems.length}>
              <Link
                to="services"
                smooth
                duration={500}
                offset={-72}
                className="flex cursor-pointer items-center gap-2 whitespace-nowrap px-6 text-sm font-medium text-white/90 transition-colors hover:text-accent-300"
              >
                <Icon className="h-4 w-4 shrink-0 text-accent-400" />
                {item.label}
              </Link>
              <span className="text-accent-400/70">•</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
