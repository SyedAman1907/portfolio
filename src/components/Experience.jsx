import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, Calendar, CheckCircle2, Building2, Sparkles, MapPin } from 'lucide-react';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span>// 04. EXPERIENCE & LEADERSHIP</span>
          </div>
          <h2 className="section-title">
            Professional <span className="monochrome-gradient">Journey</span>
          </h2>
          <p className="section-subtitle">
            Hands-on technical internships, Google Student Ambassador leadership, event Point of Contact (POC) management, and community impact.
          </p>
        </div>

        {/* Clean Vertical Timeline */}
        <div
          style={{
            position: 'relative',
            maxWidth: '840px',
            margin: '0 auto',
            paddingLeft: '30px'
          }}
          className="timeline-container"
        >
          <style>{`
            @media (max-width: 640px) {
              .timeline-container {
                padding-left: 20px !important;
              }
              .timeline-dot {
                left: -20px !important;
                width: 12px !important;
                height: 12px !important;
              }
            }
          `}</style>

          {/* Vertical Track Line */}
          <div
            style={{
              position: 'absolute',
              top: '12px',
              bottom: '12px',
              left: '9px',
              width: '2px',
              background: 'linear-gradient(180deg, var(--border-card-hover) 0%, var(--border-subtle) 100%)'
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            {experience.map((item, index) => {
              const isCurrent = item.isCurrent;

              return (
                <div key={index} style={{ position: 'relative' }}>
                  {/* Timeline Dot */}
                  <div
                    className="timeline-dot"
                    style={{
                      position: 'absolute',
                      top: '20px',
                      left: '-30px',
                      width: '14px',
                      height: '14px',
                      borderRadius: '50%',
                      background: isCurrent ? 'var(--accent-primary)' : 'var(--bg-secondary)',
                      border: '2px solid var(--accent-primary)',
                      boxShadow: isCurrent ? '0 0 10px rgba(255, 255, 255, 0.4)' : 'none',
                      zIndex: 3
                    }}
                  />

                  {/* Experience Card */}
                  <div
                    className="glass-card"
                    style={{
                      padding: '1.6rem 1.85rem',
                      border: isCurrent
                        ? '1px solid var(--border-card-hover)'
                        : '1px solid var(--border-card)'
                    }}
                  >
                    {/* Top Row: Role, Company, Period */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: '0.75rem',
                        marginBottom: '0.85rem'
                      }}
                    >
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                          <span
                            style={{
                              fontSize: '0.74rem',
                              fontFamily: 'var(--font-mono)',
                              padding: '0.2rem 0.6rem',
                              borderRadius: 'var(--radius-full)',
                              background: 'var(--tag-bg)',
                              border: '1px solid var(--tag-border)',
                              color: 'var(--text-secondary)',
                              fontWeight: 600
                            }}
                          >
                            {item.badge}
                          </span>
                          <span
                            style={{
                              fontSize: '0.74rem',
                              fontFamily: 'var(--font-mono)',
                              color: 'var(--text-dim)'
                            }}
                          >
                            • {item.type}
                          </span>
                        </div>

                        <h3
                          style={{
                            fontSize: '1.25rem',
                            fontWeight: 700,
                            color: 'var(--text-main)',
                            lineHeight: 1.2
                          }}
                        >
                          {item.role}
                        </h3>

                        <div
                          style={{
                            fontSize: '0.94rem',
                            fontWeight: 600,
                            color: 'var(--text-secondary)',
                            marginTop: '0.2rem'
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
                          fontSize: '0.8rem',
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

                    {/* Bullet Points */}
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.45rem',
                        marginBottom: '1.25rem'
                      }}
                    >
                      {item.bullets.map((bullet, bIdx) => (
                        <div
                          key={bIdx}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.55rem',
                            fontSize: '0.88rem',
                            color: 'var(--text-muted)',
                            lineHeight: 1.6
                          }}
                        >
                          <CheckCircle2
                            size={14}
                            color="var(--text-main)"
                            style={{ flexShrink: 0, marginTop: '0.25rem' }}
                          />
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
                          gap: '0.35rem',
                          paddingTop: '0.75rem',
                          borderTop: '1px solid var(--border-subtle)'
                        }}
                      >
                        {item.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            style={{
                              fontSize: '0.74rem',
                              fontFamily: 'var(--font-mono)',
                              padding: '0.18rem 0.55rem',
                              borderRadius: 'var(--radius-xs)',
                              background: 'var(--tag-bg)',
                              border: '1px solid var(--border-subtle)',
                              color: 'var(--text-secondary)'
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
