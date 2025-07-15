import React from 'react';
import type { StatItem, SkillCategory } from '../config/portfolio.config';

interface AboutProps {
  title?: string;
  description: string[];
  stats: StatItem[];
  skills: SkillCategory[];
  profileImage: string;
  className?: string;
}

const About: React.FC<AboutProps> = ({
  title = "About Me",
  description,
  stats,
  skills,
  profileImage,
  className = ''
}) => {
  const getColorClasses = (color: string) => {
    const colorMap = {
      primary: {
        bg: 'bg-linear-to-r from-primary-600 to-primary-700',
        text: 'text-primary-700',
        bgLight: 'bg-primary-100'
      },
      accent: {
        bg: 'bg-linear-to-r from-accent-600 to-accent-700',
        text: 'text-accent-700',
        bgLight: 'bg-accent-100'
      },
      blue: {
        bg: 'bg-linear-to-r from-blue-600 to-blue-700',
        text: 'text-blue-700',
        bgLight: 'bg-blue-100'
      }
    };
    
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  return (
    <section 
      id="about" 
      className={`py-24 bg-linear-to-b from-gray-50 to-white relative overflow-hidden ${className}`}
    >
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary-100 rounded-full blur-3xl opacity-70 animate-float animate-fade-in stagger-1"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-100 rounded-full blur-3xl opacity-50 animate-float animate-fade-in stagger-2"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-blue-100 rounded-full blur-2xl opacity-40 animate-float animate-fade-in stagger-3"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-32 animate-fade-in-up stagger-2">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-down stagger-3 hover:animate-glow transition-all duration-500">
            {title}
            <span className="block w-24 h-1 bg-linear-to-r from-primary-600 to-accent-600 mx-auto mt-4 rounded-full animate-slide-in-left stagger-4 hover:w-32 transition-all duration-300"></span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up stagger-5 hover:text-gray-800 transition-all duration-300 mb-8">
            Passionate about creating exceptional digital experiences that make a difference
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12 items-start pt-8">
          {/* Profile Section */}
          <div className="lg:col-span-1 text-center animate-fade-in-up stagger-6">
            <div className="relative inline-block group">
              <div className="absolute inset-0 bg-linear-to-r from-primary-600 to-accent-600 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300 animate-glow group-hover:animate-pulse"></div>
              <img 
                src={profileImage} 
                alt="Profile" 
                className="relative w-80 h-80 object-cover rounded-full border-4 border-white shadow-2xl transition-all duration-500 animate-fade-in"
              />
            </div>
            
            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 animate-bounce-in stagger-${7 + index} group cursor-pointer`}
                >
                  <div className="text-3xl font-bold bg-linear-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent group-hover:animate-pulse">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 font-medium group-hover:text-gray-800 transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Content Section */}
          <div className="lg:col-span-2 space-y-8 animate-fade-in-up stagger-10">
            {/* Description */}
            <div className="prose prose-lg max-w-none">
              {description.map((paragraph, index) => (
                <p key={index} className={`text-gray-700 leading-relaxed text-lg mb-6 animate-slide-in-left stagger-${11 + index} hover:text-gray-900 transition-all duration-300`}>
                  {paragraph}
                </p>
              ))}
            </div>
            
            {/* Skills Highlight */}
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              {skills.map((skill, index) => {
                const colors = getColorClasses(skill.color);
                return (
                  <div 
                    key={index}
                    className={`bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group animate-bounce-in stagger-${13 + index} cursor-pointer`}
                  >
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center mr-4 transition-all duration-300 group-hover:animate-bounce`}>
                        <i className={`${skill.icon} text-white text-xl group-hover:animate-pulse`}></i>
                      </div>
                      <h3 className="font-display text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                        {skill.name}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.skills.map((skillName, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className={`px-3 py-1 ${colors.bgLight} ${colors.text} rounded-full text-sm font-medium transition-all duration-200 cursor-pointer hover:animate-pulse`}
                          style={{animationDelay: `${skillIndex * 0.1}s`}}
                        >
                          {skillName}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
