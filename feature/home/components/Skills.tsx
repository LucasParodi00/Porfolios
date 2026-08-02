import { SectionTitle } from "@/components/common/TitleSection";
import { Badge } from "@/components/ui/badge";
import { TechIcons } from "@/feature/projects/components/TechIcons";
import {
  Code2,
  Database,
  Layers3,
  Lightbulb,
  Rocket,
  Search,
  ServerCog,
} from "lucide-react";

const services = [
  {
    title: "Análisis de necesidades",
    description:
      "Trabajo con usuarios y clientes para comprender sus procesos, identificar problemas y convertir necesidades reales en requerimientos claros.",
    icon: Search,
  },
  {
    title: "Diseño de soluciones",
    description:
      "Defino soluciones funcionales y técnicas que simplifican procesos, organizan la información y aportan valor al negocio.",
    icon: Lightbulb,
  },
  {
    title: "Desarrollo de productos",
    description:
      "Construyo aplicaciones completas, desde la arquitectura y el modelado de datos hasta el frontend, backend e integraciones.",
    icon: Code2,
  },
  {
    title: "Implementación y evolución",
    description:
      "Despliego sistemas en producción, acompaño su adopción y realizo mejoras continuas según el uso y las nuevas necesidades.",
    icon: Rocket,
  },
];

const skillGroups = [
  "Clean Architecture",
  "Arquitectura Hexagonal",
  "Nginx",
  "Linux",
  "SQL Server",
  "MongoDB",
  "MySQL",
  "Scrum",
  "Kanban",
  "GitHub",
  "CI/CD",
  "Laravel",
];

export const Skills = () => {
  return (
    <section aria-labelledby="skills-title" className="py-12">
      <SectionTitle
        id="skills-title"
        Icon={Code2}
        title="Lo que hago"
        subTitle="Diseño y desarrollo soluciones de software para digitalizar procesos, organizar información y mejorar la operación diaria."
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {services.map(({ title, description, icon: Icon }) => (
          <article
            key={title}
            className="rounded-2xl border bg-card p-5 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-primary">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </div>

            <h3 className="text-sm font-semibold text-foreground">{title}</h3>

            <p className="mt-3 text-xs leading-6 text-muted-foreground">
              {description}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border bg-card p-6 shadow-sm">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h3 className="text-sm font-semibold text-foreground">
              Stack principal
            </h3>

            <p className="mt-2 max-w-xl text-sm leading-7 text-muted-foreground">
              Tecnologías y prácticas que utilizo para diseñar, desarrollar,
              desplegar y mantener aplicaciones en producción.
            </p>
          </div>

          <TechIcons
            technologies={[
              "typescript",
              "nestjs",
              "nextjs",
              "react",
              "postgresql",
              "docker",
              "git",
            ]}
            className="flex flex-wrap gap-2"
          />
        </div>

        <div className="mt-6 flex flex-wrap gap-2 lg:justify-between">
          {skillGroups.map((skill) => (
            <Badge key={skill} variant="secondary" className="rounded-lg">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};
