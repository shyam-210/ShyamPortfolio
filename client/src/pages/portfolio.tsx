import { useEffect } from "react";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Education from "@/components/education";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Certificates from "@/components/certificates";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import BackToTop from "@/components/back-to-top";

export default function Portfolio() {
  useEffect(() => {
    document.title = "Shyam J - AI & Data Science Student Portfolio";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Passionate AI & Data Science student specializing in Machine Learning, Deep Learning, and AI-driven projects. Building intelligent solutions that make a difference.');
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
