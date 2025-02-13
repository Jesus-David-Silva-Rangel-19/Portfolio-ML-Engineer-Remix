
const education = [
  {
    degree: "Doctorado en Inteligencia Artificial",
    institution: "Universidad Tecnológica",
    period: "2018 - 2022",
  },
  {
    degree: "Maestría en Ciencias de la Computación",
    institution: "Instituto de Tecnología Avanzada",
    period: "2016 - 2018",
  },
  {
    degree: "Ingeniería en Sistemas",
    institution: "Universidad Nacional",
    period: "2012 - 2016",
  },
];

const Education = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="font-alegreya font-bold text-4xl md:text-5xl text-center mb-16">
          Educación
        </h2>
        <div className="max-w-3xl mx-auto grid gap-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-alegreya font-bold text-2xl mb-2">{edu.degree}</h3>
              <p className="font-labrada text-accent mb-1">{edu.institution}</p>
              <p className="font-labrada text-sm text-muted">{edu.period}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
