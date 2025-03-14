import { Project } from "./types";
import {Technology } from "./types";
import Sark from "./docs/Sark.png"
import Terminal from "./docs/terminal_logo.png"
import NossaArena from "./docs/Nossa Arena.png";
import VaiMeninas from "./docs/vai_meninas.png";
import LojaDeImoveis from "./docs/sofa.jpg";
import Algoritimo from "./docs/image.png";
export const projects: Project[] = [
  {
    id: 3,
    title: "Nossa Arena",
    description: "Aplicação para gerenciar partidas e receitas de uma arena de jogos.",
    fullDescription: "Nossa Arena é uma aplicação desktop desenvolvida para gerenciar partidas e receitas de uma arena de jogos, bem como oferecer a funcionalidade de agendamento de partidas através de um calendário. O projeto calcula receitas diárias, semanais, mensais, anuais e das últimas 24 horas, exibindo os dados de forma clara. Através do calendário, os usuários podem agendar partidas em horários disponíveis, gerenciando os agendamentos diretamente na interface.",
    image: NossaArena,
    technologies:  ["HTML", "CSS", "JavaScript", "Java","Spring Boot", "MySQL"],
    demoLink: "https://nossa-arena-production.up.railway.app/",
    githubLink: "https://github.com/KaikyPires/Nossa-Arena"
  },
  {
    id: 1,
    title: "Sark",
    description: "Uma loja de roupas online com integração ao Mercado Pago para pagamentos.",
    fullDescription: "Criação de uma plataforma de e-commerce desenvolvida para vender roupas de forma eficiente e segura.O projeto inclui integração com o Mercado Pago para processamento de pagamentos, oferecendo uma experiência de compra fluida e confiável para os usuários. - A demonstração da aplicação não possui acesso ao banco de dados nem à API do Mercado Pago, visando preservar a confiabilidade e a segurança das informações dos clientes.",
    image: Sark,
    technologies: ["React","JavaScript", "Java ", "Spring Boot", "MySQL"],
    demoLink: "https://kaikypires.github.io/Sark/",
    githubLink: "https://github.com/Joao-Dutra/Projeto_SARK"
  },
  {
    id: 2,
    title: "Terminal",
    description: "Um terminal de comandos desenvolvido para um trabalho de sistema operacional.",
    fullDescription: "O Terminal é um projeto desenvolvido para simular um ambiente de linha de comandos, semelhante ao terminal do sistema operacional Linux. O terminal foi criado como parte de um trabalho acadêmico para demonstrar o funcionamento de comandos básicos e a interação entre o usuário e o sistema operacional. Os comandos simulados seguem o padrão do Linux, incluindo instruções como mkdir, tree, cd, entre outros. Algumas funções foram adaptadas em JavaScript para possibilitar a publicação e execução do projeto diretamente no GitHub Pages.",
    image: Terminal,
    technologies: ["HTML", "CSS", "JavaScript", "Java","Spring Boot"],
    demoLink: "https://kaikypires.github.io/Terminal/",
    githubLink: "https://github.com/KaikyPires/Terminal"
  },
  {
  id: 4,
  title: "Vai meninas",
  description: "Vai Meninas quiz criação de um quiz interativo para ensinar HTML e CSS a meninas do ensino médio de escolas públicas. ",
  fullDescription: "Criação de um quiz interativo para ensinar HTML e CSS a meninas do ensino médio de escolas públicas. Responsivo e hospedado no GitHub, o projeto reforça os conceitosensinados de forma prática e divertida. Tecnologias: HTML, CSS e JavaScript.",
  image: VaiMeninas,
  technologies: ["HTML", "CSS", "JavaScript"],
  demoLink: "https://kaikypires.github.io/Quiz_Vai-Meninas/",
  githubLink: "https://github.com/KaikyPires/Quiz_Vai-Meninas"
},
{
  id: 5,
  title: "Loja de Móveis",
  description: "Aplicação web para uma loja de móveis, com catálogo interativo, carrinho de compras e painel administrativo",
  fullDescription: "Uma aplicação web para uma loja de móveis permite que os clientes naveguem por um catálogo de produtos, visualizando detalhes e preços. A plataforma oferece filtros para facilitar a busca por categorias como sofás, mesas e cadeiras. Os usuários podem adicionar itens ao carrinho e finalizar a compra de forma segura. A loja também conta com um painel administrativo para gerenciar estoque e pedidos. Além disso, a aplicação é responsiva, garantindo uma boa experiência em qualquer dispositivo. - A demonstração da aplicação não possui acesso ao banco de dados nem à API do Mercado Pago, visando preservar a confiabilidade e a segurança das informações dos clientes.",

  image: LojaDeImoveis,
  technologies: ["HTML", "CSS", "JavaScript", "Java","Spring Boot", "MySQL"],
  demoLink: "https://kaikypires.github.io/loja-de-moveis/#/",
  githubLink: "https://github.com/Joao-Dutra/Projeto_Loja-Moveis"
},
{
  id: 6,
  title: "Algoritimo A*",
  description: "Mario explorando labirintos com A*",
  fullDescription: "Desenvolvi um algoritmo A* para percorrer um labirinto de forma eficiente, utilizando o Mario como personagem interativo. O caminho é calculado em tempo real, mostrando a busca pelo trajeto mais curto. A interface exibe o Luigi se movendo pelo labirinto, tornando a experiência mais visual e dinâmica. O projeto combina conceitos de inteligência artificial e interação gráfica para um resultado envolvente. Ideal para demonstrar algoritmos de busca de maneira intuitiva e divertida.",
  image: Algoritimo,
  technologies: ["HTML", "CSS", "JavaScript"],
  demoLink: "https://kaikypires.github.io/Algoritmo-A/",
  githubLink: "https://github.com/KaikyPires/Algoritmo-A"
}
];

export const socialLinks = {
  github: "https://github.com/KaikyPires",
  linkedin: "https://www.linkedin.com/in/kaiky-pires/",
  email: "kaiky.pires@yahoo.com.br"
};
export const technologies: Technology[] = [
  
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
  },
  {
    name: "Spring",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
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
