import { useEffect, useRef } from 'react'
import './Hero.css'

const disciplines = ['Music', 'Acoustics', 'Education', 'Technology']

export default function Hero() {
  const canvasRef = useRef(null)
  const pointer = useRef({ x: 0.5, y: 0.5, active: false })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let raf = 0
    let t = 0
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener('resize', resize)

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      pointer.current.x = (e.clientX - rect.left) / rect.width
      pointer.current.y = (e.clientY - rect.top) / rect.height
      pointer.current.active = true
    }
    window.addEventListener('pointermove', onMove)

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const accent = getComputedStyle(document.documentElement).getPropertyValue('--ink').trim() || '#0F0F0E'

    const render = () => {
      const w = canvas.clientWidth
      const h = canvas.clientHeight
      ctx.clearRect(0, 0, w, h)

      const layers = 4
      const px = pointer.current.x
      const py = pointer.current.y

      for (let i = 0; i < layers; i++) {
        ctx.beginPath()
        const amp = 18 + i * 14 + (pointer.current.active ? (py - 0.5) * 40 : 0)
        const freq = 0.006 + i * 0.0018
        const phase = t * (0.5 + i * 0.25) + (pointer.current.active ? (px - 0.5) * 3 : 0)
        const yMid = h * 0.5 + (i - layers / 2) * 6

        for (let x = -10; x <= w + 10; x += 2) {
          const y =
            yMid +
            Math.sin(x * freq + phase) * amp * 0.7 +
            Math.sin(x * freq * 1.7 + phase * 0.6) * amp * 0.3
          if (x === -10) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
        const alpha = 0.06 + i * 0.05
        ctx.strokeStyle = hexToRgba(accent, alpha)
        ctx.lineWidth = 1
        ctx.stroke()
      }

      if (!prefersReduced) t += 0.012
      raf = requestAnimationFrame(render)
    }
    render()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onMove)
    }
  }, [])

  return (
    <section className="hero" id="top">
      <canvas ref={canvasRef} className="hero__canvas" aria-hidden="true" />
      <div className="wrap hero__inner">
        <p className="eyebrow hero__eyebrow">
          <span className="hero__pulse" aria-hidden="true" />
          Portfolio · 2026
        </p>

        <h1 className="display hero__title">
          <span>Jorge</span>
          <span className="hero__title-accent">Rehlaender</span>
        </h1>

        <p className="lede hero__lede">
          An interdisciplinary professional working at the intersection of
          <em> sound</em>, <em>space</em>, <em>learning</em>, and <em>systems</em> —
          building experiences where each discipline sharpens the others.
        </p>

        <ul className="hero__disciplines" aria-label="Disciplines">
          {disciplines.map((d, i) => (
            <li key={d} style={{ '--i': i }}>
              <span className="hero__num">{String(i + 1).padStart(2, '0')}</span>
              {d}
            </li>
          ))}
        </ul>

        <div className="hero__cta">
          <a href="#work" className="btn btn--primary">
            See selected work
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#contact" className="btn btn--ghost">Get in touch</a>
        </div>

        <div className="hero__meta">
          <span className="kbd">scroll</span>
          <span className="hero__meta-line" aria-hidden="true" />
          <span>Mexico City / Remote</span>
        </div>
      </div>
    </section>
  )
}

function hexToRgba(hex, alpha) {
  const v = hex.replace('#', '')
  const n = v.length === 3
    ? v.split('').map((c) => c + c).join('')
    : v
  const r = parseInt(n.slice(0, 2), 16)
  const g = parseInt(n.slice(2, 4), 16)
  const b = parseInt(n.slice(4, 6), 16)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}
