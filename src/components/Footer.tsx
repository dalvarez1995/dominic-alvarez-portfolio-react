import { usePortfolioConfig } from '../hooks/usePortfolioConfig';

export default function Footer() {
  const { config } = usePortfolioConfig();
  const { personal, contact } = config;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-primary-500 via-accent-500 to-primary-500 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-float animate-fade-in"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-accent-500/5 rounded-full blur-2xl animate-float animate-fade-in"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Logo/Name */}
          <div className="mb-8 animate-fade-in-up stagger-1">
            <h3 className="font-display text-3xl font-bold bg-linear-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent mb-4 hover:animate-glow transition-all duration-500">
              {personal.name}
            </h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto hover:text-gray-300 transition-all duration-300">
              {personal.shortDescription}
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8 animate-fade-in-up stagger-2">
            {contact.social.map((social, index) => (
              <a 
                key={index}
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={social.name}
                className={`group w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:scale-110 hover:rotate-12 transition-all duration-300 animate-bounce-in stagger-${3 + index} hover:animate-pulse`}
                style={{ 
                  backgroundColor: 'rgb(31 41 55)', // gray-800
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = social.color || 'rgb(31 41 55)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgb(31 41 55)';
                }}
              >
                <i className={`${social.icon} text-xl group-hover:text-white group-hover:animate-bounce transition-all duration-300`}></i>
              </a>
            ))}
          </div>
          
          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8 animate-fade-in-up stagger-8">
            <p className="text-gray-400 text-sm hover:text-gray-300 transition-all duration-300">
              &copy; {currentYear} {personal.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Back to Top Button - Fixed position */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-linear-to-r from-primary-600 to-accent-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-40 group animate-bounce-in hover:animate-pulse"
        title="Back to top"
        aria-label="Back to top"
      >
        <i className="fas fa-arrow-up group-hover:animate-bounce transition-all duration-300"></i>
      </button>
    </footer>
  );
}
