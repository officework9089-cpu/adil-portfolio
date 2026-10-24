
import React from 'react';
import {
  ShieldAlert,
  Code2,
  Gauge,
  LockKeyhole,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';

import { SERVICES } from '../data/portfolioData';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

const serviceIcons: Record<string, React.ReactNode> = {
  'offensive-security': <ShieldAlert />,
  'website-architecture': <Code2 />,
  'technical-seo': <Gauge />,
  'security-audits': <LockKeyhole />,
};

const iconStyles: Record<string, string> = {
  'offensive-security': 'bg-blue-50 text-blue-600 group-hover:bg-blue-600',
  'website-architecture': 'bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600',
  'technical-seo': 'bg-teal-50 text-teal-600 group-hover:bg-teal-600',
  'security-audits': 'bg-slate-100 text-slate-700 group-hover:bg-slate-800',
};

export const Services: React.FC<ServicesProps> = ({
  onSelectService,
}) => {
  const handleCtaClick = (serviceTitle: string) => {
    onSelectService(serviceTitle);

    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#F8FAFC] py-16 sm:py-20 lg:py-24"
    >
      {/* Subtle background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-0 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-indigo-100/30 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mb-10 flex flex-col gap-5 sm:mb-12 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-blue-700 shadow-sm">
              <Sparkles className="h-3.5 w-3.5" />
              Services & Expertise
            </div>

            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-[2.65rem]">
              Technology Built for
              <span className="text-blue-600"> Real Impact.</span>
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
              Practical cybersecurity, web engineering, and performance
              solutions designed to help businesses build, protect, and grow
              their digital presence.
            </p>
          </div>

          <div className="hidden shrink-0 items-center gap-3 pb-1 md:flex">
            <div className="flex -space-x-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#F8FAFC] bg-blue-100 text-blue-700">
                <ShieldAlert className="h-4 w-4" />
              </span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#F8FAFC] bg-indigo-100 text-indigo-700">
                <Code2 className="h-4 w-4" />
              </span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#F8FAFC] bg-teal-100 text-teal-700">
                <Gauge className="h-4 w-4" />
              </span>
            </div>

            <div>
              <p className="text-sm font-bold text-slate-900">
                End-to-end expertise
              </p>
              <p className="text-xs text-slate-500">
                Security, engineering & optimization
              </p>
            </div>
          </div>
        </div>

        {/* Compact service cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
          {SERVICES.map((service, index) => (
            <article
              key={service.id}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_2px_12px_rgba(15,23,42,0.025)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_16px_40px_rgba(37,99,235,0.09)] sm:p-6"
            >
              {/* Top accent */}
              <div className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-blue-600 via-indigo-500 to-teal-400 transition-transform duration-300 group-hover:scale-x-100" />

              {/* Icon and service badge */}
              <div className="mb-4 flex items-center justify-between">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300 group-hover:text-white group-hover:shadow-lg ${
                    iconStyles[service.id] ??
                    'bg-blue-50 text-blue-600 group-hover:bg-blue-600'
                  }`}
                >
                  {React.cloneElement(
                    serviceIcons[service.id] as React.ReactElement<{
                      className?: string;
                    }> ?? <Code2 />,
                    { className: 'h-5 w-5' }
                  )}
                </div>

                <span className="rounded-full border border-slate-100 bg-slate-50 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-slate-500 sm:text-[11px]">
                  {service.badge}
                </span>
              </div>

              {/* Service title and description */}
              <h3 className="text-lg font-bold tracking-tight text-slate-900 transition-colors duration-200 group-hover:text-blue-700 sm:text-xl">
                {service.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {service.description}
              </p>

              {/* Deliverables */}
              <div className="mt-4 border-t border-slate-100 pt-4">
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                  Key Deliverables
                </p>

                <ul className="grid grid-cols-1 gap-y-2 sm:grid-cols-2 sm:gap-x-3">
                  {service.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-xs leading-5 text-slate-600 sm:text-[13px]"
                    >
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="mt-auto pt-5">
                <button
                  type="button"
                  onClick={() => handleCtaClick(service.title)}
                  className="flex w-full items-center justify-between rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm font-semibold text-slate-800 transition-all duration-200 hover:border-blue-600 hover:bg-blue-600 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                >
                  <span>{service.ctaText}</span>

                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white text-slate-600 transition-all duration-200 group-hover:translate-x-0.5 group-hover:bg-white/15 group-hover:text-white">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </button>
              </div>

              {/* Decorative index */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute right-5 top-[4.5rem] select-none text-5xl font-black tracking-tighter text-slate-100/70 transition-colors duration-300 group-hover:text-blue-50"
              >
                {String(index + 1).padStart(2, '0')}
              </span>
            </article>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <h3 className="text-sm font-bold text-slate-900 sm:text-base">
              Have a specific technical challenge?
            </h3>
            <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
              Let’s discuss your requirements and identify the right approach.
            </p>
          </div>

          <button
            type="button"
            onClick={() => handleCtaClick('General Technical Consultation')}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            Discuss Your Project
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
