import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function Experience({ experiences = [] }) {
  const safeExperiences = Array.isArray(experiences) ? experiences : [];

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-300 mb-3">
            <Briefcase size={12} />
            <span>Career Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional Experience & Track Record
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base">
            Enterprise delivery at multinational telecommunications, national energy subsidiaries, and academic labs.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l border-white/10 space-y-12">
          {safeExperiences.map((exp, idx) => {
            const bulletPoints = exp.highlights || exp.achievements || [];
            const techList = exp.technologies || [];

            return (
              <div key={idx} className="relative group">
                {/* Glowing Timeline Marker */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-obsidian-900 border-2 border-brand-500 group-hover:scale-125 group-hover:bg-brand-500 transition-all duration-300 shadow-md shadow-brand-500/50"></div>

                {/* Experience Card */}
                <div className="p-6 sm:p-8 rounded-3xl glass-card border border-white/10 group-hover:border-brand-500/30 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-sm font-medium text-brand-400">{exp.company}</span>
                        {exp.category && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-400">
                            {exp.category}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/5">
                        <Calendar size={12} />
                        {exp.period}
                      </span>
                      {exp.location && (
                        <span className="inline-flex items-center gap-1.5 text-slate-400">
                          <MapPin size={12} />
                          {exp.location}
                        </span>
                      )}
                    </div>
                  </div>

                  {exp.description && (
                    <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                      {exp.description}
                    </p>
                  )}

                  {/* Achievements / Highlights */}
                  {bulletPoints.length > 0 && (
                    <div className="mt-5 space-y-2">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                        Key Deliverables & Responsibilities:
                      </h4>
                      <ul className="space-y-2">
                        {bulletPoints.map((item, aIdx) => (
                          <li key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                            <CheckCircle2 size={15} className="text-brand-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Stack Used */}
                  {techList.length > 0 && (
                    <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                      {techList.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md bg-white/[0.03] text-[11px] font-mono text-slate-400 border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
