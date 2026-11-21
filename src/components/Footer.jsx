import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-subtle)',
        background: 'var(--footer-bg)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        padding: '2.5rem 0 2rem',
        position: 'relative',
        zIndex: 10
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.75rem'
          }}
        >
          {/* Top Bar: Brand & Quick Links */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1.25rem'
            }}
          >
            {/* Brand */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800,
                  fontSize: '1.2rem',
                  color: 'var(--text-main)',
                  letterSpacing: '-0.02em'
                }}
              >
                {personal.name}
              </span>
              <p style={{ fontSize: '0.84rem', color: 'var(--text-dim)', maxWidth: '440px' }}>
                B.Tech Student • Web Developer • Technology Enthusiast @ RGMCET
              </p>
            </div>

            {/* Social Links & Back to top */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <a
                  href={personal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm"
                  style={{ borderRadius: 'var(--radius-full)', padding: '0.45rem 0.75rem' }}
                  aria-label="GitHub Profile"
                >
                  <Github size={15} />
                </a>
                <a
                  href={personal.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm"
                  style={{ borderRadius: 'var(--radius-full)', padding: '0.45rem 0.75rem' }}
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={15} />
                </a>
                <a
                  href={`mailto:${personal.email}`}
                  className="btn btn-outline btn-sm"
                  style={{ borderRadius: 'var(--radius-full)', padding: '0.45rem 0.75rem' }}
                  aria-label="Send direct email"
                >
                  <Mail size={15} />
                </a>
              </div>

              <button
                onClick={scrollToTop}
                className="btn btn-outline btn-sm"
                style={{
                  borderRadius: 'var(--radius-full)',
                  padding: '0.45rem 0.95rem',
                  fontSize: '0.82rem'
                }}
                aria-label="Scroll to top of page"
              >
                <ArrowUp size={14} />
                <span>Top</span>
              </button>
            </div>
          </div>

          {/* Bottom Bar: Copyright */}
          <div
            style={{
              paddingTop: '1.25rem',
              borderTop: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '0.75rem',
              fontSize: '0.78rem',
              fontFamily: 'var(--font-mono)',
              color: 'var(--text-dim)'
            }}
          >
            <div>
              © {new Date().getFullYear()} {personal.name}. All genuine projects & academic credentials preserved.
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <span>Designed & Built with Precision</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
