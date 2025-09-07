import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Eye, Video, Brain, Microscope } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Virtual Fencing Project",
    description: "AI-powered surveillance system using YOLOv8 and OpenCV that replaces traditional physical fences with intelligent monitoring.",
    image: "/virtualFence.png",
    tags: ["YOLOv8", "OpenCV", "Python"],
    categories: ["ai", "cv"],
    icon: <Video size={24} />,
    gradient: "from-primary to-secondary",
    githubUrl: "https://github.com/shyam-210/VirtualFencing"
  },
  {
    id: 2,
    title: "Brain Tumor Segmentation",
    description: "Web application using U-Net architecture for accurate detection and segmentation of brain tumors in MRI scans.",
    image: "/brainTumor.png",
    tags: ["U-Net", "TensorFlow", "Flask"],
    categories: ["ai", "dl"],
    icon: <Brain size={24} />,
    gradient: "from-secondary to-accent",
    githubUrl: "https://github.com/shyam-210/Brain_Tumor_Segmentation"
  },
  {
    id: 3,
    title: "Alzheimer's Disease Classification",
    description: "CNN-based classification system for early detection of Alzheimer's disease using MRI image analysis.",
    image: "/Alzhiemers.png",
    tags: ["CNN", "Keras", "Python"],
    categories: ["ai", "dl"],
    icon: <Microscope size={24} />,
    gradient: "from-accent to-primary",
    githubUrl: "https://github.com/shyam-210/Alzheimers-Disease-Classification"
  },
];

const filterCategories = [
  { id: "all", label: "All Projects" },
  { id: "ai", label: "AI/ML" },
  { id: "cv", label: "Computer Vision" },
  { id: "dl", label: "Deep Learning" },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.categories.includes(activeFilter));

  return (
    <section id="projects" className="py-20 bg-muted/30" data-testid="projects-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4" data-testid="projects-title">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Showcasing innovative AI and machine learning projects that solve real-world problems
          </p>
        </motion.div>

        {/* Project Filter Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
          data-testid="project-filters"
        >
          {filterCategories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              variant={activeFilter === category.id ? "default" : "outline"}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              }`}
              data-testid={`filter-${category.id}`}
            >
              {category.label}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: 0.4 + (index * 0.1), duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-card rounded-2xl shadow-lg border border-border/50 overflow-hidden hover:shadow-2xl transition-all duration-400"
              data-testid={`project-${project.id}`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
                  <div className="flex space-x-2">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-white/30" data-testid={`project-github-${project.id}`}>
                        <Github size={16} />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <div className={`text-primary`}>
                    {project.icon}
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                      data-testid={`project-tag-${tag.toLowerCase()}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Button
                    className={`w-full bg-gradient-to-r ${project.gradient} text-primary-foreground hover:shadow-lg hover:scale-105 transition-all duration-300`}
                    data-testid={`project-button-${project.id}`}
                  >
                    <ExternalLink className="mr-2" size={16} />
                    View Project
                  </Button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12"
        >
          <a href="https://github.com/shyam-210" target="_blank" rel="noopener noreferrer">
            <Button
              className="bg-gradient-to-r from-primary via-secondary to-accent text-primary-foreground px-8 py-3 rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
              data-testid="view-more-projects"
            >
              <Github className="mr-2" size={20} />
              View More on GitHub
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
