import { motion } from "framer-motion";
import { Download, Mail, Github, Linkedin, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTypingAnimation } from "@/hooks/use-typing-animation";

export default function Hero() {
  const typingText = useTypingAnimation("AI & Data Science Student | Aspiring AI Engineer", 100);

  const handleDownloadResume = () => {
    // Create a mock resume download
    const link = document.createElement('a');
    link.href = '/api/resume/download';
    link.click();
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen hero-bg flex items-center justify-center pt-16" data-testid="hero-section">
      {/* Floating Particles */}
      <div className="floating-particle w-4 h-4 top-20 left-10 opacity-60" style={{ animationDelay: '0s' }}></div>
      <div className="floating-particle w-3 h-3 top-40 right-20 opacity-40" style={{ animationDelay: '2s' }}></div>
      <div className="floating-particle w-5 h-5 bottom-40 left-1/4 opacity-50" style={{ animationDelay: '4s' }}></div>
      <div className="floating-particle w-2 h-2 top-60 right-1/3 opacity-70" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-4xl mx-auto px-2 sm:px-4 lg:px-8 text-center w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Professional Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              <img
                src="/shyam.jpg"
                alt="Shyam J - AI & Data Science Student"
                className="w-40 h-40 rounded-full border-4 border-primary/20 shadow-2xl animate-glow"
                data-testid="hero-avatar"
              />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-secondary rounded-full animate-pulse"></div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 gradient-text"
            data-testid="hero-name"
          >
            Shyam J
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 h-8 sm:h-10 md:h-12"
          >
            <span className="typing-animation" data-testid="hero-tagline">{typingText}</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-2"
            data-testid="hero-description"
          >
            Passionate about AI, Machine Learning, and Deep Learning. Building intelligent solutions that make a difference.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-2" 
          >
            <Button
              onClick={handleDownloadResume}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 sm:px-6 lg:px-8 py-2 sm:py-3 text-sm sm:text-base rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-medium w-full sm:w-auto"
              data-testid="download-resume-button"
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </Button>
            <Button
              onClick={scrollToContact}
              variant="secondary"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-4 sm:px-6 lg:px-8 py-2 sm:py-3 text-sm sm:text-base rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-medium w-full sm:w-auto"
              data-testid="contact-me-button"
            >
              <Mail className="mr-2" size={20} />
              Contact Me
            </Button>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex justify-center space-x-4 sm:space-x-6 px-2"
          >
            <motion.a
              href="https://github.com/shyam-210"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.25 }}
              className="text-xl sm:text-2xl text-muted-foreground hover:text-primary transition-all duration-300 p-2 sm:p-3 rounded-full hover:bg-primary/10"
              data-testid="social-github"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/shyamjk10/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.25 }}
              className="text-2xl text-muted-foreground hover:text-primary transition-all duration-300 p-3 rounded-full hover:bg-primary/10"
              data-testid="social-linkedin"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href="https://leetcode.com/u/shyam__026/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.25 }}
              className="text-2xl text-muted-foreground hover:text-primary transition-all duration-300 p-3 rounded-full hover:bg-primary/10"
              data-testid="social-leetcode"
            >
              <Code size={24} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
