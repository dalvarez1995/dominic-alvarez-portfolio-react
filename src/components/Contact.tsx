import { usePortfolioConfig } from '../hooks/usePortfolioConfig';
import type { SocialLink } from '../config/portfolio.config';

export default function Contact() {
  const { config } = usePortfolioConfig();
  const { contact } = config;

  return (
    <section id="contact" className="py-24 bg-linear-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-100 rounded-full blur-3xl opacity-60 animate-float animate-fade-in stagger-1"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-100 rounded-full blur-3xl opacity-40 animate-float animate-fade-in stagger-2"></div>
        <div className="absolute top-3/4 left-3/4 w-48 h-48 bg-blue-100 rounded-full blur-2xl opacity-30 animate-float animate-fade-in stagger-3"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-24 animate-fade-in-up stagger-2">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-down stagger-3 hover:animate-glow transition-all duration-500">
            Get In Touch
            <span className="block w-24 h-1 bg-linear-to-r from-primary-600 to-accent-600 mx-auto mt-4 rounded-full animate-slide-in-left stagger-4 hover:w-32 transition-all duration-300"></span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up stagger-5 hover:text-gray-800 transition-all duration-300 mb-6">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in-up stagger-6">
          {/* Email Card */}
          <div className="group bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 text-center relative overflow-hidden animate-bounce-in stagger-7 cursor-pointer">
            <div className="absolute inset-0 bg-linear-to-br from-primary-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 bg-linear-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-500 shadow-lg group-hover:animate-pulse">
                <i className="far fa-envelope text-white text-2xl group-hover:animate-bounce"></i>
              </div>
              <h3 className="font-display text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300 group-hover:animate-glow">Email</h3>
              <a href={`mailto:${contact.email}`} className="text-primary-600 hover:text-primary-700 font-medium text-lg transition-all duration-300 hover:underline hover:animate-pulse">
                {contact.email}
              </a>
            </div>
          </div>
          
          {/* LinkedIn Card */}
          <div className="group bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 text-center relative overflow-hidden animate-bounce-in stagger-8 cursor-pointer">
            <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 bg-linear-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-500 shadow-lg group-hover:animate-pulse">
                <i className="fab fa-linkedin-in text-white text-2xl group-hover:animate-bounce"></i>
              </div>
              <h3 className="font-display text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300 group-hover:animate-glow">LinkedIn</h3>
              {contact.social.find((s: SocialLink) => s.name === 'LinkedIn') && (
                <a href={contact.social.find((s: SocialLink) => s.name === 'LinkedIn')?.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-medium text-lg transition-all duration-300 hover:underline hover:animate-pulse">
                  Connect with me
                </a>
              )}
            </div>
          </div>
          
          {/* GitHub Card */}
          <div className="group bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 text-center relative overflow-hidden animate-bounce-in stagger-9 cursor-pointer">
            <div className="absolute inset-0 bg-linear-to-br from-gray-500/5 to-gray-700/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 bg-linear-to-r from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-500 shadow-lg group-hover:animate-pulse">
                <i className="fab fa-github text-white text-2xl group-hover:animate-bounce"></i>
              </div>
              <h3 className="font-display text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors duration-300 group-hover:animate-glow">GitHub</h3>
              {contact.social.find((s: SocialLink) => s.name === 'GitHub') && (
                <a href={contact.social.find((s: SocialLink) => s.name === 'GitHub')?.url} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-800 font-medium text-lg transition-all duration-300 hover:underline hover:animate-pulse">
                  View my code
                </a>
              )}
            </div>
          </div>
        </div>
        
        {/* CTA Message */}
        <div className="text-center mt-16 animate-fade-in-up stagger-10">
          <div className="bg-linear-to-r from-primary-600 to-accent-600 rounded-3xl p-12 max-w-4xl mx-auto text-white relative overflow-hidden transition-all duration-500 group cursor-pointer">
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-all duration-300"></div>
            <div className="relative z-10">
              <h3 className="font-display text-3xl md:text-4xl font-bold mb-6 group-hover:animate-glow transition-all duration-500">
                Let's Create Something Extraordinary
              </h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed group-hover:text-white transition-all duration-300">
                Whether you need a full-stack web application, technical leadership, or digital transformation consulting, I'm here to help turn your vision into reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={`mailto:${contact.email}`} className="group/btn inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-bounce-in">
                  <i className="far fa-envelope mr-2 group-hover/btn:rotate-12 group-hover/btn:animate-bounce transition-all duration-300"></i>
                  Send Email
                </a>
                {contact.social.find((s: SocialLink) => s.name === 'LinkedIn') && (
                  <a href={contact.social.find((s: SocialLink) => s.name === 'LinkedIn')?.url} target="_blank" rel="noopener noreferrer" className="group/btn inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-2xl font-bold text-lg hover:bg-white hover:text-primary-600 transform hover:scale-105 transition-all duration-300 animate-bounce-in">
                    <i className="fab fa-linkedin-in mr-2 group-hover/btn:scale-110 group-hover/btn:animate-pulse transition-all duration-300"></i>
                    Connect on LinkedIn
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
