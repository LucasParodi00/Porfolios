import { GraduationCap, Calendar, Building2 } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionTitle } from "@/components/common/TitleSection";

interface IEducation {
  title: string;
  establishment: string;
  date: string;
  src: string;
  description: string;
  type: "university" | "online" | "diploma";
}

const educationData: IEducation[] = [
  {
    title: "Licenciatura en Sistemas de Información",
    establishment: "Universidad Nacional del Nordeste",
    date: "Finalizada",
    src: "/unne.png",
    description:
      "Formación universitaria orientada al análisis, diseño e implementación de sistemas de información, con foco en procesos, datos, ingeniería de software y soluciones tecnológicas para organizaciones.",
    type: "university",
  },
  {
    title: "Diplomatura en Ciencia de Datos",
    establishment: "Universidad Nacional del Nordeste",
    date: "2024 - 2025",
    src: "/unne.png",
    description:
      "Formación en ciencia de datos con Python, enfocada en análisis exploratorio, estadística aplicada y modelos de aprendizaje automático y profundo, aplicada a la resolución de problemas reales.",
    type: "diploma",
  },
  {
    title: "Analista Programador Universitario",
    establishment: "Universidad Nacional del Nordeste",
    date: "2019 - 2024",
    src: "/unne.png",
    description:
      "Formación orientada al desarrollo de software, abarcando programación, bases de datos, análisis de sistemas, diseño de aplicaciones y buenas prácticas para la construcción de soluciones tecnológicas eficientes y escalables.",
    type: "university",
  },
  {
    title: "Desarrollo con Inteligencia Artificial",
    establishment: "BIG School",
    date: "2024",
    src: "/logo.png",
    description:
      "Formación orientada al uso de inteligencia artificial aplicada al desarrollo, automatización de tareas y mejora de flujos de trabajo técnicos.",
    type: "online",
  },
  {
    title: "Bootcamp Microsoft Azure AZ-204",
    establishment: "Microsoft Azure",
    date: "2024",
    src: "/logo.png",
    description:
      "Capacitación en desarrollo de soluciones cloud sobre Azure, servicios administrados, despliegues y fundamentos para aplicaciones modernas en la nube.",
    type: "online",
  },
  {
    title: "Bootcamp Desarrollo de Software",
    establishment: "Devlights",
    date: "2024",
    src: "/logo.png",
    description:
      "Bootcamp orientado al desarrollo full stack con Next.js, Node.js y PostgreSQL, reforzando buenas prácticas de desarrollo web moderno.",
    type: "online",
  },
  {
    title: "Talentos Digitales",
    establishment: "UNNE / TelCo / Banco de Corrientes",
    date: "2024",
    src: "/td.png",
    description:
      "Formación en desarrollo web full stack con React, Node.js y MongoDB, aplicando conceptos fundamentales para la creación de aplicaciones web.",
    type: "online",
  },
  {
    title: "Git y GitHub Completo",
    establishment: "Udemy",
    date: "2024",
    src: "/udemy.png",
    description:
      "Formación específica en control de versiones, repositorios, ramas, merges, resolución de conflictos y buenas prácticas de trabajo colaborativo.",
    type: "online",
  },
  {
    title: "Inglés Técnico",
    establishment: "Universidad de Buenos Aires",
    date: "Formación continua",
    src: "/logo.png",
    description:
      "Lectura y comprensión de documentación técnica en inglés, orientada al trabajo con documentación oficial, APIs, librerías y herramientas de desarrollo.",
    type: "online",
  },
];

export const Education = () => {
  return (
    <section
      id="educacion"
      aria-labelledby="education-heading"
      className="py-12"
    >
      <SectionTitle
        Icon={GraduationCap}
        id="education-heading"
        title="Formación"
        subTitle="Base universitaria, formación técnica continua y actualización en IA, cloud y desarrollo full stack."
      />
      <div className="grid gap-4 lg:grid-cols-2">
        {educationData.map((item, index) => (
          <EducationCard key={`${item.title}-${index}`} {...item} />
        ))}
      </div>
    </section>
  );
};

const EducationCard = ({
  title,
  establishment,
  date,
  src,
  description,
  type,
}: IEducation) => {
  const typeLabels = {
    university: "Universidad",
    online: "Curso Online",
    diploma: "Diplomatura",
  };

  return (
    <Card className="group overflow-hidden transition-all hover:-translate-y-0.5 hover:shadow-md">
      <CardContent>
        <article className="flex flex-col gap-4 md:flex-row md:items-start md:gap-6">
          <div className="shrink-0">
              <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-lg bg-white ring-1 ring-border transition-all group-hover:ring-primary/30">
              <Image
                src={src || "/placeholder.svg"}
                alt={`Logo de ${establishment}`}
                width={64}
                height={64}
                className="object-contain p-2"
              />
            </div>
          </div>

          <div className="flex-1 space-y-3">
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row flex-wrap items-start justify-between gap-2">
                <div className="space-y-1 flex-1 min-w-0">
                  <h3 className="text-sm font-semibold leading-tight text-balance">
                    {title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Building2
                      className="h-4 w-4 shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-xs sm:text-sm">{establishment}</span>
                  </div>
                </div>
                <Badge variant="secondary" className="shrink-0 rounded-lg">
                  {typeLabels[type]}
                </Badge>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 shrink-0" aria-hidden="true" />
                <time dateTime={date}>{date}</time>
              </div>
            </div>

            <p className="text-xs leading-6 text-muted-foreground text-pretty">
              {description}
            </p>
          </div>
        </article>
      </CardContent>
    </Card>
  );
};
