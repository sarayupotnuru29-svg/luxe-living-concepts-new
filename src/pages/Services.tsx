import { useState } from "react";
import servicesBg from "@/assets/services-bg.jpg";
import serviceBudget from "@/assets/service-budget.jpg";
import serviceTurnkey from "@/assets/turnkey-profilepic.jpeg";
import serviceCommercial from "@/assets/service-commercial.jpg";
import servicePremium from "@/assets/service-premium.jpg";
import serviceLuxury from "@/assets/luxury-profilepic.jpeg";
import processImg from "@/assets/process.jpeg";
import SectionHeading from "@/components/SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  ArrowRight,
  Clock,
  MapPin,
  Phone,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

/**
 * Helper to generate image paths for each service gallery
 */
const generateGallery = (count: number, fileNameBase: string) => {
  return Array.from({ length: count }, (_, i) => {
    return new URL(`../assets/${fileNameBase}${i + 1}.jpeg`, import.meta.url)
      .href;
  });
};

const services = [
  {
    title: "Budget Friendly Interiors",
    desc: "Beautiful designs that fit your budget without losing quality.₹5,99,000/-2BHK: (2 wardrobes + dressing, 1 tv unit, modular kitchen with crockery unit, shoe rack, ceiling (lights and electrical excluded).₹6,99,000/-3BHK: (3 wardrobes + dressing, 1 tv unit, modular kitchen with crockery unit, shoe rack, ceiling (lights and electrical excluded).",
    image: serviceBudget,
    gallery: generateGallery(7, "budget"),
  },
  {
    title: "Premium Interiors",
    desc: "Premium laminates, customized designs as per your space. A step beyond the ordinary. Our premium service focuses on bespoke craftsmanship, superior finishes, and curated color palettes. We balance modern aesthetics with comfort to design spaces that feel personalized, refined, and distinctly high-end.",
    image: servicePremium,
    gallery: generateGallery(9, "premium"),
  },
  {
    title: "Luxury Interiors",
    desc: "Customized designs as per your space. The zenith of interior artistry. We bring together master artisans, Exotic materials like veneer and marbles and innovative design concepts. These spaces are crafted to be timeless masterpieces of opulence, prestige, and unparalleled elegance.",
    image: serviceLuxury,
    gallery: generateGallery(9, "Luxury"),
  },
  {
    title: "Turn Key Projects",
    desc: "A comprehensive, stress-free journey from empty shell to move-in ready. We manage every vertical—civil work, electrical, plumbing, bespoke carpentry, and decor styling. You provide the vision; we handle the complexity and deliver the keys.",
    image: serviceTurnkey,
    gallery: generateGallery(2, "turnkey"),
  },
  {
    title: "Commercial Spaces",
    desc: "We provide complete commercial interior solutions designed to match your business needs. From high-productivity corporate offices to Cafés & Restaurants  we create professional spaces that leave a lasting impression on clients and inspire your workforce.",
    image: serviceCommercial,
    gallery: generateGallery(9, "Commerial"),
  },
];

const Services = () => {
  const cards = useScrollReveal();
  const processReveal = useScrollReveal();
  const info = useScrollReveal();

  const [activeGallery, setActiveGallery] = useState<string[] | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openGallery = (gallery: string[]) => {
    setActiveGallery(gallery);
    setCurrentIndex(0);
  };

  const nextImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeGallery)
      setCurrentIndex((prev) => (prev + 1) % activeGallery.length);
  };

  const prevImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeGallery)
      setCurrentIndex(
        (prev) => (prev - 1 + activeGallery.length) % activeGallery.length,
      );
  };

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <img
          src={servicesBg}
          alt="Interior design concepts"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 luxe-overlay" />
        <div className="relative z-10 text-center">
          <h1
            className="font-heading text-4xl md:text-6xl text-luxe-cream tracking-[0.15em]"
            style={{ lineHeight: "1.1" }}
          >
            Our Services
          </h1>
        </div>
      </section>

      {/* Services list */}
      <section className="luxe-section bg-luxe-cream">
        <div className="container mx-auto max-w-5xl">
          <SectionHeading
            title="What We Offer"
            subtitle="Complete interior solutions for every scale and style"
          />
          <div ref={cards.ref} className="space-y-8">
            {services.map((s, i) => (
              <div
                key={s.title}
                className={`luxe-card overflow-hidden flex flex-col md:flex-row md:items-stretch transition-all duration-700 shadow-lg ${
                  cards.isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="md:w-72 h-64 md:h-auto shrink-0 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
                  <h3 className="font-heading text-2xl md:text-3xl mb-4 text-foreground tracking-tight">
                    {s.title}
                  </h3>
                  <p className="font-body text-base text-muted-foreground leading-relaxed mb-6">
                    {s.desc}
                  </p>

                  <button
                    onClick={() => openGallery(s.gallery)}
                    className="w-fit flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3 rounded-sm text-xs font-bold tracking-[0.2em] uppercase shadow-md hover:bg-primary/90 hover:gap-5 transition-all"
                  >
                    View More <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process Section */}
      <section className="luxe-section bg-white border-t border-luxe-cream/20">
        <div className="container mx-auto max-w-6xl">
          <SectionHeading
            title="Our Design Process"
            subtitle="From the first sketch to the final reveal"
          />
          <div
            ref={processReveal.ref}
            className={`transition-all duration-1000 ease-out flex justify-center ${
              processReveal.isVisible
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95"
            }`}
          >
            <div className="w-full rounded-lg overflow-hidden shadow-2xl border border-luxe-cream/30">
              <img
                src={processImg}
                alt="Our detailed design and execution process"
                className="w-full h-auto object-contain md:object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Lightbox */}
      {activeGallery && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setActiveGallery(null)}
        >
          <button className="absolute top-8 right-8 text-white/70 hover:text-white hover:rotate-90 transition-all duration-300">
            <X size={40} />
          </button>

          <div className="relative w-full max-w-6xl h-[85vh] flex items-center justify-center">
            {activeGallery.length > 1 && (
              <>
                <button
                  onClick={prevImg}
                  className="absolute left-4 md:left-8 z-20 p-4 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-all border border-white/20"
                >
                  <ChevronLeft size={36} strokeWidth={1.5} />
                </button>
                <button
                  onClick={nextImg}
                  className="absolute right-4 md:right-8 z-20 p-4 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-all border border-white/20"
                >
                  <ChevronRight size={36} strokeWidth={1.5} />
                </button>
              </>
            )}

            <img
              src={activeGallery[currentIndex]}
              className="max-w-full max-h-full object-contain shadow-[0_0_50px_rgba(0,0,0,0.5)] rounded-sm"
              onClick={(e) => e.stopPropagation()}
            />

            <div className="absolute -bottom-12 flex flex-col items-center">
              <div className="flex gap-2 mb-2">
                {activeGallery.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-1 w-4 rounded-full transition-all ${idx === currentIndex ? "bg-primary w-8" : "bg-white/20"}`}
                  />
                ))}
              </div>
              <span className="text-white/60 text-xs tracking-[0.3em] uppercase">
                {currentIndex + 1} / {activeGallery.length}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Business info */}
      <section className="luxe-section bg-accent text-accent-foreground">
        <div className="container mx-auto max-w-4xl">
          <SectionHeading title="Business Hours & Locations" light />
          <div
            ref={info.ref}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            <div
              className={`transition-all duration-700 ${info.isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}
            >
              <div className="flex items-center gap-3 mb-6">
                <Clock size={20} className="text-primary" />
                <h3 className="font-heading text-2xl text-luxe-cream">
                  Working Hours
                </h3>
              </div>
              <ul className="font-body text-base text-luxe-cream/70 space-y-3">
                <li className="flex justify-between border-b border-luxe-cream/10 pb-2">
                  <span>Monday – Saturday</span>
                  <span className="text-luxe-cream">10:00 AM – 7:00 PM</span>
                </li>
                <li className="flex justify-between border-b border-luxe-cream/10 pb-2">
                  <span>Sunday</span>
                  <span className="text-luxe-cream">By Appointment</span>
                </li>
              </ul>

              <div className="flex items-center gap-3 mt-12 mb-6">
                <Phone size={20} className="text-primary" />
                <h3 className="font-heading text-2xl text-luxe-cream">
                  Contact
                </h3>
              </div>
              <ul className="font-body text-base text-luxe-cream/70 space-y-2">
                <li className="hover:text-primary transition-colors cursor-pointer">
                  +91 9000633655
                </li>
                <li className="hover:text-primary transition-colors cursor-pointer">
                  luxelivingconcepts2299@gmail.com
                </li>
              </ul>
            </div>

            <div
              className={`transition-all duration-700 delay-200 ${info.isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}`}
            >
              <div className="flex items-center gap-3 mb-6">
                <MapPin size={20} className="text-primary" />
                <h3 className="font-heading text-2xl text-luxe-cream">
                  Our Locations
                </h3>
              </div>
              <ul className="font-body text-base text-luxe-cream/70 space-y-6">
                <li className="group">
                  <strong className="text-luxe-cream text-lg block group-hover:text-primary transition-colors">
                    Hyderabad
                  </strong>
                </li>
                <li className="group">
                  <strong className="text-luxe-cream text-lg block group-hover:text-primary transition-colors">
                    Vijayawada
                  </strong>
                </li>
                <li className="group">
                  <strong className="text-luxe-cream text-lg block group-hover:text-primary transition-colors">
                    Vizag
                  </strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;