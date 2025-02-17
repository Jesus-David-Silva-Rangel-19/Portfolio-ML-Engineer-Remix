
const education = [
  {
    degree: "Doctorado en Neurociencia Computacional",
    institution: "Universidad de los Andes",
    period: "2020 - 2024",
  },
  {
    degree: "Maestría en Inteligencia Artificial",
    institution: "Universidad Nacional de Colombia",
    period: "2018 - 2020",
  },
  {
    degree: "Especialización en Ciencia de Datos",
    institution: "Pontificia Universidad Javeriana",
    period: "2017 - 2018",
  },
  {
    degree: "Ingeniería de Sistemas",
    institution: "Universidad Industrial de Santander",
    period: "2013 - 2017",
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
