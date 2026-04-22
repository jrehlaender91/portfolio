import { useEffect, useState } from 'react'
import './ThemeExplorer.css'

/**
 * Dev-only theme picker. Renders nothing unless the URL contains ?themes
 * (or ?themes=1). Persists the selection in localStorage so switching
 * survives reloads. When you pick a winner, just remove this component
 * from App.jsx and set the chosen theme as the default in global.css.
 */

const THEMES = [
  { id: 'amber', label: 'Amber', swatch: '#E8C547', note: 'Warm · editorial · current' },
  { id: 'vermilion', label: 'Vermilion', swatch: '#D9462C', note: 'Sharper · gallery' },
  { id: 'electric', label: 'Electric', swatch: '#3A5BFF', note: 'Technical · clinical' },
  { id: 'forest', label: 'Forest', swatch: '#3D7A53', note: 'Natural · architectural' },
  { id: 'plum', label: 'Plum', swatch: '#8A3A8E', note: 'Intellectual · concert' },
]

const STORAGE_KEY = 'jr.theme'

function isEnabled() {
  if (typeof window === 'undefined') return false
  return new URLSearchParams(window.location.search).has('themes')
}

export default function ThemeExplorer() {
  const [enabled] = useState(isEnabled)
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'amber'
    return window.localStorage.getItem(STORAGE_KEY) || 'amber'
  })
  const [collapsed, setCollapsed] = useState(false)

  // Apply theme to <html> whenever it changes.
  useEffect(() => {
    if (!enabled) return
    document.documentElement.setAttribute('data-theme', theme)
    try { window.localStorage.setItem(STORAGE_KEY, theme) } catch { /* ignore */ }
  }, [theme, enabled])

  if (!enabled) return null

  return (
    <div className={`theme-explorer ${collapsed ? 'is-collapsed' : ''}`} role="complementary" aria-label="Theme explorer (dev)">
      <header className="theme-explorer__head">
        <span className="theme-explorer__title">Theme explorer</span>
        <button
          type="button"
          className="theme-explorer__collapse"
          onClick={() => setCollapsed((v) => !v)}
          aria-expanded={!collapsed}
          aria-label={collapsed ? 'Expand' : 'Collapse'}
        >
          {collapsed ? '+' : '–'}
        </button>
      </header>
      {!collapsed && (
        <>
          <ul className="theme-explorer__list">
            {THEMES.map((tm) => (
              <li key={tm.id}>
                <button
                  type="button"
                  className={`theme-explorer__item ${theme === tm.id ? 'is-active' : ''}`}
                  onClick={() => setTheme(tm.id)}
                >
                  <span className="theme-explorer__swatch" style={{ background: tm.swatch }} aria-hidden="true" />
                  <span className="theme-explorer__label">
                    <span>{tm.label}</span>
                    <em>{tm.note}</em>
                  </span>
                </button>
              </li>
            ))}
          </ul>
          <p className="theme-explorer__hint">
            Add <code>?themes</code> to the URL to show · removes itself in prod builds
          </p>
        </>
      )}
    </div>
  )
}
