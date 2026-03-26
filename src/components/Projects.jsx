import musichubImg from '../assets/projectmusichub.png'
import ngoImg from '../assets/projectngo.png'

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
)

const ExternalLinkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
)

const projects = [
  {
    img: musichubImg,
    title: 'MusicHub Master',
    date: 'Mar 2025',
    desc: 'A modern, fully responsive music-streaming web platform with categorized song/album listings, smooth navigation, interactive search, and dynamic media playback with optimized rendering.',
    bullets: [
      'Dynamic media playback with optimized rendering for seamless audio streaming',
      'Visually rich UI with album art previews, hover effects, and structured layouts',
    ],
    tags: ['React','JavaScript','CSS','Responsive Design'],
    github: 'https://github.com/BadalRawat',
  },
  {
    img: ngoImg,
    title: 'Helping-Hands NGO',
    date: 'Apr 2025',
    desc: 'A responsive NGO web platform for wildlife conservation with real-time event updates, secure donation modules, and volunteer registration — achieving 40% increase in visitor engagement.',
    bullets: [
      '40% increase in visitor engagement with real-time donation & event modules',
      'Secure donation & volunteer registration using PHP & MySQL — 100% data accuracy',
    ],
    tags: ['PHP','MySQL','HTML','CSS','JavaScript'],
    github: 'https://github.com/BadalRawat',
    live: 'https://helpinghandsngo.co.in/',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Projects</span>
          <h2 className="section-title">Things I&apos;ve Built</h2>
        </div>
        <div className="projects-list">
          {projects.map(p => (
            <div className="project-card reveal-item" key={p.title}>
              <div className="project-image-box">
                <img src={p.img} alt={p.title} className="project-img" />
                <div className="project-img-overlay" />
              </div>
              <div className="project-content">
                <div className="project-card-header">
                  <h3 className="project-title">{p.title}</h3>
                  <div className="project-links">
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noreferrer" className="project-link-btn" aria-label="Live Site">
                        <ExternalLinkIcon />
                      </a>
                    )}
                    <a href={p.github} target="_blank" rel="noreferrer" className="project-link-btn" aria-label="GitHub">
                      <GithubIcon />
                    </a>
                  </div>
                </div>
                <p className="project-date">{p.date}</p>
                <p className="project-desc">{p.desc}</p>
                <ul className="project-bullets">
                  {p.bullets.map(b => <li key={b}>{b}</li>)}
                </ul>
                <div className="project-tags">
                  {p.tags.map(t => <span className="project-tag" key={t}>{t}</span>)}
                </div>
              </div>
              <div className="project-glow" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
