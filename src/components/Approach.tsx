import React from 'react';
import { Compass, Hammer, Award, CheckCircle2 } from 'lucide-react';
import { PROCESS_STEPS } from '../data/portfolioData';

export const Approach: React.FC = () => {
  const stepIcons = [
    <Compass className="w-5 h-5 text-blue-600" key="compass" />,
    <Hammer className="w-5 h-5 text-teal-600" key="hammer" />,
    <Award className="w-5 h-5 text-indigo-600" key="award" />,
  ];

  return (
    <section id="approach" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="text-xs font-bold tracking-wider text-blue-600 uppercase mb-2">
            METHODOLOGY
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight text-balance">
            From Technical Challenges to Reliable Solutions.
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            A disciplined, three-stage engineering and auditing framework designed to deliver transparent, battle-tested outcomes.
          </p>
        </div>

        {/* Timeline Container: Desktop Horizontal / Mobile Vertical */}
        <div className="relative">
          
          {/* Connecting Line (Desktop Horizontal) */}
          <div 
            className="hidden lg:block absolute top-12 left-12 right-12 h-0.5 bg-slate-200"
            aria-hidden="true"
          />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={step.number}
                className="relative bg-white rounded-2xl border border-slate-200 p-7 sm:p-8 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Step Header with Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-bold px-3 py-1 rounded-md bg-slate-100 text-slate-700">
                      STEP {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                      {stepIcons[idx]}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-950 mb-3">
                    {step.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {step.summary}
                  </p>

                  {/* Detailed points */}
                  <ul className="space-y-2.5 pt-4 border-t border-slate-100">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
