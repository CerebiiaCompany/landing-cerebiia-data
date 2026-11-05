import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Muestra el contenido al montar (para el hero, sin esperar scroll). */
  immediate?: boolean;
  as?: "div" | "section" | "li" | "span" | "article";
  /** Variante de la animación de entrada. */
  variant?: "up" | "fade" | "zoom" | "left" | "right";
};

export function Reveal({
  children,
  className,
  delay = 0,
  immediate = false,
  as: Tag = "div",
  variant = "up",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (immediate) {
      const id = window.setTimeout(() => setVisible(true), 40);
      return () => window.clearTimeout(id);
    }

    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [immediate]);

  return (
    <Tag
      ref={ref as never}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", `reveal-${variant}`, visible && "reveal-visible", className)}
    >
      {children}
    </Tag>
  );
}
