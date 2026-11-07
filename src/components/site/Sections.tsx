import { useEffect, useState } from "react";
import { ChevronDown, Clock, MapPin, Phone, Mail, X, Navigation, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Ornament, SectionHeading, Logo } from "./Ornament";
import { NAV_LINKS } from "./Navbar";

import hero from "@/assets/hero.jpg";
import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import dish3 from "@/assets/dish-3.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import interior from "@/assets/interior.jpg";

/* ---------------- Hero ---------------- */
export function Hero() {
  return (
    <section id="anasayfa" className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-charcoal">
      <img
        src={hero}
        alt="Mum ışığında hazırlanmış zengin bir Türk sofrası"
        width={1920}
        height={1088}
        className="animate-hero-zoom absolute inset-0 h-full w-full object-cover"
      />
      <div className="bg-hero-overlay absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="eyebrow animate-fade-up text-gold" style={{ animationDelay: "0.3s" }}>
          Sivas · Türkiye
        </p>
        <h1
          className="animate-fade-up mt-6 text-6xl leading-[0.95] text-charcoal-foreground sm:text-7xl md:text-8xl lg:text-9xl"
          style={{ animationDelay: "0.5s" }}
        >
          Doğuş
          <span className="block font-display text-4xl italic text-gold sm:text-5xl md:text-6xl">
            Lokantası
          </span>
        </h1>
        <div className="animate-fade-up" style={{ animationDelay: "0.8s" }}>
          <Ornament className="mt-8" />
          <p className="mx-auto mt-6 max-w-xl text-base font-light leading-relaxed text-charcoal-foreground/80 md:text-lg">
            Türk mutfağının sıcaklığını zarif bir atmosferle buluşturan bir sofra deneyimi.
          </p>
        </div>
        <div
          className="animate-fade-up mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          style={{ animationDelay: "1.1s" }}
        >
          <Button asChild variant="hero" size="xl">
            <a href="#lezzetler">Lezzetleri Keşfet</a>
          </Button>
          <Button asChild variant="heroOutline" size="xl">
            <a href="#iletisim">Bize Ulaşın</a>
          </Button>
        </div>
      </div>

      <a
        href="#hakkimizda"
        aria-label="Aşağı kaydır"
        className="animate-scroll-cue absolute bottom-8 left-1/2 -translate-x-1/2 text-charcoal-foreground/70 hover:text-gold"
      >
        <ChevronDown className="size-7" />
      </a>
    </section>
  );
}

/* ---------------- About ---------------- */
export function About() {
  return (
    <section id="hakkimizda" className="relative overflow-hidden bg-background py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:gap-24 lg:px-10">
        <div className="reveal relative order-2 lg:order-1">
          <div className="absolute -left-4 -top-4 h-full w-full border border-primary/30 md:-left-6 md:-top-6" />
          <img
            src={dish2}
            alt="Bakır kasede servis edilen sıcak bir çorba"
            width={1024}
            height={1280}
            loading="lazy"
            className="shadow-elegant relative aspect-[4/5] w-full object-cover"
          />
          <div className="bg-burgundy-gradient shadow-burgundy absolute -bottom-8 -right-4 hidden w-52 p-6 text-primary-foreground md:block lg:-right-10">
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
          <div className="reveal mt-8 space-y-5 text-base font-light leading-relaxed text-muted-foreground md:text-lg">
            <p>
              Doğuş Lokantası, Türk mutfağının köklü lezzetlerini sıcak ve şık bir ortamda
              sunmayı hedefleyen bir lokanta konseptidir.
            </p>
            <p className="border-l-2 border-primary/40 pl-5 italic">
              [Restoranın hikâyesi, kuruluş bilgileri ve mutfak anlayışı burada yer alacaktır.
              Bu alan doğrulanmış bilgilerle doldurulmalıdır.]
            </p>
          </div>
          <div className="reveal mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
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
    <section id="lezzetler" className="relative bg-charcoal py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Öne Çıkan Lezzetler"
          tone="light"
          title={
            <>
              Sofranın <em className="text-gold">yıldızları</em>
            </>
          }
        />
        <p className="reveal mx-auto mt-6 max-w-xl text-center font-light text-charcoal-muted">
          Menü bilgileri ve fiyatlar henüz eklenmemiştir. Görseller temsilidir.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {DISHES.map((d, i) => (
            <article
              key={i}
              className="reveal group relative overflow-hidden bg-charcoal-soft"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={d.img}
                  alt={d.alt}
                  width={1024}
                  height={1280}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/10 to-transparent opacity-90" />
                <span className="eyebrow absolute left-5 top-5 bg-primary px-3 py-1.5 text-[0.6rem] text-primary-foreground">
                  {d.category}
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="flex items-end justify-between gap-4 border-t border-gold/30 pt-4">
                  <div>
                    <h3 className="text-2xl text-charcoal-foreground md:text-3xl">[Yemek Adı]</h3>
                    <p className="mt-1 text-sm font-light text-charcoal-muted">
                      [Kısa açıklama eklenecek]
                    </p>
                  </div>
                  <p className="font-display text-xl text-gold">[Fiyat]</p>
                </div>
              </div>
            </article>
          ))}
        </div>
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
  { src: hero, alt: "Mum ışığında Türk sofrası", w: 1920, h: 1088, span: "md:col-span-2" },
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
    <section id="galeri" className="bg-background py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Galeri"
          title={
            <>
              Göze de <em className="text-primary">hitap eden</em> lezzetler
            </>
          }
        />

        <div className="mt-16 grid auto-rows-[220px] grid-cols-2 gap-3 md:auto-rows-[260px] md:grid-cols-4 md:gap-4">
          {GALLERY.map((g, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setOpenIdx(i)}
              className={cn(
                "reveal group relative overflow-hidden focus-visible:outline-2 focus-visible:outline-primary",
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
              <div className="absolute inset-0 flex items-end bg-primary-deep/0 p-4 transition-colors duration-500 group-hover:bg-primary-deep/50">
                <span className="translate-y-3 text-left font-display text-lg italic text-primary-foreground opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {g.alt}
                </span>
              </div>
            </button>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">
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
            className="absolute right-5 top-5 text-charcoal-foreground hover:text-gold"
            aria-label="Kapat"
          >
            <X className="size-8" />
          </button>
          <img
            src={GALLERY[openIdx].src}
            alt={GALLERY[openIdx].alt}
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
    <section id="atmosfer" className="relative overflow-hidden bg-primary-deep">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[420px] overflow-hidden lg:min-h-[720px]">
          <img
            src={interior}
            alt="Bordo kadife sandalyeler ve sıcak ışıklarla zarif bir yemek salonu"
            width={1120}
            height={1072}
            loading="lazy"
            className="reveal absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="flex items-center px-6 py-20 md:px-16 lg:px-20">
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
            <p className="reveal mt-8 font-light leading-relaxed text-charcoal-foreground/80 md:text-lg">
              Bordo tonlar, yumuşak ışıklar ve özenle kurulmuş masalarla sofrayı bir buluşma
              anına dönüştürmeyi amaçlayan bir ortam tasarımı.
            </p>
            <ul className="reveal mt-10 space-y-4">
              {[
                "Sıcak ve zarif iç mekân",
                "Özenle kurulmuş masalar",
                "[Salon kapasitesi ve ek hizmetler eklenecek]",
              ].map((t) => (
                <li key={t} className="flex items-center gap-4 text-charcoal-foreground">
                  <span className="h-px w-8 bg-gold" />
                  <span className="font-light tracking-wide">{t}</span>
                </li>
              ))}
            </ul>
            <p className="reveal mt-8 text-xs text-charcoal-foreground/50">
              Görsel temsilidir.
            </p>
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
    <section id="iletisim" className="bg-background py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="İletişim & Konum"
          title={
            <>
              Sizi <em className="text-primary">ağırlamak</em> için
            </>
          }
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-5">
          <div className="reveal space-y-4 lg:col-span-2">
            {CONTACT_ITEMS.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="group flex items-start gap-5 border border-border bg-card p-6 transition-all duration-500 hover:border-primary/50 hover:shadow-elegant"
              >
                <span className="flex size-11 shrink-0 items-center justify-center bg-primary text-primary-foreground transition-transform duration-500 group-hover:rotate-6">
                  <Icon className="size-5" />
                </span>
                <div>
                  <p className="eyebrow text-[0.62rem] text-primary">{label}</p>
                  <p className="mt-1.5 font-light text-foreground">{value}</p>
                </div>
              </div>
            ))}
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

          <div className="reveal shadow-elegant relative min-h-[380px] overflow-hidden border border-border lg:col-span-3">
            <iframe
              title="Sivas haritası"
              src="https://www.google.com/maps?q=Sivas,T%C3%BCrkiye&z=13&output=embed"
              className="absolute inset-0 h-full w-full grayscale-[60%] sepia-[20%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="eyebrow absolute left-4 top-4 bg-charcoal px-3 py-2 text-[0.6rem] text-charcoal-foreground">
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
    <footer className="bg-charcoal pt-20 text-charcoal-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-16 md:grid-cols-3 lg:px-10">
        <div>
          <Logo />
          <p className="mt-6 max-w-xs text-sm font-light leading-relaxed text-charcoal-muted">
            Türk mutfağını zarif bir atmosferle buluşturan bir lokanta konsepti.
          </p>
        </div>
        <div>
          <p className="eyebrow text-gold">Bağlantılar</p>
          <ul className="mt-6 grid grid-cols-2 gap-3">
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
          <p className="mt-6 flex items-center gap-3 text-sm font-light text-charcoal-foreground/80">
            <Instagram className="size-4 text-gold" /> [Sosyal medya hesabı eklenecek]
          </p>
          <p className="mt-3 text-sm font-light text-charcoal-foreground/80">
            [Telefon numarası eklenecek]
          </p>
        </div>
      </div>
      <div className="border-t border-charcoal-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-center text-xs text-charcoal-muted md:flex-row lg:px-10">
          <p>© {new Date().getFullYear()} Doğuş Lokantası · Sivas</p>
          <p className="text-gold/80">
            Bu site resmi olmayan bir konsept tasarım çalışmasıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
