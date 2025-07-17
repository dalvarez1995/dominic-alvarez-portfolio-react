import React from 'react';
import type { Project } from '../config/portfolio.config';

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
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const getTypeColor = (type: Project['type']) => {
    const typeColors = {
      enterprise: 'from-primary-500 to-accent-600',
      personal: 'from-blue-500 to-purple-600', 
      freelance: 'from-green-500 to-blue-600'
    };
    return typeColors[type];
  };

  const getTechnologyColor = (color: string) => {
    const colorMap = {
      primary: 'bg-primary-500/20 text-primary-300 border-primary-500/30',
      accent: 'bg-accent-500/20 text-accent-300 border-accent-500/30',
      blue: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
      gray: 'bg-gray-500/20 text-gray-300 border-gray-500/30'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.gray;
  };

  const getFeatureColor = (color: string) => {
    const colorMap = {
      primary: 'text-primary-400',
      accent: 'text-accent-400',
      blue: 'text-blue-400'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  return (
    <section 
      id="projects" 
      className={`py-24 bg-linear-to-br from-gray-900 via-gray-800 to-primary-900 relative overflow-hidden ${className}`}
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-float animate-fade-in stagger-1"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent-500/20 rounded-full blur-3xl animate-float animate-fade-in stagger-2"></div>
        <div className="absolute top-3/4 right-3/4 w-64 h-64 bg-blue-500/15 rounded-full blur-2xl animate-float animate-fade-in stagger-3"></div>
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-primary-900/20 to-transparent animate-pulse opacity-50"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-40 animate-fade-in-up stagger-2">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-8 animate-fade-in-down stagger-3 hover:animate-glow transition-all duration-500">
            {title}
            <span className="block w-24 h-1 bg-linear-to-r from-primary-400 to-accent-400 mx-auto mt-6 rounded-full animate-slide-in-left stagger-4 hover:w-32 transition-all duration-300"></span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up stagger-5 hover:text-white transition-all duration-300 mb-8">
            {description}
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16 pt-12">
          {projects.map((project, index) => (
            <article 
              key={project.id}
              className={`group relative bg-white/5 backdrop-blur-xs border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 hover:border-white/20 hover:scale-[1.03] transition-all duration-500 animate-bounce-in stagger-${6 + index} cursor-pointer shadow-lg hover:shadow-2xl`}
            >
              <div className="p-8">
                {/* Project Header */}
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-linear-to-r ${getTypeColor(project.type)} rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 group-hover:animate-pulse`}>
                    <i className={`fas ${
                      project.category.includes('Payment') ? 'fa-credit-card' :
                      project.category.includes('Document') ? 'fa-file-arrow-down' :
                      project.category.includes('Mobile') ? 'fa-mobile-screen' :
                      'fa-code'
                    } text-white text-2xl group-hover:animate-bounce`}></i>
                  </div>
                  <div>
                    <span className={`${getFeatureColor(project.type === 'personal' ? 'blue' : project.type === 'enterprise' ? 'accent' : 'primary')} text-sm font-bold uppercase tracking-wider animate-fade-in-up group-hover:animate-pulse`}>
                      {project.category}
                    </span>
                    <h3 className={`text-2xl font-bold text-white group-hover:${getFeatureColor(project.type === 'personal' ? 'blue' : project.type === 'enterprise' ? 'primary' : 'accent')} transition-colors duration-300 animate-slide-in-left`}>
                      {project.title}
                    </h3>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-gray-300 text-lg leading-relaxed mb-6 group-hover:text-white transition-all duration-300 animate-fade-in-up">
                  {project.description}
                </p>
                
                {/* Features */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {project.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="bg-white/5 rounded-lg p-3 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all duration-300 animate-fade-in-up group/feature cursor-pointer" style={{animationDelay: `${featureIndex * 0.1}s`}}>
                      <div className={`flex items-center ${getFeatureColor(feature.color)} mb-1 group-hover/feature:animate-pulse`}>
                        <i className={`${feature.icon} mr-2 text-sm group-hover/feature:animate-bounce`}></i>
                        <span className="font-semibold text-sm">{feature.title}</span>
                      </div>
                      <p className="text-gray-400 text-xs leading-tight group-hover/feature:text-gray-300 transition-colors duration-300">{feature.description}</p>
                    </div>
                  ))}
                </div>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className={`px-3 py-1 rounded-full text-sm font-medium border ${getTechnologyColor(tech.color)} hover:scale-110 hover:animate-pulse transition-all duration-200 cursor-pointer animate-fade-in`}
                      style={{animationDelay: `${techIndex * 0.05}s`}}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
                
                {/* Project Image (for personal projects) */}
                {project.image && (
                  <div className="mb-6">
                    <div className="bg-white/5 rounded-2xl p-4 border border-white/10 w-full h-32 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
                      <img 
                        src={project.image} 
                        alt={`${project.title} Screenshot`} 
                        className="max-h-24 max-w-full object-contain rounded-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 animate-fade-in"
                      />
                    </div>
                  </div>
                )}
                
                {/* Company Info */}
                {project.company ? (
                  <div className="mt-6 pt-6 border-t border-white/10 group-hover:border-white/20 transition-all duration-300">
                    <div className="flex items-center justify-center">
                      <div className="bg-white/10 backdrop-blur-xs rounded-2xl p-4 border border-white/20 w-full max-w-48 h-16 flex items-center justify-center group-hover:bg-white/15 group-hover:scale-105 transition-all duration-300">
                        <img 
                          src={project.company.logo} 
                          alt={project.company.name} 
                          className="max-h-8 w-auto object-contain opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 animate-fade-in"
                        />
                      </div>
                    </div>
                    <div className="text-center mt-3">
                      <span className="text-gray-400 text-xs group-hover:text-gray-300 transition-colors duration-300">{project.company.description}</span>
                    </div>
                  </div>
                ) : (
                  <div className="text-center">
                    {/* Type Badge at the end */}
                    <span className={`px-3 py-1.5 bg-linear-to-r ${getTypeColor('personal')} text-white text-xs font-bold rounded-full shadow-lg group-hover:animate-bounce`}>
                      💼 Personal
                    </span>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="text-center animate-fade-in-up stagger-15">
          <div className="bg-white/5 backdrop-blur-xs border border-white/10 rounded-3xl p-12 max-w-3xl mx-auto hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all duration-500 group cursor-pointer">
            <h3 className="text-3xl font-bold text-white mb-4 group-hover:animate-glow transition-all duration-500">{cta.title}</h3>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed group-hover:text-white transition-all duration-300">
              {cta.description}
            </p>
            <button
              onClick={() => scrollToSection('#contact')}
              className="group/btn inline-flex items-center px-8 py-4 bg-linear-to-r from-primary-600 to-accent-600 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-bounce-in"
            >
              <span>{cta.buttonText}</span>
              <i className="fas fa-arrow-right ml-2 group-hover/btn:translate-x-2 group-hover/btn:animate-bounce transition-all duration-300"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
