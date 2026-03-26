const categories = [
  { icon: '💻', title: 'Languages', tags: ['Python', 'C', 'C++', 'Java', 'JavaScript', 'SQL'] },
  { icon: '🧩', title: 'Frameworks', tags: ['HTML', 'CSS', 'ReactJS', 'NodeJS'] },
  { icon: '🛠️', title: 'Tools & Platforms', tags: ['DBMS', 'Git', 'GitHub', 'VS Code', 'MySQL'] },
  { icon: '🌟', title: 'Soft Skills', tags: ['Problem-Solving', 'Team Player', 'Adaptability'] },
]

export default function Skills() {
  return (
    <section id="skills" className="section section-dark">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Skills</span>
          <h2 className="section-title">My Technical Arsenal</h2>
        </div>
        <div className="skills-grid">
          {categories.map(cat => (
            <div className="skill-category reveal-item" key={cat.title}>
              <div className="skill-cat-header">
                <span className="skill-cat-icon">{cat.icon}</span>
                <h3>{cat.title}</h3>
              </div>
              <div className="skill-tags">
                {cat.tags.map(t => <span className="skill-tag" key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
