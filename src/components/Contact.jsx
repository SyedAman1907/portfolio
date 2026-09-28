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
  RefreshCw,
  ExternalLink,
  MessageSquare
} from 'lucide-react';

export default function Contact() {
  const { personal } = portfolioData;

  // Local state
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

  // Handle clipboard copy
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  // Field change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error for field when user begins typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  // Field blur validation handler
  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));

    const currentErrors = validateContactForm(formData);
    if (currentErrors[name]) {
      setErrors((prev) => ({ ...prev, [name]: currentErrors[name] }));
    }
  };

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'submitting') return;

    // Validate all fields
    const formErrors = validateContactForm(formData);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      setTouched({ name: true, email: true, message: true });

      // Automatically focus first invalid element
      const firstInvalidField = Object.keys(formErrors)[0];
      const el = document.getElementById(`contact-${firstInvalidField}`);
      if (el) el.focus();
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const result = await sendContactEmail(formData);
      setStatus('success');
      setSuccessMessage(
        result.message ||
          `Thank you for getting in touch! Your message was delivered to Syed Aman's inbox (${personal.email}). I will respond shortly.`
      );
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
        err.message || 'Unable to deliver your message. Please try again or use direct email.'
      );
    }
  };

  // Mailto fallback link constructed with current form state
  const mailtoHref = `mailto:${personal.email}?subject=${encodeURIComponent(
    formData.subject || `Portfolio Contact from ${formData.name || 'Visitor'}`
  )}&body=${encodeURIComponent(
    `Name: ${formData.name || 'N/A'}\nEmail: ${formData.email || 'N/A'}\n\nMessage:\n${
      formData.message || ''
    }`
  )}`;

  return (
    <section id="contact" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span>// 08. GET IN TOUCH</span>
          </div>
          <h2 className="section-title">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subtitle">
            Open for software engineering roles, AI product collaboration, and technical discussions.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '1.5rem'
          }}
          className="contact-layout"
        >
          <style>{`
            @media (min-width: 992px) {
              .contact-layout {
                grid-template-columns: 0.85fr 1.15fr !important;
                gap: 2.25rem !important;
              }
            }
          `}</style>

          {/* Left Column: Direct Info Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.95rem' }}>
            {/* Email Card */}
            <div className="glass-card" style={{ padding: '1.35rem 1.5rem' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  marginBottom: '0.85rem'
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '11px',
                    background: 'rgba(16, 185, 129, 0.12)',
                    border: '1px solid rgba(52, 211, 153, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--highlight-green)',
                    flexShrink: 0
                  }}
                >
                  <Mail size={20} />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--text-dim)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em'
                    }}
                  >
                    Direct Email
                  </div>
                  <a
                    href={`mailto:${personal.email}`}
                    style={{
                      fontSize: '0.98rem',
                      fontWeight: 600,
                      color: '#ffffff',
                      wordBreak: 'break-all',
                      textDecoration: 'none'
                    }}
                  >
                    {personal.email}
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.6rem' }}>
                <a
                  href={`mailto:${personal.email}`}
                  className="btn btn-primary btn-sm"
                  style={{ flex: 1, textDecoration: 'none' }}
                  title="Send email via your email application"
                >
                  <Send size={14} />
                  <span>Email Me</span>
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="btn btn-glass btn-sm"
                  title="Copy email to clipboard"
                  style={{ padding: '0.5rem 0.85rem' }}
                >
                  {copied ? <Check size={15} color="var(--highlight-green)" /> : <Copy size={15} />}
                  <span style={{ fontSize: '0.82rem' }}>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Location Card */}
            <div className="glass-card" style={{ padding: '1.25rem 1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '11px',
                    background: 'rgba(16, 185, 129, 0.1)',
                    border: '1px solid rgba(52, 211, 153, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--highlight-green)',
                    flexShrink: 0
                  }}
                >
                  <MapPin size={19} />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--text-dim)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em'
                    }}
                  >
                    Location & Availability
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#f8fafc' }}>
                    {personal.location}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--highlight-green)', marginTop: '0.15rem' }}>
                    ✦ Open to Remote & Hybrid Roles Worldwide
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Networks Card */}
            <div className="glass-card" style={{ padding: '1.25rem 1.5rem' }}>
              <div
                style={{
                  fontSize: '0.76rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--highlight-green)',
                  marginBottom: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em'
                }}
              >
                Professional Networks
              </div>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <a
                  href={personal.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-glass btn-sm"
                  style={{ flex: 1, textDecoration: 'none' }}
                >
                  <Linkedin size={16} color="var(--highlight-green)" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={personal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-glass btn-sm"
                  style={{ flex: 1, textDecoration: 'none' }}
                >
                  <Github size={16} color="var(--highlight-green)" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            {/* Response Time Guarantee Pill */}
            <div
              className="glass-panel"
              style={{
                padding: '0.85rem 1.15rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem',
                fontSize: '0.82rem',
                color: 'var(--text-secondary)'
              }}
            >
              <div
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: 'var(--highlight-green)',
                  boxShadow: '0 0 10px var(--highlight-green)'
                }}
              />
              <span>
                Usually responds within <strong style={{ color: '#ffffff' }}>24 hours</strong>.
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form or Success State */}
          <div className="glass-card" style={{ padding: '1.65rem 1.85rem' }}>
            {status === 'success' ? (
              /* Success State Card */
              <div
                style={{
                  padding: '2rem 1rem',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '1.1rem'
                }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'rgba(16, 185, 129, 0.15)',
                    border: '2px solid var(--highlight-green)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--highlight-green)',
                    boxShadow: '0 0 25px rgba(16, 185, 129, 0.4)'
                  }}
                >
                  <CheckCircle2 size={36} />
                </div>

                <div>
                  <h3
                    style={{
                      fontSize: '1.4rem',
                      fontWeight: 700,
                      color: '#ffffff',
                      marginBottom: '0.4rem'
                    }}
                  >
                    Message Sent Successfully!
                  </h3>
                  <p
                    style={{
                      fontSize: '0.94rem',
                      color: 'var(--text-secondary)',
                      maxWidth: '460px',
                      margin: '0 auto',
                      lineHeight: 1.6
                    }}
                  >
                    {successMessage}
                  </p>
                </div>

                <div
                  style={{
                    display: 'flex',
                    gap: '0.75rem',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    marginTop: '0.5rem'
                  }}
                >
                  <button
                    type="button"
                    onClick={() => {
                      setStatus('idle');
                      setSuccessMessage('');
                    }}
                    className="btn btn-primary btn-sm"
                  >
                    <RefreshCw size={15} />
                    <span>Send Another Message</span>
                  </button>

                  <a
                    href={`mailto:${personal.email}`}
                    className="btn btn-glass btn-sm"
                    style={{ textDecoration: 'none' }}
                  >
                    <Mail size={15} color="var(--highlight-green)" />
                    <span>Email Me Directly</span>
                  </a>
                </div>
              </div>
            ) : (
              /* Contact Form */
              <div>
                <div style={{ marginBottom: '1.35rem' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      marginBottom: '0.35rem'
                    }}
                  >
                    <MessageSquare size={18} color="var(--highlight-green)" />
                    <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>
                      Send a Direct Message
                    </h3>
                  </div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                    Fill in your details below to deliver a message straight to my personal inbox.
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  noValidate
                  style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
                >
                  {/* Honeypot Spam Protection Field */}
                  <input
                    type="text"
                    name="botcheck"
                    value={formData.botcheck}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                    style={{ display: 'none' }}
                    aria-hidden="true"
                  />

                  {/* Name and Email Row */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
                      gap: '0.95rem'
                    }}
                  >
                    {/* Name Field */}
                    <div>
                      <label
                        htmlFor="contact-name"
                        style={{
                          display: 'block',
                          fontSize: '0.76rem',
                          fontFamily: 'var(--font-mono)',
                          color: 'var(--text-dim)',
                          marginBottom: '0.35rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.04em'
                        }}
                      >
                        Your Name <span style={{ color: 'var(--highlight-green)' }}>*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        disabled={status === 'submitting'}
                        placeholder="e.g. Alex Smith"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`form-input-field ${
                          touched.name && errors.name ? 'input-error' : ''
                        }`}
                        aria-invalid={touched.name && !!errors.name}
                        aria-describedby={touched.name && errors.name ? 'contact-name-error' : undefined}
                      />
                      {touched.name && errors.name && (
                        <div id="contact-name-error" className="form-field-error" role="alert">
                          <AlertCircle size={13} style={{ flexShrink: 0 }} />
                          <span>{errors.name}</span>
                        </div>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label
                        htmlFor="contact-email"
                        style={{
                          display: 'block',
                          fontSize: '0.76rem',
                          fontFamily: 'var(--font-mono)',
                          color: 'var(--text-dim)',
                          marginBottom: '0.35rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.04em'
                        }}
                      >
                        Your Email <span style={{ color: 'var(--highlight-green)' }}>*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        disabled={status === 'submitting'}
                        placeholder="e.g. alex@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`form-input-field ${
                          touched.email && errors.email ? 'input-error' : ''
                        }`}
                        aria-invalid={touched.email && !!errors.email}
                        aria-describedby={
                          touched.email && errors.email ? 'contact-email-error' : undefined
                        }
                      />
                      {touched.email && errors.email && (
                        <div id="contact-email-error" className="form-field-error" role="alert">
                          <AlertCircle size={13} style={{ flexShrink: 0 }} />
                          <span>{errors.email}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label
                      htmlFor="contact-subject"
                      style={{
                        display: 'block',
                        fontSize: '0.76rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--text-dim)',
                        marginBottom: '0.35rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em'
                      }}
                    >
                      Subject <span style={{ color: 'var(--text-dim)', fontSize: '0.72rem' }}>(Optional)</span>
                    </label>
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      disabled={status === 'submitting'}
                      placeholder="e.g. Full Stack Role / AI Collaboration"
                      value={formData.subject}
                      onChange={handleChange}
                      className="form-input-field"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '0.35rem'
                      }}
                    >
                      <label
                        htmlFor="contact-message"
                        style={{
                          fontSize: '0.76rem',
                          fontFamily: 'var(--font-mono)',
                          color: 'var(--text-dim)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.04em'
                        }}
                      >
                        Message <span style={{ color: 'var(--highlight-green)' }}>*</span>
                      </label>
                      <span
                        style={{
                          fontSize: '0.72rem',
                          fontFamily: 'var(--font-mono)',
                          color: formData.message.length >= 10 ? 'var(--highlight-green)' : 'var(--text-dim)'
                        }}
                      >
                        {formData.message.length} chars (min 10)
                      </span>
                    </div>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      disabled={status === 'submitting'}
                      rows={4}
                      placeholder="Write your project details, inquiry, or opportunity..."
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`form-input-field ${
                        touched.message && errors.message ? 'input-error' : ''
                      }`}
                      style={{
                        resize: 'vertical',
                        minHeight: '100px'
                      }}
                      aria-invalid={touched.message && !!errors.message}
                      aria-describedby={
                        touched.message && errors.message ? 'contact-message-error' : undefined
                      }
                    />
                    {touched.message && errors.message && (
                      <div id="contact-message-error" className="form-field-error" role="alert">
                        <AlertCircle size={13} style={{ flexShrink: 0 }} />
                        <span>{errors.message}</span>
                      </div>
                    )}
                  </div>

                  {/* Error State Banner */}
                  {status === 'error' && (
                    <div
                      role="alert"
                      style={{
                        padding: '0.95rem 1.15rem',
                        borderRadius: 'var(--radius-xs)',
                        background: 'rgba(239, 68, 68, 0.12)',
                        border: '1px solid rgba(248, 113, 113, 0.35)',
                        color: '#fca5a5',
                        fontSize: '0.88rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.65rem'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                        <AlertCircle
                          size={19}
                          color="#f87171"
                          style={{ flexShrink: 0, marginTop: '2px' }}
                        />
                        <div style={{ flex: 1 }}>
                          <div
                            style={{
                              fontWeight: 600,
                              color: '#fee2e2',
                              marginBottom: '0.2rem'
                            }}
                          >
                            Failed to send via email service
                          </div>
                          <div style={{ fontSize: '0.84rem', lineHeight: 1.5 }}>{errorMessage}</div>
                        </div>
                      </div>

                      {/* Fallback Action Buttons */}
                      <div
                        style={{
                          display: 'flex',
                          gap: '0.6rem',
                          flexWrap: 'wrap',
                          marginTop: '0.35rem',
                          paddingTop: '0.65rem',
                          borderTop: '1px solid rgba(248, 113, 113, 0.2)'
                        }}
                      >
                        <a
                          href={mailtoHref}
                          className="btn btn-sm"
                          style={{
                            background: 'rgba(248, 113, 113, 0.25)',
                            color: '#ffffff',
                            border: '1px solid rgba(248, 113, 113, 0.45)',
                            textDecoration: 'none'
                          }}
                        >
                          <Mail size={14} />
                          <span>Send via Email Client (mailto)</span>
                        </a>

                        <button
                          type="button"
                          onClick={() => setStatus('idle')}
                          className="btn btn-glass btn-sm"
                        >
                          <span>Try Again</span>
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Form Action Controls */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '0.85rem',
                      marginTop: '0.45rem'
                    }}
                  >
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="btn btn-primary btn-sm"
                      style={{
                        minWidth: '150px',
                        cursor: status === 'submitting' ? 'not-allowed' : 'pointer'
                      }}
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 size={15} className="animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send size={15} />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>

                    {/* Secondary Email Me Link Button */}
                    <a
                      href={`mailto:${personal.email}`}
                      className="btn btn-glass btn-sm"
                      style={{ textDecoration: 'none' }}
                      title="Open default mail client"
                    >
                      <Mail size={14} color="var(--highlight-green)" />
                      <span>Email Me Directly</span>
                    </a>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
