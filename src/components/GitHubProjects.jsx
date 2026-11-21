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
            padding: '1.45rem 1.75rem',
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            border: '1px solid var(--border-card)'
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
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                marginBottom: '0.25rem'
              }}
            >
              <Github size={14} />
              <span>Directly Connected to @{personal.githubUsername}</span>
            </div>
            <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-main)', lineHeight: 1.2 }}>
              GitHub <span className="monochrome-gradient">Repositories</span>
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
              Real-time open source repositories, developer projects, and active experiments.
            </p>
          </div>

          <a
            href={personal.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-sm"
          >
            <Github size={15} />
            <span>@{personal.githubUsername}</span>
            <ArrowRight size={13} />
          </a>
        </div>

        {/* Filter Tabs */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.45rem',
            marginBottom: '1.5rem',
            overflowX: 'auto',
            paddingBottom: '0.35rem',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {FILTER_TABS.map((tab) => {
            const isActive = activeFilter === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                style={{
                  padding: '0.4rem 0.95rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.82rem',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: isActive ? 700 : 500,
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                  border: isActive ? '1px solid var(--accent-primary)' : '1px solid var(--border-card)',
                  background: isActive ? 'var(--accent-primary)' : 'var(--bg-card)',
                  color: isActive ? 'var(--accent-contrast)' : 'var(--text-muted)'
                }}
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
                  height: '180px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  opacity: 0.6
                }}
              >
                <div>
                  <div
                    style={{
                      height: '16px',
                      width: '60%',
                      background: 'var(--tag-bg)',
                      borderRadius: '4px',
                      marginBottom: '0.75rem'
                    }}
                  />
                  <div
                    style={{
                      height: '12px',
                      width: '85%',
                      background: 'var(--tag-bg)',
                      borderRadius: '3px',
                      marginBottom: '0.45rem'
                    }}
                  />
                  <div
                    style={{
                      height: '12px',
                      width: '65%',
                      background: 'var(--tag-bg)',
                      borderRadius: '3px'
                    }}
                  />
                </div>
                <div
                  style={{
                    height: '24px',
                    width: '100%',
                    background: 'var(--tag-bg)',
                    borderRadius: '4px'
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
              border: '1px solid var(--border-card)'
            }}
          >
            <AlertCircle size={28} color="var(--text-main)" style={{ margin: '0 auto 0.65rem' }} />
            <h4 style={{ fontSize: '1.05rem', color: 'var(--text-main)', marginBottom: '0.35rem' }}>
              Repositories temporarily cached or rate-limited
            </h4>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
              Inspect live repositories and codebases directly on GitHub:
            </p>
            <a
              href={personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              <Github size={15} />
              <span>Explore @{personal.githubUsername}</span>
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
                  padding: '1.35rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  border: '1px solid var(--border-card)'
                }}
              >
                <div>
                  {/* Top: Language & Stars */}
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
                        color: 'var(--text-secondary)'
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
                          gap: '0.25rem',
                          fontSize: '0.78rem',
                          color: 'var(--text-muted)'
                        }}
                      >
                        <Star size={12} />
                        <span>{repo.stars}</span>
                      </span>
                      <span
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.25rem',
                          fontSize: '0.78rem',
                          color: 'var(--text-muted)'
                        }}
                      >
                        <GitFork size={12} />
                        <span>{repo.forks}</span>
                      </span>
                    </div>
                  </div>

                  {/* Repo Title */}
                  <h4
                    style={{
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      color: 'var(--text-main)',
                      marginBottom: '0.35rem',
                      wordBreak: 'break-word'
                    }}
                  >
                    {repo.name}
                  </h4>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: '0.86rem',
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
                        <span
                          key={tIdx}
                          style={{
                            fontSize: '0.72rem',
                            fontFamily: 'var(--font-mono)',
                            padding: '0.15rem 0.5rem',
                            borderRadius: 'var(--radius-full)',
                            background: 'var(--tag-bg)',
                            border: '1px solid var(--border-subtle)',
                            color: 'var(--text-muted)'
                          }}
                        >
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
                    borderTop: '1px solid var(--border-subtle)',
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
                      fontSize: '0.75rem',
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
                    className="btn btn-outline btn-sm"
                    style={{ padding: '0.3rem 0.7rem', fontSize: '0.8rem' }}
                  >
                    <Github size={13} />
                    <span>Code</span>
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
            <FolderGit2 size={28} color="var(--text-main)" style={{ margin: '0 auto 0.5rem' }} />
            <h4 style={{ fontSize: '1rem', color: 'var(--text-main)', marginBottom: '0.25rem' }}>
              No repositories in this category
            </h4>
            <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>
              Check "All" or browse directly on GitHub.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
