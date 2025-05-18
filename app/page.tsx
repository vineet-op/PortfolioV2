
import Projects from "@/components/Projects/Projects";
import Hero from "../components/Hero";
import Skills from "@/components/Skills/Skills";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Projects />
      <Skills />
    </main>
  );
}
