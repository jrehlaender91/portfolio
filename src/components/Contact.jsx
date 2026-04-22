import { useT } from '../i18n/I18nProvider.jsx'
import './Contact.css'

export default function Contact() {
  const { t } = useT()
  const c = t.contact

  return (
    <section id="contact" className="contact">
      <div className="wrap contact__inner">
        <div className="contact__lead reveal">
          <span className="eyebrow">{c.eyebrow}</span>
          <h2 className="contact__title">
            {c.titleA}
            <br />
            <em>{c.titleB}</em>
          </h2>
          <p className="contact__sub">{c.sub}</p>
          <a className="btn btn--primary contact__cta" href="mailto:jrehlaender91@gmail.com">
            {c.cta}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        <ul className="contact__channels reveal">
          {c.channels.map((channel, i) => (
            <li key={channel.label} style={{ transitionDelay: `${i * 50}ms` }}>
              <span className="contact__key">{channel.label}</span>
              {channel.href ? (
                <a href={channel.href} className="contact__val">{channel.value}</a>
              ) : (
                <span className="contact__val">{channel.value}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
