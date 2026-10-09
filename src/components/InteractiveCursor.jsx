import React, { useEffect, useState, useRef } from 'react';

/**
 * InteractiveCursor Component
 * Minimalist, high-precision cursor ring that smoothly tracks the pointer
 * and expands subtly when hovering over clickable elements (buttons, links, cards).
 * Zero blurry background fog, zero text tinting, 100% non-intrusive.
 */
export default function InteractiveCursor({ darkMode = true }) {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const targetPos = useRef({ x: -100, y: -100 });
  const currentPos = useRef({ x: -100, y: -100 });
  const rafRef = useRef(null);

  useEffect(() => {
    // Only activate on pointer devices with fine control (mouse/trackpad)
    const supportsHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!supportsHover) return;

    const handleMouseMove = (e) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      // Check if hovering an interactive target
      const target = e.target;
      const isInteractive = target && (
        target.closest('button') ||
        target.closest('a') ||
        target.closest('[role="button"]') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('.interactive-target')
      );
      setIsHovered(!!isInteractive);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const loop = () => {
      // Smooth linear interpolation for fluid trailing ring
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * 0.22;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * 0.22;

      setPos({
        x: Math.round(currentPos.current.x * 10) / 10,
        y: Math.round(currentPos.current.y * 10) / 10,
      });

      rafRef.current = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  const ringSize = isHovered ? 40 : 24;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden transition-opacity duration-300"
      style={{ opacity: isVisible ? 1 : 0 }}
      aria-hidden="true"
    >
      {/* Precision hairline follower ring */}
      <div
        className="absolute rounded-full will-change-transform transition-all duration-150 ease-out"
        style={{
          width: `${ringSize}px`,
          height: `${ringSize}px`,
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          transform: 'translate(-50%, -50%)',
          borderWidth: isHovered ? '2px' : '1.5px',
          borderColor: isHovered
            ? darkMode
              ? 'rgba(99, 102, 241, 0.75)'
              : 'rgba(79, 70, 229, 0.8)'
            : darkMode
              ? 'rgba(148, 163, 184, 0.4)'
              : 'rgba(100, 116, 139, 0.45)',
          backgroundColor: isHovered
            ? darkMode
              ? 'rgba(99, 102, 241, 0.08)'
              : 'rgba(99, 102, 241, 0.07)'
            : 'transparent',
          boxShadow: isHovered
            ? darkMode
              ? '0 0 16px rgba(99, 102, 241, 0.25)'
              : '0 0 12px rgba(99, 102, 241, 0.2)'
            : 'none',
        }}
      />

      {/* Tiny centered micro dot */}
      <div
        className="absolute rounded-full will-change-transform"
        style={{
          width: '4px',
          height: '4px',
          left: `${targetPos.current.x}px`,
          top: `${targetPos.current.y}px`,
          transform: 'translate(-50%, -50%)',
          backgroundColor: darkMode ? '#818cf8' : '#4f46e5',
          opacity: isHovered ? 0 : 0.7,
          transition: 'opacity 0.15s ease',
        }}
      />
    </div>
  );
}
