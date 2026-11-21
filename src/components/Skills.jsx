import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import ScrambleText from './ScrambleText';
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
    <section id="skills" className="section" style={{ borderTop: 'var(--border-width) solid var(--border-color)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag-box">
            <span>// 02. COMPETENCIES</span>
          </div>
          <h2 className="section-title">
            <ScrambleText text="TECHNICAL SKILLS" />
          </h2>
          <p className="section-subtitle">
            Categorized toolkit of programming languages, frontend/backend engineering, database architectures, and developer workflows.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0.65rem',
            marginBottom: '2.75rem'
          }}
        >
          {skills.categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`btn-brutal btn-brutal-sm ${isActive ? 'btn-brutal-lime' : 'btn-brutal-ghost'}`}
              >
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Neobrutalist Skills Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 265px), 1fr))',
            gap: '1.25rem'
          }}
        >
          {filteredItems.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Code;

            return (
              <div
                key={`${item.name}-${index}`}
                className="neobrutal-card"
                style={{
                  padding: '1.45rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  background: 'var(--bg-card)'
                }}
              >
                <div>
                  {/* Top Bar: Icon & Level Badge */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1rem'
                    }}
                  >
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        background: 'var(--accent-lime)',
                        color: '#000000',
                        border: '2px solid var(--border-color)',
                        boxShadow: '2.5px 2.5px 0px var(--shadow-color)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <IconComponent size={22} />
                    </div>

                    <span
                      style={{
                        fontSize: '0.74rem',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 800,
                        padding: '0.2rem 0.6rem',
                        border: '1.5px solid var(--border-color)',
                        background: 'var(--bg-surface)',
                        color: 'var(--text-primary)',
                        textTransform: 'uppercase'
                      }}
                    >
                      {item.level}
                    </span>
                  </div>

                  {/* Skill Title */}
                  <h3
                    style={{
                      fontSize: '1.15rem',
                      fontWeight: 800,
                      color: 'var(--text-primary)',
                      marginBottom: '0.4rem',
                      letterSpacing: '-0.01em'
                    }}
                  >
                    {item.name}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: '0.86rem',
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
