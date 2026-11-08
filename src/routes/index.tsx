import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import {
  Hero,
  WordBand,
  About,
  FeaturedDishes,
  Gallery,
  Atmosphere,
  Contact,
  Footer,
} from "@/components/site/Sections";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Doğuş Lokantası | Sivas – Türk Mutfağı (Konsept)" },
      {
        name: "description",
        content:
          "Doğuş Lokantası için hazırlanmış resmi olmayan konsept web sitesi: Sivas'ta zarif bir Türk mutfağı deneyimi.",
      },
      { property: "og:title", content: "Doğuş Lokantası | Sivas" },
      {
        property: "og:description",
        content: "Sivas'ta Türk mutfağının sıcaklığını zarif bir atmosferle buluşturan lokanta konsepti.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <WordBand />
        <About />
        <FeaturedDishes />
        <Gallery />
        <Atmosphere />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
