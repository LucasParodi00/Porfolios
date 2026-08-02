"use client";

import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navItems = [
  { name: "Inicio", href: "/" },
  { name: "Proyectos", href: "/proyectos" },
  { name: "Sobre Mí", href: "/sobre-mi" },
];

export const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      {/* El botón hamburguesa que abre el menú */}
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground hover:bg-accent hover:text-foreground md:hidden"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Abrir menú</span>
        </Button>
      </SheetTrigger>

      {/* El contenido del sidebar */}
      <SheetContent
        side="right"
        className="w-[300px] border-border bg-background sm:w-[400px]"
      >
        <SheetTitle className="sr-only">Menú de navegación</SheetTitle>

        <div className="flex flex-col h-full py-6">
          <div className="mb-8 flex justify-center">
            <Image
              alt="Logo Parodi Lucas"
              src={"/logo.png"}
              width={50}
              height={50}
              className="object-contain"
            />
          </div>

          <nav className="flex flex-col gap-y-6 items-center">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)} // Cerramos el menú al hacer click
                  className={`
                    rounded-lg px-4 py-2 text-xl font-medium transition-colors duration-200
                    ${
                      isActive
                        ? "bg-accent text-accent-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }
                  `}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
};
