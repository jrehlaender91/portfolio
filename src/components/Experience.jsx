import './Experience.css'

const items = [
  {
    period: '2023 — Now',
    role: 'Independent practice',
    org: 'Music · Acoustics · Technology',
    notes: 'Consulting, teaching, and product work at the intersection of sound and learning.',
  },
  {
    period: '2021 — 2023',
    role: 'Faculty / Workshop lead',
    org: 'University & private studios',
    notes: 'Designed and taught curricula on performance, listening, and acoustic measurement.',
  },
  {
    period: '2018 — 2021',
    role: 'Musician & producer',
    org: 'Ensembles · Studios · Venues',
    notes: 'Performed and recorded across chamber, ensemble, and electronic contexts.',
  },
  {
    period: '2016 — 2018',
    role: 'Engineering & software',
    org: 'Tech teams',
    notes: 'Shipped web and DSP tooling. Where my technology practice started.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">03 — Experience</span>
          <h2>
            A path that keeps
            <br /> <em>folding back on itself.</em>
          </h2>
        </div>

        <ol className="exp__list">
          {items.map((it, i) => (
            <li key={it.period} className="exp__item reveal" style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="exp__period">{it.period}</div>
              <div className="exp__body">
                <h3>{it.role}</h3>
                <p className="exp__org">{it.org}</p>
                <p className="exp__notes">{it.notes}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
