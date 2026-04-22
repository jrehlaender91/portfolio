import { useT } from '../i18n/I18nProvider.jsx'
import './About.css'

export default function About() {
  const { t } = useT()
  const a = t.about

  return (
    <section id="about" className="about">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">{a.eyebrow}</span>
          <h2>
            {a.titleA}
            <br />
            <em>{a.titleB}</em>
          </h2>
        </div>

        <div className="about__grid">
          <div className="about__lede reveal">
            <p className="lede">{a.lede}</p>
            <p className="about__body">{a.body}</p>
          </div>

          <ul className="about__pillars">
            {a.pillars.map((p, i) => (
              <li key={p.key} className="about__pillar reveal" style={{ transitionDelay: `${i * 70}ms` }}>
                <div className="about__pillar-tag">
                  <span className="about__pillar-num">0{i + 1}</span>
                  <span>{p.tag}</span>
                </div>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
