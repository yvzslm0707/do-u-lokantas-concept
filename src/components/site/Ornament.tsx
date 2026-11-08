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
  description,
  tone = "dark",
  align = "center",
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  tone?: "light" | "dark";
  align?: "center" | "left";
}) {
  const center = align === "center";
  return (
    <div className={cn("reveal", center ? "mx-auto max-w-3xl text-center" : "text-left")}>
      <p
        className={cn(
          "eyebrow flex items-center gap-3",
          center && "justify-center",
          tone === "light" ? "text-gold" : "text-primary",
        )}
      >
        <span className="h-px w-6 bg-current opacity-60" aria-hidden />
        {eyebrow}
        {center && <span className="h-px w-6 bg-current opacity-60" aria-hidden />}
      </p>
      <h2
        className={cn(
          "mt-4 text-[2.6rem] leading-[1.02] sm:text-5xl md:text-6xl lg:text-[4.25rem]",
          tone === "light" ? "text-charcoal-foreground" : "text-foreground",
        )}
      >
        {title}
      </h2>
      <Ornament className={cn("mt-5", !center && "justify-start")} />
      {description && (
        <p
          className={cn(
            "mt-5 text-[0.95rem] font-light leading-relaxed md:text-base",
            center && "mx-auto max-w-xl",
            tone === "light" ? "text-charcoal-muted" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

/** Diamond seam that sits on the border between two sections. */
export function SectionSeam({ tone = "dark" }: { tone?: "light" | "dark" | "burgundy" }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2"
    >
      <div
        className={cn(
          "flex size-10 rotate-45 items-center justify-center border border-gold/60",
          tone === "dark" ? "bg-background" : tone === "burgundy" ? "bg-primary-deep" : "bg-charcoal",
        )}
      >
        <span className="size-2 bg-gold" />
      </div>
    </div>
  );
}
