CREATE TABLE public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nombre TEXT NOT NULL,
  empresa TEXT,
  email TEXT NOT NULL,
  telefono TEXT,
  titulares TEXT,
  mensaje TEXT,
  origen TEXT NOT NULL DEFAULT 'landing',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT INSERT ON public.leads TO anon;
GRANT SELECT, INSERT ON public.leads TO authenticated;
GRANT ALL ON public.leads TO service_role;

ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Cualquiera puede enviar una solicitud"
  ON public.leads FOR INSERT TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Usuarios autenticados pueden ver las solicitudes"
  ON public.leads FOR SELECT TO authenticated
  USING (true);