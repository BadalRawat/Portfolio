import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Training from './components/Training'
import Certificates from './components/Certificates'
import Achievements from './components/Achievements'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollTop from './components/ScrollTop'

function App() {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) }
      })
    }, { threshold: 0.12 })
    const attach = () => document.querySelectorAll('.reveal-item').forEach(el => obs.observe(el))
    attach()
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Training />
      <Certificates />
      <Achievements />
      <Education />
      <Contact />
      <Footer />
      <ScrollTop />
    </>
  )
}

export default App
