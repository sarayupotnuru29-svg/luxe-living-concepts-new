import aboutBg from "@/assets/about-bg.jpg";
import founderImg from "@/assets/founder.png";
import SectionHeading from "@/components/SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Mail, Phone } from "lucide-react";

const About = () => {
  const bio = useScrollReveal();
  const values = useScrollReveal();

  return (
    <main className="pt-20">
      {/* ─── Hero Banner ──────────────────────────────────────────────────────── */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <img
          src={aboutBg}
          alt="Design studio"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 luxe-overlay" />
        <div className="relative z-10 text-center">
          <h1
            className="font-heading text-4xl md:text-6xl text-luxe-cream tracking-[0.15em]"
            style={{ lineHeight: "1.1" }}
          >
            About Us
          </h1>
        </div>
      </section>

      {/* ─── Bio ──────────────────────────────────────────────────────────────── */}
      <section className="luxe-section bg-luxe-cream">
        <div className="container mx-auto max-w-5xl">
          <div
            ref={bio.ref}
            className={`
              grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start
              transition-all duration-700
              ${bio.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            `}
          >
            {/* ── Founder Photo ── */}
            <div className="relative">
              {/* Portrait frame */}
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={founderImg}
                  alt="Swate — Founder, Luxe Living Concepts"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Decorative offset border — luxury editorial touch */}
              <div
                className="absolute -bottom-4 -right-4 w-full h-full border border-primary/25 -z-10"
                aria-hidden="true"
              />
            </div>

            {/* ── Bio Text ── */}
            <div className="pt-0 md:pt-2">
              <h2
                className="font-heading text-3xl md:text-4xl text-foreground mb-2 text-balance"
                style={{ lineHeight: "1.15" }}
              >
                Swate
              </h2>
              <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-8">
                Founder
              </p>

              <div className="space-y-5 font-body text-sm md:text-base text-muted-foreground leading-relaxed">
                <p>
                  At Luxe Living Concepts, we believe every home tells a story.
                  Led by Swate, our studio brings together a deep passion for
                  interior design with an unwavering commitment to quality and
                  client satisfaction.
                </p>
                <p>
                  With 13 years of extensive experience in the industry, our
                  founder has a proven track record of crafting premium
                  residential and commercial spaces across Hyderabad,
                  Vijayawada, and Vizag. We specialize in transforming visions
                  into living realities through an approach that balances modern
                  aesthetics with timeless warmth — ensuring every space feels
                  uniquely yours.
                </p>
                <p>
                  From conceptual design to the final finishing touch, we manage
                  every detail with precision. Whether it's a budget-conscious
                  home makeover or an opulent luxury residence, our team
                  delivers interiors that exceed expectations and stand the test
                  of time.
                </p>
              </div>

              <div className="mt-8 space-y-3">
                <a
                  href="tel:+919000633655"
                  className="flex items-center gap-3 font-body text-sm text-foreground hover:text-primary transition-colors"
                >
                  <Phone size={16} className="text-primary" />
                  +91 9000633655
                </a>
                <a
                  href="mailto:luxelivingconcepts2299@gmail.com"
                  className="flex items-center gap-3 font-body text-sm text-foreground hover:text-primary transition-colors"
                >
                  <Mail size={16} className="text-primary" />
                  luxelivingconcepts2299@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Values ───────────────────────────────────────────────────────────── */}
      <section className="luxe-section bg-background">
        <div className="container mx-auto">
          <SectionHeading
            title="Our Values"
            subtitle="The principles that guide every design decision"
          />
          <div
            ref={values.ref}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {[
              {
                title: "Client First",
                desc: "Your lifestyle, preferences, and comfort define our creative direction and project execution.",
              },
              {
                title: "Quality",
                desc: "We never compromise on materials or craftsmanship, ensuring lasting beauty in every detail.",
              },
              {
                title: "Dedication",
                desc: "Dedication is at the core of our work where every project is approached with commitment and precision.",
              },
            ].map((v, i) => (
              <div
                key={v.title}
                className={`luxe-card p-10 text-center transition-all duration-700 ${
                  values.isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <h3
                  className="font-heading text-xl md:text-2xl mb-4 text-foreground"
                  style={{ lineHeight: "1.2" }}
                >
                  {v.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;