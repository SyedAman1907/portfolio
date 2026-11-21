import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  ArrowRight,
  FileText,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  Code2,
  Terminal,
  Award,
  ChevronDown
} from 'lucide-react';

export default function Hero() {
  const { personal } = portfolioData;
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Smooth typing effect
  useEffect(() => {
    const roles = personal.roles;
    const currentRole = roles[currentRoleIndex];
    let timer;

    if (!isDeleting && displayText.length < currentRole.length) {
      timer = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
      }, 70);
    } else if (!isDeleting && displayText.length === currentRole.length) {
      timer = setTimeout(() => setIsDeleting(true), 2100);
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

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      style={{
        paddingTop: 'calc(var(--navbar-height) + 2.5rem)',
        paddingBottom: '3.5rem',
        position: 'relative',
        zIndex: 2
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem',
            alignItems: 'center'
          }}
          className="hero-grid"
        >
          <style>{`
            @media (min-width: 992px) {
              .hero-grid {
                grid-template-columns: 1.25fr 0.85fr !important;
                gap: 3.5rem !important;
              }
            }
            .hero-stat-card {
              transition: all 0.22s ease;
            }
            .hero-stat-card:hover {
              transform: translateY(-2px);
              border-color: var(--border-card-hover) !important;
            }
          `}</style>

          {/* Left Column: Introductions & Actions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* Status Pill */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.55rem',
                  padding: '0.35rem 0.95rem',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--tag-bg)',
                  border: '1px solid var(--tag-border)',
                  fontSize: '0.82rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-secondary)'
                }}
              >
                <span className="status-pulse-dot" />
                <span>{personal.status.text}</span>
              </div>
            </div>

            {/* Main Headline */}
            <div>
              <p
                style={{
                  fontSize: '1rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-muted)',
                  marginBottom: '0.4rem',
                  letterSpacing: '0.04em'
                }}
              >
                // HELLO WORLD, I'M
              </p>
              <h1
                style={{
                  fontSize: 'clamp(2.5rem, 5.5vw, 4rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.1,
                  color: 'var(--text-main)',
                  marginBottom: '0.65rem'
                }}
              >
                {personal.name}
              </h1>

              {/* Dynamic Animated Role */}
              <div
                style={{
                  fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)',
                  fontWeight: 600,
                  color: 'var(--text-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  minHeight: '2.2rem',
                  gap: '0.4rem',
                  fontFamily: 'var(--font-heading)'
                }}
              >
                <span>{displayText}</span>
                <span
                  style={{
                    display: 'inline-block',
                    width: '2px',
                    height: '1.3em',
                    backgroundColor: 'var(--accent-primary)',
                    animation: 'blink 1s step-end infinite'
                  }}
                />
                <style>{`
                  @keyframes blink {
                    from, to { opacity: 1; }
                    50% { opacity: 0; }
                  }
                `}</style>
              </div>
            </div>

            {/* Professional Headline & Bio */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <p
                style={{
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  color: 'var(--text-main)',
                  fontFamily: 'var(--font-heading)'
                }}
              >
                {personal.headline}
              </p>
              <p
                style={{
                  fontSize: '1.02rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.7,
                  maxWidth: '580px'
                }}
              >
                {personal.bio}
              </p>
            </div>

            {/* Hero Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
              {personal.heroTags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    padding: '0.24rem 0.68rem',
                    borderRadius: 'var(--radius-full)',
                    background: 'var(--tag-bg)',
                    border: '1px solid var(--tag-border)',
                    fontSize: '0.78rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-secondary)'
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Buttons: View Projects, Download Resume, Contact Me */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.75rem',
                marginTop: '0.5rem',
                alignItems: 'center'
              }}
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="btn btn-primary"
              >
                <span>View Projects</span>
                <ArrowRight size={16} />
              </button>

              <a
                href={personal.resumePdf}
                download="Shaik_Musheera_Resume.pdf"
                className="btn btn-glass"
              >
                <FileText size={16} />
                <span>Download Resume</span>
              </a>

              <button
                onClick={() => scrollToSection('contact')}
                className="btn btn-outline"
              >
                <Mail size={16} />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Social Links */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                paddingTop: '0.5rem'
              }}
            >
              <span
                style={{
                  fontSize: '0.82rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-dim)'
                }}
              >
                Connect:
              </span>
              <a
                href={personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  color: 'var(--text-muted)',
                  fontSize: '0.86rem'
                }}
                aria-label="GitHub Profile"
              >
                <Github size={16} />
                <span>GitHub</span>
              </a>
              <span style={{ color: 'var(--border-card)' }}>•</span>
              <a
                href={personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  color: 'var(--text-muted)',
                  fontSize: '0.86rem'
                }}
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>
              <span style={{ color: 'var(--border-card)' }}>•</span>
              <a
                href={`mailto:${personal.email}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  color: 'var(--text-muted)',
                  fontSize: '0.86rem'
                }}
                aria-label="Send direct email"
              >
                <Mail size={16} />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Right Column: Profile Card & Key Metrics */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div
              className="glass-card"
              style={{
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.35rem'
              }}
            >
              {/* Profile Avatar / Photo Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.15rem'
                }}
              >
                <div
                  style={{
                    width: '74px',
                    height: '74px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    background: 'var(--tag-bg)',
                    border: '2px solid var(--border-card)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    boxShadow: 'var(--shadow-card)'
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
                        fontSize: '1.6rem',
                        fontWeight: 800,
                        color: 'var(--text-main)',
                        fontFamily: 'var(--font-heading)'
                      }}
                    >
                      {personal.monogram}
                    </div>
                  )}
                </div>

                <div>
                  <h3
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      color: 'var(--text-main)',
                      lineHeight: 1.2
                    }}
                  >
                    {personal.name}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.84rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--text-muted)',
                      marginTop: '0.15rem'
                    }}
                  >
                    Computer Science & Engg
                  </p>
                  <p
                    style={{
                      fontSize: '0.78rem',
                      color: 'var(--text-dim)',
                      marginTop: '0.1rem'
                    }}
                  >
                    RGMCET • Andhra Pradesh
                  </p>
                </div>
              </div>

              {/* Verified Student Credentials Grid */}
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
                    className="glass-panel hero-stat-card"
                    style={{
                      padding: '0.95rem 1rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.2rem'
                    }}
                  >
                    <span
                      style={{
                        fontSize: '1.35rem',
                        fontWeight: 800,
                        color: 'var(--text-main)',
                        fontFamily: 'var(--font-heading)',
                        letterSpacing: '-0.02em'
                      }}
                    >
                      {stat.value}
                    </span>
                    <span
                      style={{
                        fontSize: '0.82rem',
                        fontWeight: 600,
                        color: 'var(--text-secondary)'
                      }}
                    >
                      {stat.label}
                    </span>
                    <span
                      style={{
                        fontSize: '0.72rem',
                        color: 'var(--text-dim)',
                        lineHeight: 1.3
                      }}
                    >
                      {stat.subtext}
                    </span>
                  </div>
                ))}
              </div>

              {/* Fast Highlights Bar */}
              <div
                style={{
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-sm)',
                  background: 'var(--tag-bg)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '0.82rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <Award size={15} color="var(--text-main)" />
                  <span style={{ color: 'var(--text-secondary)', fontWeight: 600 }}>
                    MongoDB × ICT Academy
                  </span>
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-main)',
                    fontWeight: 700
                  }}
                >
                  4th Rank
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
