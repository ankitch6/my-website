import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-sage-light/40 blur-3xl animate-float" />
        <div className="absolute top-40 right-20 w-48 h-48 rounded-full bg-rose-light/50 blur-3xl animate-float-delayed" />
        <div className="absolute bottom-32 left-1/4 w-40 h-40 rounded-full bg-terracotta-light/40 blur-3xl animate-float-slow" />
        <div className="absolute bottom-20 right-1/3 w-24 h-24 rounded-full bg-sage-light/30 blur-2xl animate-float" />
      </div>

      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wide uppercase bg-sage-light/50 text-primary rounded-full border border-primary/20">
            Welcome to my world
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-6"
        >
          Hi, I'm{" "}
          <span className="text-gradient">Ankit</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4"
        >
          It's nice to meet you too.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="font-body text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto mb-12"
        >
          What's my greatest strength? It's my{" "}
          <span className="font-display italic text-primary">balanced approach to life</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium transition-all duration-300 hover:shadow-glow hover:scale-105"
          >
            Discover My Story
            <ArrowDown className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground rounded-full font-medium transition-all duration-300 hover:bg-secondary/80 border border-border"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center pt-2"
        >
          <div className="w-1.5 h-3 rounded-full bg-muted-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
