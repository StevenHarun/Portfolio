import { Quote, MessageSquareQuote } from 'lucide-react';

export default function Testimonials({ testimonials = [] }) {
  const safeTestimonials = Array.isArray(testimonials) && testimonials.length > 0 ? testimonials : [
    {
      quote: "Working alongside Steven has been exceptional. He combines analytical precision with a sharp eye for enterprise systems. The ML models and BI dashboards he delivers are grounded in real operational impact.",
      author: "Enterprise Project Controller",
      role: "Lead Controller",
      company: "PT Huawei Tech Investment"
    },
    {
      quote: "Steven consistently bridges academic rigor with rapid prototyping. His published IEEE research on YOLOv9 demonstrated meticulous experimentation and high benchmark precision.",
      author: "Academic Research Supervisor",
      role: "Informatics & Computing Chair",
      company: "Telkom University"
    },
    {
      quote: "His dedication to clean data pipelines, automated workflows, and executive Power BI dashboards significantly improved cross-divisional workforce planning throughput.",
      author: "Human Capital Division Lead",
      role: "HCIS Specialist",
      company: "PT Pertamina Hulu Energi"
    }
  ];

  return (
    <section id="testimonials" className="py-24 border-t border-white/5 relative bg-obsidian-950/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300 mb-3">
            <MessageSquareQuote size={12} className="text-brand-400" />
            <span>Peer & Stakeholder Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            What Collaborators Say
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base">
            Feedback from team leads, researchers, and project controllers I've engineered systems with.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {safeTestimonials.map((item, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl glass-card border border-white/10 flex flex-col justify-between hover:border-brand-500/30 transition-all duration-300 relative group"
            >
              <div>
                <Quote size={28} className="text-brand-400/40 mb-4 group-hover:text-brand-400 transition-colors" />
                <p className="text-sm text-slate-300 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-white/5">
                <h4 className="text-sm font-bold text-white tracking-tight">
                  {item.author}
                </h4>
                <p className="text-xs text-brand-400 font-mono mt-0.5">
                  {item.role}
                </p>
                <p className="text-[11px] text-slate-500 font-mono mt-0.5">
                  {item.company}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
