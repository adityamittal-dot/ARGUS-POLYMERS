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

  return (
    <header
      className={`fixed top-0 w-full z-50 border-b transition-all duration-300 ${
        scrolled
          ? 'shadow-lg border-[#e3beb9] bg-white/95 backdrop-blur-md py-2'
          : 'border-[#e3beb9] bg-white/80 backdrop-blur-md py-0'
      } ${isDark ? '!bg-[rgba(22,27,34,0.92)] !border-[#30363d]' : ''}`}
    >
      <div className="flex justify-between items-center h-20 px-12 max-w-[1280px] mx-auto">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span
            className="text-2xl font-bold tracking-tight uppercase"
            style={{ fontFamily: 'Hanken Grotesk, sans-serif', color: '#740004' }}
          >
            ARGUS POLYMERS
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold transition-colors duration-200"
              style={{ color: isDark ? '#8b949e' : '#515f74', fontFamily: 'Inter, sans-serif' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#740004')}
              onMouseLeave={(e) => (e.currentTarget.style.color = isDark ? '#8b949e' : '#515f74')}
            >
              {link.label}
            </a>
          ))}

          <div className="h-6 w-px bg-[#e3beb9] mx-2" />

          <div className="flex items-center gap-4">
            <button
              aria-label="Toggle theme"
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-[#e9eef3] transition-colors"
              style={{ color: '#515f74' }}
            >
              <span className="material-symbols-outlined">
                {isDark ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
            <a
              href="#contact"
              className="px-6 py-2.5 rounded text-sm font-semibold text-white transition-all shadow-sm hover:shadow-lg active:scale-95"
              style={{ backgroundColor: '#740004', fontFamily: 'Inter, sans-serif' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#9c0f0f')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#740004')}
            >
              Request Quote
            </a>
          </div>
        </nav>

        {/* Mobile */}
        <div className="lg:hidden flex items-center gap-3">
          <button onClick={toggleTheme} className="p-2" style={{ color: '#515f74' }}>
            <span className="material-symbols-outlined">{isDark ? 'light_mode' : 'dark_mode'}</span>
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} style={{ color: '#740004' }}>
            <span className="material-symbols-outlined text-3xl">{menuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="lg:hidden px-6 pb-6 space-y-4 border-t"
          style={{ borderColor: isDark ? '#30363d' : '#e3beb9', backgroundColor: isDark ? '#161b22' : '#fff' }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-sm font-semibold"
              style={{ color: isDark ? '#8b949e' : '#515f74', fontFamily: 'Inter, sans-serif' }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block w-full text-center px-6 py-3 rounded text-sm font-semibold text-white mt-2"
            style={{ backgroundColor: '#740004', fontFamily: 'Inter, sans-serif' }}
          >
            Request Quote
          </a>
        </div>
      )}
    </header>
  )
}
