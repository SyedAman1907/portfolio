import React, { useState } from 'react';
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
  Award,
  Calendar,
  ShieldCheck,
  Sparkles
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
  Award,
  Calendar,
  ShieldCheck,
  Sparkles,
  Code
};

export default function Skills() {
  const { skills } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all'
    ? skills.items
    : skills.items.filter(item => item.category === activeCategory);

  return (
    <section id="skills" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span>// 02. TECHNICAL COMPETENCIES</span>
          </div>
          <h2 className="section-title">
            Technical <span className="monochrome-gradient">Skills</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive overview of programming languages, frontend/backend technologies, databases, and developer workflows I actively use.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0.45rem',
            marginBottom: '2.25rem'
          }}
        >
          {skills.categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.84rem',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: isActive ? 700 : 500,
                  background: isActive ? 'var(--accent-primary)' : 'var(--bg-card)',
                  color: isActive ? 'var(--accent-contrast)' : 'var(--text-muted)',
                  border: isActive ? '1px solid var(--accent-primary)' : '1px solid var(--border-card)',
                  cursor: 'pointer',
                  transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: isActive ? 'var(--shadow-card)' : 'none'
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Interactive Skills Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 255px), 1fr))',
            gap: '1.15rem'
          }}
        >
          {filteredItems.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Code;

            return (
              <div
                key={`${item.name}-${index}`}
                className="glass-card"
                style={{
                  padding: '1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '0.85rem'
                }}
              >
                <div>
                  {/* Top Bar: Icon & Level Tag */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '0.85rem'
                    }}
                  >
                    <div
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: 'var(--radius-sm)',
                        background: 'var(--tag-bg)',
                        border: '1px solid var(--tag-border)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--text-main)'
                      }}
                    >
                      <IconComponent size={20} />
                    </div>

                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontFamily: 'var(--font-mono)',
                        padding: '0.18rem 0.55rem',
                        borderRadius: 'var(--radius-full)',
                        background: 'var(--tag-bg)',
                        border: '1px solid var(--border-subtle)',
                        color: 'var(--text-dim)',
                        fontWeight: 600
                      }}
                    >
                      {item.level}
                    </span>
                  </div>

                  {/* Skill Name */}
                  <h3
                    style={{
                      fontSize: '1.02rem',
                      fontWeight: 700,
                      color: 'var(--text-main)',
                      marginBottom: '0.35rem'
                    }}
                  >
                    {item.name}
                  </h3>

                  {/* Skill Description */}
                  <p
                    style={{
                      fontSize: '0.82rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.55
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
