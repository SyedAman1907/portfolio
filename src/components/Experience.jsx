import React from 'react';
import { portfolioData } from '../data/portfolioData';
import ScrambleText from './ScrambleText';
import { Briefcase, Calendar, CheckCircle2, Building2, MapPin, Sparkles } from 'lucide-react';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="section" style={{ borderTop: 'var(--border-width) solid var(--border-color)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag-box">
            <span>// 04. CAREER & IMPACT</span>
          </div>
          <h2 className="section-title">
            <ScrambleText text="EXPERIENCE & LEADERSHIP" />
          </h2>
          <p className="section-subtitle">
            Engineering internships, Google Student Ambassador initiatives, campus Point of Contact (POC) management, and community impact.
          </p>
        </div>

        {/* Clean Neobrutalist Vertical Timeline */}
        <div
          style={{
            position: 'relative',
            maxWidth: '880px',
            margin: '0 auto',
            paddingLeft: '32px'
          }}
          className="timeline-brutal-container"
        >
          <style>{`
            @media (max-width: 640px) {
              .timeline-brutal-container {
                padding-left: 22px !important;
              }
              .timeline-brutal-node {
                left: -22px !important;
                width: 14px !important;
                height: 14px !important;
              }
            }
          `}</style>

          {/* Hard Vertical Spine */}
          <div
            style={{
              position: 'absolute',
              top: '12px',
              bottom: '12px',
              left: '9px',
              width: '3px',
              background: 'var(--border-color)'
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {experience.map((item, index) => {
              const isCurrent = item.isCurrent;

              return (
                <div key={index} style={{ position: 'relative' }}>
                  {/* Neobrutal Timeline Node */}
                  <div
                    className="timeline-brutal-node"
                    style={{
                      position: 'absolute',
                      top: '22px',
                      left: '-32px',
                      width: '16px',
                      height: '16px',
                      background: isCurrent ? 'var(--accent-lime)' : 'var(--bg-surface)',
                      border: '2.5px solid var(--border-color)',
                      boxShadow: '2px 2px 0px var(--shadow-color)',
                      zIndex: 3
                    }}
                  />

                  {/* Neobrutal Card */}
                  <div
                    className="neobrutal-card"
                    style={{
                      padding: '1.85rem 2rem',
                      background: 'var(--bg-card)',
                      border: 'var(--border-thick) solid var(--border-color)',
                      boxShadow: isCurrent ? 'var(--shadow-offset-hover)' : 'var(--shadow-offset)'
                    }}
                  >
                    {/* Top Row */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: '0.85rem',
                        marginBottom: '1rem'
                      }}
                    >
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', marginBottom: '0.35rem' }}>
                          <span
                            style={{
                              fontSize: '0.76rem',
                              fontFamily: 'var(--font-mono)',
                              fontWeight: 800,
                              background: isCurrent ? 'var(--accent-lime)' : 'var(--bg-surface)',
                              color: isCurrent ? '#000000' : 'var(--text-primary)',
                              border: '1.5px solid var(--border-color)',
                              padding: '0.2rem 0.65rem',
                              textTransform: 'uppercase'
                            }}
                          >
                            {item.badge}
                          </span>

                          <span style={{ fontSize: '0.76rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', fontWeight: 700 }}>
                            • {item.type}
                          </span>
                        </div>

                        <h3
                          style={{
                            fontSize: '1.45rem',
                            fontWeight: 900,
                            color: 'var(--text-primary)',
                            lineHeight: 1.2,
                            letterSpacing: '-0.02em',
                            textTransform: 'uppercase'
                          }}
                        >
                          {item.role}
                        </h3>

                        <div
                          style={{
                            fontSize: '1rem',
                            fontWeight: 700,
                            color: 'var(--text-secondary)',
                            marginTop: '0.25rem'
                          }}
                        >
                          {item.company}
                        </div>
                      </div>

                      {/* Period & Location */}
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'flex-start',
                          gap: '0.25rem',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.82rem',
                          fontWeight: 700,
                          color: 'var(--text-dim)'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                          <Calendar size={13} />
                          <span>{item.period}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                          <MapPin size={13} />
                          <span>{item.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Bullets */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', marginBottom: '1.35rem' }}>
                      {item.bullets.map((bullet, bIdx) => (
                        <div
                          key={bIdx}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.65rem',
                            fontSize: '0.92rem',
                            color: 'var(--text-muted)',
                            lineHeight: 1.6
                          }}
                        >
                          <span style={{ color: 'var(--accent-lime)', fontWeight: 900, marginTop: '0.1rem' }}>▶</span>
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>

                    {/* Skills Tags */}
                    {item.skills && (
                      <div
                        style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: '0.4rem',
                          paddingTop: '0.85rem',
                          borderTop: '2px solid var(--border-color)'
                        }}
                      >
                        {item.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            style={{
                              fontSize: '0.76rem',
                              fontFamily: 'var(--font-mono)',
                              fontWeight: 700,
                              padding: '0.2rem 0.6rem',
                              background: 'var(--bg-surface)',
                              border: '1.5px solid var(--border-color)',
                              boxShadow: '1.5px 1.5px 0px var(--shadow-color)'
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
