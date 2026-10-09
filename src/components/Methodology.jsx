import { CheckCircle2, Layers } from 'lucide-react';

export default function Methodology({ methodology = [], manifesto }) {
  const safeManifesto = manifesto || {
    badge: "ENGINEERING PHILOSOPHY",
    title: "Bridging cutting-edge AI research with rigorous enterprise system execution.",
    description: "Great software isn't born from writing code in silos. It is shaped through deep problem diagnosis, domain-driven clean architecture, disciplined testing, and scalable data systems.",
    quote: "EASY TO MAINTAIN, FAST IN EXECUTION, AND THOUGHTFUL IN DETAIL."
  };

  const safeMethodology = Array.isArray(methodology) && methodology.length > 0 ? methodology : [
    {
      step: "01",
      phase: "Architecture & Problem Ingestion",
      desc: "Translating business needs into structured system requirements (BRD/RIC) and schema designs.",
      points: [
        "Domain analysis & requirements discovery",
        "System architecture & schema design",
        "API contract definition & state modeling",
        "Technical feasibility & dependency evaluation"
      ],
      accent: "border-indigo-500/30 text-indigo-400 bg-indigo-500/5"
    },
    {
      step: "02",
      phase: "Algorithms & Model Engineering",
      desc: "Training, evaluating, and tuning neural architectures (YOLOv9) and ML pipelines (LightGBM).",
      points: [
        "Computer vision with GELAN architecture",
        "NLP & topic modeling (LDA, NLTK)",
        "Prompt engineering & RAG pipelines",
        "Scikit-learn, PyTorch & TensorFlow workflows"
      ],
      accent: "border-cyan-500/30 text-cyan-400 bg-cyan-500/5"
    },
    {
      step: "03",
      phase: "Profiling & Empirical Validation",
      desc: "Ensuring 94%+ precision, benchmarking baselines, and auditing SLA compliance.",
      points: [
        "Automated regression checks & precision evaluation",
        "Confusion matrix & hyperparameter optimization",
        "ISDP ERP & supply chain risk mitigation",
        "Scientific writing & peer-reviewed validation"
      ],
      accent: "border-emerald-500/30 text-emerald-400 bg-emerald-500/5"
    },
    {
      step: "04",
      phase: "Enterprise BI & Deployment",
      desc: "Delivering executive dashboards (Power BI, Looker Studio) and production APIs.",
      points: [
        "Executive Power BI dashboards with drill-downs",
        "Google Looker Studio performance scorecards",
        "Python Flask API endpoints for real-time inference",
        "Continuous performance monitoring & updates"
      ],
      accent: "border-amber-500/30 text-amber-400 bg-amber-500/5"
    }
  ];

  return (
    <section id="methodology" className="py-24 border-t border-white/5 relative bg-obsidian-950/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Anti-Generic Statement / Philosophy Banner */}
        <div className="mb-20 p-8 sm:p-12 rounded-3xl glass-card border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-500/10 blur-[100px] pointer-events-none rounded-full" />
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono tracking-widest uppercase text-brand-300 mb-4">
            <Layers size={12} />
            <span>{safeManifesto.badge}</span>
          </div>

          <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight max-w-3xl leading-snug">
            {safeManifesto.title}
          </h3>

          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
            {safeManifesto.description}
          </p>

          <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between flex-wrap gap-4">
            <span className="text-xs sm:text-sm font-mono text-brand-300 tracking-wider font-semibold">
              // {safeManifesto.quote}
            </span>
            <span className="text-xs font-mono text-slate-500">
              Disciplined Craftsmanship
            </span>
          </div>
        </div>

        {/* Section Header for Methodology */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest uppercase text-slate-400">
            [DELIVERY FRAMEWORK]
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
            Engineering & Research Methodology
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base">
            From business domain requirements to empirical validation and enterprise deployment.
          </p>
        </div>

        {/* 4-Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {safeMethodology.map((step) => (
            <div
              key={step.step}
              className={`p-7 rounded-3xl glass-card border transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 ${step.accent}`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-extrabold font-mono text-white/90">
                    {step.step}
                  </span>
                  <span className="text-xs font-mono uppercase tracking-wider px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                    Phase {step.step}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                  {step.phase}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {step.desc}
                </p>

                <div className="space-y-2">
                  {step.points.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 size={14} className="shrink-0 mt-0.5 opacity-80" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Standardized Workflow</span>
                <span>Active</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
