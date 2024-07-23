import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Linkedin, Github, Mail } from "lucide-react";

export const Hero = () => {
  return (
    <section id="hero" className="flex flex-col space-y-8">
      <div className="relative flex shrink-0 overflow-hidden rounded-full size-28">
        <Image
          src="/images/avatar.jpeg"
          alt="Artem Kostylev"
          width={200}
          height={200}
          className="aspect-square h-full w-full"
        />
      </div>
      <div>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-5xl mb-4">
          Hi, I'm Artem
        </h1>
        <p className="text-xl text-muted-foreground mb-4">
          Detail-oriented Software Engineer dedicated to building high-quality
          products.
        </p>
        <div className="flex items-center space-x-1 -ml-2">
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://www.linkedin.com/in/artem-kostylev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="size-6" strokeWidth={1.4} />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://github.com/artem-kostylev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="size-6" strokeWidth={1.4} />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="mailto:kostylev.dev@gmail.com">
              <Mail className="size-6" strokeWidth={1.4} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
