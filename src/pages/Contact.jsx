import { useState } from 'react'
import { FAQS } from '../data/content'
import { FORMSPREE_ENDPOINT, PROJECT_TYPES, BUDGETS } from '../data/config'
import useReveal from '../hooks/useReveal'
import './Contact.css'

const initialForm = {
  name: '',
  email: '',
  company: '',
  projectType: PROJECT_TYPES[0],
  budget: BUDGETS[0],
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')
  const [formRef, formVisible] = useReveal()
  const [faqRef, faqVisible] = useReveal()

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(e.target),
      })

      if (res.ok) {
        setStatus('success')
        setForm(initialForm)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <section className="page-hero">
        <div className="glow-blob page-hero__glow" />
        <div className="page-hero__grid" />
        <div className="container page-hero__inner">
          <span className="eyebrow">Contact</span>
          <h1>Let's talk about your Shopify project</h1>
          <p>Share a few details and we'll get back to you within one business day with next steps.</p>
        </div>
      </section>

      <section ref={formRef} className={`section contact-section reveal ${formVisible ? 'reveal-visible' : ''}`}>
        <div className="container contact-grid">
          <div className="contact-info">
            <h2>Get in touch</h2>
            <p>
              Whether you need a full Shopify Plus build, a custom app, or help migrating your store,
              tell us about it and we'll follow up with a scoped plan.
            </p>

            <div className="contact-info__item">
              <span className="contact-info__label">How to reach us</span>
              <span>Fill out the form — we'll reply straight to your email</span>
            </div>
            <div className="contact-info__item">
              <span className="contact-info__label">Availability</span>
              <span>Mon–Sat, 9am–7pm IST</span>
            </div>
            <div className="contact-info__item">
              <span className="contact-info__label">Response time</span>
              <span>Within 1 business day</span>
            </div>
          </div>

          <form className="contact-form card" onSubmit={handleSubmit}>
            {status === 'success' ? (
              <div className="contact-form__success">
                <h3>Message sent</h3>
                <p>Thanks for reaching out — we'll reply to your email within one business day.</p>
              </div>
            ) : (
              <>
                <div className="contact-form__row">
                  <label>
                    Name
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={update('name')}
                      placeholder="Jane Doe"
                    />
                  </label>
                  <label>
                    Email
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={update('email')}
                      placeholder="jane@company.com"
                    />
                  </label>
                </div>

                <div className="contact-form__row">
                  <label>
                    Company (optional)
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={update('company')}
                      placeholder="Company name"
                    />
                  </label>
                  <label>
                    Project type
                    <select name="projectType" value={form.projectType} onChange={update('projectType')}>
                      {PROJECT_TYPES.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <label>
                  Budget
                  <select name="budget" value={form.budget} onChange={update('budget')}>
                    {BUDGETS.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </label>

                <label>
                  Project details
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={update('message')}
                    placeholder="Tell us about your store, timeline, and goals..."
                  />
                </label>

                <input type="text" name="_gotcha" className="contact-form__honeypot" tabIndex="-1" autoComplete="off" />

                <button type="submit" className="btn btn-primary btn-lg" disabled={status === 'submitting'}>
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>

                {status === 'error' && (
                  <p className="contact-form__error">
                    Something went wrong sending your message. Please wait a moment and try again.
                  </p>
                )}
              </>
            )}
          </form>
        </div>
      </section>

      <section ref={faqRef} className={`section section--tight faq reveal ${faqVisible ? 'reveal-visible' : ''}`}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">FAQ</span>
            <h2>Common questions</h2>
          </div>
          <div className={`faq-list stagger ${faqVisible ? 'reveal-visible' : ''}`}>
            {FAQS.map((f) => (
              <details key={f.q} className="faq-item card">
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
