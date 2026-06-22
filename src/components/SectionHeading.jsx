export default function SectionHeading({ eyebrow, title, subtitle, light = false, center = true }) {
  return (
    <div className={`${center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}`}>
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] ${
            light ? 'bg-white/10 text-accent-300' : 'bg-primary-50 text-primary'
          }`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl ${
          light ? 'text-white' : 'text-primary-950'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base leading-relaxed ${light ? 'text-white/75' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
