import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Brain, BarChart, Database, GitBranch } from "lucide-react";
import { 
  SiPython, 
  SiCoffeescript, 
  SiTensorflow, 
  SiKeras, 
  SiScikitlearn, 
  SiOpencv, 
  SiPandas, 
  SiNumpy 
} from "react-icons/si";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code size={24} />,
    bgColor: "from-primary/5 to-primary/10",
    borderColor: "border-primary/20",
    iconBg: "bg-primary/20",
    iconColor: "text-primary",
    progressColor: "bg-primary",
    skills: [
      { name: "Python", level: 90, icon: <SiPython size={20} /> },
      { name: "Java", level: 75, icon: <SiCoffeescript size={20} /> },
      { name: "C", level: 70, icon: "C" }, // fallback text
    ],
  },
  {
    title: "AI/ML Frameworks",
    icon: <Brain size={24} />,
    bgColor: "from-secondary/5 to-secondary/10",
    borderColor: "border-secondary/20",
    iconBg: "bg-secondary/20",
    iconColor: "text-secondary",
    progressColor: "bg-secondary",
    skills: [
      { name: "TensorFlow", level: 85, icon: <SiTensorflow size={20} /> },
      { name: "Keras", level: 80, icon: <SiKeras size={20} /> },
      { name: "Scikit-learn", level: 90, icon: <SiScikitlearn size={20} /> },
      { name: "OpenCV", level: 75, icon: <SiOpencv size={20} /> },
    ],
  },
  {
    title: "Data & Tools",
    icon: <BarChart size={24} />,
    bgColor: "from-accent/5 to-accent/10",
    borderColor: "border-accent/20",
    iconBg: "bg-accent/20",
    iconColor: "text-accent",
    progressColor: "bg-accent",
    skills: [
      { name: "Pandas", level: 95, icon: <SiPandas size={20} /> },
      { name: "NumPy", level: 90, icon: <SiNumpy size={20} /> },
      { name: "SQL", level: 80, icon: <Database size={20} /> },
      { name: "Git", level: 85, icon: <GitBranch size={20} /> },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 bg-card" data-testid="skills-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4" data-testid="skills-title">
            Skills & Tools
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        {/* Skills Categories */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
              className={`bg-gradient-to-br ${category.bgColor} p-8 rounded-2xl border ${category.borderColor} h-full hover:shadow-xl transition-all duration-300`}
              data-testid={`skill-category-${categoryIndex}`}
            >
              <div className="text-center mb-6">
                <div
                  className={`w-16 h-16 ${category.iconBg} rounded-full mx-auto flex items-center justify-center mb-4`}
                >
                  <div className={category.iconColor}>{category.icon}</div>
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{
                      delay: categoryIndex * 0.2 + skillIndex * 0.1,
                      duration: 0.4,
                    }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="bg-card p-4 rounded-xl border border-border/50 hover:shadow-lg transition-all duration-300"
                    data-testid={`skill-${skill.name.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-xl">{skill.icon}</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                          duration: 1,
                        }}
                        className={`${category.progressColor} h-2 rounded-full`}
                      />
                    </div>
                    <div className="text-right text-sm text-muted-foreground mt-1">
                      {skill.level}%
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
