import { useState, type FormEvent } from 'react'

const contactInfo = [
  { icon: 'call', label: 'Phone Support', value: '+91-991-006-2449' },
  { icon: 'mail', label: 'Direct Email', value: 'arguspolymer82@gmail.com' },
  { icon: 'location_on', label: 'HQ Location', value: 'Argus Polymers Pvt. Ltd. Plot no. 82 - 83, Udyog Kendra, Ecotech 3, Greater Noida, 201306' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', email: '', message: '' })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    alert('Enquiry sent! We will get back to you shortly.')
    setForm({ name: '', company: '', email: '', message: '' })
  }

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '12px', borderRadius: '4px', outline: 'none',
    border: '1px solid var(--border-strong)', backgroundColor: 'var(--bg-alt)',
    color: 'var(--text-primary)', fontFamily: 'Inter, sans-serif', fontSize: '14px',
    transition: 'border-color 0.2s, background-color 0.3s',
    boxSizing: 'border-box',
  }

  return (
    <section id="contact" style={{ padding: '80px 0', backgroundColor: 'var(--inverse-bg)', transition: 'background-color 0.3s' }}>
      <div style={{ padding: '0 48px', maxWidth: '1280px', margin: '0 auto' }}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left info */}
          <div className="lg:col-span-5" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <h2 style={{ fontFamily: 'Hanken Grotesk, sans-serif', fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.02em', color: 'var(--inverse-text)', margin: 0 }}>
              Start Your Project
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', lineHeight: '28px', color: 'var(--inverse-muted)', margin: 0 }}>
              Have plastic processing needs? Let our engineering team review your requirements and provide a technical proposal.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {contactInfo.map((item) => (
                <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '4px', backgroundColor: 'var(--brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'transform 0.2s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}>
                    <span className="material-symbols-outlined" style={{ color: '#fff', fontSize: '20px' }}>{item.icon}</span>
                  </div>
                  <div>
                    <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', textTransform: 'uppercase', color: 'var(--inverse-muted)', margin: 0 }}>{item.label}</p>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, color: 'var(--inverse-text)', margin: 0 }}>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} style={{ backgroundColor: 'var(--surface)', padding: '32px', borderRadius: '4px', display: 'flex', flexDirection: 'column', gap: '16px', boxShadow: '0 16px 48px rgba(0,0,0,0.3)', transition: 'background-color 0.3s' }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[{ id: 'name', label: 'Full Name', placeholder: 'John Doe', type: 'text' },
                  { id: 'company', label: 'Company', placeholder: 'Engineering Ltd', type: 'text' }].map((field) => (
                  <div key={field.id} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <label htmlFor={field.id} style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>{field.label}</label>
                    <input id={field.id} type={field.type} placeholder={field.placeholder} required
                      value={form[field.id as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.border = '2px solid var(--brand-dark)')}
                      onBlur={(e) => (e.target.style.border = '1px solid var(--border-strong)')} />
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <label htmlFor="email" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>Email Address</label>
                <input id="email" type="email" placeholder="john@company.com" required value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.border = '2px solid var(--brand-dark)')}
                  onBlur={(e) => (e.target.style.border = '1px solid var(--border-strong)')} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <label htmlFor="message" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>Message / Requirements</label>
                <textarea id="message" rows={4} placeholder="Describe your project tooling needs..." required value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  style={{ ...inputStyle, resize: 'none' }}
                  onFocus={(e) => (e.target.style.border = '2px solid var(--brand-dark)')}
                  onBlur={(e) => (e.target.style.border = '1px solid var(--border-strong)')} />
              </div>

              <button type="submit"
                style={{ width: '100%', padding: '16px', borderRadius: '4px', backgroundColor: 'var(--brand)', color: '#fff', fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 600, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', boxShadow: '0 4px 16px rgba(0,0,0,0.2)', transition: 'background-color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--brand-dark)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--brand)')}>
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
