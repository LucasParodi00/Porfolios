import { LucideIcon } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { IconType } from "react-icons";

interface IButtonBody {
  text: string;
  Icono: LucideIcon | IconType;
  href: string;
  target?: "_blank" | "_parent";
  style?: string;
  description: string;
}

export const ButtonBody = ({
  text,
  Icono,
  href,
  target = "_blank",
  style,
  description,
}: IButtonBody) => {
  const icono = <Icono />;
  return (
    <Button
      asChild
      variant={"outline"}
      className={`h-11 rounded-lg border-border bg-card px-5 text-sm text-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:bg-accent hover:text-accent-foreground hover:shadow-md ${style}`}
    >
      <Link
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        aria-label={description}
      >
        <div className="text-primary">{icono}</div>
        <span>{text}</span>
      </Link>
    </Button>
  );
};
