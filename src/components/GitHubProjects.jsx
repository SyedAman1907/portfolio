import React from 'react';
import { useGitHubProjects } from '../hooks/useGitHubProjects';
import { portfolioData } from '../data/portfolioData';
import {
  Github,
  Star,
  GitFork,
  Code2,
  Calendar,
  AlertCircle,
  FolderGit2,
  ArrowRight
} from 'lucide-react';

const FILTER_TABS = ['All', 'AI / ML', 'Full Stack', 'Frontend', 'Python', 'JavaScript'];

export default function GitHubProjects() {
  const { personal } = portfolioData;
  const {
    filteredProjects,
    loading,
    error,
    activeFilter,
    setActiveFilter
  } = useGitHubProjects(personal.githubUsername);

  const formatDate = (isoString) => {
    if (!isoString) return '';
    const date = new Date(isoString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <section id="github-projects" className="section" style={{ paddingTop: '1.5rem' }}>
      <div className="container">
        {/* Compact Glass Header */}
        <div
          className="glass-card"
          style={{
            padding: '1.35rem 1.6rem',
            marginBottom: '1.35rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            border: '1px solid rgba(52, 211, 153, 0.25)'
          }}
        >
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                fontSize: '0.78rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--highlight-green)',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                marginBottom: '0.25rem'
              }}
            >
              <Github size={14} />
              <span>Directly connected to @{personal.githubUsername}</span>
            </div>
            <h2 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.2 }}>
              GitHub <span className="gradient-text">Projects</span>
            </h2>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
              Automatically syncing open-source codebases, experiments, and active repositories.
            </p>
          </div>

          <a
            href={personal.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-glass btn-sm"
          >
            <Github size={15} color="var(--highlight-green)" />
            <span>@{personal.githubUsername}</span>
            <ArrowRight size={13} />
          </a>
        </div>

        {/* Compact Filter Tabs */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.45rem',
            marginBottom: '1.35rem',
            overflowX: 'auto',
            paddingBottom: '0.35rem',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none'
          }}
        >
          <style>{`
            .filter-pill {
              padding: 0.4rem 0.95rem;
              border-radius: var(--radius-full);
              font-size: 0.84rem;
              font-family: var(--font-mono);
              font-weight: 600;
              transition: all 0.2s ease;
              white-space: nowrap;
              cursor: pointer;
            }
            .filter-pill:hover {
              transform: translateY(-1px);
            }
            .filter-active {
              border: 1px solid var(--highlight-green) !important;
              background: rgba(16, 185, 129, 0.18) !important;
              color: var(--highlight-green) !important;
              box-shadow: 0 0 12px rgba(52, 211, 153, 0.3) !important;
            }
            .filter-inactive {
              border: 1px solid rgba(255, 255, 255, 0.08) !important;
              background: rgba(255, 255, 255, 0.025) !important;
              color: var(--text-muted) !important;
            }
            .filter-inactive:hover {
              border-color: rgba(52, 211, 153, 0.3) !important;
              color: #ffffff !important;
            }
          `}</style>

          {FILTER_TABS.map((tab) => {
            const isActive = activeFilter === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`filter-pill ${isActive ? 'filter-active' : 'filter-inactive'}`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Loading Skeleton */}
        {loading && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: '1.15rem'
            }}
          >
            {[1, 2, 3, 4].map((idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '1.25rem',
                  height: '190px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  opacity: 0.5
                }}
              >
                <div>
                  <div
                    style={{
                      height: '18px',
                      width: '60%',
                      background: 'rgba(52, 211, 153, 0.15)',
                      borderRadius: '4px',
                      marginBottom: '0.75rem'
                    }}
                  />
                  <div
                    style={{
                      height: '12px',
                      width: '85%',
                      background: 'rgba(255, 255, 255, 0.05)',
                      borderRadius: '3px',
                      marginBottom: '0.45rem'
                    }}
                  />
                  <div
                    style={{
                      height: '12px',
                      width: '65%',
                      background: 'rgba(255, 255, 255, 0.05)',
                      borderRadius: '3px'
                    }}
                  />
                </div>
                <div
                  style={{
                    height: '28px',
                    width: '100%',
                    background: 'rgba(52, 211, 153, 0.08)',
                    borderRadius: '6px'
                  }}
                />
              </div>
            ))}
          </div>
        )}

        {/* Error Fallback */}
        {!loading && error && (
          <div
            className="glass-card"
            style={{
              padding: '1.75rem',
              textAlign: 'center',
              maxWidth: '540px',
              margin: '0 auto',
              border: '1px solid rgba(52, 211, 153, 0.2)'
            }}
          >
            <AlertCircle size={28} color="var(--highlight-green)" style={{ margin: '0 auto 0.65rem' }} />
            <h4 style={{ fontSize: '1.1rem', color: '#ffffff', marginBottom: '0.35rem' }}>
              Repositories temporarily unavailable
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
              Rate limit or connection cooling reached. Inspect directly on GitHub:
            </p>
            <a
              href={personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              <Github size={15} />
              <span>@{personal.githubUsername}</span>
            </a>
          </div>
        )}

        {/* Loaded Repositories Grid */}
        {!loading && !error && filteredProjects.length > 0 && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: '1.15rem'
            }}
          >
            {filteredProjects.map((repo) => (
              <div
                key={repo.id}
                className="glass-card"
                style={{
                  padding: '1.25rem 1.35rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  {/* Top: Language & Stars/Forks */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '0.65rem'
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        fontSize: '0.78rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--highlight-green)'
                      }}
                    >
                      <Code2 size={14} />
                      <span>{repo.language}</span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <span
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.3rem',
                          fontSize: '0.78rem',
                          color: '#cbd5e1'
                        }}
                      >
                        <Star size={12} color="#facc15" />
                        <span>{repo.stars}</span>
                      </span>
                      <span
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.3rem',
                          fontSize: '0.78rem',
                          color: '#cbd5e1'
                        }}
                      >
                        <GitFork size={12} />
                        <span>{repo.forks}</span>
                      </span>
                    </div>
                  </div>

                  {/* Repo Title */}
                  <h3
                    style={{
                      fontSize: '1.15rem',
                      fontWeight: 700,
                      color: '#ffffff',
                      marginBottom: '0.35rem',
                      wordBreak: 'break-word'
                    }}
                  >
                    {repo.name}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: '0.88rem',
                      lineHeight: 1.55,
                      color: 'var(--text-muted)',
                      marginBottom: '0.85rem'
                    }}
                  >
                    {repo.description}
                  </p>

                  {/* Topics */}
                  {repo.topics && repo.topics.length > 0 && (
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.35rem',
                        marginBottom: '0.85rem'
                      }}
                    >
                      {repo.topics.slice(0, 4).map((topic, tIdx) => (
                        <span key={tIdx} className="badge badge-dark" style={{ fontSize: '0.74rem', padding: '0.15rem 0.5rem' }}>
                          #{topic}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer */}
                <div
                  style={{
                    paddingTop: '0.75rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '0.5rem'
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontSize: '0.76rem',
                      color: 'var(--text-dim)',
                      fontFamily: 'var(--font-mono)'
                    }}
                  >
                    <Calendar size={12} />
                    <span>Updated {formatDate(repo.updatedAt)}</span>
                  </div>

                  <a
                    href={repo.htmlUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-glass btn-sm"
                    style={{ padding: '0.35rem 0.75rem', fontSize: '0.82rem' }}
                  >
                    <Github size={14} color="var(--highlight-green)" />
                    <span>View on GitHub</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && filteredProjects.length === 0 && (
          <div
            className="glass-card"
            style={{
              padding: '1.75rem',
              textAlign: 'center',
              maxWidth: '420px',
              margin: '0 auto'
            }}
          >
            <FolderGit2 size={30} color="var(--highlight-green)" style={{ margin: '0 auto 0.5rem' }} />
            <h4 style={{ fontSize: '1.05rem', color: '#ffffff', marginBottom: '0.25rem' }}>
              No repositories in this category
            </h4>
            <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)' }}>
              Check "All" or browse directly on GitHub.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
