import React from 'react';
import { portfolioData } from '../data/portfolioData';
import ScrambleText from './ScrambleText';
import { ShieldCheck, Calendar, Award } from 'lucide-react';

export default function Certifications() {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="section" style={{ borderTop: 'var(--border-width) solid var(--border-color)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag-box">
            <span>// 06. VERIFIED CREDENTIALS</span>
          </div>
          <h2 className="section-title">
            <ScrambleText text="LICENSES & CERTIFICATIONS" />
          </h2>
          <p className="section-subtitle">
            Formal technical certifications, immersion day standings, and student developer credentials.
          </p>
        </div>

        {/* Certifications Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '1.5rem'
          }}
        >
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="neobrutal-card"
              style={{
                padding: '1.85rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: 'var(--bg-card)'
              }}
            >
              <div>
                {/* Top Badge & Issuer */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1rem'
                  }}
                >
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontSize: '0.78rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 800,
                      padding: '0.22rem 0.65rem',
                      background: 'var(--accent-lime)',
                      color: '#000000',
                      border: '1.5px solid var(--border-color)',
                      boxShadow: '2px 2px 0px var(--shadow-color)'
                    }}
                  >
                    <ShieldCheck size={13} />
                    <span>{cert.badge}</span>
                  </span>

                  <span
                    style={{
                      fontSize: '0.78rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--text-dim)',
                      fontWeight: 700
                    }}
                  >
                    {cert.period}
                  </span>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 900,
                    textTransform: 'uppercase',
                    color: 'var(--text-primary)',
                    lineHeight: 1.25,
                    marginBottom: '0.35rem'
                  }}
                >
                  {cert.title}
                </h3>

                {/* Issuer */}
                <div
                  style={{
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    color: 'var(--text-secondary)',
                    marginBottom: '0.85rem'
                  }}
                >
                  {cert.issuer}
                </div>

                {/* Description */}
                <p
                  style={{
                    fontSize: '0.88rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.6,
                    marginBottom: '1.15rem'
                  }}
                >
                  {cert.description}
                </p>
              </div>

              {/* Skills Tagged */}
              {cert.skills && (
                <div
                  style={{
                    paddingTop: '0.85rem',
                    borderTop: '2px solid var(--border-color)',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.35rem'
                  }}
                >
                  {cert.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      style={{
                        fontSize: '0.74rem',
                        fontFamily: 'var(--font-mono)',
                        padding: '0.15rem 0.55rem',
                        border: '1.5px solid var(--border-color)',
                        background: 'var(--bg-surface)',
                        fontWeight: 600
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
