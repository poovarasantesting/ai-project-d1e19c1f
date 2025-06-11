import { Button } from "@/components/ui/button";
import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { About } from "@/components/About";
import { Timeline } from "@/components/Timeline";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <main className="container mx-auto px-4 pb-16">
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}