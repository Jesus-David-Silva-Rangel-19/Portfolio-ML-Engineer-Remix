
import { Python, React as ReactIcon, Server, Database, Docker, Cloud, BrainCircuit, Search } from "lucide-react";

const technologies = [
  { name: "Python", icon: <Python className="w-12 h-12" /> },
  { name: "TensorFlow", icon: <BrainCircuit className="w-12 h-12" /> },
  { name: "React", icon: <ReactIcon className="w-12 h-12" /> },
  { name: "Node.js", icon: <Server className="w-12 h-12" /> },
  { name: "Docker", icon: <Docker className="w-12 h-12" /> },
  { name: "AWS", icon: <Cloud className="w-12 h-12" /> },
  { name: "PostgreSQL", icon: <Database className="w-12 h-12" /> },
  { name: "PyTorch", icon: <Search className="w-12 h-12" /> },
];

const Technologies = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="font-alegreya font-bold text-4xl md:text-5xl text-center mb-16">
          Tecnologías
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="group relative flex items-center justify-center p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-20 h-20 relative flex items-center justify-center text-muted group-hover:text-accent transition-colors duration-300">
                {tech.icon}
              </div>
              <div className="absolute inset-0 bg-accent/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center">
                <span className="text-white font-labrada font-medium">
                  {tech.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
