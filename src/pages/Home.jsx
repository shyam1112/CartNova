import { Link } from 'react-router-dom'
import { SERVICES, PROCESS, STATS, TESTIMONIALS, PORTFOLIO } from '../data/content'
import useReveal from '../hooks/useReveal'
import CountUp from '../components/CountUp'
import './Home.css'

const BRANDS = ['Shopify', 'Shopify Plus', 'Liquid', 'Shopify Functions', 'Hydrogen', 'App Bridge']

export default function Home() {
  const [statsRef, statsVisible] = useReveal()
  const [servicesRef, servicesVisible] = useReveal()
  const [processRef, processVisible] = useReveal()
  const [portfolioRef, portfolioVisible] = useReveal()
  const [testimonialsRef, testimonialsVisible] = useReveal()

  return (
    <>
      <section className="hero">
        <div className="glow-blob hero__glow" />
        <div className="hero__grid" />
        <div className="container hero__inner">
          <span className="eyebrow">Shopify Solutions Partner</span>
          <h1 className="hero__title">
            Shopify stores engineered to <span className="text-green">convert</span>, scale, and stay online.
          </h1>
          <p className="hero__subtitle">
            Cartnova designs and builds Shopify storefronts, custom apps, and Shopify Plus solutions
            for merchants who've outgrown templates and off-the-shelf plugins.
          </p>
          <div className="hero__actions">
            <Link to="/contact" className="btn btn-primary btn-lg">
              Get a Free Consultation
            </Link>
            <Link to="/portfolio" className="btn btn-ghost btn-lg">
              View Our Work
            </Link>
          </div>
          <div className="hero__brands">
            <span>Built with</span>
            <ul>
              {BRANDS.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section ref={statsRef} className={`section section--tight stats reveal ${statsVisible ? 'reveal-visible' : ''}`}>
        <div className={`container stats__grid stagger ${statsVisible ? 'reveal-visible' : ''}`}>
          {STATS.map((s) => (
            <div key={s.label} className="stats__item">
              <div className="stats__value">
                <CountUp value={s.value} />
              </div>
              <div className="stats__label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section ref={servicesRef} className={`section reveal ${servicesVisible ? 'reveal-visible' : ''}`}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What we do</span>
            <h2>End-to-end Shopify expertise</h2>
            <p>From first line of code to checkout customization, we cover every layer of the Shopify stack.</p>
          </div>
          <div className={`services-grid stagger ${servicesVisible ? 'reveal-visible' : ''}`}>
            {SERVICES.slice(0, 6).map((s) => (
              <Link to="/services" key={s.slug} className="service-card card">
                <div className="service-card__icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.summary}</p>
              </Link>
            ))}
          </div>
          <div className="services-cta">
            <Link to="/services" className="btn btn-ghost">
              See all services →
            </Link>
          </div>
        </div>
      </section>

      <section ref={processRef} className={`section process reveal ${processVisible ? 'reveal-visible' : ''}`}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">How we work</span>
            <h2>A process built for predictable launches</h2>
            <p>No surprise timelines, no scope creep — just a clear path from kickoff to go-live.</p>
          </div>
          <div className={`process-grid stagger ${processVisible ? 'reveal-visible' : ''}`}>
            {PROCESS.map((p) => (
              <div key={p.step} className="process-item">
                <div className="process-item__step">{p.step}</div>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={portfolioRef} className={`section section--tight reveal ${portfolioVisible ? 'reveal-visible' : ''}`}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Selected work</span>
            <h2>Real merchants, real results</h2>
          </div>
          <div className={`portfolio-preview stagger ${portfolioVisible ? 'reveal-visible' : ''}`}>
            {PORTFOLIO.slice(0, 3).map((p) => (
              <div key={p.title} className="portfolio-card card">
                <div className="portfolio-card__thumb">
                  <span className="portfolio-card__initial">{p.title.charAt(0)}</span>
                  {p.live && <span className="portfolio-card__badge">Live Client</span>}
                </div>
                <div className="portfolio-card__body">
                  <span className="tag">{p.category}</span>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  {p.url && (
                    <a href={p.url} target="_blank" rel="noopener noreferrer" className="portfolio-card__link">
                      Visit live site ↗
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="services-cta">
            <Link to="/portfolio" className="btn btn-ghost">
              View full portfolio →
            </Link>
          </div>
        </div>
      </section>

      <section ref={testimonialsRef} className={`section testimonials reveal ${testimonialsVisible ? 'reveal-visible' : ''}`}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Client feedback</span>
            <h2>Trusted by growing Shopify merchants</h2>
          </div>
          <div className={`testimonials-grid stagger ${testimonialsVisible ? 'reveal-visible' : ''}`}>
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="testimonial-card card">
                <p className="testimonial-card__quote">“{t.quote}”</p>
                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar">{t.name.charAt(0)}</div>
                  <div>
                    <div className="testimonial-card__name">{t.name}</div>
                    <div className="testimonial-card__role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
