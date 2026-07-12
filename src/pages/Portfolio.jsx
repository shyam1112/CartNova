import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { PORTFOLIO } from '../data/content'
import useReveal from '../hooks/useReveal'
import './Portfolio.css'

const FILTERS = ['All', ...new Set(PORTFOLIO.map((p) => p.category))]

export default function Portfolio() {
  const [active, setActive] = useState('All')
  const [gridRef, gridVisible] = useReveal()
  const [ctaRef, ctaVisible] = useReveal()

  const filtered = useMemo(
    () => (active === 'All' ? PORTFOLIO : PORTFOLIO.filter((p) => p.category === active)),
    [active],
  )

  return (
    <>
      <section className="page-hero">
        <div className="glow-blob page-hero__glow" />
        <div className="page-hero__grid" />
        <div className="container page-hero__inner">
          <span className="eyebrow">Portfolio</span>
          <h1>Work we're proud to stand behind</h1>
          <p>
            A sample of Shopify projects across migrations, custom theme design, Shopify Plus builds,
            and checkout extension development.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="portfolio-filters">
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                className={`portfolio-filter ${active === f ? 'is-active' : ''}`}
                onClick={() => setActive(f)}
              >
                {f}
              </button>
            ))}
          </div>

          <div ref={gridRef} className={`portfolio-grid stagger ${gridVisible ? 'reveal-visible' : ''}`}>
            {filtered.map((p) => (
              <div key={p.title} className="portfolio-tile card">
                <div className="portfolio-tile__thumb">
                  <span className="portfolio-tile__initial">{p.title.charAt(0)}</span>
                  {p.live && <span className="portfolio-tile__badge">Live Client</span>}
                </div>
                <div className="portfolio-tile__body">
                  <div className="portfolio-tile__tags">
                    {p.tags.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  {p.url && (
                    <a href={p.url} target="_blank" rel="noopener noreferrer" className="portfolio-tile__link">
                      Visit live site ↗
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={ctaRef} className={`section section--tight cta-banner reveal ${ctaVisible ? 'reveal-visible' : ''}`}>
        <div className="container cta-banner__inner">
          <h2>Want results like these for your store?</h2>
          <p>Share your goals and we'll map out how Cartnova can help you get there.</p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Start Your Project
          </Link>
        </div>
      </section>
    </>
  )
}
