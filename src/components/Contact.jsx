import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  Mail,
  MapPin,
  Linkedin,
  Github,
  Send,
  CheckCircle2,
  Copy,
  Check
} from 'lucide-react';

export default function Contact() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry from ' + formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoUrl;
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
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
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '0.85rem' }}>
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
                    color: 'var(--highlight-green)'
                  }}
                >
                  <Mail size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', textTransform: 'uppercase' }}>
                    Direct Email
                  </div>
                  <a
                    href={`mailto:${personal.email}`}
                    style={{
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: '#ffffff',
                      wordBreak: 'break-all'
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
                  style={{ flex: 1 }}
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
                    color: 'var(--highlight-green)'
                  }}
                >
                  <MapPin size={19} />
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', textTransform: 'uppercase' }}>
                    Location
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#f8fafc' }}>
                    {personal.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links Card */}
            <div className="glass-card" style={{ padding: '1.25rem 1.5rem' }}>
              <div style={{ fontSize: '0.76rem', fontFamily: 'var(--font-mono)', color: 'var(--highlight-green)', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
                Professional Networks
              </div>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <a
                  href={personal.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-glass btn-sm"
                  style={{ flex: 1 }}
                >
                  <Linkedin size={16} color="var(--highlight-green)" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={personal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-glass btn-sm"
                  style={{ flex: 1 }}
                >
                  <Github size={16} color="var(--highlight-green)" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="glass-card" style={{ padding: '1.65rem 1.85rem' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.35rem' }}>
              Send a Direct Message
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
              Fill out the form below to reach my personal inbox directly.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.95rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))', gap: '0.85rem' }}>
                <div>
                  <label
                    htmlFor="contact-name"
                    style={{
                      display: 'block',
                      fontSize: '0.76rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--text-dim)',
                      marginBottom: '0.35rem',
                      textTransform: 'uppercase'
                    }}
                  >
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="e.g. Alex Smith"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 0.95rem',
                      background: 'rgba(255, 255, 255, 0.025)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: 'var(--radius-xs)',
                      color: '#ffffff',
                      fontSize: '16px', /* Prevents iOS mobile auto-zoom */
                      outline: 'none',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--highlight-green)')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)')}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    style={{
                      display: 'block',
                      fontSize: '0.76rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--text-dim)',
                      marginBottom: '0.35rem',
                      textTransform: 'uppercase'
                    }}
                  >
                    Your Email *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="e.g. alex@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 0.95rem',
                      background: 'rgba(255, 255, 255, 0.025)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: 'var(--radius-xs)',
                      color: '#ffffff',
                      fontSize: '16px', /* Prevents iOS mobile auto-zoom */
                      outline: 'none',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--highlight-green)')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)')}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  style={{
                    display: 'block',
                    fontSize: '0.76rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-dim)',
                    marginBottom: '0.35rem',
                    textTransform: 'uppercase'
                  }}
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  placeholder="e.g. Job Opportunity / Collaboration"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 0.95rem',
                    background: 'rgba(255, 255, 255, 0.025)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: 'var(--radius-xs)',
                    color: '#ffffff',
                    fontSize: '16px', /* Prevents iOS mobile auto-zoom */
                    outline: 'none',
                    transition: 'border-color 0.2s ease'
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--highlight-green)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)')}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  style={{
                    display: 'block',
                    fontSize: '0.76rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-dim)',
                    marginBottom: '0.35rem',
                    textTransform: 'uppercase'
                  }}
                >
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={3}
                  placeholder="Write your message..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 0.95rem',
                    background: 'rgba(255, 255, 255, 0.025)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: 'var(--radius-xs)',
                    color: '#ffffff',
                    fontSize: '16px', /* Prevents iOS mobile auto-zoom */
                    outline: 'none',
                    resize: 'vertical',
                    fontFamily: 'var(--font-body)',
                    transition: 'border-color 0.2s ease'
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--highlight-green)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)')}
                />
              </div>

              <button type="submit" className="btn btn-primary btn-sm" style={{ marginTop: '0.45rem' }}>
                <Send size={15} />
                <span>Send Message</span>
              </button>

              {formSubmitted && (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.55rem',
                    padding: '0.7rem 0.95rem',
                    borderRadius: 'var(--radius-xs)',
                    background: 'rgba(16, 185, 129, 0.12)',
                    border: '1px solid var(--highlight-green)',
                    color: 'var(--highlight-green)',
                    fontSize: '0.86rem'
                  }}
                >
                  <CheckCircle2 size={16} />
                  <span>Opening your mail client to send to {personal.email}...</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
