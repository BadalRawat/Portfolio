import { useEffect, useRef } from 'react'

const phrases = [
  'Full-Stack Developer 💻',
  'Problem Solver 🧠',
  'ReactJS Enthusiast ⚛️',
  'DSA Practitioner 🔍',
  'Open to Opportunities 🚀',
]

function useTypewriter(elRef) {
  useEffect(() => {
    let pi = 0, ci = 0, deleting = false
    let timer
    const tick = () => {
      if (!elRef.current) return
      const phrase = phrases[pi]
      if (!deleting) {
        elRef.current.textContent = phrase.slice(0, ci + 1)
        ci++
        if (ci === phrase.length) { deleting = true; timer = setTimeout(tick, 2000); return }
      } else {
        elRef.current.textContent = phrase.slice(0, ci - 1)
        ci--
        if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length }
      }
      timer = setTimeout(tick, deleting ? 50 : 80)
    }
    timer = setTimeout(tick, 300)
    return () => clearTimeout(timer)
  }, [elRef])
}

export default function Hero() {
  const twRef = useRef(null)
  useTypewriter(twRef)

  return (
    <section id="home" className="hero">
      <div className="hero-bg-grid" />
      <div className="orb orb1" /><div className="orb orb2" /><div className="orb orb3" />
      <div className="hero-content">
        <div className="hero-badge">👋 Welcome to my portfolio</div>
        <h1 className="hero-title">Hi, I&apos;m <span className="gradient-text">Badal Rawat</span></h1>
        <p className="hero-subtitle" ref={twRef} />
        <p className="hero-description">
          Computer Science Engineer passionate about building elegant, high-performance web applications and solving complex problems.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary" onClick={e=>{e.preventDefault();document.getElementById('projects')?.scrollIntoView({behavior:'smooth'})}}>View Projects</a>
          <a href="#certificates" className="btn btn-outline" onClick={e=>{e.preventDefault();document.getElementById('certificates')?.scrollIntoView({behavior:'smooth'})}}>Certificates</a>
          <a href="#contact"  className="btn btn-outline"  onClick={e=>{e.preventDefault();document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}}>Contact Me</a>
          <a href="https://drive.google.com/file/d/1ljiWrdUfqLFf4ijP98VOebDeJDI9fc3q/view?usp=sharing" target="_blank" rel="noreferrer" className="btn btn-primary">
            <svg style={{width:'18px',height:'18px'}} viewBox="0 0 24 24" fill="currentColor">
              <path d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"/>
            </svg>
            Download Resume
          </a>
        </div>
        <div className="hero-socials">
          <a href="https://www.linkedin.com/in/badalrawat911" target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href="https://github.com/BadalRawat" target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
          </a>
          <a href="mailto:badalrawat911@gmail.com" className="social-link" aria-label="Email">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M0 3v18h24V3H0zm21.518 2L12 12.713 2.482 5h19.036zM2 19V7.183l10 7.926 10-7.926V19H2z"/></svg>
          </a>
        </div>
      </div>
      <div className="hero-scroll-hint">
        <span>Scroll down</span>
        <div className="scroll-arrow" />
      </div>
    </section>
  )
}
