import React from 'react';
import BackgroundAnimation from './components/BackgroundAnimation';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import GitHubProjects from './components/GitHubProjects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflowX: 'hidden' }}>
      {/* Dynamic Animated Ambient Background (Dark/Light Responsive) */}
      <BackgroundAnimation />

      {/* Sticky Glassmorphic Navbar with Theme Switcher & ScrollSpy */}
      <Navbar />

      {/* Main Portfolio Sections */}
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <GitHubProjects />
        <Experience />
        <Education />
        <Certifications />
        <Resume />
        <Contact />
      </main>

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
}
