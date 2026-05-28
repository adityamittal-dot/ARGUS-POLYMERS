export default function Hero() {
  return (
    <section style={{ position: 'relative', minHeight: '85vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      {/* Background image + gradient overlay */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1,
          background: 'linear-gradient(to right, rgba(23,28,32,0.88) 0%, rgba(23,28,32,0.5) 50%, transparent 100%)'
        }} />
        <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&q=80"
          alt="Industrial precision manufacturing" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, padding: '0 48px', maxWidth: '1280px', margin: '0 auto', width: '100%' }}>
        <div style={{ maxWidth: '640px', color: '#fff', display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {/* Badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 12px', borderRadius: '9999px', backgroundColor: 'var(--brand)', color: '#fff', width: 'fit-content' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>precision_manufacturing</span>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Engineering Excellence</span>
          </div>

          <h1 style={{ fontFamily: 'Hanken Grotesk, sans-serif', fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em', margin: 0 }}>
            Precision Engineering.<br />Industrial Excellence.
          </h1>

          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', lineHeight: '28px', color: 'rgba(222,227,232,0.9)', maxWidth: '520px', margin: 0 }}>
            Your Full-Service Partner for High-Precision Moulds and Tooling. Delivering end-to-end solutions from design to assembly.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
            <a href="#contact" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '16px 32px', borderRadius: '4px', backgroundColor: 'var(--brand-dark)', color: '#fff', fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 600, textDecoration: 'none', boxShadow: '0 8px 24px rgba(0,0,0,0.3)', transition: 'filter 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.filter = 'brightness(1.15)')}
              onMouseLeave={(e) => (e.currentTarget.style.filter = 'none')}>
              Request Quote
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
            <a href="#services" style={{ padding: '16px 32px', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.3)', color: '#fff', fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 600, textDecoration: 'none', backdropFilter: 'blur(4px)', transition: 'background-color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}>
              View Services
            </a>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div style={{ position: 'absolute', bottom: '40px', right: '48px', zIndex: 2, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="hidden md:grid">
        {[{ value: '20+', label: 'Years Experience' }, { value: '500+', label: 'Projects Delivered' }].map((s) => (
          <div key={s.label} style={{ padding: '16px', borderRadius: '4px', backgroundColor: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.15)' }}>
            <p style={{ fontFamily: 'Hanken Grotesk, sans-serif', fontSize: '24px', fontWeight: 600, color: 'var(--brand-light)', margin: 0 }}>{s.value}</p>
            <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0 }}>{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
