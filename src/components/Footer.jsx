import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { translations } from '../data/translations';
import { ArrowUp, Sparkles, Download, FileText } from 'lucide-react';

export default function Footer({ 
  darkMode, 
  lang = 'en', 
  onOpenResume, 
  onOpenAtsResume 
}) {
  const t = translations[lang]?.footer || translations.en.footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`border-t transition-colors py-12 px-4 sm:px-6 ${
      darkMode ? 'border-slate-800 bg-slate-950/70' : 'border-slate-200 bg-slate-50/80'
    }`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-400">
        
        {/* Left: Branding & Status */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-500 flex items-center justify-center font-bold text-white text-xs">
            SH
          </div>
          <div>
            <span className={`font-semibold block ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              {personalInfo.name}
            </span>
            <span className="text-[11px] text-slate-400">
              {personalInfo.degree} • {personalInfo.university}
            </span>
          </div>
        </div>

        {/* Center: Quote & Track record */}
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 font-medium text-[11px]">
            <Sparkles className="w-3 h-3" />
            <span>{t.tagline}</span>
          </span>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-3 sm:gap-4 flex-wrap justify-center">
          <a
            href="/Steven_Harun_Samba_CV_ATS.pdf"
            download="Steven_Harun_Samba_CV_ATS.pdf"
            className="hover:text-emerald-400 transition flex items-center gap-1 font-semibold text-emerald-400"
            title="Download ATS CV PDF"
          >
            <Download className="w-3 h-3" />
            <span>{t.downloadAts}</span>
          </a>

          <span>•</span>

          <button
            onClick={onOpenResume}
            className="hover:text-indigo-400 transition flex items-center gap-1"
          >
            <FileText className="w-3 h-3" />
            <span>{t.viewCv}</span>
          </button>

          <span>•</span>

          <button
            onClick={scrollToTop}
            className={`p-2 rounded-xl border transition flex items-center gap-1.5 ${
              darkMode 
                ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white' 
                : 'bg-white border-slate-200 text-slate-700 hover:text-slate-900'
            }`}
            title="Back to Top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
