import React, { useEffect, useState } from 'react';
import type { HeroButton } from '../types/ui.types';
import { motion } from 'framer-motion';

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
  scrollIndicator = true,
  className = ''
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [codeLines, setCodeLines] = useState([
    '{ "developer": "passionate" }',
    'const skills = ["React", "TypeScript"];',
    'function createMagic() { return innovation; }',
    'while(learning) { keep.coding(); }',
    'import dreams from "reality";',
    'export const success = true;'
  ]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    // Rotate code lines every 3 seconds
    const interval = setInterval(() => {
      setCodeLines(prev => {
        const newLines = [...prev];
        const first = newLines.shift();
        if (first) newLines.push(first);
        return newLines;
      });
    }, 3000);

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
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
      {/* Animated Particle Network */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.1, 0.8, 0.1],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 opacity-15">
        <div 
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)`
          }}
        />
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          animation: 'grid-move 20s linear infinite'
        }} />
      </div>

      {/* Floating Code Rain */}
      <div className="absolute inset-0 overflow-hidden">
        {codeLines.map((line, index) => (
          <motion.div
            key={`${line}-${index}`}
            className="absolute font-mono text-xs text-primary-300/20 whitespace-nowrap"
            style={{
              left: `${10 + (index * 15)}%`,
              top: `${20 + (index * 10)}%`,
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ 
              opacity: [0, 1, 1, 0],
              y: [0, 20, 20, 40],
              x: [0, Math.sin(index) * 10]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: index * 0.5,
              ease: "easeInOut"
            }}
          >
            {line}
          </motion.div>
        ))}
      </div>

      {/* Neon Grid Lines */}
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          className="absolute inset-0"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%']
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundImage: `
              linear-gradient(45deg, transparent 49%, rgba(59, 130, 246, 0.3) 50%, transparent 51%),
              linear-gradient(-45deg, transparent 49%, rgba(16, 185, 129, 0.3) 50%, transparent 51%)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Binary Rain Effect */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute font-mono text-xs text-primary-300 leading-none"
            style={{
              left: `${i * 5}%`,
              fontSize: '8px'
            }}
            animate={{
              y: ['-100vh', '100vh']
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
          >
            {[...Array(50)].map((_, j) => (
              <div key={j} style={{ animationDelay: `${j * 0.1}s` }}>
                {Math.random() > 0.5 ? '1' : '0'}
              </div>
            ))}
          </motion.div>
        ))}
      </div>

      {/* Scanning Lines */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <motion.div
          className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-primary-400 to-transparent"
          animate={{
            y: ['-2px', '100vh']
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-accent-400 to-transparent"
          animate={{
            y: ['-2px', '100vh']
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: 1.5,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Glowing Orbs */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-20 w-2 h-2 bg-primary-400 rounded-full shadow-lg"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.3, 1, 0.3],
            boxShadow: [
              '0 0 10px rgba(59, 130, 246, 0.3)',
              '0 0 30px rgba(59, 130, 246, 0.8)',
              '0 0 10px rgba(59, 130, 246, 0.3)'
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-32 left-16 w-1.5 h-1.5 bg-accent-400 rounded-full shadow-lg"
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.4, 1, 0.4],
            boxShadow: [
              '0 0 8px rgba(16, 185, 129, 0.3)',
              '0 0 25px rgba(16, 185, 129, 0.8)',
              '0 0 8px rgba(16, 185, 129, 0.3)'
            ]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: 0.5,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-1 h-1 bg-primary-300 rounded-full shadow-lg"
          animate={{
            scale: [1, 2.5, 1],
            opacity: [0.2, 0.8, 0.2],
            boxShadow: [
              '0 0 6px rgba(147, 197, 253, 0.3)',
              '0 0 20px rgba(147, 197, 253, 0.8)',
              '0 0 6px rgba(147, 197, 253, 0.3)'
            ]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 1,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Data Stream */}
      <div className="absolute inset-0 overflow-hidden opacity-15">
        <motion.div
          className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-primary-400 to-transparent"
          animate={{
            x: ['0vw', '100vw']
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-accent-400 to-transparent"
          animate={{
            x: ['0vw', '100vw']
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: 2,
            ease: "linear"
          }}
        />
      </div>
      
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
