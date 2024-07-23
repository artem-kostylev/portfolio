import { Badge } from "@/components/ui/badge";

export const Skills = () => {
  return (
    <section id="skills">
      <h2 className="tracking-tight text-2xl font-bold mb-4">Skills</h2>
      <div className="flex flex-wrap gap-2.5">
        <Badge variant="secondary">React</Badge>
        <Badge variant="secondary">Next.js</Badge>
        <Badge variant="secondary">TypeScript</Badge>
        <Badge variant="secondary">Node.js</Badge>
        <Badge variant="secondary">HTML</Badge>
        <Badge variant="secondary">CSS</Badge>
        <Badge variant="secondary">Shadcn/ui</Badge>
        <Badge variant="secondary">NestJS</Badge>
        <Badge variant="secondary">Vue</Badge>
        <Badge variant="secondary">Nuxt</Badge>
        <Badge variant="secondary">TailwindCSS</Badge>
        <Badge variant="secondary">Postgres</Badge>
        <Badge variant="secondary">Drizzle</Badge>
      </div>
    </section>
  );
};
