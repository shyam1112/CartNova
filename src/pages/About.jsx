import { Link } from 'react-router-dom'
import { STATS } from '../data/content'
import useReveal from '../hooks/useReveal'
import CountUp from '../components/CountUp'
import './About.css'

const VALUES = [
  {
    title: 'Built for the long run',
    description: 'We architect stores and apps that stay maintainable as your catalog, traffic, and team grow.',
  },
  {
    title: 'No black boxes',
    description: 'Clean, documented Shopify code you own outright — no vendor lock-in, no mystery dependencies.',
  },
  {
    title: 'Commerce-first thinking',
    description: 'Every technical decision is weighed against conversion, speed, and the customer experience.',
  },
  {
    title: 'Direct communication',
    description: 'You work with the engineers building your store, not a rotating cast of account managers.',
  },
]

const TEAM = [
  { name: 'Shopify Development', role: 'Storefronts, integrations & performance' },
  { name: 'Design & UX', role: 'Theme design & conversion-focused UI' },
  { name: 'App Engineering', role: 'Custom apps & checkout extensions' },
  { name: 'Migrations & QA', role: 'Data migration & release quality' },
]

export default function About() {
  const [storyRef, storyVisible] = useReveal()
  const [valuesRef, valuesVisible] = useReveal()
  const [teamRef, teamVisible] = useReveal()
  const [ctaRef, ctaVisible] = useReveal()

  return (
    <>
      <section className="page-hero">
        <div className="glow-blob page-hero__glow" />
        <div className="page-hero__grid" />
        <div className="container page-hero__inner">
          <span className="eyebrow">About Cartnova</span>
          <h1>A focused Shopify partner, not a jack-of-all-trades agency</h1>
          <p>
            Cartnova exists to do one thing well: build and grow Shopify stores. That focus means deeper
            expertise, fewer surprises, and solutions that hold up as your business scales.
          </p>
        </div>
      </section>

      <section ref={storyRef} className={`section about-story reveal ${storyVisible ? 'reveal-visible' : ''}`}>
        <div className="container about-story__grid">
          <div>
            <span className="eyebrow">Our story</span>
            <h2>Why we specialize only in Shopify</h2>
            <p>
              Too many merchants inherit stores built by generalist agencies stitching together
              incompatible plugins. Cartnova was started to fix that pattern — a team that lives inside
              the Shopify ecosystem daily, from Liquid and theme architecture to Shopify Functions and
              checkout extensibility.
            </p>
            <p>
              Today we work with merchants ranging from fast-growing DTC brands to established retailers
              running Shopify Plus with complex supplier and inventory needs. The common thread: stores
              that need to be fast, reliable, and built to last.
            </p>
          </div>
          <div className="about-stats">
            {STATS.map((s) => (
              <div key={s.label} className="about-stats__item card">
                <div className="stats__value">
                  <CountUp value={s.value} />
                </div>
                <div className="stats__label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={valuesRef} className={`section section--tight values reveal ${valuesVisible ? 'reveal-visible' : ''}`}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What we value</span>
            <h2>Principles behind every project</h2>
          </div>
          <div className={`values-grid stagger ${valuesVisible ? 'reveal-visible' : ''}`}>
            {VALUES.map((v) => (
              <div key={v.title} className="card values-card">
                <h3>{v.title}</h3>
                <p>{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={teamRef} className={`section team reveal ${teamVisible ? 'reveal-visible' : ''}`}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">How we're organized</span>
            <h2>Specialists across the Shopify stack</h2>
            <p>Every project is staffed with the right specialists, not a single generalist stretched thin.</p>
          </div>
          <div className={`team-grid stagger ${teamVisible ? 'reveal-visible' : ''}`}>
            {TEAM.map((t) => (
              <div key={t.name} className="card team-card">
                <div className="team-card__avatar">{t.name.charAt(0)}</div>
                <h3>{t.name}</h3>
                <p>{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={ctaRef} className={`section section--tight cta-banner reveal ${ctaVisible ? 'reveal-visible' : ''}`}>
        <div className="container cta-banner__inner">
          <h2>Let's build something that lasts</h2>
          <p>Tell us about your store — we'll come back with a clear scope and honest timeline.</p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  )
}
