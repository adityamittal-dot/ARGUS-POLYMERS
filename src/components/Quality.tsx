const certs = [
  { icon: 'verified_user', title: 'ISO 9001:2015', desc: 'Certified Quality Management' },
  { icon: 'eco', title: 'RoHS COMPLIANT', desc: 'Environmental Safety Standards' },
  { icon: 'precision_manufacturing', title: '6 SIGMA', desc: 'Process Improvement Accuracy' },
  { icon: 'fact_check', title: 'LEAN MFG', desc: 'Efficiency Optimized Workflow' },
]

export default function Quality() {
  return (
    <section
      id="quality"
      className="py-20 border-y"
      style={{ backgroundColor: '#ffffff', borderColor: '#e3beb9' }}
    >
      <div className="px-12 max-w-[1280px] mx-auto text-center">
        <span
          className="uppercase text-xs tracking-widest"
          style={{ fontFamily: 'JetBrains Mono, monospace', color: '#740004' }}
        >
          Standards of Excellence
        </span>
        <h2
          className="mb-8 mt-2"
          style={{ fontFamily: 'Hanken Grotesk, sans-serif', fontSize: '32px', fontWeight: 600 }}
        >
          Quality &amp; Certification
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {certs.map((cert) => (
            <div
              key={cert.title}
              className="p-8 border flex flex-col items-center gap-4 group transition-colors cursor-default"
              style={{ border: '1px solid #e3beb9' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#eff4f9')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
                style={{ backgroundColor: '#e9eef3' }}
              >
                <span className="material-symbols-outlined text-3xl" style={{ color: '#740004' }}>
                  {cert.icon}
                </span>
              </div>
              <h4
                className="text-sm font-semibold"
                style={{ fontFamily: 'Inter, sans-serif', color: '#171c20' }}
              >
                {cert.title}
              </h4>
              <p className="text-xs" style={{ color: '#515f74', fontFamily: 'Inter, sans-serif' }}>
                {cert.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
