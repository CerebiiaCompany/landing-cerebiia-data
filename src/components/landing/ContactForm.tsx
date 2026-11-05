import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("Enviando mensaje...");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.status === 200) {
        setStatus("¡Listo! Tu solicitud ha sido enviada correctamente.");
        form.reset();
      } else {
        setStatus(result.message || "Error al enviar el formulario.");
      }
    } catch {
      setStatus("Hubo un error de conexión. Inténtalo de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full max-w-2xl mx-auto py-12 px-4" id="contacto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Solicitar Demostración
        </h2>
        <p className="text-muted-foreground mt-2 text-sm sm:text-base">
          Déjanos los datos de tu empresa y nos pondremos en contacto contigo.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-border bg-card p-6 shadow-card sm:p-8">
        {/* Tu Access Key de Web3Forms */}
        <input type="hidden" name="access_key" value="cd51f083-6319-4ad5-846e-9c56f8fe7039" />
        <input type="hidden" name="subject" value="Nueva solicitud de demo - Cerebiia Data" />
        <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

        {/* Nombre completo */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1 text-foreground">
            Nombre completo <span className="text-destructive">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Ej: Camilo Arciniegas"
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
          />
        </div>

        {/* Correo y Teléfono en dos columnas en pantallas medianas */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Correo electrónico */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1 text-foreground">
              Correo electrónico <span className="text-destructive">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="tu@empresa.com"
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
            />
          </div>

          {/* Número de WhatsApp */}
          <div>
            <label htmlFor="whatsapp" className="block text-sm font-medium mb-1 text-foreground">
              Número de WhatsApp <span className="text-destructive">*</span>
            </label>
            <input
              type="tel"
              id="whatsapp"
              name="whatsapp"
              required
              placeholder="+57 300 123 4567"
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
            />
          </div>
        </div>

        {/* Nombre de la empresa */}
        <div>
          <label htmlFor="company" className="block text-sm font-medium mb-1 text-foreground">
            Nombre de la empresa <span className="text-xs text-muted-foreground">(Opcional)</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            placeholder="Ej: AceroTech S.A.S."
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
          />
        </div>

        {/* Servicio de interés y Presupuesto estimado */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Servicio de interés */}
          <div>
            <label htmlFor="service" className="block text-sm font-medium mb-1 text-foreground">
              Servicio de interés <span className="text-destructive">*</span>
            </label>
            <select
              id="service"
              name="service"
              required
              defaultValue=""
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
            >
              <option value="" disabled>Selecciona una opción</option>
              <option value="Cerebiia Data 1581 (Protección de datos)">Cerebiia Data 1581</option>
              <option value="Cerebiia RRHH">Cerebiia RRHH</option>
              <option value="Cerebiia Calidad">Cerebiia Calidad</option>
              <option value="Consultoría personalizada">Consultoría personalizada</option>
            </select>
          </div>

          {/* Presupuesto estimado */}
          <div>
            <label htmlFor="budget" className="block text-sm font-medium mb-1 text-foreground">
              Presupuesto estimado <span className="text-xs text-muted-foreground">(Opcional)</span>
            </label>
            <select
              id="budget"
              name="budget"
              defaultValue=""
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
            >
              <option value="">Prefiero no especificar</option>
              <option value="Menos de $1.000.000 COP">Menos de $1.000.000 COP</option>
              <option value="$1.000.000 a $3.000.000 COP">$1.000.000 - $3.000.000 COP</option>
              <option value="$3.000.000 a $7.000.000 COP">$3.000.000 - $7.000.000 COP</option>
              <option value="Más de $7.000.000 COP">Más de $7.000.000 COP</option>
            </select>
          </div>
        </div>

        {/* Descripción del proyecto */}
        <div>
          <label htmlFor="project_description" className="block text-sm font-medium mb-1 text-foreground">
            Descripción del proyecto / Necesidad <span className="text-xs text-muted-foreground">(Opcional)</span>
          </label>
          <textarea
            id="project_description"
            name="project_description"
            rows={3}
            placeholder="Cuéntanos brevemente sobre la operación de tu empresa o qué requieres implementar..."
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
          />
        </div>

        {/* Aceptación de política de privacidad */}
        <div className="flex items-start gap-2 pt-2">
          <input
            type="checkbox"
            id="privacy"
            name="privacy_accepted"
            required
            className="mt-1 h-4 w-4 rounded border-input text-primary focus:ring-primary"
          />
          <label htmlFor="privacy" className="text-xs leading-relaxed text-muted-foreground">
            Acepto el tratamiento de mis datos personales de acuerdo con la{" "}
            <a href="#solucion" className="text-primary underline hover:opacity-80">
              política de privacidad
            </a>{" "}
            y autorizo a Cerebiia a contactarme conforme a la Ley 1581 de 2012. <span className="text-destructive">*</span>
          </label>
        </div>

        {/* Botón de envío */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-md bg-primary py-3 text-sm font-semibold text-primary-foreground shadow transition hover:opacity-90 disabled:opacity-50 cursor-pointer"
        >
          {isSubmitting ? "Enviando..." : "Enviar Solicitud"}
        </button>

        {/* Feedback visual */}
        {status && (
          <p className="text-center text-sm font-medium pt-2 text-primary">
            {status}
          </p>
        )}
      </form>
    </section>
  );
}