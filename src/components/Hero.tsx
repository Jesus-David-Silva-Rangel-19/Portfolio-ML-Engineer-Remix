
import { GraduationCap, Briefcase, Code, Brain, Newspaper, ChartBar, Database } from "lucide-react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";

const Hero = () => {
  const particlesInit = async (engine: Engine) => {
    await loadFull(engine);
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center bg-primary text-primary-foreground py-20 overflow-hidden">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#9b87f5" },
            opacity: { value: 0.5 },
            size: { value: 3 },
            move: { enable: true, speed: 2 },
            links: { enable: true, color: "#9b87f5", opacity: 0.3 }
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "grab" },
              onClick: { enable: true, mode: "push" }
            }
          }
        }}
        className="absolute inset-0"
      />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <div className="mb-8 relative group">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden ring-4 ring-accent/20 transition-transform duration-300 group-hover:scale-105">
              <img
                src="/lovable-uploads/bd3ce28c-6bcf-4c74-8349-ab8703b9a449.png"
                alt="Jesús David Silva Rangel"
                className="w-full h-full object-cover filter sepia hover:sepia-0 transition-all duration-300"
              />
            </div>
          </div>
          
          <h1 className="font-alegreya font-black text-5xl md:text-7xl mb-6">
            Jesús David Silva Rangel
          </h1>
          
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {[
              "Machine Learning Engineer",
              "Data Scientist",
              "Data Engineer",
              "Full-Stack Developer",
              "Statistical",
              "Data Analyst",
              "Journalist & Writer"
            ].map((title) => (
              <span
                key={title}
                className="bg-accent/10 text-accent px-4 py-1 rounded-full font-labrada text-sm"
              >
                {title}
              </span>
            ))}
          </div>
          
          <p className="font-labrada text-xl mb-12 leading-relaxed text-secondary/90">
            Ingeniero especializado en Machine Learning y Ciencia de Datos con experiencia en NLP, 
            Computer Vision y desarrollo Full-Stack. Apasionado por la innovación tecnológica y 
            la escritura científica.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <Stat icon={<Brain className="w-8 h-8" />} label="Machine Learning" />
            <Stat icon={<Code className="w-8 h-8" />} label="Desarrollo Web" />
            <Stat icon={<Database className="w-8 h-8" />} label="Data Engineering" />
            <Stat icon={<ChartBar className="w-8 h-8" />} label="Data Science" />
            <Stat icon={<GraduationCap className="w-8 h-8" />} label="Investigación" />
            <Stat icon={<Briefcase className="w-8 h-8" />} label="Consultoría" />
            <Stat icon={<Newspaper className="w-8 h-8" />} label="Periodismo" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Stat = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-colors">
    {icon}
    <span className="font-labrada text-sm">{label}</span>
  </div>
);

export default Hero;
