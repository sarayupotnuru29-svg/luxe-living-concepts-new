import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { X } from "lucide-react";
import galleryBg from "@/assets/ourProject.jpeg";

/**
 * Helper to generate image paths for each category.
 * It maps the names and counts provided to local asset paths.
 */
const generateImages = (
  category: string,
  count: number,
  fileNameBase: string,
) => {
  return Array.from({ length: count }, (_, i) => {
    const id = i + 1;
    return {
      src: new URL(`../assets/${fileNameBase}${id}.jpeg`, import.meta.url).href,
      alt: `${category} ${id}`,
      category: category,
    };
  });
};

const projectSections = [
  {
    title: "Main Entrance",
    images: generateImages("Main Entrance", 10, "maindoorentrence"),
  },
  {
    title: "Living Area",
    images: generateImages("Living Area", 14, "livingarea"),
  },
  { title: "TV Unit", images: generateImages("TV Unit", 13, "tvunit") },
  {
    title: "Pooja Room",
    images: generateImages("Pooja Room", 10, "poojaroom"),
  },
  {
    title: "Modular Kitchen",
    images: generateImages("Modular Kitchen", 11, "modulerkitchen"),
  },
  {
    title: "Crockery Unit",
    images: generateImages("Crockery Unit", 9, "Crockery"),
  },
  { title: "Dining", images: generateImages("Dining", 15, "dinning") },
  { title: "Bedroom", images: generateImages("Bedroom", 16, "bedroom") },
  { title: "Wardrobe", images: generateImages("Wardrobe", 17, "wadrob") },
  { title: "Vanity", images: generateImages("Vanity", 10, "Vanity") },
];

// Flatten all images for the lightbox indexing
const allImages = projectSections.flatMap((section) => section.images);

const Gallery = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const reveal = useScrollReveal(0.1);

  const openLightbox = (imgSrc: string) => {
    const index = allImages.findIndex((img) => img.src === imgSrc);
    setLightbox(index);
  };

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <img
          src={galleryBg}
          alt="Gallery backdrop"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 luxe-overlay" />
        <div className="relative z-10 text-center">
          <h1
            className="font-heading text-4xl md:text-6xl text-luxe-cream tracking-[0.15em]"
            style={{ lineHeight: "1.1" }}
          >
            Our Projects
          </h1>
        </div>
      </section>

      {/* Gallery Sections */}
      <section className="luxe-section bg-luxe-cream">
        <div className="container mx-auto">
          {projectSections.map((section, sectionIdx) => (
            <div
              key={section.title}
              className={sectionIdx !== 0 ? "mt-20" : ""}
            >
              <SectionHeading
                title={section.title}
                subtitle={`Exquisite designs for your ${section.title.toLowerCase()}`}
              />

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                {section.images.map((img, i) => (
                  <div
                    key={`${section.title}-${i}`}
                    className="gallery-item aspect-square cursor-pointer overflow-hidden rounded-sm group"
                    onClick={() => openLightbox(img.src)}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox / Image Preview */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-accent/98 flex items-center justify-center p-4 animate-fade-in backdrop-blur-md"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-luxe-cream/80 hover:text-luxe-cream transition-colors z-50"
          >
            <X size={32} />
          </button>

          <div className="relative max-w-5xl w-full flex flex-col items-center justify-center">
            <img
              src={allImages[lightbox].src}
              alt={allImages[lightbox].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-sm shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="mt-6 text-center">
              <p className="text-luxe-cream font-heading text-lg tracking-widest uppercase">
                {allImages[lightbox].category}
              </p>
              <p className="text-luxe-cream/50 font-body text-xs mt-1">
                Image {lightbox + 1} of {allImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Gallery;
