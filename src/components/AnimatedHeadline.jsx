import React, { useEffect, useState } from 'react';

// 4-point star sparkle SVG (Gemini / Magic UI style)
const SparkleSVG = ({ size = 16, color = '#38bdf8', style = {} }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className="absolute pointer-events-none"
    style={style}
  >
    <path
      d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z"
      fill={color}
    />
  </svg>
);

export default function AnimatedHeadline({ darkMode = true, lang = 'en' }) {
  // Sparkles state with staggered lifecycle
  const [sparkles, setSparkles] = useState([
    { id: 1, x: -12, y: -8, size: 14, color: '#38bdf8', delay: '0s' },
    { id: 2, x: 92, y: -14, size: 18, color: '#818cf8', delay: '1.4s' },
    { id: 3, x: 45, y: 38, size: 12, color: '#f59e0b', delay: '2.8s' },
  ]);

  return (
    <div className="relative select-none">
      {/* 1. Ambient Multi-Hue Studio Glow Backdrop (Aceternity background glow) */}
      <div 
        className="absolute -inset-x-8 -top-10 -bottom-10 rounded-3xl opacity-50 dark:opacity-40 blur-3xl pointer-events-none -z-10 animate-pulse"
        style={{
          animationDuration: '7s',
          background: darkMode
            ? 'radial-gradient(circle at 30% 40%, rgba(99, 102, 241, 0.35) 0%, rgba(6, 182, 212, 0.22) 40%, rgba(168, 85, 247, 0.18) 75%, transparent 100%)'
            : 'radial-gradient(circle at 30% 40%, rgba(99, 102, 241, 0.22) 0%, rgba(14, 165, 233, 0.16) 40%, rgba(168, 85, 247, 0.12) 75%, transparent 100%)'
        }}
      />

      {/* 2. Main High-Impact Typography Composition */}
      <h1 className="text-3xl sm:text-5xl lg:text-[3.75rem] font-black tracking-tight leading-[1.12]">
        {lang === 'id' ? (
          <>
            {/* Verb Anchor */}
            <span className={`transition-colors duration-300 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Membangun{' '}
            </span>

            {/* Pillar 1: AI & Vision with Magic UI Sparkles */}
            <span className="relative inline-block whitespace-nowrap">
              {/* Sparkle Particles */}
              <span className="absolute -top-3 -left-3 animate-sparkle-1 pointer-events-none">
                <SparkleSVG size={14} color={darkMode ? '#38bdf8' : '#0284c7'} />
              </span>
              <span className="absolute -top-4 right-2 animate-sparkle-2 pointer-events-none">
                <SparkleSVG size={16} color={darkMode ? '#818cf8' : '#4f46e5'} />
              </span>
              <span className="absolute -bottom-2.5 right-8 animate-sparkle-3 pointer-events-none">
                <SparkleSVG size={12} color={darkMode ? '#fbbf24' : '#d97706'} />
              </span>

              <span className="hero-shiny-aurora-ai">
                Sistem Cerdas
              </span>
            </span>

            <span className={darkMode ? 'text-slate-400' : 'text-slate-400'}>, </span>
            <br className="hidden sm:inline" />

            {/* Pillar 2: Data Automation */}
            <span className="relative inline-block whitespace-nowrap">
              <span className="hero-shiny-aurora-data">
                Otomasi Data
              </span>
            </span>

            <span className={`font-semibold ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}> &amp; </span>

            {/* Pillar 3: Enterprise Scale */}
            <span className="relative inline-block whitespace-nowrap">
              <span className="hero-shiny-aurora-scale">
                Skala Enterprise
              </span>
              <span className="text-indigo-500 font-black">.</span>
            </span>
          </>
        ) : (
          <>
            {/* Verb Anchor */}
            <span className={`transition-colors duration-300 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Architecting{' '}
            </span>

            {/* Pillar 1: AI & Vision with Magic UI Sparkles */}
            <span className="relative inline-block whitespace-nowrap">
              {/* Sparkle Particles */}
              <span className="absolute -top-3 -left-3 animate-sparkle-1 pointer-events-none">
                <SparkleSVG size={14} color={darkMode ? '#38bdf8' : '#0284c7'} />
              </span>
              <span className="absolute -top-4 right-2 animate-sparkle-2 pointer-events-none">
                <SparkleSVG size={16} color={darkMode ? '#818cf8' : '#4f46e5'} />
              </span>
              <span className="absolute -bottom-2.5 right-8 animate-sparkle-3 pointer-events-none">
                <SparkleSVG size={12} color={darkMode ? '#fbbf24' : '#d97706'} />
              </span>

              <span className="hero-shiny-aurora-ai">
                Intelligent Systems
              </span>
            </span>

            <span className={darkMode ? 'text-slate-400' : 'text-slate-400'}>, </span>
            <br className="hidden sm:inline" />

            {/* Pillar 2: Data Automation */}
            <span className="relative inline-block whitespace-nowrap">
              <span className="hero-shiny-aurora-data">
                Data Automation
              </span>
            </span>

            <span className={`font-semibold ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}> &amp; </span>

            {/* Pillar 3: Enterprise Scale */}
            <span className="relative inline-block whitespace-nowrap">
              <span className="hero-shiny-aurora-scale">
                Enterprise Scale
              </span>
              <span className="text-indigo-500 font-black">.</span>
            </span>
          </>
        )}
      </h1>

      {/* 3. Aceternity Hero Highlight Beam (Fiber-optic luminous accent underline) */}
      <div className="relative mt-2 h-1 w-full max-w-md sm:max-w-lg overflow-hidden rounded-full">
        {/* Soft background line */}
        <div className={`absolute inset-0 ${darkMode ? 'bg-slate-800/60' : 'bg-slate-200/80'}`} />
        
        {/* Animated gliding light beam */}
        <div 
          className="absolute inset-y-0 w-32 rounded-full animate-beam-sweep"
          style={{
            background: darkMode
              ? 'linear-gradient(90deg, transparent 0%, #38bdf8 30%, #818cf8 70%, transparent 100%)'
              : 'linear-gradient(90deg, transparent 0%, #0284c7 30%, #6366f1 70%, transparent 100%)',
            boxShadow: darkMode
              ? '0 0 12px rgba(56, 189, 248, 0.8), 0 0 20px rgba(129, 140, 248, 0.5)'
              : '0 0 8px rgba(2, 132, 199, 0.5)'
          }}
        />
      </div>
    </div>
  );
}
