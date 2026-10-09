import React from 'react';
import { translations } from '../data/translations';
import { 
  PertaminaLogo, 
  HuaweiLogo, 
  BankBJBLogo, 
  GoogleBangkitLogo, 
  IEEELogo, 
  OracleLogo,
  TelkomUniversityLogo 
} from './CompanyLogos';

export default function ProofStrip({ darkMode = true, lang = 'en' }) {
  const t = translations[lang]?.proof || translations.en.proof;

  const proofItems = [
    { 
      name: 'PT Pertamina Hulu Energi', 
      role: lang === 'id' ? 'Human Capital Info System' : 'Human Capital Info System', 
      logo: PertaminaLogo 
    },
    { 
      name: 'PT Huawei Tech Investment', 
      role: lang === 'id' ? 'Project Controller' : 'Project Controller', 
      logo: HuaweiLogo 
    },
    { 
      name: 'PT Bank BJB, Tbk.', 
      role: lang === 'id' ? 'Business Consumer Unit BI' : 'Business Consumer Unit BI', 
      logo: BankBJBLogo 
    },
    { 
      name: 'Bangkit by Google', 
      role: lang === 'id' ? 'Machine Learning Cohort Lead' : 'Machine Learning Cohort Lead', 
      logo: GoogleBangkitLogo 
    },
    { 
      name: 'IEEE Xplore', 
      role: lang === 'id' ? 'Penulis Pertama (YOLOv9)' : 'Published 1st Author (YOLOv9)', 
      logo: IEEELogo 
    },
    { 
      name: 'Oracle Cloud (OCI)', 
      role: lang === 'id' ? 'Certified OCI Data Scientist Professional' : 'Certified OCI Data Scientist Professional', 
      logo: OracleLogo 
    },
  ];

  return (
    <section id="proof" className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
      <div className={`rounded-3xl p-5 sm:p-6 border transition-all ${
        darkMode 
          ? 'bg-slate-900/80 border-slate-800 shadow-xl shadow-black/30 backdrop-blur-xl' 
          : 'bg-white border-slate-200 shadow-md backdrop-blur-xl'
      }`}>
        {/* Strip Header */}
        <div className="flex items-center gap-2 pb-4 mb-4 border-b border-slate-700/40">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className={`text-xs font-bold uppercase tracking-wider ${
            darkMode ? 'text-slate-300' : 'text-slate-700'
          }`}>
            {t.badge}
          </span>
        </div>

        {/* Logo Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5">
          {proofItems.map((item) => {
            const LogoComponent = item.logo;
            return (
              <div
                key={item.name}
                className={`p-3.5 rounded-2xl border h-full min-h-[122px] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group ${
                  darkMode
                    ? 'bg-slate-800/50 border-slate-700/60 hover:border-indigo-500/40 hover:bg-slate-800/80 shadow-md'
                    : 'bg-slate-50 border-slate-200 hover:border-indigo-300 hover:bg-white shadow-sm'
                }`}
              >
                <div className="flex items-center gap-3 mb-2.5">
                  <div className={`w-10 h-10 rounded-xl p-1.5 flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 border ${
                    darkMode 
                      ? 'bg-white/90 border-white/20 shadow-md shadow-black/20' 
                      : 'bg-white border-slate-200 shadow-sm'
                  }`}>
                    <LogoComponent className="w-7 h-7 object-contain" />
                  </div>
                  <span className={`text-xs font-bold leading-tight line-clamp-2 min-h-[2.4em] flex items-center ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {item.name}
                  </span>
                </div>
                <span className={`text-[11px] leading-snug font-medium line-clamp-2 min-h-[2.2em] flex items-start ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {item.role}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
