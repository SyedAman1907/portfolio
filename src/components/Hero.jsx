import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import ScrambleText from './ScrambleText';
import {
  ArrowDown,
  ArrowRight,
  FileText,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  Terminal,
  Code2,
  ExternalLink,
  Award
} from 'lucide-react';

export default function Hero() {
  const { personal } = portfolioData;
  const [imageError, setImageError] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      style={{
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingTop: 'calc(var(--navbar-height) + 1.5rem)',
        paddingBottom: '2rem',
        position: 'relative',
        zIndex: 2,
        overflow: 'hidden'
      }}
    >
      {/* Decorative Geometric Grid Patterns in background */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage:
            'linear-gradient(var(--border-color) 1px, transparent 1px), linear-gradient(90deg, var(--border-color) 1px, transparent 1px)',
          backgroundSize: '70px 70px',
          opacity: 0.05,
          pointerEvents: 'none',
          zIndex: 0
        }}
        aria-hidden="true"
      />

      {/* Decorative corner Plus marks */}
      <div
        style={{
          position: 'absolute',
          top: '90px',
          right: '5%',
          fontSize: '1.5rem',
          fontFamily: 'var(--font-mono)',
          fontWeight: 900,
          color: 'var(--text-dim)',
          pointerEvents: 'none',
          userSelect: 'none'
        }}
      >
        + + +
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            alignItems: 'center',
            padding: '1.5rem 0'
          }}
          className="hero-neobrutal-grid"
        >
          <style>{`
            @media (min-width: 992px) {
              .hero-neobrutal-grid {
                grid-template-columns: 1.25fr 0.85fr !important;
                gap: 3.5rem !important;
              }
            }
          `}</style>

          {/* Left Hero Content: Massive Editorial Typography */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.35rem' }}>
            {/* Status Pill with Electric Lime */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  padding: '0.35rem 0.95rem',
                  background: 'var(--bg-surface)',
                  border: '2px solid var(--border-color)',
                  boxShadow: '3px 3px 0px var(--shadow-color)',
                  fontSize: '0.84rem',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 700,
                  color: 'var(--text-primary)'
                }}
              >
                <span className="status-pulse-lime" />
                <span>{personal.status.text}</span>
              </div>
            </div>

            {/* Editorial Name with ScrambleText */}
            <div>
              <p
                style={{
                  fontSize: '0.95rem',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 800,
                  color: 'var(--accent-lime)',
                  backgroundColor: '#000000',
                  display: 'inline-block',
                  padding: '0.2rem 0.65rem',
                  marginBottom: '0.85rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase'
                }}
              >
                // PORTFOLIO 2026 EDITION
              </p>

              <h1
                style={{
                  fontSize: 'clamp(2.8rem, 6.8vw, 5.2rem)',
                  fontWeight: 900,
                  letterSpacing: '-0.04em',
                  lineHeight: 0.98,
                  textTransform: 'uppercase',
                  color: 'var(--text-primary)'
                }}
              >
                <ScrambleText text={personal.name} triggerOnView={false} scrambleSpeed={25} />
              </h1>

              {/* Editorial Line-Break Subheadings */}
              <div
                style={{
                  marginTop: '1.15rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.15rem',
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(1.35rem, 3.2vw, 2.2rem)',
                  fontWeight: 800,
                  lineHeight: 1.15,
                  letterSpacing: '-0.025em',
                  color: 'var(--text-secondary)'
                }}
              >
                <div>
                  <span style={{ borderBottom: '3px solid var(--accent-lime)' }}>B.Tech Student</span>
                </div>
                <div>
                  <span style={{ borderBottom: '3px solid var(--accent-cobalt)', color: 'var(--text-primary)' }}>
                    Web Developer
                  </span>
                </div>
                <div>
                  <span>Technology Enthusiast</span>
                </div>
              </div>
            </div>

            {/* Short Introduction */}
            <p
              style={{
                fontSize: '1.08rem',
                color: 'var(--text-muted)',
                lineHeight: 1.7,
                maxWidth: '620px',
                fontWeight: 500
              }}
            >
              {personal.bio}
            </p>

            {/* Primary Action Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.85rem',
                marginTop: '0.5rem',
                alignItems: 'center'
              }}
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="btn-brutal btn-brutal-lime"
              >
                <span>View Projects</span>
                <ArrowRight size={17} />
              </button>

              <a
                href={personal.resumePdf}
                download="Shaik_Musheera_Resume.pdf"
                className="btn-brutal btn-brutal-ghost"
              >
                <FileText size={17} />
                <span>Resume (PDF)</span>
              </a>

              <button
                onClick={() => scrollToSection('contact')}
                className="btn-brutal btn-brutal-primary"
              >
                <Mail size={17} />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Social Channels */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                paddingTop: '0.5rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.88rem'
              }}
            >
              <span style={{ fontWeight: 800, color: 'var(--text-dim)' }}>FOLLOW:</span>
              <a
                href={personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  fontWeight: 700,
                  borderBottom: '2px solid var(--border-color)'
                }}
              >
                <Github size={15} />
                <span>GitHub</span>
              </a>
              <span style={{ color: 'var(--border-color)' }}>/</span>
              <a
                href={personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  fontWeight: 700,
                  borderBottom: '2px solid var(--border-color)'
                }}
              >
                <Linkedin size={15} />
                <span>LinkedIn</span>
              </a>
              <span style={{ color: 'var(--border-color)' }}>/</span>
              <a
                href={`mailto:${personal.email}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  fontWeight: 700,
                  borderBottom: '2px solid var(--border-color)'
                }}
              >
                <Mail size={15} />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Right Hero Visual: Neobrutalist Framed Feature Card */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div
              className="neobrutal-card"
              style={{
                padding: '1.75rem',
                background: 'var(--bg-card)'
              }}
            >
              {/* Card Window Top Bar */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingBottom: '0.85rem',
                  marginBottom: '1.25rem',
                  borderBottom: '2px solid var(--border-color)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '11px', height: '11px', background: 'var(--accent-lime)', border: '1.5px solid var(--border-color)' }} />
                  <div style={{ width: '11px', height: '11px', background: 'var(--accent-cobalt)', border: '1.5px solid var(--border-color)' }} />
                  <div style={{ width: '11px', height: '11px', background: 'var(--text-primary)', border: '1.5px solid var(--border-color)' }} />
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', fontWeight: 800 }}>
                  PROFILE.SYS
                </span>
              </div>

              {/* Profile Image with Bold High-Contrast Framing */}
              <div
                style={{
                  width: '100%',
                  height: '240px',
                  border: '2px solid var(--border-color)',
                  boxShadow: '3.5px 3.5px 0px var(--shadow-color)',
                  overflow: 'hidden',
                  background: 'var(--bg-secondary)',
                  position: 'relative',
                  marginBottom: '1.35rem'
                }}
              >
                {!imageError ? (
                  <img
                    src={personal.profileImage}
                    alt={personal.name}
                    onError={() => setImageError(true)}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
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
                    <span
                      style={{
                        fontSize: '3rem',
                        fontWeight: 900,
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--accent-lime)'
                      }}
                    >
                      {personal.monogram}
                    </span>
                    <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800 }}>
                      {personal.name}
                    </span>
                  </div>
                )}

                {/* Overlaid Badge */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '10px',
                    left: '10px',
                    background: '#000000',
                    color: 'var(--accent-lime)',
                    border: '1.5px solid #000000',
                    padding: '0.25rem 0.65rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.74rem',
                    fontWeight: 900
                  }}
                >
                  ⚡ RGMCET CSE
                </div>
              </div>

              {/* Metrics Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '0.75rem'
                }}
              >
                {personal.stats.map((stat, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '0.85rem 1rem',
                      background: 'var(--bg-surface)',
                      border: '2px solid var(--border-color)',
                      boxShadow: '2.5px 2.5px 0px var(--shadow-color)',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    <span
                      style={{
                        fontSize: '1.45rem',
                        fontWeight: 900,
                        fontFamily: 'var(--font-heading)',
                        color: 'var(--text-primary)',
                        lineHeight: 1.1
                      }}
                    >
                      {stat.value}
                    </span>
                    <span
                      style={{
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        color: 'var(--text-secondary)',
                        marginTop: '0.2rem'
                      }}
                    >
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Scroll Indicator Bar */}
      <div
        style={{
          borderTop: '2px solid var(--border-color)',
          padding: '0.65rem 0',
          background: 'var(--bg-secondary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.65rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.8rem',
          fontWeight: 800,
          letterSpacing: '0.06em',
          cursor: 'pointer'
        }}
        onClick={() => scrollToSection('about')}
      >
        <span>SCROLL TO EXPLORE</span>
        <ArrowDown size={14} className="bounce-animation" />
        <style>{`
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(4px); }
          }
          .bounce-animation {
            animation: bounce 1.4s infinite ease-in-out;
          }
        `}</style>
      </div>
    </section>
  );
}
