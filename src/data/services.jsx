import { Building2, BadgeCheck, Plane, Globe, GraduationCap, Stamp, Landmark } from 'lucide-react'

// Single source of truth for all services.
// Used by the home "Our Services" carousel and the per-service detail pages.
export const services = [
  {
    slug: 'uk-visa-services',
    title: 'UK Visa Services',
    tag: 'UK Visa',
    icon: Stamp,
    image:
      'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&q=80&auto=format&fit=crop',
    short:
      'Visit, student, work and family visas for the UK — expert guidance with high approval rates.',
    description:
      'Planning a trip, studies or a new life in the United Kingdom? Our UK visa specialists manage the entire application — from choosing the right visa category and preparing flawless documentation to booking appointments and interview preparation. We keep you informed at every stage to maximise your chances of approval.',
    offerings: [
      'UK Visit Visa (6 Months)',
      'UK Student Visa',
      'UK Work Visa',
      'UK Family & Spouse Visa',
      'Documentation & Appointments',
      'Interview Preparation',
    ],
  },
  {
    slug: 'uae-visa-services',
    title: 'UAE Visa Services',
    tag: 'Visa',
    icon: BadgeCheck,
    image:
      'https://images.unsplash.com/photo-1512632578888-169bbbc64f33?w=1200&q=80&auto=format&fit=crop',
    short:
      'Golden, freelance, visit and spouse visas — fast, reliable and fully managed end to end.',
    description:
      'Whether you are relocating, investing, freelancing or bringing family to the UAE, we make the visa process effortless. Our team prepares your documentation, liaises with the authorities and keeps you updated at every step, ensuring high approval rates and quick turnaround for all UAE visa categories.',
    offerings: ['Golden Visa', 'Freelance Visa', 'Visit Visa', 'Spouse Visa'],
  },
  {
    slug: 'study-abroad',
    title: 'Study Abroad',
    tag: 'Education',
    icon: GraduationCap,
    image:
      'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=1200&q=80&auto=format&fit=crop',
    short:
      'University admissions and student visas across 20+ destinations including the UK, Germany, Canada and Australia.',
    description:
      'Turn your study-abroad dream into reality. We guide students end to end — university selection, applications, admissions and student visas — across 20+ destinations worldwide and every course level, from Foundation and Undergraduate to Postgraduate, MRes and PhD. From shortlisting the right course to pre-departure support, we are with you every step of the way.',
    offerings: [
      'University Selection & Admissions',
      'Student Visa Processing',
      'Application & Documentation',
      'Scholarship & Funding Guidance',
      'Accommodation Assistance',
      'Pre-departure Support',
    ],
    countries: [
      'Australia',
      'Canada',
      'France',
      'Germany',
      'Greece',
      'Ireland',
      'Italy',
      'Japan',
      'Latvia',
      'Lithuania',
      'Malaysia',
      'Malta',
      'New Zealand',
      'Singapore',
      'Slovakia',
      'Spain',
      'Turkey',
      'United Arab Emirates',
      'United Kingdom',
      'United States',
    ],
    courseTypes: [
      'Foundation',
      'International Year One',
      'Pre-Sessional Course',
      'Pre-Masters',
      'Undergraduate',
      'Undergraduate (Year 2)',
      'Undergraduate (Final Year)',
      'Undergraduate (Top-up)',
      'Postgraduate',
      'Master of Research (MRes)',
      'PhD',
    ],
  },
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
    slug: 'ksa-services',
    title: 'KSA Services',
    tag: 'Saudi Arabia',
    icon: Landmark,
    image:
      'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=1200&q=80&auto=format&fit=crop',
    short:
      'Saudi visit visas, Umrah packages and business services — your trusted gateway to the Kingdom.',
    description:
      'From spiritually fulfilling Umrah journeys to visit visas and business setup, our KSA desk is your complete gateway to the Kingdom of Saudi Arabia. We process visas, arrange end-to-end Umrah packages with visa, flights and hotels near the Haram, and support those looking to work or invest in the Kingdom — all managed with care and full guidance.',
    offerings: ['Visit Visa', 'Umrah Packages', 'Business Services'],
  },
]

export function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug)
}
