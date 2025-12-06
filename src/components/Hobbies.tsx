import { Camera, Bike, Mountain } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const hobbies = [
  {
    icon: Camera,
    title: "Photography",
    description: "Capturing moments through my lens, finding beauty in the everyday. Check out my work on Instagram and Unsplash.",
    color: "bg-sage-light",
    iconColor: "text-primary",
    links: [
      { label: "Instagram", url: "https://www.instagram.com/ankit_on_lens/" },
      { label: "Unsplash", url: "https://unsplash.com/@ankitch6" },
    ],
  },
  {
    icon: Bike,
    title: "Biking",
    description: "Exploring roads less traveled, feeling the wind, and finding freedom on two wheels.",
    color: "bg-terracotta-light",
    iconColor: "text-accent",
  },
  {
    icon: Mountain,
    title: "Trekking & Hiking",
    description: "Conquering peaks, embracing nature, and finding clarity in the mountains.",
    color: "bg-rose-light",
    iconColor: "text-rose",
  },
];

const Hobbies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 bg-muted/30" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium tracking-wide uppercase bg-secondary text-secondary-foreground rounded-full">
            Getting to Know Me
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-medium mb-4">
            Hobbies I Practice Frequently
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Beyond work, these passions keep me grounded and inspired
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={hobby.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card rounded-2xl p-8 h-full transition-all duration-500 hover:shadow-elevated hover:-translate-y-2">
                <div className={`w-16 h-16 ${hobby.color} rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                  <hobby.icon className={`w-8 h-8 ${hobby.iconColor}`} />
                </div>
                <h3 className="font-display text-2xl font-medium mb-3">{hobby.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{hobby.description}</p>
                {hobby.links && (
                  <div className="flex gap-3">
                    {hobby.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-primary hover:underline underline-offset-4"
                      >
                        {link.label} →
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
