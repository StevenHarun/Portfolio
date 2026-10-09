import React, { useState } from 'react';
import { projects, projectCategories } from '../data/portfolioData';
import { translations } from '../data/translations';
import { 
  ArrowUpRight, 
  Sparkles, 
  Calendar,
  Building2
} from 'lucide-react';
import { 
  PertaminaPHELogo, 
  HuaweiLogo, 
  BankBJBLogo, 
  GoogleBangkitLogo, 
  IEEELogo, 
  TelkomUniversityLogo 
} from './CompanyLogos';
import { getTechLogo } from './TechLogos';

const projectLogoMap = {
  'yolov9-accident-detection': IEEELogo,
  'sentiment-analysis-infobmkg': TelkomUniversityLogo,
  'docare-ai-chatbot': GoogleBangkitLogo,
  'pertamina-hcis-powerbi': PertaminaPHELogo,
  'huawei-telecom-site-integration': HuaweiLogo,
  'bank-bjb-performance-dashboard': BankBJBLogo,
  'mangrove-forest-monitoring-gis': TelkomUniversityLogo,
};

export default function ProjectsShowcase({ 
  onSelectProject, 
  darkMode = true,
  lang = 'en'
}) {
  const [activeCategory, setActiveCategory] = useState('all');
  const t = translations[lang]?.projects || translations.en.projects;

  const filteredProjects = projects.filter((p) => {
    if (activeCategory === 'all') return true;
    return p.category === activeCategory;
  });

  return (
    <section id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>
          <h2 className={`text-2xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            {t.title}
          </h2>
          <p className={`text-sm sm:text-base mt-2 max-w-2xl ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            {t.subtitle}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 text-xs">
          {projectCategories.map((cat) => {
            const count = cat.id === 'all' 
              ? projects.length 
              : projects.filter(p => p.category === cat.id).length;
            const isActive = activeCategory === cat.id;
            const label = t.categories?.[cat.id] || cat.label;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                type="button"
                className={`px-3.5 py-2 rounded-xl font-semibold transition-all duration-200 border flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-600/30'
                    : darkMode
                      ? 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                      : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300'
                }`}
              >
                <span>{label}</span>
                <span className={`px-1.5 py-0.2 rounded-md text-[10px] ${
                  isActive ? 'bg-indigo-700 text-white' : 'bg-slate-700/50 text-slate-400'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Clean, Balanced Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => {
          const ProjectLogo = projectLogoMap[project.id];

          return (
            <div
              key={project.id}
              className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 border group hover:-translate-y-1 relative overflow-hidden ${
                darkMode
                  ? 'bg-slate-900/80 border-slate-800/80 hover:border-indigo-500/40 shadow-xl shadow-black/30'
                  : 'bg-white border-slate-200/90 hover:border-indigo-300 shadow-md shadow-slate-200/50'
              }`}
            >
              <div className="space-y-4">
                {/* Badge & Year with Logo */}
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    {ProjectLogo && (
                      <div className={`w-8 h-8 rounded-lg p-1 flex items-center justify-center shrink-0 border ${
                        darkMode ? 'bg-white/95 border-white/20 shadow-xs' : 'bg-white border-slate-200 shadow-xs'
                      }`}>
                        <ProjectLogo className="w-full h-full object-contain" />
                      </div>
                    )}
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                      project.category === 'research'
                        ? darkMode ? 'bg-amber-500/10 text-amber-400 border-amber-500/30' : 'bg-amber-50 text-amber-700 border-amber-200'
                        : project.category === 'enterprise-bi'
                          ? darkMode ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                          : darkMode ? 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30' : 'bg-indigo-50 text-indigo-700 border-indigo-200'
                    }`}>
                      {project.badge}
                    </span>
                  </div>

                  <span className={`text-xs font-mono ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    {project.year}
                  </span>
                </div>

                {/* Title */}
                <h3 
                  onClick={() => onSelectProject(project)}
                  className={`text-lg font-bold tracking-tight cursor-pointer group-hover:text-indigo-500 transition leading-snug ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {project.title}
                </h3>

                {/* Organization */}
                <div className={`flex items-center gap-1.5 text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  <Building2 className={`w-3.5 h-3.5 shrink-0 ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`} />
                  <span className="truncate">{project.organization}</span>
                </div>

                {/* Summary */}
                <p className={`text-xs sm:text-sm leading-relaxed ${
                  darkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {project.summary}
                </p>

                {/* Key Metrics Highlight */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    {project.metrics.slice(0, 2).map((m) => (
                      <div 
                        key={m.label} 
                        className={`p-2.5 rounded-xl border text-xs ${
                          darkMode 
                            ? 'bg-slate-800/40 border-slate-700/60' 
                            : 'bg-slate-50 border-slate-200'
                        }`}
                      >
                        <span className="text-slate-400 text-[10px] block truncate">{m.label}</span>
                        <span className="font-bold text-indigo-400 block truncate">{m.value}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Badges with Logos */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-medium border ${
                        darkMode
                          ? 'bg-slate-800/80 text-slate-300 border-slate-700/60'
                          : 'bg-slate-100 text-slate-700 border-slate-200'
                      }`}
                    >
                      {getTechLogo(tech, "w-3.5 h-3.5 shrink-0")}
                      <span>{tech}</span>
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 text-[11px] text-slate-400">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="pt-6 mt-6 border-t border-slate-700/40 flex items-center justify-between gap-3">
                <span className="text-[11px] text-slate-400 truncate">
                  {t.rolePrefix} <strong className={darkMode ? 'text-slate-300' : 'text-slate-700'}>{project.role}</strong>
                </span>

                <button
                  onClick={() => onSelectProject(project)}
                  type="button"
                  className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition shadow-md shadow-indigo-600/20"
                >
                  <span>{t.viewCaseStudy}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
}
