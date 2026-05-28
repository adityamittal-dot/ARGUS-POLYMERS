export default function Services() {
  return (
    <section id="services" className="py-20 relative overflow-hidden" style={{ backgroundColor: 'var(--surface)', transition: 'background-color 0.3s' }}>
      <div className="precision-grid absolute inset-0" />

      <div style={{ padding: '0 48px', maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        {/* Header */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '32px', gap: '16px' }}>
          <div>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', color: 'var(--brand)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '8px' }}>
              Our Capabilities
            </span>
            <h2 style={{ fontFamily: 'Hanken Grotesk, sans-serif', fontSize: '32px', fontWeight: 600, lineHeight: '40px', margin: 0, color: 'var(--text-primary)' }}>
              Manufacturing Prowess
            </h2>
          </div>
          <p style={{ maxWidth: '420px', fontSize: '14px', color: 'var(--text-secondary)', fontFamily: 'Inter, sans-serif', margin: 0 }}>
            Advanced machinery and engineering expertise to transform complex needs into high-performance industrial components.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* Injection Moulding — col 8 */}
          <div className="md:col-span-8 group" style={{ backgroundColor: 'var(--surface-card)', border: '1px solid var(--border)', borderRadius: '4px', overflow: 'hidden', transition: 'border-color 0.2s, background-color 0.3s' }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--brand)')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}>
            <div className="flex flex-col md:flex-row gap-8 p-8">
              <div className="flex-1 space-y-4">
                <span className="material-symbols-outlined text-4xl" style={{ color: 'var(--brand)' }}>factory</span>
                <h3 style={{ fontFamily: 'Hanken Grotesk, sans-serif', fontSize: '24px', fontWeight: 600, margin: 0, color: 'var(--text-primary)' }}>Injection Moulding</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', fontFamily: 'Inter, sans-serif' }}>
                  Specializing in high-precision surface critical components. Our world-class facility handles rapid prototypes and on-demand production within days.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {['RAPID PROTOTYPES', 'ON-DEMAND PARTS', 'GLOBAL QUALITY STANDARDS'].map((item) => (
                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', color: 'var(--text-muted)' }}>
                      <div style={{ width: '6px', height: '6px', backgroundColor: 'var(--brand)', flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ width: '100%', maxWidth: '50%', height: '256px', overflow: 'hidden', borderRadius: '4px' }}>
                <img src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80" alt="Injection moulding"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            </div>
          </div>

          {/* Tool Development — col 4, always brand bg */}
          <div className="md:col-span-4 group" style={{ backgroundColor: 'var(--brand)', borderRadius: '4px', padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 4px 20px rgba(0,0,0,0.15)' }}>
            <div>
              <span className="material-symbols-outlined text-4xl" style={{ color: '#fff' }}>construction</span>
              <h3 style={{ fontFamily: 'Hanken Grotesk, sans-serif', fontSize: '24px', fontWeight: 600, margin: '16px 0 12px', color: '#fff' }}>Tool Development</h3>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.85)', fontFamily: 'Inter, sans-serif' }}>
                Developing high-precision Moulds for automotive, appliances, lighting, and electrical sectors using advanced CAD/CAM technology.
              </p>
            </div>
            <a href="#contact" className="group-hover:translate-x-2 transition-transform inline-flex items-center gap-2"
              style={{ marginTop: '32px', color: 'var(--brand-light)', fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 600, textDecoration: 'none' }}>
              Learn More <span className="material-symbols-outlined">arrow_right_alt</span>
            </a>
          </div>

          {/* Design & Engineering — col 4 */}
          <div className="md:col-span-4" style={{ backgroundColor: 'var(--surface-raised)', border: '1px solid var(--border)', borderRadius: '4px', padding: '32px', transition: 'background-color 0.3s' }}>
            <span className="material-symbols-outlined text-4xl" style={{ color: 'var(--text-secondary)' }}>architecture</span>
            <h3 style={{ fontFamily: 'Hanken Grotesk, sans-serif', fontSize: '24px', fontWeight: 600, margin: '16px 0 12px', color: 'var(--text-primary)' }}>Design &amp; Engineering</h3>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', fontFamily: 'Inter, sans-serif' }}>
              End-to-end product design considering part geometry, wall thickness, and draft angles to ensure high-quality finished products.
            </p>
          </div>

          {/* Product Assembly — col 8 */}
          <div className="md:col-span-8 group" style={{ backgroundColor: 'var(--surface-card)', border: '1px solid var(--border)', borderRadius: '4px', overflow: 'hidden', transition: 'border-color 0.2s, background-color 0.3s' }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--brand)')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}>
            <div className="flex flex-col md:flex-row-reverse gap-8 p-8">
              <div className="flex-1 space-y-4">
                <span className="material-symbols-outlined text-4xl" style={{ color: 'var(--brand)' }}>settings_input_component</span>
                <h3 style={{ fontFamily: 'Hanken Grotesk, sans-serif', fontSize: '24px', fontWeight: 600, margin: 0, color: 'var(--text-primary)' }}>Product Assembly</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', fontFamily: 'Inter, sans-serif' }}>
                  Comprehensive electrical and mechanical assembly services. SMT lines and wave soldering machines equipped for both RoHS and Non-RoHS assemblies.
                </p>
                <div style={{ display: 'flex', gap: '12px' }}>
                  {['RoHS COMPLIANT', '3D SPI / AOI'].map((tag) => (
                    <span key={tag} style={{ padding: '6px 12px', borderRadius: '4px', backgroundColor: 'var(--tag-bg)', color: 'var(--text-secondary)', fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', transition: 'background-color 0.3s' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div style={{ width: '100%', maxWidth: '50%', height: '256px', overflow: 'hidden', borderRadius: '4px' }}>
                <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80" alt="Product assembly"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
