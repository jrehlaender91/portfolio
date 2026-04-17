import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <p className="footer__mark">
          <span>JR</span>
          <span aria-hidden="true">·</span>
          <span>Jorge Rehlaender</span>
        </p>
        <p className="footer__meta">
          <span>Built in React · crafted with care</span>
          <span aria-hidden="true">·</span>
          <span>© {new Date().getFullYear()}</span>
        </p>
      </div>
    </footer>
  )
}
