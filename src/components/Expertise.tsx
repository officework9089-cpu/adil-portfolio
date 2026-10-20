import React, { useState } from 'react';
import { ShieldCheck, Code, Cpu, Terminal, Layers, Activity } from 'lucide-react';
import { EXPERTISE_GROUPS } from '../data/portfolioData';

export const Expertise: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredGroups = selectedCategory === 'all'
    ? EXPERTISE_GROUPS
    : EXPERTISE_GROUPS.filter((g) => g.id === selectedCategory);

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'cybersecurity':
        return <ShieldCheck className="w-5 h-5 text-blue-600" />;
      case 'development':
        return <Code className="w-5 h-5 text-indigo-600" />;
      case 'performance':
        return <Activity className="w-5 h-5 text-teal-600" />;
      default:
        return <Layers className="w-5 h-5 text-slate-700" />;
    }
  };

  return (
    <section id="expertise" className="py-20 md:py-28 bg-[#F5F8FC]/60 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-bold tracking-wider text-blue-600 uppercase mb-2">
              TECHNICAL EXPERTISE
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight text-balance">
              Expertise Across the Digital Stack.
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Systematic competencies honed across vulnerability analysis, CMS architecture, and performance engineering.
            </p>
          </div>

          {/* Interactive Category Filter Tabs (Zero-pill compliant button group) */}
          <div className="flex items-center gap-1.5 p-1 bg-white border border-slate-200 rounded-xl shadow-xs self-start md:self-auto overflow-x-auto max-w-full">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                selectedCategory === 'all'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              All Domains
            </button>
            <button
              onClick={() => setSelectedCategory('cybersecurity')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                selectedCategory === 'cybersecurity'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Cybersecurity
            </button>
            <button
              onClick={() => setSelectedCategory('development')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                selectedCategory === 'development'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Web Development
            </button>
            <button
              onClick={() => setSelectedCategory('performance')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                selectedCategory === 'performance'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              SEO & Performance
            </button>
          </div>
        </div>

        {/* Categories Stack */}
        <div className="space-y-10">
          {filteredGroups.map((group) => (
            <div
              key={group.id}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs"
            >
              {/* Category Header */}
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                    {getCategoryIcon(group.id)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-950">
                      {group.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                      {group.description}
                    </p>
                  </div>
                </div>
                <div className="hidden sm:block text-xs font-mono text-slate-400">
                  {group.skills.length} Capabilities
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-4 rounded-xl bg-slate-50/70 hover:bg-white border border-slate-100 hover:border-slate-200 hover:shadow-xs transition-all duration-200 group"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 group-hover:scale-125 transition-transform" />
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {skill.name}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed pl-3.5">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
