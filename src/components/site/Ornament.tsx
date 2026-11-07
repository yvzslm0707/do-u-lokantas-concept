import { cn } from "@/lib/utils";

/** Small decorative divider: line – diamond – line. */
export function Ornament({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center gap-3 text-gold", className)} aria-hidden>
      <span className="h-px w-10 bg-current opacity-60" />
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M7 0L14 7L7 14L0 7Z" stroke="currentColor" strokeWidth="1" />
        <path d="M7 4L10 7L7 10L4 7Z" fill="currentColor" />
      </svg>
      <span className="h-px w-10 bg-current opacity-60" />
    </div>
  );
}

export function Logo({ className, tone = "light" }: { className?: string; tone?: "light" | "dark" }) {
  return (
    <a
      href="#anasayfa"
      className={cn(
        "group flex flex-col items-start leading-none",
        tone === "light" ? "text-charcoal-foreground" : "text-foreground",
        className,
      )}
      aria-label="Doğuş Lokantası – Anasayfa"
    >
      <span className="font-display text-3xl font-semibold tracking-wide">
        Doğuş
      </span>
      <span className="eyebrow mt-1 text-[0.6rem] text-gold">Lokantası · Sivas</span>
    </a>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  tone = "dark",
  align = "center",
}: {
  eyebrow: string;
  title: React.ReactNode;
  tone?: "light" | "dark";
  align?: "center" | "left";
}) {
  return (
    <div className={cn("reveal", align === "center" ? "text-center" : "text-left")}>
      <p className={cn("eyebrow", tone === "light" ? "text-gold" : "text-primary")}>{eyebrow}</p>
      <h2
        className={cn(
          "mt-4 text-4xl leading-tight md:text-6xl",
          tone === "light" ? "text-charcoal-foreground" : "text-foreground",
        )}
      >
        {title}
      </h2>
      <Ornament className={cn("mt-6", align === "left" && "justify-start")} />
    </div>
  );
}
