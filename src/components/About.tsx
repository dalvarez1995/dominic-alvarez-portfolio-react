import React, { useState, useEffect, useMemo } from 'react';
import ReactCountryFlag from 'react-country-flag';
import type { StatItem, SkillCategory, LocationInfo, Certification, Specialization } from '../config/portfolio.config';
import { loadCertifications, loadSpecializations } from '../utils/educationData';

interface AboutProps {
  title?: string;
  description: string[];
  stats: StatItem[];
  skills: SkillCategory[];
  profileImage: string;
  location?: LocationInfo;
  className?: string;
}

const About: React.FC<AboutProps> = ({
  title = "About Me",
  description,
  stats,
  skills,
  profileImage,
  location,
  className = ''
}) => {
  const [allCertifications, setAllCertifications] = useState<Certification[]>([]);
  const [allSpecializations, setAllSpecializations] = useState<Specialization[]>([]);
  const [loading, setLoading] = useState(true);

  // Load certifications and specializations for dynamic stats
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const [certs, specs] = await Promise.all([
          loadCertifications(),
          loadSpecializations()
        ]);
        setAllCertifications(certs);
        setAllSpecializations(specs);
      } catch (error) {
        console.error('Failed to load certification data:', error);
        // Fallback to hardcoded stats if loading fails
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // Compute dynamic stats based on actual data
  const computedStats = useMemo(() => {
    const totalCredentials = allCertifications.length + allSpecializations.length;
    
    // Update the certificates stat with real data, keep others from config
    return stats.map(stat => {
      if (stat.label === "Certificates") {
        return {
          ...stat,
          value: totalCredentials > 0 ? totalCredentials.toString() : stat.value
        };
      }
      return stat;
    });
  }, [allCertifications, allSpecializations, stats]);

  // Use computed stats or fallback to original stats
  const displayStats = loading ? stats : computedStats;
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
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary-100 rounded-full blur-3xl opacity-70 animate-float animate-fade-in stagger-1"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-100 rounded-full blur-3xl opacity-50 animate-float animate-fade-in stagger-2"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-blue-100 rounded-full blur-2xl opacity-40 animate-float animate-fade-in stagger-3"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in stagger-2">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in stagger-3 hover:animate-glow transition-all duration-500">
            {title}
            <span className="block w-24 h-1 bg-linear-to-r from-primary-600 to-accent-600 mx-auto mt-4 rounded-full animate-fade-in stagger-4 hover:w-32 transition-all duration-300"></span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in stagger-5 hover:text-gray-800 transition-all duration-300">
            Passionate about creating exceptional digital experiences that make a difference
          </p>
        </div>
        
        <div className="grid lg:grid-cols-12 gap-8 items-start min-h-0">
          {/* Profile Section */}
          <div className="lg:col-span-4 animate-fade-in stagger-6">
            {/* Profile Image & Info Card */}
            <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 group">
              {/* Profile Image */}
              <div className="text-center mb-6">
                <div className="relative inline-block group">
                  <div className="absolute inset-0 bg-linear-to-r from-primary-600 to-accent-600 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300 animate-glow"></div>
                  <img 
                    src={profileImage} 
                    alt="Profile" 
                    className="relative w-40 h-40 lg:w-48 lg:h-48 object-cover rounded-full border-4 border-white shadow-2xl transition-all duration-500 animate-fade-in mx-auto"
                  />
                </div>
              </div>

              {/* Location Info */}
              {location && (
                <div className="mb-6 animate-fade-in stagger-7">
                  <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-4 border border-primary-100 hover:border-primary-200 transition-all duration-300 group/location">
                    <div className="flex items-center justify-center space-x-3">
                      <div className="relative group-hover/location:scale-105 transition-transform duration-300">
                        <ReactCountryFlag
                          countryCode={location.countryCode}
                          svg
                          style={{
                            width: '2rem',
                            height: '1.5rem',
                            borderRadius: '4px',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                          }}
                          title={location.country}
                          aria-label={`Flag of ${location.country}`}
                        />
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-gray-900 group-hover/location:text-primary-600 transition-colors duration-300 text-sm">
                          {location.country}
                        </div>
                        {location.city && (
                          <div className="text-xs text-gray-600 group-hover/location:text-gray-800 transition-colors duration-300">
                            {location.city}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-2 lg:gap-3">
                {displayStats.map((stat, index) => (
                  <div 
                    key={index}
                    className={`bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-3 lg:p-4 text-center hover:shadow-lg transition-all duration-300 animate-fade-in stagger-${8 + index} group/stat cursor-pointer border border-gray-200 hover:border-primary-200`}
                  >
                    <div className="text-xl lg:text-2xl font-bold bg-linear-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent group-hover/stat:animate-pulse">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-600 font-medium group-hover/stat:text-gray-800 transition-colors duration-300 mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="lg:col-span-8 animate-fade-in stagger-11 min-h-0">
            {/* Description Card */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 mb-8">
              <div className="mb-6">
                <h3 className="font-display text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-2 h-8 bg-gradient-to-b from-primary-600 to-accent-600 rounded-full mr-3"></span>
                  About Me
                </h3>
              </div>
              <div className="prose prose-lg max-w-none">
                {description.map((paragraph, index) => (
                  <p key={index} className={`text-gray-700 leading-relaxed text-lg mb-6 animate-fade-in stagger-${12 + index} hover:text-gray-900 transition-all duration-300`}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            
            {/* Skills Section */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500">
              <div className="mb-8">
                <h3 className="font-display text-2xl font-bold text-gray-900 mb-2 flex items-center">
                  <span className="w-2 h-8 bg-gradient-to-b from-primary-600 to-accent-600 rounded-full mr-3"></span>
                  Core Expertise
                </h3>
                <p className="text-gray-600">Technologies and frameworks I excel in</p>
              </div>
              
              {/* Skills Grid */}
              <div className="grid sm:grid-cols-2 gap-6">
                {skills.map((skill, index) => {
                  const colors = getColorClasses(skill.color);
                  return (
                    <div 
                      key={index}
                      className={`bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group animate-fade-in stagger-${14 + index} cursor-pointer border border-gray-200 hover:border-primary-200`}
                    >
                      <div className="flex items-center mb-4">
                        <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center mr-4 transition-all duration-300 group-hover:scale-105 flex-shrink-0`}>
                          <i className={`${skill.icon} text-white text-xl group-hover:animate-pulse`}></i>
                        </div>
                        <h4 className="font-display text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300 min-w-0 flex-1">
                          {skill.name}
                        </h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {skill.skills.map((skillName, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className={`px-3 py-1 ${colors.bgLight} ${colors.text} rounded-full text-sm font-medium transition-all duration-200 cursor-pointer hover:scale-105 hover:shadow-md`}
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
      </div>
    </section>
  );
};

export default About;
