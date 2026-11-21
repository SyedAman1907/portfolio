import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Award, CheckCircle2, Calendar, ShieldCheck, ExternalLink } from 'lucide-react';

export default function Certifications() {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span>// 06. VERIFIED CREDENTIALS</span>
          </div>
          <h2 className="section-title">
            Licenses & <span className="monochrome-gradient">Certifications</span>
          </h2>
          <p className="section-subtitle">
            Formal technical certifications, industry immersion recognitions, and leadership credentials.
          </p>
        </div>

        {/* Certifications Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '1.25rem'
          }}
        >
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="glass-card"
              style={{
                padding: '1.6rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid var(--border-card)'
              }}
            >
              <div>
                {/* Top Badge & Issuer */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '0.85rem'
                  }}
                >
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontSize: '0.76rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 600,
                      padding: '0.2rem 0.6rem',
                      borderRadius: 'var(--radius-full)',
                      background: 'var(--tag-bg)',
                      border: '1px solid var(--tag-border)',
                      color: 'var(--text-main)'
                    }}
                  >
                    <ShieldCheck size={13} />
                    <span>{cert.badge}</span>
                  </span>

                  <span
                    style={{
                      fontSize: '0.76rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--text-dim)'
                    }}
                  >
                    {cert.period}
                  </span>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: 'var(--text-main)',
                    lineHeight: 1.3,
                    marginBottom: '0.3rem'
                  }}
                >
                  {cert.title}
                </h3>

                {/* Issuer */}
                <div
                  style={{
                    fontSize: '0.86rem',
                    fontWeight: 600,
                    color: 'var(--text-secondary)',
                    marginBottom: '0.75rem'
                  }}
                >
                  {cert.issuer}
                </div>

                {/* Description */}
                <p
                  style={{
                    fontSize: '0.84rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.6,
                    marginBottom: '1rem'
                  }}
                >
                  {cert.description}
                </p>
              </div>

              {/* Skills Tagged */}
              {cert.skills && (
                <div
                  style={{
                    paddingTop: '0.75rem',
                    borderTop: '1px solid var(--border-subtle)',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.35rem'
                  }}
                >
                  {cert.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      style={{
                        fontSize: '0.72rem',
                        fontFamily: 'var(--font-mono)',
                        padding: '0.15rem 0.5rem',
                        borderRadius: 'var(--radius-xs)',
                        background: 'var(--tag-bg)',
                        color: 'var(--text-dim)'
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
