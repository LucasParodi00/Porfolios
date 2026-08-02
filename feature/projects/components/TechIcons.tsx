import { techIconMap, type TechName } from "../utils/icons";

interface TechIconsProps {
  technologies: TechName[];
  size?: number;
  className?: string;
}

export const TechIcons = ({
  technologies,
  size = 28,
  className = "flex flex-wrap gap-3",
}: TechIconsProps) => {
  return (
    <div className={className}>
      {technologies.map((tech) => {
        const Icon = techIconMap[tech];
        if (!Icon) return null;

        return (
          <div key={tech} className="group/icon relative" title={tech}>
            <div className="p-2 rounded-lg bg-secondary/50 transition-all duration-300 hover:bg-secondary hover:scale-110 hover:shadow-md ">
              <Icon
                size={size}
                className="text-foreground/70 transition-colors duration-300 group-hover/icon:text-foreground"
              />
            </div>

            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-popover text-popover-foreground text-xs px-3 py-1.5 rounded-md shadow-lg opacity-0 group-hover/icon:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap border border-border z-10">
              {tech}
            </span>
          </div>
        );
      })}
    </div>
  );
};
