import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { CalendarDays, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

/** Formato internacional, sin + ni espacios. Reemplaza NUMERO por el WhatsApp real (ej: "573001234567"). */
const WHATSAPP_NUMBER = "573209576723";
const MENSAJE = encodeURIComponent("Hola, quiero solicitar una demostración de Cerebiia Data.");
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${MENSAJE}`;

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.47 14.38c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.6-1.5-1.87-.16-.27-.02-.41.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.3s.98 2.67 1.12 2.85c.14.18 1.93 2.95 4.68 4.14.65.28 1.16.45 1.56.57.65.21 1.25.18 1.72.11.52-.08 1.6-.65 1.83-1.28.22-.63.22-1.17.16-1.28-.07-.11-.25-.18-.52-.32Z" />
      <path d="M12.04 2C6.5 2 2 6.48 2 12c0 1.77.46 3.45 1.28 4.91L2 22l5.25-1.25A9.96 9.96 0 0 0 12.04 22C17.56 22 22 17.52 22 12S17.56 2 12.04 2Zm0 18.18c-1.64 0-3.22-.44-4.6-1.27l-.33-.2-3.11.74.75-3.04-.21-.34A8.16 8.16 0 0 1 3.82 12c0-4.53 3.7-8.22 8.22-8.22 4.53 0 8.22 3.69 8.22 8.22 0 4.53-3.7 8.18-8.22 8.18Z" />
    </svg>
  );
}

export function HelpFab() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-[80] sm:right-6 sm:bottom-6">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button
            type="button"
            aria-label="Abrir ayuda y asesoría por WhatsApp"
            className="group relative flex size-14 cursor-pointer items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl outline-none transition-all duration-300 hover:scale-105 hover:bg-[#20ba59] hover:shadow-[0_12px_28px_-8px_rgba(37,211,102,0.45)] focus-visible:ring-2 focus-visible:ring-ring sm:size-16"
          >
            <WhatsAppIcon className="size-8 sm:size-9" />
          </button>
        </PopoverTrigger>
        <PopoverContent
          side="top"
          align="end"
          sideOffset={12}
          collisionPadding={16}
          className="z-[90] w-[min(20.5rem,calc(100vw-2rem))] rounded-2xl border-border p-4 shadow-card data-[state=open]:slide-in-from-bottom-2"
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-foreground">¿Necesitas ayuda o asesoría?</p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                Agenda una breve asesoría o habla ahora mismo con un asesor por WhatsApp.
              </p>
            </div>
            <button
              type="button"
              aria-label="Cerrar"
              onClick={() => setOpen(false)}
              className="-mr-1 -mt-1 inline-flex size-8 cursor-pointer items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <X className="size-4" />
            </button>
          </div>

          <div className="mt-4 flex flex-col gap-2">
            <Button asChild variant="outline" className="h-10 w-full justify-center">
              <Link to="/contacto">
                <CalendarDays className="mr-2 size-4" />
                Agendar breve asesoría
              </Link>
            </Button>
            <Button
              asChild
              className="h-10 w-full justify-center border-0 bg-[#25D366] text-white shadow-sm hover:bg-[#1ebe57] hover:text-white"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="mr-2 size-4" />
                Hablar por WhatsApp
              </a>
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}