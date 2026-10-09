import React, { useEffect, useRef } from 'react';

/**
 * SmoothAmbientGlow Component
 * High-performance, pure GPU-accelerated ambient glow that follows mouse movement
 * with ZERO React re-renders and ZERO lag.
 * Positioned in the background (z-0) behind all cards and text so it illuminates
 * the canvas texture without ever obstructing content readability.
 */
export default function SmoothAmbientGlow({ darkMode = true }) {
  const containerRef = useRef(null);
  const glowRef = useRef(null);
  const rafRef = useRef(null);
  const mousePos = useRef({ x: -1000, y: -1000 });
  const currentPos = useRef({ x: -1000, y: -1000 });
  const isInitialized = useRef(false);

  useEffect(() => {
    // Only activate for pointer devices with hover capability
    const supportsHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!supportsHover) return;

    const handlePointerMove = (e) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;

      if (!isInitialized.current) {
        isInitialized.current = true;
        currentPos.current.x = e.clientX;
        currentPos.current.y = e.clientY;
        if (containerRef.current) {
          containerRef.current.style.opacity = '1';
        }
      }
    };

    const handlePointerLeave = () => {
      if (containerRef.current) {
        containerRef.current.style.opacity = '0';
      }
    };

    const handlePointerEnter = () => {
      if (isInitialized.current && containerRef.current) {
        containerRef.current.style.opacity = '1';
      }
    };

    const loop = () => {
      if (isInitialized.current && glowRef.current) {
        // High responsiveness factor (0.24) ensures fast, responsive tracking with silky deceleration
        currentPos.current.x += (mousePos.current.x - currentPos.current.x) * 0.24;
        currentPos.current.y += (mousePos.current.y - currentPos.current.y) * 0.24;

        const x = Math.round(currentPos.current.x * 10) / 10;
        const y = Math.round(currentPos.current.y * 10) / 10;

        // Direct hardware transform without React overhead
        glowRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }

      rafRef.current = requestAnimationFrame(loop);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    document.addEventListener('pointerleave', handlePointerLeave);
    document.addEventListener('pointerenter', handlePointerEnter);
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('pointerleave', handlePointerLeave);
      document.removeEventListener('pointerenter', handlePointerEnter);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden transition-opacity duration-300 opacity-0"
      aria-hidden="true"
    >
      <div
        ref={glowRef}
        className="absolute top-0 left-0 will-change-transform pointer-events-none"
        style={{
          width: '600px',
          height: '600px',
          marginLeft: '-300px',
          marginTop: '-300px',
          background: darkMode
            ? 'radial-gradient(circle, rgba(99, 102, 241, 0.16) 0%, rgba(6, 182, 212, 0.08) 38%, rgba(16, 185, 129, 0.02) 58%, transparent 72%)'
            : 'radial-gradient(circle, rgba(99, 102, 241, 0.14) 0%, rgba(14, 165, 233, 0.10) 35%, rgba(168, 85, 247, 0.05) 55%, transparent 72%)',
          filter: 'blur(30px)',
        }}
      />
    </div>
  );
}
