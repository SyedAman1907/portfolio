import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const tickerItems = [
    'SHAIK MUSHEERA',
    'WEB DEVELOPER',
    'B.TECH CSE @ RGMCET',
    'GOOGLE STUDENT AMBASSADOR',
    '4TH PLACE MONGODB IMMERSION',
    'REACT.JS & MODERN ARCHITECTURE',
    'AVAILABLE FOR INTERNSHIPS'
  ];

  return (
    <footer
      style={{
        borderTop: 'var(--border-thick) solid var(--border-color)',
        background: 'var(--bg-card)',
        position: 'relative',
        zIndex: 10
      }}
    >
      {/* Neobrutalist Marquee Ticker */}
      <div className="neobrutal-ticker" aria-hidden="true">
        <div className="neobrutal-ticker-track">
          {[...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => (
            <span key={idx} style={{ margin: '0 1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.75rem' }}>
              <span>{item}</span>
              <span>⚡</span>
            </span>
          ))}
        </div>
      </div>

      <div className="container" style={{ padding: '3.5rem 1.5rem 2.5rem' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2.5rem'
          }}
        >
          {/* Main Footer Row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1.5rem'
            }}
          >
            {/* Brand */}
            <div>
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 900,
                  fontSize: '1.5rem',
                  textTransform: 'uppercase',
                  letterSpacing: '-0.02em',
                  color: 'var(--text-primary)'
                }}
              >
                {personal.name}
              </span>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)', marginTop: '0.25rem', fontFamily: 'var(--font-mono)' }}>
                B.Tech Student • Web Developer • Technology Enthusiast @ RGMCET
              </p>
            </div>

            {/* Actions & Socials */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexWrap: 'wrap' }}>
              <a
                href={personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-brutal btn-brutal-sm btn-brutal-ghost"
                aria-label="GitHub Profile"
              >
                <Github size={16} />
                <span>GitHub</span>
              </a>

              <a
                href={personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-brutal btn-brutal-sm btn-brutal-ghost"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>

              <a
                href={`mailto:${personal.email}`}
                className="btn-brutal btn-brutal-sm btn-brutal-ghost"
                aria-label="Direct Email"
              >
                <Mail size={16} />
                <span>Email</span>
              </a>

              <button
                onClick={scrollToTop}
                className="btn-brutal btn-brutal-sm btn-brutal-lime"
                aria-label="Scroll back to top"
              >
                <ArrowUp size={15} />
                <span>Back to Top</span>
              </button>
            </div>
          </div>

          {/* Bottom Row */}
          <div
            style={{
              paddingTop: '1.75rem',
              borderTop: '2px solid var(--border-color)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.82rem',
              color: 'var(--text-dim)'
            }}
          >
            <div>
              © {new Date().getFullYear()} {personal.name}. All verified projects & credentials preserved.
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontWeight: 800 }}>
              <span style={{ color: 'var(--accent-lime)' }}>■</span>
              <span>NEOBRUTALIST ARCHITECTURE • REACT + VITE</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
