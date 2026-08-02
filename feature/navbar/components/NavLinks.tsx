"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Inicio", href: "/" },
  { name: "Proyectos", href: "/proyectos" },
  { name: "Sobre Mí", href: "/sobre-mi" },
];

export const NavbarLinks = () => {
  const pathname = usePathname();

  return (
    <ul className="flex items-center justify-center gap-x-2 rounded-xl border border-orange-600 bg-card p-3 shadow-sm">
      {navItems.map((item) => {
        const isActive =
          item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

        return (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`
                rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 ease-in-out
                ${
                  isActive
                    ? "bg-orange-600 text-white "
                    : "text-muted-foreground hover:text-foreground"
                }
              `}
            >
              {item.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
