import { FileText, Linkedin } from 'lucide-react';
import { socialLinks } from '../data';
const About = () => {
  return (
    <section id="about" className="py-20 bg-dark-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Sobre Mim</h2>
          <div className="h-1 w-20 bg-purple-600 mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-dark-850 rounded-lg p-8 border border-gray-800">
            <p className="text-gray-300 mb-6 leading-relaxed">
              Olá! Sou um desenvolvedor apaixonado por criar soluções digitais inovadoras e funcionais. 
              Com experiência em desenvolvimento web e mobile, busco sempre aprender novas tecnologias 
              e aprimorar minhas habilidades para entregar produtos de alta qualidade.
            </p>
            
            <p className="text-gray-300 mb-8 leading-relaxed">
              Minha abordagem combina criatividade com metodologias ágeis, resultando em aplicações 
              intuitivas e eficientes. Sou movido por desafios e acredito que a tecnologia tem o 
              poder de transformar negócios e vidas.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="src\docs\Currículo -  Kaiky Pires.pdf" 
                target="_blank" 
                className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-all"
              >
                <FileText size={18} />
                Ver Currículo
              </a>
              <a 
                href="https://www.linkedin.com/in/kaiky-pires/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#0A66C2] hover:opacity-90 text-white px-6 py-3 rounded-lg transition-all"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
