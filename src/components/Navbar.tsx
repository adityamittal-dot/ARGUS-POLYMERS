import { useState, useEffect } from 'react'

interface NavbarProps {
  isDark: boolean
  toggleTheme: () => void
}

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Quality', href: '#quality' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const linkStyle: React.CSSProperties = {
    color: 'var(--text-secondary)',
    fontFamily: 'Inter, sans-serif',
    fontSize: '14px',
    fontWeight: 600,
    textDecoration: 'none',
    transition: 'color 0.2s',
  }

  return (
    <>
      {/* ─── Inject responsive styles ─── */}
      <style>{`
        .nav-desktop { display: none; }
        .nav-mobile  { display: flex; }
        @media (min-width: 1024px) {
          .nav-desktop { display: flex; align-items: center; gap: 32px; }
          .nav-mobile  { display: none; }
        }
        .mobile-menu { display: none; }
        .mobile-menu.open { display: block; }
        .nav-link:hover { color: var(--brand) !important; }
        .nav-btn:hover  { background-color: var(--surface-raised) !important; }
        .quote-btn:hover { background-color: var(--brand-dark) !important; }
        .footer-link:hover { color: var(--brand-light) !important; }
      `}</style>

      <header style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 50,
        borderBottom: '1px solid var(--border)',
        backgroundColor: scrolled ? 'rgba(var(--surface-rgb, 255,255,255), 0.96)' : 'rgba(var(--surface-rgb, 255,255,255), 0.82)',
        backdropFilter: 'blur(12px)',
        transition: 'all 0.3s ease',
        boxShadow: scrolled ? '0 4px 16px rgba(0,0,0,0.1)' : 'none',
        background: scrolled
          ? `color-mix(in srgb, var(--surface) 96%, transparent)`
          : `color-mix(in srgb, var(--surface) 82%, transparent)`,
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px', padding: '0 48px', maxWidth: '1280px', margin: '0 auto' }}>

          {/* Logo */}
          <a href="#" style={{ textDecoration: 'none' }}>
            <span style={{ fontFamily: 'Hanken Grotesk, sans-serif', fontSize: '22px', fontWeight: 700, color: 'var(--brand)', textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
              ARGUS POLYMERS
            </span>
          </a>

          {/* ── Desktop nav ── */}
          <nav className="nav-desktop">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link" style={linkStyle}>
                {link.label}
              </a>
            ))}

            <div style={{ width: '1px', height: '24px', backgroundColor: 'var(--border)', margin: '0 4px' }} />

            <button
              aria-label="Toggle theme"
              onClick={toggleTheme}
              className="nav-btn"
              style={{ padding: '8px', borderRadius: '50%', border: 'none', cursor: 'pointer', backgroundColor: 'transparent', color: 'var(--text-secondary)', transition: 'background 0.2s' }}
            >
              <span className="material-symbols-outlined">{isDark ? 'light_mode' : 'dark_mode'}</span>
            </button>

            <a href="#contact" className="quote-btn"
              style={{ padding: '10px 24px', borderRadius: '4px', backgroundColor: 'var(--brand)', color: '#fff', fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 600, textDecoration: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.15)', transition: 'background-color 0.2s' }}>
              Request Quote
            </a>
          </nav>

          {/* ── Mobile controls ── */}
          <div className="nav-mobile" style={{ alignItems: 'center', gap: '8px' }}>
            <button onClick={toggleTheme} style={{ padding: '8px', border: 'none', backgroundColor: 'transparent', cursor: 'pointer', color: 'var(--text-secondary)' }}>
              <span className="material-symbols-outlined">{isDark ? 'light_mode' : 'dark_mode'}</span>
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} style={{ border: 'none', backgroundColor: 'transparent', cursor: 'pointer', color: 'var(--brand)' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>{menuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>

        {/* ── Mobile dropdown menu ── */}
        <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}
          style={{ backgroundColor: 'var(--surface)', borderTop: '1px solid var(--border)', padding: '16px 24px 24px', transition: 'background-color 0.3s' }}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
              style={{ display: 'block', padding: '12px 0', color: 'var(--text-secondary)', fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 600, textDecoration: 'none', borderBottom: '1px solid var(--border)' }}>
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)}
            style={{ display: 'block', textAlign: 'center', marginTop: '16px', padding: '12px 24px', borderRadius: '4px', backgroundColor: 'var(--brand)', color: '#fff', fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 600, textDecoration: 'none' }}>
            Request Quote
          </a>
        </div>
      </header>
    </>
  )
}
