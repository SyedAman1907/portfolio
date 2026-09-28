import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, Calendar, CheckCircle2, Building2 } from 'lucide-react';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span>// 03. CAREER TIMELINE</span>
          </div>
          <h2 className="section-title">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            Industry engineering, AI dataset quality control, and developer community leadership.
          </p>
        </div>

        {/* Compact Responsive Timeline Container */}
        <div
          style={{
            position: 'relative',
            maxWidth: '820px',
            margin: '0 auto',
            paddingLeft: '28px'
          }}
          className="timeline-container"
        >
          <style>{`
            @media (max-width: 640px) {
              .timeline-container {
                padding-left: 22px !important;
              }
              .timeline-node-dot {
                left: -22px !important;
                width: 14px !important;
                height: 14px !important;
              }
            }
          `}</style>

          {/* Vertical Glowing Track Line */}
          <div
            style={{
              position: 'absolute',
              top: '12px',
              bottom: '12px',
              left: '9px',
              width: '2px',
              background: 'linear-gradient(180deg, var(--highlight-green) 0%, rgba(16, 185, 129, 0.2) 100%)',
              boxShadow: '0 0 8px rgba(52, 211, 153, 0.4)'
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.35rem' }}>
            {experience.map((item, index) => {
              const isCurrentlyWorking = item.status === 'Currently Working' || item.isCurrent;
              const isCompleted = item.status === 'Completed' || item.type === 'Completed';

              return (
                <div
                  key={index}
                  style={{
                    position: 'relative'
                  }}
                >
                  {/* Glowing Node Dot on Timeline */}
                  <div
                    className="timeline-node-dot"
                    style={{
                      position: 'absolute',
                      top: '18px',
                      left: '-28px',
                      width: '16px',
                      height: '16px',
                      borderRadius: '50%',
                      background: '#030806',
                      border: isCurrentlyWorking
                        ? '3px solid var(--highlight-green)'
                        : '2px solid rgba(52, 211, 153, 0.6)',
                      boxShadow: isCurrentlyWorking
                        ? '0 0 14px var(--highlight-green)'
                        : '0 0 6px rgba(52, 211, 153, 0.3)',
                      zIndex: 3
                    }}
                  />

                  {/* Compact Experience Card */}
                  <div
                    className="glass-card"
                    style={{
                      padding: '1.35rem 1.5rem',
                      border: isCurrentlyWorking
                        ? '1px solid rgba(52, 211, 153, 0.3)'
                        : '1px solid var(--border-glass)'
                    }}
                  >
                    {/* Header Row */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: '0.45rem',
                        marginBottom: '0.55rem'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff' }}>
                          {item.role}
                        </h3>
                        <span style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>@</span>
                        <div
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.35rem',
                            color: 'var(--highlight-green)',
                            fontWeight: 600,
                            fontSize: '0.98rem'
                          }}
                        >
                          <Building2 size={15} />
                          <span>{item.company}</span>
                        </div>
                      </div>

                      {/* Status Tag */}
                      {isCurrentlyWorking ? (
                        <div
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.4rem',
                            padding: '0.22rem 0.72rem',
                            borderRadius: 'var(--radius-full)',
                            background: 'rgba(16, 185, 129, 0.16)',
                            border: '1px solid var(--highlight-green)',
                            fontSize: '0.76rem',
                            fontFamily: 'var(--font-mono)',
                            color: 'var(--highlight-green)',
                            fontWeight: 700,
                            letterSpacing: '0.03em'
                          }}
                        >
                          <span
                            style={{
                              width: '6px',
                              height: '6px',
                              borderRadius: '50%',
                              backgroundColor: 'var(--highlight-green)',
                              boxShadow: '0 0 5px var(--highlight-green)'
                            }}
                          />
                          <span>Currently Working</span>
                        </div>
                      ) : (
                        <span
                          style={{
                            fontSize: '0.76rem',
                            fontFamily: 'var(--font-mono)',
                            color: isCompleted ? 'var(--highlight-green)' : 'var(--text-dim)',
                            background: isCompleted ? 'rgba(16, 185, 129, 0.1)' : 'transparent',
                            border: isCompleted ? '1px solid rgba(52, 211, 153, 0.25)' : 'none',
                            padding: isCompleted ? '0.18rem 0.65rem' : '0',
                            borderRadius: 'var(--radius-full)',
                            fontWeight: 600
                          }}
                        >
                          {isCompleted ? 'Completed' : item.type}
                        </span>
                      )}
                    </div>

                    {/* Timeline Date & Duration */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        fontSize: '0.82rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--text-dim)',
                        marginBottom: '0.85rem'
                      }}
                    >
                      <Calendar size={13} color="var(--highlight-green)" />
                      <span>{item.period}</span>
                      {item.duration && (
                        <>
                          <span>•</span>
                          <span style={{ color: 'var(--highlight-green)', fontWeight: 600 }}>{item.duration}</span>
                        </>
                      )}
                    </div>

                    {/* Bullets with larger typography */}
                    <ul
                      style={{
                        listStyle: 'none',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.45rem',
                        marginBottom: '0.95rem'
                      }}
                    >
                      {item.bullets.map((b, bIdx) => (
                        <li
                          key={bIdx}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.5rem',
                            fontSize: '0.94rem',
                            lineHeight: 1.6,
                            color: 'var(--text-muted)'
                          }}
                        >
                          <CheckCircle2
                            size={16}
                            color="var(--highlight-green)"
                            style={{ flexShrink: 0, marginTop: '3px' }}
                          />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Badges */}
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.4rem',
                        paddingTop: '0.65rem',
                        borderTop: '1px solid rgba(255, 255, 255, 0.05)'
                      }}
                    >
                      {item.skills.map((skill, sIdx) => (
                        <span key={sIdx} className="badge badge-dark" style={{ fontSize: '0.78rem', padding: '0.2rem 0.65rem' }}>
                          {skill}
                        </span>
                      ))}
                    </div>
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
