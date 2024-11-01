import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Linkedin, Github, Mail } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Hero = () => {
  return (
    <section id="hero">
      <Avatar className="w-28 h-28 mb-6">
        <AvatarFallback>AK</AvatarFallback>
        <AvatarImage src="/images/avatar.jpeg" asChild>
          <Image
            src="/images/avatar.jpeg"
            alt="Artem Kostylev"
            sizes="128px"
            fill
            className="h-full w-full"
          />
        </AvatarImage>
      </Avatar>
      <div>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-5xl mb-4">
          Hi, I&apos;m Artem
        </h1>
        <p className="text-xl text-muted-foreground mb-4">
          Detail-oriented Software Engineer dedicated to building high-quality
          products.
        </p>
        <div className="flex items-center">
          <Button className="mr-4" asChild>
            <a
              href="/artem-kostylev.docx"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </Button>
          <div className="space-x-1">
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://www.linkedin.com/in/artem-kostylev/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Linkedin icon"
              >
                <Linkedin className="size-6" strokeWidth={1.4} />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://github.com/artem-kostylev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github icon"
              >
                <Github className="size-6" strokeWidth={1.4} />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:kostylev.dev@gmail.com" aria-label="Email icon">
                <Mail className="size-6" strokeWidth={1.4} />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
