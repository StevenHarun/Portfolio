import React from 'react';
import { skillsMatrix } from '../data/portfolioData';
import { Brain, BarChart3, Code2, Compass } from 'lucide-react';
import { getTechLogo } from './TechLogos';

import { translations } from '../data/translations';

const iconMap = {
  Brain,
  BarChart3,
  Code2,
  Compass
};

export default function SkillsSection({ darkMode, lang = 'en' }) {
  const t = translations[lang]?.skills || translations.en.skills;

  return (
    <section id="skills" className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-2 border ${
          darkMode ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-emerald-50 text-emerald-700 border-emerald-200'
        }`}>
          <span>{t.badge}</span>
        </div>
        <h2 className={`text-2xl sm:text-4xl font-extrabold tracking-tight ${
          darkMode ? 'text-white' : 'text-slate-900'
        }`}>
          {t.title}
        </h2>
        <p className={`text-sm sm:text-base mt-2 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
          {t.subtitle}
        </p>
      </div>

      {/* 4-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillsMatrix.map((category) => {
          const IconComponent = iconMap[category.icon] || Brain;
          
          return (
            <div
              key={category.category}
              className={`rounded-3xl p-6 sm:p-7 h-full flex flex-col justify-between transition-all duration-300 border ${
                darkMode
                  ? 'bg-slate-900/80 border-slate-800/80 hover:border-slate-700 shadow-xl shadow-black/20'
                  : 'bg-white border-slate-200 hover:border-slate-300 shadow-md shadow-slate-200/50'
              }`}
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2.5 rounded-2xl shrink-0 ${
                    darkMode ? 'bg-indigo-500/10 text-indigo-400' : 'bg-indigo-50 text-indigo-600'
                  }`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className={`text-base font-bold tracking-tight leading-snug min-h-[32px] flex items-center ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    {category.category}
                  </h3>
                </div>

                <p className={`text-xs leading-relaxed mb-5 min-h-[42px] ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {category.description}
                </p>

                <ul className="space-y-2.5">
                  {category.items.map((skill) => {
                    const techLogo = getTechLogo(skill.name, "w-4 h-4 shrink-0");
                    return (
                      <li 
                        key={skill.name}
                        className={`p-2.5 rounded-xl border flex items-center justify-between gap-2.5 text-xs transition-colors ${
                          darkMode
                            ? 'bg-slate-800/40 border-slate-700/60 hover:bg-slate-800/80'
                            : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0 flex-1">
                          {techLogo ? (
                            <span className={`p-1 rounded-md shrink-0 border ${
                              darkMode ? 'bg-slate-900/80 border-slate-700/60' : 'bg-white border-slate-200 shadow-xs'
                            }`}>
                              {techLogo}
                            </span>
                          ) : (
                            <span className={`w-1.5 h-1.5 rounded-full shrink-0 ml-1 mr-1 ${
                              darkMode ? 'bg-indigo-400' : 'bg-indigo-500'
                            }`} />
                          )}
                          <span className={`font-medium leading-snug break-words ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                            {skill.name}
                          </span>
                        </div>
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-md border shrink-0 self-center whitespace-nowrap ${
                          darkMode 
                            ? 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20' 
                            : 'bg-indigo-50 text-indigo-700 border-indigo-200'
                        }`}>
                          {skill.level}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
