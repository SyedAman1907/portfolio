import React from 'react';
import { portfolioData } from '../data/portfolioData';
import ScrambleText from './ScrambleText';
import {
  FileText,
  Download,
  Eye,
  CheckCircle2,
  ShieldCheck,
  Award
} from 'lucide-react';

export default function Resume() {
  const { personal } = portfolioData;

  return (
    <section id="resume" className="section" style={{ borderTop: 'var(--border-width) solid var(--border-color)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag-box">
            <span>// 07. CURRICULUM VITAE</span>
          </div>
          <h2 className="section-title">
            <ScrambleText text="OFFICIAL RESUME" />
          </h2>
          <p className="section-subtitle">
            Download or view my curriculum vitae detailing verified Computer Science coursework, project engineering, and student ambassadorship.
          </p>
        </div>

        {/* Neobrutalist Resume Card */}
        <div
          className="neobrutal-card"
          style={{
            maxWidth: '920px',
            margin: '0 auto',
            padding: '2.5rem',
            background: 'var(--bg-card)',
            border: 'var(--border-thick) solid var(--border-color)',
            boxShadow: 'var(--shadow-offset-lg)'
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '2.5rem',
              alignItems: 'center'
            }}
            className="resume-grid-brutal"
          >
            <style>{`
              @media (min-width: 768px) {
                .resume-grid-brutal {
                  grid-template-columns: 0.9fr 1.1fr !important;
                }
              }
            `}</style>

            {/* Left Preview Box */}
            <div
              style={{
                padding: '2rem',
                background: 'var(--bg-surface)',
                border: '2px solid var(--border-color)',
                boxShadow: '4px 4px 0px var(--shadow-color)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center'
              }}
            >
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  background: 'var(--accent-lime)',
                  color: '#000000',
                  border: '2px solid var(--border-color)',
                  boxShadow: '3px 3px 0px var(--shadow-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem'
                }}
              >
                <FileText size={30} />
              </div>

              <h3
                style={{
                  fontSize: '1.25rem',
                  color: 'var(--text-primary)',
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  marginBottom: '0.25rem'
                }}
              >
                Syed_Aman_Mirzanullah_Resume.pdf
              </h3>

              <div
                style={{
                  fontSize: '0.8rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-dim)',
                  fontWeight: 700,
                  marginBottom: '1.5rem'
                }}
              >
                VERIFIED STUDENT CV • 2026 EDITION
              </div>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.65rem',
                  width: '100%'
                }}
              >
                <a
                  href={personal.resumePdf}
                  download="Syed_Aman_Mirzanullah_Resume.pdf"
                  className="btn-brutal btn-brutal-lime btn-brutal-sm"
                  style={{ width: '100%' }}
                >
                  <Download size={15} />
                  <span>Download PDF</span>
                </a>

                <a
                  href={personal.resumePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-brutal btn-brutal-ghost btn-brutal-sm"
                  style={{ width: '100%' }}
                >
                  <Eye size={15} />
                  <span>View in Browser</span>
                </a>
              </div>
            </div>

            {/* Right Summary Highlights */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.35rem' }}>
              <div>
                <h4
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 900,
                    textTransform: 'uppercase',
                    color: 'var(--text-primary)',
                    marginBottom: '0.45rem'
                  }}
                >
                  Candidate Highlights
                </h4>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>
                  Consolidated record of Computer Science fundamentals at RGMCET, modern React.js web application architecture, Google Student Ambassador leadership, and verified MongoDB immersion standing.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                  <span style={{ color: 'var(--accent-lime)' }}>▶</span>
                  <span>B.Tech in Computer Science & Engineering (RGMCET)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                  <span style={{ color: 'var(--accent-lime)' }}>▶</span>
                  <span>Google Student Ambassador & Campus POC Leadership</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                  <span style={{ color: 'var(--accent-lime)' }}>▶</span>
                  <span>Frontend Engineering Internship (Zenrix Tech)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                  <span style={{ color: 'var(--accent-lime)' }}>▶</span>
                  <span>4th Place – MongoDB × ICT Academy Immersion Quiz</span>
                </div>
              </div>

              <div
                style={{
                  padding: '0.85rem 1.15rem',
                  background: 'var(--bg-surface)',
                  border: '2px solid var(--border-color)',
                  boxShadow: '2.5px 2.5px 0px var(--shadow-color)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  fontSize: '0.82rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-dim)',
                  fontWeight: 700
                }}
              >
                <ShieldCheck size={16} color="var(--accent-lime)" />
                <span>Verified academic transcript & credentials available upon request.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
