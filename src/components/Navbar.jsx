import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { translations } from '../data/translations';
import { Moon, Sun, Menu, X, ArrowUpRight, FileText, Download, Globe } from 'lucide-react';

export default function Navbar({ 
  darkMode, 
  setDarkMode, 
  lang = 'en', 
  setLang, 
  onOpenResume, 
  onOpenAtsResume 
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang]?.nav || translations.en.nav;

  const desktopNavLinks = [
    { label: t.home, href: '#overview' },
    { label: t.experience, href: '#timeline' },
    { label: t.projects, href: '#projects' },
    { label: t.certifications, href: '#certifications' },
    { label: t.skills, href: '#skills' },
  ];

  const mobileNavLinks = [
    { label: t.home, href: '#overview' },
    { label: t.proof, href: '#proof' },
    { label: t.experience, href: '#timeline' },
    { label: t.projects, href: '#projects' },
    { label: t.certifications, href: '#certifications' },
    { label: t.skills, href: '#skills' },
    { label: t.contact, href: '#contact' },
  ];

  return (
    <header className="sticky top-3 sm:top-4 z-40 max-w-7xl mx-auto px-3 sm:px-6">
      <div className={`rounded-2xl transition-all duration-300 ${
        darkMode 
          ? 'bg-slate-900/90 border border-slate-800/80 shadow-2xl shadow-black/40' 
          : 'bg-white/95 border border-slate-200/80 shadow-xl shadow-slate-200/50'
      } backdrop-blur-xl px-3.5 sm:px-5 py-2.5 sm:py-3 flex items-center justify-between gap-3 sm:gap-4`}>
        
        {/* Brand Monogram & Name */}
        <a href="#overview" className="flex items-center gap-2.5 group shrink-0">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-500 flex items-center justify-center font-extrabold text-white text-sm shadow-md shadow-indigo-500/25 group-hover:scale-105 transition-transform shrink-0">
            SH
          </div>
          <div className="flex flex-col">
            <span className={`font-bold text-sm tracking-tight leading-tight block whitespace-nowrap ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              {personalInfo.name}
            </span>
            <span className="text-[10px] text-indigo-400 font-medium tracking-normal hidden 2xl:block truncate max-w-[240px]">
              Data Science & Analyst • Supply Chain Controller
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links (Spacious, Clean, Uncrowded) */}
        <nav className="hidden xl:flex items-center gap-5 2xl:gap-7 text-xs lg:text-sm font-medium">
          {desktopNavLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`whitespace-nowrap transition-colors duration-200 ${
                darkMode 
                  ? 'text-slate-300 hover:text-white' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          {/* Language Switcher Toggle */}
          <div className={`flex items-center p-0.5 rounded-xl border text-[11px] font-bold shrink-0 ${
            darkMode ? 'bg-slate-800/90 border-slate-700/80' : 'bg-slate-100 border-slate-200'
          }`}>
            <button
              onClick={() => setLang('id')}
              type="button"
              className={`px-2 py-1 rounded-lg transition-all ${
                lang === 'id'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Bahasa Indonesia"
            >
              ID
            </button>
            <button
              onClick={() => setLang('en')}
              type="button"
              className={`px-2 py-1 rounded-lg transition-all ${
                lang === 'en'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
              title="English"
            >
              EN
            </button>
          </div>

          {/* Quick Direct ATS CV Download Button (on 2xl screens) */}
          <a
            href="/Steven_Harun_Samba_CV_ATS.pdf"
            download="Steven_Harun_Samba_CV_ATS.pdf"
            className={`hidden 2xl:inline-flex whitespace-nowrap shrink-0 items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition border ${
              darkMode
                ? 'bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                : 'bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border-emerald-200'
            }`}
            title="Download ATS-Friendly CV (.PDF, 224 KB)"
          >
            <Download className="w-3.5 h-3.5 text-emerald-400" />
            <span className="font-mono">ATS CV</span>
          </a>

          {/* Full Interactive Resume Modal Trigger */}
          <button
            onClick={onOpenResume}
            type="button"
            className={`hidden sm:inline-flex whitespace-nowrap shrink-0 items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl text-xs font-semibold transition border ${
              darkMode
                ? 'bg-slate-800/80 hover:bg-slate-700 text-slate-200 border-slate-700/80'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
            }`}
            title="View Executive Resume"
          >
            <FileText className="w-3.5 h-3.5 text-indigo-400" />
            <span>{t.cv}</span>
          </button>

          {/* Dark / Light Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            type="button"
            className={`p-1.5 sm:p-2 rounded-xl text-xs font-medium transition border shrink-0 ${
              darkMode
                ? 'bg-slate-800/80 hover:bg-slate-700 text-amber-400 border-slate-700/80'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
            }`}
            aria-label="Toggle Theme"
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Quick Contact CTA */}
          <a
            href="#contact"
            className="hidden sm:inline-flex whitespace-nowrap shrink-0 items-center gap-1.5 px-3.5 py-1.5 sm:py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:brightness-110 text-white text-xs font-semibold transition shadow-md shadow-indigo-600/25"
          >
            <span>{lang === 'id' ? 'Kontak' : "Let's Talk"}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className={`xl:hidden p-1.5 sm:p-2 rounded-xl transition border shrink-0 ${
              darkMode
                ? 'bg-slate-800 text-slate-200 border-slate-700'
                : 'bg-slate-100 text-slate-700 border-slate-200'
            }`}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className={`xl:hidden mt-2 rounded-2xl p-4 transition-all ${
          darkMode 
            ? 'bg-slate-900 border border-slate-800 text-slate-200 shadow-2xl' 
            : 'bg-white border border-slate-200 text-slate-800 shadow-xl'
        }`}>
          <div className="flex flex-col gap-2.5 text-sm font-medium">
            {mobileNavLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-indigo-500/10 hover:text-indigo-500 transition"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-2 border-t border-slate-700/40 flex flex-col gap-2">
              <a
                href="/Steven_Harun_Samba_CV_ATS.pdf"
                download="Steven_Harun_Samba_CV_ATS.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2.5 px-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-semibold text-xs"
              >
                <span className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  <span>{t.downloadAts} (.PDF)</span>
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300">ATS 224KB</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="flex items-center gap-2 py-2 px-3 rounded-lg hover:bg-indigo-500/10 text-indigo-400 transition text-left text-xs font-semibold"
              >
                <FileText className="w-4 h-4" />
                <span>{t.cv} (Preview & Print)</span>
              </button>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-center py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-xs"
              >
                {lang === 'id' ? 'Hubungi Saya' : 'Get in Touch'}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
