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
    <section style={{ padding: '80px 0', backgroundColor: 'var(--surface)', overflow: 'hidden', transition: 'background-color 0.3s' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 48px', textAlign: 'center', marginBottom: '32px' }}>
        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', color: 'var(--brand)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '8px' }}>
          Our Network
        </span>
        <h2 style={{ fontFamily: 'Hanken Grotesk, sans-serif', fontSize: '32px', fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>
          Our Trusted Partners
        </h2>
      </div>

      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        {/* Fade left */}
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '160px', background: 'linear-gradient(to right, var(--surface), transparent)', zIndex: 10, pointerEvents: 'none', transition: 'background 0.3s' }} />

        <div className="animate-marquee" style={{ alignItems: 'center', padding: '16px 0' }}>
          {[...partners, ...partners].map((p, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 48px', opacity: 0.45, filter: 'grayscale(100%)', transition: 'all 0.3s', cursor: 'default' }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.filter = 'none' }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.45'; e.currentTarget.style.filter = 'grayscale(100%)' }}>
              <span style={{ fontFamily: 'Hanken Grotesk, sans-serif', fontSize: '20px', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '-0.02em' }}>{p.name}</span>
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: 'var(--text-muted)' }}>{p.type}</span>
            </div>
          ))}
        </div>

        {/* Fade right */}
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '160px', background: 'linear-gradient(to left, var(--surface), transparent)', zIndex: 10, pointerEvents: 'none', transition: 'background 0.3s' }} />
      </div>
    </section>
  )
}
