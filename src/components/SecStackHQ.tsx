import React from 'react';
import { 
  ShieldCheck, 
  Layers, 
  Gauge, 
  CheckCircle2, 
  ArrowRight,
  Network,
  Lock,
  Workflow
} from 'lucide-react';
import { SECSTACK_PILLARS } from '../data/portfolioData';

interface SecStackHQProps {
  onCtaClick: () => void;
}

export const SecStackHQ: React.FC<SecStackHQProps> = ({ onCtaClick }) => {
  return (
    <section id="secstackhq" className="py-20 md:py-28 bg-[#0F172A] text-white relative overflow-hidden">
      {/* Background subtle technical grid */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#38BDF8 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
        }}
        aria-hidden="true"
      />

      {/* Ambient gradient glows */}
      <div 
        className="absolute -top-40 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute -bottom-40 left-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Brand Lockup: Typographic Wordmark with Geometric Symbol */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-12 border-b border-slate-800">
          <div className="max-w-3xl">
            {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/80 border border-blue-800/60 text-blue-400 text-xs font-mono tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              <span>AN INITIATIVE BY ADIL KHAN</span>
            </div> */}

            {/* SecStackHQ Brand Header */}
            <div className="flex items-center gap-3.5 mb-4">
              {/* Geometric Node Symbol */}
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-teal-500 p-0.5 flex items-center justify-center shadow-lg shadow-blue-500/20">
                <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
                  <Network className="w-5 h-5 text-teal-400" />
                </div>
              </div>
              <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-mono">
                SecStack<span className="text-blue-400">HQ</span>
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white text-balance leading-tight">
              Meet SecStackHQ — Secure Foundations for Digital Growth.
            </h2>

            <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
              SecStackHQ is an initiative focused on helping businesses establish secure, fast, scalable digital infrastructure through security-conscious development, technical optimization, and practical solutions.
            </p>
          </div>

          <div className="shrink-0">
            <button
              type="button"
              onClick={onCtaClick}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-xl shadow-lg shadow-blue-600/25 transition-all focus-visible:ring-2 focus-visible:ring-blue-400 whitespace-nowrap"
            >
              <span>Discuss Your Business Needs</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3 Core Pillars + Abstract Infrastructure Schematic */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: 3 Feature Blocks */}
          <div className="lg:col-span-7 space-y-4">
            {SECSTACK_PILLARS.map((pillar, idx) => {
              const icons = [
                <Lock className="w-5 h-5 text-teal-400" key="lock" />,
                <Gauge className="w-5 h-5 text-blue-400" key="gauge" />,
                <Workflow className="w-5 h-5 text-sky-400" key="workflow" />,
              ];

              return (
                <div
                  key={pillar.title}
                  className="glow-card-dark p-6 rounded-2xl bg-slate-900/80 border border-slate-800/90 hover:border-slate-700 transition-all duration-300"
                >
                  <div className="flex items-center gap-3.5 mb-2.5">
                    <div className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700/80 flex items-center justify-center">
                      {icons[idx]}
                    </div>
                    <h3 className="text-lg font-bold text-white">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed pl-12.5">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right: Abstract Infrastructure Blueprint */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xs">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs font-mono text-slate-400">
                <span>INFRASTRUCTURE ARCHITECTURE</span>
                <span className="text-teal-400">HARDENED</span>
              </div>

              {/* Stack Visual Schematic */}
              <div className="py-6 space-y-3 font-mono text-xs">
                {/* Layer 1: Edge & Threat Mitigation */}
                <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-blue-400" />
                    <span className="text-slate-200 font-semibold">Edge Security</span>
                  </div>
                  <span className="text-[11px] text-slate-400">DDoS · WAF · TLS 1.3</span>
                </div>

                {/* Layer 2: Web App & WordPress Layer */}
                <div className="p-3.5 rounded-xl bg-slate-800/90 border border-blue-500/30 flex items-center justify-between shadow-xs">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-teal-400" />
                    <span className="text-white font-semibold">Application Core</span>
                  </div>
                  <span className="text-[11px] text-teal-300">Clean Architecture · RBAC</span>
                </div>

                {/* Layer 3: Persistence & Database */}
                <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-indigo-400" />
                    <span className="text-slate-200 font-semibold">Database & Storage</span>
                  </div>
                  <span className="text-[11px] text-slate-400">Encrypted · Least Privilege</span>
                </div>

                {/* Layer 4: Audit & Performance Monitoring */}
                <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-slate-200 font-semibold">Verification Pipeline</span>
                  </div>
                  <span className="text-[11px] text-emerald-300">Audits · Core Web Vitals</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800/90 flex items-center justify-between text-xs text-slate-400">
              <span>Initiative Scope</span>
              <span className="text-slate-300 font-medium">B2B Security & Scalability</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
