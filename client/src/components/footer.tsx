import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Heart } from "lucide-react";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="bg-muted/50 py-12 border-t border-border" data-testid="footer">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-8 items-center"
        >
          {/* Brand */}
          <div className="text-center md:text-left" data-testid="footer-brand">
            <h3 className="text-2xl font-bold gradient-text mb-2">Shyam J</h3>
            <p className="text-muted-foreground">AI & Data Science Student</p>
          </div>

          {/* Quick Links */}
          <div className="text-center" data-testid="footer-links">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {quickLinks.map((link) => (
                <motion.button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  whileHover={{ scale: 1.05 }}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  data-testid={`footer-link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Social Icons */}
          <div className="text-center md:text-right" data-testid="footer-social">
            <div className="flex justify-center md:justify-end space-x-4">
              <motion.a
                href="https://github.com/shyam-210"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.25 }}
                className="text-2xl text-muted-foreground hover:text-primary transition-all duration-300"
                data-testid="footer-github"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/shyamjk10/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.25 }}
                className="text-2xl text-muted-foreground hover:text-primary transition-all duration-300"
                data-testid="footer-linkedin"
              >
                <Linkedin size={24} />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 pt-8 border-t border-border text-center"
          data-testid="footer-copyright"
        >
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © 2025 Shyam J. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
