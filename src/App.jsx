import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProofStrip from './components/ProofStrip';
import StatsBar from './components/StatsBar';
import ProjectsShowcase from './components/ProjectsShowcase';
import CertificationsAndHonors from './components/CertificationsAndHonors';
import ExperienceTimeline from './components/ExperienceTimeline';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import ResumeModal from './components/ResumeModal';
import Toast from './components/Toast';
import SmoothAmbientGlow from './components/SmoothAmbientGlow';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return true; // Default to dark executive aesthetic
  });

  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('lang');
    if (saved === 'id' || saved === 'en') return saved;
    return 'en'; // Default to English, with Indonesian toggle
  });

  const [selectedProject, setSelectedProject] = useState(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [resumeInitialMode, setResumeInitialMode] = useState('executive');
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 3000);
  };

  const handleOpenResume = (mode = 'executive') => {
    setResumeInitialMode(mode);
    setIsResumeOpen(true);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans relative ${
      darkMode ? 'mesh-bg-dark text-slate-100' : 'mesh-bg-light text-slate-900'
    }`}>
      {/* Zero-Lag Background Ambient Glow (GPU-Accelerated, sits behind content) */}
      <SmoothAmbientGlow darkMode={darkMode} />

      {/* Top Navigation */}
      <Navbar 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        lang={lang}
        setLang={setLang}
        onOpenResume={() => handleOpenResume('executive')}
        onOpenAtsResume={() => handleOpenResume('ats')}
      />

      {/* Main Narrative Flow (Positioned above background glow) */}
      <main className="relative z-10 space-y-4 sm:space-y-6">
        <Hero 
          darkMode={darkMode} 
          lang={lang}
          onOpenResume={() => handleOpenResume('executive')}
          onOpenAtsResume={() => handleOpenResume('ats')}
        />

        <ProofStrip 
          darkMode={darkMode}
          lang={lang}
        />

        <StatsBar 
          darkMode={darkMode} 
          lang={lang}
        />

        <ExperienceTimeline 
          darkMode={darkMode}
          lang={lang}
        />

        <ProjectsShowcase 
          onSelectProject={(project) => setSelectedProject(project)}
          darkMode={darkMode}
          lang={lang}
        />

        <CertificationsAndHonors 
          darkMode={darkMode}
          lang={lang}
        />

        <SkillsSection 
          darkMode={darkMode}
          lang={lang}
        />

        <ContactSection 
          darkMode={darkMode}
          lang={lang}
          showToast={showToast}
        />
      </main>

      {/* Executive Footer */}
      <div className="relative z-10">
        <Footer 
          darkMode={darkMode}
          lang={lang}
          onOpenResume={() => handleOpenResume('executive')}
          onOpenAtsResume={() => handleOpenResume('ats')}
        />
      </div>

      {/* Project Case Study Deep-Dive Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          darkMode={darkMode}
          lang={lang}
        />
      )}

      {/* Interactive Printable Curriculum Vitae Modal */}
      <ResumeModal 
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        darkMode={darkMode}
        lang={lang}
        initialMode={resumeInitialMode}
      />

      {/* Toast Notification */}
      <Toast 
        message={toastMessage}
        onClose={() => setToastMessage('')}
      />
    </div>
  );
}
