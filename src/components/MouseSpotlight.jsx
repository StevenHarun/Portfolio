import React, { useEffect, useState, useRef } from 'react';

/**
 * MouseSpotlight Component
 * Renders an ambient, GPU-accelerated luminous aura that smoothly tracks the
 * cursor position with fluid inertial interpolation across both Dark & Light modes.
 */
export default function MouseSpotlight({ darkMode = true }) {
  const [coords, setCoords] = useState({ x: -1000, y: -1000 });
  const [isVisible, setIsVisible] = useState(false);
  const rafRef = useRef(null);
  const targetPos = useRef({ x: -1000, y: -1000 });
  const currentPos = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    // Only activate for pointer devices with hover capability (desktops/laptops)
    const supportsHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!supportsHover) return;

    const handleMouseMove = (e) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const loop = () => {
      // Fluid linear interpolation (lerp)
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * 0.14;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * 0.14;

      setCoords({
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

  return (
    <div
      className="pointer-events-none fixed inset-0 z-20 overflow-hidden transition-opacity duration-300"
      style={{ opacity: isVisible ? 1 : 0 }}
      aria-hidden="true"
    >
      {/* Primary wide ambient radial illumination */}
      <div
        className="absolute rounded-full will-change-transform"
        style={{
          width: '580px',
          height: '580px',
          left: `${coords.x}px`,
          top: `${coords.y}px`,
          transform: 'translate(-50%, -50%)',
          background: darkMode
            ? 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(6, 182, 212, 0.08) 35%, rgba(16, 185, 129, 0.02) 55%, transparent 70%)'
            : 'radial-gradient(circle, rgba(99, 102, 241, 0.13) 0%, rgba(14, 165, 233, 0.10) 35%, rgba(168, 85, 247, 0.05) 55%, transparent 72%)',
          filter: 'blur(20px)',
        }}
      />

      {/* Inner focused core aura */}
      <div
        className="absolute rounded-full will-change-transform"
        style={{
          width: '200px',
          height: '200px',
          left: `${coords.x}px`,
          top: `${coords.y}px`,
          transform: 'translate(-50%, -50%)',
          background: darkMode
            ? 'radial-gradient(circle, rgba(129, 140, 248, 0.16) 0%, rgba(34, 211, 238, 0.08) 50%, transparent 70%)'
            : 'radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, rgba(56, 189, 248, 0.08) 50%, transparent 75%)',
          filter: 'blur(8px)',
        }}
      />
    </div>
  );
}
