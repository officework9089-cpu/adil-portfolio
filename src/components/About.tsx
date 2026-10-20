import React from 'react';
import { Shield, Zap, Wrench, Globe2, Check } from 'lucide-react';
import { PERSONAL_INFO, VALUE_PROPOSITIONS, ASSETS } from '../data/portfolioData';
import about from "@/assets/images/about_developer_portrait_1792535537127.jpg";

export const About: React.FC = () => {
  const valuePropIcons = [
    <Shield className="w-5 h-5 text-blue-600" key="shield" />,
    <Zap className="w-5 h-5 text-teal-600" key="zap" />,
    <Wrench className="w-5 h-5 text-indigo-600" key="wrench" />,
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#F5F8FC]/70 border-y border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <div className="text-xs font-bold tracking-wider text-blue-600 uppercase mb-2">
            ABOUT ME
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight text-balance">
            Bridging Cybersecurity, Development, and Performance.
          </h2>
        </div>

        {/* Editorial Layout: Text Story + Visual Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Main Story & Global Footprint */}
          <div className="lg:col-span-7 space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed">
            <p className="font-normal text-slate-800">
              {PERSONAL_INFO.aboutBio1}
            </p>
            <p>
              {PERSONAL_INFO.aboutBio2}
            </p>
            <p>
              {PERSONAL_INFO.aboutBio3}
            </p>

            {/* Geographic footprint statement - directly verified from prompt */}
            <div className="pt-4">
              <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-xs flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0 mt-0.5">
                  <Globe2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Cross-Border Collaboration
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                    Engaging with clients across Pakistan, the United States, and international markets to deliver secure, resilient web solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Value Propositions & Architectural Principles */}
          <div className="lg:col-span-5 space-y-4">
            {/* Practitioner Visual Portrait */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm bg-white">
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <img
                  src={about}
                  alt="Adil Khan - Cybersecurity Practitioner & WordPress Developer"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent flex items-end p-4">
                  <div className="text-white">
                    <div className="text-sm font-bold tracking-tight">Adil Khan</div>
                    <div className="text-xs text-teal-300 font-mono">Cybersecurity Practitioner · Founder, SecStackHQ</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-xs font-bold tracking-wider text-slate-500 uppercase px-1 pt-2">
              Core Value Propositions
            </div>

            <div className="space-y-3.5">
              {VALUE_PROPOSITIONS.map((prop, idx) => (
                <div
                  key={prop.title}
                  className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-xs hover:border-blue-300 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center border border-slate-100">
                      {valuePropIcons[idx]}
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      {prop.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-11">
                    {prop.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Quick Consultation Callout */}
            <div className="p-5 rounded-xl bg-gradient-to-br from-blue-900 to-slate-900 text-white shadow-md">
              <div className="text-xs font-semibold uppercase tracking-wider text-teal-400 mb-1">
                Direct Communication
              </div>
              <h4 className="text-sm sm:text-base font-bold text-white mb-2">
                Have an architecture or security question?
              </h4>
              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                Reach out directly via email or WhatsApp to evaluate your project scope and technical parameters.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-xs font-semibold px-3.5 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors"
              >
                <span>Initiate Project Discussion</span>
                <Check className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
