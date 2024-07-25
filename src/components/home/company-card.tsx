import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Company } from "@/data";

interface Props {
  company: Company;
}

export const CompanyCard = ({ company }: Props) => {
  return (
    <Card key={company.name}>
      <CardHeader className="p-4">
        <div className="flex items-center space-x-4">
          <Avatar className="w-11 h-11">
            <AvatarFallback>{company.name.charAt(0)}</AvatarFallback>
            <AvatarImage src={company.image} asChild>
              <Image
                src={company.image}
                alt={company.name}
                className="w-full h-full"
                sizes="44px"
                fill
              />
            </AvatarImage>
          </Avatar>
          <div className="w-full">
            <div className="flex items-center justify-between gap-2.5 mb-1">
              <CardTitle className="text-lg leading-3">
                {company.name}
              </CardTitle>
              <p className="text-sm text-muted-foreground">{company.period}</p>
            </div>
            <CardDescription>{company.position}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <Separator className="border-dashed" />
        <div>
          <strong className="font-semibold block mb-2.5">About company:</strong>
          <p>{company.about}</p>
        </div>
        <div>
          <strong className="font-semibold block mb-2.5">
            Responsibilities:
          </strong>
          <ul className="list-disc ml-3.5 space-y-2.5 marker:text-muted-foreground/50 mb-4">
            {company.responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        </div>
        <div>
          <strong className="font-semibold block mb-2.5">Achievements:</strong>
          <ul className="list-disc ml-3.5 space-y-2.5 marker:text-muted-foreground/50">
            {company.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};
