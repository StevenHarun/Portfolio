import React from 'react';
import { certifications, honorsAndAchievements } from '../data/portfolioData';
import { translations } from '../data/translations';
import { ShieldCheck, Award, Globe, GraduationCap, Target, Shield, CheckCircle2 } from 'lucide-react';
import { OracleLogo, BNSPLogo, GoogleBangkitLogo, IEEELogo, MSILogo } from './CompanyLogos';

const certLogoMap = {
  'Oracle Cloud Infrastructure': OracleLogo,
  'Badan Nasional Sertifikasi Profesi (BNSP)': BNSPLogo,
  'Management & Strategy Institute (MSI)': MSILogo,
  'Management & Strategy Institute': MSILogo,
  'Management and Strategy Institute': MSILogo,
  'Management and Strategy Institute (MSI)': MSILogo,
  'Google, GoTo, Traveloka': GoogleBangkitLogo,
  'Bangkit Academy': GoogleBangkitLogo,
  'IEEE': IEEELogo,
};

const iconMap = {
  Globe,
  GraduationCap,
  Award,
  Target,
  Shield
};

export default function CertificationsAndHonors({ darkMode = true, lang = 'en' }) {
  const t = translations[lang]?.certifications || translations.en.certifications;

  return (
    <section id="certifications" className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Certifications with Official Logos */}
        <div className="lg:col-span-6 space-y-6">
          <div className="min-h-[105px] sm:min-h-[95px] flex flex-col justify-start">
            <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-2 border w-fit ${
              darkMode ? 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20' : 'bg-indigo-50 text-indigo-700 border-indigo-200'
            }`}>
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{t.badge}</span>
            </div>
            <h2 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              {t.title}
            </h2>
            <p className={`text-xs sm:text-sm mt-1 leading-snug ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              {t.subtitle}
            </p>
          </div>

          <div className="space-y-4">
            {certifications.map((cert) => {
              const LogoComp = certLogoMap[cert.issuer];

              return (
                <div
                  key={cert.title}
                  className={`rounded-2xl p-5 sm:p-6 border transition-all duration-300 hover:-translate-y-0.5 ${
                    darkMode
                      ? 'bg-slate-900/80 border-slate-800 shadow-lg shadow-black/20 hover:border-slate-700'
                      : 'bg-white border-slate-200 shadow-md shadow-slate-200/40 hover:border-indigo-200'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex items-start gap-3.5">
                      {LogoComp ? (
                        <div className={`w-14 h-12 rounded-xl px-2 py-1.5 flex items-center justify-center shrink-0 border transition-all ${
                          darkMode 
                            ? 'bg-white/95 border-white/20 shadow-md shadow-black/20' 
                            : 'bg-white border-slate-200 shadow-sm'
                        }`}>
                          <LogoComp className="max-h-7 max-w-[46px] w-auto h-auto object-contain" />
                        </div>
                      ) : (
                        <div className={`w-12 h-12 rounded-xl p-2 flex items-center justify-center shrink-0 border ${
                          darkMode 
                            ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' 
                            : 'bg-amber-50 text-amber-700 border-amber-200'
                        }`}>
                          <ShieldCheck className="w-6 h-6" />
                        </div>
                      )}

                      <div>
                        <h3 className={`text-sm sm:text-base font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                          {cert.title}
                        </h3>
                        <div className="text-xs font-semibold text-indigo-400 mt-0.5">
                          {cert.issuer}
                        </div>
                      </div>
                    </div>

                    <span className="px-2.5 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-mono text-[11px] font-semibold shrink-0">
                      {cert.date}
                    </span>
                  </div>

                  <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                    {cert.description}
                  </p>

                  <div className={`mt-3 pt-3 border-t flex items-center justify-between text-xs font-mono ${
                    darkMode ? 'border-slate-800 text-slate-400' : 'border-slate-100 text-slate-500'
                  }`}>
                    <span>{cert.credentialType}</span>
                    <span className="text-emerald-400 font-medium inline-flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      {lang === 'id' ? 'Terverifikasi' : 'Verified'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Honors & Global Recognition */}
        <div className="lg:col-span-6 space-y-6">
          <div className="min-h-[105px] sm:min-h-[95px] flex flex-col justify-start">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-semibold mb-2 border border-amber-500/20 w-fit">
              <Award className="w-3.5 h-3.5" />
              <span>{t.honorsBadge}</span>
            </div>
            <h2 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              {t.honorsTitle}
            </h2>
            <p className={`text-xs sm:text-sm mt-1 leading-snug ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              {t.honorsSubtitle}
            </p>
          </div>

          <div className="space-y-3.5">
            {honorsAndAchievements.map((item) => {
              const Icon = iconMap[item.icon] || Award;
              return (
                <div
                  key={item.title}
                  className={`rounded-2xl p-4.5 sm:p-5 border transition-all duration-300 hover:-translate-y-0.5 ${
                    darkMode
                      ? 'bg-slate-900/80 border-slate-800 shadow-lg shadow-black/20 hover:border-slate-700'
                      : 'bg-white border-slate-200 shadow-md shadow-slate-200/40 hover:border-amber-200'
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/20">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <h3 className={`text-xs sm:text-sm font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                          {item.title}
                        </h3>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                          {item.year}
                        </span>
                      </div>
                      <div className="text-xs text-indigo-400 font-medium">
                        {item.event}
                      </div>
                      <p className={`text-xs leading-relaxed pt-0.5 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
