import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, School } from "lucide-react";

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-20 bg-muted/30" data-testid="education-section">
      <div className="max-w-4xl mx-auto px-2 sm:px-4 lg:px-8 overflow-hidden" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4" data-testid="education-title">
            <GraduationCap className="inline mr-3" size={48} />
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        {/* Vertical Timeline */}
        <div className="relative overflow-hidden">
          {/* Timeline Line */}
          <div className="absolute left-1 sm:left-2 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full timeline-line rounded-full"></div>
          {/* Education Items */}
          <div className="space-y-12">
            {/* B.Tech */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative flex flex-col md:flex-row items-start md:items-center"
              data-testid="education-btech"
            >
              <div className="absolute left-[-1px] sm:left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 sm:w-5 sm:h-5 bg-primary rounded-full border-2 sm:border-4 border-background shadow-lg z-10"></div>
              <div className="w-full md:w-1/2 md:pr-4 lg:pr-8 ml-6 sm:ml-8 md:ml-0 md:text-right">
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-card p-3 sm:p-4 lg:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center mb-3 md:justify-end">
                    <GraduationCap className="text-primary mr-2" size={20} />
                    <span className="text-sm text-muted-foreground">2022 - 2026</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">B.Tech Artificial Intelligence and Data Science</h3>
                  <p className="text-primary font-semibold mb-2">KLN College of Engineering</p>
                  <p className="text-muted-foreground mb-3">
                    Comprehensive study of AI algorithms, machine learning, deep learning, and data science methodologies.
                  </p>
                  <div className="bg-primary/10 px-3 py-1 rounded-full inline-block">
                    <span className="text-primary font-medium">CGPA: 8.3/10</span>
                  </div>
                </motion.div>
              </div>

              <div className="hidden md:block w-1/2"></div>
            </motion.div>

            {/* HSC */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="relative flex flex-col md:flex-row items-start md:items-center"
              data-testid="education-hsc"
            >
              <div className="absolute left-[-1px] sm:left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 sm:w-5 sm:h-5 bg-secondary rounded-full border-2 sm:border-4 border-background shadow-lg z-10"></div>

              <div className="hidden md:block w-1/2"></div>

              <div className="w-full md:w-1/2 md:pl-4 lg:pl-8 ml-6 sm:ml-8 md:ml-0">
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-card p-3 sm:p-4 lg:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center mb-3">
                    <School className="text-secondary mr-2" size={20} />
                    <span className="text-sm text-muted-foreground">2022</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">Higher Secondary Certificate (HSC)</h3>
                  <p className="text-secondary font-semibold mb-2">CSR Memorial School, Madurai</p>
                  <p className="text-muted-foreground mb-3">
                    Focused on Science stream with Mathematics, Physics, Chemistry, and Computer Science.
                  </p>
                  <div className="bg-secondary/10 px-3 py-1 rounded-full inline-block">
                    <span className="text-secondary font-medium">Percenatge: 85%</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
