import React from 'react';
import { impactMetrics } from '../data/portfolioData';
import { translations } from '../data/translations';
import { Target, Award, Database, Users } from 'lucide-react';

const icons = [Database, Target, Award, Users];

export default function StatsBar({ darkMode = true, lang = 'en' }) {
  const t = translations[lang]?.stats || translations.en.stats;

  const localizedMetrics = [
    {
      value: "26,020",
      label: t.metric1Label,
      description: t.metric1Desc,
      accent: "from-emerald-400 to-cyan-400"
    },
    {
      value: "94.2%",
      label: t.metric2Label,
      description: t.metric2Desc,
      accent: "from-indigo-400 to-purple-400"
    },
    {
      value: "250+ Sites",
      label: t.metric3Label,
      description: t.metric3Desc,
      accent: "from-cyan-400 to-blue-400"
    },
    {
      value: "650+ Mentees",
      label: t.metric4Label,
      description: t.metric4Desc,
      accent: "from-amber-400 to-orange-400"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {localizedMetrics.map((item, index) => {
          const IconComponent = icons[index % icons.length];
          return (
            <div
              key={item.label}
              className={`rounded-2xl p-5 sm:p-6 transition-all duration-300 border hover:-translate-y-1 h-full min-h-[148px] flex flex-col justify-between ${
                darkMode
                  ? 'bg-slate-900/70 border-slate-800 hover:border-slate-700 shadow-xl shadow-black/20'
                  : 'bg-white border-slate-200 hover:border-slate-300 shadow-md shadow-slate-200/40'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className={`text-2xl sm:text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r ${item.accent}`}>
                  {item.value}
                </span>
                <div className={`p-2 rounded-xl shrink-0 ${
                  darkMode ? 'bg-slate-800/80 text-slate-300' : 'bg-slate-100 text-slate-700'
                }`}>
                  <IconComponent className={`w-4 h-4 sm:w-5 sm:h-5 ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`} />
                </div>
              </div>
              <div className="space-y-1">
                <h3 className={`text-xs sm:text-sm font-bold tracking-tight leading-snug ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  {item.label}
                </h3>
                <p className={`text-[11px] sm:text-xs leading-snug min-h-[34px] flex items-start ${
                  darkMode ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
