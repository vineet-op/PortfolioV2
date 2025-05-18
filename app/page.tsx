
import Projects from "@/components/Projects/Projects";
import Hero from "../components/Hero";
import Skills from "@/components/Skills/Skills";
import Contacts from "@/components/Contacts/Contacts";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Projects />
      <Skills />
      <Contacts />
    </main>
  );
}
