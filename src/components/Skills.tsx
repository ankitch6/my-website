import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Brain, 
  Users, 
  Lightbulb, 
  Target, 
  Cpu, 
  Leaf, 
  TreeDeciduous, 
  Shovel, 
  Search, 
  MessageCircle 
} from "lucide-react";

const skills = [
  {
    icon: Brain,
    title: "Emotional Intelligence",
    description: "Perhaps the most important skill, it helps me build long-lasting relationships.",
  },
  {
    icon: Users,
    title: "Leadership & Management",
    description: "I understand the difference between leadership and management.",
  },
  {
    icon: Lightbulb,
    title: "Creative Problem Solving",
    description: "Whether it's a technical problem or something in day-to-day life, I put my \"scrappy\" mindset to work.",
  },
  {
    icon: Target,
    title: "Business Strategy",
    description: "I enjoy setting the direction and getting my hands dirty.",
  },
  {
    icon: Cpu,
    title: "Technological Depth",
    description: "Technology is a means to an end and not an end in itself.",
  },
  {
    icon: Leaf,
    title: "Environmental Sustainability",
    description: "I'm a systems thinker and my solutions combine nature and society to make each stronger.",
  },
  {
    icon: TreeDeciduous,
    title: "Nature-Based Solutions",
    description: "We don't need to destroy one part of our planet to restore or preserve another.",
  },
  {
    icon: Shovel,
    title: "Land & Ecosystem Restoration",
    description: "I'm a huge proponent of Permaculture Design and its principles.",
  },
  {
    icon: Search,
    title: "Root Cause Analysis",
    description: "It's a way of life, as is perfection. I practice this on most problems I face, just out of curiosity.",
  },
  {
    icon: MessageCircle,
    title: "Direct Communication",
    description: "Because life is too short, and I like to speak my mind.",
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-muted/30" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium tracking-wide uppercase bg-accent/20 text-accent-foreground rounded-full">
            What I Bring
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-medium mb-4">
            Skills I Bring to the Table
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-display italic">
            ...and the Window
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group"
            >
              <div className="glass-card rounded-xl p-5 h-full transition-all duration-300 hover:shadow-elevated hover:bg-card">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <skill.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-medium mb-1 leading-tight">{skill.title}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">{skill.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
