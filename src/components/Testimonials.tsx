import React from 'react';
import { Quote, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';

interface TestimonialsProps {
  onCtaClick: () => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ onCtaClick }) => {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-white relative overflow-hidden border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 md:mb-18">
          <div className="max-w-2xl">
            <div className="text-xs font-bold tracking-wider text-blue-600 uppercase mb-2">
              CLIENT TESTIMONIALS & COLLABORATIONS
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight text-balance">
              Trusted Across Global Digital Engagements.
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Real stakeholder feedback from authorized security assessments, decoupled web architectures, and technical optimization projects.
            </p>
          </div>

          <button
            type="button"
            onClick={onCtaClick}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-800 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl transition-all self-start md:self-auto cursor-pointer"
          >
            <span>Discuss Your Requirements</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Testimonials Grid with Client Avatars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="glow-card group relative bg-white rounded-2xl border border-slate-200/90 p-7 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-xl transition-all duration-300"
            >
              <div>
                {/* Quote Icon & Outcome Metric */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                    <Quote className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono font-bold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-200/60">
                    {item.outcome}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-sm text-slate-700 leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Lockup with Real Photographic Avatar */}
              <div className="pt-5 border-t border-slate-100 flex items-center gap-3.5">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-slate-200 shadow-xs shrink-0">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {item.name}
                  </h4>
                  <div className="text-xs text-slate-500 font-medium">
                    {item.role}
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono">
                    {item.organization}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
