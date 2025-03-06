import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import { Project } from './types';
import './index.css';
import { ChevronUp } from 'lucide-react';

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Load Google Font
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-dark-900 min-h-screen font-outfit text-gray-200">
      <Header />
      <main>
        <Hero />
        <Projects onOpenProject={handleOpenProject} />
        <About />
        <Contact />
      </main>
      <Footer />
      
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      
      {/* Floating back to top button */}
      <div className="fixed bottom-8 right-8 z-10">
        <Link
          to="hero"
          smooth={true}
          duration={800}
          className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 inline-flex"
        >
          <ChevronUp className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}

export default App;
