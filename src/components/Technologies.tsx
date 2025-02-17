
const technologies = [
  { name: "Python", logo: "/lovable-uploads/927f6cd2-df68-41d5-b6e0-a7fc685f3ac3.png" },
  { name: "TensorFlow", logo: "/lovable-uploads/222bd360-4984-498a-901a-0ac591a8aed7.png" },
  { name: "PyTorch", logo: "/lovable-uploads/3222acf2-7450-47a1-8b1c-967a96e221a4.png" },
  { name: "React", logo: "/lovable-uploads/b7f179a8-e064-44af-9bef-54f9cc8ef455.png" },
  { name: "Node.js", logo: "/lovable-uploads/aaf74669-b7cd-42aa-aaed-7925596d8a0d.png" },
  { name: "Docker", logo: "/lovable-uploads/9ba18650-ffb0-4e0f-92fd-0776fe470f90.png" },
  { name: "AWS", logo: "/lovable-uploads/bec94e52-cc93-4de5-b73a-0e2efc0e2693.png" },
  { name: "PostgreSQL", logo: "/lovable-uploads/cfd1b082-73f5-4723-8170-f9df55f0a6f9.png" },
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
              <div className="w-20 h-20 relative">
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
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
