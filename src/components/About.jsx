import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  GraduationCap,
  Code2,
  Users,
  Compass,
  CheckCircle2,
  MapPin,
  Sparkles,
  BookOpen
} from 'lucide-react';

export default function About() {
  const { personal, about, education } = portfolioData;
  const [imageError, setImageError] = useState(false);

  const currentEducation = education[0];

  return (
    <section id="about" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span>// 01. PROFILE & JOURNEY</span>
          </div>
          <h2 className="section-title">
            About <span className="monochrome-gradient">Me</span>
          </h2>
          <p className="section-subtitle">
            Computer Science undergraduate, web developer, and student leader dedicated to building intuitive digital products and solving practical engineering problems.
          </p>
        </div>

        {/* Main Grid: Narrative & Highlights */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2rem',
            alignItems: 'start'
          }}
          className="about-grid"
        >
          <style>{`
            @media (min-width: 992px) {
              .about-grid {
                grid-template-columns: 0.9fr 1.1fr !important;
                gap: 2.75rem !important;
              }
            }
          `}</style>

          {/* Left Column: Academic Card & Highlights */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* Visual Portrait / Card */}
            <div
              className="glass-card"
              style={{
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem'
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '240px',
                  borderRadius: 'var(--radius-sm)',
                  overflow: 'hidden',
                  background: 'var(--bg-panel)',
                  border: '1px solid var(--border-subtle)',
                  position: 'relative'
                }}
              >
                {!imageError ? (
                  <img
                    src={personal.aboutImage}
                    alt={personal.name}
                    onError={() => setImageError(true)}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center top'
                    }}
                  />
                ) : (
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      color: 'var(--text-muted)'
                    }}
                  >
                    <Code2 size={40} color="var(--text-main)" />
                    <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.1rem' }}>
                      {personal.name}
                    </span>
                    <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>
                      Web Developer & Tech Enthusiast
                    </span>
                  </div>
                )}
              </div>

              {/* Verified College Details */}
              <div
                className="glass-panel"
                style={{
                  padding: '1.15rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.65rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <GraduationCap size={18} color="var(--text-main)" />
                  <span style={{ fontWeight: 700, fontSize: '0.96rem', color: 'var(--text-main)' }}>
                    Academic Background
                  </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                    {currentEducation.degree}
                  </span>
                  <span style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>
                    {currentEducation.institution} ({currentEducation.period})
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '0.25rem' }}>
                    <span
                      style={{
                        fontSize: '0.78rem',
                        fontFamily: 'var(--font-mono)',
                        padding: '0.15rem 0.55rem',
                        borderRadius: 'var(--radius-full)',
                        background: 'var(--tag-bg)',
                        border: '1px solid var(--tag-border)',
                        color: 'var(--text-main)'
                      }}
                    >
                      {currentEducation.grade}
                    </span>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <MapPin size={12} />
                      {currentEducation.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Core Attributes Checklist */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                {about.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.55rem',
                      fontSize: '0.88rem',
                      color: 'var(--text-secondary)'
                    }}
                  >
                    <CheckCircle2 size={15} color="var(--text-main)" style={{ flexShrink: 0 }} />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Narrative & Core Focus Areas */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div
              className="glass-card"
              style={{
                padding: '1.85rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.15rem'
              }}
            >
              <h3
                style={{
                  fontSize: '1.45rem',
                  fontWeight: 700,
                  color: 'var(--text-main)',
                  lineHeight: 1.3
                }}
              >
                {about.title}
              </h3>

              {about.paragraphs.map((para, index) => (
                <p
                  key={index}
                  style={{
                    fontSize: '0.98rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.75
                  }}
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Core Values / Focus Pillars Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
                gap: '1rem'
              }}
            >
              {about.coreValues.map((val, idx) => (
                <div
                  key={idx}
                  className="glass-card"
                  style={{
                    padding: '1.25rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.45rem'
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      fontWeight: 700,
                      fontSize: '0.95rem',
                      color: 'var(--text-main)'
                    }}
                  >
                    <Sparkles size={14} color="var(--text-main)" />
                    <span>{val.title}</span>
                  </div>
                  <p
                    style={{
                      fontSize: '0.85rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.55
                    }}
                  >
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
