
import { Mail, Linkedin, Github, Music2 } from "lucide-react";
import { useState, useRef } from "react";

const Contact = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

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
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <SocialLink
            href="mailto:jdsr.personalaccount"
            icon={<Mail className="w-6 h-6" />}
            label="Email"
          />
          <SocialLink
            href="https://www.linkedin.com/in/jesús-david-silva-rangel-77706a260/"
            icon={<Linkedin className="w-6 h-6" />}
            label="LinkedIn"
          />
          <SocialLink
            href="https://github.com/Jesus-David-Silva-Rangel-19"
            icon={<Github className="w-6 h-6" />}
            label="GitHub"
          />
        </div>
        
        <button
          onClick={toggleMusic}
          className="flex items-center gap-2 px-6 py-3 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow mx-auto"
        >
          <Music2 className={`w-6 h-6 ${isPlaying ? 'text-accent' : ''}`} />
          <span className="font-labrada">{isPlaying ? 'Pausar Música' : 'Reproducir Música'}</span>
        </button>
        
        <audio ref={audioRef} loop className="hidden">
          <source src="/background-music.mp3" type="audio/mp3" />
        </audio>
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
