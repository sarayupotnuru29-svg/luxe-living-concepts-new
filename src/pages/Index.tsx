// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { ArrowRight, MapPin, ShieldCheck, Clock, Box } from "lucide-react";
// import heroBg from "@/assets/hero-bg.png";
// import heroBgMobile from "@/assets/luxemob.jpg";
// import SectionHeading from "@/components/SectionHeading";
// import { useScrollReveal } from "@/hooks/useScrollReveal";

// import p1 from "@/assets/images/projects/project-1.jpg";
// import p9 from "@/assets/images/projects/project-9.jpg";
// import p10 from "@/assets/images/projects/project-10.jpg";
// import p11 from "@/assets/images/projects/project-11.jpg";

// const heroImages = [p1, p9, p10, p11];

// const specializations = [
//   {
//     title: "Budget Friendly Home Interiors",
//     desc: "Beautiful designs that fit your budget without losing quality.",
//     icon: "✦",
//   },
//   {
//     title: "Premium Interiors",
//     desc: "Premium materials and expert design for stylish living with quality you can feel.",
//     icon: "★",
//   },
//   {
//     title: "Luxury Interiors",
//     desc: "The pinnacle of residential design — rare materials, master artisans, and timeless elegance.",
//     icon: "✵",
//   },
//   {
//     title: "Turn Key Projects",
//     desc: "Complete end-to-end interior solutions — from concept to handover, we manage everything.",
//     icon: "◆",
//   },
//   {
//     title: "Commercial Interiors",
//     desc: "Sophisticated commercial space that reflect your identity and inspire productivity.",
//     icon: "▣",
//   },
// ];

// const locations = ["Hyderabad", "Vijayawada", "Vizag"];

// const Index = () => {
//   const [heroLoaded, setHeroLoaded] = useState(false);
//   const specs = useScrollReveal();
//   const preview = useScrollReveal();

//   useEffect(() => {
//     const t = setTimeout(() => setHeroLoaded(true), 100);
//     return () => clearTimeout(t);
//   }, []);

//   return (
//     <main>
//       {/* ─── Hero Section ─────────────────────────────────────────────────────── */}
//       {/*
//         Mobile  (<768px): heroBgMobile — portrait crop, block flow (no black bars).
//         Desktop (≥768px): heroBg      — landscape, absolute + object-cover fill.
//       */}
//       <section className="relative overflow-hidden mt-24 md:mt-0 md:h-[100dvh]">
//         {/* Art-directed picture: browser picks the right source automatically */}
//         <picture>
//           {/* Desktop: landscape hero — only loads on md+ */}
//           <source srcSet={heroBg} media="(min-width: 768px)" />
//           {/* Mobile fallback: portrait hero */}
//           <img
//             src={heroBgMobile}
//             alt="Luxury interior living space"
//             className={`
//               block w-full h-auto
//               md:absolute md:inset-0 md:h-full md:object-cover md:object-center
//               transition-opacity duration-1000
//               ${heroLoaded ? "opacity-100" : "opacity-0"}
//             `}
//             onLoad={() => setHeroLoaded(true)}
//           />
//         </picture>

//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/30 md:luxe-overlay" />

//         {/* CTA */}
//         <div className="absolute inset-0 z-10 flex items-center justify-center px-6">
//           <Link
//             to="/contact"
//             className={`
//               luxe-btn-primary inline-flex items-center mt-24
//               transition-all duration-1000 delay-500 shadow-2xl
//               ${heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
//             `}
//           >
//             Get a free Quote
//             <ArrowRight size={18} className="ml-2" />
//           </Link>
//         </div>
//       </section>

//       {/* ─── Specializations ──────────────────────────────────────────────────── */}
//       <section className="luxe-section bg-luxe-cream">
//         <div className="container mx-auto">
//           <SectionHeading
//             title="Our Specialization"
//             subtitle="Crafting spaces that resonate with your lifestyle — across every budget and vision."
//           />

//           <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-16">
//             {[
//               { icon: <Clock size={16} />, text: "45 Days Move-in" },
//               { icon: <ShieldCheck size={16} />, text: "10 Years Warranty" },
//               { icon: <Box size={16} />, text: "Free 3D Preview" },
//             ].map((badge, idx) => (
//               <div
//                 key={idx}
//                 className="flex items-center gap-2 px-4 py-2.5 md:px-6 rounded-full
//                   bg-primary text-white text-[9px] md:text-[11px] font-body
//                   tracking-[0.2em] uppercase shadow-lg border border-primary/10"
//               >
//                 {badge.icon}
//                 {badge.text}
//               </div>
//             ))}
//           </div>

//           <div
//             ref={specs.ref}
//             className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
//           >
//             {specializations.map((s, i) => (
//               <div
//                 key={s.title}
//                 className={`luxe-card p-10 text-center transition-all duration-700
//                   ${specs.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
//                   ${i >= 3 ? "md:col-span-1 md:translate-x-[50%]" : ""}`}
//                 style={{ transitionDelay: `${i * 120}ms` }}
//               >
//                 <span className="text-3xl text-primary mb-4 block">
//                   {s.icon}
//                 </span>
//                 <h3
//                   className="font-heading text-xl md:text-2xl mb-4 text-foreground"
//                   style={{ lineHeight: "1.2" }}
//                 >
//                   {s.title}
//                 </h3>
//                 <p className="font-body text-sm text-muted-foreground leading-relaxed">
//                   {s.desc}
//                 </p>
//               </div>
//             ))}
//           </div>

//           <div className="flex flex-wrap justify-center gap-6">
//             {locations.map((loc) => (
//               <span
//                 key={loc}
//                 className="flex items-center gap-2 font-body text-sm tracking-wider text-muted-foreground"
//               >
//                 <MapPin size={14} className="text-primary" />
//                 {loc}
//               </span>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ─── Projects Preview ─────────────────────────────────────────────────── */}
//       <section className="luxe-section bg-luxe-cream border-t border-border/50">
//         <div className="container mx-auto">
//           <SectionHeading
//             title="Featured Projects"
//             subtitle="A glimpse into the spaces we've transformed"
//           />
//           <div
//             ref={preview.ref}
//             className="grid grid-cols-2 md:grid-cols-4 gap-4"
//           >
//             {heroImages.map((img, i) => (
//               <div
//                 key={i}
//                 className={`gallery-item aspect-[3/4] transition-all duration-700
//                   ${preview.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
//                 style={{ transitionDelay: `${i * 100}ms` }}
//               >
//                 <img
//                   src={img}
//                   alt={`Interior project ${i + 1}`}
//                   loading="lazy"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             ))}
//           </div>
//           <div className="text-center mt-12">
//             <Link to="/gallery" className="luxe-btn-primary">
//               View All Projects
//               <ArrowRight size={16} className="ml-2" />
//             </Link>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Index;
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, ShieldCheck, Clock, Box } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";
import heroBgMobile from "@/assets/luxemob.jpg";
import SectionHeading from "@/components/SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

import p1 from "@/assets/images/projects/project-1.jpg";
import p9 from "@/assets/images/projects/project-9.jpg";
import p10 from "@/assets/images/projects/project-10.jpg";
import p11 from "@/assets/images/projects/project-11.jpg";

const heroImages = [p1, p9, p10, p11];

const specializations = [
  {
    title: "Budget Friendly Home Interiors",
    desc: "Beautiful designs that fit your budget without losing quality.",
    icon: "✦",
  },
  {
    title: "Premium Interiors",
    desc: "Premium materials and expert design for stylish living with quality you can feel.",
    icon: "★",
  },
  {
    title: "Luxury Interiors",
    desc: "The pinnacle of residential design — rare materials, master artisans, and timeless elegance.",
    icon: "✵",
  },
  {
    title: "Turn Key Projects",
    desc: "Complete end-to-end interior solutions — from concept to handover, we manage everything.",
    icon: "◆",
  },
  {
    title: "Commercial Interiors",
    desc: "Sophisticated commercial space that reflect your identity and inspire productivity.",
    icon: "▣",
  },
];

const locations = ["Hyderabad", "Vijayawada", "Vizag"];

const Index = () => {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const specs = useScrollReveal();
  const preview = useScrollReveal();

  useEffect(() => {
    const t = setTimeout(() => setHeroLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Shared card class — extracted to avoid repetition
  const cardClass = (i: number, visible: boolean) =>
    `luxe-card p-8 lg:p-10 text-center transition-all duration-700 ${
      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
    }`;

  return (
    <main>
      {/* ─── Hero Section ─────────────────────────────────────────────────────── */}
      {/*
        Mobile  (<768px): heroBgMobile — block flow, natural height, zero black bars.
        Tablet+ (≥768px): heroBg      — absolute + object-cover full viewport.
      */}
      <section className="relative overflow-hidden mt-24 md:mt-0 md:h-[100dvh]">
        <picture>
          <source srcSet={heroBg} media="(min-width: 768px)" />
          <img
            src={heroBgMobile}
            alt="Luxury interior living space"
            className={`
              block w-full h-auto
              md:absolute md:inset-0 md:h-full md:object-cover md:object-center
              transition-opacity duration-1000
              ${heroLoaded ? "opacity-100" : "opacity-0"}
            `}
            onLoad={() => setHeroLoaded(true)}
          />
        </picture>

        <div className="absolute inset-0 bg-black/30 md:luxe-overlay" />

        <div className="absolute inset-0 z-10 flex items-center justify-center px-6">
          <Link
            to="/contact"
            className={`
              luxe-btn-primary inline-flex items-center mt-24
              transition-all duration-1000 delay-500 shadow-2xl
              ${heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
            `}
          >
            Get a free Quote
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>

      {/* ─── Specializations ──────────────────────────────────────────────────── */}
      <section className="luxe-section bg-luxe-cream">
        <div className="container mx-auto">
          <SectionHeading
            title="Our Specialization"
            subtitle="Crafting spaces that resonate with your lifestyle — across every budget and vision."
          />

          {/* Feature Badges */}
          <div className="flex flex-wrap justify-center gap-3 lg:gap-6 mb-12 lg:mb-16">
            {[
              { icon: <Clock size={16} />, text: "45 Days Move-in" },
              { icon: <ShieldCheck size={16} />, text: "10 Years Warranty" },
              { icon: <Box size={16} />, text: "Free 3D Preview" },
            ].map((badge, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 px-4 py-2.5 md:px-5 lg:px-6 rounded-full
                  bg-primary text-white text-[9px] md:text-[10px] lg:text-[11px] font-body
                  tracking-[0.2em] uppercase shadow-lg border border-primary/10"
              >
                {badge.icon}
                {badge.text}
              </div>
            ))}
          </div>

          {/* ── Specialization Cards ──
              FIX: Replaced md:translate-x-[50%] hack (caused hover shift) with
              two separate grids — top row of 3, bottom row of 2 centered.
              Tablet (md): 2 cols → smooth step between mobile and desktop.
              Desktop (lg): top row 3 cols, bottom row 2 cols centered.
          */}
          <div ref={specs.ref} className="mb-12 lg:mb-16">
            {/* Row 1 — 3 cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-6 lg:mb-8">
              {specializations.slice(0, 3).map((s, i) => (
                <div
                  key={s.title}
                  className={cardClass(i, specs.isVisible)}
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  <span className="text-3xl text-primary mb-4 block">
                    {s.icon}
                  </span>
                  <h3
                    className="font-heading text-xl md:text-xl lg:text-2xl mb-4 text-foreground"
                    style={{ lineHeight: "1.2" }}
                  >
                    {s.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Row 2 — 2 cards, centered under row 1 */}
            {/*
              lg: width = 2/3 of container (matches 2 of 3 columns above), centered.
              md: full width 2-col grid.
              mobile: stacked single column.
            */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 lg:w-2/3 mx-auto">
              {specializations.slice(3).map((s, i) => (
                <div
                  key={s.title}
                  className={cardClass(i + 3, specs.isVisible)}
                  style={{ transitionDelay: `${(i + 3) * 120}ms` }}
                >
                  <span className="text-3xl text-primary mb-4 block">
                    {s.icon}
                  </span>
                  <h3
                    className="font-heading text-xl md:text-xl lg:text-2xl mb-4 text-foreground"
                    style={{ lineHeight: "1.2" }}
                  >
                    {s.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Locations */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {locations.map((loc) => (
              <span
                key={loc}
                className="flex items-center gap-2 font-body text-sm tracking-wider text-muted-foreground"
              >
                <MapPin size={14} className="text-primary" />
                {loc}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Projects Preview ─────────────────────────────────────────────────── */}
      <section className="luxe-section bg-luxe-cream border-t border-border/50">
        <div className="container mx-auto">
          <SectionHeading
            title="Featured Projects"
            subtitle="A glimpse into the spaces we've transformed"
          />
          {/*
            Mobile:  2 cols
            Tablet:  2 cols (4 is too cramped at 768px)
            Desktop: 4 cols
          */}
          <div
            ref={preview.ref}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4"
          >
            {heroImages.map((img, i) => (
              <div
                key={i}
                className={`gallery-item aspect-[3/4] transition-all duration-700
                  ${preview.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <img
                  src={img}
                  alt={`Interior project ${i + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-10 md:mt-12">
            <Link to="/gallery" className="luxe-btn-primary">
              View All Projects
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
