import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import ScrambleText from './ScrambleText';
import {
  GraduationCap,
  Code2,
  Users,
  CheckCircle2,
  MapPin,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function About() {
  const { personal, about, education } = portfolioData;
  const [imageError, setImageError] = useState(false);
  const currentEducation = education[0];

  return (
    <section id="about" className="section" style={{ borderTop: 'var(--border-width) solid var(--border-color)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag-box">
            <span>// 01. PROFILE & VISION</span>
          </div>
          <h2 className="section-title">
            <ScrambleText text="ABOUT ME" />
          </h2>
          <p className="section-subtitle">
            Engineering digital experiences with clean frontend architecture, practical systems thinking, and active student community leadership.
          </p>
        </div>

        {/* Asymmetrical Neobrutalist Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem',
            alignItems: 'start'
          }}
          className="about-layout-grid"
        >
          <style>{`
            @media (min-width: 992px) {
              .about-layout-grid {
                grid-template-columns: 0.9fr 1.1fr !important;
                gap: 3.25rem !important;
              }
            }
          `}</style>

          {/* Left Column: Academic Profile Box & Checkpoints */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div
              className="neobrutal-card"
              style={{
                padding: '1.75rem',
                background: 'var(--bg-card)'
              }}
            >
              {/* Photo Box with Hard Shadow */}
              <div
                style={{
                  width: '100%',
                  height: '260px',
                  border: '2px solid var(--border-color)',
                  boxShadow: '4px 4px 0px var(--shadow-color)',
                  overflow: 'hidden',
                  background: 'var(--bg-secondary)',
                  position: 'relative',
                  marginBottom: '1.5rem'
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
                      background: 'var(--bg-surface)'
                    }}
                  >
                    <Code2 size={44} />
                    <span style={{ fontWeight: 800, fontFamily: 'var(--font-heading)' }}>
                      {personal.name}
                    </span>
                  </div>
                )}
              </div>

              {/* Verified Degree Box */}
              <div
                style={{
                  padding: '1.25rem',
                  background: 'var(--bg-surface)',
                  border: '2px solid var(--border-color)',
                  boxShadow: '3px 3px 0px var(--shadow-color)',
                  marginBottom: '1.25rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.35rem' }}>
                  <GraduationCap size={18} />
                  <span style={{ fontWeight: 800, fontSize: '0.98rem' }}>
                    {currentEducation.degree}
                  </span>
                </div>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', marginBottom: '0.45rem' }}>
                  {currentEducation.institution} ({currentEducation.period})
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <span
                    style={{
                      fontSize: '0.78rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 800,
                      background: 'var(--accent-lime)',
                      color: '#000000',
                      border: '1.5px solid var(--border-color)',
                      padding: '0.15rem 0.55rem'
                    }}
                  >
                    {currentEducation.grade}
                  </span>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                    <MapPin size={12} />
                    {currentEducation.location}
                  </span>
                </div>
              </div>

              {/* Highlights Checklist */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {about.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      color: 'var(--text-secondary)'
                    }}
                  >
                    <div
                      style={{
                        width: '18px',
                        height: '18px',
                        background: 'var(--accent-lime)',
                        border: '1.5px solid var(--border-color)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#000000',
                        flexShrink: 0
                      }}
                    >
                      ✓
                    </div>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Focus Pillars */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            <div
              className="neobrutal-card"
              style={{
                padding: '2.25rem',
                background: 'var(--bg-card)'
              }}
            >
              <h3
                style={{
                  fontSize: '1.65rem',
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  lineHeight: 1.25,
                  marginBottom: '1.25rem',
                  letterSpacing: '-0.02em'
                }}
              >
                {about.title}
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {about.paragraphs.map((para, index) => (
                  <p
                    key={index}
                    style={{
                      fontSize: '1.02rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.75
                    }}
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* Core Pillars */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
                gap: '1.15rem'
              }}
            >
              {about.coreValues.map((val, idx) => (
                <div
                  key={idx}
                  className="neobrutal-card"
                  style={{
                    padding: '1.35rem',
                    background: 'var(--bg-surface)'
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      fontWeight: 800,
                      fontSize: '1rem',
                      textTransform: 'uppercase',
                      marginBottom: '0.45rem',
                      letterSpacing: '-0.01em'
                    }}
                  >
                    <span style={{ color: 'var(--accent-lime)' }}>■</span>
                    <span>{val.title}</span>
                  </div>
                  <p
                    style={{
                      fontSize: '0.88rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.6
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
