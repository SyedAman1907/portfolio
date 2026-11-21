import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Sun, Moon, ArrowUpRight, FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const { personal } = portfolioData;
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio_theme') || 'dark';
  });

  // Sliding tab indicator layout-aware measurement
  const navContainerRef = useRef(null);
  const tabRefs = useRef({});
  const [indicatorStyle, setIndicatorStyle] = useState({
    left: 0,
    width: 0,
    opacity: 0
  });

  // Theme synchronization
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Update sliding indicator position based on active tab
  useEffect(() => {
    const activeTabEl = tabRefs.current[activeSection];
    if (activeTabEl && navContainerRef.current) {
      const containerRect = navContainerRef.current.getBoundingClientRect();
      const tabRect = activeTabEl.getBoundingClientRect();

      setIndicatorStyle({
        left: tabRect.left - containerRect.left,
        width: tabRect.width,
        opacity: 1
      });
    }
  }, [activeSection]);

  // ScrollSpy observer
  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPos = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const handleLinkClick = (href) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: 'var(--navbar-height)',
        background: 'var(--nav-bg)',
        borderBottom: 'var(--border-width) solid var(--border-color)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        transition: 'background-color 0.2s ease'
      }}
    >
      <div
        className="container"
        style={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        {/* Brand Logo with Neobrutal Box */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('#home');
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            textDecoration: 'none'
          }}
          aria-label={`${personal.name} - Home`}
        >
          <div
            style={{
              padding: '0.35rem 0.65rem',
              background: 'var(--accent-lime)',
              color: '#000000',
              border: '2px solid var(--border-color)',
              boxShadow: '2.5px 2.5px 0px var(--shadow-color)',
              fontWeight: 900,
              fontFamily: 'var(--font-mono)',
              fontSize: '0.92rem',
              letterSpacing: '-0.02em'
            }}
          >
            {personal.monogram || 'SA'}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 900,
                fontSize: '1.05rem',
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em',
                lineHeight: 1.15
              }}
            >
              {personal.name}
            </span>
            <span
              style={{
                fontSize: '0.72rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-dim)',
                textTransform: 'uppercase',
                letterSpacing: '0.04em'
              }}
            >
              Web Dev • RGMCET
            </span>
          </div>
        </a>

        {/* Desktop Sliding Navigation Tab Bar */}
        <nav
          ref={navContainerRef}
          style={{
            display: 'none',
            alignItems: 'center',
            position: 'relative',
            background: 'var(--bg-surface)',
            border: '2px solid var(--border-color)',
            borderRadius: 'var(--radius-xs)',
            padding: '3px',
            boxShadow: '3px 3px 0px var(--shadow-color)'
          }}
          className="desktop-sliding-nav"
        >
          <style>{`
            @media (min-width: 992px) {
              .desktop-sliding-nav {
                display: flex !important;
              }
              .mobile-toggle-btn {
                display: none !important;
              }
            }
          `}</style>

          {/* Sliding Indicator Pill */}
          <div
            style={{
              position: 'absolute',
              top: '3px',
              bottom: '3px',
              left: `${indicatorStyle.left}px`,
              width: `${indicatorStyle.width}px`,
              background: 'var(--accent-lime)',
              border: '1.5px solid var(--border-color)',
              borderRadius: 'var(--radius-xs)',
              opacity: indicatorStyle.opacity,
              transition: 'left 0.28s cubic-bezier(0.16, 1, 0.3, 1), width 0.28s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s ease',
              pointerEvents: 'none',
              zIndex: 1
            }}
          />

          {NAV_ITEMS.map((item) => {
            const sectionKey = item.href.substring(1);
            const isActive = activeSection === sectionKey;

            return (
              <a
                key={item.label}
                ref={(el) => (tabRefs.current[sectionKey] = el)}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.href);
                }}
                style={{
                  position: 'relative',
                  zIndex: 2,
                  padding: '0.45rem 0.95rem',
                  fontSize: '0.86rem',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: isActive ? 800 : 600,
                  color: isActive ? '#000000' : 'var(--text-primary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.02em',
                  transition: 'color 0.2s ease',
                  cursor: 'pointer'
                }}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right Actions: Theme Switcher & Resume & Mobile Menu Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {/* Neobrutalist Theme Toggle */}
          <button
            onClick={toggleTheme}
            style={{
              width: '38px',
              height: '38px',
              background: 'var(--bg-surface)',
              border: '2px solid var(--border-color)',
              boxShadow: '2.5px 2.5px 0px var(--shadow-color)',
              color: 'var(--text-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'transform 0.15s ease, box-shadow 0.15s ease'
            }}
            aria-label={theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
            title={theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
          >
            {theme === 'dark' ? (
              <Sun size={18} color="var(--accent-lime)" />
            ) : (
              <Moon size={18} color="#000000" />
            )}
          </button>

          {/* Resume CTA (Desktop) */}
          <a
            href={personal.resumePdf}
            download="Syed_Aman_Mirzanullah_Resume.pdf"
            className="btn-brutal btn-brutal-lime btn-brutal-sm"
            style={{ display: 'none' }}
            id="nav-resume-btn"
          >
            <style>{`
              @media (min-width: 992px) {
                #nav-resume-btn {
                  display: inline-flex !important;
                }
              }
            `}</style>
            <FileText size={14} />
            <span>Resume</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle-btn"
            style={{
              width: '40px',
              height: '40px',
              background: 'var(--bg-surface)',
              border: '2px solid var(--border-color)',
              boxShadow: '3px 3px 0px var(--shadow-color)',
              color: 'var(--text-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 'var(--navbar-height)',
            left: 0,
            right: 0,
            bottom: 0,
            background: 'var(--bg-primary)',
            borderTop: '2px solid var(--border-color)',
            padding: '2rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            zIndex: 99,
            overflowY: 'auto'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.href);
                  }}
                  style={{
                    padding: '0.9rem 1.15rem',
                    background: isActive ? 'var(--accent-lime)' : 'var(--bg-surface)',
                    color: isActive ? '#000000' : 'var(--text-primary)',
                    border: '2px solid var(--border-color)',
                    boxShadow: '3px 3px 0px var(--shadow-color)',
                    fontSize: '1.15rem',
                    fontWeight: 900,
                    textTransform: 'uppercase',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <span>{item.label}</span>
                  <ArrowUpRight size={18} />
                </a>
              );
            })}
          </div>

          <div
            style={{
              paddingTop: '1.5rem',
              borderTop: '2px solid var(--border-color)'
            }}
          >
            <a
              href={personal.resumePdf}
              download="Syed_Aman_Mirzanullah_Resume.pdf"
              className="btn-brutal btn-brutal-lime"
              style={{ width: '100%' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              <FileText size={16} />
              <span>Download Official Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
