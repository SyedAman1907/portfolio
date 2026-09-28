import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span>// 04. ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="section-title">
            Education <span className="gradient-text">History</span>
          </h2>
          <p className="section-subtitle">
            Rigorous foundations in computer science algorithms, mathematical analysis, and systems engineering.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1rem'
          }}
        >
          {education.map((item, index) => {
            const isFeatured = index === 0;
            return (
              <div
                key={index}
                className="glass-card"
                style={{
                  padding: '1.25rem 1.35rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  border: isFeatured ? '1px solid rgba(52, 211, 153, 0.35)' : '1px solid var(--border-glass)'
                }}
              >
                <div>
                  {/* Top Bar: Timeline & Grade */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '0.65rem'
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        fontSize: '0.74rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--highlight-green)'
                      }}
                    >
                      <Calendar size={12} />
                      <span>{item.period}</span>
                    </div>

                    <div
                      style={{
                        padding: '0.18rem 0.55rem',
                        borderRadius: 'var(--radius-full)',
                        background: 'rgba(16, 185, 129, 0.12)',
                        border: '1px solid rgba(52, 211, 153, 0.25)',
                        fontSize: '0.74rem',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 700,
                        color: '#ffffff'
                      }}
                    >
                      {item.grade}
                    </div>
                  </div>

                  {/* Degree Name */}
                  <h3
                    style={{
                      fontSize: '1.05rem',
                      fontWeight: 700,
                      color: '#ffffff',
                      marginBottom: '0.25rem',
                      lineHeight: 1.3
                    }}
                  >
                    {item.degree}
                  </h3>

                  {/* Institution Name */}
                  <div
                    style={{
                      fontSize: '0.85rem',
                      color: 'var(--highlight-green)',
                      fontWeight: 500,
                      marginBottom: '0.45rem'
                    }}
                  >
                    {item.institution}
                  </div>

                  {/* Location */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontSize: '0.76rem',
                      color: 'var(--text-dim)',
                      marginBottom: '0.65rem'
                    }}
                  >
                    <MapPin size={11} />
                    <span>{item.location}</span>
                  </div>

                  {/* Details */}
                  <p style={{ fontSize: '0.84rem', lineHeight: 1.5, color: 'var(--text-muted)' }}>
                    {item.details}
                  </p>
                </div>

                {/* Card Footer Indicator */}
                <div
                  style={{
                    marginTop: '1rem',
                    paddingTop: '0.65rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.72rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-dim)'
                  }}
                >
                  <Award size={12} color="var(--highlight-green)" />
                  <span>Verified Academic Record</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
