import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Brain, Bot } from "lucide-react";

const certificates = [
  {
    id: 1,
    title: "Microsoft Azure Cloud Computing",
    subtitle: "Value-Added Course",
    issuer: "Microsoft Certified",
    description: "Comprehensive training in cloud computing, Azure services, and cloud architecture principles.",
    icon: <Award size={24} />,
    bgColor: "from-primary/5 to-primary/10",
    borderColor: "border-primary/20",
    iconBg: "bg-primary/20",
    iconColor: "text-primary",
    badgeColor: "bg-primary/10 text-primary",
  },
  {
    id: 2,
    title: "Career Essentials in Generative AI",
    subtitle: "Microsoft + LinkedIn",
    issuer: "Industry Certified",
    description: "Advanced course covering generative AI technologies, applications, and industry best practices.",
    icon: <Bot size={24} />,
    bgColor: "from-secondary/5 to-secondary/10",
    borderColor: "border-secondary/20",
    iconBg: "bg-secondary/20",
    iconColor: "text-secondary",
    badgeColor: "bg-secondary/10 text-secondary",
  },
  {
    id: 3,
    title: "Introduction to Machine Learning",
    subtitle: "NPTEL - IIT Kharagpur",
    issuer: "Academic Excellence",
    description: "Comprehensive ML fundamentals course from premier Indian Institute of Technology.",
    icon: <Brain size={24} />,
    bgColor: "from-accent/5 to-accent/10",
    borderColor: "border-accent/20",
    iconBg: "bg-accent/20",
    iconColor: "text-accent",
    badgeColor: "bg-accent/10 text-accent",
  },
  {
    id: 4,
    title: "Human Computer Interaction",
    subtitle: "NPTEL",
    issuer: "UX/UI Design",
    description: "Study of interaction design, user experience principles, and interface development.",
    icon: <Users size={24} />,
    bgColor: "from-primary/5 via-secondary/5 to-accent/5",
    borderColor: "border-primary/20",
    iconBg: "bg-gradient-to-br from-primary/20 to-accent/20",
    iconColor: "text-primary",
    badgeColor: "bg-gradient-to-r from-primary/10 to-accent/10 text-primary",
  },
];

export default function Certificates() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certificates" className="py-20 bg-card" data-testid="certificates-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4" data-testid="certificates-title">
            Certificates & Achievements
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4">Professional certifications and continuous learning achievements</p>
        </motion.div>

        {/* Certificates Horizontal Scroll */}
        <div className="certificate-scroll overflow-x-auto pb-6" data-testid="certificates-container">
          <div className="flex space-x-6 min-w-max">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`bg-gradient-to-br ${cert.bgColor} p-6 rounded-2xl border ${cert.borderColor} w-80 flex-shrink-0 hover:shadow-xl transition-all duration-300`}
                data-testid={`certificate-${cert.id}`}
              >
                <div className="text-center">
                  <div className={`w-16 h-16 ${cert.iconBg} rounded-full mx-auto flex items-center justify-center mb-4`}>
                    <div className={cert.iconColor}>
                      {cert.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{cert.subtitle}</p>
                  <div className={`${cert.badgeColor} px-4 py-2 rounded-full mb-4 inline-block`}>
                    <span className="font-medium text-sm">{cert.issuer}</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{cert.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scroll Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex justify-center mt-6 space-x-2"
          data-testid="scroll-indicators"
        >
          {certificates.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === 0 ? "bg-primary" : "bg-muted"
              }`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
