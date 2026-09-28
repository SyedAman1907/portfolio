import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  Code2,
  CheckCircle2,
  MapPin,
  GraduationCap
} from 'lucide-react';

export default function About() {
  const { personal, about } = portfolioData;
  const [imageError, setImageError] = useState(false);

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span>// 01. PROFILE & BACKGROUND</span>
          </div>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">
            Engineering software at the intersection of robust backend infrastructure, modern web interfaces, and applied AI systems.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '1.75rem',
            alignItems: 'center'
          }}
          className="about-grid"
        >
          <style>{`
            @media (min-width: 992px) {
              .about-grid {
                grid-template-columns: 0.85fr 1.15fr !important;
                gap: 2.5rem !important;
              }
            }
          `}</style>

          {/* Left Column: Image Card & Key Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div
              className="glass-card"
              style={{
                padding: '1.15rem',
                position: 'relative'
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '280px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  position: 'relative',
                  backgroundColor: '#051009'
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
                      padding: '1.25rem',
                      background: 'radial-gradient(circle at 50% 50%, #092115 0%, #030806 90%)',
                      color: 'var(--highlight-green)',
                      textAlign: 'center'
                    }}
                  >
                    <Code2 size={46} />
                    <span style={{ marginTop: '0.5rem', fontWeight: 700, color: '#fff', fontSize: '1.05rem' }}>
                      Syed Aman Mirzanullah
                    </span>
                    <span style={{ fontSize: '0.82rem', color: 'var(--highlight-green)', marginTop: '0.2rem' }}>
                      Computer Science Undergrad @ RGM
                    </span>
                  </div>
                )}

                {/* Overlaid Tag */}
                <div
                  style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    background: 'rgba(3, 8, 6, 0.85)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(52, 211, 153, 0.3)',
                    padding: '0.28rem 0.7rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.76rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--highlight-green)'
                  }}
                >
                  CGPA: 8.4 / 10
                </div>
              </div>

              {/* Detail Items */}
              <div
                style={{
                  marginTop: '0.95rem',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 150px), 1fr))',
                  gap: '0.65rem'
                }}
              >
                <div
                  className="glass-panel"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    padding: '0.65rem 0.85rem'
                  }}
                >
                  <MapPin size={18} color="var(--highlight-green)" />
                  <div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>
                      Location
                    </div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#f8fafc' }}>
                      Kurnool, AP
                    </div>
                  </div>
                </div>

                <div
                  className="glass-panel"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    padding: '0.65rem 0.85rem'
                  }}
                >
                  <GraduationCap size={18} color="var(--highlight-green)" />
                  <div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>
                      Degree
                    </div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#f8fafc' }}>
                      B.Tech CSE (2024–28)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative, Key Tech & Highlights */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <h3
                style={{
                  fontSize: '1.55rem',
                  fontWeight: 700,
                  marginBottom: '0.75rem',
                  color: '#ffffff'
                }}
              >
                {about.title}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {about.paragraphs.map((p, i) => (
                  <p key={i} style={{ fontSize: '0.98rem', lineHeight: 1.7 }}>
                    {p}
                  </p>
                ))}
              </div>
            </div>

            {/* Core Competencies Matrix */}
            <div>
              <div
                style={{
                  fontSize: '0.78rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--highlight-green)',
                  marginBottom: '0.6rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
              >
                Key Focus Areas:
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 190px), 1fr))',
                  gap: '0.55rem'
                }}
              >
                {about.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="glass-panel"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.55rem',
                      padding: '0.55rem 0.85rem'
                    }}
                  >
                    <CheckCircle2 size={16} color="var(--highlight-green)" />
                    <span style={{ fontSize: '0.88rem', fontWeight: 500, color: '#f1f5f9' }}>
                      {h}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Metrics Cards */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '0.75rem',
                marginTop: '0.45rem'
              }}
              className="about-stats-grid"
            >
              <style>{`
                @media (max-width: 640px) {
                  .about-stats-grid {
                    grid-template-columns: repeat(2, 1fr) !important;
                    gap: 0.6rem !important;
                  }
                }
              `}</style>
              {personal.stats.map((stat, i) => (
                <div
                  key={i}
                  className="glass-card"
                  style={{
                    padding: '0.85rem 0.65rem',
                    textAlign: 'center'
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.6rem',
                      fontWeight: 800,
                      color: 'var(--highlight-green)',
                      lineHeight: 1.1,
                      marginBottom: '0.2rem'
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      color: '#ffffff',
                      marginBottom: '0.15rem'
                    }}
                  >
                    {stat.label}
                  </div>
                  <div style={{ fontSize: '0.68rem', color: 'var(--text-dim)', lineHeight: 1.3 }}>
                    {stat.subtext}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
