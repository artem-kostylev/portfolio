import { About } from "@/components/home/about";
import { Hero } from "@/components/home/hero";
import { Skills } from "@/components/home/skills";
import { Experience } from "@/components/home/experience";
import { Container } from "@/components/ui/container";

export default function Home() {
  return (
    <Container className="py-4 md:py-8 lg:py-12 space-y-8">
      <Hero />
      <About />
      <Skills />
      <Experience />
    </Container>
  );
}
