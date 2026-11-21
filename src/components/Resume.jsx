import React from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  FileText,
  Download,
  Eye,
  CheckCircle2,
  ShieldCheck,
  Award,
  Sparkles
} from 'lucide-react';

export default function Resume() {
  const { personal } = portfolioData;

  return (
    <section id="resume" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span>// 07. CURRICULUM VITAE</span>
          </div>
          <h2 className="section-title">
            Official <span className="monochrome-gradient">Resume</span>
          </h2>
          <p className="section-subtitle">
            Download or view my complete curriculum vitae outlining academic achievements, technical projects, and student leadership experience.
          </p>
        </div>

        {/* Resume Glass Card */}
        <div
          className="glass-card"
          style={{
            maxWidth: '860px',
            margin: '0 auto',
            padding: '2rem 2.25rem',
            position: 'relative',
            border: '1px solid var(--border-card)'
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '2rem',
              alignItems: 'center'
            }}
            className="resume-grid"
          >
            <style>{`
              @media (min-width: 768px) {
                .resume-grid {
                  grid-template-columns: 0.9fr 1.1fr !important;
                }
              }
            `}</style>

            {/* Left Preview Box */}
            <div
              className="glass-panel"
              style={{
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center'
              }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'var(--accent-primary)',
                  color: 'var(--accent-contrast)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem',
                  boxShadow: 'var(--shadow-card)'
                }}
              >
                <FileText size={26} />
              </div>

              <h3
                style={{
                  fontSize: '1.15rem',
                  color: 'var(--text-main)',
                  fontWeight: 700,
                  marginBottom: '0.25rem'
                }}
              >
                Shaik_Musheera_Resume.pdf
              </h3>

              <div
                style={{
                  fontSize: '0.78rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-dim)',
                  marginBottom: '1.25rem'
                }}
              >
                Verified Student CV • 2026 Edition
              </div>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                  width: '100%'
                }}
              >
                <a
                  href={personal.resumePdf}
                  download="Shaik_Musheera_Resume.pdf"
                  className="btn btn-primary btn-sm"
                  style={{ width: '100%' }}
                >
                  <Download size={15} />
                  <span>Download Resume (PDF)</span>
                </a>

                <a
                  href={personal.resumePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm"
                  style={{ width: '100%' }}
                >
                  <Eye size={15} />
                  <span>View in Browser</span>
                </a>
              </div>
            </div>

            {/* Right Summary Highlights */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
              <div>
                <h4
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: 'var(--text-main)',
                    marginBottom: '0.4rem'
                  }}
                >
                  Candidate Highlights
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>
                  Detailed record of Computer Science fundamentals, modern web application development, student ambassador initiatives, and verified hackathon/quiz standings.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
                  <CheckCircle2 size={15} color="var(--text-main)" style={{ flexShrink: 0 }} />
                  <span>B.Tech in Computer Science & Engineering (RGMCET)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
                  <CheckCircle2 size={15} color="var(--text-main)" style={{ flexShrink: 0 }} />
                  <span>Google Student Ambassador & Campus POC Leadership</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
                  <CheckCircle2 size={15} color="var(--text-main)" style={{ flexShrink: 0 }} />
                  <span>Frontend Engineering Internship (Zenrix Tech)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
                  <CheckCircle2 size={15} color="var(--text-main)" style={{ flexShrink: 0 }} />
                  <span>4th Place – MongoDB × ICT Academy Immersion Quiz</span>
                </div>
              </div>

              <div
                style={{
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-sm)',
                  background: 'var(--tag-bg)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.55rem',
                  fontSize: '0.8rem',
                  color: 'var(--text-dim)'
                }}
              >
                <ShieldCheck size={16} color="var(--text-main)" />
                <span>Verified academic transcript & credentials available upon request.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
