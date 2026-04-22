import { useEffect, useState } from 'react'
import { useT } from '../i18n/I18nProvider.jsx'
import LanguageToggle from './LanguageToggle.jsx'
import './Nav.css'

export default function Nav() {
  const { t } = useT()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = t.nav.links

  return (
    <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="wrap nav__inner">
        <a href="#top" className="nav__mark" aria-label={t.nav.home}>
          <span className="nav__mark-glyph">JR</span>
          <span className="nav__mark-dot" aria-hidden="true" />
        </a>

        <nav className={`nav__links ${open ? 'is-open' : ''}`} aria-label="Primary">
          {links.map((l, i) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              <span className="nav__num" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav__right">
          <LanguageToggle />
          <button
            className="nav__toggle"
            aria-label={t.nav.menu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
