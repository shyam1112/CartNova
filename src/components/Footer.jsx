import { Link } from 'react-router-dom'
import logo from '../assets/logo-white.png'
import './Footer.css'

const SERVICE_LINKS = [
  'Shopify Development',
  'Theme Design',
  'Custom Apps',
  'Shopify Plus',
  'Checkout Extensions',
  'Store Migration',
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__cta">
        <div>
          <h2>Have a Shopify project in mind?</h2>
          <p>Tell us what you're building — we'll reply with a plan, timeline, and quote within one business day.</p>
        </div>
        <Link to="/contact" className="btn btn-primary btn-lg">
          Get a Free Consultation
        </Link>
      </div>

      <div className="container footer__grid">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            <img src={logo} alt="Cartnova" className="footer__logo-img" />
          </Link>
          <p>
            A dedicated Shopify solutions partner — from custom storefronts and app development
            to Shopify Plus migrations and checkout customization.
          </p>
        </div>

        <div className="footer__col">
          <h4>Services</h4>
          <ul>
            {SERVICE_LINKS.map((s) => (
              <li key={s}>
                <Link to="/services">{s}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Get in touch</h4>
          <ul>
            <li>
              <Link to="/contact">Send us a message →</Link>
            </li>
            <li className="footer__muted">Remote-first &amp; globally available</li>
            <li className="footer__muted">Mon–Sat, 9am–7pm IST</li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>© {year} Cartnova. All rights reserved.</p>
        <p>Built for Shopify merchants, by Shopify experts.</p>
      </div>
    </footer>
  )
}
