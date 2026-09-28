import React, { useEffect, useRef, useState } from 'react';

export default function BackgroundAnimation() {
  const canvasRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

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

  // Subtle floating ambient particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const particleCount = Math.min(width > 768 ? 32 : 16, 40);
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25 - 0.1,
      alpha: Math.random() * 0.4 + 0.15,
      pulseSpeed: Math.random() * 0.015 + 0.005
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha += Math.sin(Date.now() * p.pulseSpeed) * 0.003;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(52, 211, 153, ${Math.max(0.08, Math.min(0.5, p.alpha))})`;
        ctx.shadowColor = '#10b981';
        ctx.shadowBlur = 6;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
        background: '#030806'
      }}
    >
      {/* Layer 1: Base Dark Gradient Falloff */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 90% 80% at 50% -10%, #082115 0%, #04100a 45%, #030806 80%)',
          opacity: 0.95
        }}
      />

      {/* Layer 2: Large Blurred Emerald Gradient Orbs */}
      <div
        style={{
          position: 'absolute',
          top: '5%',
          left: '18%',
          width: '50vw',
          height: '50vw',
          maxWidth: '520px',
          maxHeight: '520px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, rgba(6, 35, 22, 0.04) 50%, transparent 70%)',
          filter: 'blur(95px)',
          animation: 'floatSlow 24s ease-in-out infinite alternate',
          transform: 'translate3d(0,0,0)'
        }}
      />

      <div
        style={{
          position: 'absolute',
          top: '40%',
          right: '8%',
          width: '45vw',
          height: '45vw',
          maxWidth: '480px',
          maxHeight: '480px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(5, 150, 105, 0.1) 0%, rgba(4, 25, 15, 0.03) 55%, transparent 70%)',
          filter: 'blur(110px)',
          animation: 'floatSlow 28s ease-in-out infinite alternate-reverse',
          transform: 'translate3d(0,0,0)'
        }}
      />

      <div
        style={{
          position: 'absolute',
          bottom: '5%',
          left: '10%',
          width: '40vw',
          height: '40vw',
          maxWidth: '420px',
          maxHeight: '420px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(45, 212, 191, 0.06) 0%, transparent 65%)',
          filter: 'blur(85px)',
          animation: 'floatSlow 32s ease-in-out infinite alternate',
          transform: 'translate3d(0,0,0)'
        }}
      />

      {/* Layer 3: Interactive Mouse Follow Subtle Glow */}
      <div
        style={{
          position: 'fixed',
          top: mousePos.y - 200,
          left: mousePos.x - 200,
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(52, 211, 153, 0.06) 0%, rgba(16, 185, 129, 0.02) 40%, transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(45px)',
          opacity: mousePos.x > 0 ? 1 : 0,
          transition: 'opacity 0.4s ease'
        }}
      />

      {/* Layer 4: Dev Grid Pattern with Vignette */}
      <div className="bg-grid" />

      {/* Layer 5: Ambient Floating Particles */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%'
        }}
      />
    </div>
  );
}
