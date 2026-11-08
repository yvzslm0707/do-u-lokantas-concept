import { useEffect, useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  Clock,
  MapPin,
  Phone,
  Mail,
  X,
  Navigation,
  Instagram,
  Info,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Ornament, SectionHeading, SectionSeam, Logo } from "./Ornament";
import { NAV_LINKS } from "./Navbar";

import hero from "@/assets/hero.jpg";
import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import dish3 from "@/assets/dish-3.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import interior from "@/assets/interior.jpg";

/** Shared section rhythm so spacing stays consistent across the page. */
const SECTION_Y = "py-16 sm:py-20 lg:py-28";

/** Thin gold inset frame that appears on hover — the shared hover language of the site. */
function HoverFrame({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-3 z-10 border border-gold/0 transition-all duration-700 ease-out group-hover:inset-4 group-hover:border-gold/70",
        className,
      )}
    />
  );
}

/* ---------------- Hero ---------------- */
const HERO_FACTS = [
  { label: "Mutfak", value: "Türk Mutfağı" },
  { label: "Konum", value: "Sivas, Türkiye" },
  { label: "Saatler", value: "[Eklenecek]" },
];

export function Hero() {
  return (
    <section
      id="anasayfa"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-charcoal"
    >
      <img
        src={hero}
        alt="Mum ışığında hazırlanmış zengin bir Türk sofrası"
        width={1920}
        height={1088}
        className="animate-hero-zoom absolute inset-0 h-full w-full object-cover"
      />
      <div className="bg-hero-overlay absolute inset-0" />

      {/* Thin gold frame with diamond corners */}
      <div
        aria-hidden
        className="animate-fade-up pointer-events-none absolute inset-x-3 bottom-3 top-[96px] z-[1] border border-gold/35 sm:inset-x-5 sm:bottom-5 lg:inset-x-8 lg:bottom-8 lg:top-[108px]"
        style={{ animationDelay: "0.2s" }}
      >
        {["-left-1 -top-1", "-right-1 -top-1", "-bottom-1 -left-1", "-bottom-1 -right-1"].map(
          (pos) => (
            <span key={pos} className={cn("absolute size-2 rotate-45 bg-gold", pos)} />
          ),
        )}
      </div>

      <div className="relative z-10 flex flex-1 flex-col px-6 pb-3 pt-[96px] sm:px-10 sm:pb-5 lg:px-16 lg:pb-8 lg:pt-[108px]">
        <div className="flex flex-1 items-center justify-center py-8 sm:py-10">
          <div className="mx-auto max-w-5xl text-center">
            <p className="eyebrow animate-fade-up text-gold" style={{ animationDelay: "0.3s" }}>
              Sivas · Türkiye
            </p>
            <h1
              className="animate-fade-up mt-4 text-[4.75rem] leading-[0.88] text-charcoal-foreground sm:text-8xl md:text-[8.5rem] lg:text-[10rem] xl:text-[11rem]"
              style={{ animationDelay: "0.5s" }}
            >
              Doğuş
              <span className="mt-1 block font-display text-[2.6rem] italic leading-none text-gold sm:text-6xl md:text-7xl">
                Lokantası
              </span>
            </h1>
            <div className="animate-fade-up" style={{ animationDelay: "0.8s" }}>
              <Ornament className="mt-6 md:mt-8" />
              <p className="mx-auto mt-5 max-w-md text-[0.95rem] font-light leading-relaxed text-charcoal-foreground/85 md:max-w-xl md:text-lg">
                Türk mutfağının sıcaklığını zarif bir atmosferle buluşturan bir sofra deneyimi.
              </p>
            </div>
            <div
              className="animate-fade-up mx-auto mt-8 flex w-full max-w-xs flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-4"
              style={{ animationDelay: "1.1s" }}
            >
              <Button asChild variant="hero" size="xl" className="h-12 sm:h-14">
                <a href="#lezzetler">Lezzetleri Keşfet</a>
              </Button>
              <Button asChild variant="heroOutline" size="xl" className="h-12 sm:h-14">
                <a href="#iletisim">Bize Ulaşın</a>
              </Button>
            </div>
            <a
              href="#hakkimizda"
              aria-label="Aşağı kaydır"
              className="animate-scroll-cue mt-8 hidden text-charcoal-foreground/70 transition-colors hover:text-gold md:inline-block"
            >
              <ChevronDown className="size-7" />
            </a>
          </div>
        </div>

        {/* Compact info strip */}
        <dl
          className="animate-fade-up grid grid-cols-3 border-t border-gold/30 bg-charcoal/40 backdrop-blur-sm"
          style={{ animationDelay: "1.3s" }}
        >
          {HERO_FACTS.map((f, i) => (
            <div
              key={f.label}
              className={cn(
                "flex min-w-0 flex-col items-center justify-center gap-1 px-2 py-3 text-center sm:py-4 md:flex-row md:gap-3",
                i > 0 && "border-l border-gold/20",
              )}
            >
              <dt className="eyebrow text-[0.55rem] text-gold sm:text-[0.6rem]">{f.label}</dt>
              <dd className="truncate font-display text-base text-charcoal-foreground sm:text-lg">
                {f.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ---------------- Scrolling word band ---------------- */
const BAND_WORDS = [
  "Hoş Geldiniz",
  "Misafirperverlik",
  "Sofra",
  "Paylaşım",
  "Lezzet",
  "Gelenek",
  "Muhabbet",
  "Afiyet Olsun",
];

export function WordBand() {
  const row = (hidden?: boolean) => (
    <ul className="flex shrink-0 items-center gap-8 pr-8 md:gap-12 md:pr-12" aria-hidden={hidden}>
      {BAND_WORDS.map((w) => (
        <li key={w} className="flex items-center gap-8 md:gap-12">
          <span className="whitespace-nowrap font-display text-xl italic text-charcoal-foreground/90 md:text-2xl">
            {w}
          </span>
          <span className="size-1.5 rotate-45 bg-gold" aria-hidden />
        </li>
      ))}
    </ul>
  );
  return (
    <div className="relative overflow-hidden border-y border-gold/25 bg-primary-deep py-4 md:py-5">
      <div className="animate-marquee flex w-max hover:[animation-play-state:paused]">
        {row()}
        {row(true)}
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-primary-deep to-transparent md:w-32"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-primary-deep to-transparent md:w-32"
      />
    </div>
  );
}

/* ---------------- About ---------------- */
export function About() {
  return (
    <section id="hakkimizda" className={cn("relative bg-background", SECTION_Y)}>
      <SectionSeam tone="dark" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <div className="reveal reveal-left group relative order-2 mx-auto w-full max-w-md lg:order-1 lg:max-w-none">
          <div className="absolute -left-3 -top-3 h-full w-full border border-primary/30 transition-all duration-700 group-hover:-left-4 group-hover:-top-4 group-hover:border-gold/70 md:-left-5 md:-top-5" />
          <div className="shadow-elegant relative overflow-hidden">
            <img
              src={dish2}
              alt="Bakır kasede servis edilen sıcak bir çorba"
              width={1024}
              height={1280}
              loading="lazy"
              className="aspect-[5/4] w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105 sm:aspect-[4/5]"
            />
          </div>
          <div className="bg-burgundy-gradient shadow-burgundy absolute -bottom-6 -right-3 hidden w-52 p-6 text-primary-foreground md:block lg:-right-8">
            <p className="font-display text-2xl italic leading-snug">"Sofra, paylaşıldıkça güzelleşir."</p>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow="Hakkımızda"
            align="left"
            title={
              <>
                Sivas'ta <em className="text-primary">zarif</em> bir sofra
              </>
            }
          />
          <div className="reveal mt-6 space-y-5 text-base font-light leading-relaxed text-muted-foreground md:mt-8 md:text-lg">
            <p>
              Doğuş Lokantası, Türk mutfağının köklü lezzetlerini sıcak ve şık bir ortamda
              sunmayı hedefleyen bir lokanta konseptidir.
            </p>
            <p className="border-l-2 border-primary/40 pl-5 italic">
              [Restoranın hikâyesi, kuruluş bilgileri ve mutfak anlayışı burada yer alacaktır.
              Bu alan doğrulanmış bilgilerle doldurulmalıdır.]
            </p>
          </div>
          <div className="reveal mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6 sm:gap-6 md:mt-10 md:pt-8">
            {[
              { k: "Mutfak", v: "Türk" },
              { k: "Şehir", v: "Sivas" },
              { k: "Tür", v: "Lokanta" },
            ].map((s) => (
              <div key={s.k}>
                <p className="font-display text-2xl text-primary md:text-3xl">{s.v}</p>
                <p className="eyebrow mt-1 text-[0.62rem] text-muted-foreground">{s.k}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Featured dishes ---------------- */
const DISHES = [
  { img: dish1, category: "Ana Yemek", alt: "Toprak güveçte sebzeli et yemeği" },
  { img: dish2, category: "Çorba", alt: "Bakır kasede çorba" },
  { img: dish3, category: "Tatlı", alt: "Fıstıklı baklava ve Türk çayı" },
];

export function FeaturedDishes() {
  return (
    <section id="lezzetler" className={cn("relative bg-charcoal", SECTION_Y)}>
      <SectionSeam tone="light" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Öne Çıkan Lezzetler"
          tone="light"
          title={
            <>
              Sofranın <em className="text-gold">yıldızları</em>
            </>
          }
          description="Menü bilgileri ve fiyatlar henüz eklenmemiştir. Görseller temsilidir."
        />

        <div
          className="no-scrollbar -mx-6 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-6 pb-2 pt-2 md:mt-14 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-7 lg:overflow-visible lg:px-0"
          role="list"
          aria-label="Öne çıkan lezzetler"
        >
          {DISHES.map((d, i) => (
            <div
              key={i}
              role="listitem"
              className="reveal w-[82%] shrink-0 snap-center sm:w-[58%] md:w-[44%] lg:w-auto"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <article className="group relative flex h-full flex-col border border-charcoal-foreground/10 bg-charcoal-soft transition-[translate,border-color,box-shadow] duration-500 ease-out hover:-translate-y-1.5 hover:border-gold/60 hover:shadow-glow">
                <div className="relative aspect-[4/3] overflow-hidden lg:aspect-[4/5]">
                  <img
                    src={d.img}
                    alt={d.alt}
                    width={1024}
                    height={1280}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-soft via-transparent to-transparent" />
                  <HoverFrame />
                  <span className="eyebrow absolute left-4 top-4 z-10 bg-primary px-3 py-1.5 text-[0.6rem] text-primary-foreground">
                    {d.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5 md:p-6">
                  <div className="flex items-end gap-3">
                    <h3 className="text-2xl leading-none text-charcoal-foreground transition-colors duration-500 group-hover:text-gold lg:text-[1.7rem]">
                      [Yemek Adı]
                    </h3>
                    <span
                      aria-hidden
                      className="mb-1 min-w-6 flex-1 border-b-2 border-dotted border-gold/40"
                    />
                    <p className="font-display text-xl leading-none text-gold">[Fiyat]</p>
                  </div>
                  <p className="mt-3 text-sm font-light text-charcoal-muted">
                    [Kısa açıklama eklenecek]
                  </p>
                </div>
              </article>
            </div>
          ))}
        </div>
        <p className="mt-5 flex items-center justify-center gap-2 text-[0.7rem] uppercase tracking-[0.25em] text-charcoal-muted lg:hidden">
          Kaydırarak keşfedin <ArrowRight className="size-3.5 text-gold" />
        </p>
      </div>
    </section>
  );
}

/* ---------------- Gallery ---------------- */
const GALLERY = [
  { src: gallery1, alt: "Çeşitli mezeler ve sıcak pide", w: 1280, h: 960, span: "md:col-span-2" },
  { src: gallery2, alt: "Taş fırından çıkan pide", w: 1024, h: 1280, span: "md:row-span-2" },
  { src: dish3, alt: "Fıstıklı baklava", w: 1024, h: 1280, span: "" },
  { src: gallery3, alt: "Bakır fincanda Türk kahvesi ve lokum", w: 1024, h: 1024, span: "" },
  { src: dish1, alt: "Toprak güveçte yemek", w: 1024, h: 1280, span: "" },
  { src: hero, alt: "Mum ışığında Türk sofrası", w: 1920, h: 1088, span: "md:col-span-1" },
];

export function Gallery() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  useEffect(() => {
    if (openIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIdx(null);
      if (e.key === "ArrowRight") setOpenIdx((i) => (i === null ? i : (i + 1) % GALLERY.length));
      if (e.key === "ArrowLeft")
        setOpenIdx((i) => (i === null ? i : (i - 1 + GALLERY.length) % GALLERY.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIdx]);

  return (
    <section id="galeri" className={cn("relative bg-background", SECTION_Y)}>
      <SectionSeam tone="dark" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Galeri"
          title={
            <>
              Göze de <em className="text-primary">hitap eden</em> lezzetler
            </>
          }
        />

        <div className="mt-10 grid auto-rows-[150px] grid-cols-2 gap-2.5 sm:auto-rows-[200px] sm:gap-3 md:mt-14 md:auto-rows-[220px] md:grid-cols-4 md:gap-4 lg:auto-rows-[250px]">
          {GALLERY.map((g, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setOpenIdx(i)}
              className={cn(
                "reveal reveal-scale group relative overflow-hidden bg-charcoal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                g.span,
                i === 0 && "col-span-2",
                i === 5 && "col-span-2",
              )}
              style={{ transitionDelay: `${(i % 4) * 90}ms` }}
              aria-label={`Görseli büyüt: ${g.alt}`}
            >
              <img
                src={g.src}
                alt={g.alt}
                width={g.w}
                height={g.h}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-primary-deep/0 to-transparent p-5 transition-colors duration-500 group-hover:from-primary-deep/75">
                <span className="relative z-20 translate-y-3 text-left font-display text-base italic text-primary-foreground opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 md:text-lg">
                  {g.alt}
                </span>
              </div>
              <HoverFrame />
            </button>
          ))}
        </div>
        <p className="mt-5 text-center text-xs text-muted-foreground">
          Görseller temsilidir; gerçek restoran fotoğrafları ile değiştirilmelidir.
        </p>
      </div>

      {openIdx !== null && (
        <div
          className="animate-in fade-in fixed inset-0 z-[60] flex items-center justify-center bg-charcoal/95 p-4 duration-300"
          onClick={() => setOpenIdx(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            className="absolute right-5 top-5 text-charcoal-foreground transition-colors hover:text-gold"
            aria-label="Kapat"
          >
            <X className="size-8" />
          </button>
          <img
            src={GALLERY[openIdx]?.src}
            alt={GALLERY[openIdx]?.alt ?? ""}
            className="animate-in zoom-in-95 max-h-[85vh] max-w-full object-contain duration-500"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

/* ---------------- Atmosphere ---------------- */
export function Atmosphere() {
  return (
    <section id="atmosfer" className="relative bg-primary-deep">
      <SectionSeam tone="burgundy" />
      <div className="grid lg:grid-cols-2">
        <div className="group relative min-h-[280px] overflow-hidden sm:min-h-[380px] lg:min-h-[640px]">
          <img
            src={interior}
            alt="Bordo kadife sandalyeler ve sıcak ışıklarla zarif bir yemek salonu"
            width={1120}
            height={1072}
            loading="lazy"
            className="reveal reveal-scale absolute inset-0 h-full w-full object-cover transition-[scale] duration-[1.6s] ease-out group-hover:scale-105"
          />
          <HoverFrame className="inset-5 group-hover:inset-6" />
        </div>
        <div className="flex items-center px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <div className="max-w-lg">
            <SectionHeading
              eyebrow="Atmosfer"
              tone="light"
              align="left"
              title={
                <>
                  Sıcak ışıklar, <em className="text-gold">samimi</em> sofralar
                </>
              }
            />
            <p className="reveal mt-6 font-light leading-relaxed text-charcoal-foreground/80 md:mt-8 md:text-lg">
              Bordo tonlar, yumuşak ışıklar ve özenle kurulmuş masalarla sofrayı bir buluşma
              anına dönüştürmeyi amaçlayan bir ortam tasarımı.
            </p>
            <ul className="reveal mt-8 space-y-4">
              {[
                "Sıcak ve zarif iç mekân",
                "Özenle kurulmuş masalar",
                "[Salon kapasitesi ve ek hizmetler eklenecek]",
              ].map((t) => (
                <li
                  key={t}
                  className="group/item flex items-center gap-4 text-charcoal-foreground transition-colors duration-500 hover:text-gold"
                >
                  <span className="h-px w-8 shrink-0 bg-gold transition-all duration-500 group-hover/item:w-12" />
                  <span className="font-light tracking-wide">{t}</span>
                </li>
              ))}
            </ul>
            <p className="reveal mt-8 text-xs text-charcoal-foreground/50">Görsel temsilidir.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */
const CONTACT_ITEMS = [
  { icon: MapPin, label: "Adres", value: "[Açık adres eklenecek], Sivas, Türkiye" },
  { icon: Phone, label: "Telefon", value: "[Telefon numarası eklenecek]" },
  { icon: Mail, label: "E-posta", value: "[E-posta adresi eklenecek]" },
  { icon: Clock, label: "Çalışma Saatleri", value: "[Çalışma saatleri eklenecek]" },
];

export function Contact() {
  return (
    <section id="iletisim" className={cn("relative bg-background", SECTION_Y)}>
      <SectionSeam tone="dark" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="İletişim & Konum"
          title={
            <>
              Sizi <em className="text-primary">ağırlamak</em> için
            </>
          }
        />

        <div className="mt-10 grid gap-8 md:mt-14 lg:grid-cols-5 lg:gap-10">
          <div className="reveal reveal-left lg:col-span-2">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {CONTACT_ITEMS.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="group flex min-w-0 items-start gap-4 border border-border bg-card p-5 transition-[translate,border-color,box-shadow] duration-500 ease-out hover:-translate-y-0.5 hover:border-gold/70 hover:shadow-elegant"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center bg-primary text-primary-foreground transition-colors duration-500 group-hover:bg-primary-deep">
                    <Icon className="size-[1.1rem] transition-colors duration-500 group-hover:text-gold" />
                  </span>
                  <div className="min-w-0">
                    <p className="eyebrow text-[0.62rem] text-primary">{label}</p>
                    <p className="mt-1.5 break-words font-light text-foreground">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-4 flex items-start gap-3 border-l-2 border-gold/60 bg-muted/60 px-4 py-3 text-sm font-light leading-relaxed text-muted-foreground">
              <Info className="mt-0.5 size-4 shrink-0 text-primary" />
              Çevrimiçi rezervasyon sistemi bu konsept sitede bağlı değildir. Rezervasyon için
              iletişim bilgileri eklendiğinde restoranla doğrudan iletişime geçilebilir.
            </p>

            <Button asChild variant="elegant" size="xl" className="mt-4 w-full">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Sivas%2C+T%C3%BCrkiye"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Navigation /> Haritada Aç
              </a>
            </Button>
          </div>

          <div className="reveal reveal-right group shadow-elegant relative min-h-[320px] overflow-hidden border border-border transition-colors duration-500 hover:border-gold/70 sm:min-h-[400px] lg:col-span-3">
            <iframe
              title="Sivas haritası"
              src="https://www.google.com/maps?q=Sivas,T%C3%BCrkiye&z=13&output=embed"
              className="absolute inset-0 h-full w-full grayscale-[60%] sepia-[20%] transition-[filter] duration-700 group-hover:grayscale-[20%] group-hover:sepia-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="eyebrow pointer-events-none absolute bottom-4 left-4 right-4 bg-charcoal px-3 py-2 text-[0.6rem] text-charcoal-foreground sm:right-auto">
              Konum: Sivas (kesin adres eklenecek)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
export function Footer() {
  return (
    <footer className="relative bg-charcoal pt-14 text-charcoal-foreground md:pt-16">
      <SectionSeam tone="light" />
      <div className="mx-auto grid max-w-7xl gap-10 px-6 pb-12 sm:grid-cols-2 md:grid-cols-3 lg:px-10">
        <div className="sm:col-span-2 md:col-span-1">
          <Logo />
          <p className="mt-5 max-w-xs text-sm font-light leading-relaxed text-charcoal-muted">
            Türk mutfağını zarif bir atmosferle buluşturan bir lokanta konsepti.
          </p>
        </div>
        <div>
          <p className="eyebrow text-gold">Bağlantılar</p>
          <ul className="mt-5 grid grid-cols-2 gap-3">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm font-light text-charcoal-foreground/80 transition-colors hover:text-gold"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow text-gold">Bizi Takip Edin</p>
          <p className="mt-5 flex items-center gap-3 text-sm font-light text-charcoal-foreground/80">
            <Instagram className="size-4 shrink-0 text-gold" /> [Sosyal medya hesabı eklenecek]
          </p>
          <p className="mt-3 text-sm font-light text-charcoal-foreground/80">
            [Telefon numarası eklenecek]
          </p>
        </div>
      </div>
      <div className="border-t border-charcoal-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-center text-xs text-charcoal-muted md:flex-row lg:px-10">
          <p>© {new Date().getFullYear()} Doğuş Lokantası · Sivas</p>
          <p className="text-gold/80">Bu site resmi olmayan bir konsept tasarım çalışmasıdır.</p>
        </div>
      </div>
    </footer>
  );
}
