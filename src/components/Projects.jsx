import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import ScrambleText from './ScrambleText';
import {
  Github,
  ExternalLink,
  Layers,
  ArrowRight,
  CheckCircle2,
  X,
  Info,
  Terminal,
  Sparkles
} from 'lucide-react';

export default function Projects() {
  const { featuredProjects } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['All', 'AI & Web Apps', 'Full Stack'];

  const filteredProjects = selectedCategory === 'All'
    ? featuredProjects
    : featuredProjects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="section" style={{ borderTop: 'var(--border-width) solid var(--border-color)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag-box">
            <span>// 03. FEATURED BUILDS</span>
          </div>
          <h2 className="section-title">
            <ScrambleText text="FEATURED PROJECTS" />
          </h2>
          <p className="section-subtitle">
            Engineered web applications and software systems showcased with a stacking-card scroll interaction.
          </p>
        </div>

        {/* Category Filters */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
            marginBottom: '3rem'
          }}
        >
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`btn-brutal btn-brutal-sm ${isActive ? 'btn-brutal-lime' : 'btn-brutal-ghost'}`}
              >
                <span>{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Stacking-Card Scroll Showcase Container */}
        <div className="stacking-card-container">
          {filteredProjects.map((project, index) => {
            // Calculate stacking top offset
            const topOffset = `calc(90px + ${index * 22}px)`;

            return (
              <div
                key={project.id}
                className="stacking-card-item"
                style={{
                  top: topOffset,
                  zIndex: index + 1
                }}
              >
                <div
                  className="neobrutal-card"
                  style={{
                    padding: '2.25rem',
                    background: 'var(--bg-card)',
                    border: 'var(--border-thick) solid var(--border-color)',
                    boxShadow: 'var(--shadow-offset-lg)'
                  }}
                >
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr',
                      gap: '2rem'
                    }}
                    className="project-inner-grid"
                  >
                    <style>{`
                      @media (min-width: 900px) {
                        .project-inner-grid {
                          grid-template-columns: 1.15fr 0.85fr !important;
                          gap: 2.75rem !important;
                        }
                      }
                    `}</style>

                    {/* Left Details */}
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                        {/* Top Meta Bar */}
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.65rem',
                            marginBottom: '1rem'
                          }}
                        >
                          <span
                            style={{
                              fontSize: '0.78rem',
                              fontFamily: 'var(--font-mono)',
                              fontWeight: 900,
                              background: 'var(--accent-lime)',
                              color: '#000000',
                              border: '1.5px solid var(--border-color)',
                              padding: '0.2rem 0.65rem',
                              textTransform: 'uppercase'
                            }}
                          >
                            PROJECT 0{index + 1}
                          </span>

                          <span
                            style={{
                              fontSize: '0.78rem',
                              fontFamily: 'var(--font-mono)',
                              fontWeight: 700,
                              border: '1.5px solid var(--border-color)',
                              padding: '0.2rem 0.65rem',
                              background: 'var(--bg-surface)'
                            }}
                          >
                            {project.category}
                          </span>
                        </div>

                        {/* Title & Subtitle */}
                        <h3
                          style={{
                            fontSize: 'clamp(1.6rem, 3.2vw, 2.3rem)',
                            fontWeight: 900,
                            letterSpacing: '-0.025em',
                            textTransform: 'uppercase',
                            lineHeight: 1.1,
                            marginBottom: '0.45rem',
                            color: 'var(--text-primary)'
                          }}
                        >
                          {project.title}
                        </h3>

                        <p
                          style={{
                            fontSize: '0.92rem',
                            fontFamily: 'var(--font-mono)',
                            color: 'var(--text-dim)',
                            marginBottom: '1.15rem'
                          }}
                        >
                          // {project.subtitle}
                        </p>

                        {/* Description */}
                        <p
                          style={{
                            fontSize: '1rem',
                            color: 'var(--text-muted)',
                            lineHeight: 1.7,
                            marginBottom: '1.5rem'
                          }}
                        >
                          {project.description}
                        </p>

                        {/* Key Features */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', marginBottom: '1.5rem' }}>
                          {project.features.slice(0, 3).map((feat, fIdx) => (
                            <div
                              key={fIdx}
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.55rem',
                                fontSize: '0.88rem',
                                fontWeight: 600,
                                color: 'var(--text-secondary)'
                              }}
                            >
                              <span style={{ color: 'var(--accent-lime)' }}>▶</span>
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tech Chips */}
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '1.5rem' }}>
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            style={{
                              fontSize: '0.78rem',
                              fontFamily: 'var(--font-mono)',
                              fontWeight: 700,
                              padding: '0.22rem 0.65rem',
                              background: 'var(--bg-surface)',
                              border: '1.5px solid var(--border-color)',
                              boxShadow: '1.5px 1.5px 0px var(--shadow-color)'
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* CTAs */}
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-brutal btn-brutal-lime btn-brutal-sm"
                          >
                            <Github size={16} />
                            <span>GitHub Repo</span>
                            <ExternalLink size={13} />
                          </a>
                        )}

                        <button
                          onClick={() => setActiveModalProject(project)}
                          className="btn-brutal btn-brutal-ghost btn-brutal-sm"
                        >
                          <Info size={15} />
                          <span>View Full Spec</span>
                        </button>
                      </div>
                    </div>

                    {/* Right Visual Element */}
                    <div
                      style={{
                        background: 'var(--bg-surface)',
                        border: '2px solid var(--border-color)',
                        boxShadow: '4px 4px 0px var(--shadow-color)',
                        padding: '1.5rem',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        minHeight: '260px'
                      }}
                    >
                      {/* Window Header */}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          paddingBottom: '0.85rem',
                          borderBottom: '2px solid var(--border-color)'
                        }}
                      >
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', fontWeight: 800 }}>
                          SPEC_PREVIEW.JSON
                        </span>
                        <div style={{ display: 'flex', gap: '4px' }}>
                          <div style={{ width: '8px', height: '8px', background: 'var(--border-color)' }} />
                          <div style={{ width: '8px', height: '8px', background: 'var(--border-color)' }} />
                        </div>
                      </div>

                      {/* Mock Code Preview */}
                      <div
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.82rem',
                          color: 'var(--text-secondary)',
                          lineHeight: 1.7,
                          padding: '1rem 0'
                        }}
                      >
                        <div><span style={{ color: 'var(--accent-cobalt)' }}>const</span> project = &#123;</div>
                        <div style={{ paddingLeft: '1.25rem' }}>title: <span style={{ color: 'var(--accent-lime)' }}>"{project.title}"</span>,</div>
                        <div style={{ paddingLeft: '1.25rem' }}>category: "{project.category}",</div>
                        <div style={{ paddingLeft: '1.25rem' }}>verified: <span style={{ color: 'var(--accent-lime)' }}>true</span>,</div>
                        <div style={{ paddingLeft: '1.25rem' }}>status: "Production Ready"</div>
                        <div>&#125;;</div>
                      </div>

                      <div
                        style={{
                          paddingTop: '0.85rem',
                          borderTop: '2px solid var(--border-color)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          fontSize: '0.76rem',
                          fontFamily: 'var(--font-mono)'
                        }}
                      >
                        <span style={{ color: 'var(--text-dim)' }}>STABILITY: 100%</span>
                        <span style={{ color: 'var(--accent-lime)', fontWeight: 800 }}>ACTIVE BUILD</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Full Spec Modal */}
        {activeModalProject && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 999,
              background: 'rgba(0, 0, 0, 0.85)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem'
            }}
            onClick={() => setActiveModalProject(null)}
          >
            <div
              className="neobrutal-card"
              style={{
                width: '100%',
                maxWidth: '650px',
                maxHeight: '88vh',
                overflowY: 'auto',
                padding: '2.25rem',
                background: 'var(--bg-card)',
                boxShadow: '10px 10px 0px var(--shadow-color)'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1.25rem',
                  paddingBottom: '0.75rem',
                  borderBottom: '2px solid var(--border-color)'
                }}
              >
                <span
                  style={{
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 800,
                    background: 'var(--accent-lime)',
                    color: '#000000',
                    padding: '0.2rem 0.65rem',
                    border: '1.5px solid var(--border-color)'
                  }}
                >
                  {activeModalProject.category}
                </span>

                <button
                  onClick={() => setActiveModalProject(null)}
                  style={{
                    padding: '0.35rem',
                    border: '2px solid var(--border-color)',
                    background: 'var(--bg-surface)',
                    cursor: 'pointer'
                  }}
                  aria-label="Close dialog"
                >
                  <X size={18} />
                </button>
              </div>

              <h3
                style={{
                  fontSize: '1.75rem',
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  marginBottom: '0.25rem'
                }}
              >
                {activeModalProject.title}
              </h3>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.88rem', color: 'var(--text-dim)', marginBottom: '1.25rem' }}>
                // {activeModalProject.subtitle}
              </p>

              <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                {activeModalProject.description}
              </p>

              {/* Complete Features */}
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ fontSize: '0.94rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                  Complete Architecture Spec
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                  {activeModalProject.features.map((feat, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.55rem',
                        fontSize: '0.88rem',
                        fontWeight: 600,
                        color: 'var(--text-secondary)'
                      }}
                    >
                      <span style={{ color: 'var(--accent-lime)' }}>■</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div style={{ marginBottom: '1.75rem' }}>
                <h4 style={{ fontSize: '0.94rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                  Tech Stack
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                  {activeModalProject.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: '0.82rem',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 700,
                        padding: '0.25rem 0.65rem',
                        background: 'var(--bg-surface)',
                        border: '1.5px solid var(--border-color)'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end' }}>
                {activeModalProject.github && (
                  <a
                    href={activeModalProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-brutal btn-brutal-lime btn-brutal-sm"
                  >
                    <Github size={15} />
                    <span>View GitHub Repo</span>
                    <ExternalLink size={13} />
                  </a>
                )}
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="btn-brutal btn-brutal-ghost btn-brutal-sm"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
