import { ButtonBody } from "@/components/common/ButtonBody";
import { Badge } from "@/components/ui/badge";
import { Download, Mail } from "lucide-react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export const Presentation = () => {
  return (
    <section className="flex min-h-[calc(100vh-74px)] items-center py-16">
      <main className="w-full">
        <Badge variant="outline" className="mb-8 rounded-lg px-3 py-1">
          Disponible para proyectos y nuevos desafíos
        </Badge>

        <span className="block text-5xl font-light leading-none text-muted-foreground sm:text-6xl">
          Soy
        </span>
        <h1 className="mt-2 max-w-5xl text-7xl font-semibold leading-[0.88] tracking-tight text-primary sm:text-8xl lg:text-[128px]">
          Parodi Lucas
        </h1>
        <h2 className="mt-5 text-sm font-semibold uppercase text-foreground sm:text-xl">
          Desarrollador Full Stack | Licenciado en Sistemas de Información
        </h2>
        <p className="mt-8 max-w-2xl text-sm leading-8 text-muted-foreground sm:text-base">
          Desarrollo soluciones de software para procesos reales: aplicaciones
          web escalables, sistemas de gestión, expedientes digitales y
          plataformas orientadas a mejorar la forma de trabajar.
        </p>

        <div className="mt-12 flex flex-wrap gap-3">
          <ButtonBody
            text="LinkedIn"
            Icono={BsLinkedin}
            href="https://www.linkedin.com/in/parodi-lucas-ivan/"
            description="LinkedIn de Parodi Lucas"
          />
          <ButtonBody
            text="GitHub"
            Icono={BsGithub}
            href="https://github.com/LucasParodi00"
            description="GitHub de Parodi Lucas"
          />
          <ButtonBody
            text="CV"
            Icono={Download}
            href="/CV-ParodiLucas.pdf"
            description="Descargar CV actualizado de Parodi Lucas"
          />
          <ButtonBody
            text="Contacto"
            Icono={Mail}
            href="mailto:lucasparodi00@gmail.com"
            description="Enviar correo a Parodi Lucas"
          />
        </div>
      </main>
    </section>
  );
};
