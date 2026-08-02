import { ButtonBody } from "@/components/common/ButtonBody";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DownloadIcon, Presentation, User } from "lucide-react";
import Image from "next/image";

export const AboutMe = () => {
  return (
    <section aria-label="Sobre mí" className="py-12">
      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base font-semibold">
            <User className="h-5 w-5 text-primary" />
            Sobre mí
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-8 md:grid-cols-6 md:items-center">
            <div className="relative mx-auto h-72 w-64 overflow-hidden rounded-xl border bg-muted md:col-span-2 md:m-0 md:w-full">
              <Image
                src="/perfil.png"
                alt="Parodi Lucas"
                fill
                className="object-cover object-top"
              />
            </div>

            <div className="flex flex-col gap-6 md:col-span-4">
              <p className="text-sm italic leading-8 text-muted-foreground">
                Argentino, Licenciado en Sistemas de Información y desarrollador
                Full Stack. Con experiencia en el diseño, desarrollo e
                implementación de soluciones de software para organismos
                públicos y empresas privadas. Especializado en el desarrollo de
                aplicaciones web escalables utilizando tecnologías del ecosistema
                TypeScript, principalmente NestJS y Next.js, y en la aplicación
                de arquitecturas limpias para sistemas de mediana y alta
                complejidad.
              </p>
              <p className="text-sm italic leading-8 text-muted-foreground">
                Experiencia liderando proyectos de desarrollo desde el análisis
                de requerimientos hasta la puesta en producción, combinando
                visión técnica con una fuerte orientación al negocio y a la
                mejora de procesos.
              </p>

              <div className="flex flex-wrap gap-3">
                <ButtonBody
                  Icono={DownloadIcon}
                  href="/CV-ParodiLucas.pdf"
                  text="Descargar CV"
                  description="Descargar CV de Parodi Lucas"
                  target="_blank"
                />
                <ButtonBody
                  description="Presentación de Parodi Lucas"
                  Icono={Presentation}
                  href="/presentacion"
                  text="Presentación"
                  target="_parent"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
