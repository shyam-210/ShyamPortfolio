import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, School, Brain, Lightbulb } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-card" data-testid="about-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4" data-testid="about-title">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6" data-testid="about-description">
              I'm a final-year B.Tech student in Artificial Intelligence and Data Science at KLN College of Engineering. 
              I specialize in ML, DL, and AI-driven projects, with a passion for building impactful real-world solutions.
            </p>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-muted/50 p-6 rounded-2xl border border-border/50 hover:shadow-lg transition-all duration-300"
              data-testid="fun-fact-card"
            >
              <h3 className="text-xl font-semibold text-primary mb-3">
                <Lightbulb className="inline mr-2" size={24} />
                Fun Fact
              </h3>
              <p className="text-muted-foreground">
                Loves building AI projects that solve real-world problems and constantly exploring the latest developments in artificial intelligence.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-2xl border border-primary/20" data-testid="academic-journey-card">
              <h3 className="text-2xl font-semibold mb-6 text-center">Academic Journey</h3>

              <div className="space-y-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-4"
                  data-testid="journey-btech"
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <GraduationCap className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold">B.Tech AI & Data Science</h4>
                    <p className="text-sm text-muted-foreground">2022 - 2026 | CGPA: 8.3</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-4"
                  data-testid="journey-hsc"
                >
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                    <School className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Higher Secondary</h4>
                    <p className="text-sm text-muted-foreground">2022 | Percentage: 85%</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-4"
                  data-testid="journey-specialization"
                >
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                    <Brain className="text-accent" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold">AI Specialization</h4>
                    <p className="text-sm text-muted-foreground">Focus on ML, DL & Computer Vision</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
