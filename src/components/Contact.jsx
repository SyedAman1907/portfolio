import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { sendContactEmail, validateContactForm } from '../services/emailService';
import ScrambleText from './ScrambleText';
import {
  Mail,
  MapPin,
  Linkedin,
  Github,
  Send,
  CheckCircle2,
  Copy,
  Check,
  AlertCircle,
  Loader2,
  ExternalLink
} from 'lucide-react';

export default function Contact() {
  const { personal } = portfolioData;

  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    botcheck: ''
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [mailtoFallback, setMailtoFallback] = useState(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));

    const currentErrors = validateContactForm(formData);
    if (currentErrors[name]) {
      setErrors((prev) => ({ ...prev, [name]: currentErrors[name] }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'submitting') return;

    const formErrors = validateContactForm(formData);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      setTouched({ name: true, email: true, message: true });
      return;
    }

    setStatus('submitting');
    setErrorMessage('');
    setMailtoFallback(null);

    try {
      const result = await sendContactEmail(formData);
      setStatus('success');
      setSuccessMessage(
        result.message || 'Thank you! Your message has been sent successfully to Shaik Musheera.'
      );
      if (result.fallbackToMailto && result.mailtoUrl) {
        setMailtoFallback(result.mailtoUrl);
      }
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        botcheck: ''
      });
      setTouched({});
      setErrors({});
    } catch (err) {
      setStatus('error');
      setErrorMessage(
        err.message || 'Unable to deliver message right now. Please try again or use direct email.'
      );
    }
  };

  return (
    <section id="contact" className="section" style={{ borderTop: 'var(--border-width) solid var(--border-color)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag-box">
            <span>// 08. COMMUNICATION</span>
          </div>
          <h2 className="section-title">
            <ScrambleText text="GET IN TOUCH" />
          </h2>
          <p className="section-subtitle">
            Open to software engineering internships, technical workshops, and developer collaborations.
          </p>
        </div>

        {/* Contact Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem',
            maxWidth: '1080px',
            margin: '0 auto',
            alignItems: 'start'
          }}
          className="contact-layout-brutal"
        >
          <style>{`
            @media (min-width: 900px) {
              .contact-layout-brutal {
                grid-template-columns: 0.95fr 1.05fr !important;
                gap: 3.25rem !important;
              }
            }
          `}</style>

          {/* Left Column: Direct Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div
              className="neobrutal-card"
              style={{
                padding: '2.25rem',
                background: 'var(--bg-card)',
                border: 'var(--border-thick) solid var(--border-color)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem'
              }}
            >
              <div>
                <h3
                  style={{
                    fontSize: '1.45rem',
                    fontWeight: 900,
                    textTransform: 'uppercase',
                    color: 'var(--text-primary)',
                    marginBottom: '0.45rem'
                  }}
                >
                  Let's Build Together
                </h3>
                <p style={{ fontSize: '0.94rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>
                  Whether you have an internship position, a hackathon project, or want to discuss modern web technologies—reach out directly.
                </p>
              </div>

              {/* Direct Email Box */}
              <div
                style={{
                  padding: '1.25rem',
                  background: 'var(--bg-surface)',
                  border: '2px solid var(--border-color)',
                  boxShadow: '3px 3px 0px var(--shadow-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '0.75rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', overflow: 'hidden' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      background: 'var(--accent-lime)',
                      border: '2px solid var(--border-color)',
                      boxShadow: '2px 2px 0px var(--shadow-color)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#000000',
                      flexShrink: 0
                    }}
                  >
                    <Mail size={20} />
                  </div>
                  <div style={{ overflow: 'hidden' }}>
                    <div style={{ fontSize: '0.76rem', fontFamily: 'var(--font-mono)', fontWeight: 800, color: 'var(--text-dim)', textTransform: 'uppercase' }}>
                      Direct Email
                    </div>
                    <div
                      style={{
                        fontSize: '0.94rem',
                        fontWeight: 800,
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--text-primary)',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}
                    >
                      {personal.email}
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="btn-brutal btn-brutal-sm btn-brutal-ghost"
                  style={{ flexShrink: 0, padding: '0.4rem 0.85rem' }}
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check size={14} />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Location & Status Info */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                  <MapPin size={16} />
                  <span>{personal.location}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                  <span style={{ color: 'var(--accent-lime)' }}>■</span>
                  <span>Available for 2026 Developer Internships</span>
                </div>
              </div>

              {/* Socials */}
              <div
                style={{
                  paddingTop: '1.25rem',
                  borderTop: '2px solid var(--border-color)',
                  display: 'flex',
                  gap: '0.85rem'
                }}
              >
                <a
                  href={personal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-brutal btn-brutal-ghost btn-brutal-sm"
                  style={{ flex: 1 }}
                >
                  <Github size={16} />
                  <span>GitHub</span>
                  <ExternalLink size={12} />
                </a>

                <a
                  href={personal.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-brutal btn-brutal-ghost btn-brutal-sm"
                  style={{ flex: 1 }}
                >
                  <Linkedin size={16} />
                  <span>LinkedIn</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Neobrutalist Form */}
          <div
            className="neobrutal-card"
            style={{
              padding: '2.5rem',
              background: 'var(--bg-card)',
              border: 'var(--border-thick) solid var(--border-color)',
              boxShadow: 'var(--shadow-offset-lg)'
            }}
          >
            <h3
              style={{
                fontSize: '1.5rem',
                fontWeight: 900,
                textTransform: 'uppercase',
                color: 'var(--text-primary)',
                marginBottom: '0.45rem'
              }}
            >
              Send A Direct Message
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.75rem' }}>
              Fill in your inquiry details below. I will respond promptly to your email.
            </p>

            {/* Success Notification */}
            {status === 'success' && (
              <div
                style={{
                  padding: '1.5rem',
                  background: 'var(--bg-surface)',
                  border: '2px solid var(--border-color)',
                  boxShadow: '4px 4px 0px var(--shadow-color)',
                  marginBottom: '1.5rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', marginBottom: '0.5rem' }}>
                  <CheckCircle2 size={20} color="var(--accent-lime)" />
                  <span style={{ fontWeight: 900, fontSize: '1.05rem', textTransform: 'uppercase' }}>
                    Message Delivered
                  </span>
                </div>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {successMessage}
                </p>

                {mailtoFallback && (
                  <a
                    href={mailtoFallback}
                    className="btn-brutal btn-brutal-lime btn-brutal-sm"
                    style={{ marginTop: '1rem', display: 'inline-flex' }}
                  >
                    <Mail size={15} />
                    <span>Open in Email App</span>
                  </a>
                )}

                <button
                  onClick={() => setStatus('idle')}
                  className="btn-brutal btn-brutal-ghost btn-brutal-sm"
                  style={{ marginTop: '0.85rem', marginLeft: mailtoFallback ? '0.65rem' : '0' }}
                >
                  Send another inquiry
                </button>
              </div>
            )}

            {/* Error Notification */}
            {status === 'error' && (
              <div
                style={{
                  padding: '1.25rem',
                  background: 'rgba(239, 68, 68, 0.1)',
                  border: '2px solid #ef4444',
                  color: '#ef4444',
                  marginBottom: '1.5rem',
                  fontSize: '0.9rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontWeight: 800 }}>
                  <AlertCircle size={18} />
                  <span>{errorMessage}</span>
                </div>
                <a
                  href={`mailto:${personal.email}`}
                  style={{
                    display: 'inline-block',
                    marginTop: '0.65rem',
                    fontWeight: 700,
                    textDecoration: 'underline',
                    color: 'var(--text-primary)'
                  }}
                >
                  Click to email directly at {personal.email}
                </a>
              </div>
            )}

            {status !== 'success' && (
              <form onSubmit={handleSubmit} noValidate>
                {/* Honeypot */}
                <input
                  type="text"
                  name="botcheck"
                  value={formData.botcheck}
                  onChange={handleChange}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.35rem' }}>
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      style={{
                        display: 'block',
                        fontSize: '0.84rem',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        color: 'var(--text-secondary)',
                        marginBottom: '0.45rem'
                      }}
                    >
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="e.g. Alex Morgan"
                      className="form-input-brutal"
                      aria-invalid={!!errors.name}
                    />
                    {touched.name && errors.name && (
                      <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#ef4444', marginTop: '0.35rem', display: 'block' }}>
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      style={{
                        display: 'block',
                        fontSize: '0.84rem',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        color: 'var(--text-secondary)',
                        marginBottom: '0.45rem'
                      }}
                    >
                      Your Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="alex@company.com"
                      className="form-input-brutal"
                      aria-invalid={!!errors.email}
                    />
                    {touched.email && errors.email && (
                      <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#ef4444', marginTop: '0.35rem', display: 'block' }}>
                        {errors.email}
                      </span>
                    )}
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="contact-subject"
                      style={{
                        display: 'block',
                        fontSize: '0.84rem',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        color: 'var(--text-secondary)',
                        marginBottom: '0.45rem'
                      }}
                    >
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Internship Inquiry / Project Collaboration"
                      className="form-input-brutal"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      style={{
                        display: 'block',
                        fontSize: '0.84rem',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        color: 'var(--text-secondary)',
                        marginBottom: '0.45rem'
                      }}
                    >
                      Your Message *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Hello Musheera, I came across your portfolio and would like to connect regarding..."
                      className="form-input-brutal"
                      rows={4}
                      aria-invalid={!!errors.message}
                    />
                    {touched.message && errors.message && (
                      <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#ef4444', marginTop: '0.35rem', display: 'block' }}>
                        {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn-brutal btn-brutal-lime"
                    style={{
                      width: '100%',
                      marginTop: '0.5rem',
                      opacity: status === 'submitting' ? 0.7 : 1
                    }}
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        <span>Dispatching...</span>
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
