import React, { useEffect, useRef, useState } from 'react';

export default function BackgroundAnimation() {
  const canvasRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isLight, setIsLight] = useState(false);

  // Detect theme changes dynamically
  useEffect(() => {
    const checkTheme = () => {
      const theme = document.documentElement.getAttribute('data-theme');
      setIsLight(theme === 'light');
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });

    return () => observer.disconnect();
  }, []);

  // Mouse move listener for soft ambient spotlight
  useEffect(() => {
    let animationFrameId;
    const handleMouseMove = (e) => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        setMousePos({ x: e.clientX, y: e.clientY });
      });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Ambient particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const particleCount = reducedMotion ? 0 : Math.min(width > 768 ? 28 : 14, 32);

    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.4 + 0.6,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2 - 0.05,
      alpha: Math.random() * 0.35 + 0.1,
      pulseSpeed: Math.random() * 0.015 + 0.005
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha += Math.sin(Date.now() * p.pulseSpeed) * 0.002;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        const clampedAlpha = Math.max(0.08, Math.min(0.4, p.alpha));
        ctx.fillStyle = isLight
          ? `rgba(0, 0, 0, ${clampedAlpha * 0.4})`
          : `rgba(255, 255, 255, ${clampedAlpha})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    if (!reducedMotion) {
      render();
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isLight]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
        backgroundColor: 'var(--bg-primary)',
        transition: 'background-color 0.3s ease'
      }}
      aria-hidden="true"
    >
      {/* Subtle radial spotlight following mouse */}
      <div
        style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          top: mousePos.y - 300,
          left: mousePos.x - 300,
          background: isLight
            ? 'radial-gradient(circle, rgba(0,0,0,0.025) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(255,255,255,0.035) 0%, transparent 70%)',
          transition: 'top 0.1s ease-out, left 0.1s ease-out',
          pointerEvents: 'none'
        }}
      />

      {/* Grid Pattern overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: isLight
            ? 'radial-gradient(rgba(0, 0, 0, 0.06) 1px, transparent 1px)'
            : 'radial-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
          opacity: 0.7
        }}
      />

      {/* Ambient Canvas Floating Particles */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          opacity: 0.85
        }}
      />
    </div>
  );
}
