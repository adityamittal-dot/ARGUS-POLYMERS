const certs = [
  { icon: 'verified_user', title: 'ISO 9001:2015', desc: 'Certified Quality Management' },
  { icon: 'eco', title: 'RoHS COMPLIANT', desc: 'Environmental Safety Standards' },
  { icon: 'precision_manufacturing', title: '6 SIGMA', desc: 'Process Improvement Accuracy' },
  { icon: 'fact_check', title: 'LEAN MFG', desc: 'Efficiency Optimized Workflow' },
]

export default function Quality() {
  return (
    <section id="quality" style={{ padding: '80px 0', backgroundColor: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', transition: 'background-color 0.3s, border-color 0.3s' }}>
      <div style={{ padding: '0 48px', maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', color: 'var(--brand)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          Standards of Excellence
        </span>
        <h2 style={{ fontFamily: 'Hanken Grotesk, sans-serif', fontSize: '32px', fontWeight: 600, color: 'var(--text-primary)', margin: '8px 0 32px' }}>
          Quality &amp; Certification
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {certs.map((cert) => (
            <div key={cert.title}
              style={{ padding: '32px 16px', border: '1px solid var(--border)', borderRadius: '4px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', transition: 'background-color 0.2s, border-color 0.3s', cursor: 'default' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--bg-alt)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'var(--cert-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.2s, background-color 0.3s' }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}>
                <span className="material-symbols-outlined" style={{ fontSize: '28px', color: 'var(--brand)' }}>{cert.icon}</span>
              </div>
              <h4 style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>{cert.title}</h4>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: 'var(--text-secondary)', margin: 0 }}>{cert.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
