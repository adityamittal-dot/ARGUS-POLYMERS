const services = [
  {
    id: 'injection',
    colSpan: 'md:col-span-8',
    type: 'image-card',
    icon: 'factory',
    title: 'Injection Moulding',
    description:
      'Specializing in high-precision surface critical components. Our world-class facility handles rapid prototypes and on-demand production within days.',
    bullets: ['RAPID PROTOTYPES', 'ON-DEMAND PARTS', 'GLOBAL QUALITY STANDARDS'],
    image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80',
    imageAlt: 'Injection moulding machinery',
    reverse: false,
  },
  {
    id: 'assembly',
    colSpan: 'md:col-span-8',
    type: 'image-card',
    icon: 'settings_input_component',
    title: 'Product Assembly',
    description:
      'Comprehensive electrical and mechanical assembly services. SMT lines and wave soldering machines equipped for both RoHS and Non-RoHS assemblies.',
    bullets: [],
    tags: ['RoHS COMPLIANT', '3D SPI / AOI'],
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
    imageAlt: 'Product assembly line',
    reverse: true,
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 relative bg-white overflow-hidden">
      <div className="precision-grid absolute inset-0" />

      <div className="px-12 max-w-[1280px] mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div className="space-y-2">
            <span
              className="uppercase text-xs tracking-widest"
              style={{ fontFamily: 'JetBrains Mono, monospace', color: '#740004', letterSpacing: '0.08em' }}
            >
              Our Capabilities
            </span>
            <h2 style={{ fontFamily: 'Hanken Grotesk, sans-serif', fontSize: '32px', fontWeight: 600, lineHeight: '40px', margin: 0 }}>
              Manufacturing Prowess
            </h2>
          </div>
          <p className="max-w-md text-sm" style={{ color: '#515f74', fontFamily: 'Inter, sans-serif' }}>
            Advanced machinery and engineering expertise to transform complex needs into high-performance industrial components.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Injection Moulding */}
          <div className="md:col-span-8 group relative overflow-hidden bg-white border rounded transition-all hover:border-[#740004]"
            style={{ border: '1px solid #e3beb9' }}>
            <div className="flex flex-col md:flex-row gap-8 p-8">
              <div className="flex-1 space-y-4">
                <span className="material-symbols-outlined text-4xl" style={{ color: '#740004' }}>factory</span>
                <h3 style={{ fontFamily: 'Hanken Grotesk, sans-serif', fontSize: '24px', fontWeight: 600, margin: 0 }}>
                  Injection Moulding
                </h3>
                <p className="text-sm" style={{ color: '#515f74', fontFamily: 'Inter, sans-serif' }}>
                  Specializing in high-precision surface critical components. Our world-class facility handles rapid prototypes and on-demand production within days.
                </p>
                <ul className="space-y-2">
                  {['RAPID PROTOTYPES', 'ON-DEMAND PARTS', 'GLOBAL QUALITY STANDARDS'].map((item) => (
                    <li key={item} className="flex items-center gap-2"
                      style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', color: '#5a403d' }}>
                      <div className="w-1.5 h-1.5" style={{ backgroundColor: '#740004' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full md:w-1/2 h-64 overflow-hidden rounded">
                <img
                  src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80"
                  alt="Injection moulding"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Tool Development */}
          <div className="md:col-span-4 rounded p-8 flex flex-col justify-between group shadow-lg"
            style={{ backgroundColor: '#740004', color: '#ffffff' }}>
            <div className="space-y-4">
              <span className="material-symbols-outlined text-4xl">construction</span>
              <h3 style={{ fontFamily: 'Hanken Grotesk, sans-serif', fontSize: '24px', fontWeight: 600, margin: 0 }}>
                Tool Development
              </h3>
              <p className="text-sm" style={{ opacity: 0.85, fontFamily: 'Inter, sans-serif' }}>
                Developing high-precision Moulds for automotive, appliances, lighting, and electrical sectors using advanced CAD/CAM technology.
              </p>
            </div>
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-transform group-hover:translate-x-2"
                style={{ fontFamily: 'Inter, sans-serif', color: '#ffb4aa' }}
              >
                Learn More <span className="material-symbols-outlined">arrow_right_alt</span>
              </a>
            </div>
          </div>

          {/* Design & Engineering */}
          <div className="md:col-span-4 rounded p-8 space-y-4 border"
            style={{ backgroundColor: '#e9eef3', border: '1px solid #e3beb9' }}>
            <span className="material-symbols-outlined text-4xl" style={{ color: '#515f74' }}>architecture</span>
            <h3 style={{ fontFamily: 'Hanken Grotesk, sans-serif', fontSize: '24px', fontWeight: 600, margin: 0 }}>
              Design &amp; Engineering
            </h3>
            <p className="text-sm" style={{ color: '#515f74', fontFamily: 'Inter, sans-serif' }}>
              End-to-end product design considering part geometry, wall thickness, and draft angles to ensure high-quality finished products.
            </p>
          </div>

          {/* Product Assembly */}
          <div className="md:col-span-8 group relative overflow-hidden bg-white border rounded transition-all hover:border-[#740004]"
            style={{ border: '1px solid #e3beb9' }}>
            <div className="flex flex-col md:flex-row-reverse gap-8 p-8">
              <div className="flex-1 space-y-4">
                <span className="material-symbols-outlined text-4xl" style={{ color: '#740004' }}>settings_input_component</span>
                <h3 style={{ fontFamily: 'Hanken Grotesk, sans-serif', fontSize: '24px', fontWeight: 600, margin: 0 }}>
                  Product Assembly
                </h3>
                <p className="text-sm" style={{ color: '#515f74', fontFamily: 'Inter, sans-serif' }}>
                  Comprehensive electrical and mechanical assembly services. SMT lines and wave soldering machines equipped for both RoHS and Non-RoHS assemblies.
                </p>
                <div className="flex gap-3">
                  {['RoHS COMPLIANT', '3D SPI / AOI'].map((tag) => (
                    <span key={tag} className="px-3 py-1.5 rounded text-xs"
                      style={{ backgroundColor: '#e4e9ee', color: '#515f74', fontFamily: 'JetBrains Mono, monospace' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="w-full md:w-1/2 h-64 overflow-hidden rounded">
                <img
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80"
                  alt="Product assembly"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
