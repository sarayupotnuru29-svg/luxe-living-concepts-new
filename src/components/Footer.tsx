import { Link } from "react-router-dom";
import { ArrowUp, Instagram, Mail, Phone, Heart } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <img src={logo} alt="Luxe Living Concepts" className="h-24 w-auto mb-4 brightness-[1.8] contrast-125" />
            <p className="text-sm font-body opacity-80 leading-relaxed">
              We design your dream home with precision, luxury, and warmth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg mb-6 tracking-wider">Quick Links</h4>
            <ul className="space-y-3 font-body text-sm opacity-80">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/services", label: "Services" },
                { to: "/gallery", label: "Projects" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="hover:opacity-100 transition-opacity duration-300"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-lg mb-6 tracking-wider">Services</h4>
            <ul className="space-y-3 font-body text-sm opacity-80">
              {[
                "Budget Friendly Interiors",
                "Turn Key Projects",
                "Commercial Spaces",
                "Premium Interiors",
                "Luxury Interiors",
              ].map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="hover:opacity-100 transition-opacity duration-300"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg mb-6 tracking-wider">Contact</h4>
            <ul className="space-y-4 font-body text-sm opacity-80">
              <li className="flex items-center gap-3">
                <Phone size={16} />
                <a href="tel:+919000633655">+91 9000633655</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} />
                <a href="mailto:luxelivingconcepts2299@gmail.com" className="break-all">
                  luxelivingconcepts2299@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Instagram size={16} />
                <a
                  href="https://www.instagram.com/luxeliving_concepts"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @luxeliving_concepts
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/30 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="font-body text-xs opacity-60 tracking-wider">
            © {new Date().getFullYear()} Luxe Living Concepts. All rights reserved.
          </p>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs tracking-[0.15em] uppercase font-body opacity-80 hover:opacity-100 transition-all duration-300 group"
          >
            Back to top
            <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;