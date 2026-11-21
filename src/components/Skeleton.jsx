import React from 'react';

/**
 * Reusable Skeleton Component with subtle Neobrutalist shimmer animation.
 */
export default function Skeleton({
  width = '100%',
  height = '1rem',
  borderRadius = 'var(--radius-xs)',
  className = '',
  style = {}
}) {
  return (
    <div
      className={`skeleton-shimmer ${className}`}
      style={{
        width,
        height,
        borderRadius,
        ...style
      }}
      aria-hidden="true"
    />
  );
}

export function SkeletonCard({ height = '220px', style = {} }) {
  return (
    <div
      className="neobrutal-card"
      style={{
        padding: '1.5rem',
        height,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        ...style
      }}
      aria-hidden="true"
    >
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <Skeleton width="90px" height="24px" borderRadius="9999px" />
          <Skeleton width="40px" height="24px" borderRadius="4px" />
        </div>
        <Skeleton width="75%" height="28px" style={{ marginBottom: '0.65rem' }} />
        <Skeleton width="100%" height="16px" style={{ marginBottom: '0.45rem' }} />
        <Skeleton width="88%" height="16px" style={{ marginBottom: '1rem' }} />
        <div style={{ display: 'flex', gap: '0.4rem' }}>
          <Skeleton width="60px" height="22px" borderRadius="4px" />
          <Skeleton width="70px" height="22px" borderRadius="4px" />
          <Skeleton width="55px" height="22px" borderRadius="4px" />
        </div>
      </div>
      <div style={{ display: 'flex', gap: '0.65rem', paddingTop: '1rem', borderTop: '2px solid var(--border-color)' }}>
        <Skeleton width="48%" height="34px" borderRadius="4px" />
        <Skeleton width="48%" height="34px" borderRadius="4px" />
      </div>
    </div>
  );
}
