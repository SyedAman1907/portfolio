import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
        background: 'rgba(3, 8, 6, 0.9)',
        backdropFilter: 'blur(16px)',
        padding: '1.75rem 0 1.25rem',
        position: 'relative',
        zIndex: 10
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem'
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem'
            }}
          >
            {/* Brand Logo & Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800,
                  fontSize: '1.1rem',
                  color: '#ffffff'
                }}
              >
                Syed <span style={{ color: 'var(--highlight-green)' }}>Aman</span> Mirzanullah
              </span>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', maxWidth: '420px' }}>
                Full Stack & AI Developer. Building resilient web apps, intelligent agents, and scalable distributed architectures.
              </p>
            </div>

            {/* Social Links & Back to Top */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <a
                  href={personal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-glass btn-sm"
                  style={{ borderRadius: 'var(--radius-full)', padding: '0.4rem 0.65rem' }}
                  aria-label="GitHub Profile"
                >
                  <Github size={14} />
                </a>
                <a
                  href={personal.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-glass btn-sm"
                  style={{ borderRadius: 'var(--radius-full)', padding: '0.4rem 0.65rem' }}
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={14} />
                </a>
                <a
                  href={`mailto:${personal.email}`}
                  className="btn btn-glass btn-sm"
                  style={{ borderRadius: 'var(--radius-full)', padding: '0.4rem 0.65rem' }}
                  aria-label="Send Email"
                >
                  <Mail size={14} />
                </a>
              </div>

              <button
                onClick={scrollToTop}
                className="btn btn-glass btn-sm"
                style={{
                  borderRadius: 'var(--radius-full)',
                  padding: '0.4rem 0.8rem',
                  fontSize: '0.76rem'
                }}
                aria-label="Scroll to top"
              >
                <span>Back to top</span>
                <ArrowUp size={13} color="var(--highlight-green)" />
              </button>
            </div>
          </div>

          {/* Bottom Bar */}
          <div
            style={{
              paddingTop: '0.85rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.04)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '0.5rem',
              fontSize: '0.74rem',
              fontFamily: 'var(--font-mono)',
              color: 'var(--text-dim)'
            }}
          >
            <div>
              &copy; {new Date().getFullYear()} Syed Aman Mirzanullah. Built with React & Vite.
            </div>
            <div>
              Luxury dark interface • Emerald glassmorphism
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
