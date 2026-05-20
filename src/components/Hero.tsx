import React, { useEffect, useState, useRef, useCallback } from 'react';
import type { HeroButton } from '../types/ui.types';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [konamiActive, setKonamiActive] = useState(false);
  const [confetti, setConfetti] = useState<{ id: number; x: number; y: number; angle: number; emoji: string }[]>([]);
  const clickCountRef = useRef(0);
  const clickTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const konamiSeqRef = useRef<string[]>([]);

  const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
  const CONFETTI_EMOJIS = ['⚡','🚀','💻','🛠️','🔥','✨','🎯','⚙️'];

  const triggerConfetti = useCallback((e: React.MouseEvent) => {
    clickCountRef.current += 1;
    if (clickTimerRef.current) clearTimeout(clickTimerRef.current);
    clickTimerRef.current = setTimeout(() => { clickCountRef.current = 0; }, 600);
    if (clickCountRef.current >= 3) {
      clickCountRef.current = 0;
      const rect = (e.target as HTMLElement).getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const particles = Array.from({ length: 14 }, (_, i) => ({
        id: Date.now() + i,
        x: cx,
        y: cy,
        angle: (i / 14) * 360,
        emoji: CONFETTI_EMOJIS[i % CONFETTI_EMOJIS.length],
      }));
      setConfetti(particles);
      setTimeout(() => setConfetti([]), 1800);
    }
  }, []);

  const [codeLines, setCodeLines] = useState([
    'const stack = { backend: ".NET, NestJS", frontend: "React, Angular", cloud: "Azure, Coolify" };',
    'await Promise.all([architect, lead, ship]);',
    'interface Engineer { mindset: "ownership"; bias: "to action"; }',
    'kubectl rollout status deployment/syncita --watch',
    'git commit -m "feat(syncita): production-ready multi-tenant"',
    'SELECT impact FROM work WHERE craft = true;'
  ]);

  useEffect(() => {
    // Console signature easter egg
    console.log('%c👋 Hey, devtools explorer!', 'font-size:16px; color:#22d3ee; font-weight:bold;');
    console.log('%cBuilt by Dominic Alvarez — dominic-alvarez.dev', 'color:#94a3b8; font-size:13px;');
    console.log('%cStack: React 19 · NestJS 11 · TypeScript · Tailwind v4 · Framer Motion · Vite 7', 'color:#64748b; font-size:11px;');
    console.log('%c💡 Tip: try the Konami code on the hero...', 'color:#a78bfa; font-size:11px; font-style:italic;');

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    // Konami code detection
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setKonamiActive(false); return; }
      konamiSeqRef.current = [...konamiSeqRef.current, e.key].slice(-KONAMI.length);
      if (konamiSeqRef.current.join(',') === KONAMI.join(',')) {
        setKonamiActive(true);
        konamiSeqRef.current = [];
      }
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
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('keydown', handleKeyDown);
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
      className={`relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 ${className}`}
    >
      {/* Animated Particle Network */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 60 - 30],
              y: [0, Math.random() * 60 - 30],
              opacity: [0.05, 0.4, 0.05],
            }}
            transition={{
              duration: Math.random() * 10 + 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3
            }}
          />
        ))}
      </div>

      {/* Aurora Background — three slow-drifting colour blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute"
          style={{
            width: '70%', height: '60%',
            top: '-10%', left: '-5%',
            background: 'radial-gradient(ellipse, rgba(6,182,212,0.18) 0%, rgba(6,182,212,0.06) 45%, transparent 70%)',
            filter: 'blur(48px)',
          }}
          animate={{ x: [0, 40, -20, 0], y: [0, 30, -15, 0], scale: [1, 1.12, 0.95, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute"
          style={{
            width: '60%', height: '55%',
            top: '5%', right: '-10%',
            background: 'radial-gradient(ellipse, rgba(139,92,246,0.16) 0%, rgba(139,92,246,0.05) 45%, transparent 70%)',
            filter: 'blur(56px)',
          }}
          animate={{ x: [0, -30, 20, 0], y: [0, 25, -20, 0], scale: [1, 0.92, 1.08, 1] }}
          transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        />
        <motion.div
          className="absolute"
          style={{
            width: '55%', height: '50%',
            bottom: '-5%', left: '20%',
            background: 'radial-gradient(ellipse, rgba(16,185,129,0.13) 0%, rgba(16,185,129,0.04) 45%, transparent 70%)',
            filter: 'blur(52px)',
          }}
          animate={{ x: [0, 25, -35, 0], y: [0, -20, 15, 0], scale: [1, 1.1, 0.93, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 8 }}
        />
      </div>

      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(34, 211, 238, 0.15) 0%, transparent 50%)`
          }}
        />
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          animation: 'grid-move 20s linear infinite'
        }} />
      </div>

      {/* Floating Code Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {codeLines.map((line, index) => (
          <motion.div
            key={`${line}-${index}`}
            className="absolute font-mono text-sm text-cyan-300/25 whitespace-nowrap"
            style={{
              left: `${3 + (index * 15)}%`,
              top: `${15 + (index * 12)}%`,
            }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ 
              opacity: [0, 0.5, 0.5, 0.5, 0],
              y: [0, 8, 8, 8, 20],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              delay: index * 1.8,
              ease: "easeInOut",
              times: [0, 0.1, 0.5, 0.9, 1]
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



      {/* Glowing Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-2 h-2 bg-cyan-400 rounded-full shadow-lg"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-32 left-16 w-1.5 h-1.5 bg-cyan-300 rounded-full shadow-lg"
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.8, ease: "easeInOut" }}
        />
      </div>

      {/* Scanning Line */}
      <div className="absolute inset-0 overflow-hidden opacity-15 pointer-events-none">
        <motion.div
          className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
          animate={{ y: ['-2px', '100vh'] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
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
              <span
                className="block text-white mb-2 animate-fade-in-up hover:animate-glow transition-all duration-500 transform hover:scale-105 cursor-default select-none"
                onClick={triggerConfetti}
                title="👀"
              >
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
                __html: description
                  .replace(
                    /\[([^\]]+)\]\(([^)]+)\)/g,
                    '<a href="$2" target="_blank" rel="noopener noreferrer" class="font-semibold bg-gradient-to-r from-cyan-300 to-cyan-200 bg-clip-text text-transparent hover:from-cyan-200 hover:to-white transition-all duration-300 underline decoration-cyan-400/40 hover:decoration-cyan-300 underline-offset-4">$1</a>'
                  )
                  .replace(
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
                className={`group relative inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-base overflow-hidden transition-all duration-300 transform hover:scale-[1.02] ${
                  button.type === 'primary'
                    ? 'bg-gradient-to-r from-cyan-500 to-cyan-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 hover:from-cyan-400 hover:to-cyan-500'
                    : 'border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-300'
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

      {/* Easter Egg: Konami code overlay */}
      <AnimatePresence>
        {konamiActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/85 backdrop-blur-sm"
            onClick={() => setKonamiActive(false)}
          >
            <motion.div
              initial={{ y: -40, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 40, opacity: 0, scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              onClick={e => e.stopPropagation()}
              className="relative bg-slate-950 border border-cyan-400/40 rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl shadow-cyan-500/20"
            >
              <div className="text-center mb-6">
                <pre className="text-cyan-400 text-[11px] font-mono leading-tight select-none">{`
 ██████╗  ██████╗  ███╗   ███╗
 ██╔══██╗██╔═══██╗ ████╗ ████║
 ██║  ██║██║   ██║ ██╔████╔██║
 ██║  ██║██║   ██║ ██║╚██╔╝██║
 ██████╔╝╚██████╔╝ ██║ ╚═╝ ██║
 ╚═════╝  ╚═════╝  ╚═╝     ╚═╝`}</pre>
              </div>
              <p className="text-white text-center font-semibold mb-1">You found it. 🎮</p>
              <p className="text-slate-400 text-center text-sm mb-4">↑↑↓↓←→←→BA — classic.</p>
              <div className="bg-slate-900 rounded-xl p-4 font-mono text-[11px] space-y-1 mb-6">
                <p className="text-cyan-300">$ whoami</p>
                <p className="text-slate-300 pl-2">dominic-alvarez — full-stack engineer, founder, builder.</p>
                <p className="text-cyan-300">$ cat stack.txt</p>
                <p className="text-slate-300 pl-2">NestJS · React 19 · PostgreSQL · Redis · Langfuse · Coolify</p>
                <p className="text-cyan-300">$ echo $STATUS</p>
                <p className="text-emerald-400 pl-2">● open to work · building Syncita</p>
              </div>
              <button
                onClick={() => setKonamiActive(false)}
                className="w-full py-2 rounded-xl border border-cyan-400/40 text-cyan-300 text-sm font-mono hover:bg-cyan-400/10 transition-colors"
              >
                [ESC] exit
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Easter Egg: triple-click confetti */}
      <AnimatePresence>
        {confetti.map(p => (
          <motion.div
            key={p.id}
            className="fixed z-[199] pointer-events-none text-lg select-none"
            style={{ left: p.x, top: p.y }}
            initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
            animate={{
              x: Math.cos((p.angle * Math.PI) / 180) * 120,
              y: Math.sin((p.angle * Math.PI) / 180) * 120,
              opacity: 0,
              scale: 0.4,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: 'easeOut' }}
          >
            {p.emoji}
          </motion.div>
        ))}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
