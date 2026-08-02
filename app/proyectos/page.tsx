import { CardProject } from "@/feature/projects/components/CardProjec";
import { FeaturedProject } from "@/feature/projects/components/FeaturedProject";
import { projects } from "@/feature/projects/utils/projects";

const Page = () => {
  return (
    <div className="py-10">
      <header className="mb-10">
        <p className="text-sm font-medium uppercase text-muted-foreground">
          Casos de estudio
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
          Proyectos reales, procesos complejos y software en producción.
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
          Una selección de sistemas desarrollados para digitalizar operaciones,
          ordenar información y mejorar la trazabilidad diaria de equipos y
          negocios.
        </p>
      </header>
      <div>
        <FeaturedProject />
      </div>
      <div className="flex flex-col gap-5 py-10">
        {projects.map((item, index) => (
          <CardProject
            key={index}
            description={item.description}
            href={item.href}
            title={item.title}
            urlImage={item.urlImage}
            techs={item.techs}
            status={item.status}
            impact={item.impact}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
