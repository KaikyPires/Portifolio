import { useState, useEffect } from 'react';
import { Project } from '../types';
import { projects } from '../data';

interface ProjectsProps {
  onOpenProject: (project: Project) => void;
}

const Projects = ({ onOpenProject }: ProjectsProps) => {
  const [animateCards, setAnimateCards] = useState(false);

  useEffect(() => {
    // Trigger animation after mount
    setAnimateCards(true);
  }, []);

  return (
    <section id="projects" className="py-20 bg-dark-850">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Meus Projetos</h2>
          <div className="h-1 w-20 bg-purple-600 mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Confira alguns dos meus trabalhos recentes. Clique em "Ver Detalhes" para obter mais informações sobre cada projeto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`bg-dark-900 rounded-lg overflow-hidden transition-all duration-500 transform ${
                animateCards ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              } hover:-translate-y-1 border border-gray-800`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4 h-16 overflow-hidden">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-dark-800 text-gray-300 text-xs rounded">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-dark-800 text-gray-300 text-xs rounded">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                <button
                  onClick={() => onOpenProject(project)}
                  className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300 w-full"
                >
                  Ver Detalhes
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
