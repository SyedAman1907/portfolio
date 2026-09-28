import React from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  Code,
  Code2,
  Terminal,
  Layers,
  Server,
  Database,
  BrainCircuit,
  Wrench,
  Coffee,
  FileCode,
  Globe,
  Palette,
  Smartphone,
  Cpu,
  Zap,
  HardDrive,
  Binary,
  CheckCircle2,
  Bot,
  GitBranch,
  Github,
  Send,
  Flame,
  Rocket
} from 'lucide-react';

const iconMap = {
  Coffee,
  Terminal,
  Code2,
  FileCode,
  Layers,
  Globe,
  Palette,
  Smartphone,
  Server,
  Cpu,
  Zap,
  Database,
  HardDrive,
  BrainCircuit,
  Binary,
  CheckCircle2,
  Bot,
  GitBranch,
  Github,
  Send,
  Flame,
  Rocket,
  Code
};

const skillCategories = [
  {
    key: 'programming',
    title: 'Programming',
    icon: Terminal
  },
  {
    key: 'frontend',
    title: 'Frontend',
    icon: Layers
  },
  {
    key: 'backend',
    title: 'Backend',
    icon: Server
  },
  {
    key: 'databases',
    title: 'Databases / Services',
    icon: Database
  },
  {
    key: 'aiData',
    title: 'AI / Data',
    icon: BrainCircuit
  },
  {
    key: 'tools',
    title: 'Developer Tools',
    icon: Wrench
  },
  {
    key: 'aiDevTools',
    title: 'AI Development Tools',
    icon: Bot,
    isPremium: true
  }
];

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span>// 02. TECHNICAL SKILLS</span>
          </div>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-subtitle">
            Curated toolkit honed through production engineering, AI pipelines, and hands-on system architecture.
          </p>
        </div>

        {/* Grouped Compact Glass Panels Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '1.15rem',
            marginBottom: '1.35rem'
          }}
        >
          {skillCategories.map((cat) => {
            const CatIcon = cat.icon;
            const items = skills[cat.key] || [];

            return (
              <div
                key={cat.key}
                className="glass-card"
                style={{
                  padding: '1.25rem 1.35rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.9rem',
                  border: cat.isPremium
                    ? '1px solid rgba(52, 211, 153, 0.35)'
                    : '1px solid var(--border-glass)'
                }}
              >
                {/* Compact Header */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '8px',
                        background: 'rgba(16, 185, 129, 0.12)',
                        border: '1px solid rgba(52, 211, 153, 0.25)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--highlight-green)'
                      }}
                    >
                      <CatIcon size={17} />
                    </div>
                    <h3 style={{ fontSize: '1.08rem', fontWeight: 700, color: '#ffffff' }}>
                      {cat.title}
                    </h3>
                  </div>

                  {cat.isPremium && (
                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--highlight-green)',
                        background: 'rgba(16, 185, 129, 0.12)',
                        padding: '0.18rem 0.55rem',
                        borderRadius: 'var(--radius-full)',
                        border: '1px solid rgba(52, 211, 153, 0.25)'
                      }}
                    >
                      AI Native
                    </span>
                  )}
                </div>

                {/* Compact Tags */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem'
                  }}
                >
                  {items.map((skill, idx) => {
                    const IconComponent = iconMap[skill.icon] || Code;
                    return (
                      <div
                        key={idx}
                        className="glass-panel"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          padding: '0.45rem 0.8rem',
                          cursor: 'default',
                          transition: 'all 0.2s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(52, 211, 153, 0.4)';
                          e.currentTarget.style.transform = 'translateY(-1px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                          e.currentTarget.style.transform = 'translateY(0)';
                        }}
                      >
                        <IconComponent size={15} color="var(--highlight-green)" style={{ flexShrink: 0 }} />
                        <span
                          style={{
                            fontSize: '0.88rem',
                            fontWeight: 600,
                            color: '#f1f5f9'
                          }}
                        >
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Developer Identity / Vibe Coder Special Glass Panel */}
        <div
          className="glass-card"
          style={{
            padding: '1.2rem 1.6rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            background: 'linear-gradient(135deg, rgba(7, 24, 15, 0.7) 0%, rgba(3, 10, 6, 0.85) 100%)',
            border: '1px solid rgba(52, 211, 153, 0.3)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: 'rgba(16, 185, 129, 0.15)',
                border: '1px solid var(--highlight-green)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--highlight-green)',
                boxShadow: '0 0 14px rgba(52, 211, 153, 0.35)'
              }}
            >
              <Zap size={19} />
            </div>
            <div>
              <div
                style={{
                  fontSize: '0.74rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--highlight-green)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
              >
                Developer Identity
              </div>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff' }}>
                High-Flow Autonomous Engineering & Modern AI Tooling
              </h4>
            </div>
          </div>

          {/* Premium Glowing Vibe Coder Badge */}
          <div className="badge-vibe-coder" style={{ padding: '0.5rem 1.2rem', fontSize: '0.92rem' }}>
            <span style={{ color: 'var(--highlight-green)' }}>✦</span>
            <span>VIBE CODER</span>
            <span style={{ color: '#facc15' }}>⚡</span>
          </div>
        </div>
      </div>
    </section>
  );
}
