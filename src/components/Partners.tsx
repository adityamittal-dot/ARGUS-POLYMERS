const partners = [
  { name: 'BOSCH', type: 'Automotive Partner' },
  { name: 'TATA MOTORS', type: 'Tier 1 Supplier' },
  { name: 'PHILIPS', type: 'Electronic Parts' },
  { name: 'MARUTI SUZUKI', type: 'OEM Partner' },
  { name: 'SIEMENS', type: 'Industrial Solutions' },
  { name: 'MAHINDRA', type: 'Precision Moulding' },
]

export default function Partners() {
  return (
    <section className="py-20 overflow-hidden" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-[1280px] mx-auto px-12 mb-8 text-center space-y-2">
        <span
          className="uppercase text-xs tracking-widest"
          style={{ fontFamily: 'JetBrains Mono, monospace', color: '#740004' }}
        >
          Our Network
        </span>
        <h2 style={{ fontFamily: 'Hanken Grotesk, sans-serif', fontSize: '32px', fontWeight: 600, margin: 0 }}>
          Our Trusted Partners
        </h2>
      </div>

      <div className="relative flex items-center">
        {/* Fade left */}
        <div
          className="absolute left-0 top-0 bottom-0 w-24 md:w-48 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #ffffff, transparent)' }}
        />

        {/* Scrolling marquee — doubled for seamless loop */}
        <div className="animate-marquee items-center py-4">
          {[...partners, ...partners].map((p, i) => (
            <div
              key={i}
              className="flex flex-col items-center mx-12 md:mx-16 transition-all duration-300"
              style={{ opacity: 0.45, filter: 'grayscale(100%)' }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.opacity = '1'
                el.style.filter = 'none'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.opacity = '0.45'
                el.style.filter = 'grayscale(100%)'
              }}
            >
              <span
                className="font-bold uppercase tracking-tighter"
                style={{ fontFamily: 'Hanken Grotesk, sans-serif', fontSize: '20px', color: '#334155' }}
              >
                {p.name}
              </span>
              <span
                className="text-xs"
                style={{ fontFamily: 'JetBrains Mono, monospace', color: 'rgba(51,65,85,0.5)' }}
              >
                {p.type}
              </span>
            </div>
          ))}
        </div>

        {/* Fade right */}
        <div
          className="absolute right-0 top-0 bottom-0 w-24 md:w-48 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #ffffff, transparent)' }}
        />
      </div>
    </section>
  )
}
