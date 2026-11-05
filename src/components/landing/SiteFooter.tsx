import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo variant="dark" />
          <p className="mt-4 max-w-sm text-sm text-navy-foreground/70">
            Plataforma de cumplimiento de la Ley 1581 de 2012: consentimiento, RAT, solicitudes ARCO
            y trazabilidad en un solo lugar.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold">Plataforma</h2>
          <ul className="mt-4 space-y-2 text-sm text-navy-foreground/70">
            <li>
              <a href="/#modulos" className="cursor-pointer transition-colors hover:text-navy-foreground">
                Módulos
              </a>
            </li>
            <li>
              <a href="/#cumplimiento" className="cursor-pointer transition-colors hover:text-navy-foreground">
                Cumplimiento
              </a>
            </li>
            <li>
              <Link to="/auth" className="cursor-pointer transition-colors hover:text-navy-foreground">
                Ingresar
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold">Contacto</h2>
          <ul className="mt-4 space-y-2 text-sm text-navy-foreground/70">
            <li>
              <Link to="/contacto" className="cursor-pointer transition-colors hover:text-navy-foreground">
                Solicitar demo
              </Link>
            </li>
            <li>
              <a href="https://cerebiia.com/" className="cursor-pointer transition-colors hover:text-navy-foreground">
                cerebiia.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-navy-foreground/60 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} Cerebiia. Todos los derechos reservados.</p>
          <p>Cerebiia Data · Ley 1581 de 2012 · Colombia</p>
        </div>
      </div>
    </footer>
  );
}
