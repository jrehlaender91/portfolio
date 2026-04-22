import { useT } from '../i18n/I18nProvider.jsx'
import './LanguageToggle.css'

export default function LanguageToggle() {
  const { lang, setLang, t } = useT()
  return (
    <div
      className="langtoggle"
      role="group"
      aria-label={t.nav.languageLabel}
    >
      {['en', 'es'].map((code) => {
        const active = lang === code
        return (
          <button
            key={code}
            type="button"
            className={`langtoggle__btn ${active ? 'is-active' : ''}`}
            aria-pressed={active}
            onClick={() => setLang(code)}
          >
            {code.toUpperCase()}
          </button>
        )
      })}
    </div>
  )
}
