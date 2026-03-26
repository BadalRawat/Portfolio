import dsaPdf   from '../assets/dsawithc++.pdf'
import cloudPdf from '../assets/cloudnptel.pdf'
import oopsPdf  from '../assets/oops.pdf'

const certs = [
  { icon: '🏆', title: 'DSA using C++',              org: 'Neo Colab', date: 'Aug 2025', link: dsaPdf },
  { icon: '☁️', title: 'Cloud Computing',             org: 'NPTEL',     date: 'Apr 2025', link: cloudPdf },
  { icon: '🎓', title: 'Object Oriented Programming', org: 'Neo Colab', date: 'Mar 2024', link: oopsPdf },
]

export default function Certificates() {
  return (
    <section id="certificates" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Certificates</span>
          <h2 className="section-title">Credentials &amp; Certifications</h2>
        </div>
        <div className="cert-grid">
          {certs.map(c => (
            <div className="cert-card reveal-item" key={c.title}>
              <div className="cert-icon">{c.icon}</div>
              <div className="cert-info">
                <h3>{c.title}</h3>
                <p className="cert-org">{c.org}</p>
                <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:'8px'}}>
                  <span className="cert-date">{c.date}</span>
                  <a href={c.link} target="_blank" rel="noreferrer" className="cert-view-link">View »</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
