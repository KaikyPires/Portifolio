import { useState } from 'react';
import { Github, Linkedin, Mail, Send } from 'lucide-react';
import { socialLinks } from '../data';
import { motion } from 'framer-motion';
import ConfirmationModal from './ConfirmationModal'; // Importe o componente do modal

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false); // Estado para controlar o modal

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xqapzqlo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setFormData({ name: '', email: '', message: '' }); // Limpa o formulário
        setIsConfirmationOpen(true); // Abre o modal de confirmação
      } else {
        alert('Ocorreu um erro ao enviar a mensagem. Tente novamente.');
      }
    } catch (error) {
      alert('Ocorreu um erro ao enviar a mensagem. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeConfirmation = () => {
    setIsConfirmationOpen(false); // Fecha o modal de confirmação
  };

  return (
    <section id="contact" className="py-20 bg-dark-850">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Entre em Contato</h2>
          <div className="h-1 w-20 bg-purple-600 mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Preencha o formulário abaixo ou entre em
            contato através das minhas redes sociais.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                  Nome
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors text-white"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                  Email
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors text-white"
                  placeholder="seu.email@exemplo.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                  Mensagem
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.01 }}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-dark-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors resize-none text-white"
                  placeholder="Sua mensagem aqui..."
                ></motion.textarea>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {isSubmitting ? (
                  <>Enviando...</>
                ) : (
                  <>
                    <Send size={18} />
                    Enviar Mensagem
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="bg-dark-900 p-8 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold mb-6 text-white">Conecte-se comigo</h3>

              <div className="space-y-4">
                <motion.a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 hover:bg-dark-800 rounded-lg transition-colors"
                  whileHover={{ x: 5, backgroundColor: 'rgba(31, 31, 45, 1)' }}
                >
                  <div className="bg-gray-800 text-white p-2 rounded-full">
                    <Github size={20} />
                  </div>
                  <span className="text-gray-300">GitHub</span>
                </motion.a>

                <motion.a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 hover:bg-dark-800 rounded-lg transition-colors"
                  whileHover={{ x: 5, backgroundColor: 'rgba(31, 31, 45, 1)' }}
                >
                  <div className="bg-[#0A66C2] text-white p-2 rounded-full">
                    <Linkedin size={20} />
                  </div>
                  <span className="text-gray-300">LinkedIn</span>
                </motion.a>

                <motion.a
                  href={`mailto:${socialLinks.email}`}
                  className="flex items-center gap-4 p-3 hover:bg-dark-800 rounded-lg transition-colors"
                  whileHover={{ x: 5, backgroundColor: 'rgba(31, 31, 45, 1)' }}
                >
                  <div className="bg-purple-600 text-white p-2 rounded-full">
                    <Mail size={20} />
                  </div>
                  <span className="text-gray-300">{socialLinks.email}</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal de Confirmação */}
      <ConfirmationModal
        isOpen={isConfirmationOpen}
        onClose={closeConfirmation}
        title="Mensagem Enviada!"
        message="Sua mensagem foi enviada com sucesso. Obrigado pelo contato! Retornarei o mais breve possível."
      />
    </section>
  );
};

export default Contact;