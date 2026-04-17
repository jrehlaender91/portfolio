import './Work.css'

const projects = [
  {
    index: '01',
    year: '2025',
    title: 'Room, Measured',
    tags: ['Acoustics', 'Technology'],
    blurb:
      'A browser tool that turns a phone-captured sweep into a readable impulse response — designed for musicians, not engineers.',
    meta: 'Case study',
  },
  {
    index: '02',
    year: '2024',
    title: 'Ensemble Listening',
    tags: ['Music', 'Education'],
    blurb:
      'A 12-week curriculum teaching ensemble awareness through listening exercises, recording review, and structured peer feedback.',
    meta: 'Curriculum',
  },
  {
    index: '03',
    year: '2024',
    title: 'Field School',
    tags: ['Education', 'Acoustics'],
    blurb:
      'A portable acoustics lab for secondary schools — measurement hardware, lesson plans, and a scoring rubric that teachers actually use.',
    meta: 'Program',
  },
  {
    index: '04',
    year: '2023',
    title: 'Signal Practice',
    tags: ['Music', 'Technology'],
    blurb:
      'A metronome and DSP sandbox built for rehearsal rooms with poor acoustics — stable, readable, and never in the way.',
    meta: 'Product',
  },
]

export default function Work() {
  return (
    <section id="work" className="work">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">02 — Selected work</span>
          <h2>
            Projects where two disciplines
            <br /> <em>meet in the middle.</em>
          </h2>
        </div>

        <ol className="work__list" aria-label="Selected projects">
          {projects.map((p, i) => (
            <li key={p.index} className="work__item reveal" style={{ transitionDelay: `${i * 60}ms` }}>
              <a href="#" className="work__link" aria-label={`${p.title} — ${p.meta}`}>
                <span className="work__index">{p.index}</span>
                <span className="work__body">
                  <span className="work__title-row">
                    <h3 className="work__title">{p.title}</h3>
                    <span className="work__year">{p.year}</span>
                  </span>
                  <p className="work__blurb">{p.blurb}</p>
                  <span className="work__tags">
                    {p.tags.map((t) => (
                      <span key={t} className="work__tag">{t}</span>
                    ))}
                  </span>
                </span>
                <span className="work__arrow" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M5 17L17 5M17 5H8M17 5v9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
