import React, { useEffect, useState } from 'react';
import {
  Gauge,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Play,
  X,
  Code2,
  Cpu,
  Layers3,
  Sparkles,
  ExternalLink,
  BriefcaseBusiness,
} from 'lucide-react';

import { supabase } from '../lib/supabase';
import { ProjectItem, ProjectCategory } from '../types';

interface ProjectsProps {
  onSelectProjectForContact: (projectTitle: string) => void;
}

interface ProjectRow {
  id: string;
  title: string;
  category: string;
  filter_group: string;
  project_data: Record<string, unknown>;
}

export const Projects: React.FC<ProjectsProps> = ({
  onSelectProjectForContact,
}) => {
  const [projects, setProjects] = useState<ProjectItem[]>([]);
  const [projectsLoading, setProjectsLoading] = useState(true);
  const [projectsError, setProjectsError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] =
    useState<ProjectItem | null>(null);
  const [terminalRunning, setTerminalRunning] = useState(false);
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);

  useEffect(() => {
    let cancelled = false;

    async function loadProjects() {
      setProjectsLoading(true);
      setProjectsError(null);

      try {
        const { data, error } = await supabase
          .from('projects')
          .select('id, title, category, filter_group, project_data')
          .eq('is_published', true)
          .order('sort_order', { ascending: true });

        if (error) throw error;
        if (cancelled) return;

        const rows = (data ?? []) as ProjectRow[];

        const mappedProjects = rows.map((row) => ({
          ...row.project_data,
          id: row.id,
          title: row.title,
          category: row.category as ProjectCategory,
          filterGroup: row.filter_group,
        })) as ProjectItem[];

        setProjects(mappedProjects);
      } catch (error) {
        if (!cancelled) {
          setProjectsError(
            error instanceof Error
              ? error.message
              : 'An unexpected error occurred.',
          );
          setProjects([]);
        }
      } finally {
        if (!cancelled) setProjectsLoading(false);
      }
    }

    void loadProjects();

    return () => {
      cancelled = true;
    };
  }, []);

  const filterTabs = [
    { label: 'All projects', value: 'All' },
    { label: 'Security', value: 'Security' },
    { label: 'Websites', value: 'Website' },
    { label: 'Optimization', value: 'Optimization' },
    { label: 'Digital tools', value: 'Tools' },
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter(
          (project) =>
            project.filterGroup?.toLowerCase() ===
            selectedCategory.toLowerCase(),
        );

  const getCategoryIcon = (category: ProjectCategory) => {
    switch (category) {
      case 'Offensive Security':
        return <ShieldCheck className="h-4 w-4" />;

      case 'Website Architecture':
        return <Code2 className="h-4 w-4" />;

      case 'Technical SEO':
        return <Gauge className="h-4 w-4" />;

      case 'Full-Stack & Tools':
        return <Cpu className="h-4 w-4" />;

      default:
        return <Layers3 className="h-4 w-4" />;
    }
  };

  const runTerminal = (project: ProjectItem) => {
    if (!project.demoLogs || terminalRunning) return;

    setTerminalRunning(true);
    setTerminalLogs([]);

    project.demoLogs.forEach((log, index) => {
      window.setTimeout(() => {
        setTerminalLogs((previous) => [
          ...previous,
          `${log.timestamp} · ${log.message}`,
        ]);

        if (index === project.demoLogs!.length - 1) {
          setTerminalRunning(false);
        }
      }, (index + 1) * 350);
    });
  };

  const handleOpenDemo = (project: ProjectItem) => {
    setTerminalLogs([]);
    setTerminalRunning(false);
    setActiveModalProject(project);

    if (project.demoType === 'terminal') {
      runTerminal(project);
    }
  };

  const closeModal = () => {
    setActiveModalProject(null);
    setTerminalLogs([]);
    setTerminalRunning(false);
  };

  const getCategoryStyle = (category: ProjectCategory) => {
    switch (category) {
      case 'Offensive Security':
        return 'bg-violet-50 text-violet-700 border-violet-100';

      case 'Website Architecture':
        return 'bg-blue-50 text-blue-700 border-blue-100';

      case 'Technical SEO':
        return 'bg-emerald-50 text-emerald-700 border-emerald-100';

      case 'Full-Stack & Tools':
        return 'bg-amber-50 text-amber-700 border-amber-100';

      default:
        return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  return (
    <section
      id="projects"
      className="relative overflow-hidden border-t border-slate-100 bg-white py-20 sm:py-24 lg:py-32"
    >
      {/* Soft, understated background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-blue-50/70 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-indigo-50/50 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section introduction */}
        <div className="mb-12 flex flex-col gap-8 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            {/* <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/70 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-blue-700">
              <Sparkles className="h-3.5 w-3.5" />
              Selected work
            </div> */}

            <h2 className="text-2xl font-semibold leading-[1.12] tracking-[-0.045em] text-slate-950 sm:text-3xl lg:text-4xl">
              Thoughtful solutions.
              <span className="mt-1 block text-slate-400">
                Measurable impact.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              A selection of digital experiences, security assessments,
              and performance improvements designed around real business
              needs.
            </p>
          </div>

          <div className="flex items-center gap-3 border-t border-slate-200 pt-5 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
              <BriefcaseBusiness className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">
                A selection of projects
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Strategy, engineering & optimization
              </p>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-9 flex flex-col gap-4 border-b border-slate-200 pb-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">
            Explore work by area of expertise
          </p>

          <div className="-mx-1 flex max-w-full gap-1.5 overflow-x-auto px-1 pb-1">
            {filterTabs.map((tab) => (
              <button
                key={tab.value}
                type="button"
                onClick={() => setSelectedCategory(tab.value)}
                aria-pressed={selectedCategory === tab.value}
                className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${
                  selectedCategory === tab.value
                    ? 'bg-slate-950 text-white shadow-sm'
                    : 'bg-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-950'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Loading state */}
        {projectsLoading && (
          <div
            role="status"
            className="grid grid-cols-1 gap-6 md:grid-cols-4"
          >
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white"
              >
                <div className="h-56 animate-pulse bg-slate-100" />
                <div className="space-y-4 p-7">
                  <div className="h-3 w-28 animate-pulse rounded bg-slate-100" />
                  <div className="h-6 w-3/4 animate-pulse rounded bg-slate-100" />
                  <div className="h-4 w-full animate-pulse rounded bg-slate-100" />
                  <div className="h-4 w-2/3 animate-pulse rounded bg-slate-100" />
                </div>
              </div>
            ))}
            <span className="sr-only">Loading selected projects...</span>
          </div>
        )}

        {/* Error state */}
        {!projectsLoading && projectsError && (
          <div
            role="alert"
            className="rounded-2xl border border-red-200 bg-red-50 p-6 text-sm text-red-700"
          >
            <p className="font-semibold">Projects could not be loaded.</p>
            <p className="mt-1 break-words">{projectsError}</p>
          </div>
        )}

        {/* Empty state */}
        {!projectsLoading &&
          !projectsError &&
          filteredProjects.length === 0 && (
            <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50/70 px-6 py-16 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-slate-500 shadow-sm ring-1 ring-slate-200">
                <Layers3 className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold tracking-tight text-slate-900">
                Nothing to show just yet
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                Try another category to explore more projects.
              </p>
            </div>
          )}

        {/* Project cards */}
        {!projectsLoading &&
          !projectsError &&
          filteredProjects.length > 0 && (
            <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 ">
              {filteredProjects.map((project, index) => (
                <article
                  key={project.id}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/90 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_20px_60px_-25px_rgba(15,23,42,0.18)]"
                >
                  {/* Project image or refined visual placeholder */}
                  <div className="relative h-56 shrink-0 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/70 to-indigo-100/70 sm:h-64">
                    {project.imageUrl ? (
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div
                          aria-hidden="true"
                          className="absolute inset-0 opacity-50"
                          style={{
                            backgroundImage:
                              'radial-gradient(#94a3b8 0.8px, transparent 0.8px)',
                            backgroundSize: '22px 22px',
                          }}
                        />
                        <div className="absolute -right-12 -top-16 h-56 w-56 rounded-full border border-white/80" />
                        <div className="absolute -right-3 -top-7 h-40 w-40 rounded-full border border-white/80" />
                        <div className="absolute -bottom-24 -left-8 h-48 w-48 rounded-full bg-blue-200/30 blur-2xl" />

                        <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl border border-white/80 bg-white/80 text-slate-800 shadow-[0_12px_35px_-15px_rgba(15,23,42,0.25)] backdrop-blur-sm transition-transform duration-300 group-hover:-translate-y-1">
                          {getCategoryIcon(project.category)}
                          <span className="absolute -right-2 -top-2 h-3 w-3 rounded-full border-2 border-white bg-emerald-400" />
                        </div>
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-white/10" />

                    <div className="absolute left-5 top-5">
                      <span
                        className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold shadow-sm backdrop-blur-md ${getCategoryStyle(project.category)}`}
                      >
                        {getCategoryIcon(project.category)}
                        {project.category}
                      </span>
                    </div>

                    <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3">
                      <span className="text-xs font-medium tracking-wide text-white drop-shadow">
                        PROJECT {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="rounded-full border border-white/40 bg-white/90 px-3 py-1.5 text-xs font-medium text-slate-700 backdrop-blur-sm">
                        {project.demoType === 'terminal'
                          ? 'Security & tooling'
                          : project.demoType === 'architecture'
                            ? 'Digital architecture'
                            : project.demoType === 'audit'
                              ? 'Security review'
                              : project.demoType === 'metrics'
                                ? 'Performance'
                                : 'Case study'}
                      </span>
                    </div>
                  </div>

                  {/* Project details */}
                  <div className="flex flex-1 flex-col p-6 sm:p-8">
                    <h3 className="text-xl font-semibold leading-snug tracking-[-0.025em] text-slate-950 transition-colors duration-200 group-hover:text-blue-700 sm:text-2xl">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-[15px]">
                      {project.tagline}
                    </p>

                    {/* Outcomes */}
                    {!!project.impactMetrics?.length && (
                      <div className="mt-6 border-t border-slate-100 pt-5">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                          Project highlights
                        </p>

                        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                          {project.impactMetrics.map((metric, metricIndex) => (
                            <div
                              key={`${project.id}-metric-${metricIndex}`}
                              className="flex items-start gap-2.5 text-sm leading-5 text-slate-700"
                            >
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                              <span>{metric}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Technology tags: subtle rather than developer-console styling */}
                    {!!project.technologies?.length && (
                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Actions anchored at card bottom */}
                    <div className="mt-auto flex items-center justify-between gap-3 border-t border-slate-100 pt-6">
                      <button
                        type="button"
                        onClick={() => handleOpenDemo(project)}
                        className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      >
                        <Play className="h-4 w-4" />
                        Explore project
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          onSelectProjectForContact(project.title)
                        }
                        className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                      >
                        Discuss
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

        {/* Closing call to action */}
        {!projectsLoading && !projectsError && projects.length > 0 && (
          <div className="mt-14 flex flex-col items-start justify-between gap-5 rounded-3xl border border-slate-200 bg-slate-50/80 p-7 sm:p-9 md:flex-row md:items-center">
            <div className="max-w-xl">
              <h3 className="text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl">
                Have a project in mind?
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">
                Let’s discuss your goals and find a practical solution
                tailored to your business.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onSelectProjectForContact('Custom project')}
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              Start a conversation
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>

      {/* Project details modal */}
      {activeModalProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/45 p-3 backdrop-blur-sm sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={activeModalProject.title}
          onClick={(event) => {
            if (event.target === event.currentTarget) closeModal();
          }}
        >
          <div className="flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-3xl border border-white/70 bg-white shadow-[0_30px_100px_-30px_rgba(15,23,42,0.45)]">
            {/* Modal header */}
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 px-5 py-5 sm:px-8 sm:py-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                  {getCategoryIcon(activeModalProject.category)}
                </div>

                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-blue-700">
                    Project overview
                  </span>
                  <h3 className="mt-1.5 text-lg font-semibold leading-snug tracking-tight text-slate-950 sm:text-2xl">
                    {activeModalProject.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-slate-500">
                    {activeModalProject.category}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={closeModal}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                aria-label="Close project details"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal body */}
            <div className="space-y-8 overflow-y-auto p-5 sm:p-8">
              {activeModalProject.imageUrl && (
                <div className="h-48 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 sm:h-64">
                  <img
                    src={activeModalProject.imageUrl}
                    alt={activeModalProject.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              )}

              <div>
                <h4 className="text-sm font-semibold text-slate-950">
                  About this project
                </h4>
                <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                  {activeModalProject.description}
                </p>
              </div>

              {!!activeModalProject.deliverables?.length && (
                <div>
                  <h4 className="text-sm font-semibold text-slate-950">
                    Scope & deliverables
                  </h4>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {activeModalProject.deliverables.map((item, index) => (
                      <div
                        key={`${activeModalProject.id}-deliverable-${index}`}
                        className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50/70 p-4"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                        <span className="text-sm leading-6 text-slate-700">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {!!activeModalProject.technologies?.length && (
                <div>
                  <h4 className="text-sm font-semibold text-slate-950">
                    Technologies & capabilities
                  </h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {activeModalProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-slate-200 bg-white px-3.5 py-2 text-xs font-medium text-slate-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Terminal demonstration */}
              {activeModalProject.demoType === 'terminal' && (
                <div className="overflow-hidden rounded-2xl border border-slate-200">
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 bg-slate-50 px-4 py-4 sm:px-5">
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900">
                        Demonstration results
                      </h4>
                      <p className="mt-1 text-xs text-slate-500">
                        Illustrative project output
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setTerminalLogs([]);
                        setTerminalRunning(false);
                        runTerminal(activeModalProject);
                      }}
                      disabled={terminalRunning}
                      className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 transition-colors hover:border-blue-200 hover:text-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <Play className="h-3.5 w-3.5" />
                      {terminalRunning ? 'Running...' : 'Run again'}
                    </button>
                  </div>

                  <div className="space-y-4 p-4 sm:p-5">
                    {activeModalProject.terminalCommand && (
                      <div className="rounded-xl bg-slate-950 p-4">
                        <p className="mb-2 text-[11px] font-medium uppercase tracking-wider text-slate-400">
                          Demonstration command
                        </p>
                        <p className="break-all font-mono text-xs leading-6 text-emerald-300">
                          {activeModalProject.terminalCommand}
                        </p>
                      </div>
                    )}

                    <div className="space-y-3" aria-live="polite">
                      {terminalLogs.map((log, index) => (
                        <div
                          key={`${activeModalProject.id}-log-${index}`}
                          className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                        >
                          <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
                          <span className="break-words">{log}</span>
                        </div>
                      ))}

                      {terminalRunning && (
                        <p className="text-sm text-slate-500">
                          Processing demonstration...
                        </p>
                      )}

                      {!terminalRunning && terminalLogs.length === 0 && (
                        <p className="text-sm leading-6 text-slate-500">
                          Run the demonstration to view its illustrative
                          results.
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Architecture overview */}
              {activeModalProject.demoType === 'architecture' &&
                !!activeModalProject.architectureLayers?.length && (
                  <div>
                    <h4 className="text-sm font-semibold text-slate-950">
                      Solution architecture
                    </h4>
                    <div className="mt-4 space-y-3">
                      {activeModalProject.architectureLayers.map(
                        (layer, index) => (
                          <div
                            key={`${activeModalProject.id}-layer-${index}`}
                            className="flex items-start justify-between gap-4 rounded-2xl border border-slate-200 p-4 transition-colors hover:border-blue-200"
                          >
                            <div className="flex min-w-0 items-start gap-3">
                              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-xs font-semibold text-slate-600">
                                {String(index + 1).padStart(2, '0')}
                              </span>
                              <div>
                                <p className="text-sm font-semibold text-slate-900">
                                  {layer.layer}
                                </p>
                                <p className="mt-1 text-sm leading-6 text-slate-500">
                                  {layer.role}
                                </p>
                              </div>
                            </div>

                            <span className="shrink-0 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
                              {layer.status}
                            </span>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                )}

              {/* Audit and performance highlights */}
              {(activeModalProject.demoType === 'metrics' ||
                activeModalProject.demoType === 'audit') &&
                !!activeModalProject.statHighlights?.length && (
                  <div>
                    <h4 className="text-sm font-semibold text-slate-950">
                      Key findings
                    </h4>
                    <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {activeModalProject.statHighlights.map((stat, index) => (
                        <div
                          key={`${activeModalProject.id}-stat-${index}`}
                          className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5"
                        >
                          <p className="text-2xl font-semibold tracking-tight text-slate-950">
                            {stat.value}
                          </p>
                          <p className="mt-2 text-sm font-semibold text-slate-800">
                            {stat.label}
                          </p>
                          <p className="mt-1.5 text-xs leading-5 text-slate-500">
                            {stat.detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              {!!activeModalProject.impactMetrics?.length && (
                <div>
                  <h4 className="text-sm font-semibold text-slate-950">
                    Project outcomes
                  </h4>
                  <div className="mt-3 space-y-3">
                    {activeModalProject.impactMetrics.map((metric, index) => (
                      <div
                        key={`${activeModalProject.id}-impact-${index}`}
                        className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                      >
                        <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
                        <span>{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal footer */}
            <div className="flex flex-col gap-4 border-t border-slate-100 bg-white px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8">
              <p className="text-sm text-slate-500">
                Interested in a similar solution?
              </p>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={closeModal}
                  className="rounded-full border border-slate-200 px-5 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
                >
                  Close
                </button>

                <button
                  type="button"
                  onClick={() => {
                    const title = activeModalProject.title;
                    closeModal();
                    onSelectProjectForContact(title);
                  }}
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                >
                  Discuss project
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
