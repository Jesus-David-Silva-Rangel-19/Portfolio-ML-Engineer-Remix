
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Technologies from "@/components/Technologies";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="bg-primary">
      <Hero />
      <Skills />
      <Technologies />
      <Experience />
      <Education />
      <Projects />
      <Contact />
    </main>
  );
};

export default Index;
