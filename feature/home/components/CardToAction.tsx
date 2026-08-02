import { ButtonBody } from "@/components/common/ButtonBody";
import { Mail } from "lucide-react";

export const CardToAction = () => {
  return (
    <section className="my-12 rounded-2xl border-y px-5 py-16">
      <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex flex-col gap-3 text-center md:text-left">
          <h4 className="text-2xl font-light tracking-tight md:text-4xl">
            ¿Tenés un proyecto en mente?
          </h4>
          <h5 className="text-lg font-light text-muted-foreground md:text-2xl">
            ¡Trabajemos juntos!
          </h5>
        </div>
        <ButtonBody
          Icono={Mail}
          href="mailto:lucasparodi00@gmail.com"
          text="Contáctame"
          description="Correo electrónico de Parodi Lucas"
        />
      </div>
    </section>
  );
};
