import { Highlight } from "@/components/common/Highlight";
import { SectionTitle } from "@/components/common/TitleSection";
import {
  BriefcaseBusiness,
  Building2,
  CheckCheck,
  Workflow,
} from "lucide-react";

export const Experience = () => {
  const roles = [
    {
      title: "Desarrollador de Software",
      company: "Organismo público",
      date: "Febrero 2025 - Actualidad",
      icon: Building2,
      items: [
        "Desarrollo y mantenimiento de aplicaciones web utilizadas por distintas áreas internas.",
        "Diseño de nuevos sistemas para digitalizar y optimizar procesos administrativos.",
        "Participación en análisis de requerimientos, diseño funcional y mantenimiento evolutivo.",
        "Aplicación de buenas prácticas de ingeniería para mejorar mantenibilidad, claridad del código y evolución de funcionalidades existentes.",
        "Experiencia previa en atención al público, resolución de conflictos y comprensión de procesos administrativos, aplicada hoy al desarrollo centrado en el usuario.",
      ],
    },
    {
      title: "Full Stack Developer Independiente",
      company: "Clientes y proyectos propios",
      date: "2021 - Actualidad",
      icon: Workflow,
      items: [
        "Relevamiento, diseño técnico, desarrollo backend/frontend y despliegue de soluciones a medida.",
        "Implementación de sistemas SaaS, multi-tenant, gestión documental y plataformas operativas.",
        "Coordinación de equipos con Scrum, Trello y GitHub, desde la idea hasta producción.",
        "Diseño de bases de datos, arquitectura escalable y definición de contratos entre frontend y backend.",
        "Despliegue y mantenimiento de soluciones en servidores Linux con Docker y Nginx.",
        "Soporte evolutivo, mejoras funcionales y acompañamiento a clientes luego de la puesta en producción.",
      ],
    },
  ];

  return (
    <section aria-label="Experiencia" className="py-12">
      <SectionTitle
        Icon={CheckCheck}
        title="Experiencia"
        subTitle="Trabajo combinando criterio técnico, análisis funcional y una mirada fuerte sobre procesos reales."
      />

      <div className="grid gap-5 lg:grid-cols-2">
        {roles.map((role) => {
          const Icon = role.icon;

          return (
            <article
              key={role.title}
              className="rounded-2xl border bg-card p-6 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-accent p-3 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {role.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {role.company} · {role.date}
                  </p>
                </div>
              </div>

              <ul className="mt-6 space-y-3 text-sm leading-7 text-muted-foreground">
                {role.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <BriefcaseBusiness className="mt-1 h-4 w-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>

      <p className="mt-6 rounded-2xl border bg-background p-5 text-sm leading-7 text-muted-foreground">
        <Highlight>Fortaleza principal:</Highlight> transformar necesidades
        operativas en sistemas mantenibles, con trazabilidad, seguridad,
        escalabilidad y una experiencia de uso clara para equipos no técnicos.
      </p>
    </section>
  );
};
