
const projects = [
  {
    title: "Sistema de Reconocimiento Facial",
    category: "Computer Vision",
    description: "Implementación de un sistema de reconocimiento facial usando Deep Learning.",
    tech: ["Python", "TensorFlow", "OpenCV"],
  },
  {
    title: "Análisis de Sentimientos",
    category: "NLP",
    description: "Modelo de procesamiento de lenguaje natural para análisis de sentimientos en redes sociales.",
    tech: ["Python", "BERT", "Transformers"],
  },
  {
    title: "Plataforma de Análisis de Datos",
    category: "Full-Stack",
    description: "Desarrollo de una plataforma web para visualización y análisis de datos en tiempo real.",
    tech: ["React", "Node.js", "D3.js"],
  },
];

const Projects = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <h2 className="font-alegreya font-bold text-4xl md:text-5xl text-center mb-16">
          Proyectos Destacados
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-primary-foreground/5 p-6 rounded-xl hover:bg-primary-foreground/10 transition-colors"
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 rounded-full text-sm font-labrada bg-accent/20 text-accent">
                  {project.category}
                </span>
              </div>
              <h3 className="font-alegreya font-bold text-2xl mb-3">{project.title}</h3>
              <p className="font-labrada mb-4 text-primary-foreground/80">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 rounded text-sm font-labrada bg-primary-foreground/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
