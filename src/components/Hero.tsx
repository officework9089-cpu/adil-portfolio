import React, { useState } from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  Lock, 
  Search, 
  Server, 
  Terminal, 
  CheckCircle2, 
  AlertCircle,
  RefreshCw,
  Cpu
} from 'lucide-react';
import { PERSONAL_INFO, ASSETS } from '../data/portfolioData';


export const Hero: React.FC = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanStep, setScanStep] = useState(3); // Completed state by default
  const [tilt, setTilt] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [glare, setGlare] = useState<{ x: number; y: number }>({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Check reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    setTilt({ x: rotateX, y: rotateY });
    setGlare({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setGlare({ x: 50, y: 50 });
  };

  const handleSimulateScan = () => {
    if (isScanning) return;
    setIsScanning(true);
    setScanStep(0);

    const stepInterval = setInterval(() => {
      setScanStep((prev) => {
        if (prev >= 3) {
          clearInterval(stepInterval);
          setIsScanning(false);
          return 3;
        }
        return prev + 1;
      });
    }, 600);
  };

  const scanItems = [
    { label: 'TLS 1.3 / Strict Cipher Negotiation', status: 'Secured', ok: true },
    { label: 'HTTP Security Headers (CSP, HSTS, XFO)', status: 'Hardened', ok: true },
    { label: 'WordPress Core & Endpoint Integrity', status: 'Verified', ok: true },
    { label: 'OWASP Top 10 Surface Scan', status: 'No Critical Exposure', ok: true },
  ];

  const expertiseTags = [
    'Offensive Security',
    'WordPress Development',
    'Technical SEO',
    'Security Audits',
  ];

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-white">
      {/* Subtle background grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#2563EB 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
        aria-hidden="true"
      />

      {/* Gentle gradient glow in background */}
      <div 
        className="absolute -top-32 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-1/2 -left-20 w-80 h-80 bg-teal-100/30 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Positioning & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Introductory Badge / Kicker - Clean unboxed text with dots */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-blue-600 uppercase">
              <span>Cybersecurity</span>
              <span className="text-slate-300">·</span>
              <span>Development</span>
              <span className="text-slate-300">·</span>
              <span>Performance</span>
            </div>

            {/* Main Headline with layered depth and tight tracking */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 leading-[1.12] text-balance">
              Securing Digital Experiences.{' '}
              <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-teal-700 bg-clip-text text-transparent drop-shadow-xs">
                Building Smarter Web Solutions.
              </span>
            </h1>

            {/* Supporting Introductions */}
            <div className="space-y-3 max-w-2xl text-slate-600 text-base sm:text-lg leading-relaxed">
              <p>
                {PERSONAL_INFO.heroIntro}
              </p>
              <p className="text-slate-600 text-sm sm:text-base">
                {PERSONAL_INFO.heroSubIntro}
              </p>
            </div>

            {/* Availability Indicator */}
            <div className="flex items-center gap-2.5 text-xs font-medium text-slate-600 pt-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-600"></span>
              </span>
              <span>{PERSONAL_INFO.availability}</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-lg shadow-sm hover:shadow-md transition-all whitespace-nowrap focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#expertise"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-700 hover:text-slate-950 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition-all whitespace-nowrap focus-visible:ring-2 focus-visible:ring-slate-400"
              >
                <span>Explore My Expertise</span>
              </a>
            </div>

            {/* Concise Expertise Tags (Clean quiet text with dividers) */}
            <div className="pt-4 border-t border-slate-100">
              <p className="text-xs uppercase tracking-wider font-semibold text-slate-600 mb-2">
                Core Domains
              </p>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs font-medium text-slate-700">
                {expertiseTags.map((tag, i) => (
                  <React.Fragment key={tag}>
                    <span className="hover:text-blue-600 transition-colors">
                      {tag}
                    </span>
                    {i < expertiseTags.length - 1 && (
                      <span className="text-slate-300" aria-hidden="true">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Custom Visual Cybersecurity Composition */}
          <div className="lg:col-span-5 relative perspective-1000">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer decorative card frame with 3D tilt, subtle glassmorphism & shadow */}
              <div 
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                  transition: tilt.x === 0 && tilt.y === 0 ? 'transform 0.5s ease-out' : 'transform 0.1s ease-out',
                }}
                className="relative bg-white/95 rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-200/50 p-5 sm:p-6 backdrop-blur-sm transition-shadow duration-300 hover:shadow-2xl hover:shadow-blue-500/15 overflow-hidden transform-style-3d"
              >
                {/* Dynamic 3D Glare Light */}
                <div 
                  className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle 300px at ${glare.x}% ${glare.y}%, rgba(37, 99, 235, 0.08), transparent 70%)`,
                  }}
                  aria-hidden="true"
                />
                
                {/* Header of the Security Composition */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 tracking-tight flex items-center gap-1.5">
                        <span>SecStack Node Guard</span>
                        <span className="text-[10px] font-mono text-slate-600">v3.4</span>
                      </div>
                      <div className="text-[11px] text-slate-600 font-mono">
                        Target: Infrastructure / App Layer
                      </div>
                    </div>
                  </div>

                  {/* Trigger simulated scan */}
                  <button
                    onClick={handleSimulateScan}
                    disabled={isScanning}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-medium text-slate-700 bg-slate-50 hover:bg-slate-100 active:bg-slate-200 border border-slate-200 rounded-md transition-colors disabled:opacity-60 cursor-pointer"
                    title="Run an illustrative security audit simulation"
                  >
                    <RefreshCw className={`w-3 h-3 ${isScanning ? 'animate-spin text-blue-600' : ''}`} />
                    <span>{isScanning ? 'Inspecting...' : 'Test Audit'}</span>
                  </button>
                </div>

                {/* Operations Center Image Banner */}
                <div className="relative mt-4 h-28 w-full rounded-xl overflow-hidden border border-slate-200/80 shadow-inner">
                  <img
                    src={ASSETS.heroCyberInfrastructure}
                    alt="Cybersecurity Operations and Defense Infrastructure"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent flex items-end p-2.5">
                    <div className="flex items-center justify-between w-full text-[10px] font-mono text-slate-200">
                      <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                        Live Security Ops Hub
                      </span>
                      <span className="text-blue-300">Active Monitoring</span>
                    </div>
                  </div>
                </div>

                {/* Scan Status Summary Bar */}
                <div className="my-4 p-3 bg-slate-50/80 rounded-xl border border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-teal-500" />
                    <div>
                      <div className="text-xs font-semibold text-slate-800">
                        {isScanning ? 'Security Scan In Progress' : 'All Defenses Operational'}
                      </div>
                      <div className="text-[10px] text-slate-600 font-mono">
                        Illustrative Diagnostic Overview
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-mono font-bold text-slate-800 tabular-nums">
                      {isScanning ? `${Math.min(100, (scanStep + 1) * 25)}%` : '100%'}
                    </div>
                    <div className="text-[10px] text-slate-600">Compliance</div>
                  </div>
                </div>

                {/* Scan Items Checklist */}
                <div className="space-y-2.5">
                  {scanItems.map((item, index) => {
                    const isPassed = !isScanning || scanStep >= index;
                    return (
                      <div
                        key={item.label}
                        className={`flex items-center justify-between p-2.5 rounded-lg border text-xs transition-all ${
                          isPassed
                            ? 'bg-white border-slate-100 text-slate-800'
                            : 'bg-slate-50/50 border-dashed border-slate-200 text-slate-400'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          {isPassed ? (
                            <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                          ) : (
                            <div className="w-3.5 h-3.5 rounded-full border border-slate-300 animate-spin border-t-blue-500 shrink-0" />
                          )}
                          <span className="font-medium truncate max-w-[210px] sm:max-w-xs">{item.label}</span>
                        </div>
                        <span className="text-[11px] font-mono text-slate-500 shrink-0 pl-2">
                          {isPassed ? item.status : 'Pending...'}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Abstract Interactive Network Node Graph Preview */}
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono mb-2">
                    <span className="flex items-center gap-1">
                      <Cpu className="w-3 h-3 text-blue-600" />
                      Digital Surface Mapping
                    </span>
                    <span>Multi-Layer Topology</span>
                  </div>

                  <div className="relative h-20 bg-gradient-to-b from-slate-50 to-blue-50/30 rounded-lg border border-slate-100 overflow-hidden flex items-center justify-center">
                    <svg className="w-full h-full" viewBox="0 0 360 80" fill="none">
                      {/* Connection lines */}
                      <path d="M40 40 L110 25 L180 50 L250 25 L320 40" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="3 3" />
                      <path d="M110 25 L180 20 L250 25" stroke="#93C5FD" strokeWidth="1.5" />
                      <path d="M40 40 L180 50 L320 40" stroke="#99F6E4" strokeWidth="1" opacity="0.6" />

                      {/* Node 1: Web Gateway */}
                      <circle cx="40" cy="40" r="10" fill="#FFFFFF" stroke="#2563EB" strokeWidth="2" />
                      <circle cx="40" cy="40" r="4" fill="#2563EB" />
                      <text x="40" y="60" textAnchor="middle" fontSize="8" fill="#64748B" fontFamily="monospace">CDN/DNS</text>

                      {/* Node 2: App Firewalls */}
                      <circle cx="110" cy="25" r="9" fill="#FFFFFF" stroke="#0D9488" strokeWidth="2" />
                      <circle cx="110" cy="25" r="3.5" fill="#0D9488" />
                      <text x="110" y="44" textAnchor="middle" fontSize="8" fill="#64748B" fontFamily="monospace">WAF</text>

                      {/* Node 3: Core WordPress / App Stack */}
                      <circle cx="180" cy="30" r="13" fill="#FFFFFF" stroke="#1E293B" strokeWidth="2" />
                      <circle cx="180" cy="30" r="5" fill="#2563EB" />
                      <text x="180" y="54" textAnchor="middle" fontSize="8" fill="#1E293B" fontWeight="bold" fontFamily="monospace">Core Stack</text>

                      {/* Node 4: Hardened DB */}
                      <circle cx="250" cy="25" r="9" fill="#FFFFFF" stroke="#0D9488" strokeWidth="2" />
                      <circle cx="250" cy="25" r="3.5" fill="#0D9488" />
                      <text x="250" y="44" textAnchor="middle" fontSize="8" fill="#64748B" fontFamily="monospace">Database</text>

                      {/* Node 5: Threat Audit Layer */}
                      <circle cx="320" cy="40" r="10" fill="#FFFFFF" stroke="#2563EB" strokeWidth="2" />
                      <circle cx="320" cy="40" r="4" fill="#2563EB" />
                      <text x="320" y="60" textAnchor="middle" fontSize="8" fill="#64748B" fontFamily="monospace">Audit Rig</text>
                    </svg>
                  </div>
                </div>

                {/* Explicit illustrative notice compliant with brief */}
                <div className="mt-3 text-[10px] text-slate-500 text-center font-mono">
                  * Illustrative diagnostic architecture. Real audits conducted under authorized scope.
                </div>

              </div>

              {/* Floating Accent Card 1: Performance / Core Web Vitals */}
              <div className="hidden sm:flex absolute -bottom-5 -left-6 bg-white/95 backdrop-blur-md rounded-xl p-3 border border-slate-200 shadow-lg items-center gap-3 animate-float-slow">
                <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center text-teal-600">
                  <Server className="w-4 h-4" />
                </div>
                <div className="pr-1">
                  <div className="text-[11px] font-semibold text-slate-900">Performance Tuned</div>
                  <div className="text-[10px] text-slate-500 font-mono">Core Web Vitals Optimized</div>
                </div>
              </div>

              {/* Floating Accent Card 2: Security Audit Ready */}
              <div className="hidden sm:flex absolute -top-5 -right-6 bg-white/95 backdrop-blur-md rounded-xl p-3 border border-slate-200 shadow-lg items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                  <Lock className="w-4 h-4" />
                </div>
                <div className="pr-1">
                  <div className="text-[11px] font-semibold text-slate-900">Authorized Testing</div>
                  <div className="text-[10px] text-slate-500 font-mono">Risk-Focused Reporting</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
