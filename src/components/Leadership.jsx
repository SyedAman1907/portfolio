import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Award, Sparkles } from 'lucide-react';

export default function Leadership() {
  const { leadership } = portfolioData;

  return (
    <section id="leadership" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span>// 06. IMPACT & COMMUNITY</span>
          </div>
          <h2 className="section-title">
            Leadership & <span className="gradient-text">Community</span>
          </h2>
          <p className="section-subtitle">
            Student developer initiatives, technical workshops, and developer community coordination.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '1.25rem'
          }}
        >
          {leadership.map((item, index) => (
            <div
              key={index}
              className="glass-card"
              style={{
                padding: '1.35rem 1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                {/* Top Badge & Period */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '0.75rem'
                  }}
                >
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      padding: '0.24rem 0.65rem',
                      borderRadius: 'var(--radius-full)',
                      background: 'rgba(16, 185, 129, 0.1)',
                      border: '1px solid rgba(52, 211, 153, 0.25)',
                      fontSize: '0.78rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--highlight-green)',
                      fontWeight: 600
                    }}
                  >
                    <Sparkles size={12} />
                    <span>{item.badge}</span>
                  </span>

                  <span
                    style={{
                      fontSize: '0.8rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--text-dim)'
                    }}
                  >
                    {item.period}
                  </span>
                </div>

                {/* Organization Title */}
                <h3
                  style={{
                    fontSize: '1.22rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '0.25rem'
                  }}
                >
                  {item.organization}
                </h3>

                {/* Role Designation */}
                <div
                  style={{
                    fontSize: '0.92rem',
                    color: 'var(--highlight-green)',
                    fontWeight: 600,
                    marginBottom: '0.65rem'
                  }}
                >
                  {item.role}
                </div>

                {/* Description */}
                <p
                  style={{
                    fontSize: '0.92rem',
                    lineHeight: 1.62,
                    color: 'var(--text-muted)'
                  }}
                >
                  {item.description}
                </p>
              </div>

              {/* Highlights bar */}
              <div
                style={{
                  marginTop: '1.1rem',
                  paddingTop: '0.75rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  fontSize: '0.78rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--highlight-green)'
                }}
              >
                <Award size={14} />
                <span>Technical Community Coordination</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
