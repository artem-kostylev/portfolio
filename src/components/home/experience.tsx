import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const companies = [
  {
    name: "Biblio Globus",
    period: "May 2022 - Present",
    image: "/images/companies/bg.jpeg",
    position: "Frontend Developer",
  },
  {
    name: "Verny",
    period: "Nov 2021 - Apr 2022",
    image: "/images/companies/verny.jpeg",
    position: "Frontend Developer",
  },
  {
    name: "Agro24",
    period: "Jul 2020 - Oct 2021",
    image: "/images/companies/agro24.jpeg",
    position: "Frontend Developer",
  },
  {
    name: "Wildberries",
    period: "Mar 2018 - Jul 2020",
    image: "/images/companies/wb.jpeg",
    position: "Frontend Developer",
  },
];

export const Experience = () => {
  return (
    <section id="experience">
      <h2 className="tracking-tight text-2xl font-bold mb-4">Experience</h2>
      <div className="grid gap-2.5">
        {companies.map((company) => (
          <Card key={company.name}>
            <CardHeader className="p-4">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarFallback>{company.name.charAt(0)}</AvatarFallback>
                  <AvatarImage src={company.image} />
                </Avatar>
                <div className="w-full">
                  <div className="flex items-center justify-between gap-2.5 mb-1">
                    <CardTitle className="text-lg leading-3">
                      {company.name}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {company.period}
                    </p>
                  </div>
                  <CardDescription>{company.period}</CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
};
