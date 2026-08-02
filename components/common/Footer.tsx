import { Mail } from "lucide-react";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-12 text-center">
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-sm font-medium text-foreground">Parodi Lucas Ivan</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Licenciado en Sistemas - Desarrollador de software
        </p>
        <div className="mt-8 flex justify-center gap-5">
          <Link
            target="_blank"
            href="mailto:lucasparodi00@gmail.com"
            aria-label="Enviar correo a Parodi Lucas"
            className="rounded-lg border border-border p-3 text-muted-foreground transition-colors hover:text-primary"
          >
            <Mail size={22} />
          </Link>
          <Link
            target="_blank"
            href={
              "https://www.instagram.com/parodilucas_?igsh=NzNxZnp3NWRocm5w&utm_source=qr"
            }
            aria-label="Instagram de Parodi Lucas"
            className="rounded-lg border border-border p-3 text-muted-foreground transition-colors hover:text-primary"
          >
            <FaInstagram size={22} />
          </Link>
          <Link
            target="_blank"
            href={"https://www.linkedin.com/in/parodi-lucas-ivan/"}
            aria-label="LinkedIn de Parodi Lucas"
            className="rounded-lg border border-border p-3 text-muted-foreground transition-colors hover:text-primary"
          >
            <FaLinkedin size={22} />
          </Link>
          <Link
            target="_blank"
            href={"https://x.com/parodilucas_"}
            aria-label="X de Parodi Lucas"
            className="rounded-lg border border-border p-3 text-muted-foreground transition-colors hover:text-primary"
          >
            <FaXTwitter size={22} />
          </Link>
        </div>
        <p className="mt-8 text-xs text-muted-foreground">
          lucasparodi00@gmail.com
        </p>
      </div>
    </footer>
  );
};
