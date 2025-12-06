import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Hobbies from "@/components/Hobbies";
import Values from "@/components/Values";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Hobbies />
      <section id="values">
        <Values />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
