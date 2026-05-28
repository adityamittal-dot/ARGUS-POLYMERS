export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-10" style={{
          background: 'linear-gradient(to right, rgba(23,28,32,0.85) 0%, rgba(23,28,32,0.45) 50%, transparent 100%)'
        }} />
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&q=80"
          alt="Industrial precision manufacturing"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 px-12 max-w-[1280px] mx-auto w-full">
        <div className="max-w-2xl text-white space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-white text-xs font-medium uppercase tracking-widest"
            style={{ backgroundColor: '#740004', fontFamily: 'JetBrains Mono, monospace' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>precision_manufacturing</span>
            Engineering Excellence
          </div>

          {/* Headline */}
          <h1 style={{
            fontFamily: 'Hanken Grotesk, sans-serif',
            fontSize: 'clamp(40px, 5vw, 64px)',
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
          }}>
            Precision Engineering.<br />Industrial Excellence.
          </h1>

          {/* Subtext */}
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '18px',
            lineHeight: '28px',
            color: 'rgba(222,227,232,0.9)',
            maxWidth: '520px',
          }}>
            Your Full-Service Partner for High-Precision Moulds and Tooling. Delivering end-to-end solutions from design to assembly.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#contact"
              className="flex items-center gap-2 px-8 py-4 rounded font-semibold text-white text-sm shadow-xl transition-all active:scale-95"
              style={{ backgroundColor: '#9c0f0f', fontFamily: 'Inter, sans-serif' }}
              onMouseEnter={(e) => (e.currentTarget.style.filter = 'brightness(1.15)')}
              onMouseLeave={(e) => (e.currentTarget.style.filter = 'none')}
            >
              Request Quote
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
            <a
              href="#services"
              className="px-8 py-4 rounded font-semibold text-white text-sm transition-all"
              style={{
                fontFamily: 'Inter, sans-serif',
                border: '1px solid rgba(255,255,255,0.3)',
                backdropFilter: 'blur(4px)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              View Services
            </a>
          </div>
        </div>
      </div>

      {/* Stats — bottom right */}
      <div className="absolute bottom-10 right-12 z-20 hidden md:grid grid-cols-2 gap-4">
        {[
          { value: '20+', label: 'Years Experience' },
          { value: '500+', label: 'Projects Delivered' },
        ].map((stat) => (
          <div
            key={stat.label}
            className="p-4 rounded"
            style={{
              backgroundColor: 'rgba(255,255,255,0.08)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.15)',
            }}
          >
            <p style={{ fontFamily: 'Hanken Grotesk, sans-serif', fontSize: '24px', fontWeight: 600, color: '#ffb4aa', margin: 0 }}>
              {stat.value}
            </p>
            <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0 }}>
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
