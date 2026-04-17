import './Writing.css'

const posts = [
  {
    date: '2026 · 03',
    title: 'What a room tells you before you play',
    kind: 'Essay',
    excerpt:
      'On the pre-verbal part of acoustics — the things musicians notice about a space in the first ten seconds, and why they matter.',
    minutes: 7,
  },
  {
    date: '2025 · 11',
    title: 'Teaching listening, not just theory',
    kind: 'Notes',
    excerpt:
      'Why most music curricula skip the most important skill, and a small sequence of exercises I use to re-introduce it.',
    minutes: 5,
  },
  {
    date: '2025 · 08',
    title: 'A web-first impulse response workflow',
    kind: 'Technical',
    excerpt:
      'How browser APIs make decent acoustic measurement surprisingly approachable — and where the honest limitations begin.',
    minutes: 9,
  },
]

export default function Writing() {
  return (
    <section id="writing" className="writing">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">04 — Writing</span>
          <h2>
            Notes on <em>listening</em>,
            <br /> teaching, and making.
          </h2>
        </div>

        <div className="writing__grid">
          {posts.map((p, i) => (
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
                <span>{p.minutes} min read</span>
                <span aria-hidden="true">→</span>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
