
const experiences = [
  {
    title: "Senior Machine Learning Engineer",
    company: "Tech Innovation Labs",
    period: "2021 - Presente",
    description: "Desarrollo e implementación de soluciones de ML para problemas complejos de negocio.",
  },
  {
    title: "Data Scientist",
    company: "Data Analytics Corp",
    period: "2019 - 2021",
    description: "Análisis de datos y desarrollo de modelos predictivos para optimización de procesos.",
  },
  {
    title: "Full-Stack Developer",
    company: "Web Solutions",
    period: "2017 - 2019",
    description: "Desarrollo de aplicaciones web utilizando tecnologías modernas.",
  },
];

const Experience = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <h2 className="font-alegreya font-bold text-4xl md:text-5xl text-center mb-16">
          Experiencia Profesional
        </h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 pb-8 border-l-2 border-accent last:pb-0"
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-accent" />
              <div className="bg-primary-foreground/5 p-6 rounded-xl">
                <h3 className="font-alegreya font-bold text-2xl mb-1">{exp.title}</h3>
                <p className="font-labrada text-accent mb-2">{exp.company}</p>
                <p className="font-labrada text-sm text-primary-foreground/70 mb-4">{exp.period}</p>
                <p className="font-labrada">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
