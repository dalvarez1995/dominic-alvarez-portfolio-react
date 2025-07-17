import React, { useEffect, useState } from 'react';
import type { HeroButton } from '../config/portfolio.config';

interface HeroProps {
  greeting: string;
  title: string[];
  description: string;
  buttons: HeroButton[];
  availability?: {
    status: boolean;
    text: string;
  };
  backgroundEffects?: boolean;
  scrollIndicator?: boolean;
  className?: string;
}

const Hero: React.FC<HeroProps> = ({
  greeting,
  title,
  description,
  buttons,
  availability,
  backgroundEffects = true,
  scrollIndicator = true,
  className = ''
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.open(href, '_blank');
    }
  };

  return (
    <section 
      id="home" 
      className={`relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 ${className}`}
    >
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)`
          }}
        />
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite'
        }} />
      </div>

      {/* Floating Code Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 text-primary-400/20 font-mono text-xs animate-float">
          &lt;dev&gt;
        </div>
        <div className="absolute top-32 right-20 text-accent-400/20 font-mono text-xs animate-float" style={{animationDelay: '1s'}}>
          console.log();
        </div>
        <div className="absolute bottom-32 left-20 text-primary-300/20 font-mono text-xs animate-float" style={{animationDelay: '2s'}}>
          const magic = true;
        </div>
        <div className="absolute bottom-20 right-20 text-accent-300/20 font-mono text-xs animate-float" style={{animationDelay: '3s'}}>
          &lt;/dev&gt;
        </div>
      </div>

      {/* Animated Background Elements */}
      {backgroundEffects && (
        <div className="absolute inset-0">
          {/* Geometric shapes */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-primary-500/15 to-accent-500/15 rounded-full blur-3xl animate-float opacity-0 animate-fade-in"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-accent-500/15 to-primary-400/15 rounded-full blur-3xl animate-float opacity-0 animate-fade-in" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-3/4 left-1/2 w-32 h-32 bg-gradient-to-r from-primary-400/15 to-accent-400/15 rounded-full blur-2xl animate-float opacity-0 animate-fade-in" style={{animationDelay: '2s'}}></div>
          
          {/* Matrix-like vertical lines */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-30">
            <div className="grid grid-cols-12 gap-4 h-full">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i}
                  className={`col-span-1 bg-gradient-to-b from-transparent via-primary-400/20 to-transparent animate-pulse stagger-${i + 1}`}
                  style={{
                    animationDuration: `${2 + i * 0.5}s`,
                    animationDelay: `${i * 0.2}s`
                  }}
                />
              ))}
            </div>
          </div>

          {/* Hexagon Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 w-12 h-12 border border-primary-400 transform rotate-45 animate-spin-slow"></div>
            <div className="absolute top-40 right-40 w-8 h-8 border border-accent-400 transform rotate-12 animate-bounce-gentle"></div>
            <div className="absolute bottom-40 left-40 w-16 h-16 border border-primary-300 transform -rotate-12 animate-pulse"></div>
          </div>
        </div>
      )}
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="max-w-4xl">
          {/* Availability Badge */}
          {availability?.status && (
            <div className="inline-block mb-4 group cursor-pointer">
              <div className="relative px-4 py-2 bg-gradient-to-r from-accent-500/20 to-primary-500/20 backdrop-blur-sm rounded-full border border-accent-400/30 hover:border-accent-400/60 transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-accent-500/10 to-primary-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent-400 rounded-full animate-pulse"></div>
                  <span className="text-accent-100 font-medium text-sm">{availability.text}</span>
                </div>
              </div>
            </div>
          )}

          {/* Title */}
          <div className="mb-6">
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
              <span className="block text-white mb-2 animate-fade-in-up hover:animate-glow transition-all duration-500 transform hover:scale-105">
                {greeting}
              </span>
              {title.map((line, index) => (
                <span 
                  key={index}
                  className={`block bg-gradient-to-r from-primary-200 via-accent-200 to-primary-300 bg-clip-text text-transparent hover:from-accent-200 hover:via-primary-200 hover:to-accent-300 transition-all duration-700 transform hover:scale-105 animate-fade-in-up stagger-${index + 2}`}
                  style={{
                    animationDelay: `${(index + 1) * 0.2}s`,
                    textShadow: '0 0 20px rgba(59, 130, 246, 0.3)'
                  }}
                >
                  {line}
                </span>
              ))}
            </h1>
          </div>

          {/* Description */}
          <div className="mb-8 max-w-2xl">
            <p 
              className="text-lg md:text-xl text-slate-300 leading-relaxed animate-fade-in-up hover:text-white transition-all duration-300 font-light" 
              style={{animationDelay: '0.8s'}}
              dangerouslySetInnerHTML={{
                __html: description.replace(
                  /\*\*(.*?)\*\*/g, 
                  '<span class="font-semibold bg-gradient-to-r from-primary-300 to-accent-300 bg-clip-text text-transparent">$1</span>'
                )
              }}
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{animationDelay: '1s'}}>
            {buttons.map((button, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(button.href)}
                className={`group relative inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-base overflow-hidden transition-all duration-500 transform hover:scale-105 ${
                  button.type === 'primary'
                    ? 'bg-gradient-to-r from-primary-500 to-accent-600 text-white shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/40 hover:from-accent-600 hover:to-primary-500'
                    : 'border-2 border-primary-400 text-primary-400 hover:bg-gradient-to-r hover:from-primary-500 hover:to-accent-600 hover:text-white hover:border-transparent'
                }`}
                style={{animationDelay: `${1.2 + index * 0.1}s`}}
              >
                <span className="relative z-10 flex items-center">
                  {button.text}
                  {button.icon && (
                    <i className={`${button.icon} ml-2 group-hover:translate-x-1 transition-transform duration-300`}></i>
                  )}
                </span>
                
                {/* Glowing effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400/20 to-accent-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      {scrollIndicator && (
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce-gentle cursor-pointer group" style={{animationDelay: '1.5s'}}>
          <div className="relative">
            {/* Glowing ring */}
            <div className="absolute inset-0 w-8 h-12 border border-primary-400/50 rounded-full group-hover:border-primary-400 group-hover:scale-110 transition-all duration-300">
              <div className="absolute inset-0 border border-primary-400/20 rounded-full animate-ping"></div>
            </div>
            
            {/* Main scroll indicator */}
            <div className="w-8 h-12 border border-primary-400/70 rounded-full flex justify-center relative overflow-hidden group-hover:border-primary-400 transition-all duration-300">
              <div className="w-1 h-3 bg-gradient-to-b from-primary-400 to-accent-400 rounded-full mt-2 animate-pulse group-hover:animate-bounce"></div>
              
              {/* Inner glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary-400/10 via-transparent to-accent-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
          
          <div className="mt-2 text-center">
            <p className="text-primary-400/70 text-xs font-mono opacity-0 group-hover:opacity-100 transition-all duration-300">
              scroll
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
