
import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-alegreya font-bold text-4xl md:text-5xl mb-8">
          Contacto
        </h2>
        <p className="font-labrada text-xl mb-12 max-w-2xl mx-auto">
          ¿Interesado en colaborar? No dudes en contactarme para discutir proyectos
          o oportunidades de trabajo.
        </p>
        <div className="flex justify-center gap-6">
          <SocialLink
            href="mailto:contact@example.com"
            icon={<Mail className="w-6 h-6" />}
            label="Email"
          />
          <SocialLink
            href="https://linkedin.com/in/username"
            icon={<Linkedin className="w-6 h-6" />}
            label="LinkedIn"
          />
          <SocialLink
            href="https://github.com/username"
            icon={<Github className="w-6 h-6" />}
            label="GitHub"
          />
        </div>
      </div>
    </section>
  );
};

const SocialLink = ({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-6 py-3 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow"
  >
    {icon}
    <span className="font-labrada">{label}</span>
  </a>
);

export default Contact;
