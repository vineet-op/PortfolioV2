
import Projects from "@/components/Projects/Projects";
import Hero from "../components/Hero";
import Skills from "@/components/Skills/Skills";
import Contacts from "@/components/Contacts/Contacts";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <div id="Home">
        <Hero />
      </div>

      <div id="Projects">
        <Projects />
      </div>

      <div id="Skills">
        <Skills />
      </div>

      <div id="Contact">
        <Contacts />
      </div>
    </main>
  );
}
