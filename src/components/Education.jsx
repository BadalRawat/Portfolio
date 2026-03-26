const edu = [
  {
    icon: '🎓',
    school: 'Lovely Professional University',
    period: 'Aug 2023 – Present',
    degree: 'Bachelor of Technology – Computer Science & Engineering',
    detail: '📍 Phagwara, Punjab',
    score: 'CGPA: 7.04',
  },
  {
    icon: '📚',
    school: 'KCM World School',
    period: 'Apr 2022 – Jun 2023',
    degree: 'Intermediate (Class XII)',
    detail: '📍 Palwal, Haryana',
    score: 'Percentage: 59.6%',
  },
  {
    icon: '📖',
    school: 'KCM Public School',
    period: 'Apr 2020 – Jun 2021',
    degree: 'Matriculation (Class X)',
    detail: '📍 Palwal, Haryana',
    score: 'Percentage: 56%',
  },
]

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Education</span>
          <h2 className="section-title">Academic Background</h2>
        </div>
        <div className="edu-timeline">
          {edu.map(e => (
            <div className="edu-card reveal-item" key={e.school}>
              <div className="edu-icon">{e.icon}</div>
              <div className="edu-content">
                <div className="edu-header">
                  <h3>{e.school}</h3>
                  <span className="edu-period">{e.period}</span>
                </div>
                <p className="edu-degree">{e.degree}</p>
                <p className="edu-detail">{e.detail} &nbsp;·&nbsp; <strong>{e.score}</strong></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
