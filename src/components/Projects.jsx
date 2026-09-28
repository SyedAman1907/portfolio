import React from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  Github,
  CheckCircle2,
  Sparkles,
  Layers,
  BrainCircuit,
  ArrowRight
} from 'lucide-react';

export default function Projects() {
  const { featuredProjects } = portfolioData;

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span>// 05. FEATURED BUILDS</span>
          </div>
          <h2 className="section-title">
            Engineered <span className="gradient-text">Systems</span>
          </h2>
          <p className="section-subtitle">
            AI-powered candidate analysis, multi-source intelligence aggregators, and full-stack platforms.
          </p>
        </div>

        {/* Featured Projects SaaS Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: '1.35rem'
          }}
        >
          {featuredProjects.map((project) => {
            const isAI = project.category === 'AI / ML';

            return (
              <div
                key={project.id}
                className="glass-card"
                style={{
                  padding: '1.45rem 1.6rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  border: isAI
                    ? '1px solid rgba(52, 211, 153, 0.35)'
                    : '1px solid var(--border-glass)'
                }}
              >
                <div>
                  {/* Top Bar: Category Pill & Star icon */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '0.85rem'
                    }}
                  >
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        fontSize: '0.78rem',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 600,
                        color: 'var(--highlight-green)',
                        background: 'rgba(16, 185, 129, 0.1)',
                        padding: '0.25rem 0.7rem',
                        borderRadius: 'var(--radius-full)',
                        border: '1px solid rgba(52, 211, 153, 0.22)'
                      }}
                    >
                      {isAI ? <BrainCircuit size={13} /> : <Layers size={13} />}
                      <span>{project.category}</span>
                    </span>

                    {project.featured && (
                      <span
                        style={{
                          fontSize: '0.74rem',
                          fontFamily: 'var(--font-mono)',
                          color: '#fbbf24',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.3rem'
                        }}
                      >
                        <Sparkles size={12} />
                        Featured Build
                      </span>
                    )}
                  </div>

                  {/* Project Title & Subtitle */}
                  <h3
                    style={{
                      fontSize: '1.32rem',
                      fontWeight: 700,
                      color: '#ffffff',
                      lineHeight: 1.25,
                      marginBottom: '0.3rem'
                    }}
                  >
                    {project.title}
                  </h3>

                  <div
                    style={{
                      fontSize: '0.84rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--highlight-green)',
                      marginBottom: '0.75rem',
                      fontWeight: 500
                    }}
                  >
                    {project.subtitle}
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: '0.94rem',
                      lineHeight: 1.62,
                      color: 'var(--text-muted)',
                      marginBottom: '0.95rem'
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Highlights Bullet List */}
                  {project.features && project.features.length > 0 && (
                    <div style={{ marginBottom: '1.15rem' }}>
                      <div
                        style={{
                          fontSize: '0.72rem',
                          fontFamily: 'var(--font-mono)',
                          color: 'var(--text-dim)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.04em',
                          marginBottom: '0.45rem'
                        }}
                      >
                        Core Capabilities:
                      </div>
                      <ul
                        style={{
                          listStyle: 'none',
                          display: 'grid',
                          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 140px), 1fr))',
                          gap: '0.35rem'
                        }}
                      >
                        {project.features.slice(0, 6).map((feat, fIdx) => (
                          <li
                            key={fIdx}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.4rem',
                              fontSize: '0.84rem',
                              color: '#cbd5e1'
                            }}
                          >
                            <CheckCircle2
                              size={13}
                              color="var(--highlight-green)"
                              style={{ flexShrink: 0 }}
                            />
                            <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                              {feat}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Bottom Section: Tech Badges & Action */}
                <div>
                  {/* Tech stack badges */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.4rem',
                      marginBottom: '0.95rem',
                      paddingTop: '0.75rem',
                      borderTop: '1px solid rgba(255, 255, 255, 0.06)'
                    }}
                  >
                    {project.tech.map((t) => (
                      <span key={t} className="badge badge-dark" style={{ fontSize: '0.78rem', padding: '0.22rem 0.65rem' }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-glass btn-sm"
                      style={{ width: '100%', justifyContent: 'center' }}
                    >
                      <Github size={15} color="var(--highlight-green)" />
                      <span>View on GitHub</span>
                      <ArrowRight size={14} style={{ marginLeft: '0.2rem', opacity: 0.7 }} />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
