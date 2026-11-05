import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/landing/SiteHeader";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { HelpFab } from "@/components/landing/HelpFab";
import {
  Hero,
  IaBlock,
  Modulos,
  Cumplimiento,
  Proceso,
  Familia,
  Aliados,
  CtaFinal,
} from "@/components/landing/sections";

const title = "Cerebiia Data | Cumplimiento de la Ley 1581 de datos personales";
const description =
  "Plataforma para gestionar consentimiento, políticas de tratamiento, RAT, solicitudes ARCO y plazos legales con trazabilidad y evidencia auditable.";

export const Route = createFileRoute("/")({
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
  component: Index,
});

function Index() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Cerebiia Data",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description,
    publisher: { "@type": "Organization", name: "Cerebiia", url: "https://cerebiia.com/" },
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <IaBlock />
        <Modulos />
        <Cumplimiento />
        <Proceso />
        <Familia />
        <Aliados />
        <CtaFinal />
      </main>
      <SiteFooter />
      <HelpFab />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
}
