const items = [
  {
    num: '250+',
    title: 'Coding Problems Solved',
    desc: 'Solved 250+ coding problems on NeoColab and LeetCode, strengthening problem-solving and algorithmic thinking skills.',
    date: 'Mar 2025',
  },
  {
    num: '36h',
    title: 'BYTEBASH Hackathon',
    desc: 'Participated in a 36-hour hackathon and successfully built a functional website within the event duration.',
    date: 'Nov 2024',
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="section section-dark">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Achievements</span>
          <h2 className="section-title">Milestones &amp; Wins</h2>
        </div>
        <div className="achievements-grid">
          {items.map(a => (
            <div className="achievement-card reveal-item" key={a.title}>
              <div className="achievement-num">{a.num}</div>
              <h3 className="achievement-title">{a.title}</h3>
              <p>{a.desc}</p>
              <span className="achievement-date">{a.date}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
