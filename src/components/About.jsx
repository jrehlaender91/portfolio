import './About.css'

const pillars = [
  {
    key: 'music',
    tag: 'Music',
    title: 'Performance & composition',
    body:
      'Years of practice shape how I listen — to instruments, to rooms, and to the people I teach or design for.',
  },
  {
    key: 'acoustics',
    tag: 'Acoustics',
    title: 'Rooms, materials, measurement',
    body:
      'From impulse responses to room treatment, I translate physics into spaces that feel honest and intelligible.',
  },
  {
    key: 'education',
    tag: 'Education',
    title: 'Teaching & curriculum',
    body:
      'I build courses that move from intuition to instrument — so students leave with craft, not just concepts.',
  },
  {
    key: 'technology',
    tag: 'Technology',
    title: 'Tools that serve the craft',
    body:
      'Code, DSP, and the web — used as instruments. I build software when it makes the work better, never as a spectacle.',
  },
]

export default function About() {
  return (
    <section id="about" className="about">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">01 — About</span>
          <h2>
            Four disciplines,
            <br />
            <em>one practice.</em>
          </h2>
        </div>

        <div className="about__grid">
          <div className="about__lede reveal">
            <p className="lede">
              I work where sound, space, learning, and systems overlap.
              Every project I take on borrows from at least two of those
              domains — that&rsquo;s where the interesting problems live.
            </p>
            <p className="about__body">
              My approach is quiet and pragmatic: study the constraints,
              measure what you can, and design for the people who will
              actually live with the result. I care about craft, but I care
              more about whether the thing works in the room, in the
              classroom, or in the shipping product.
            </p>
          </div>

          <ul className="about__pillars">
            {pillars.map((p, i) => (
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
