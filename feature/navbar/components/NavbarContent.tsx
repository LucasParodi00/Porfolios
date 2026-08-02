"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { ReactNode } from "react";
import Link from "next/link";
import { MobileNavbar } from "./NavbarMobile";

interface INavbarContainer {
  children: ReactNode;
}

export const NavbarContainer = ({ children }: INavbarContainer) => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 py-4 backdrop-blur-xl">
      <nav
        aria-label="Navegación Principal"
        className="mx-auto flex h-10 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        <Link
          href="/"
          className="flex items-center gap-3 transition-opacity hover:opacity-80"
        >
          <Image
            alt="Logo Parodi Lucas"
            src={"/logo.png"}
            width={35}
            height={35}
            className="object-contain"
          />
          <span className="hidden text-sm font-semibold text-foreground sm:block">
            Parodi Lucas
          </span>
        </Link>

        <div className="hidden md:block">{children}</div>

        <div className="flex items-center gap-2">
          <button
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            className="rounded-lg border border-border bg-card p-2 text-muted-foreground shadow-sm transition-colors hover:text-foreground"
            aria-label="Cambiar tema"
            suppressHydrationWarning
          >
            <Sun className="hidden h-4 w-4 text-primary dark:block" />
            <Moon className="h-4 w-4 dark:hidden" />
          </button>

          <div className="md:hidden">
            <MobileNavbar />
          </div>
        </div>
      </nav>
    </header>
  );
};
