import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SiteHeader } from "@/components/landing/SiteHeader";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { HelpFab } from "@/components/landing/HelpFab";

const title = "Contacto | Cerebiia Data";
const description =
  "Solicita una demostración de Cerebiia Data y conoce cómo cumplir la Ley 1581 de protección de datos personales.";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactoPage,
});

function ContactoPage() {
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    setEnviando(true);

    const { error } = await supabase.from("leads").insert({
      nombre: String(form.get("nombre") ?? ""),
      empresa: String(form.get("empresa") ?? ""),
      email: String(form.get("email") ?? ""),
      telefono: String(form.get("telefono") ?? ""),
      titulares: String(form.get("titulares") ?? ""),
      mensaje: String(form.get("mensaje") ?? ""),
      origen: "landing",
    });

    setEnviando(false);

    if (error) {
      toast.error("No pudimos enviar tu solicitud. Intenta de nuevo.");
      return;
    }

    setEnviado(true);
    toast.success("Solicitud enviada. Te contactaremos pronto.");
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto grid w-full max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Hablemos de tu cumplimiento
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Solicita una demostración de Cerebiia Data
          </h1>
          <p className="mt-6 max-w-lg text-muted-foreground">
            Cuéntanos cómo gestionas hoy el consentimiento y las solicitudes de tus titulares. Te
            mostramos una implementación ajustada a tu operación.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-card sm:p-8">
          {enviado ? (
            <div className="flex flex-col items-start gap-3">
              <CheckCircle2 className="size-10 text-success" />
              <h2 className="text-xl font-semibold text-card-foreground">Solicitud recibida</h2>
              <p className="text-sm text-muted-foreground">
                Gracias por escribirnos. Nuestro equipo te contactará en las próximas horas hábiles.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="nombre">Nombre</Label>
                  <Input id="nombre" name="nombre" required placeholder="Tu nombre" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="empresa">Empresa</Label>
                  <Input id="empresa" name="empresa" placeholder="Nombre de la empresa" />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email">Correo corporativo</Label>
                  <Input id="email" name="email" type="email" required placeholder="tu@empresa.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telefono">Teléfono</Label>
                  <Input id="telefono" name="telefono" placeholder="+57 300 000 0000" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="titulares">Número aproximado de titulares</Label>
                <Input id="titulares" name="titulares" placeholder="Ej. 5.000" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="mensaje">Mensaje</Label>
                <Textarea
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  placeholder="Cuéntanos tu necesidad de cumplimiento"
                />
              </div>

              <Button type="submit" className="w-full" size="lg" disabled={enviando}>
                {enviando ? "Enviando..." : "Enviar solicitud"}
              </Button>
            </form>
          )}
        </div>
      </main>
      <SiteFooter />
      <HelpFab />
    </div>
  );
}
