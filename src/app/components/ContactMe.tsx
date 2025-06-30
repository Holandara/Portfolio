"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";

export const ContactMe = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub size={24} />,
      url: "https://github.com/Holandara",
      color: "hover:text-gray-400"
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={24} />,
      url: "https://linkedin.com/in/Sara-Holanda",
      color: "hover:text-blue-500"
    },
    {
      name: "Email",
      icon: <FaEnvelope size={24} />,
      url: "mailto:saraholandatavares@gmail.com",
      color: "hover:text-red-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.section 
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-12 bg-clip-border z-10"
    >
      <motion.h2 
        variants={itemVariants}
        className="text-2xl md:text-3xl mb-4"
      >
        Entre em contato comigo!
      </motion.h2>

      <motion.div 
        variants={itemVariants}
        className="py-10 md:text-7xl font-typographica text-6xl bg-gradient-to-r from-purple-500 to-danger bg-clip-text text-transparent"
      >
        Vamos conversar!
      </motion.div>

      <motion.p
        variants={itemVariants}
        className="text-xl mb-8 max-w-md"
      >
        Estou sempre aberta a novas oportunidades e colaborações.
      </motion.p>

      <motion.div 
        variants={containerVariants}
        className="flex flex-wrap justify-center gap-6 mt-8"
      >
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            variants={itemVariants}
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-white ${link.color} transition-colors duration-300 flex flex-col items-center gap-2 p-4 rounded-lg bg-gray-800/50 backdrop-blur-sm`}
          >
            <span className="text-3xl">{link.icon}</span>
            <span className="text-sm">{link.name}</span>
          </motion.a>
        ))}
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="mt-16 text-sm text-gray-400"
      >
        © {new Date().getFullYear()} Sara Holanda Mesquita Tavares. Todos os direitos reservados.
      </motion.div>
    </motion.section>
  );
};