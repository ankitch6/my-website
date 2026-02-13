import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ExternalLink, Github, Layers } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Nature Photography Portfolio",
    description: "A curated collection of nature and botanical photography, showcasing the beauty found in everyday landscapes and flora.",
    tags: ["Photography", "Unsplash", "Creative"],
    image: "https://images.unsplash.com/photo-1691917510639-ff3861ac903b?w=800&q=80",
    link: "https://unsplash.com/@ankitch6",
  },
  {
    id: 2,
    title: "Personal Brand Website",
    description: "This very website — designed and built to showcase my journey, values, and creative work with a nature-inspired aesthetic.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1639484800974-73482b1f0814?w=800&q=80",
  },
  {
    id: 3,
    title: "Urban Architecture Series",
    description: "An ongoing photographic exploration of geometric patterns and modern architecture in urban environments.",
    tags: ["Photography", "Architecture", "Urban"],
    image: "https://images.unsplash.com/photo-1638720246474-3f5d266f02f3?w=800&q=80",
  },
];

const Projects = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-24">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium tracking-wide uppercase bg-sage-light/50 text-primary rounded-full border border-primary/20">
              <Layers className="w-4 h-4 inline mr-1" />
              My Work
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-medium mb-4">
              Projects
            </h1>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              A collection of creative and technical projects I've been working on.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card rounded-2xl overflow-hidden group"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-medium mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-primary font-medium hover:underline"
                    >
                      View Project <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Projects;
