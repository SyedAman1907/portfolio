import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, CheckCircle2, Trophy, Star } from 'lucide-react';

export default function Education() {
  const { education, achievements } = portfolioData;

  return (
    <section id="education" className="section">
      <div className="container">
        {/* Education Sub-section */}
        <div>
          <div className="section-header">
            <div className="section-tag">
              <span>// 05. ACADEMICS & RECOGNITION</span>
            </div>
            <h2 className="section-title">
              Education & <span className="monochrome-gradient">History</span>
            </h2>
            <p className="section-subtitle">
              Formal academic foundation in Computer Science and Engineering at Rajeev Gandhi Memorial College of Engineering and Technology.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 330px), 1fr))',
              gap: '1.25rem',
              marginBottom: '4.5rem'
            }}
          >
            {education.map((item, index) => {
              const isCurrent = item.isCurrent;
              return (
                <div
                  key={index}
                  className="glass-card"
                  style={{
                    padding: '1.6rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    border: isCurrent
                      ? '1px solid var(--border-card-hover)'
                      : '1px solid var(--border-card)'
                  }}
                >
                  <div>
                    {/* Top Row: Period & Grade */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '0.75rem'
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          fontSize: '0.78rem',
                          fontFamily: 'var(--font-mono)',
                          color: 'var(--text-dim)'
                        }}
                      >
                        <Calendar size={13} />
                        <span>{item.period}</span>
                      </div>

                      <div
                        style={{
                          padding: '0.2rem 0.65rem',
                          borderRadius: 'var(--radius-full)',
                          background: isCurrent ? 'var(--accent-primary)' : 'var(--tag-bg)',
                          color: isCurrent ? 'var(--accent-contrast)' : 'var(--text-main)',
                          fontSize: '0.78rem',
                          fontFamily: 'var(--font-mono)',
                          fontWeight: 700,
                          border: '1px solid var(--border-card)'
                        }}
                      >
                        {item.grade}
                      </div>
                    </div>

                    {/* Degree */}
                    <h3
                      style={{
                        fontSize: '1.15rem',
                        fontWeight: 700,
                        color: 'var(--text-main)',
                        marginBottom: '0.3rem',
                        lineHeight: 1.3
                      }}
                    >
                      {item.degree}
                    </h3>

                    {/* Institution */}
                    <div
                      style={{
                        fontSize: '0.88rem',
                        fontWeight: 600,
                        color: 'var(--text-secondary)',
                        marginBottom: '0.55rem'
                      }}
                    >
                      {item.institution}
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        fontSize: '0.78rem',
                        color: 'var(--text-dim)',
                        marginBottom: '0.95rem'
                      }}
                    >
                      <MapPin size={12} />
                      <span>{item.location}</span>
                    </div>

                    {/* Details */}
                    <p
                      style={{
                        fontSize: '0.85rem',
                        color: 'var(--text-muted)',
                        lineHeight: 1.6,
                        marginBottom: '1rem'
                      }}
                    >
                      {item.details}
                    </p>
                  </div>

                  {/* Coursework / Topics */}
                  {item.coursework && (
                    <div
                      style={{
                        paddingTop: '0.75rem',
                        borderTop: '1px solid var(--border-subtle)',
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.35rem'
                      }}
                    >
                      {item.coursework.map((c, cIdx) => (
                        <span
                          key={cIdx}
                          style={{
                            fontSize: '0.72rem',
                            fontFamily: 'var(--font-mono)',
                            padding: '0.15rem 0.5rem',
                            borderRadius: 'var(--radius-xs)',
                            background: 'var(--tag-bg)',
                            color: 'var(--text-dim)'
                          }}
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Separate Achievements Section */}
        <div id="achievements">
          <div className="section-header">
            <div className="section-tag">
              <span>// HONORS & MILESTONES</span>
            </div>
            <h3 className="section-title">
              Key <span className="monochrome-gradient">Achievements</span>
            </h3>
            <p className="section-subtitle">
              Verified recognitions in technical symposiums, competitive leaderboards, and developer ambassadorships.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
              gap: '1.25rem'
            }}
          >
            {achievements.map((item, index) => (
              <div
                key={index}
                className="glass-card"
                style={{
                  padding: '1.6rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  border: '1px solid var(--border-card)'
                }}
              >
                <div>
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
                        gap: '0.4rem',
                        padding: '0.22rem 0.65rem',
                        borderRadius: 'var(--radius-full)',
                        background: 'var(--tag-bg)',
                        border: '1px solid var(--tag-border)',
                        fontSize: '0.78rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--text-main)',
                        fontWeight: 700
                      }}
                    >
                      <Trophy size={13} />
                      <span>{item.badge}</span>
                    </span>

                    <span
                      style={{
                        fontSize: '0.78rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--text-dim)'
                      }}
                    >
                      {item.date}
                    </span>
                  </div>

                  <h4
                    style={{
                      fontSize: '1.15rem',
                      fontWeight: 700,
                      color: 'var(--text-main)',
                      lineHeight: 1.3,
                      marginBottom: '0.35rem'
                    }}
                  >
                    {item.title}
                  </h4>

                  <div
                    style={{
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      color: 'var(--text-secondary)',
                      marginBottom: '0.75rem'
                    }}
                  >
                    {item.organization}
                  </div>

                  <p
                    style={{
                      fontSize: '0.86rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.6
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
