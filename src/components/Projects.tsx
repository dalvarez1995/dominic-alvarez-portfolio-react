import React, { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import type { Project } from '../types/project.types';

// ─── Lightbox ────────────────────────────────────────────────────────────────

interface LightboxProps {
  images: string[];
  labels?: string[];
  startIndex: number;
  title: string;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ images, labels, startIndex, title, onClose }) => {
  const [current, setCurrent] = useState(startIndex);

  const prev = useCallback(() => setCurrent(c => (c - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setCurrent(c => (c + 1) % images.length), [images.length]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose, prev, next]);

  return createPortal(
    <div
      className="fixed inset-0 z-[100] bg-black/92 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Prominent close button — fixed top-right, always visible */}
      <button
        onClick={onClose}
        className="fixed top-4 right-4 z-[101] flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white rounded-full backdrop-blur-sm transition-all duration-200 text-sm font-medium"
        aria-label="Close"
      >
        <i className="fas fa-times"></i>
        <span>Cerrar</span>
      </button>

      {/* Counter — fixed top-left */}
      {images.length > 1 && (
        <div className="fixed top-4 left-4 z-[101] px-3 py-2 bg-black/50 border border-white/10 text-white/70 rounded-full backdrop-blur-sm text-sm">
          {current + 1} / {images.length}
        </div>
      )}

      {/* Main content — stops backdrop click */}
      <div
        className="relative flex flex-col items-center w-full h-full px-4 pt-16 pb-6"
        onClick={e => e.stopPropagation()}
      >
        {/* Image */}
        <div className="relative flex-1 flex items-center justify-center w-full">
          <img
            src={images[current]}
            alt={labels?.[current] ?? `${title} screenshot ${current + 1}`}
            className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
            style={{ maxHeight: 'calc(100vh - 140px)' }}
          />

          {/* Prev / Next arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-0 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/15 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-200 backdrop-blur-sm"
                aria-label="Previous"
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              <button
                onClick={next}
                className="absolute right-0 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/15 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-200 backdrop-blur-sm"
                aria-label="Next"
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </>
          )}
        </div>

        {/* Caption + dots */}
        <div className="flex flex-col items-center gap-3 mt-3 shrink-0">
          {labels?.[current] && (
            <p className="text-center text-gray-300 text-sm leading-relaxed max-w-xl">
              {labels[current]}
            </p>
          )}
          {images.length > 1 && (
            <div className="flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Screenshot ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? 'w-6 bg-cyan-400' : 'w-1.5 bg-white/30 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
};

// ─── Projects section ─────────────────────────────────────────────────────────

interface ProjectsProps {
  title: string;
  description: string;
  projects: Project[];
  cta: {
    title: string;
    description: string;
    buttonText: string;
  };
  className?: string;
}

const Projects: React.FC<ProjectsProps> = ({
  title,
  description,
  projects,
  cta,
  className = ''
}) => {
  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getTechnologyColor = (color: string) => {
    const colorMap = {
      primary: 'bg-primary-500/20 text-primary-300 border-primary-500/30',
      accent: 'bg-accent-500/20 text-accent-300 border-accent-500/30',
      blue: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
      gray: 'bg-gray-500/20 text-gray-300 border-gray-500/30'
    };
    return colorMap[color as keyof typeof colorMap] ?? colorMap.gray;
  };

  const getFeatureColor = (color: string) => {
    const colorMap = {
      primary: 'text-primary-400',
      accent: 'text-accent-400',
      blue: 'text-blue-400'
    };
    return colorMap[color as keyof typeof colorMap] ?? colorMap.primary;
  };

  const flagship = projects.find(p => p.flagship);
  const regularProjects = projects.filter(p => !p.flagship);

  return (
    <section
      id="projects"
      className={`py-24 bg-linear-to-br from-gray-900 via-gray-800 to-primary-900 relative overflow-hidden ${className}`}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            {title}
            <span className="block w-24 h-1 bg-linear-to-r from-accent-400 to-accent-600 mx-auto mt-4 rounded-full"></span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* Flagship Project */}
        {flagship && (
          <FlagshipCard
            project={flagship}
            getTechnologyColor={getTechnologyColor}
            getFeatureColor={getFeatureColor}
          />
        )}

        {/* Regular Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {regularProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              getTechnologyColor={getTechnologyColor}
              getFeatureColor={getFeatureColor}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in-up">
          <div className="bg-white/5 backdrop-blur-xs border border-white/10 rounded-3xl p-12 max-w-3xl mx-auto hover:bg-white/8 hover:border-white/20 transition-all duration-500">
            <h3 className="text-3xl font-bold text-white mb-4">{cta.title}</h3>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">{cta.description}</p>
            <button
              onClick={() => scrollToSection('#contact')}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:from-accent-400 hover:to-accent-500 transform hover:scale-[1.02] transition-all duration-300"
            >
              <span>{cta.buttonText}</span>
              <i className="fas fa-arrow-right ml-2"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── Flagship Card ────────────────────────────────────────────────────────────

interface SharedCardProps {
  project: Project;
  getTechnologyColor: (c: string) => string;
  getFeatureColor: (c: string) => string;
}

// Animated live-activity mockup for the Syncita flagship card
const SyncitaLiveMockup: React.FC = () => {
  const events = [
    { icon: 'fa-calendar-check', color: 'text-emerald-400', bg: 'bg-emerald-500/10', label: 'Cita confirmada', detail: 'María G. · 10:30 AM', time: 'ahora' },
    { icon: 'fa-credit-card', color: 'text-cyan-400', bg: 'bg-cyan-500/10', label: 'Pago recibido', detail: '$45.00 · Payphone', time: '1s' },
    { icon: 'fa-comment-dots', color: 'text-green-400', bg: 'bg-green-500/10', label: 'WhatsApp respondido', detail: 'Carlos M. · IA · 1.2s', time: '4s' },
    { icon: 'fa-robot', color: 'text-purple-400', bg: 'bg-purple-500/10', label: 'Agente IA', detail: 'Reagendado por usuario', time: '7s' },
    { icon: 'fa-bell', color: 'text-amber-400', bg: 'bg-amber-500/10', label: 'Recordatorios enviados', detail: '12 clientes · 24h', time: '12s' },
    { icon: 'fa-circle-check', color: 'text-emerald-400', bg: 'bg-emerald-500/10', label: 'Sesión completada', detail: 'Dr. López · #4 de 8', time: '18s' },
  ];

  return (
    <div className="relative bg-slate-900/70 border border-white/10 rounded-2xl overflow-hidden shadow-xl">
      {/* Window header */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/5 bg-slate-950/60">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400/70"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-green-400/70"></span>
        </div>
        <div className="flex items-center gap-2 text-[11px] text-white/40">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
          </span>
          <span>Live activity</span>
        </div>
        <a
          href="https://syncita.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] text-white/40 hover:text-cyan-300 transition-colors"
        >
          syncita.app
        </a>
      </div>

      {/* Stats strip */}
      <div className="grid grid-cols-3 gap-px bg-white/5 border-b border-white/5">
        {[
          { label: 'Citas hoy', value: '847', delta: '+12%' },
          { label: 'Ingresos', value: '$3.2k', delta: '+8%' },
          { label: 'IA replies', value: '124', delta: '+34%' },
        ].map((s, i) => (
          <div key={i} className="bg-slate-900/80 px-3 py-2.5">
            <div className="text-[10px] text-white/40 uppercase tracking-wider">{s.label}</div>
            <div className="flex items-baseline gap-1.5 mt-0.5">
              <span className="text-white font-bold text-base font-display">{s.value}</span>
              <span className="text-emerald-400 text-[10px] font-semibold">{s.delta}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Animated feed — masked container */}
      <div className="relative h-[200px] overflow-hidden syncita-feed-mask">
        <div className="syncita-feed-track px-3 py-2 space-y-2">
          {/* Render the list twice for a seamless loop */}
          {[...events, ...events].map((e, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-3 py-2 rounded-xl bg-white/[0.03] border border-white/5"
            >
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${e.bg}`}>
                <i className={`fas ${e.icon} ${e.color} text-sm`}></i>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white text-xs font-semibold truncate">{e.label}</div>
                <div className="text-white/50 text-[11px] truncate">{e.detail}</div>
              </div>
              <span className="text-white/30 text-[10px] font-mono flex-shrink-0">{e.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Local styles for the feed animation + mask */}
      <style>{`
        @keyframes syncita-feed-scroll {
          0%   { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .syncita-feed-track {
          animation: syncita-feed-scroll 18s linear infinite;
        }
        .syncita-feed-mask {
          -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%);
                  mask-image: linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%);
        }
        @media (prefers-reduced-motion: reduce) {
          .syncita-feed-track { animation: none; }
        }
      `}</style>
    </div>
  );
};

const FlagshipCard: React.FC<SharedCardProps> = ({ project, getTechnologyColor, getFeatureColor }) => {

  return (
    <div className="mb-12 animate-fade-in-up">
      <div className="relative bg-white/5 backdrop-blur-xs border border-accent-500/30 rounded-3xl overflow-hidden shadow-2xl hover:border-accent-500/50 transition-all duration-500">
        {/* Founder badge */}
        <div className="absolute top-6 right-6 z-10">
          <span className="px-3 py-1.5 bg-gradient-to-r from-accent-500 to-cyan-500 text-white text-xs font-bold rounded-full shadow-lg uppercase tracking-wider">
            Founder
          </span>
        </div>

        <div className="p-8 lg:p-12 grid lg:grid-cols-2 gap-10 items-start">
          {/* Left — content */}
          <div>
            {/* Category + logo + title */}
            <div className="mb-5">
              <span className="text-accent-400 text-sm font-bold uppercase tracking-wider">
                {project.category}
              </span>
              <div className="flex items-center gap-4 mt-2">
                {project.logo && (
                  <img
                    src={project.logo}
                    alt={`${project.title} logo`}
                    className="h-9 w-auto object-contain flex-shrink-0"
                  />
                )}
                {!project.logo && (
                  <h3 className="font-display text-3xl md:text-4xl font-black text-white">
                    {project.title}
                  </h3>
                )}
              </div>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Responsibilities */}
            {project.responsibilities && (
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-accent-400 uppercase tracking-wider mb-3">
                  Key Responsibilities
                </h4>
                <ul className="space-y-2">
                  {project.responsibilities.map((r, i) => (
                    <li key={i} className="flex items-start text-gray-300 text-sm">
                      <span className="text-accent-400 mr-2 mt-0.5 flex-shrink-0">&#9658;</span>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech, i) => (
                <span key={i} className={`px-3 py-1 rounded-full text-sm font-medium border ${getTechnologyColor(tech.color)}`}>
                  {tech.name}
                </span>
              ))}
            </div>

            {/* Links */}
            {project.links && project.links.length > 0 && (
              <div className="flex gap-3">
                {project.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-5 py-2.5 bg-accent-500/20 hover:bg-accent-500/30 border border-accent-500/40 hover:border-accent-500/60 text-accent-300 hover:text-accent-200 rounded-xl text-sm font-semibold transition-all duration-300"
                  >
                    <i className={`fas ${link.type === 'github' ? 'fa-github' : 'fa-arrow-up-right-from-square'} mr-2`}></i>
                    {link.type === 'github' ? 'Source Code' : 'Visit Live Site'}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Right — features + live status */}
          <div className="flex flex-col gap-4">
            {/* Live status banner */}
            <a
              href="https://syncita.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/25 hover:bg-emerald-500/20 hover:border-emerald-500/50 rounded-2xl px-5 py-3 transition-all duration-300 group"
            >
              <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-300 group-hover:text-emerald-200 text-sm font-medium flex-1">Live in production · syncita.app</span>
              <i className="fas fa-arrow-up-right-from-square text-emerald-400/60 group-hover:text-emerald-300 text-xs group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"></i>
            </a>

            {/* Feature cards */}
            <div className="grid grid-cols-2 gap-3">
              {project.features.map((feature, i) => (
                <div key={i} className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className={`flex items-center ${getFeatureColor(feature.color)} mb-1.5`}>
                    <i className={`${feature.icon} mr-2 text-sm`}></i>
                    <span className="font-semibold text-sm">{feature.title}</span>
                  </div>
                  <p className="text-gray-400 text-xs leading-tight">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Animated live activity mockup */}
            <SyncitaLiveMockup />
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── Regular Project Card ─────────────────────────────────────────────────────

interface ProjectCardProps extends SharedCardProps {
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, getTechnologyColor, getFeatureColor }) => {
  const [activeScreenshot, setActiveScreenshot] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const screenshots = project.screenshots ?? (project.image ? [project.image] : []);
  const labels = project.screenshotLabels;

  const categoryIcon =
    project.category.includes('Payment') ? 'fa-credit-card' :
    project.category.includes('Restaurant') || project.category.includes('POS') ? 'fa-utensils' :
    project.category.includes('Mobile') ? 'fa-mobile-screen' :
    'fa-code';

  return (
    <>
      <article className="group relative bg-white/5 backdrop-blur-xs border border-white/10 rounded-3xl overflow-hidden hover:bg-white/8 hover:border-white/20 hover:scale-[1.01] transition-all duration-500 shadow-lg hover:shadow-2xl">
        <div className="p-8">
          {/* Header */}
          <div className="flex items-center mb-5">
            <div className="w-14 h-14 bg-gradient-to-r from-accent-500/20 to-primary-700/40 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-105 transition-all duration-300 border border-accent-500/20">
              <i className={`fas ${categoryIcon} text-accent-300 text-xl`}></i>
            </div>
            <div>
              <span className="text-accent-400 text-xs font-bold uppercase tracking-wider">
                {project.category}
              </span>
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-300 leading-relaxed mb-5 group-hover:text-gray-200 transition-colors duration-300">
            {project.description}
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-2 mb-5">
            {project.features.map((feature, i) => (
              <div key={i} className="bg-white/5 rounded-lg p-3 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className={`flex items-center ${getFeatureColor(feature.color)} mb-1`}>
                  <i className={`${feature.icon} mr-2 text-xs`}></i>
                  <span className="font-semibold text-sm">{feature.title}</span>
                </div>
                <p className="text-gray-400 text-xs leading-tight">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.technologies.map((tech, i) => (
              <span key={i} className={`px-3 py-1 rounded-full text-xs font-medium border ${getTechnologyColor(tech.color)}`}>
                {tech.name}
              </span>
            ))}
          </div>

          {/* Screenshot gallery */}
          {screenshots.length > 0 && (
            <div className="mb-5">
              {/* Main preview — click to open lightbox */}
              <div
                className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 cursor-zoom-in group/img relative"
                onClick={() => setLightboxOpen(true)}
              >
                <img
                  src={screenshots[activeScreenshot]}
                  alt={labels?.[activeScreenshot] ?? `${project.title} screenshot ${activeScreenshot + 1}`}
                  className="w-full h-44 object-cover object-top group-hover/img:scale-[1.03] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/25 transition-colors duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 bg-black/70 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-sm">
                    <i className="fas fa-expand mr-1.5"></i>View full screen
                  </span>
                </div>
              </div>

              {/* Caption below preview */}
              {labels?.[activeScreenshot] && (
                <p className="text-center text-gray-500 text-xs mt-2 px-2 leading-snug">
                  {labels[activeScreenshot]}
                </p>
              )}

              {/* Thumbnails */}
              {screenshots.length > 1 && (
                <div className="flex gap-2 mt-2 justify-center">
                  {screenshots.map((src, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveScreenshot(i)}
                      aria-label={labels?.[i] ?? `Screenshot ${i + 1}`}
                      className={`relative w-11 h-8 rounded-md overflow-hidden border-2 transition-all duration-200 ${
                        i === activeScreenshot
                          ? 'border-accent-400 opacity-100 scale-110'
                          : 'border-white/20 opacity-50 hover:opacity-80 hover:border-white/40'
                      }`}
                    >
                      <img src={src} alt="" className="w-full h-full object-cover object-top" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Company */}
          {project.company && (
            <div className="pt-5 border-t border-white/10">
              <div className="flex items-center justify-center">
                <div className="bg-white/10 rounded-2xl p-3 border border-white/20 max-w-44 h-14 flex items-center justify-center hover:bg-white/15 transition-all duration-300">
                  <img
                    src={project.company.logo}
                    alt={project.company.name}
                    className="max-h-7 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>
              <p className="text-center text-gray-400 text-xs mt-2">{project.company.description}</p>
            </div>
          )}

          {/* Links */}
          {project.links && project.links.length > 0 && (
            <div className="flex gap-3 mt-4 pt-4 border-t border-white/10">
              {project.links.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-accent-500/10 hover:bg-accent-500/20 border border-accent-500/30 text-accent-300 rounded-lg text-sm font-medium transition-colors duration-200"
                >
                  <i className={`fas ${link.type === 'github' ? 'fa-github' : link.type === 'demo' ? 'fa-arrow-up-right-from-square' : 'fa-book'} mr-2`}></i>
                  {link.type === 'github' ? 'Code' : link.type === 'demo' ? 'Live Site' : 'Case Study'}
                </a>
              ))}
            </div>
          )}

          {/* Personal badge */}
          {!project.company && (!project.links || project.links.length === 0) && (
            <div className="text-center mt-2">
              <span className="px-3 py-1 bg-primary-700/50 text-primary-300 text-xs font-semibold rounded-full border border-primary-600/30">
                Personal Project
              </span>
            </div>
          )}
        </div>
      </article>

      {lightboxOpen && screenshots.length > 0 && (
        <Lightbox
          images={screenshots}
          labels={labels}
          startIndex={activeScreenshot}
          title={project.title}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
};

export default Projects;

