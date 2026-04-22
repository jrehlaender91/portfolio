import { createContext, useContext, useEffect, useMemo, useState, useCallback } from 'react'
import { translations, LANGUAGES, DEFAULT_LANGUAGE } from './translations.js'

const STORAGE_KEY = 'jr.lang'

const I18nContext = createContext(null)

function detectInitialLanguage() {
  if (typeof window === 'undefined') return DEFAULT_LANGUAGE
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored && LANGUAGES.includes(stored)) return stored
  } catch { /* ignore storage errors */ }
  const navLang = (navigator.language || '').toLowerCase()
  if (navLang.startsWith('es')) return 'es'
  return DEFAULT_LANGUAGE
}

export function I18nProvider({ children }) {
  const [lang, setLangState] = useState(() => detectInitialLanguage())

  const setLang = useCallback((next) => {
    if (!LANGUAGES.includes(next)) return
    setLangState(next)
    try { window.localStorage.setItem(STORAGE_KEY, next) } catch { /* ignore */ }
  }, [])

  // Keep <html lang> and <title>/<meta> synced for a11y and SEO.
  useEffect(() => {
    const t = translations[lang]
    document.documentElement.lang = t.meta.htmlLang
    document.title = t.meta.title
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', t.meta.description)
  }, [lang])

  const value = useMemo(() => ({
    lang,
    setLang,
    t: translations[lang],
    languages: LANGUAGES,
  }), [lang, setLang])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useT() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useT must be used within <I18nProvider>')
  return ctx
}
