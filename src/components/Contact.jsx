import { useState } from 'react'

const contactItems = [
  { id: 'email',    icon: '📧', label: 'Email',    value: 'badalrawat911@gmail.com', href: 'mailto:badalrawat911@gmail.com' },
  { id: 'phone',    icon: '📱', label: 'Phone',    value: '+91 9817758911',           href: 'tel:+919817758911' },
  { id: 'linkedin', icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/badalrawat911', href: 'https://www.linkedin.com/in/badalrawat911' },
  { id: 'github',   icon: '🐙', label: 'GitHub',   value: 'github.com/BadalRawat',   href: 'https://github.com/BadalRawat' },
  { id: 'resume',   icon: '📄', label: 'Resume',   value: 'View / Download',         href: 'https://drive.google.com/file/d/1ljiWrdUfqLFf4ijP98VOebDeJDI9fc3q/view?usp=sharing' },
]

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name:'', email:'', message:'' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSent(true)
      setForm({ name:'', email:'', message:'' })
      setTimeout(() => setSent(false), 4000)
    }, 1500)
  }

  return (
    <section id="contact" className="section section-dark">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Contact</span>
          <h2 className="section-title">Let&apos;s Connect</h2>
          <p className="section-sub">I&apos;m open to internships, freelance projects, and full-time opportunities. Let&apos;s build something great together!</p>
        </div>
        <div className="contact-grid">
          <div className="contact-info">
            {contactItems.map(item => (
              <a key={item.id} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="contact-item" id={`contact-${item.id}`}>
                <div className="contact-item-icon">{item.icon}</div>
                <div>
                  <p className="contact-label">{item.label}</p>
                  <p className="contact-value">{item.value}</p>
                </div>
              </a>
            ))}
          </div>
          <form className="contact-form" id="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input id="name" type="text" placeholder="John Doe" required value={form.name} onChange={e=>setForm(f=>({...f,name:e.target.value}))} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input id="email" type="email" placeholder="john@example.com" required value={form.email} onChange={e=>setForm(f=>({...f,email:e.target.value}))} />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows={5} placeholder="Let's work together..." required value={form.message} onChange={e=>setForm(f=>({...f,message:e.target.value}))} />
            </div>
            <button type="submit" className="btn btn-primary btn-full" id="submit-btn" disabled={loading}>
              {loading ? 'Sending…' : 'Send Message 🚀'}
            </button>
            {sent && <div className="form-success">✅ Message sent! I&apos;ll get back to you soon.</div>}
          </form>
        </div>
      </div>
    </section>
  )
}
