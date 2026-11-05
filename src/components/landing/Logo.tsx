import { Link } from "@tanstack/react-router";
import brain from "@/assets/cerebiia-brain.png";
import wordmark from "@/assets/cerebiia-wordmark.png";

export function Logo({ variant = "light" }: { variant?: "light" | "dark" }) {
  const sub = variant === "dark" ? "text-navy-foreground/80" : "text-primary";

  return (
    <Link to="/" className="flex cursor-pointer items-center gap-2.5 transition-opacity hover:opacity-90" aria-label="Cerebiia Data">
      <img src={brain} alt="" aria-hidden className="h-9 w-auto" />
      <span className="leading-none">
        <img
          src={wordmark}
          alt="Cerebiia"
          className={`h-4 w-auto sm:h-[1.15rem] ${variant === "dark" ? "brightness-0 invert" : ""}`}
        />
        <span className={`mt-1 block text-[0.62rem] font-bold tracking-[0.32em] ${sub}`}>DATA</span>
      </span>
    </Link>
  );
}
