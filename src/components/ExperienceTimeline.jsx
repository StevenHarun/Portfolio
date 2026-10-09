import React from 'react';
import { professionalExperience, academicAndLeadership } from '../data/portfolioData';
import { 
  Building2, 
  MapPin, 
  Briefcase, 
  Calendar, 
  CheckCircle2, 
  GraduationCap, 
  Users, 
  Sparkles,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { translations } from '../data/translations';
import { 
  PertaminaLogo, 
  HuaweiLogo, 
  BankBJBLogo, 
  TimedoorLogo, 
  GoogleBangkitLogo,
  TelkomUniversityLogo 
} from './CompanyLogos';
import { getTechLogo } from './TechLogos';

// Mapping each company to its authentic logo component
const companyLogoMap = {
  'PT Pertamina Hulu Energi': PertaminaLogo,
  'PT Huawei Tech Investment': HuaweiLogo,
  'PT Bank Pembangunan Daerah Jawa Barat dan Banten, Tbk. (Bank BJB)': BankBJBLogo,
  'PT. Cerdas Digital Indonesia (Timedoor Academy)': TimedoorLogo,
  'BANGKIT Academy led by Google, GoTo, and Traveloka': GoogleBangkitLogo,
};

export default function ExperienceTimeline({ darkMode = true, lang = 'en' }) {
  const t = translations[lang]?.experience || translations.en.experience;

  return (
    <section id="timeline" className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-3">
          <Briefcase className="w-3.5 h-3.5" />
          <span>{t.badge}</span>
        </div>
        <h2 className={`text-2xl sm:text-4xl font-extrabold tracking-tight ${
          darkMode ? 'text-white' : 'text-slate-900'
        }`}>
          {t.title}
        </h2>
        <p className="text-sm sm:text-base text-slate-400 mt-2.5 leading-relaxed">
          {t.subtitle}
        </p>
      </div>

      {/* 1. Corporate Experience Cards (Pertamina, Huawei, Bank BJB, Timedoor) */}
      <div className="space-y-6 mb-16">
        {professionalExperience
          .filter(item => 
            item.company.includes('Pertamina') || 
            item.company.includes('Huawei') || 
            item.company.includes('Bank BJB') ||
            item.company.includes('Timedoor')
          )
          .map((item) => {
            const LogoComponent = companyLogoMap[item.company] || Building2;
            const isCurrent = item.period.includes('Present');

            return (
              <div
                key={`${item.company}-${item.role}`}
                className={`rounded-3xl p-6 sm:p-8 border transition-all duration-300 hover:-translate-y-1 ${
                  darkMode
                    ? 'bg-slate-900/90 border-slate-800 shadow-xl shadow-black/30 hover:border-slate-700 hover:shadow-indigo-500/10'
                    : 'bg-white border-slate-200/90 shadow-md shadow-slate-200/50 hover:border-indigo-300'
                }`}
              >
                {/* Header: Company Logo, Role Title, Organization, and Period Pill */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-5 pb-5 border-b border-slate-700/40">
                  <div className="flex items-start gap-4">
                    {/* High-fidelity Logo Container */}
                    <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl p-2.5 flex items-center justify-center shrink-0 border ${
                      darkMode 
                        ? 'bg-white/95 border-white/20 shadow-md shadow-black/20' 
                        : 'bg-white border-slate-200 shadow-sm'
                    }`}>
                      <LogoComponent className="w-10 h-10 object-contain" />
                    </div>

                    <div>
                      {/* Category Tag & Status */}
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="px-2.5 py-0.5 rounded-md text-xs font-semibold font-mono border bg-indigo-500/10 border-indigo-500/25 text-indigo-400">
                          {item.category}
                        </span>
                        {isCurrent && (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                            Active Role
                          </span>
                        )}
                      </div>

                      {/* Role Title */}
                      <h3 className={`text-lg sm:text-2xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        {item.role}
                      </h3>

                      {/* Company Name & Location */}
                      <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium mt-1">
                        <span className="text-indigo-400 font-semibold">
                          {item.company}
                        </span>
                        <span className="text-slate-500">•</span>
                        <span className="text-slate-400 flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                          {item.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Period Badge */}
                  <div className="shrink-0 self-start md:self-auto">
                    <span className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold border ${
                      isCurrent
                        ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                        : darkMode
                          ? 'bg-slate-800 text-slate-300 border-slate-700'
                          : 'bg-slate-100 text-slate-700 border-slate-200'
                    }`}>
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{item.period}</span>
                    </span>
                  </div>
                </div>

                {/* Bulleted Highlights with Crisp Check Icons */}
                <div className="pt-5 space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Key Deliverables & Responsibilities:
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-sm">
                    {item.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="p-1 rounded-md bg-emerald-500/10 text-emerald-400 shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        </div>
                        <span className={`leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                          {h.includes('Experienced in Supply Chain Project:') ? (
                            <>
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 mr-1.5 rounded-md text-xs font-bold bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                                Experienced in Supply Chain Project
                              </span>
                              {h.replace('Experienced in Supply Chain Project:', '').trim()}
                            </>
                          ) : (
                            h
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

              {/* Technologies Pills Footer */}
              <div className="flex flex-wrap items-center gap-2 mt-6 pt-5 border-t border-slate-700/40">
                <span className="text-xs font-semibold text-slate-400 mr-1">Applied Stack:</span>
                {item.technologies.map((t) => (
                  <span
                    key={t}
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-medium border ${
                      darkMode
                        ? 'bg-slate-800/80 text-slate-300 border-slate-700/80'
                        : 'bg-slate-100 text-slate-700 border-slate-200'
                    }`}
                  >
                    {getTechLogo(t, "w-3.5 h-3.5 shrink-0")}
                    <span>{t}</span>
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* 2. Academic Laboratory & University Leadership (Redesigned & Clean) */}
      <div className={`rounded-3xl p-6 sm:p-9 border transition-all ${
        darkMode 
          ? 'bg-slate-900/90 border-slate-800 shadow-2xl shadow-black/40' 
          : 'bg-white border-slate-200 shadow-xl shadow-slate-200/50'
      }`}>
        {/* Academic Header with Telkom Logo */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-700/40">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white/10 p-2 flex items-center justify-center shrink-0 border border-white/15 shadow-md">
              <TelkomUniversityLogo className="w-10 h-10 object-contain" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-500/10 text-red-400 text-xs font-semibold font-mono mb-1">
                <span>Telkom University Leadership</span>
              </div>
              <h3 className={`text-xl sm:text-2xl font-bold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                {t.academicTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                {t.academicSubtitle}
              </p>
            </div>
          </div>

          <div className="shrink-0">
            <span className="px-3 py-1.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono font-semibold">
              650+ Students Taught
            </span>
          </div>
        </div>

        {/* 4 Clean, Well-Spaced, Polished Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {academicAndLeadership.map((item, idx) => {
            const isLab = item.role.includes('Laboratory');
            
            return (
              <div
                key={item.role}
                className={`rounded-2xl p-5 sm:p-6 border transition-all duration-300 hover:-translate-y-1 h-full flex flex-col justify-between ${
                  darkMode
                    ? 'bg-slate-800/40 border-slate-700/60 hover:bg-slate-800/70 hover:border-slate-600'
                    : 'bg-slate-50 border-slate-200 hover:bg-white hover:border-slate-300 shadow-sm'
                }`}
              >
                <div>
                  {/* Card Top: Role Badge & Period */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className={`px-2.5 py-0.5 rounded-md text-[11px] font-semibold border ${
                      isLab
                        ? 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20'
                        : 'bg-amber-500/10 text-amber-300 border-amber-500/20'
                    }`}>
                      {isLab ? 'Academic Teaching' : 'Executive Leadership'}
                    </span>

                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1 shrink-0">
                      <Calendar className="w-3 h-3 text-slate-500" />
                      {item.period}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className={`text-base font-bold tracking-tight mb-2 leading-snug min-h-[44px] flex items-center ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    {item.role}
                  </h4>

                  {/* Institution */}
                  <div className="text-xs font-medium text-indigo-400 mb-3 flex items-center gap-2">
                    <div className="w-5 h-5 rounded bg-white p-0.5 border border-slate-200 shrink-0 shadow-sm flex items-center justify-center">
                      <TelkomUniversityLogo className="w-full h-full object-contain" />
                    </div>
                    <span>{item.institution}</span>
                  </div>

                  {/* High Contrast Clean Description */}
                  <p className={`text-xs sm:text-sm leading-relaxed ${
                    darkMode ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {item.description}
                  </p>
                </div>

                {/* Card Tag Footer */}
                <div className="pt-4 mt-4 border-t border-slate-700/40 flex items-center justify-between text-[11px]">
                  <span className="text-slate-500">Verified Academic Record</span>
                  <span className="text-emerald-400 font-medium inline-flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Completed
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
