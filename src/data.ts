import { Project } from "./types";
import {Technology } from "./types";
import Sark from "./docs/Sark-logo.png"
import Terminal from "./docs/Terminal.png"
import NossaArena from "./docs/Nossa Arena.png";
export const projects: Project[] = [
  {
    id: 3,
    title: "Nossa Arena",
    description: "Aplicação para gerenciar partidas e receitas de uma arena de jogos.",
    fullDescription: "Nossa Arena é uma aplicação desenvolvida para gerenciar partidas e receitas de uma arena de jogos, bem como oferecer a funcionalidade de agendamento de partidas através de um calendário. O projeto calcula receitas diárias, semanais, mensais, anuais e das últimas 24 horas, exibindo os dados de forma clara. Através do calendário, os usuários podem agendar partidas em horários disponíveis, gerenciando os agendamentos diretamente na interface.",
    image: NossaArena,
    technologies:  ["HTML", "CSS", "JavaScript", "Java","Spring Boot", "MySQL"],

    githubLink: "https://github.com/KaikyPires/Nossa-Arena"
  },
  {
    id: 1,
    title: "Sark",
    description: "Uma loja de roupas online com integração ao Mercado Pago para pagamentos.",
    fullDescription: "Criação de uma plataforma de e-commerce desenvolvida para vender roupas de forma eficiente e segura. O projeto inclui integração com o Mercado Pago para processamento de pagamentos, oferecendo uma experiência de compra fluida e confiável para os usuários.",
    image: Sark,
    technologies: ["React","JavaScript", "Java ", "Spring Boot", "MySQL"],
    
    githubLink: "https://github.com/Joao-Dutra/Projeto_SARK"
  },
  {
    id: 2,
    title: "Terminal",
    description: "Um terminal de comandos desenvolvido para um trabalho de sistema operacional.",
    fullDescription: "O Terminal é um projeto desenvolvido para simular um ambiente de linha de comandos, semelhante a terminais de sistemas operacionais como Linux ou Windows. O terminal foi criado como parte de um trabalho acadêmico para demonstrar o funcionamento de comandos básicos e a interação entre o usuário e o sistema operacional.",
    image: Terminal,
    technologies: ["HTML", "CSS", "JavaScript", "Java","Spring Boot",],
    
    githubLink: "https://github.com/KaikyPires/Terminal"
  },
  
];

export const socialLinks = {
  github: "",
  linkedin: "https://www.linkedin.com/in/kaiky-pires/",
  email: "kaiky.pires@yahoo.com.br"
};
export const technologies: Technology[] = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  },
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
  },
  {
    name: "Spring",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
  },
 
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
  },

  {
    name: "MySql",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
  }
];
