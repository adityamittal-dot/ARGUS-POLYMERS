export default function About() {
  return (
    <section id="about" style={{ padding: '80px 0', backgroundColor: 'var(--bg-alt)', transition: 'background-color 0.3s' }}>
      <div style={{ padding: '0 48px', maxWidth: '1280px', margin: '0 auto' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

          {/* Image column */}
          <div style={{ position: 'relative' }}>
            <div style={{ aspectRatio: '1', overflow: 'hidden', borderRadius: '4px', border: '1px solid var(--border)', transition: 'border-color 0.3s' }}>
              <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80"
                alt="Manufacturing Floor"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
            </div>
            {/* Mission card */}
            <div style={{ position: 'absolute', bottom: '-40px', right: '-24px', backgroundColor: 'var(--brand)', padding: '24px', borderRadius: '4px', boxShadow: '0 8px 32px rgba(0,0,0,0.2)', maxWidth: '240px' }}
              className="hidden lg:block">
              <p style={{ fontFamily: 'Hanken Grotesk, sans-serif', fontSize: '18px', fontWeight: 700, color: '#fff', margin: '0 0 8px' }}>Our Mission</p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: 'rgba(255,255,255,0.82)', fontStyle: 'italic', margin: 0 }}>
                "To deliver precision-engineered solutions at best costs with short lead times."
              </p>
            </div>
          </div>

          {/* Text column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', paddingLeft: '32px' }}>
            <div>
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', color: 'var(--brand)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '8px' }}>
                About Argus Polymers
              </span>
              <h2 style={{ fontFamily: 'Hanken Grotesk, sans-serif', fontSize: '32px', fontWeight: 600, lineHeight: '40px', margin: 0, color: 'var(--text-primary)' }}>
                Your Full-Service Partner
              </h2>
            </div>

            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', lineHeight: '28px', color: 'var(--text-secondary)', margin: 0 }}>
              At Argus Polymers, we specialize in the design and manufacture of high-quality injection moulds and tooling for plastic parts. With a commitment to excellence and efficiency, we deliver precision-engineered solutions backed by decades of experience.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: 'verified', title: 'Integrated Services', desc: 'Design to assembly, all in-house under one roof.' },
                { icon: 'query_stats', title: 'Optimized Outcomes', desc: 'Moulds designed for high durability and efficiency.' },
              ].map((item) => (
                <div key={item.title} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <span className="material-symbols-outlined" style={{ color: 'var(--brand)', marginTop: '2px', flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <h4 style={{ fontFamily: 'Hanken Grotesk, sans-serif', fontWeight: 700, color: 'var(--text-primary)', margin: '0 0 4px' }}>{item.title}</h4>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: 'var(--text-secondary)', margin: 0 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              style={{ alignSelf: 'flex-start', fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 600, color: 'var(--brand)', backgroundColor: 'transparent', border: 'none', borderBottom: '2px solid var(--brand)', padding: '8px 16px', cursor: 'pointer', transition: 'all 0.2s' }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--brand)'; e.currentTarget.style.color = '#fff' }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--brand)' }}>
              Read Company History
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
