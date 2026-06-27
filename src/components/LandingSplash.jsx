import ServiceTicker from './ServiceTicker'

const SPLASH_IMG = '/bg-new.png'

// Fixed, full-screen landing image that stays pinned while the rest of the page
// scrolls up and over it. The scrolling ad ticker sits at the top.
export default function LandingSplash() {
  return (
    <section
      id="home"
      className="fixed inset-0 z-0 h-screen w-full"
      style={{ background: 'linear-gradient(to bottom, #eaf2fb, #d7e6f4)' }}
      aria-label="Sky Fall International"
    >
      <img
        src={SPLASH_IMG}
        alt="Sky Fall International — Where Dreams Come True"
        className="h-full w-full object-cover object-center"
        loading="eager"
        onError={(e) => {
          e.currentTarget.style.display = 'none'
        }}
      />

      {/* Scrolling ad ticker, pinned at the top of the landing (below the navbar) */}
      <ServiceTicker />
    </section>
  )
}
