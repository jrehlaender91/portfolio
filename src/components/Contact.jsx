import './Contact.css'

const channels = [
  { label: 'Email', value: 'jrehlaender91@gmail.com', href: 'mailto:jrehlaender91@gmail.com' },
  { label: 'LinkedIn', value: 'in/jorgerehlaender', href: 'https://www.linkedin.com/in/jrehlaender/' },
  { label: 'GitHub', value: '@jrehlaender', href: 'https://github.com/jrehlaender91/' },
  { label: 'Location', value: 'Mexico City · Remote', href: null },
]

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="wrap contact__inner">
        <div className="contact__lead reveal">
          <span className="eyebrow">05 — Contact</span>
          <h2 className="contact__title">
            Let&rsquo;s build something
            <br />
            <em>worth listening to.</em>
          </h2>
          <p className="contact__sub">
            Teaching, consulting, or a project that crosses two of my disciplines —
            I&rsquo;m open to conversations. No form, just a direct line.
          </p>
          <a className="btn btn--primary contact__cta" href="mailto:jrehlaender91@gmail.com">
            Write me
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        <ul className="contact__channels reveal">
          {channels.map((c, i) => (
            <li key={c.label} style={{ transitionDelay: `${i * 50}ms` }}>
              <span className="contact__key">{c.label}</span>
              {c.href ? (
                <a href={c.href} className="contact__val">{c.value}</a>
              ) : (
                <span className="contact__val">{c.value}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
