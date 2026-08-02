"use client";

import type React from "react";

import { notFound, useParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Smartphone,
  Globe,
  Database,
  Code2,
  Users,
  Newspaper,
  ExternalLink,
  TrendingUp,
} from "lucide-react";

import { projectsDetail } from "@/feature/projects/utils/projectsDetail";
import Image from "next/image";

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  const project = projectsDetail.find((p) => p.slug === slug);
  if (!project) notFound();

  const Icon = project.Icon;

  return (
    <main className="min-h-screen">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="relative mx-auto max-w-7xl py-16 lg:py-24">
          <div className="mb-6 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl border bg-card">
                <Icon className="h-7 w-7 text-primary" />
              </div>
              <h1 className="text-4xl font-semibold tracking-tight lg:text-6xl">
                {project.title}
              </h1>
            </div>
            {project.autor && (
              <div>
                <Badge className="cursor-none select-none rounded-lg text-sm">
                  {project.autor}
                </Badge>
              </div>
            )}
          </div>

          <p className="max-w-3xl text-sm leading-7 text-muted-foreground lg:text-base">
            {project.hero.description}
          </p>

          {project.hero.badges && (
            <div className="mt-8 flex flex-wrap gap-3">
              {project.hero.badges.map((badge) => (
                <Badge key={badge.label} variant="secondary" className="rounded-lg">
                  <badge.icon className="mr-2 h-4 w-4" />
                  {badge.label}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ================= ORIGEN ================= */}
      {project.origin && (
        <section className="mx-auto max-w-7xl py-16 lg:py-20">
          <h2 className="mb-6 text-3xl font-semibold tracking-tight lg:text-4xl">
            {project.origin.title}
          </h2>
          <div
            className={
              project.origin.image
                ? "grid items-start gap-8 lg:grid-cols-3"
                : ""
            }
          >
            <div className="col-span-2 space-y-4 text-sm leading-7 text-muted-foreground sm:text-base">
              {project.origin.paragraphs.map((p, i) => (
                <p key={i}>
                  {p}
                </p>
              ))}
            </div>
            {project.origin.image && (
              <div className="relative aspect-square overflow-hidden rounded-xl border bg-muted shadow-sm">
                <Image
                  fill
                  src={project.origin.image || "/placeholder.svg"}
                  alt={project.origin.title}
                  className="object-cover"
                />
              </div>
            )}
          </div>
        </section>
      )}

      {/* ================= EVOLUCIÓN ================= */}
      {project.evolution && (
        <section className="rounded-2xl bg-muted/50 py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="mb-12 text-center text-3xl font-semibold tracking-tight lg:text-4xl">
              Evolución del Proyecto
            </h2>

            <div className="grid gap-4 md:grid-cols-3">
              {project.evolution.map((step) => (
                <Card key={step.step} className="shadow-sm">
                  <CardContent className="pt-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                      <span className="text-2xl font-semibold text-primary">
                        {step.step}
                      </span>
                    </div>
                    <h3 className="mb-3 text-lg font-semibold">{step.title}</h3>
                    <p className="text-sm leading-7 text-muted-foreground">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= PLATAFORMAS ================= */}
      {project.platform && (
        <section className="mx-auto max-w-7xl py-16 lg:py-20">
          <h2 className="mb-12 text-center text-3xl font-semibold tracking-tight lg:text-4xl">
            Plataformas
          </h2>
          <div className="grid gap-8 lg:grid-cols-2">
            {project.platform.mobile && (
              <Card className="shadow-sm">
                <CardContent className="p-8">
                  <Smartphone className="mb-6 h-8 w-8 text-primary" />
                  <h3 className="mb-4 text-lg font-semibold">
                    Aplicación Móvil
                  </h3>
                  <p className="mb-6 text-sm leading-7 text-muted-foreground">
                    {project.platform.mobile.description}
                  </p>
                  <ul className="space-y-2">
                    {project.platform.mobile.features.map((f) => (
                      <li
                        key={f}
                        className="flex gap-2 text-sm leading-6 text-muted-foreground"
                      >
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {project.platform.web && (
              <Card className="shadow-sm">
                <CardContent className="p-8">
                  <Globe className="mb-6 h-8 w-8 text-primary" />
                  <h3 className="mb-4 text-lg font-semibold">Plataforma Web</h3>
                  <p className="mb-6 text-sm leading-7 text-muted-foreground">
                    {project.platform.web.description}
                  </p>
                  <ul className="space-y-2">
                    {project.platform.web.features.map((f) => (
                      <li
                        key={f}
                        className="flex gap-2 text-sm leading-6 text-muted-foreground"
                      >
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>
        </section>
      )}

      {/* ================= METODOLOGÍA ================= */}
      {project.methodology && (
        <section className="rounded-2xl bg-muted/50 py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mb-6 flex items-center justify-center gap-3">
              <Users className="h-8 w-8 text-primary" />
              <h2 className="text-center text-3xl font-semibold tracking-tight lg:text-4xl">
                Metodología
              </h2>
            </div>

            <p className="mx-auto mb-12 max-w-3xl text-sm leading-7 text-muted-foreground">
              {project.methodology.description}
            </p>

            {project.methodology.roles && (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {project.methodology.roles.map((role) => (
                  <Card key={role.title} className="shadow-sm">
                    <CardHeader>
                      <CardTitle className="text-lg font-medium">
                        {role.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm leading-7 text-muted-foreground">
                        {role.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* ================= ALCANCE ================= */}
      {project.reach && (
        <section className="mx-auto max-w-7xl py-16 lg:py-20">
          <div className="mb-12 flex items-center justify-center gap-3">
            <TrendingUp className="h-8 w-8 text-primary" />
            <h2 className="text-center text-3xl font-semibold tracking-tight lg:text-4xl">
              Alcance e Impacto
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {project.reach.map((section, i) => (
              <Card key={i} className="shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg">{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-7 text-muted-foreground">
                    {section.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* ================= STACK ================= */}
      {project.stack && (
        <section className="rounded-2xl bg-muted/50 py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="mb-12 text-center text-3xl font-semibold tracking-tight lg:text-4xl">
              Stack Tecnológico
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {project.stack.backend && (
                <StackCard
                  icon={<Code2 className="text-primary" />}
                  title="BackEnd"
                  label={project.stack.backend}
                />
              )}
              {project.stack.database && (
                <StackCard
                  icon={<Database className="text-primary" />}
                  title="Base de Datos"
                  label={project.stack.database}
                />
              )}
              {project.stack.frontend && (
                <StackCard
                  icon={<Globe className="text-primary" />}
                  title="FrontEnd"
                  label={project.stack.frontend}
                />
              )}
              {project.stack.mobile && (
                <StackCard
                  icon={<Smartphone className="text-primary" />}
                  title="Móvil"
                  label={project.stack.mobile}
                />
              )}
              {project.stack.infrastructure && (
                <StackCard
                  icon={<Code2 className="text-primary" />}
                  title="Infraestructura"
                  label={project.stack.infrastructure}
                />
              )}
              {project.stack.tools && (
                <StackCard
                  title="Herramientas"
                  icon={<Code2 className="text-primary" />}
                  label={project.stack.tools}
                />
              )}
            </div>
          </div>
        </section>
      )}

      {/* ================= MEDIOS Y PRENSA ================= */}
      {project.media && project.media.length > 0 && (
        <section className="mx-auto py-16 lg:py-20">
          <div className="mb-12 flex items-center justify-center gap-3">
            <Newspaper className="h-8 w-8 text-primary" />
            <h2 className="text-center text-3xl font-semibold tracking-tight lg:text-4xl">
              Prensa y Medios
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {project.media?.map((item, i) => (
              <Card
                key={i}
                className="group relative transition-shadow hover:shadow-md"
              >
                <CardContent className="py-4">
                  <div className="mb-4 flex items-start justify-between">
                    <div className="flex-1">
                      <p className="mb-1 text-xs text-muted-foreground">
                        {item.outlet}
                      </p>
                      <h3 className="mb-2 text-base font-semibold transition-colors group-hover:text-primary">
                        {item.title}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {item.date}
                      </p>
                    </div>
                    {item.type && (
                      <Badge
                        variant="outline"
                        className="absolute right-2 top-5 ml-2 rounded-lg"
                      >
                        {item.type}
                      </Badge>
                    )}
                  </div>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    Ver publicación
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* ================= ESTADO ================= */}
      {project.currentStatus && (
        <section className="mx-auto max-w-7xl py-16 text-center lg:py-20">
          <h2 className="mb-6 text-3xl font-semibold tracking-tight lg:text-4xl">
            Estado Actual
          </h2>
          <p className="mx-auto max-w-3xl text-sm leading-7 text-muted-foreground lg:text-base">
            {project.currentStatus}
          </p>
        </section>
      )}
    </main>
  );
}

const StackCard = ({
  icon,
  label,
  title,
}: {
  icon: React.ReactNode;
  label: string;
  title: string;
}) => {
  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle className="text-base font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center gap-3 pt-6 text-sm leading-6 text-muted-foreground">
        {icon}
        <span>{label}</span>
      </CardContent>
    </Card>
  );
};
