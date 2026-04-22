import { useT } from '../i18n/I18nProvider.jsx'
import './Experience.css'

export default function Experience() {
  const { t } = useT()
  const e = t.experience

  return (
    <section id="experience" className="experience">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">{e.eyebrow}</span>
          <h2>
            {e.titleA}
            <br /> <em>{e.titleB}</em>
          </h2>
        </div>

        <ol className="exp__list">
          {e.items.map((it, i) => (
            <li key={`${it.period}-${i}`} className="exp__item reveal" style={{ transitionDelay: `${i * 60}ms` }}>
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
