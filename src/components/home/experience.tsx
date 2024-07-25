import { companies } from "@/data";
import { CompanyCard } from "@/components/home/company-card";

export const Experience = () => {
  return (
    <section id="experience">
      <h2 className="tracking-tight text-2xl font-bold mb-4">
        Work experience
      </h2>
      <div className="grid gap-2.5">
        {companies.map((company) => (
          <CompanyCard company={company} key={company.name} />
        ))}
      </div>
    </section>
  );
};
