import { Link } from "@tanstack/react-router";
import { ContactForm } from "./ContactForm";
import {
  ClipboardList,
  FileText,
  Layers,
  Send,
  ShieldCheck,
  Clock,
  Database,
  History,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/landing/Reveal";
import heroImg from "@/assets/hero-data.jpg";
import iaImg from "@/assets/ia-policies.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
        <div>
          <Reveal immediate>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Cumplimiento. Trazabilidad. Ley 1581.
            </p>
          </Reveal>
          <Reveal immediate delay={90}>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Protege los datos personales de tu organización con inteligencia humana y artificial.
            </h1>
          </Reveal>
          <Reveal immediate delay={180}>
            <p className="mt-6 max-w-xl text-base text-muted-foreground">
              Cerebiia Data centraliza la recolección de consentimiento, las políticas de
              tratamiento, el registro de actividades (RAT), las solicitudes ARCO y los plazos
              legales, con evidencia auditable en cada paso.
            </p>
          </Reveal>
          <Reveal immediate delay={270} className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="cursor-pointer">
              <Link to="/contacto">Solicitar demo</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="cursor-pointer">
              <a href="#modulos">Conocer la plataforma</a>
            </Button>
          </Reveal>
        </div>

        <Reveal immediate delay={200} className="relative">
          <div className="absolute inset-6 -z-10 rounded-full bg-primary/10 blur-3xl" />
          <img
            src={heroImg}
            alt="Escudo de protección de datos personales con flujos de información"
            width={1024}
            height={1024}
            className="mx-auto w-full max-w-lg rounded-3xl"
          />
        </Reveal>
      </div>
    </section>
  );
}


export function IaBlock() {
  return (
    <section id="solucion" className="border-b border-border bg-card">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-20">
        <Reveal variant="left">
        <img
          src={iaImg}
          alt="Documentos de política de tratamiento validados automáticamente"
          width={1024}
          height={768}
          loading="lazy"
          className="w-full rounded-3xl shadow-card"
        />
        </Reveal>
        <Reveal delay={120} variant="right">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            <Sparkles className="size-3.5" /> IA aplicada al cumplimiento
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Menos trabajo manual, más evidencia de cumplimiento
          </h2>
          <p className="mt-4 text-muted-foreground">
            La inteligencia artificial redacta políticas de tratamiento, clasifica bases de datos y
            detecta datos sensibles, mientras el sistema alerta los plazos legales antes de que se
            venzan.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Generación de políticas de tratamiento con IA",
              "Clasificación automática de datos y detección de datos sensibles",
              "Alertas de vencimiento de solicitudes ARCO (Art. 11 y 14)",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 text-sm text-foreground">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-success" />
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

const modulos = [
  {
    icon: ClipboardList,
    title: "Recolección de datos",
    desc: "Formularios de consentimiento propios o importados, con evidencia de aceptación.",
  },
  {
    icon: FileText,
    title: "Políticas de tratamiento",
    desc: "Publica, versiona y comparte las políticas que tus titulares deben aceptar.",
  },
  {
    icon: Layers,
    title: "Clasificación",
    desc: "Trazabilidad de cada registro recolectado, verificado o pendiente.",
  },
  {
    icon: Send,
    title: "Campañas de consentimiento",
    desc: "Envía campañas masivas y mide la tasa de autorización obtenida.",
  },
  {
    icon: ShieldCheck,
    title: "Solicitudes ARCO",
    desc: "Recibe, asigna y resuelve solicitudes de acceso, rectificación y supresión.",
  },
  {
    icon: Clock,
    title: "Plazos",
    desc: "Bandeja priorizada por urgencia con días restantes y responsables.",
  },
  {
    icon: Database,
    title: "Registro RAT",
    desc: "Inventario de actividades de tratamiento con base legal y ciclo de vida.",
  },
  {
    icon: History,
    title: "Auditoría",
    desc: "Bitácora completa de acciones para demostrar cumplimiento ante la SIC.",
  },
];

export function Modulos() {
  return (
    <section id="modulos" className="border-b border-border bg-background">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 md:py-20">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Todo el ciclo de vida del dato personal
          </h2>
          <p className="mt-4 text-muted-foreground">
            Ocho módulos conectados entre sí para operar el programa de protección de datos de tu
            empresa sin hojas de cálculo.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {modulos.map((m, i) => (
            <Reveal
              as="article"
              key={m.title}
              delay={i * 70}
              variant="zoom"
              className="group rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-card"
            >
              <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                <m.icon className="size-5 transition-transform duration-300 group-hover:scale-110" />
              </span>
              <h3 className="mt-4 text-base font-semibold text-card-foreground">{m.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{m.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Cumplimiento() {
  const kpis = [
    { label: "Solicitudes respondidas en plazo", value: "100%", tone: "text-success" },
    { label: "Registros verificados", value: "1.240", tone: "text-primary" },
    { label: "Políticas vigentes", value: "8", tone: "text-foreground" },
    { label: "Días promedio de respuesta", value: "3,4", tone: "text-foreground" },
  ];

  return (
    <section id="cumplimiento" className="border-b border-border bg-card">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-20">
        <Reveal variant="left">
          <h2 className="text-3xl font-bold tracking-tight text-card-foreground sm:text-4xl">
            Cumplimiento con resultados medibles
          </h2>
          <p className="mt-4 text-muted-foreground">
            Un panel único muestra el estado real del programa: qué se recolectó, qué falta
            verificar, qué solicitudes están por vencer y quién responde por cada una.
          </p>
          <Button asChild className="mt-8" size="lg">
            <Link to="/contacto">
              Hablemos de tu operación <ArrowRight className="size-4" />
            </Link>
          </Button>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {kpis.map((k, i) => (
            <Reveal key={k.label} delay={i * 80} variant="zoom" className="group rounded-2xl border border-border bg-background p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-card">
              <p className={`text-3xl font-extrabold tracking-tight ${k.tone} transition-transform duration-300 group-hover:scale-105`}>{k.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{k.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Proceso() {
  const pasos = [
    { n: "01", t: "Configura", d: "Define responsable de datos, políticas y bases legales." },
    { n: "02", t: "Recolecta", d: "Captura consentimiento con formularios y campañas trazables." },
    { n: "03", t: "Clasifica y responde", d: "Ordena tus bases y resuelve solicitudes ARCO a tiempo." },
    { n: "04", t: "Audita", d: "Exporta el RAT y la evidencia cuando la autoridad lo requiera." },
  ];

  return (
    <section id="proceso" className="border-b border-border bg-background">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 md:py-20">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Cómo funciona
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {pasos.map((p, i) => (
            <Reveal key={p.n} delay={i * 90} className="group border-t-2 border-primary pt-5 transition-all duration-300 hover:pl-2">
              <span className="text-sm font-bold text-primary transition-transform duration-300 group-hover:translate-x-1 inline-block">{p.n}</span>
              <h3 className="mt-2 text-lg font-semibold text-foreground">{p.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Familia() {
  const productos = [
    { t: "Cerebiia RRHH", d: "Gestión del talento y procesos de personal.", active: false },
    { t: "Cerebiia Calidad", d: "Sistemas de gestión y mejora continua.", active: false },
    { t: "Cerebiia Data 1581", d: "Protección de datos personales y cumplimiento.", active: true },
  ];

  return (
    <section className="border-b border-border bg-navy text-navy-foreground">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 md:py-20">
        <Reveal>
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
            Soluciones SaaS
          </h2>
          <p className="mt-4 max-w-2xl text-navy-foreground/70">
            Plataformas seguras y personalizables para sectores clave, con inteligencia artificial y
            herramientas colaborativas integradas.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {productos.map((p, i) => (
            <Reveal
              key={p.t}
              delay={i * 90}
              variant="zoom"
              className={`group rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card ${
                p.active
                  ? "border-primary bg-primary/15 hover:border-primary"
                  : "border-navy-foreground/15 bg-navy-foreground/5 hover:border-navy-foreground/40"
              }`}
            >
              <h3 className="text-lg font-semibold transition-transform duration-300 group-hover:translate-x-1">{p.t}</h3>
              <p className="mt-2 text-sm text-navy-foreground/70">{p.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Aliados() {
  const aliados = [
    "CENS",
    "Zero",
    "HAD Seguros",
    "Happy BPO",
    "Conectados RC",
    "Asconfit",
    "Umake",
    "Coagronorte",
  ];

  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6">
        <Reveal>
          <p className="text-center text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            +50 aliados confían en Cerebiia
          </p>
        </Reveal>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {aliados.map((a, i) => (
            <Reveal
              as="span"
              key={a}
              delay={i * 60}
              className="text-lg font-bold tracking-tight text-muted-foreground/70"
            >
              {a}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaFinal() {
  return (
    <>
      {/* Tu sección original intacta */}
      <section className="bg-brand-gradient">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start gap-6 px-4 py-16 sm:px-6 md:flex-row md:items-center md:justify-between">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Pon tu empresa al día con la Ley 1581
            </h2>
            <p className="mt-3 max-w-xl text-primary-foreground/80">
              Agenda una demostración y te mostramos cómo migrar tu operación actual a Cerebiia Data.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <Button asChild size="lg" variant="secondary">
              <a href="#contacto">Solicitar demo</a>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Tu nuevo formulario de contacto justo abajo */}
      <section id="contacto" className="border-t border-border bg-card py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <ContactForm />
        </div>
      </section>
    </>
  );
}