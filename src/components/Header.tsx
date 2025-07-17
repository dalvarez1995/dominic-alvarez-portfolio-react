import React, { useState, useEffect } from 'react';
import type { NavItem } from '../types/ui.types';

interface HeaderProps {
  name: string;
  navigation: NavItem[];
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ name, navigation, className = '' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-xs transform translate-y-0' 
          : 'bg-white/95 backdrop-blur-xl border-b border-gray-200/50 transform translate-y-0'
      } ${className} animate-fade-in-down`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo/Name */}
          <button
            onClick={() => scrollToSection('#home')}
            className="font-display text-2xl font-bold bg-linear-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent hover:scale-105 transition-all duration-300 animate-fade-in-left stagger-1"
          >
            {name}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 animate-fade-in-right stagger-2">
            {navigation.map((item, index) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="nav-link px-4 py-2 rounded-xl text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-300 font-medium relative group transform hover:scale-105"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-linear-to-r from-primary-600 to-accent-600 group-hover:w-full group-hover:left-0 transition-all duration-500 ease-out"></span>
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 animate-fade-in-right stagger-3"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`fas ${isMenuOpen ? 'fa-xmark' : 'fa-bars'} text-gray-700 transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : 'rotate-0'}`}></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200/50 animate-fade-in-up">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="flex items-center px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all duration-300 font-medium transform hover:translate-x-2 animate-fade-in-left"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.icon && <i className={`${item.icon} mr-3 transition-transform duration-300`}></i>}
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
