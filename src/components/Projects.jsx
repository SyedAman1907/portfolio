import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  Github,
  ExternalLink,
  Layers,
  BrainCircuit,
  ArrowRight,
  CheckCircle2,
  X,
  Code2,
  Terminal,
  Sparkles,
  Info
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
    <section id="projects" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span>// 03. FEATURED BUILDS</span>
          </div>
          <h2 className="section-title">
            Engineered <span className="monochrome-gradient">Projects</span>
          </h2>
          <p className="section-subtitle">
            Selected full-stack and web applications built with a focus on modern component architecture, clean APIs, and user-centric problem solving.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            marginBottom: '2.5rem'
          }}
        >
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '0.45rem 1rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.84rem',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: isActive ? 700 : 500,
                  background: isActive ? 'var(--accent-primary)' : 'var(--bg-card)',
                  color: isActive ? 'var(--accent-contrast)' : 'var(--text-muted)',
                  border: isActive ? '1px solid var(--accent-primary)' : '1px solid var(--border-card)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects SaaS Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            gap: '1.5rem'
          }}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '1.75rem',
                border: '1px solid var(--border-card)'
              }}
            >
              <div>
                {/* Visual Window Mock / Header Bar */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1rem'
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
                      color: 'var(--text-secondary)',
                      background: 'var(--tag-bg)',
                      padding: '0.25rem 0.75rem',
                      borderRadius: 'var(--radius-full)',
                      border: '1px solid var(--tag-border)'
                    }}
                  >
                    <Layers size={13} />
                    <span>{project.category}</span>
                  </span>

                  <div style={{ display: 'flex', gap: '5px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--border-card-hover)' }} />
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--border-card-hover)' }} />
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--border-card-hover)' }} />
                  </div>
                </div>

                {/* Project Title & Subtitle */}
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: 'var(--text-main)',
                    lineHeight: 1.3,
                    marginBottom: '0.25rem'
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.84rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-dim)',
                    marginBottom: '0.95rem'
                  }}
                >
                  {project.subtitle}
                </p>

                {/* Description */}
                <p
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.65,
                    marginBottom: '1.25rem'
                  }}
                >
                  {project.description}
                </p>

                {/* Key Features Preview */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.4rem',
                    marginBottom: '1.35rem'
                  }}
                >
                  {project.features.slice(0, 3).map((feat, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.45rem',
                        fontSize: '0.82rem',
                        color: 'var(--text-secondary)'
                      }}
                    >
                      <CheckCircle2 size={13} color="var(--text-main)" style={{ flexShrink: 0 }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Tags */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.4rem',
                    marginBottom: '1.5rem'
                  }}
                >
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: '0.74rem',
                        fontFamily: 'var(--font-mono)',
                        padding: '0.2rem 0.55rem',
                        borderRadius: 'var(--radius-xs)',
                        background: 'var(--tag-bg)',
                        border: '1px solid var(--border-subtle)',
                        color: 'var(--text-secondary)'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons: GitHub Repo + View Details Modal */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--border-subtle)'
                }}
              >
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-glass btn-sm"
                    style={{ flex: 1 }}
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github size={15} />
                    <span>Repository</span>
                    <ExternalLink size={12} />
                  </a>
                )}

                <button
                  onClick={() => setActiveModalProject(project)}
                  className="btn btn-outline btn-sm"
                  style={{ flex: 1 }}
                >
                  <Info size={14} />
                  <span>View Details</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal: Project Deep Dive */}
        {activeModalProject && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 100,
              background: 'rgba(0, 0, 0, 0.75)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.25rem'
            }}
            onClick={() => setActiveModalProject(null)}
          >
            <div
              className="glass-card"
              style={{
                width: '100%',
                maxWidth: '620px',
                maxHeight: '90vh',
                overflowY: 'auto',
                padding: '2rem',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-card-hover)',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8)'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Bar */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1rem'
                }}
              >
                <span
                  style={{
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-secondary)',
                    background: 'var(--tag-bg)',
                    padding: '0.25rem 0.75rem',
                    borderRadius: 'var(--radius-full)',
                    border: '1px solid var(--tag-border)'
                  }}
                >
                  {activeModalProject.category}
                </span>

                <button
                  onClick={() => setActiveModalProject(null)}
                  style={{
                    color: 'var(--text-muted)',
                    padding: '0.35rem',
                    borderRadius: 'var(--radius-xs)',
                    cursor: 'pointer'
                  }}
                  aria-label="Close dialog"
                >
                  <X size={20} />
                </button>
              </div>

              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 800,
                  color: 'var(--text-main)',
                  marginBottom: '0.25rem'
                }}
              >
                {activeModalProject.title}
              </h3>
              <p
                style={{
                  fontSize: '0.88rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-dim)',
                  marginBottom: '1.25rem'
                }}
              >
                {activeModalProject.subtitle}
              </p>

              <p
                style={{
                  fontSize: '0.96rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.7,
                  marginBottom: '1.5rem'
                }}
              >
                {activeModalProject.description}
              </p>

              {/* Complete Features List */}
              <div style={{ marginBottom: '1.5rem' }}>
                <h4
                  style={{
                    fontSize: '0.92rem',
                    fontWeight: 700,
                    color: 'var(--text-main)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    marginBottom: '0.75rem'
                  }}
                >
                  Key Architectural Features
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
                        color: 'var(--text-secondary)'
                      }}
                    >
                      <CheckCircle2 size={15} color="var(--text-main)" style={{ flexShrink: 0 }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div style={{ marginBottom: '1.75rem' }}>
                <h4
                  style={{
                    fontSize: '0.92rem',
                    fontWeight: 700,
                    color: 'var(--text-main)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    marginBottom: '0.75rem'
                  }}
                >
                  Technologies Used
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                  {activeModalProject.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: '0.8rem',
                        fontFamily: 'var(--font-mono)',
                        padding: '0.25rem 0.65rem',
                        borderRadius: 'var(--radius-xs)',
                        background: 'var(--tag-bg)',
                        border: '1px solid var(--border-card)',
                        color: 'var(--text-main)'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end' }}>
                {activeModalProject.github && (
                  <a
                    href={activeModalProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    <Github size={15} />
                    <span>Open GitHub Repository</span>
                    <ExternalLink size={13} />
                  </a>
                )}
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="btn btn-outline btn-sm"
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
