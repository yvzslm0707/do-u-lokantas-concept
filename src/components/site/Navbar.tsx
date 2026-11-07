import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Logo } from "./Ornament";

export const NAV_LINKS = [
  { href: "#anasayfa", label: "Anasayfa" },
  { href: "#hakkimizda", label: "Hakkımızda" },
  { href: "#lezzetler", label: "Lezzetler" },
  { href: "#galeri", label: "Galeri" },
  { href: "#atmosfer", label: "Atmosfer" },
  { href: "#iletisim", label: "İletişim" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#anasayfa");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const sections = NAV_LINKS.map((l) => document.querySelector(l.href)).filter(
      Boolean,
    ) as Element[];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled || open
            ? "border-b border-charcoal-foreground/10 bg-charcoal/95 py-3 backdrop-blur-md"
            : "bg-transparent py-6",
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
          <Logo />

          <ul className="hidden items-center gap-9 lg:flex">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={cn(
                    "relative py-2 text-[0.78rem] uppercase tracking-[0.2em] transition-colors duration-300",
                    "after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-gold after:transition-transform after:duration-500 hover:text-gold hover:after:scale-x-100",
                    active === l.href
                      ? "text-gold after:scale-x-100"
                      : "text-charcoal-foreground/85",
                  )}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <Button asChild variant="gold" size="md" className="hidden lg:inline-flex">
            <a href="#iletisim">Rezervasyon</a>
          </Button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="text-charcoal-foreground lg:hidden"
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={open}
          >
            {open ? <X className="size-7" /> : <Menu className="size-7" />}
          </button>
        </nav>
      </header>

      <div
        className={cn(
          "fixed inset-x-0 bottom-0 top-[64px] z-40 bg-charcoal transition-all duration-500 lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <ul className="flex h-full flex-col items-center justify-center gap-6 px-6">
          {NAV_LINKS.map((l, i) => (
            <li
              key={l.href}
              className={cn(
                "transition-all duration-500",
                open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
              )}
              style={{ transitionDelay: open ? `${i * 60 + 100}ms` : "0ms" }}
            >
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "font-display text-4xl transition-colors",
                  active === l.href ? "text-gold" : "text-charcoal-foreground hover:text-gold",
                )}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li
            className={cn(
              "mt-4 w-full max-w-xs transition-all duration-500",
              open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
            )}
            style={{ transitionDelay: open ? `${NAV_LINKS.length * 60 + 100}ms` : "0ms" }}
          >
            <Button asChild variant="gold" size="xl" className="w-full">
              <a href="#iletisim" onClick={() => setOpen(false)}>
                Rezervasyon
              </a>
            </Button>
          </li>
        </ul>
      </div>
    </>
  );
}
