import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { translations } from '../data/translations';
import { 
  ArrowRight, 
  ExternalLink, 
  Mail, 
  Phone, 
  MapPin, 
  Sparkles,
  FileText,
  Download,
  Award
} from 'lucide-react';
import { 
  PertaminaLogo, 
  HuaweiLogo, 
  TelkomUniversityLogo, 
  IEEELogo 
} from './CompanyLogos';
import AnimatedHeadline from './AnimatedHeadline';

export default function Hero({ 
  darkMode = true, 
  lang = 'en',
  onOpenResume,
  onOpenAtsResume
}) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const t = translations[lang]?.hero || translations.en.hero;

  const rolesList = lang === 'id' ? [
    "Data Science & Analyst",
    "Peneliti AI & Computer Vision",
    "Supply Chain & Project Controller",
    "Analyst Sistem Enterprise & BI"
  ] : personalInfo.roles;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % rolesList.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [rolesList.length]);

  return (
    <section id="overview" className="pt-8 pb-10 sm:pt-12 sm:pb-14 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        
        {/* Left Column: Headline, Bio & CTAs */}
        <div className="lg:col-span-8 space-y-6">
          {/* Main Headline with Magic UI Sparkles, Specular Shimmer & Aceternity Beam */}
          <div className="space-y-4">
            <AnimatedHeadline darkMode={darkMode} lang={lang} />
            
            {/* Dynamic Role Rotator */}
            <div className="flex items-center gap-2 text-base sm:text-xl font-semibold min-h-[32px] sm:min-h-[36px]">
              <span className={darkMode ? 'text-slate-400' : 'text-slate-600'}>
                {lang === 'id' ? 'Fokus:' : 'Focus:'}
              </span>
              <span className="inline-flex items-center gap-1.5 text-indigo-400 font-mono transition-all duration-300">
                <Sparkles className="w-4 h-4 text-cyan-400 animate-spin" style={{ animationDuration: '4s' }} />
                <span>{rolesList[currentRoleIndex]}</span>
              </span>
            </div>
          </div>

          {/* Bio Description */}
          <p className={`text-base sm:text-lg leading-relaxed max-w-2xl ${
            darkMode ? 'text-slate-300' : 'text-slate-600'
          }`}>
            {lang === 'id' ? (
              <>
                Lulusan Sistem Informasi (B.Sc. / S.Kom.) <strong className={darkMode ? 'text-white' : 'text-slate-900'}>Telkom University</strong> (IPK 3.60/4.00) dengan pengalaman korporat di <span className="text-indigo-400 font-medium">PT Pertamina Hulu Energi</span> dan <span className="text-[#CF0A2C] dark:text-[#ff4d4f] font-medium">PT Huawei Tech Investment</span>. Alumnus <span className={darkMode ? 'text-white' : 'text-slate-900'}>Bangkit Academy by Google</span>, serta penulis pertama publikasi riset <span className="text-amber-400 font-medium">IEEE Computer Vision (YOLOv9)</span>.
              </>
            ) : (
              <>
                Information Systems graduate (B.Sc. / S.Kom.) from <strong className={darkMode ? 'text-white' : 'text-slate-900'}>Telkom University</strong> (GPA 3.60/4.00) with hands-on corporate experience at <span className="text-indigo-400 font-medium">PT Pertamina Hulu Energi</span> and <span className="text-[#CF0A2C] dark:text-[#ff4d4f] font-medium">PT Huawei Tech Investment</span>. Alumnus of <span className={darkMode ? 'text-white' : 'text-slate-900'}>Bangkit Academy by Google</span>, and first author of published <span className="text-amber-400 font-medium">IEEE Computer Vision research (YOLOv9)</span>.
              </>
            )}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {/* Direct ATS Download Button (Uploaded Original File) */}
            <a
              href="/Steven_Harun_Samba_CV_ATS.pdf"
              download="Steven_Harun_Samba_CV_ATS.pdf"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 h-12 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all shadow-lg shadow-emerald-600/25 active:scale-95 whitespace-nowrap shrink-0"
              title="Download official ATS Resume (.PDF, 224 KB)"
            >
              <Download className="w-4 h-4" />
              <span>{t.ctaDownloadAts}</span>
            </a>

            {/* Interactive CV Modal Button */}
            {onOpenResume && (
              <button
                onClick={onOpenResume}
                type="button"
                className={`inline-flex items-center justify-center gap-2 px-5 py-3 h-12 rounded-xl text-sm font-semibold transition border whitespace-nowrap shrink-0 ${
                  darkMode
                    ? 'bg-slate-800/90 hover:bg-slate-700/90 text-slate-100 border-slate-700'
                    : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-300 shadow-sm'
                }`}
              >
                <FileText className="w-4 h-4 text-indigo-400" />
                <span>{t.ctaCv}</span>
              </button>
            )}

            {/* IEEE Paper Link */}
            <a
              href="https://ieeexplore.ieee.org/document/10957461"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center gap-2 px-5 py-3 h-12 rounded-xl text-sm font-semibold transition border whitespace-nowrap shrink-0 ${
                darkMode
                  ? 'bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border-amber-500/30'
                  : 'bg-amber-50 hover:bg-amber-100 text-amber-800 border-amber-200'
              }`}
            >
              <div className="w-5 h-5 bg-white rounded p-0.5 flex items-center justify-center shrink-0 shadow-sm">
                <IEEELogo className="w-full h-full object-contain" />
              </div>
              <span>{t.ctaResearch} ↗</span>
            </a>
          </div>

          {/* Social Quick Links */}
          <div className={`flex flex-wrap items-center gap-4 pt-2 text-xs font-medium ${
            darkMode ? 'text-slate-400' : 'text-slate-500'
          }`}>
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition flex items-center gap-1"
            >
              <span>LinkedIn</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span>•</span>
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition flex items-center gap-1"
            >
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span>•</span>
            <a 
              href={`mailto:${personalInfo.email}`} 
              className="hover:text-indigo-400 transition flex items-center gap-1"
            >
              <span>{personalInfo.email}</span>
            </a>
          </div>
        </div>

        {/* Right Column: Executive Snapshot Bento Card */}
        <div className="lg:col-span-4">
          <div className={`rounded-3xl p-6 sm:p-7 transition-all border relative overflow-hidden ${
            darkMode 
              ? 'bg-slate-900/90 border-slate-800 shadow-2xl shadow-black/50' 
              : 'bg-white border-slate-200/90 shadow-xl shadow-slate-200/60'
          }`}>
            {/* Ambient Corner Glow */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none"></div>
            
            {/* User Profile & Portrait Header */}
            <div className={`flex items-center gap-4 pb-4 border-b ${
              darkMode ? 'border-slate-700/40' : 'border-slate-200'
            }`}>
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden ring-2 ring-indigo-500/40 shrink-0 shadow-xl bg-slate-800">
                <img 
                  src="/steven-harun-samba.jpg" 
                  alt="Steven Harun Samba, S.Kom., B.Sc." 
                  className="w-full h-full object-cover object-top"
                />
                <span className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 ring-2 ring-slate-900" title="Available for Roles"></span>
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${
                    darkMode ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    {t.snapshotTitle}
                  </span>
                </div>
                <h2 className={`text-base sm:text-lg font-bold leading-tight truncate ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  Steven Harun Samba
                </h2>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="text-xs font-semibold text-indigo-400 font-mono">
                    S.Kom., B.Sc.
                  </span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono font-medium">
                    GPA 3.60
                  </span>
                </div>
                <p className={`text-[11px] truncate mt-1 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Data Science & Analyst • Supply Chain Controller
                </p>
              </div>
            </div>

            {/* Profile Entries */}
            <div className="space-y-4 pt-4 text-xs">
              <div className="flex items-start gap-3">
                <div className={`w-9 h-9 rounded-xl p-1.5 flex items-center justify-center shrink-0 border mt-0.5 ${
                  darkMode ? 'bg-white/95 border-white/20 shadow-md shadow-black/20' : 'bg-white border-slate-200 shadow-sm'
                }`}>
                  <TelkomUniversityLogo className="w-full h-full object-contain" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className={`block font-semibold leading-snug ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {personalInfo.degree}
                  </span>
                  <span className={`text-[11px] block leading-snug ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    {personalInfo.university} • {lang === 'id' ? 'Lulus' : 'Graduated'} {personalInfo.graduationDate}
                  </span>
                  <span className={`font-mono font-semibold text-[11px] block mt-0.5 leading-snug ${
                    darkMode ? 'text-emerald-400' : 'text-emerald-600'
                  }`}>
                    {lang === 'id' ? 'IPK:' : 'GPA:'} {personalInfo.gpa} • {personalInfo.englishScore}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className={`w-9 h-9 rounded-xl p-1.5 flex items-center justify-center shrink-0 border mt-0.5 ${
                  darkMode ? 'bg-white/95 border-white/20 shadow-md shadow-black/20' : 'bg-white border-slate-200 shadow-sm'
                }`}>
                  <PertaminaLogo className="w-full h-full object-contain" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className={`block font-semibold leading-snug ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    PT Pertamina Hulu Energi
                  </span>
                  <span className={`text-[11px] block leading-snug ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    HCIS • Power BI & Workflow Automation
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className={`w-9 h-9 rounded-xl p-1.5 flex items-center justify-center shrink-0 border mt-0.5 ${
                  darkMode ? 'bg-white/95 border-white/20 shadow-md shadow-black/20' : 'bg-white border-slate-200 shadow-sm'
                }`}>
                  <HuaweiLogo className="w-full h-full object-contain" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className={`block font-semibold leading-snug ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    PT Huawei Tech Investment
                  </span>
                  <span className={`text-[11px] block leading-snug ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    Project Controller • Supply Chain Integration
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border mt-0.5 ${
                  darkMode ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' : 'bg-amber-50 text-amber-700 border-amber-200'
                }`}>
                  <Award className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className={`block font-semibold leading-snug ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    International Exposure
                  </span>
                  <span className={`text-[11px] block leading-snug ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    Platinum Speaker (WYM Japan)
                  </span>
                  <span className={`text-[11px] block leading-snug ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    Indonesian Tutor for Paris (Embassy in France)
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border mt-0.5 ${
                  darkMode ? 'bg-purple-500/10 text-purple-400 border-purple-500/20' : 'bg-purple-50 text-purple-700 border-purple-200'
                }`}>
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className={`block font-semibold leading-snug ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {personalInfo.location}
                  </span>
                  <span className={`text-[11px] block leading-snug ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    {lang === 'id' ? 'Tersedia Onsite, Hybrid & Remote' : 'Open to Hybrid, Onsite & Remote'}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Action */}
            <div className={`mt-5 pt-4 border-t flex items-center justify-between ${
              darkMode ? 'border-slate-700/40' : 'border-slate-200'
            }`}>
              <span className={`text-[11px] font-mono ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                {personalInfo.phone}
              </span>
              <a
                href={personalInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-xs font-semibold inline-flex items-center gap-1 transition ${
                  darkMode ? 'text-emerald-400 hover:text-emerald-300' : 'text-emerald-600 hover:text-emerald-700'
                }`}
              >
                <span>WhatsApp</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
