import { ChevronDown } from 'lucide-react';
import { Link } from 'react-scroll';
import { useEffect, useState } from 'react';
import { technologies } from '../data'; // Importe a lista de tecnologias

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-dark-950 to-dark-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight text-white">
              Kaiky Pires de Souza
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 font-light mb-8">
              <span className="text-purple-400">Desenvolvedor</span>
            </p>
            
            <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Link
                to="projects"
                smooth={true}
                duration={800}
                offset={-80}
                className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300"
              >
                Ver Projetos
              </Link>
            </div>
          </div>
        </div>

        {/* Seção de Tecnologias */}
        <div className="mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
            Tecnologias que Utilizo
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-4 bg-dark-800 rounded-lg border border-gray-800"
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-12 h-12 mb-2 hover:scale-110 transition-transform duration-300"
                />
                <span className="text-gray-300 text-sm font-medium">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Seta para rolar para a próxima seção */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-purple-500" />
      </div>
    </section>
  );
};

export default Hero;