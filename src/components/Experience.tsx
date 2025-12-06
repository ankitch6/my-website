import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Briefcase, Building2, Globe } from "lucide-react";

const experiences = [
  {
    icon: GraduationCap,
    title: "MBA from UCLA Anderson",
    subtitle: "Class of 2024",
    location: "Los Angeles, USA",
    description: "MBA Capstone with Project Mercy in Ethiopia, focusing on community empowerment and sustainable development. Also visited SHOFCO in Kibera, Kenya, learning about breaking the cycle of poverty.",
    highlights: ["Project Mercy, Ethiopia", "SHOFCO, Kenya", "Kennedy Odede - Time's 100 Most Influential"],
    color: "from-sage-light to-sage/20",
  },
  {
    icon: Globe,
    title: "MBA Summer Intern at Rakuten",
    subtitle: "Program Manager, Computer Vision Team",
    location: "Tokyo, Japan",
    description: "Increased integration of Computer Vision AI technology into Rakuten's Business Units. Delivered three business proposals for e-commerce, agriculture, and sports marketing.",
    highlights: ["AI/Computer Vision", "E-commerce Strategy", "Cross-functional Leadership"],
    color: "from-terracotta-light to-terracotta/20",
  },
  {
    icon: Building2,
    title: "Samsung Research Institute",
    subtitle: "Project Manager & Software Engineer",
    location: "India",
    description: "Led Android Operating System Development projects. Active member of Samsung's CSR team and Employee Representative. Organized Samsung's first gaming competition with 200+ participants.",
    highlights: ["Android OS Development", "Display Driver Engineering", "CSR Leadership"],
    color: "from-rose-light to-rose/20",
  },
  {
    icon: GraduationCap,
    title: "BE in Computer Science",
    subtitle: "Birla Institute of Technology",
    location: "Class of 2018",
    description: "Strong foundation in computer science fundamentals, software engineering, and problem-solving methodologies.",
    highlights: ["Computer Science", "Software Engineering"],
    color: "from-sage-light to-sage/20",
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-sage-light/20 to-transparent blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium tracking-wide uppercase bg-secondary text-secondary-foreground rounded-full">
            My Journey
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-medium mb-4">
            Experiences That Shaped Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-display italic">
            "Backgrounds and experiences are important, but they don't define who we are or limit what we can do!"
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className={`flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <div className="flex-1">
                  <div className={`glass-card rounded-2xl p-8 bg-gradient-to-br ${exp.color} transition-all duration-500 hover:shadow-elevated`}>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 rounded-xl bg-card flex items-center justify-center shadow-soft">
                        <exp.icon className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-medium">{exp.title}</h3>
                        <p className="text-muted-foreground font-medium">{exp.subtitle}</p>
                        <p className="text-sm text-muted-foreground/70">{exp.location}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="px-3 py-1 text-xs font-medium bg-card rounded-full text-muted-foreground"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden lg:flex w-12 h-12 rounded-full bg-card border-4 border-primary shadow-glow items-center justify-center z-10">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                </div>

                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
