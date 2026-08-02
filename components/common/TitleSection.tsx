import { LucideIcon } from "lucide-react";

interface ISectionTitle {
  title: string;
  subTitle?: string;
  Icon: LucideIcon;
  id?: string;
}

export const SectionTitle = ({ title, subTitle, Icon, id }: ISectionTitle) => {
  const icono = (
    <Icon
      strokeWidth={2.4}
      className="h-6 w-6 text-primary"
      aria-hidden="true"
    />
  );
  return (
    <div className="mb-8 space-y-3">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-lg border bg-card shadow-sm">
          {icono}
        </div>
        <h2
          id={id}
          className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl"
        >
          {title}
        </h2>
      </div>
      {subTitle && (
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          {subTitle}
        </p>
      )}
    </div>
  );
};
