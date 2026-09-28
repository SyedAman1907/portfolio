import React from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  FileText,
  Download,
  Eye,
  CheckCircle2,
  ShieldCheck
} from 'lucide-react';

export default function Resume() {
  const { personal } = portfolioData;

  return (
    <section id="resume" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span>// 07. CURRICULUM VITAE</span>
          </div>
          <h2 className="section-title">
            Official <span className="gradient-text">Resume</span>
          </h2>
          <p className="section-subtitle">
            Comprehensive overview of my software engineering capabilities, internship experience, and technical achievements.
          </p>
        </div>

        {/* Compact Resume Glass Card */}
        <div
          className="glass-card"
          style={{
            maxWidth: '860px',
            margin: '0 auto',
            padding: '1.6rem 1.85rem',
            position: 'relative'
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '1.75rem',
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
                padding: '1.35rem',
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
                  borderRadius: '14px',
                  background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.25) 0%, rgba(4, 20, 12, 0.8) 100%)',
                  border: '1px solid rgba(52, 211, 153, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--highlight-green)',
                  marginBottom: '0.95rem',
                  boxShadow: '0 0 16px rgba(16, 185, 129, 0.2)'
                }}
              >
                <FileText size={28} />
              </div>

              <h4 style={{ fontSize: '1.15rem', color: '#ffffff', fontWeight: 700, marginBottom: '0.25rem' }}>
                Syed_Aman_Mirzanullah_Resume.pdf
              </h4>

              <div
                style={{
                  fontSize: '0.78rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--highlight-green)',
                  marginBottom: '0.75rem'
                }}
              >
                Official 2026 Edition • Verified PDF
              </div>

              <div
                style={{
                  fontSize: '0.76rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-dim)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  marginBottom: '1.1rem'
                }}
              >
                <ShieldCheck size={14} color="var(--highlight-green)" />
                <span>Format: PDF / 134 KB</span>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', width: '100%' }}>
                <a
                  href={personal.resumePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                  style={{ width: '100%' }}
                >
                  <Eye size={15} />
                  <span>View Resume</span>
                </a>

                <a
                  href={personal.resumePdf}
                  download="Syed_Aman_Mirzanullah_Resume.pdf"
                  className="btn btn-glass btn-sm"
                  style={{ width: '100%' }}
                >
                  <Download size={15} color="var(--highlight-green)" />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>

            {/* Right Summary Highlights */}
            <div>
              <div
                style={{
                  fontSize: '0.76rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--highlight-green)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '0.45rem'
                }}
              >
                Snapshot of Qualifications
              </div>

              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.95rem' }}>
                Engineering Profile Highlights
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem' }}>
                  <CheckCircle2 size={16} color="var(--highlight-green)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <div style={{ fontSize: '0.92rem', lineHeight: 1.55 }}>
                    <span style={{ color: '#ffffff', fontWeight: 600 }}>Formal Education:</span>{' '}
                    <span style={{ color: 'var(--text-muted)' }}>B.Tech in CSE (8.4 CGPA) at RGM College.</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem' }}>
                  <CheckCircle2 size={16} color="var(--highlight-green)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <div style={{ fontSize: '0.92rem', lineHeight: 1.55 }}>
                    <span style={{ color: '#ffffff', fontWeight: 600 }}>Applied AI Experience:</span>{' '}
                    <span style={{ color: 'var(--text-muted)' }}>Tregio.ai Data Annotation Intern & AI tools using NLP/TF-IDF.</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem' }}>
                  <CheckCircle2 size={16} color="var(--highlight-green)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <div style={{ fontSize: '0.92rem', lineHeight: 1.55 }}>
                    <span style={{ color: '#ffffff', fontWeight: 600 }}>Full Stack Systems:</span>{' '}
                    <span style={{ color: 'var(--text-muted)' }}>React, TypeScript, Node.js, Express, FastAPI, Python, MongoDB, Firebase, Supabase.</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem' }}>
                  <CheckCircle2 size={16} color="var(--highlight-green)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <div style={{ fontSize: '0.92rem', lineHeight: 1.55 }}>
                    <span style={{ color: '#ffffff', fontWeight: 600 }}>Community Engagement:</span>{' '}
                    <span style={{ color: 'var(--text-muted)' }}>Google Student Ambassador (Completed) & CISC Club coordinator.</span>
                  </div>
                </div>
              </div>

              {/* Recruiter Note */}
              <div
                style={{
                  marginTop: '1.15rem',
                  padding: '0.75rem 0.95rem',
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(16, 185, 129, 0.08)',
                  border: '1px solid rgba(52, 211, 153, 0.2)',
                  fontSize: '0.85rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.55
                }}
              >
                <span style={{ color: 'var(--highlight-green)', fontWeight: 600 }}>Note for Recruiters:</span> Available for Software Engineering, Full-Stack, and AI Developer opportunities for 2026.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
