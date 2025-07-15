import React from 'react';
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
      className={`relative min-h-screen flex items-center overflow-hidden bg-linear-to-br from-primary-600 via-primary-700 to-accent-600 ${className}`}
    >
      {/* Animated Background Elements */}
      {backgroundEffects && (
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float opacity-0 animate-fade-in"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-500/20 rounded-full blur-3xl animate-float opacity-0 animate-fade-in" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-float opacity-0 animate-fade-in" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-30">
            <div className="grid grid-cols-12 gap-4 h-full">
              <div className="col-span-1 bg-linear-to-b from-transparent via-white/5 to-transparent animate-pulse animate-fade-in-up stagger-1"></div>
              <div className="col-span-1 bg-linear-to-b from-transparent via-white/5 to-transparent animate-pulse animate-fade-in-up stagger-2"></div>
              <div className="col-span-1 bg-linear-to-b from-transparent via-white/5 to-transparent animate-pulse animate-fade-in-up stagger-3"></div>
              <div className="col-span-1 bg-linear-to-b from-transparent via-white/5 to-transparent animate-pulse animate-fade-in-up stagger-4"></div>
              <div className="col-span-1 bg-linear-to-b from-transparent via-white/5 to-transparent animate-pulse animate-fade-in-up stagger-5"></div>
            </div>
          </div>
        </div>
      )}
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="max-w-4xl animate-fade-in-up stagger-1">
          {/* Availability Badge */}
          {availability?.status && (
            <div className="inline-block mb-6 px-4 py-2 bg-white/20 backdrop-blur-xs rounded-full border border-white/30 animate-fade-in-down stagger-2 hover:bg-white/30 hover:scale-105 transition-all duration-300">
              <span className="text-white/90 font-medium animate-glow">{availability.text}</span>
            </div>
          )}

          {/* Title */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight">
            <span className="block animate-fade-in-up stagger-3 hover:animate-glow transition-all duration-500">{greeting}</span>
            {title.map((line, index) => (
              <span 
                key={index}
                className={`block animate-fade-in-up bg-linear-to-r from-white to-accent-200 bg-clip-text text-transparent hover:from-accent-200 hover:to-white transition-all duration-500 stagger-${4 + index}`}
              >
                {line}
              </span>
            ))}
          </h1>

          {/* Description */}
          <p 
            className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl leading-relaxed animate-fade-in-up stagger-6 hover:text-white transition-all duration-300" 
            dangerouslySetInnerHTML={{
              __html: description.replace(
                /\*\*(.*?)\*\*/g, 
                '<span class="font-semibold text-accent-200 animate-glow">$1</span>'
              )
            }}
          />

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up stagger-7">
            {buttons.map((button, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(button.href)}
                className={`group relative inline-flex items-center justify-center px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden animate-bounce-in stagger-${8 + index} ${
                  button.type === 'primary'
                    ? 'bg-white text-primary-600 hover:animate-glow'
                    : 'border-2 border-white text-white hover:bg-white hover:text-primary-600 hover:animate-pulse'
                }`}
              >
                <span className="relative z-10 flex items-center">
                  {button.text}
                  {button.icon && (
                    <i className={`${button.icon} ml-2 group-hover:translate-x-1 group-hover:animate-bounce transition-transform duration-300`}></i>
                  )}
                </span>
                {button.type === 'primary' && (
                  <>
                    <div className="absolute inset-0 bg-linear-to-r from-primary-600 to-accent-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                    <span className="absolute inset-0 bg-white group-hover:text-white transition-colors duration-300 opacity-0 group-hover:opacity-100 flex items-center justify-center font-bold">
                      {button.text}
                      {button.icon && (
                        <i className={`${button.icon} ml-2 group-hover:translate-x-1 transition-transform duration-300`}></i>
                      )}
                    </span>
                  </>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      {scrollIndicator && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle animate-fade-in-up stagger-10 hover:animate-glow cursor-pointer group">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center group-hover:border-white group-hover:scale-110 transition-all duration-300">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse group-hover:bg-white group-hover:animate-bounce"></div>
          </div>
          <p className="text-white/50 text-xs mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 text-center">Scroll</p>
        </div>
      )}
    </section>
  );
};

export default Hero;
