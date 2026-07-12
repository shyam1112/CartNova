import { Link } from 'react-router-dom'
import { SERVICES } from '../data/content'
import useReveal from '../hooks/useReveal'
import './Services.css'

export default function Services() {
  const [listRef, listVisible] = useReveal()
  const [ctaRef, ctaVisible] = useReveal()

  return (
    <>
      <section className="page-hero">
        <div className="glow-blob page-hero__glow" />
        <div className="page-hero__grid" />
        <div className="container page-hero__inner">
          <span className="eyebrow">Services</span>
          <h1>Everything you need to run Shopify at its best</h1>
          <p>
            From first launch to Shopify Plus scale, Cartnova covers development, design, apps,
            checkout, migrations, and long-term support under one roof.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div ref={listRef} className={`services-list stagger ${listVisible ? 'reveal-visible' : ''}`}>
            {SERVICES.map((s, i) => (
              <div key={s.slug} id={s.slug} className="service-row card">
                <div className="service-row__icon">{s.icon}</div>
                <div className="service-row__content">
                  <span className="tag">Service {String(i + 1).padStart(2, '0')}</span>
                  <h2>{s.title}</h2>
                  <p className="service-row__summary">{s.summary}</p>
                  <ul className="service-row__details">
                    {s.details.map((d) => (
                      <li key={d}>
                        <span className="service-row__check">✓</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={ctaRef} className={`section section--tight cta-banner reveal ${ctaVisible ? 'reveal-visible' : ''}`}>
        <div className="container cta-banner__inner">
          <h2>Not sure which service you need?</h2>
          <p>Tell us about your store and goals — we'll recommend the right scope, no obligation.</p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Talk to Our Team
          </Link>
        </div>
      </section>
    </>
  )
}
