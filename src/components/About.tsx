import { FileText, Linkedin } from 'lucide-react';

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
            Olá! Meu nome é Kaiky, sou graduando em Sistemas de Informação no IFMG e tenho uma grande paixão por desenvolvimento de software. Desde o início da minha trajetória acadêmica, venho me aprofundando em diversas tecnologias e aprimorando minhas habilidades na área de programação.
            </p>
            <p>
    
          Tenho experiência em Java, Spring Boot e React. Além disso, estou sempre buscando aprender novas ferramentas e metodologias para me manter atualizado com as tendências do mercado.

            </p>
  

            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://drive.google.com/file/d/1xK9Q1h5_v6Qjk0PvdUsCJpAafPQYUgOU/view?usp=sharing" 
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
