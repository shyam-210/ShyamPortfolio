
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Software Developer Intern",
    company: "Jaran Technology Services",
    period: "January 2025 – March 2025",
    description: "Developed and deployed a web-based billing system using Flask, React, and SQLAlchemy with RESTful APIs and MySQL integration.",
  },
  {
    id: 2,
    role: "Python Developer Intern",
    company: "Tarcin Robotics",
    period: "April 2025 – June 2025",
    description: "Built AI-integrated web apps including a handwritten text recognition system and medical chatbot by fine-tuning existing ML models.",
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 bg-background" data-testid="experience-section">
      <div className="max-w-4xl mx-auto px-2 sm:px-4 lg:px-8 overflow-hidden" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4" data-testid="experience-title">Work Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            My professional journey and contributions in the tech industry.
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          {/* Timeline Line */}
          <div className="absolute left-1 sm:left-2 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-border rounded-full"></div>
          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + (index * 0.2), duration: 0.6 }}
                className="relative flex flex-col md:flex-row items-start md:items-center"
              >
                <div className="absolute left-[-1px] sm:left-0 md:left-1/2 transform md:-translate-x-1/2 w-10 h-10 bg-primary rounded-full flex items-center justify-center border-4 border-background shadow-lg z-10">
                  <Briefcase size={20} className="text-primary-foreground" />
                </div>

                {index % 2 === 0 ? (
                  <>
                    <div className="w-full md:w-1/2 md:pr-8 lg:pr-12 md:text-right ml-6 sm:ml-8 md:ml-0">
                      <motion.div
                        whileHover={{ scale: 1.02, y: -5 }}
                        className="bg-card p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300"
                      >
                        <p className="text-sm text-muted-foreground">{experience.period}</p>
                        <h3 className="text-lg sm:text-xl font-bold text-primary mt-1">{experience.role}</h3>
                        <p className="font-semibold">{experience.company}</p>
                        <p className="text-muted-foreground mt-2 text-sm">{experience.description}</p>
                      </motion.div>
                    </div>
                    <div className="hidden md:block w-1/2"></div>
                  </>
                ) : (
                  <>
                    <div className="hidden md:block w-1/2"></div>
                    <div className="w-full md:w-1/2 md:pl-8 lg:pl-12 ml-6 sm:ml-8 md:ml-0">
                      <motion.div
                        whileHover={{ scale: 1.02, y: -5 }}
                        className="bg-card p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300"
                      >
                        <p className="text-sm text-muted-foreground">{experience.period}</p>
                        <h3 className="text-lg sm:text-xl font-bold text-primary mt-1">{experience.role}</h3>
                        <p className="font-semibold">{experience.company}</p>
                        <p className="text-muted-foreground mt-2 text-sm">{experience.description}</p>
                      </motion.div>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
