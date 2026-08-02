import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { TechIcons } from "./TechIcons";
import type { TechName } from "../utils/icons";

export interface ICardProject {
  title: string;
  description: string;
  href: string;
  urlImage: string;
  techs: TechName[];
  status?: string;
  impact?: string;
}

export const CardProject = ({
  title,
  description,
  urlImage,
  href,
  techs,
  status,
  impact,
}: ICardProject) => {
  return (
    <Link href={href} className="group block">
      <Card className="overflow-hidden border-border/80 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-md">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-4">
            <CardTitle className="text-xl font-semibold text-balance transition-colors group-hover:text-primary">
              {title}
            </CardTitle>
            <ExternalLink className="h-5 w-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-5">
            <div className="relative h-56 w-full overflow-hidden rounded-xl bg-muted ring-primary/20 transition-all duration-300 group-hover:ring-2 md:col-span-2 md:h-64">
              <Image
                src={urlImage || "/placeholder.svg"}
                alt={`${title} - vista previa del proyecto`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="flex flex-col gap-4 md:col-span-3">
              {(status || impact) && (
                <div className="flex flex-wrap gap-2">
                  {status && (
                    <span className="rounded-lg border bg-background px-3 py-1 text-xs text-muted-foreground">
                      {status}
                    </span>
                  )}
                  {impact && (
                    <span className="rounded-lg border bg-accent px-3 py-1 text-xs text-accent-foreground">
                      {impact}
                    </span>
                  )}
                </div>
              )}

              <p className="line-clamp-4 text-sm leading-7 text-muted-foreground">
                {description}
              </p>

              <div className="mt-auto">
                <p className="mb-3 text-xs font-medium uppercase text-muted-foreground">
                  Tecnologías
                </p>
                <TechIcons
                  className="flex flex-wrap gap-3"
                  technologies={techs}
                  size={28}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
