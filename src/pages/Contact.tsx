import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";

const serviceOptions = [
  "Budget Friendly Home Interiors",
  "Turn Key Projects",
  "Commercial Interiors",
  "Premium Interiors",
  "Luxury Interiors",
];

const Contact = () => {
  const form = useScrollReveal();
  const addresses = useScrollReveal();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative h-[40vh] flex items-center justify-center bg-accent">
        <div className="relative z-10 text-center">
          <h1
            className="font-heading text-4xl md:text-6xl text-luxe-cream tracking-[0.15em]"
            style={{ lineHeight: "1.1" }}
          >
            Contact Us
          </h1>
          <p className="font-body text-sm tracking-[0.2em] uppercase text-luxe-cream/60 mt-4">
            Let's create something beautiful together
          </p>
        </div>
      </section>

      {/* Form + Details */}
      <section className="luxe-section bg-luxe-cream">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Form */}
            <div
              ref={form.ref}
              className={`transition-all duration-700 ${form.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <h2
                className="font-heading text-2xl md:text-3xl mb-8 text-foreground"
                style={{ lineHeight: "1.2" }}
              >
                Send Us a Message
              </h2>
              {submitted && (
                <div className="mb-6 p-4 bg-primary/10 rounded-sm font-body text-sm text-foreground">
                  Thank you! We'll get back to you shortly.
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  { name: "name", label: "Full Name", type: "text" },
                  { name: "email", label: "Email Address", type: "email" },
                  { name: "phone", label: "Phone Number", type: "tel" },
                ].map((f) => (
                  <div key={f.name}>
                    <label className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 block">
                      {f.label}
                    </label>
                    <input
                      type={f.type}
                      required
                      value={formData[f.name as keyof typeof formData]}
                      onChange={(e) =>
                        setFormData({ ...formData, [f.name]: e.target.value })
                      }
                      className="w-full bg-transparent border-b border-border py-3 font-body text-sm text-foreground focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                ))}
                {/* Service dropdown */}
                <div>
                  <label className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 block">
                    Service Interested In
                  </label>
                  <select
                    required
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-border py-3 font-body text-sm text-foreground focus:border-primary focus:outline-none transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 block">
                    Your Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-border py-3 font-body text-sm text-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                  />
                </div>
                <button type="submit" className="luxe-btn-primary">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact details */}
            <div
              ref={addresses.ref}
              className={`transition-all duration-700 delay-200 ${addresses.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <h2
                className="font-heading text-2xl md:text-3xl mb-8 text-foreground"
                style={{ lineHeight: "1.2" }}
              >
                Get in Touch
              </h2>
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Phone size={16} className="text-primary" />
                    <span className="font-body text-sm font-medium text-foreground">
                      Phone
                    </span>
                  </div>
                  <a
                    href="tel:+919000633655"
                    className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 9000633655
                  </a>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Mail size={16} className="text-primary" />
                    <span className="font-body text-sm font-medium text-foreground">
                      Address
                    </span>
                  </div>
                  <a
                    href="mailto:luxelivingconcepts2299@gmail.com"
                    className="font-body text-sm text-muted-foreground hover:text-primary transition-colors break-all"
                  >
                    luxelivingconcepts2299@gmail.com
                  </a>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Instagram size={16} className="text-primary" />
                    <span className="font-body text-sm font-medium text-foreground">
                      Instagram
                    </span>
                  </div>
                  <a
                    href="https://www.instagram.com/luxeliving_concepts"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    @luxeliving_concepts
                  </a>
                </div>

                {/* Addresses */}
                <div className="pt-4 space-y-6">
                  {[
                    {
                      title: "Corporate Office",
                      addr: "KVR Holdings, Plot #715, Road no. 36, Opp.Tata Croma, Jubilee Hills, Hyderabad, Telangana - 500033",
                    },
                    {
                      title: "Office Address",
                      addr: "Plot No.70, Woods Enclave Road no.5, Kompally, Hyderabad, Telangana - 500100",
                    },
                    {
                      title: "Factory Address",
                      addr: "Plot No 33-126/16,17 B, Rajiv Gandhi Nagar, Suraram, Hyderabad, Telangana - 500055",
                    },
                  ].map((a) => (
                    <div key={a.title}>
                      <div className="flex items-center gap-3 mb-2">
                        <MapPin size={16} className="text-primary" />
                        <span className="font-body text-sm font-medium text-foreground">
                          {a.title}
                        </span>
                      </div>
                      <p className="font-body text-sm text-muted-foreground">
                        {a.addr}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
