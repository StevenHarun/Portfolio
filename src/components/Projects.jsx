import { useState } from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function Projects({ projects = [], categories = [], onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const safeProjects = Array.isArray(projects) ? projects : [];
  const safeCategories = Array.isArray(categories) && categories.length > 0
    ? categories
    : [
        { id: "all", label: "All Works" },
        { id: "ai-ml", label: "AI & Machine Learning" },
        { id: "enterprise-bi", label: "Enterprise BI & Systems" },
        { id: "software-gis", label: "Software & Web GIS" }
      ];

  const filteredProjects = activeCategory === 'all'
    ? safeProjects
    : safeProjects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono tracking-widest uppercase text-brand-400">
              [CURATED CASE STUDIES]
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
              Featured Research & Engineering Works
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-xl">
              Published IEEE computer vision research, national NLP models, enterprise telecommunication project controls, and operational BI dashboards.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-2xl bg-obsidian-950/80 border border-white/10 w-fit">
            {safeCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              const count = cat.id === 'all'
                ? safeProjects.length
                : safeProjects.filter((p) => p.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-brand-600 text-white shadow-md shadow-brand-600/30'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isActive ? 'bg-white/20 text-white' : 'bg-white/5 text-slate-400'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, idx) => {
            const tags = project.technologies || project.tags || [];
            const number = project.number || `0${idx + 1}`;
            const keyMetric = project.keyMetric || (project.metrics && project.metrics[0] ? `${project.metrics[0].label}: ${project.metrics[0].value}` : 'Validated');
            const accent = project.accentColor || 'from-indigo-600/20 via-slate-900/40 to-slate-900/60';
            const badge = project.badge || 'Case Study';
            const badgeColor = project.badgeColor || 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20';
            const githubUrl = project.links?.github || project.githubUrl;
            const liveUrl = project.links?.live || project.links?.publication || project.liveUrl;

            return (
              <div
                key={project.id || idx}
                className="group rounded-3xl glass-card flex flex-col justify-between overflow-hidden relative border border-white/10 hover:border-brand-500/40 transition-all duration-300"
              >
                {/* Card Header */}
                <div className={`p-6 sm:p-7 bg-gradient-to-br ${accent} border-b border-white/5 relative`}>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-lg font-bold text-white/80">
                        [{number}]
                      </span>
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono border backdrop-blur-md ${badgeColor}`}>
                        {badge}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-emerald-300 bg-black/40 px-2.5 py-1 rounded-full border border-emerald-500/20">
                      {keyMetric}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-brand-200 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">
                    {project.subtitle || project.organization || project.year}
                  </p>

                  {/* Metadata strip */}
                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-300">
                    <span>ROLE: {project.role || 'Lead Engineer'}</span>
                    <span>{project.year}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between gap-6">
                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {project.summary}
                  </p>

                  {/* Tech Pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {tags.slice(0, 5).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/5 text-[11px] font-mono text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                    {tags.length > 5 && (
                      <span className="px-2 py-1 text-[11px] font-mono text-slate-500">
                        +{tags.length - 5} more
                      </span>
                    )}
                  </div>

                  {/* Card Actions */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-300 hover:text-brand-200 group/btn transition-colors font-mono uppercase tracking-wider"
                    >
                      <span>[VIEW CASE STUDY]</span>
                      <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>

                    <div className="flex items-center gap-2">
                      {githubUrl && (
                        <a
                          href={githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-white transition-colors"
                          aria-label="GitHub Repository"
                        >
                          <GithubIcon size={15} />
                        </a>
                      )}
                      {liveUrl && (
                        <a
                          href={liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-lg bg-brand-500/10 hover:bg-brand-500/20 text-brand-300 hover:text-white border border-brand-500/20 transition-colors"
                          aria-label="Publication or Live Link"
                        >
                          <ExternalLink size={15} />
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
