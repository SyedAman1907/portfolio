import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  ArrowRight,
  FileText,
  Github,
  Linkedin,
  Terminal,
  BrainCircuit
} from 'lucide-react';

export default function Hero() {
  const { personal } = portfolioData;
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Typing effect for roles
  useEffect(() => {
    const roles = personal.roles;
    const currentRole = roles[currentRoleIndex];
    let timer;

    if (!isDeleting && displayText.length < currentRole.length) {
      timer = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
      }, 75);
    } else if (!isDeleting && displayText.length === currentRole.length) {
      timer = setTimeout(() => setIsDeleting(true), 1900);
    } else if (isDeleting && displayText.length > 0) {
      timer = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
      }, 35);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, personal.roles]);

  return (
    <section
      id="home"
      style={{
        paddingTop: 'calc(var(--navbar-height) + 1.75rem)',
        paddingBottom: '2.5rem',
        position: 'relative',
        zIndex: 2
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.25rem',
            alignItems: 'center'
          }}
          className="hero-layout"
        >
          <style>{`
            @media (min-width: 992px) {
              .hero-layout {
                grid-template-columns: 1.22fr 0.78fr !important;
                gap: 2.75rem !important;
              }
            }
            .hero-animated-tag {
              transition: all 0.25s ease;
              cursor: default;
            }
            .hero-animated-tag:hover {
              transform: translateY(-2px);
            }
            @media (max-width: 640px) {
              .hero-buttons-container {
                display: grid !important;
                grid-template-columns: 1fr 1fr !important;
                gap: 0.6rem !important;
              }
              .hero-buttons-container .btn {
                width: 100% !important;
                padding: 0.65rem 0.5rem !important;
                font-size: 0.86rem !important;
              }
            }
          `}</style>

          {/* Left Hero Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
            {/* Status Pill */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.3rem 0.85rem',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(16, 185, 129, 0.08)',
                  border: '1px solid rgba(52, 211, 153, 0.28)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <span
                  style={{
                    position: 'relative',
                    display: 'flex',
                    height: '8px',
                    width: '8px'
                  }}
                >
                  <span
                    style={{
                      position: 'absolute',
                      height: '100%',
                      width: '100%',
                      borderRadius: '50%',
                      background: 'var(--highlight-green)',
                      opacity: 0.75,
                      animation: 'pulseGlow 2s cubic-bezier(0, 0, 0.2, 1) infinite'
                    }}
                  />
                  <span
                    style={{
                      position: 'relative',
                      display: 'inline-flex',
                      borderRadius: '50%',
                      height: '8px',
                      width: '8px',
                      background: 'var(--primary-emerald)'
                    }}
                  />
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    color: 'var(--highlight-green)',
                    fontWeight: 600,
                    letterSpacing: '0.04em'
                  }}
                >
                  AVAILABLE FOR OPPORTUNITIES • 2026
                </span>
              </div>
            </div>

            {/* Main Name & Headline */}
            <div>
              <h1
                style={{
                  fontSize: 'clamp(2.4rem, 5.2vw, 4rem)',
                  fontWeight: 800,
                  lineHeight: 1.1,
                  letterSpacing: '-0.03em',
                  marginBottom: '0.65rem'
                }}
              >
                Syed Aman <span className="gradient-text">Mirzanullah</span>
              </h1>

              {/* Animated Typing Text */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  minHeight: '2.2rem'
                }}
              >
                <Terminal size={19} color="var(--highlight-green)" />
                <span
                  style={{
                    fontSize: 'clamp(1.1rem, 2.4vw, 1.45rem)',
                    fontWeight: 600,
                    fontFamily: 'var(--font-heading)',
                    color: '#e2e8f0'
                  }}
                >
                  {displayText}
                </span>
                <span
                  style={{
                    display: 'inline-block',
                    width: '2.5px',
                    height: '1.3rem',
                    backgroundColor: 'var(--highlight-green)',
                    animation: 'pulseGlow 0.8s infinite'
                  }}
                />
              </div>

              {/* Headline Subtitle */}
              <p
                style={{
                  fontSize: '1rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--highlight-green)',
                  marginTop: '0.35rem',
                  letterSpacing: '0.01em',
                  fontWeight: 600
                }}
              >
                {personal.headline}
              </p>
            </div>

            {/* Supporting Description */}
            <p
              style={{
                fontSize: '1.05rem',
                color: 'var(--text-muted)',
                lineHeight: 1.68,
                maxWidth: '580px'
              }}
            >
              {personal.bio}
            </p>

            {/* Animated Tags Bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '0.5rem',
                paddingTop: '0.2rem'
              }}
            >
              {personal.heroTags.map((tag) => {
                const isVibeCoder = tag === 'Vibe Coder';
                return (
                  <div
                    key={tag}
                    className={`hero-animated-tag ${isVibeCoder ? 'badge-vibe-coder' : 'badge badge-dark'}`}
                  >
                    {isVibeCoder ? (
                      <>
                        <span>✦</span>
                        <span>Vibe Coder</span>
                        <span>⚡</span>
                      </>
                    ) : (
                      <span>{tag}</span>
                    )}
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div
              className="hero-buttons-container"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.75rem',
                paddingTop: '0.5rem'
              }}
            >
              <a href="#projects" className="btn btn-primary btn-sm">
                <span>View Projects</span>
                <ArrowRight size={16} />
              </a>

              <a href="#resume" className="btn btn-glass btn-sm">
                <FileText size={16} color="var(--highlight-green)" />
                <span>Resume</span>
              </a>

              <a
                href={personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-glass btn-sm"
                aria-label="GitHub Profile"
              >
                <Github size={16} />
                <span>GitHub</span>
              </a>

              <a
                href={personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-glass btn-sm"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Profile Visual Container */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative'
            }}
          >
            {/* Ambient Light */}
            <div
              style={{
                position: 'absolute',
                width: '270px',
                height: '270px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(16, 185, 129, 0.22) 0%, rgba(6, 25, 16, 0.05) 65%, transparent 75%)',
                filter: 'blur(35px)',
                zIndex: 0
              }}
            />

            {/* Glowing Ring Photo Frame */}
            <div
              style={{
                position: 'relative',
                zIndex: 1,
                width: 'min(290px, 78vw)',
                height: 'min(290px, 78vw)',
                borderRadius: '22px',
                padding: '8px',
                background: 'linear-gradient(145deg, rgba(52, 211, 153, 0.3) 0%, rgba(5, 20, 12, 0.7) 50%, rgba(16, 185, 129, 0.15) 100%)',
                boxShadow: '0 15px 40px rgba(0,0,0,0.6), 0 0 24px rgba(16, 185, 129, 0.2)',
                transition: 'transform 0.35s ease'
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  position: 'relative',
                  background: '#040d08',
                  border: '1px solid rgba(52, 211, 153, 0.2)'
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
                      objectFit: 'cover',
                      objectPosition: 'top center',
                      display: 'block'
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
                      background: 'linear-gradient(135deg, #05180f 0%, #030806 100%)',
                      color: 'var(--highlight-green)',
                      padding: '1.25rem',
                      textAlign: 'center'
                    }}
                  >
                    <BrainCircuit size={48} style={{ marginBottom: '0.6rem', opacity: 0.9 }} />
                    <span
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 700,
                        fontSize: '1.15rem',
                        color: '#ffffff'
                      }}
                    >
                      Syed Aman
                    </span>
                    <span
                      style={{
                        fontSize: '0.82rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--highlight-green)',
                        marginTop: '0.2rem'
                      }}
                    >
                      Full Stack & AI Developer
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
