const navLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'ISO Certifications', href: '#quality' },
  { label: 'Sitemap', href: '#' },
]
const serviceLinks = ['Injection Moulding', 'Tool Development', 'Design & Engineering', 'Assembly']
const policyLinks = ['Privacy Policy', 'Terms of Service', 'Cookies Policy']

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--inverse-bg)', borderTop: '1px solid var(--footer-border)', transition: 'background-color 0.3s' }}>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6" style={{ padding: '48px 48px', maxWidth: '1280px', margin: '0 auto' }}>
        {/* Brand */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <span style={{ fontFamily: 'Hanken Grotesk, sans-serif', fontSize: '20px', fontWeight: 700, color: 'var(--inverse-text)', textTransform: 'uppercase' }}>
            ARGUS POLYMERS
          </span>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: 'var(--inverse-subtle)', margin: 0 }}>
            Precision Engineering &amp; Industrial Manufacturing Excellence since inception.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h5 style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--inverse-text)', margin: '0 0 16px' }}>Navigation</h5>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: 'var(--inverse-subtle)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--brand-light)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--inverse-subtle)')}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h5 style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--inverse-text)', margin: '0 0 16px' }}>Services</h5>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {serviceLinks.map((s) => (
              <li key={s}>
                <a href="#services" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: 'var(--inverse-subtle)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--brand-light)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--inverse-subtle)')}>
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Policy */}
        <div>
          <h5 style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--inverse-text)', margin: '0 0 16px' }}>Policy</h5>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {policyLinks.map((p) => (
              <li key={p}>
                <a href="#" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: 'var(--inverse-subtle)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--brand-light)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--inverse-subtle)')}>
                  {p}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div style={{ padding: '16px 48px', maxWidth: '1280px', margin: '0 auto', borderTop: '1px solid var(--footer-border)', textAlign: 'center' }}>
        <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', color: 'var(--inverse-subtle)', opacity: 0.6, margin: 0 }}>
          © 2024 Argus Polymers Ltd. Precision Engineering &amp; Industrial Manufacturing. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
