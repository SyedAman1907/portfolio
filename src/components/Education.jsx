import React from 'react';
import { portfolioData } from '../data/portfolioData';
import ScrambleText from './ScrambleText';
import { GraduationCap, Calendar, MapPin, Trophy, Award, CheckCircle2 } from 'lucide-react';

export default function Education() {
  const { education, achievements } = portfolioData;

  return (
    <section id="education" className="section" style={{ borderTop: 'var(--border-width) solid var(--border-color)' }}>
      <div className="container">
        {/* Education Sub-section */}
        <div>
          <div className="section-header">
            <div className="section-tag-box">
              <span>// 05. ACADEMIC CREDENTIALS</span>
            </div>
            <h2 className="section-title">
              <ScrambleText text="EDUCATION & ACHIEVEMENTS" />
            </h2>
            <p className="section-subtitle">
              Formal academic foundation at Rajeev Gandhi Memorial College of Engineering and Technology alongside competitive hackathon achievements.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 330px), 1fr))',
              gap: '1.5rem',
              marginBottom: '5rem'
            }}
          >
            {education.map((item, index) => {
              const isCurrent = item.isCurrent;
              return (
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
                    {/* Top Row: Period & Grade */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '0.85rem'
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          fontSize: '0.8rem',
                          fontFamily: 'var(--font-mono)',
                          fontWeight: 700,
                          color: 'var(--text-dim)'
                        }}
                      >
                        <Calendar size={13} />
                        <span>{item.period}</span>
                      </div>

                      <div
                        style={{
                          padding: '0.22rem 0.75rem',
                          background: isCurrent ? 'var(--accent-lime)' : 'var(--bg-surface)',
                          color: isCurrent ? '#000000' : 'var(--text-primary)',
                          border: '2px solid var(--border-color)',
                          boxShadow: '2px 2px 0px var(--shadow-color)',
                          fontSize: '0.82rem',
                          fontFamily: 'var(--font-mono)',
                          fontWeight: 900
                        }}
                      >
                        {item.grade}
                      </div>
                    </div>

                    {/* Degree */}
                    <h3
                      style={{
                        fontSize: '1.3rem',
                        fontWeight: 900,
                        textTransform: 'uppercase',
                        color: 'var(--text-primary)',
                        marginBottom: '0.35rem',
                        lineHeight: 1.2
                      }}
                    >
                      {item.degree}
                    </h3>

                    {/* Institution */}
                    <div
                      style={{
                        fontSize: '0.94rem',
                        fontWeight: 700,
                        color: 'var(--text-secondary)',
                        marginBottom: '0.65rem'
                      }}
                    >
                      {item.institution}
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        fontSize: '0.8rem',
                        color: 'var(--text-dim)',
                        marginBottom: '1rem',
                        fontFamily: 'var(--font-mono)'
                      }}
                    >
                      <MapPin size={13} />
                      <span>{item.location}</span>
                    </div>

                    {/* Details */}
                    <p
                      style={{
                        fontSize: '0.88rem',
                        color: 'var(--text-muted)',
                        lineHeight: 1.6,
                        marginBottom: '1.25rem'
                      }}
                    >
                      {item.details}
                    </p>
                  </div>

                  {/* Coursework Tags */}
                  {item.coursework && (
                    <div
                      style={{
                        paddingTop: '0.85rem',
                        borderTop: '2px solid var(--border-color)',
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.35rem'
                      }}
                    >
                      {item.coursework.map((c, cIdx) => (
                        <span
                          key={cIdx}
                          style={{
                            fontSize: '0.74rem',
                            fontFamily: 'var(--font-mono)',
                            padding: '0.15rem 0.55rem',
                            border: '1.5px solid var(--border-color)',
                            background: 'var(--bg-surface)',
                            fontWeight: 600
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

        {/* Separate Achievements Showcase */}
        <div>
          <div className="section-header">
            <div className="section-tag-box">
              <span>// RECOGNITION & HONORS</span>
            </div>
            <h3 className="section-title">
              <ScrambleText text="KEY ACHIEVEMENTS" />
            </h3>
            <p className="section-subtitle">
              Verified competitive standings, leaderboard performance, and event coordination awards.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 330px), 1fr))',
              gap: '1.5rem'
            }}
          >
            {achievements.map((item, index) => (
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
                        gap: '0.45rem',
                        padding: '0.25rem 0.75rem',
                        background: 'var(--accent-lime)',
                        color: '#000000',
                        border: '2px solid var(--border-color)',
                        boxShadow: '2.5px 2.5px 0px var(--shadow-color)',
                        fontSize: '0.82rem',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 900
                      }}
                    >
                      <Trophy size={14} />
                      <span>{item.badge}</span>
                    </span>

                    <span
                      style={{
                        fontSize: '0.78rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--text-dim)',
                        fontWeight: 700
                      }}
                    >
                      {item.date}
                    </span>
                  </div>

                  <h4
                    style={{
                      fontSize: '1.3rem',
                      fontWeight: 900,
                      textTransform: 'uppercase',
                      color: 'var(--text-primary)',
                      lineHeight: 1.25,
                      marginBottom: '0.4rem'
                    }}
                  >
                    {item.title}
                  </h4>

                  <div
                    style={{
                      fontSize: '0.92rem',
                      fontWeight: 700,
                      color: 'var(--text-secondary)',
                      marginBottom: '0.85rem'
                    }}
                  >
                    {item.organization}
                  </div>

                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.65
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
