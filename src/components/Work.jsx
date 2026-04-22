import { useT } from '../i18n/I18nProvider.jsx'
import './Work.css'

export default function Work() {
  const { t } = useT()
  const w = t.work

  return (
    <section id="work" className="work">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">{w.eyebrow}</span>
          <h2>
            {w.titleA}
            <br /> <em>{w.titleB}</em>
          </h2>
        </div>

        <ol className="work__list" aria-label={w.listLabel}>
          {w.projects.map((p, i) => (
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
                    {p.tags.map((tag) => (
                      <span key={tag} className="work__tag">{tag}</span>
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
