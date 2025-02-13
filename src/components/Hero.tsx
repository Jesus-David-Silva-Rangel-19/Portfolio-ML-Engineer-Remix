
import { GraduationCap, Briefcase, Code, Brain } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-primary text-primary-foreground py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <h1 className="font-alegreya font-black text-5xl md:text-7xl mb-6">
            Jesús David Silva Rangel
          </h1>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {["Machine Learning Engineer", "Data Scientist", "Full-Stack Developer"].map((title) => (
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
            <Stat icon={<GraduationCap className="w-8 h-8" />} label="Investigación" />
            <Stat icon={<Briefcase className="w-8 h-8" />} label="Consultoría" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Stat = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-primary-foreground/5">
    {icon}
    <span className="font-labrada text-sm">{label}</span>
  </div>
);

export default Hero;
