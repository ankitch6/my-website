import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Twitter, Camera } from "lucide-react";

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/ankit611/",
    color: "hover:bg-[#0077b5]/10 hover:text-[#0077b5]",
  },
  {
    icon: Twitter,
    label: "X (Twitter)",
    url: "https://x.com/ankit_lived",
    color: "hover:bg-foreground/10 hover:text-foreground",
  },
  {
    icon: Camera,
    label: "Unsplash",
    url: "https://unsplash.com/@ankitch6",
    color: "hover:bg-foreground/10 hover:text-foreground",
  },
  {
    icon: Mail,
    label: "Medium",
    url: "https://medium.com/@ankit611",
    color: "hover:bg-foreground/10 hover:text-foreground",
  },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 md:py-32 bg-muted/30" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium tracking-wide uppercase bg-primary/10 text-primary rounded-full">
            Let's Connect
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-medium mb-6">
            Get in Touch
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            I'd love to hear from you. Whether it's about a project, collaboration, or just a friendly hello.
          </p>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            href="mailto:hiankit611@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium text-lg transition-all duration-300 hover:shadow-glow hover:scale-105 mb-12"
          >
            <Mail className="w-5 h-5" />
            hiankit611@gmail.com
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center gap-4"
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-14 h-14 rounded-full bg-card border border-border flex items-center justify-center transition-all duration-300 ${link.color}`}
                aria-label={link.label}
              >
                <link.icon className="w-6 h-6" />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
