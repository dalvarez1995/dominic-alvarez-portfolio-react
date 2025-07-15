import { useEffect } from 'react';
import { usePortfolioConfig } from './hooks/usePortfolioConfig';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Import custom configuration here if different from default
// import { customPortfolioConfig } from './config/custom.config';

function App() {
  // Use the portfolio configuration hook
  // To customize, pass your custom config: usePortfolioConfig(customPortfolioConfig)
  const { config, isLoading, error } = usePortfolioConfig();

  // Set document title
  useEffect(() => {
    document.title = config.seo.title;
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', config.seo.description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = config.seo.description;
      document.head.appendChild(meta);
    }

    // Set meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', config.seo.keywords.join(', '));
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = config.seo.keywords.join(', ');
      document.head.appendChild(meta);
    }
  }, [config.seo]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-primary-600 via-primary-700 to-accent-600">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-white text-xl font-medium">Loading portfolio...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-50">
        <div className="text-center p-8 bg-white rounded-2xl shadow-xl max-w-md mx-auto">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-triangle-exclamation text-red-500 text-2xl"></i>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Configuration Error</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-300"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header 
        name={config.personal.name}
        navigation={config.navigation}
      />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero 
          greeting={config.hero.greeting}
          title={config.hero.title}
          description={config.hero.description}
          buttons={config.hero.buttons}
          availability={config.personal.availability}
          backgroundEffects={config.hero.backgroundEffects}
          scrollIndicator={config.hero.scrollIndicator}
        />

        {/* About Section */}
        <About 
          description={config.about.description}
          stats={config.about.stats}
          skills={config.about.skills}
          profileImage={config.about.profileImage}
        />

        {/* Projects Section */}
        <Projects 
          title={config.projects.title}
          description={config.projects.description}
          projects={config.projects.featured}
          cta={config.projects.cta}
        />

        {/* Education Section */}
        <Education 
          title={config.education.title}
          description={config.education.description}
          stats={config.education.stats}
          certifications={config.education.certifications}
          specializations={config.education.specializations}
        />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
