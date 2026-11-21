import React, { useState, useEffect, useRef } from 'react';

const DEFAULT_CHARS = '!@#$%^&*()_+-=[]{}|;:,.<>?/~0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

/**
 * ScrambleText Component
 * Animates text with a scramble-and-decode effect.
 * Resolves character-by-character into the target string.
 */
export default function ScrambleText({
  text,
  as: Component = 'span',
  className = '',
  style = {},
  scrambleSpeed = 28,
  revealDelay = 40,
  triggerOnHover = false,
  triggerOnView = true,
  chars = DEFAULT_CHARS
}) {
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);
  const elementRef = useRef(null);
  const hasAnimatedRef = useRef(false);
  const intervalRef = useRef(null);

  const startScramble = () => {
    // Check reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayText(text);
      return;
    }

    if (isAnimating) return;
    setIsAnimating(true);

    const length = text.length;
    let iteration = 0;
    const maxIterations = length;

    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText(() => {
        return text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('');
      });

      iteration += 1 / (revealDelay / scrambleSpeed);

      if (iteration >= maxIterations) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setDisplayText(text);
        setIsAnimating(false);
      }
    }, scrambleSpeed);
  };

  useEffect(() => {
    // Handle triggers on viewport enter
    if (!triggerOnView) {
      startScramble();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimatedRef.current) {
            hasAnimatedRef.current = true;
            startScramble();
          }
        });
      },
      { threshold: 0.15 }
    );

    const currentEl = elementRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) observer.unobserve(currentEl);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [text, triggerOnView]);

  const handleMouseEnter = () => {
    if (triggerOnHover && !isAnimating) {
      startScramble();
    }
  };

  return (
    <Component
      ref={elementRef}
      className={`scramble-text ${className}`}
      style={{
        display: 'inline-block',
        fontVariantNumeric: 'tabular-nums',
        ...style
      }}
      onMouseEnter={handleMouseEnter}
    >
      {displayText}
    </Component>
  );
}
