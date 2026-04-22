import { useT } from '../i18n/I18nProvider.jsx'
import './Education.css'

export default function Education() {
  const { t } = useT()
  const ed = t.education

  return (
    <section id="education" className="education">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">{ed.eyebrow}</span>
          <h2>
            {ed.titleA}
            <br /> <em>{ed.titleB}</em>
          </h2>
        </div>

        <div className="edu__grid">
          <div className="edu__col edu__col--degrees">
            <h3 className="edu__col-label">{ed.degreesLabel}</h3>
            <ol className="edu__list">
              {ed.degrees.map((d, i) => (
                <li
                  key={`${d.title}-${i}`}
                  className="edu__item reveal"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="edu__period">{d.period}</div>
                  <div className="edu__body">
                    <h4 className="edu__title">{d.title}</h4>
                    <p className="edu__org">{d.org}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="edu__col edu__col--certs">
            <h3 className="edu__col-label">{ed.certsLabel}</h3>
            <ul className="edu__certs">
              {ed.certifications.map((c, i) => (
                <li
                  key={c}
                  className="edu__cert reveal"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <span className="edu__cert-dot" aria-hidden="true" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
