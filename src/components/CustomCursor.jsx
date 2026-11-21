import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Disable on touch screens or if user prefers reduced motion
    if (
      window.matchMedia('(pointer: coarse)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleOver = (e) => {
      const target = e.target;
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.interactive-target') ||
        target.getAttribute('role') === 'button'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleOver);
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <>
      {/* Primary Dot */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: isHovering ? '12px' : '8px',
          height: isHovering ? '12px' : '8px',
          borderRadius: '50%',
          backgroundColor: 'var(--accent-lime)',
          border: '1.5px solid var(--text-color)',
          transform: `translate3d(${pos.x - (isHovering ? 6 : 4)}px, ${pos.y - (isHovering ? 6 : 4)}px, 0)`,
          pointerEvents: 'none',
          zIndex: 9999,
          transition: 'width 0.15s ease, height 0.15s ease, background-color 0.15s ease',
          mixBlendMode: 'difference'
        }}
      />
      {/* Subtle Outer Follower Ring */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: isHovering ? '44px' : '26px',
          height: isHovering ? '44px' : '26px',
          borderRadius: isHovering ? '8px' : '50%',
          border: '2px solid var(--text-color)',
          transform: `translate3d(${pos.x - (isHovering ? 22 : 13)}px, ${pos.y - (isHovering ? 22 : 13)}px, 0)`,
          pointerEvents: 'none',
          zIndex: 9998,
          transition: 'transform 0.08s ease-out, width 0.2s cubic-bezier(0.16, 1, 0.3, 1), height 0.2s cubic-bezier(0.16, 1, 0.3, 1), border-radius 0.2s ease',
          opacity: 0.75
        }}
      />
    </>
  );
}
