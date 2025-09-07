import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Mail, Phone, Github, Linkedin, Code, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [showSuccess, setShowSuccess] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    setTimeout(() => {
      setShowSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      toast({
        title: "Message sent successfully!",
        description: "Thanks! I'll get back to you soon.",
      });
      
      setTimeout(() => setShowSuccess(false), 5000);
    }, 1000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="contact" className="py-20 bg-muted/30" data-testid="contact-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4" data-testid="contact-title">Let's Connect</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="bg-card p-8 rounded-2xl shadow-lg border border-border/50" data-testid="contact-info">
              <h3 className="text-2xl font-bold mb-6 text-center">Get in Touch</h3>

              <div className="space-y-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-4"
                  data-testid="contact-location"
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-muted-foreground">Madurai, Tamil Nadu, India</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-4"
                  data-testid="contact-email"
                >
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                    <Mail className="text-secondary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-muted-foreground">shyamj@email.com</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-4"
                  data-testid="contact-phone"
                >
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                    <Phone className="text-accent" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-muted-foreground">+91 XXXXX XXXXX</p>
                  </div>
                </motion.div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-border">
                <h4 className="font-semibold mb-4 text-center">Follow Me</h4>
                <div className="flex justify-center space-x-4" data-testid="social-links">
                  <motion.a
                    href="https://github.com/shyamj"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    data-testid="social-github-contact"
                  >
                    <Github size={20} />
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com/in/shyamj"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    data-testid="social-linkedin-contact"
                  >
                    <Linkedin size={20} />
                  </motion.a>
                  <motion.a
                    href="https://leetcode.com/shyamj"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
                    data-testid="social-leetcode-contact"
                  >
                    <Code size={20} />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="bg-card p-8 rounded-2xl shadow-lg border border-border/50" data-testid="contact-form-container">
              <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    required
                    className="w-full"
                    data-testid="input-name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                    className="w-full"
                    data-testid="input-email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or just say hi!"
                    rows={5}
                    required
                    className="w-full resize-none"
                    data-testid="textarea-message"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:shadow-lg hover:scale-105 transition-all duration-300"
                  data-testid="submit-button"
                >
                  <Send className="mr-2" size={20} />
                  Send Message
                </Button>
              </form>

              {/* Success Message */}
              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-secondary/10 border border-secondary/20 rounded-xl"
                  data-testid="success-message"
                >
                  <div className="flex items-center">
                    <CheckCircle className="text-secondary mr-2" size={20} />
                    <span className="text-secondary font-medium">Thanks! I'll get back to you soon.</span>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
