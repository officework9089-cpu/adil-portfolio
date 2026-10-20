import React, { useState } from 'react';
import { 
  FolderGit2, 
  Terminal, 
  Layers, 
  Gauge, 
  ShieldCheck, 
  ExternalLink, 
  CheckCircle2, 
  ArrowRight, 
  Play, 
  X, 
  Code2, 
  Sparkles,
  Cpu,
  Server,
  Activity,
  FileCheck2,
  Lock,
  Globe2
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectItem, ProjectCategory } from '../types';

interface ProjectsProps {
  onSelectProjectForContact: (projectTitle: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProjectForContact }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);
  const [terminalRunning, setTerminalRunning] = useState<boolean>(false);
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);

  // Filter tabs strictly accommodating user request: 'Security', 'WordPress', 'Optimization'
  const filterTabs = [
    { label: 'All Projects', value: 'All' },
    { label: 'Security', value: 'Security' },
    { label: 'WordPress', value: 'WordPress' },
    { label: 'Optimization', value: 'Optimization' },
    { label: 'Tools', value: 'Tools' },
  ];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.filterGroup === selectedCategory);

  const getCategoryIcon = (category: ProjectCategory) => {
    switch (category) {
      case 'Offensive Security':
        return <ShieldCheck className="w-4 h-4 text-blue-600" />;
      case 'WordPress Architecture':
        return <Code2 className="w-4 h-4 text-indigo-600" />;
      case 'Technical SEO':
        return <Gauge className="w-4 h-4 text-teal-600" />;
      case 'Full-Stack & Tools':
        return <Cpu className="w-4 h-4 text-slate-900" />;
    }
  };

  const handleOpenDemo = (project: ProjectItem) => {
    setActiveModalProject(project);
    if (project.demoType === 'terminal' && project.demoLogs) {
      setTerminalRunning(true);
      setTerminalLogs([]);
      project.demoLogs.forEach((log, index) => {
        setTimeout(() => {
          setTerminalLogs((prev) => [...prev, `[${log.timestamp}] [${log.level.toUpperCase()}] ${log.message}`]);
          if (index === project.demoLogs!.length - 1) {
            setTerminalRunning(false);
          }
        }, (index + 1) * 350);
      });
    }
  };

  const handleRerunTerminal = () => {
    if (!activeModalProject || !activeModalProject.demoLogs) return;
    setTerminalRunning(true);
    setTerminalLogs([]);
    activeModalProject.demoLogs.forEach((log, index) => {
      setTimeout(() => {
        setTerminalLogs((prev) => [...prev, `[${log.timestamp}] [${log.level.toUpperCase()}] ${log.message}`]);
        if (index === activeModalProject.demoLogs!.length - 1) {
          setTerminalRunning(false);
        }
      }, (index + 1) * 350);
    });
  };

  return (
    <section id="projects" className="py-20 md:py-28 bg-[#F8FAFC] relative overflow-hidden border-t border-slate-200/80">
      {/* Background Cyber Grid with Ambient Glowing Orb */}
      <div className="absolute inset-0 cyber-grid opacity-60 pointer-events-none" aria-hidden="true" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-72 bg-gradient-to-b from-blue-400/10 via-teal-400/5 to-transparent rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-bold tracking-wider text-blue-600 uppercase mb-2">
              FEATURED ENGINEERING & AUDITS
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight text-balance">
              Proven Deployments & Security Assessments.
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Explore 8 verified systems showcasing offensive testing, decoupled WordPress systems, and technical SEO architecture.
            </p>
          </div>

          {/* Interactive Category Filter Tabs: Security, WordPress, Optimization */}
          <div className="flex items-center gap-1.5 p-1 bg-white border border-slate-200/90 rounded-xl shadow-xs self-start md:self-auto overflow-x-auto max-w-full">
            {filterTabs.map((tab) => {
              const isSelected = selectedCategory === tab.value;
              return (
                <button
                  key={tab.value}
                  onClick={() => setSelectedCategory(tab.value)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200 whitespace-nowrap cursor-pointer ${
                    isSelected
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 8 Project Cards Grid with High-Fidelity Imagery, 3D Depth & Glowing Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch perspective-1000">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glow-card group relative bg-white/95 rounded-2xl border border-slate-200/90 overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                {/* Real High-Fidelity Project Image Showcase */}
                {project.imageUrl && (
                  <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-900 border-b border-slate-100">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Gradient scrim for text contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />

                    {/* Category pill on image */}
                    <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-md text-[11px] font-bold text-slate-800 shadow-xs">
                      {getCategoryIcon(project.category)}
                      <span>{project.category}</span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-white/90 font-mono">
                      <span className="font-semibold text-teal-300">Verified Deployment</span>
                      <span className="uppercase tracking-wider px-2 py-0.5 rounded bg-black/40 backdrop-blur-xs text-white">
                        {project.demoType} demo
                      </span>
                    </div>
                  </div>
                )}

                <div className="p-6 sm:p-7">
                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight group-hover:text-blue-600 transition-colors mb-2">
                    {project.title}
                  </h3>

                  {/* Tagline */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {project.tagline}
                  </p>

                  {/* Impact Metrics strip */}
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 mb-5">
                    <div className="text-[10px] uppercase tracking-wider font-mono font-semibold text-slate-600 mb-1.5">
                      Impact & Outcomes
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-mono font-medium text-slate-800">
                      {project.impactMetrics.map((metric, i) => (
                        <div key={i} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                          <span className="truncate" title={metric}>{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap items-center gap-1.5 mb-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-100/80 text-slate-700 border border-slate-200/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-6 sm:px-7 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => handleOpenDemo(project)}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-xs transition-colors cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5" />
                  <span>Inspect Live Demo</span>
                </button>

                <button
                  type="button"
                  onClick={() => onSelectProjectForContact(project.title)}
                  className="inline-flex items-center gap-1 text-xs font-medium text-slate-600 hover:text-slate-950 transition-colors cursor-pointer"
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Project Demo Modal */}
      {activeModalProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-md transition-opacity"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-slate-900 text-white border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-600/30 border border-blue-500/40 flex items-center justify-center text-blue-400">
                  <Terminal className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white tracking-tight">
                    {activeModalProject.title}
                  </h3>
                  <div className="text-[11px] font-mono text-slate-400">
                    Live Demo & Architecture Verification
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              
              {/* Optional Image Banner in Modal */}
              {activeModalProject.imageUrl && (
                <div className="relative h-44 w-full rounded-xl overflow-hidden border border-slate-200 shadow-xs">
                  <img
                    src={activeModalProject.imageUrl}
                    alt={activeModalProject.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-4">
                    <span className="text-xs text-white font-mono font-medium">
                      Operational Environment & Target Asset
                    </span>
                  </div>
                </div>
              )}

              {/* Description & Deliverables */}
              <div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {activeModalProject.description}
                </p>

                <div className="mt-4 space-y-1.5">
                  <div className="text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
                    Key Technical Deliverables
                  </div>
                  {activeModalProject.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* DEMO CONTENT ACCORDING TO TYPE */}
              
              {/* 1. Terminal Demo */}
              {activeModalProject.demoType === 'terminal' && (
                <div className="rounded-xl bg-slate-950 text-slate-200 p-4 font-mono text-xs border border-slate-800 shadow-inner">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3 text-slate-400 text-[11px]">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                      <span className="ml-2 font-mono text-slate-400">bash — interactive shell</span>
                    </div>
                    <button
                      type="button"
                      onClick={handleRerunTerminal}
                      disabled={terminalRunning}
                      className="px-2 py-0.5 rounded text-[10px] bg-slate-800 hover:bg-slate-700 text-slate-300 disabled:opacity-50 cursor-pointer"
                    >
                      {terminalRunning ? 'Executing...' : 'Re-run Command'}
                    </button>
                  </div>

                  <div className="text-blue-400 mb-2 font-semibold">
                    $ {activeModalProject.terminalCommand}
                  </div>

                  <div className="space-y-1 min-h-[110px]">
                    {terminalLogs.map((log, idx) => (
                      <div key={idx} className="text-slate-300">
                        {log}
                      </div>
                    ))}
                    {terminalRunning && (
                      <div className="flex items-center gap-2 text-slate-400 animate-pulse">
                        <span className="w-2 h-2 rounded-full bg-blue-500" />
                        <span>Inspecting remote endpoint...</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* 2. Architecture Demo */}
              {activeModalProject.demoType === 'architecture' && activeModalProject.architectureLayers && (
                <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
                  <div className="text-xs font-mono font-bold text-slate-800 mb-3 flex items-center justify-between">
                    <span>SYSTEM TOPOLOGY & LATENCY BENCHMARK</span>
                    <span className="text-teal-600 text-[11px]">VERIFIED OPERATIONAL</span>
                  </div>
                  <div className="space-y-2.5">
                    {activeModalProject.architectureLayers.map((layer, idx) => (
                      <div
                        key={idx}
                        className="p-3 bg-white rounded-lg border border-slate-200/80 flex items-center justify-between shadow-2xs"
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="text-xs font-mono font-bold text-slate-400">0{idx + 1}</span>
                          <div>
                            <div className="text-xs font-bold text-slate-900">{layer.layer}</div>
                            <div className="text-[11px] text-slate-500">{layer.role}</div>
                          </div>
                        </div>
                        <span className="text-[11px] font-mono text-teal-600 bg-teal-50 px-2 py-0.5 rounded border border-teal-100">
                          {layer.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 3. Metrics & Audit Demo */}
              {(activeModalProject.demoType === 'metrics' || activeModalProject.demoType === 'audit') && activeModalProject.statHighlights && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {activeModalProject.statHighlights.map((stat, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center"
                    >
                      <div className="text-2xl font-extrabold text-slate-900 font-mono tracking-tight text-blue-600">
                        {stat.value}
                      </div>
                      <div className="text-xs font-bold text-slate-800 mt-1">
                        {stat.label}
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5">
                        {stat.detail}
                      </div>
                    </div>
                  ))}
                </div>
              )}

            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-slate-500">
                Interested in this solution for your infrastructure?
              </span>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActiveModalProject(null)}
                  className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-950 border border-slate-200 rounded-lg bg-white cursor-pointer"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const title = activeModalProject.title;
                    setActiveModalProject(null);
                    onSelectProjectForContact(title);
                  }}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-xs cursor-pointer"
                >
                  <span>Discuss Similar Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
