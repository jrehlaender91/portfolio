import { useT } from '../i18n/I18nProvider.jsx'
import './Footer.css'

export default function Footer() {
  const { t } = useT()
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <p className="footer__mark">
          <span>JR</span>
          <span aria-hidden="true">·</span>
          <span>Jorge Rehlaender</span>
        </p>
        <p className="footer__meta">
          <span>{t.footer.built}</span>
          <span aria-hidden="true">·</span>
          <span>© {new Date().getFullYear()}</span>
        </p>
      </div>
    </footer>
  )
}
