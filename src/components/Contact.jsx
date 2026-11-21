import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { sendContactEmail, validateContactForm } from '../services/emailService';
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
  ExternalLink,
  MessageSquare
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

  // Clipboard copy
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
    <section id="contact" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span>// 08. COMMUNICATION</span>
          </div>
          <h2 className="section-title">
            Get in <span className="monochrome-gradient">Touch</span>
          </h2>
          <p className="section-subtitle">
            Whether you have an internship opportunity, a project to collaborate on, or simply want to connect—my inbox is open.
          </p>
        </div>

        {/* Contact Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2rem',
            maxWidth: '1000px',
            margin: '0 auto',
            alignItems: 'start'
          }}
          className="contact-layout"
        >
          <style>{`
            @media (min-width: 900px) {
              .contact-layout {
                grid-template-columns: 0.9fr 1.1fr !important;
                gap: 2.75rem !important;
              }
            }
          `}</style>

          {/* Left Column: Direct Contact & Socials */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* Quick Overview Card */}
            <div
              className="glass-card"
              style={{
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                border: '1px solid var(--border-card)'
              }}
            >
              <div>
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: 'var(--text-main)',
                    marginBottom: '0.35rem'
                  }}
                >
                  Let's Collaborate
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  Open to full-stack and web development internships, student community sessions, and technical hackathon collaborations.
                </p>
              </div>

              {/* Email Address with Copy Button */}
              <div
                className="glass-panel"
                style={{
                  padding: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '0.75rem',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', overflow: 'hidden' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: 'var(--radius-xs)',
                      background: 'var(--tag-bg)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-main)',
                      flexShrink: 0
                    }}
                  >
                    <Mail size={18} />
                  </div>
                  <div style={{ overflow: 'hidden' }}>
                    <div style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>
                      Direct Email
                    </div>
                    <div
                      style={{
                        fontSize: '0.88rem',
                        fontWeight: 600,
                        color: 'var(--text-main)',
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
                  className="btn btn-outline btn-sm"
                  style={{ padding: '0.35rem 0.75rem', flexShrink: 0 }}
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
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', fontSize: '0.84rem', color: 'var(--text-muted)' }}>
                  <MapPin size={15} color="var(--text-main)" />
                  <span>{personal.location}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', fontSize: '0.84rem', color: 'var(--text-muted)' }}>
                  <CheckCircle2 size={15} color="var(--text-main)" />
                  <span>Available for Summer / Semester Internships</span>
                </div>
              </div>

              {/* Social Channels */}
              <div
                style={{
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--border-subtle)',
                  display: 'flex',
                  gap: '0.75rem'
                }}
              >
                <a
                  href={personal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm"
                  style={{ flex: 1 }}
                >
                  <Github size={15} />
                  <span>GitHub</span>
                  <ExternalLink size={12} />
                </a>

                <a
                  href={personal.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm"
                  style={{ flex: 1 }}
                >
                  <Linkedin size={15} />
                  <span>LinkedIn</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div
            className="glass-card"
            style={{
              padding: '2rem',
              border: '1px solid var(--border-card)'
            }}
          >
            <h3
              style={{
                fontSize: '1.25rem',
                fontWeight: 700,
                color: 'var(--text-main)',
                marginBottom: '0.35rem'
              }}
            >
              Send a Direct Message
            </h3>
            <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Fill out this form and I will respond to your email as soon as possible.
            </p>

            {/* Success Notification */}
            {status === 'success' && (
              <div
                style={{
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-sm)',
                  background: 'var(--tag-bg)',
                  border: '1px solid var(--border-card-hover)',
                  marginBottom: '1.25rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', marginBottom: '0.35rem' }}>
                  <CheckCircle2 size={18} color="var(--text-main)" />
                  <span style={{ fontWeight: 700, fontSize: '0.94rem', color: 'var(--text-main)' }}>
                    Message Received!
                  </span>
                </div>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {successMessage}
                </p>

                {mailtoFallback && (
                  <a
                    href={mailtoFallback}
                    className="btn btn-primary btn-sm"
                    style={{ marginTop: '0.85rem', display: 'inline-flex' }}
                  >
                    <Mail size={14} />
                    <span>Open in Email App</span>
                  </a>
                )}

                <button
                  onClick={() => setStatus('idle')}
                  className="btn btn-outline btn-sm"
                  style={{ marginTop: '0.75rem', marginLeft: mailtoFallback ? '0.5rem' : '0' }}
                >
                  Send another message
                </button>
              </div>
            )}

            {/* Error Notification */}
            {status === 'error' && (
              <div
                style={{
                  padding: '1rem',
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(239, 68, 68, 0.1)',
                  border: '1px solid rgba(239, 68, 68, 0.25)',
                  color: '#f87171',
                  marginBottom: '1.25rem',
                  fontSize: '0.86rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontWeight: 600 }}>
                  <AlertCircle size={16} />
                  <span>{errorMessage}</span>
                </div>
                <a
                  href={`mailto:${personal.email}`}
                  style={{
                    display: 'inline-block',
                    marginTop: '0.5rem',
                    textDecoration: 'underline',
                    color: 'var(--text-main)',
                    fontSize: '0.82rem'
                  }}
                >
                  Click here to email directly at {personal.email}
                </a>
              </div>
            )}

            {/* Form Fields */}
            {status !== 'success' && (
              <form onSubmit={handleSubmit} noValidate>
                {/* Honeypot Anti-spam */}
                <input
                  type="text"
                  name="botcheck"
                  value={formData.botcheck}
                  onChange={handleChange}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      style={{
                        display: 'block',
                        fontSize: '0.82rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--text-secondary)',
                        marginBottom: '0.35rem'
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
                      className="form-input"
                      aria-invalid={!!errors.name}
                    />
                    {touched.name && errors.name && (
                      <span style={{ fontSize: '0.78rem', color: '#f87171', marginTop: '0.25rem', display: 'block' }}>
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      style={{
                        display: 'block',
                        fontSize: '0.82rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--text-secondary)',
                        marginBottom: '0.35rem'
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
                      className="form-input"
                      aria-invalid={!!errors.email}
                    />
                    {touched.email && errors.email && (
                      <span style={{ fontSize: '0.78rem', color: '#f87171', marginTop: '0.25rem', display: 'block' }}>
                        {errors.email}
                      </span>
                    )}
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label
                      htmlFor="contact-subject"
                      style={{
                        display: 'block',
                        fontSize: '0.82rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--text-secondary)',
                        marginBottom: '0.35rem'
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
                      className="form-input"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      style={{
                        display: 'block',
                        fontSize: '0.82rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--text-secondary)',
                        marginBottom: '0.35rem'
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
                      placeholder="Hello Musheera, I came across your portfolio and would like to discuss..."
                      className="form-input"
                      rows={4}
                      aria-invalid={!!errors.message}
                    />
                    {touched.message && errors.message && (
                      <span style={{ fontSize: '0.78rem', color: '#f87171', marginTop: '0.25rem', display: 'block' }}>
                        {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn btn-primary"
                    style={{
                      width: '100%',
                      marginTop: '0.5rem',
                      opacity: status === 'submitting' ? 0.7 : 1
                    }}
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        <span>Sending message...</span>
                      </>
                    ) : (
                      <>
                        <Send size={15} />
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
