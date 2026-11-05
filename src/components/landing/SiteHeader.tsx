import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";

const links = [
  { label: "Solución", href: "/#solucion" },
  { label: "Módulos", href: "/#modulos" },
  { label: "Cumplimiento", href: "/#cumplimiento" },
  { label: "Cómo funciona", href: "/#proceso" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="cursor-pointer text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button asChild variant="ghost" size="sm">
            <Link to="/auth">Ingresar</Link>
          </Button>
          <Button asChild size="sm">
            <Link to="/contacto">Solicitar demo</Link>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex size-10 cursor-pointer items-center justify-center rounded-md text-foreground transition-colors hover:bg-muted/50 md:hidden"
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-2 flex gap-2">
              <Button asChild variant="outline" className="flex-1">
                <Link to="/auth">Ingresar</Link>
              </Button>
              <Button asChild className="flex-1">
                <Link to="/contacto">Solicitar demo</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
