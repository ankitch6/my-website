import { Scale, Shield, Heart, Sparkles, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const values = [
  {
    icon: Scale,
    title: "Fairness & Equality",
    description: "Everyone deserves their fair share and the freedom to choose their path.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Be a person of your words and speak the truth.",
  },
  {
    icon: Heart,
    title: "Empathy",
    description: "Treat every living soul with kindness and minimize your harm to your environment.",
  },
  {
    icon: Sparkles,
    title: "Authenticity",
    description: "There is nothing more powerful than accepting your true self.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Building trust and long-lasting relationships requires transparency from the stakeholders.",
  },
];

const Values = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-sage-light/30 blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-80 h-80 rounded-full bg-rose-light/30 blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium tracking-wide uppercase bg-primary/10 text-primary rounded-full">
            Traits That Define Me
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-medium mb-4">
            My Core Values
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The principles that guide every decision I make
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group text-center"
            >
              <div className="relative mb-4">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-sage-light to-terracotta-light rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:shadow-elevated group-hover:scale-110">
                  <value.icon className="w-9 h-9 text-primary" />
                </div>
              </div>
              <h3 className="font-display text-lg font-medium mb-2">{value.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
