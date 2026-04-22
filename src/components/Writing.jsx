import { useT } from '../i18n/I18nProvider.jsx'
import './Writing.css'

export default function Writing() {
  const { t } = useT()
  const w = t.writing

  // titleA has one emphasized word (e.g. "listening"/"escuchar"). Split around it.
  const [beforeEm, afterEm] = w.titleA.split(w.titleAEmphasis)

  return (
    <section id="writing" className="writing">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">{w.eyebrow}</span>
          <h2>
            {beforeEm}
            <em>{w.titleAEmphasis}</em>
            {afterEm}
            <br /> {w.titleB}
          </h2>
        </div>

        <div className="writing__grid">
          {w.posts.map((p, i) => (
            <article key={p.title} className="post reveal" style={{ transitionDelay: `${i * 70}ms` }}>
              <header className="post__head">
                <span className="post__date">{p.date}</span>
                <span className="post__kind">{p.kind}</span>
              </header>
              <h3 className="post__title">
                <a href="#">{p.title}</a>
              </h3>
              <p className="post__excerpt">{p.excerpt}</p>
              <footer className="post__foot">
                <span>{w.minutes(p.minutes)}</span>
                <span aria-hidden="true">→</span>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
