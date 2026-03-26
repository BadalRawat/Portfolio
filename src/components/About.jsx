import { useReveal } from '../hooks/useReveal'
import profilePhoto from '../assets/profilephoto.jpeg'


const stats = [
  { num: '250+', label: 'Problems Solved' },
  { num: '2+', label: 'Projects Built' },
  { num: '3+', label: 'Certificates' },
]

export default function About() {
  const ref = useReveal()
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">About Me</span>
          <h2 className="section-title">A Glimpse Into My World</h2>
        </div>
        <div className="about-grid reveal" ref={ref}>
          <div className="about-avatar-wrap">
            <div className="about-avatar">
              <img src={profilePhoto} alt="Badal Rawat" className="avatar-img" />
              <div className="avatar-ring" />
              <div className="avatar-ring ring2" />
            </div>
            <div className="about-status">
              <span className="status-dot" />
              Available for Opportunities
            </div>
          </div>
          <div className="about-text">
            <p>I&apos;m <strong>Badal Rawat</strong>, a Computer Science &amp; Engineering student at <strong>Lovely Professional University</strong>. I love crafting responsive, user-centric web applications and diving deep into data structures and algorithms.</p>
            <p>With a strong foundation in <strong>Python, C++, Java, JavaScript</strong> and modern frameworks like <strong>ReactJS &amp; NodeJS</strong>, I bring ideas to life through clean code and intuitive design.</p>
            <div className="about-stats">
              {stats.map(s => (
                <div className="stat-card" key={s.label}>
                  <span className="stat-number">{s.num}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
