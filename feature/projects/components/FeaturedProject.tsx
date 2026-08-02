import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Building2, Search, Workflow } from "lucide-react";

export const FeaturedProject = () => {
  return (
    <Link href={"https://varlok.com"} target="_blank">
      <div className="relative overflow-hidden rounded-2xl border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-md">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

          <div className="relative grid gap-10 p-6 lg:grid-cols-[0.8fr_1.2fr] lg:p-10">
            <div className="flex flex-col items-center justify-center space-y-6">
              <div className="inline-flex items-center gap-2 rounded-lg border bg-background px-3 py-1.5 text-sm font-medium text-primary">
                Proyecto Principal
              </div>

              <div className="relative group w-full max-w-xs">
                <div className="relative rounded-2xl border bg-background p-6 transition-all duration-300 group-hover:border-primary/30">
                  <Image
                    src="/varlok.jpg"
                    alt="Varlok Logo"
                    width={280}
                    height={280}
                    className="rounded-xl"
                  />
                </div>
              </div>

              <div className="text-center space-y-2">
                <h3 className="text-2xl font-bold text-foreground">Varlok</h3>
                <p className="text-muted-foreground text-sm">
                  Emprendimiento tecnológico
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <div className="space-y-4 text-sm leading-7 text-muted-foreground">
                  <p className="text-pretty">
                    <span className="text-foreground font-semibold">
                      Varlok
                    </span>{" "}
                    es un emprendimiento de desarrollo tecnológico iniciado a
                    comienzos de 2025, nacido a partir de una visión clara y
                    ambiciosa: crear soluciones digitales escalables, sólidas y
                    orientadas a generar impacto real.
                  </p>

                  <p className="text-pretty">
                    Su proyecto insignia es{" "}
                    <span className="text-primary font-semibold">Tarefero</span>
                    , un sistema de gestión pensado especialmente para el sector
                    agroindustrial, con foco en la actividad yerbatera,
                    desarrollado para optimizar procesos, mejorar la
                    organización y aportar valor al trabajo en el campo.
                  </p>

                  <p className="text-pretty">
                    Varlok se proyecta como una empresa dedicada al desarrollo
                    de software, marketing digital y SEO profesional, construida
                    con dedicación, esfuerzo constante y una mirada estratégica
                    a largo plazo, con el objetivo de crecer de forma
                    sostenible, estable y escalable.
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
                  <div className="h-1 w-1 rounded-full bg-border" />
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    { icon: Workflow, label: "Software a medida" },
                    { icon: Search, label: "SEO y estrategia digital" },
                    { icon: Building2, label: "Productos escalables" },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.label}
                        className="rounded-xl border bg-background p-3 text-xs text-muted-foreground"
                      >
                        <Icon className="mb-3 h-4 w-4 text-primary" />
                        {item.label}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-xs font-medium uppercase text-muted-foreground">
                    Fundador
                  </p>
                  <p className="text-xl font-semibold text-foreground">
                    Parodi Lucas
                  </p>
                </div>
                <ArrowUpRight className="h-5 w-5 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
