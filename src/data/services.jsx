import { Building2, BadgeCheck, Plane, Globe, GraduationCap } from 'lucide-react'

// Single source of truth for all services.
// Used by the home "Our Services" carousel and the per-service detail pages.
export const services = [
  {
    slug: 'uae-services',
    title: 'UAE Services',
    tag: 'Business Setup',
    icon: Building2,
    image:
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80&auto=format&fit=crop',
    short:
      'Company formation, trade licences and PRO services to launch and run your business in the UAE.',
    description:
      'Setting up a business in the UAE is simple with Sky Fall International by your side. From choosing the right jurisdiction and securing your trade licence to office space, government approvals and ongoing PRO support, we handle the entire process so you can focus on growing your business. Our consultants stay up to date with the latest regulations to keep your company fully compliant.',
    offerings: [
      'Company Formation',
      'Business Setup',
      'External Approvals',
      'Trade Licenses — New & Renewal',
      'Ejari, Istidama & Office Spaces',
      'PRO Services',
      'Amer & Tasheel Works',
    ],
  },
  {
    slug: 'uae-visa-services',
    title: 'UAE Visa Services',
    tag: 'Visa',
    icon: BadgeCheck,
    image:
      'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=1200&q=80&auto=format&fit=crop',
    short:
      'Golden, freelance, visit and spouse visas — fast, reliable and fully managed end to end.',
    description:
      'Whether you are relocating, investing, freelancing or bringing family to the UAE, we make the visa process effortless. Our team prepares your documentation, liaises with the authorities and keeps you updated at every step, ensuring high approval rates and quick turnaround for all UAE visa categories.',
    offerings: ['Golden Visa', 'Freelance Visa', 'Visit Visa', 'Spouse Visa'],
  },
  {
    slug: 'travel-services',
    title: 'Travel Services',
    tag: 'Travel',
    icon: Plane,
    image:
      'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=80&auto=format&fit=crop',
    short:
      'Air ticketing, holidays, Umrah, insurance, hotels and attestation — your complete travel desk.',
    description:
      'From booking the best-value flights to planning unforgettable holidays and spiritually fulfilling Umrah journeys, our travel desk takes care of everything. We arrange hotels, travel insurance, document attestation and passport services, and provide global visa assistance — all under one roof with 24/7 support.',
    offerings: [
      'Worldwide Air Ticketing',
      'GCC Tourist Visa',
      'Travel Insurance',
      'Holiday Packages',
      'Umrah Services',
      'Global Visa Assistance',
      'Documents Attestation',
      'Passport Services',
      'Hotel Reservation',
    ],
  },
  {
    slug: 'europe-services',
    title: 'Europe Services',
    tag: 'Europe',
    icon: Globe,
    image:
      'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1200&q=80&auto=format&fit=crop',
    short:
      'Student and visit visas, Schengen, travel packages and relocation support across Europe.',
    description:
      'Dreaming of Europe? We help you get there. From Schengen and UK visit visas to student visas for higher studies, curated travel packages and on-ground support like airport transfers and money transfer, our Europe desk handles the details. We also offer property lending services and personalised travel guidance for a smooth journey.',
    offerings: [
      'Student Visa (Higher Studies)',
      'UK Visit Visa (6 Months)',
      'Schengen Visa',
      'Travel Packages',
      'Property Lending Services',
      'Travel Guidance',
      'Money Transfer',
      'Airport Pickup & Drop',
    ],
  },
  {
    slug: 'study-abroad',
    title: 'Study Abroad',
    tag: 'Education',
    icon: GraduationCap,
    image:
      'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=1200&q=80&auto=format&fit=crop',
    short:
      'Admissions and student visas for the UK, Germany, Ireland, Canada and more.',
    description:
      'Turn your study-abroad dream into reality. We guide students through university selection, applications, admissions and student visas for top destinations including the UK, Germany, Austria, Ireland and Canada. From shortlisting the right Bachelor’s, Master’s or diploma course to pre-departure support, we are with you every step of the way.',
    offerings: ['United Kingdom', 'Germany', 'Austria', 'Ireland', 'Canada'],
    note: "Bachelor's, Master's & diploma courses",
  },
]

export function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug)
}
