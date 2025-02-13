
const skills = [
  { category: "Machine Learning", items: ["Deep Learning", "NLP", "Computer Vision", "TensorFlow", "PyTorch"] },
  { category: "Data Science", items: ["Python", "R", "Statistical Analysis", "Big Data", "Data Visualization"] },
  { category: "Web Development", items: ["React", "Node.js", "TypeScript", "Django", "PostgreSQL"] },
  { category: "Tools & Platforms", items: ["Git", "Docker", "AWS", "Linux", "Kubernetes"] },
];

const Skills = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="font-alegreya font-bold text-4xl md:text-5xl text-center mb-16">
          Habilidades Técnicas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.category}
              className="p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-alegreya font-bold text-xl mb-4">{skill.category}</h3>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li
                    key={item}
                    className="font-labrada text-muted flex items-center gap-2"
                  >
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
