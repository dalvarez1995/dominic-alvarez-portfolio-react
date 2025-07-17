import React, { useState, useEffect, useMemo } from 'react';
import type { EducationStat, Certification, Specialization } from '../types/education.types';
import { loadCertifications, loadSpecializations } from '../utils/educationData';
import { getVerificationUrl, getSpecializationVerificationUrl, getProviderInfo } from '../config/verification.config';

interface EducationProps {
  title: string;
  description: string;
  stats: EducationStat[];
  certifications: {
    dataSource: string;
    searchEnabled: boolean;
    filterEnabled: boolean;
  };
  specializations?: {
    dataSource: string;
  };
  className?: string;
}

const Education: React.FC<EducationProps> = ({
  title,
  description,
  stats,
  certifications,
  specializations,
  className = ''
}) => {
  const [allCertifications, setAllCertifications] = useState<Certification[]>([]);
  const [allSpecializations, setAllSpecializations] = useState<Specialization[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load certifications and specializations
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        
        // Load certifications using direct imports (more secure than fetch)
        const certs = await loadCertifications();
        setAllCertifications(certs);

        // Load specializations if available
        if (specializations) {
          const specs = await loadSpecializations();
          setAllSpecializations(specs);
        }
        
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load data');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [specializations]);

  // Compute dynamic stats based on actual data
  const computedStats = useMemo(() => {
    const totalCredentials = allCertifications.length + allSpecializations.length;
    
    // Get unique partners/institutions
    const uniquePartners = new Set<string>();
    allCertifications.forEach(cert => {
      cert.partners.forEach(partner => uniquePartners.add(partner.name));
    });
    allSpecializations.forEach(spec => {
      spec.partnerNames.forEach(partner => uniquePartners.add(partner));
    });
    
    // Calculate years of continuous learning (from earliest certification to now)
    const allDates = [
      ...allCertifications.map(cert => cert.completionDate),
      ...allSpecializations.map(spec => spec.completionDate)
    ];
    const earliestDate = allDates.length > 0 ? Math.min(...allDates) : Date.now();
    const yearsLearning = Math.max(1, Math.floor((Date.now() - earliestDate) / (1000 * 60 * 60 * 24 * 365)));
    
    return [
      {
        value: totalCredentials.toString(),
        label: "Total Credentials",
        icon: "fas fa-certificate",
        color: "primary"
      },
      {
        value: uniquePartners.size.toString(),
        label: "Leading Partners",
        icon: "fas fa-university",
        color: "accent"
      },
      {
        value: `${yearsLearning}+`,
        label: "Years Learning",
        icon: "fas fa-graduation-cap",
        color: "blue"
      }
    ];
  }, [allCertifications, allSpecializations]);

  // Use computed stats instead of props.stats
  const displayStats = computedStats.length > 0 ? computedStats : stats;

  // Filter and search certifications
  const filteredCertifications = useMemo(() => {
    let filtered = allCertifications;

    // Apply partner filter
    if (activeFilter !== 'all') {
      filtered = filtered.filter(cert => 
        cert.partners.some(partner => partner.name === activeFilter)
      );
    }

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(cert =>
        cert.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cert.partners.some(partner => 
          partner.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    return filtered;
  }, [allCertifications, activeFilter, searchTerm]);

  // Get unique partners for filter buttons
  const partners = useMemo(() => {
    const partnerCounts = allCertifications.reduce((acc, cert) => {
      cert.partners.forEach(partner => {
        acc[partner.name] = (acc[partner.name] || 0) + 1;
      });
      return acc;
    }, {} as Record<string, number>);

    return Object.entries(partnerCounts).map(([name, count]) => ({ name, count }));
  }, [allCertifications]);

  // Create a map of partner names to logos from certifications
  const partnerLogos = useMemo(() => {
    const logoMap: Record<string, string> = {};
    allCertifications.forEach(cert => {
      cert.partners.forEach(partner => {
        logoMap[partner.name] = partner.logo;
      });
    });
    return logoMap;
  }, [allCertifications]);

  // Helper function to generate verification URL
  const getVerificationUrlForCert = (cert: Certification): string => {
    return getVerificationUrl(
      cert.verifyCode,
      cert.provider || 'coursera',
      cert.verificationUrl
    );
  };

  // Helper function to generate verification URL for specializations
  const getVerificationUrlForSpec = (spec: Specialization): string => {
    return getSpecializationVerificationUrl(
      spec.verifyCode,
      spec.provider || 'coursera',
      spec.verificationUrl
    );
  };

  // Helper function to get provider info for button styling
  const getProviderInfoForItem = (provider?: string) => {
    return getProviderInfo(provider || 'coursera');
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long'
    });
  };

  const getStatColor = (color: string) => {
    const colorMap = {
      primary: 'bg-linear-to-r from-primary-500 to-primary-600',
      accent: 'bg-linear-to-r from-accent-500 to-accent-600',
      blue: 'bg-linear-to-r from-blue-500 to-blue-600',
      green: 'bg-linear-to-r from-green-500 to-green-600'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  return (
    <section 
      id="education" 
      className={`py-24 bg-linear-to-br from-gray-50 via-white to-primary-50 relative overflow-hidden ${className}`}
    >
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent-100 rounded-full blur-3xl opacity-60 animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-primary-100 rounded-full blur-3xl opacity-70 animate-float" style={{animationDelay: '-3s'}}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-24 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {title}
            <span className="block w-24 h-1 bg-linear-to-r from-primary-600 to-accent-600 mx-auto mt-4 rounded-full"></span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
            {description}
          </p>
        </div>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 animate-slide-up">
          {loading ? (
            // Loading skeleton for stats
            Array.from({ length: 3 }).map((_, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl p-6 lg:p-8 shadow-lg border border-gray-100 text-center animate-pulse"
              >
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gray-200 rounded-2xl mx-auto mb-4 lg:mb-6"></div>
                <div className="h-8 lg:h-10 bg-gray-200 rounded-lg mb-2 mx-auto w-16"></div>
                <div className="h-4 bg-gray-200 rounded-lg mx-auto w-24"></div>
              </div>
            ))
          ) : (
            displayStats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl p-6 lg:p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300 text-center group animate-bounce-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className={`w-12 h-12 lg:w-16 lg:h-16 ${getStatColor(stat.color)} rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
                  <i className={`${stat.icon} text-white text-lg lg:text-2xl group-hover:animate-bounce`}></i>
                </div>
                <div className="text-2xl lg:text-4xl font-bold bg-linear-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent mb-2 group-hover:animate-glow transition-all duration-300">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium text-sm lg:text-base">{stat.label}</div>
              </div>
            ))
          )}
        </div>

        {/* Professional Specializations Section */}
        {allSpecializations.length > 0 && (
          <div className="mb-16">
            <div className="text-center mb-12 animate-fade-in">
              <h3 className="font-display text-3xl font-bold text-gray-900 mb-4">
                Professional Specializations
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive professional certificate programs demonstrating expertise in complete technology stacks
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {allSpecializations.map((spec, index) => (
                <article 
                  key={spec.specializationId}
                  className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300 group animate-slide-up"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  {/* Header */}
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-16 h-16 bg-linear-to-r from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 flex-shrink-0">
                      <i className="fas fa-trophy text-white text-2xl group-hover:animate-bounce"></i>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-900 leading-tight group-hover:text-accent-600 transition-colors duration-300 mb-2">
                        {spec.name}
                      </h3>
                      <div className="flex items-center space-x-2">
                        {spec.partnerNames.map((partnerName, partnerIndex) => 
                          partnerLogos[partnerName] ? (
                            <img 
                              key={partnerIndex}
                              src={partnerLogos[partnerName]} 
                              alt={partnerName}
                              className="h-6 w-auto object-contain"
                            />
                          ) : (
                            <div key={partnerIndex} className="flex items-center text-gray-600">
                              <i className="fas fa-university mr-2 text-accent-500"></i>
                              <span className="text-sm">{partnerName}</span>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-600">
                      <i className="fas fa-calendar mr-2 text-accent-500"></i>
                      <span className="text-sm">{formatDate(spec.completionDate)}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <i className="fas fa-certificate mr-2 text-accent-500"></i>
                      <span className="text-sm">Professional Certificate</span>
                    </div>
                    {spec.verifyCode && (
                      <div className="flex items-center text-gray-600">
                        <i className="fas fa-shield-alt mr-2 text-green-500"></i>
                        <span className="text-sm font-mono">{spec.verifyCode}</span>
                      </div>
                    )}
                  </div>

                  {/* Verify Button */}
                  {spec.verifyCode && (
                    <div className="mb-4">
                      <a 
                        href={getVerificationUrlForSpec(spec)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full px-4 py-3 bg-linear-to-r from-accent-500 to-accent-600 text-white rounded-xl text-sm font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 group-hover:shadow-xl"
                        title={`Verify on ${getProviderInfoForItem(spec.provider).displayName}`}
                      >
                        <i className={`${getProviderInfoForItem(spec.provider).icon || 'fas fa-external-link-alt'} mr-2 hover:animate-bounce`}></i>
                        Verify on {getProviderInfoForItem(spec.provider).displayName}
                      </a>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Course Certifications Section */}
        <div className="mb-16">
          <div className="text-center mb-12 animate-fade-in">
            <h3 className="font-display text-3xl font-bold text-gray-900 mb-4">
              Course Certifications
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Individual course completions spanning various technologies and methodologies
            </p>
          </div>

          {/* Search and Filter Controls */}
          {(certifications.searchEnabled || certifications.filterEnabled) && (
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 mb-12 animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="flex flex-col lg:flex-row gap-6 items-center">
                {/* Search Bar */}
                {certifications.searchEnabled && (
                  <div className="flex-1 w-full lg:w-auto">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <i className="fas fa-magnifying-glass text-gray-400"></i>
                      </div>
                      <input 
                        type="text" 
                        placeholder="Search certifications..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-gray-900 bg-gray-50 hover:bg-white"
                      />
                    </div>
                  </div>
                )}
                
                {/* Filter Buttons */}
                {certifications.filterEnabled && (
                  <div className="flex flex-wrap gap-3">
                    <button 
                      className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                        activeFilter === 'all'
                          ? 'bg-linear-to-r from-primary-500 to-primary-600 text-white shadow-lg hover:shadow-xl'
                          : 'bg-gray-100 text-gray-600 hover:bg-primary-50 hover:text-primary-600'
                      }`}
                      onClick={() => setActiveFilter('all')}
                    >
                      All ({allCertifications.length})
                    </button>
                    {partners.map((partner) => (
                      <button 
                        key={partner.name}
                        className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                          activeFilter === partner.name
                            ? 'bg-linear-to-r from-primary-500 to-primary-600 text-white shadow-lg hover:shadow-xl'
                            : 'bg-gray-100 text-gray-600 hover:bg-primary-50 hover:text-primary-600'
                        }`}
                        onClick={() => setActiveFilter(partner.name)}
                      >
                        {partner.name} ({partner.count})
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Certifications Grid */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
            {loading ? (
              // Loading skeleton
              Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 animate-pulse">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gray-200 rounded-2xl"></div>
                    <div className="flex-1">
                      <div className="h-4 bg-gray-200 rounded-sm mb-2"></div>
                      <div className="h-3 bg-gray-200 rounded-sm w-2/3"></div>
                    </div>
                  </div>
                  <div className="h-20 bg-gray-200 rounded-sm mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded-sm mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded-sm w-1/2"></div>
                </div>
              ))
            ) : error ? (
              <div className="col-span-full text-center py-16">
                <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-triangle-exclamation text-red-500 text-3xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Unable to load certifications</h3>
                <p className="text-gray-600">{error}</p>
              </div>
            ) : filteredCertifications.length === 0 ? (
              <div className="col-span-full text-center py-16">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-magnifying-glass text-gray-400 text-3xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">No certifications found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria</p>
              </div>
            ) : (
              filteredCertifications.map((cert, index) => (
                <article 
                  key={cert.courseId}
                  className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300 group animate-slide-up"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  {/* Header */}
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-16 h-16 bg-linear-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 flex-shrink-0">
                      <i className="fas fa-certificate text-white text-2xl group-hover:animate-pulse"></i>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-2">
                        {cert.partners.map((partner, partnerIndex) => (
                          <img 
                            key={partnerIndex}
                            src={partner.logo} 
                            alt={partner.name}
                            className="h-6 w-auto object-contain"
                          />
                        ))}
                      </div>
                      <h3 className="font-bold text-gray-900 leading-tight group-hover:text-primary-600 transition-colors duration-300">
                        {cert.name}
                      </h3>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-600">
                      <i className="fas fa-calendar mr-2 text-primary-500"></i>
                      <span className="text-sm">{formatDate(cert.completionDate)}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <i className="fas fa-award mr-2 text-accent-500"></i>
                      <span className="text-sm capitalize">{cert.distinctionLevel.toLowerCase()}</span>
                    </div>
                    {cert.verifyCode && (
                      <div className="flex items-center text-gray-600">
                        <i className="fas fa-shield-alt mr-2 text-green-500"></i>
                        <span className="text-sm font-mono">{cert.verifyCode}</span>
                      </div>
                    )}
                  </div>

                  {/* Verify Button */}
                  {cert.verifyCode && (
                    <div className="mb-4">
                      <a 
                        href={getVerificationUrlForCert(cert)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full px-4 py-3 bg-linear-to-r from-primary-500 to-primary-600 text-white rounded-xl text-sm font-medium hover:shadow-lg transition-all duration-300 hover:scale-105 group-hover:shadow-xl"
                        title={`Verify on ${getProviderInfoForItem(cert.provider).displayName}`}
                      >
                        <i className={`${getProviderInfoForItem(cert.provider).icon || 'fas fa-external-link-alt'} mr-2 hover:animate-bounce`}></i>
                        Verify on {getProviderInfoForItem(cert.provider).displayName}
                      </a>
                    </div>
                  )}
                </article>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
