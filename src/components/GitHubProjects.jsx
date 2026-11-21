import React from 'react';
import { useGitHubProjects } from '../hooks/useGitHubProjects';
import { portfolioData } from '../data/portfolioData';
import ScrambleText from './ScrambleText';
import { SkeletonCard } from './Skeleton';
import {
  Github,
  Star,
  GitFork,
  Code2,
  Calendar,
  AlertCircle,
  FolderGit2,
  ArrowRight,
  ExternalLink
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
    <section id="github-projects" className="section" style={{ borderTop: 'var(--border-width) solid var(--border-color)', paddingTop: '4rem' }}>
      <div className="container">
        {/* Compact Neobrutal Header Box */}
        <div
          className="neobrutal-card"
          style={{
            padding: '1.75rem 2rem',
            marginBottom: '2.25rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.25rem',
            background: 'var(--bg-surface)'
          }}
        >
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                fontSize: '0.8rem',
                fontFamily: 'var(--font-mono)',
                fontWeight: 800,
                color: 'var(--text-dim)',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                marginBottom: '0.35rem'
              }}
            >
              <Github size={15} />
              <span>LIVE REPOSITORY FEED • @{personal.githubUsername}</span>
            </div>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 900, textTransform: 'uppercase', lineHeight: 1.15 }}>
              <ScrambleText text="OPEN-SOURCE REPOSITORIES" />
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
              Dynamic synchronization with active GitHub codebases, public tools, and experiments.
            </p>
          </div>

          <a
            href={personal.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-brutal btn-brutal-primary btn-brutal-sm"
          >
            <Github size={15} />
            <span>@{personal.githubUsername}</span>
            <ExternalLink size={13} />
          </a>
        </div>

        {/* Filter Tabs */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.55rem',
            marginBottom: '2rem',
            overflowX: 'auto',
            paddingBottom: '0.5rem',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {FILTER_TABS.map((tab) => {
            const isActive = activeFilter === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`btn-brutal btn-brutal-sm ${isActive ? 'btn-brutal-lime' : 'btn-brutal-ghost'}`}
                style={{ whiteSpace: 'nowrap' }}
              >
                <span>{tab}</span>
              </button>
            );
          })}
        </div>

        {/* Loading Skeleton Shimmer Placeholders */}
        {loading && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: '1.35rem'
            }}
          >
            {[1, 2, 3, 4, 5, 6].map((idx) => (
              <SkeletonCard key={idx} height="230px" />
            ))}
          </div>
        )}

        {/* Error Fallback */}
        {!loading && error && (
          <div
            className="neobrutal-card"
            style={{
              padding: '2rem',
              textAlign: 'center',
              maxWidth: '560px',
              margin: '0 auto',
              background: 'var(--bg-card)'
            }}
          >
            <AlertCircle size={32} color="var(--accent-lime)" style={{ margin: '0 auto 0.75rem' }} />
            <h4 style={{ fontSize: '1.2rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.35rem' }}>
              Repositories Cache Standby
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
              Direct connection reached a temporary rate limit. Explore live repositories on GitHub:
            </p>
            <a
              href={personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brutal btn-brutal-lime btn-brutal-sm"
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
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: '1.35rem'
            }}
          >
            {filteredProjects.map((repo) => (
              <div
                key={repo.id}
                className="neobrutal-card"
                style={{
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  background: 'var(--bg-card)'
                }}
              >
                <div>
                  {/* Top Bar: Language & Metrics */}
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
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        fontSize: '0.78rem',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 800,
                        background: 'var(--accent-lime)',
                        color: '#000000',
                        border: '1.5px solid var(--border-color)',
                        padding: '0.15rem 0.55rem'
                      }}
                    >
                      <Code2 size={13} />
                      <span>{repo.language}</span>
                    </span>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 700 }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <Star size={13} />
                        <span>{repo.stars}</span>
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <GitFork size={13} />
                        <span>{repo.forks}</span>
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h4
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 800,
                      color: 'var(--text-primary)',
                      marginBottom: '0.45rem',
                      wordBreak: 'break-word',
                      lineHeight: 1.2
                    }}
                  >
                    {repo.name}
                  </h4>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: '0.88rem',
                      lineHeight: 1.6,
                      color: 'var(--text-muted)',
                      marginBottom: '1rem'
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
                        marginBottom: '1rem'
                      }}
                    >
                      {repo.topics.slice(0, 4).map((topic, tIdx) => (
                        <span
                          key={tIdx}
                          style={{
                            fontSize: '0.74rem',
                            fontFamily: 'var(--font-mono)',
                            padding: '0.15rem 0.5rem',
                            border: '1.5px solid var(--border-color)',
                            background: 'var(--bg-surface)',
                            fontWeight: 600
                          }}
                        >
                          #{topic}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer Action */}
                <div
                  style={{
                    paddingTop: '0.85rem',
                    borderTop: '2px solid var(--border-color)',
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
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 700
                    }}
                  >
                    <Calendar size={12} />
                    <span>Updated {formatDate(repo.updatedAt)}</span>
                  </div>

                  <a
                    href={repo.htmlUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-brutal btn-brutal-sm btn-brutal-ghost"
                    style={{ padding: '0.3rem 0.75rem', fontSize: '0.82rem' }}
                  >
                    <Github size={14} />
                    <span>View Code</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && filteredProjects.length === 0 && (
          <div
            className="neobrutal-card"
            style={{
              padding: '2.5rem',
              textAlign: 'center',
              maxWidth: '440px',
              margin: '0 auto',
              background: 'var(--bg-card)'
            }}
          >
            <FolderGit2 size={32} color="var(--accent-lime)" style={{ margin: '0 auto 0.75rem' }} />
            <h4 style={{ fontSize: '1.1rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.35rem' }}>
              No repositories in this category
            </h4>
            <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)' }}>
              Select "All" or browse directly on GitHub.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
