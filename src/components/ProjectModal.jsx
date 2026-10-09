import React, { useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  GitBranch, 
  Cpu, 
  Award, 
  Building2, 
  Calendar, 
  UserCheck 
} from 'lucide-react';
import { getTechLogo } from './TechLogos';

export default function ProjectModal({ project, onClose, darkMode = true, lang = 'en' }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      {/* Click outside backdrop */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Modal Dialog Content */}
      <div 
        className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl p-6 sm:p-8 transition-all border shadow-2xl z-10 ${
          darkMode 
            ? 'bg-slate-900 border-slate-800 text-slate-100 shadow-indigo-500/10' 
            : 'bg-white border-slate-200 text-slate-900 shadow-slate-300'
        }`}
      >
        {/* Top Header Bar */}
        <div className={`flex items-start justify-between gap-4 pb-5 border-b ${
          darkMode ? 'border-slate-700/40' : 'border-slate-200'
        }`}>
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                darkMode ? 'bg-indigo-500/15 border-indigo-500/30 text-indigo-400' : 'bg-indigo-50 border-indigo-200 text-indigo-700'
              }`}>
                {project.badge}
              </span>
              <span className={`px-3 py-1 rounded-full text-xs font-medium inline-flex items-center gap-1 font-mono ${
                darkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'
              }`}>
                <Calendar className={`w-3.5 h-3.5 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`} />
                {project.year}
              </span>
            </div>
            <h2 className={`text-xl sm:text-3xl font-extrabold tracking-tight ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className={`p-2 rounded-xl border transition ${
              darkMode 
                ? 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700' 
                : 'bg-slate-100 hover:bg-slate-200 text-slate-600 border-slate-200'
            }`}
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Project Meta Info Strip */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-3 py-4 border-b text-xs ${
          darkMode ? 'border-slate-800 text-slate-300' : 'border-slate-200 text-slate-600'
        }`}>
          <div className="flex items-center gap-2">
            <UserCheck className={`w-4 h-4 shrink-0 ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`} />
            <span><strong>Role:</strong> {project.role}</span>
          </div>
          <div className="flex items-center gap-2">
            <Building2 className={`w-4 h-4 shrink-0 ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`} />
            <span><strong>Context:</strong> {project.organization}</span>
          </div>
        </div>

        {/* Body Content */}
        <div className="py-6 space-y-6">
          
          {/* Executive Overview */}
          <div className="space-y-2">
            <h3 className={`text-xs font-bold uppercase tracking-wider ${
              darkMode ? 'text-indigo-400' : 'text-indigo-600'
            }`}>
              Executive Summary & Challenge
            </h3>
            <p className={`text-sm sm:text-base leading-relaxed ${
              darkMode ? 'text-slate-300' : 'text-slate-700'
            }`}>
              {project.description}
            </p>
          </div>

          {/* Key Metrics Banner */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="space-y-3">
              <h3 className={`text-xs font-bold uppercase tracking-wider ${
                darkMode ? 'text-slate-400' : 'text-slate-500'
              }`}>
                Key Performance Indicators & Outcomes
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {project.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className={`p-3.5 rounded-2xl border text-center ${
                      darkMode
                        ? 'bg-slate-800/60 border-slate-700/60'
                        : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <div className={`text-lg sm:text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${
                      darkMode ? 'from-indigo-400 to-cyan-400' : 'from-indigo-600 to-cyan-600'
                    }`}>
                      {metric.value}
                    </div>
                    <div className={`text-[11px] mt-0.5 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technical Workflow */}
          {project.workflow && (
            <div className="space-y-3">
              <h3 className={`text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 ${
                darkMode ? 'text-slate-400' : 'text-slate-500'
              }`}>
                <GitBranch className={`w-3.5 h-3.5 ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`} />
                <span>Methodology & Technical Workflow</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.workflow.map((step) => (
                  <div
                    key={step.title}
                    className={`p-4 rounded-2xl border ${
                      darkMode
                        ? 'bg-slate-800/40 border-slate-800'
                        : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <div className={`text-xs font-bold mb-1 ${
                      darkMode ? 'text-indigo-400' : 'text-indigo-600'
                    }`}>{step.title}</div>
                    <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Highlights & Deliverables */}
          {project.highlights && (
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>Key Deliverables & Core Achievements</span>
              </h3>
              <ul className="space-y-2">
                {project.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technology Badges with Authentic Logos */}
          <div className="space-y-2.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-indigo-400" />
              <span>Technologies & Tools Applied</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-medium border ${
                    darkMode
                      ? 'bg-slate-800 text-slate-300 border-slate-700'
                      : 'bg-slate-100 text-slate-700 border-slate-200'
                  }`}
                >
                  {getTechLogo(tech, "w-4 h-4 shrink-0")}
                  <span>{tech}</span>
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer with External Links */}
        <div className="pt-5 border-t border-slate-700/40 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-slate-400 font-mono">
            Executive Case Profile • {project.id}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {project.links?.publication && (
              <a
                href={project.links.publication}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:brightness-110 text-white font-semibold text-xs shadow-md transition"
              >
                <span>Read on IEEE Xplore</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 shadow-md transition"
              >
                <span>View GitHub Repository</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.links?.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:brightness-110 text-white font-semibold text-xs shadow-md transition"
              >
                <span>Open Live Report</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            <button
              onClick={onClose}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold border transition ${
                darkMode
                  ? 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                  : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
              }`}
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
