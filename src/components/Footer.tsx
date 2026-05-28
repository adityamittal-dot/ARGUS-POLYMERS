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
    <footer style={{ backgroundColor: '#2b3135', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-12 py-12 max-w-[1280px] mx-auto"
        style={{ color: '#8b949e' }}>
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span
              className="font-bold uppercase text-xl"
              style={{ fontFamily: 'Hanken Grotesk, sans-serif', color: '#ecf1f6' }}
            >
              ARGUS POLYMERS
            </span>
          </div>
          <p className="text-sm" style={{ opacity: 0.6, fontFamily: 'Inter, sans-serif' }}>
            Precision Engineering &amp; Industrial Manufacturing Excellence since inception.
          </p>
        </div>

        {/* Navigation */}
        <div className="space-y-4">
          <h5 className="text-xs font-bold uppercase tracking-widest" style={{ color: '#ecf1f6' }}>
            Navigation
          </h5>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm transition-colors"
                  style={{ color: '#8b949e', fontFamily: 'Inter, sans-serif' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ffb4aa')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#8b949e')}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="space-y-4">
          <h5 className="text-xs font-bold uppercase tracking-widest" style={{ color: '#ecf1f6' }}>
            Services
          </h5>
          <ul className="space-y-2">
            {serviceLinks.map((s) => (
              <li key={s}>
                <a
                  href="#services"
                  className="text-sm transition-colors"
                  style={{ color: '#8b949e', fontFamily: 'Inter, sans-serif' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ffb4aa')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#8b949e')}
                >
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Policy */}
        <div className="space-y-4">
          <h5 className="text-xs font-bold uppercase tracking-widest" style={{ color: '#ecf1f6' }}>
            Policy
          </h5>
          <ul className="space-y-2">
            {policyLinks.map((p) => (
              <li key={p}>
                <a
                  href="#"
                  className="text-sm transition-colors"
                  style={{ color: '#8b949e', fontFamily: 'Inter, sans-serif' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ffb4aa')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#8b949e')}
                >
                  {p}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div
        className="px-12 py-4 max-w-[1280px] mx-auto border-t text-center"
        style={{ borderColor: 'rgba(255,255,255,0.08)' }}
      >
        <p
          className="text-xs"
          style={{ fontFamily: 'JetBrains Mono, monospace', color: 'rgba(139,148,158,0.5)' }}
        >
          © 2024 Argus Polymers Ltd. Precision Engineering &amp; Industrial Manufacturing. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
