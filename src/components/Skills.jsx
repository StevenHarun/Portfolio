import { Brain, BarChart3, Code2, Compass, Smartphone, Layout, Server, Cpu } from 'lucide-react';

export default function Skills({ categories = [] }) {
  const iconMap = {
    Brain,
    BarChart3,
    Code2,
    Compass,
    Smartphone,
    Layout,
    Server,
    Cpu
  };

  const safeCategories = Array.isArray(categories) ? categories : [];

  return (
    <section id="skills" className="py-24 relative bg-obsidian-950/50 border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-[400px] h-[300px] bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-300 mb-3">
            <Cpu size={12} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Arsenal & Competencies
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base">
            Machine learning architectures, computer vision frameworks, enterprise data modeling, and web engineering.
          </p>
        </div>

        {/* Skills Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {safeCategories.map((cat, idx) => {
            const Icon = iconMap[cat.icon] || Cpu;
            const items = cat.items || cat.skills || [];
            const title = cat.name || cat.category || `Domain 0${idx + 1}`;

            return (
              <div
                key={idx}
                className="p-7 rounded-3xl glass-card flex flex-col justify-between border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-cyan-400">
                        <Icon size={20} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white tracking-tight">{title}</h3>
                        <p className="text-xs text-slate-400">{cat.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Skills Pills */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {items.map((skill, sIdx) => {
                      const isHighlighted = skill.level === 'Expert' || skill.level === 'Advanced' || skill.highlight;
                      return (
                        <div
                          key={sIdx}
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                            isHighlighted
                              ? 'bg-brand-500/15 border border-brand-500/35 text-brand-200 shadow-sm'
                              : 'bg-white/[0.03] border border-white/5 text-slate-300 hover:border-white/20'
                          }`}
                        >
                          {isHighlighted && (
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-400"></span>
                          )}
                          <span>{skill.name}</span>
                          {skill.level && (
                            <span className="text-[10px] text-slate-500 font-sans">
                              • {skill.level}
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Arsenal Domain: 0{idx + 1}</span>
                  <span className="text-cyan-400/80">Production & Research Tested</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
