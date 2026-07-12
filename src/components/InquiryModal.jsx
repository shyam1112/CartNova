import { useEffect, useState } from 'react'
import { FORMSPREE_ENDPOINT, PROJECT_TYPES } from '../data/config'
import './InquiryModal.css'

const SESSION_KEY = 'cartnova-inquiry-seen'
const AUTO_OPEN_DELAY = 5000

const initialForm = {
  name: '',
  email: '',
  phone: '',
  projectType: PROJECT_TYPES[0],
  message: '',
}

export default function InquiryModal() {
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return undefined

    const timer = setTimeout(() => {
      setOpen(true)
      sessionStorage.setItem(SESSION_KEY, '1')
    }, AUTO_OPEN_DELAY)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!open) return undefined

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [open])

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
        const data = await res.json().catch(() => null)
        const message = data?.errors?.map((err) => err.message).join(', ')
        setErrorMessage(message || 'Something went wrong sending your inquiry. Please wait a moment and try again.')
        setStatus('error')
      }
    } catch {
      setErrorMessage('Something went wrong sending your inquiry. Please wait a moment and try again.')
      setStatus('error')
    }
  }

  const openModal = () => {
    setStatus('idle')
    setOpen(true)
  }

  return (
    <>
      {!open && (
        <button type="button" className="inquiry-fab" onClick={openModal}>
          <span className="inquiry-fab__dot" />
          Get a Free Quote
        </button>
      )}

      {open && (
        <div className="inquiry-overlay" onClick={() => setOpen(false)}>
          <div className="inquiry-modal card" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="inquiry-modal__close" aria-label="Close" onClick={() => setOpen(false)}>
              ×
            </button>

            {status === 'success' ? (
              <div className="inquiry-modal__success">
                <div className="inquiry-modal__success-icon">✓</div>
                <h3>Inquiry received</h3>
                <p>Thanks for reaching out — we'll reply to your email within one business day.</p>
                <button type="button" className="btn btn-ghost" onClick={() => setOpen(false)}>
                  Close
                </button>
              </div>
            ) : (
              <>
                <span className="eyebrow">Free Consultation</span>
                <h3>Tell us about your Shopify project</h3>
                <p className="inquiry-modal__subtitle">
                  Share a few quick details — we'll follow up with next steps within one business day.
                </p>

                <form onSubmit={handleSubmit} className="inquiry-form">
                  <div className="inquiry-form__row">
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

                  <div className="inquiry-form__row">
                    <label>
                      Phone (optional)
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={update('phone')}
                        placeholder="+1 555 000 0000"
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
                    What are you looking to build? (optional)
                    <textarea
                      name="message"
                      rows={3}
                      value={form.message}
                      onChange={update('message')}
                      placeholder="A quick note on your store and goals..."
                    />
                  </label>

                  <input type="text" name="_gotcha" className="inquiry-form__honeypot" tabIndex="-1" autoComplete="off" />

                  <button type="submit" className="btn btn-primary btn-lg" disabled={status === 'submitting'}>
                    {status === 'submitting' ? 'Sending...' : 'Send Inquiry'}
                  </button>

                  {status === 'error' && <p className="inquiry-form__error">{errorMessage}</p>}
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}
