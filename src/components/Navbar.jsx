import { useState, useEffect } from 'react'

const links = ['home','about','skills','projects','training','certificates','achievements','education','contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive]   = useState('home')
  const [open, setOpen]       = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      const secs = links.map(id => document.getElementById(id)).filter(Boolean)
      const current = secs.findLast(s => s.getBoundingClientRect().top <= 100)
      if (current) setActive(current.id)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLink = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
      <div className="nav-logo">BR</div>
      <ul className={`nav-links ${open ? 'open' : ''}`}>
        {links.map(id => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={active === id ? 'active' : ''}
              onClick={e => { e.preventDefault(); handleLink(id) }}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          </li>
        ))}
        <li>
          <a href="https://drive.google.com/file/d/1ljiWrdUfqLFf4ijP98VOebDeJDI9fc3q/view?usp=sharing" target="_blank" rel="noreferrer" className="resume-nav-link">
            Resume
          </a>
        </li>
      </ul>
      <button className="hamburger" onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
        <span /><span /><span />
      </button>
    </nav>
  )
}
