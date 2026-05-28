import { useState, type FormEvent } from 'react'

const contactInfo = [
  { icon: 'call', label: 'Phone Support', value: '+91-991-006-2449' },
  { icon: 'mail', label: 'Direct Email', value: 'arguspolymer82@gmail.com' },
  { icon: 'location_on', label: 'HQ Location', value: 'Faridabad, Haryana, India' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', email: '', message: '' })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    alert('Enquiry sent! We will get back to you shortly.')
    setForm({ name: '', company: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-20" style={{ backgroundColor: '#2b3135', color: '#ecf1f6' }}>
      <div className="px-12 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left info */}
          <div className="lg:col-span-5 space-y-8">
            <h2
              style={{
                fontFamily: 'Hanken Grotesk, sans-serif',
                fontSize: 'clamp(32px, 4vw, 48px)',
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                margin: 0,
              }}
            >
              Start Your Project
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', lineHeight: '28px', color: '#dee3e8' }}>
              Have plastic processing needs? Let our engineering team review your requirements and provide a technical proposal.
            </p>

            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-4 group">
                  <div
                    className="w-10 h-10 rounded flex items-center justify-center transition-transform group-hover:scale-110"
                    style={{ backgroundColor: '#740004' }}
                  >
                    <span className="material-symbols-outlined text-white" style={{ fontSize: '20px' }}>
                      {item.icon}
                    </span>
                  </div>
                  <div>
                    <p
                      className="text-xs uppercase"
                      style={{ fontFamily: 'JetBrains Mono, monospace', color: '#dee3e8', margin: 0 }}
                    >
                      {item.label}
                    </p>
                    <p className="font-bold" style={{ fontFamily: 'Inter, sans-serif', margin: 0 }}>
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded space-y-4 shadow-2xl"
              style={{ backgroundColor: '#ffffff', color: '#171c20' }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { id: 'name', label: 'Full Name', placeholder: 'John Doe', type: 'text' },
                  { id: 'company', label: 'Company', placeholder: 'Engineering Ltd', type: 'text' },
                ].map((field) => (
                  <div key={field.id} className="space-y-1">
                    <label
                      htmlFor={field.id}
                      className="block text-xs uppercase"
                      style={{ fontFamily: 'JetBrains Mono, monospace', color: '#515f74' }}
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      type={field.type}
                      placeholder={field.placeholder}
                      value={form[field.id as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                      required
                      className="w-full px-3 py-3 rounded border text-sm outline-none transition-all"
                      style={{
                        border: '1px solid #8e706c',
                        backgroundColor: '#eff4f9',
                        fontFamily: 'Inter, sans-serif',
                        color: '#171c20',
                      }}
                      onFocus={(e) => (e.target.style.border = '2px solid #9c0f0f')}
                      onBlur={(e) => (e.target.style.border = '1px solid #8e706c')}
                    />
                  </div>
                ))}
              </div>

              <div className="space-y-1">
                <label htmlFor="email" className="block text-xs uppercase"
                  style={{ fontFamily: 'JetBrains Mono, monospace', color: '#515f74' }}>
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="john@company.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="w-full px-3 py-3 rounded text-sm outline-none transition-all"
                  style={{ border: '1px solid #8e706c', backgroundColor: '#eff4f9', fontFamily: 'Inter, sans-serif', color: '#171c20' }}
                  onFocus={(e) => (e.target.style.border = '2px solid #9c0f0f')}
                  onBlur={(e) => (e.target.style.border = '1px solid #8e706c')}
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="block text-xs uppercase"
                  style={{ fontFamily: 'JetBrains Mono, monospace', color: '#515f74' }}>
                  Message / Requirements
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Describe your project tooling needs..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  className="w-full px-3 py-3 rounded text-sm outline-none transition-all resize-none"
                  style={{ border: '1px solid #8e706c', backgroundColor: '#eff4f9', fontFamily: 'Inter, sans-serif', color: '#171c20' }}
                  onFocus={(e) => (e.target.style.border = '2px solid #9c0f0f')}
                  onBlur={(e) => (e.target.style.border = '1px solid #8e706c')}
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded text-sm font-semibold text-white flex items-center justify-center gap-2 shadow-lg transition-all active:scale-[0.99]"
                style={{ backgroundColor: '#740004', fontFamily: 'Inter, sans-serif' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#9c0f0f')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#740004')}
              >
                Send Enquiry
                <span className="material-symbols-outlined">send</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
