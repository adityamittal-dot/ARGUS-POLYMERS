export default function About() {
  return (
    <section id="about" className="py-20" style={{ backgroundColor: '#eff4f9' }}>
      <div className="px-12 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Image column */}
          <div className="relative">
            <div
              className="aspect-square overflow-hidden rounded border"
              style={{ backgroundColor: '#d5dbdf', border: '1px solid #e3beb9' }}
            >
              <img
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80"
                alt="Manufacturing Floor"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            {/* Mission card */}
            <div
              className="absolute -bottom-10 -right-6 hidden lg:block p-6 rounded shadow-xl max-w-[240px]"
              style={{ backgroundColor: '#740004' }}
            >
              <p className="font-bold text-white mb-2" style={{ fontFamily: 'Hanken Grotesk, sans-serif', fontSize: '18px' }}>
                Our Mission
              </p>
              <p className="text-sm italic" style={{ color: 'rgba(255,255,255,0.8)' }}>
                "To deliver precision-engineered solutions at best costs with short lead times."
              </p>
            </div>
          </div>

          {/* Text column */}
          <div className="space-y-8 md:pl-8">
            <div className="space-y-2">
              <span
                className="uppercase text-xs tracking-widest"
                style={{ fontFamily: 'JetBrains Mono, monospace', color: '#740004' }}
              >
                About Argus Polymers
              </span>
              <h2 style={{ fontFamily: 'Hanken Grotesk, sans-serif', fontSize: '32px', fontWeight: 600, lineHeight: '40px', margin: 0 }}>
                Your Full-Service Partner
              </h2>
            </div>

            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', lineHeight: '28px', color: '#515f74' }}>
              At Argus Polymers, we specialize in the design and manufacture of high-quality injection moulds and tooling for plastic parts. With a commitment to excellence and efficiency, we deliver precision-engineered solutions backed by decades of experience.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: 'verified',
                  title: 'Integrated Services',
                  desc: 'Design to assembly, all in-house under one roof.',
                },
                {
                  icon: 'query_stats',
                  title: 'Optimized Outcomes',
                  desc: 'Moulds designed for high durability and efficiency.',
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <span className="material-symbols-outlined mt-1" style={{ color: '#740004' }}>
                    {item.icon}
                  </span>
                  <div>
                    <h4
                      className="font-bold mb-1"
                      style={{ fontFamily: 'Hanken Grotesk, sans-serif', color: '#171c20' }}
                    >
                      {item.title}
                    </h4>
                    <p className="text-sm" style={{ color: '#515f74', fontFamily: 'Inter, sans-serif' }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="text-sm font-semibold px-4 py-2 border-b-2 transition-all"
              style={{
                fontFamily: 'Inter, sans-serif',
                color: '#740004',
                borderColor: '#740004',
                backgroundColor: 'transparent',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#740004'
                e.currentTarget.style.color = '#ffffff'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.color = '#740004'
              }}
            >
              Read Company History
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
