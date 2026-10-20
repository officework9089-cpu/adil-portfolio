import React from 'react';
import { 
  ShieldAlert, 
  Code2, 
  Gauge, 
  LockKeyhole, 
  CheckCircle, 
  ArrowRight 
} from 'lucide-react';
import { SERVICES } from '../data/portfolioData';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const serviceIcons = {
    'offensive-security': <ShieldAlert className="w-6 h-6 text-blue-600" />,
    'wordpress-architecture': <Code2 className="w-6 h-6 text-indigo-600" />,
    'technical-seo': <Gauge className="w-6 h-6 text-teal-600" />,
    'security-audits': <LockKeyhole className="w-6 h-6 text-slate-800" />,
  };

  const handleCtaClick = (serviceTitle: string) => {
    onSelectService(serviceTitle);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 md:mb-18">
          <div className="text-xs font-bold tracking-wider text-blue-600 uppercase mb-2">
            WHAT I DO
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight text-balance">
            Technical Expertise That Makes a Difference.
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Focused capabilities spanning offensive cybersecurity testing, resilient WordPress engineering, and data-driven performance tuning.
          </p>
        </div>

        {/* 4 Refined Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch perspective-1000">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="glow-card group relative flex flex-col justify-between rounded-2xl bg-white border border-slate-200/90 p-7 sm:p-8 shadow-xs hover:shadow-xl hover:border-blue-400/60 hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                {/* Card Top: Icon & Clean Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                    {serviceIcons[service.id]}
                  </div>
                  <span className="text-xs font-medium text-slate-500 font-mono tracking-wide">
                    {service.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Scope & Deliverables */}
                <div className="pt-4 border-t border-slate-100 mb-8">
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                    Scope of Deliverables
                  </div>
                  <ul className="space-y-2.5">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer: Action Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => handleCtaClick(service.title)}
                  className="w-full inline-flex items-center justify-between px-5 py-3 text-xs sm:text-sm font-semibold text-slate-900 bg-slate-50 hover:bg-blue-600 hover:text-white border border-slate-200 hover:border-blue-600 rounded-xl transition-all duration-200 focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  <span>{service.ctaText}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
