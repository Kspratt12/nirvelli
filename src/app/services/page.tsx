"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const serviceCategories = [
  {
    title: "Facials & Skin Care",
    description: "Clinically driven treatments using Osmosis Medical Skin Care products.",
    services: [
      { name: "Customized Facial (55 min)", price: "From $89" },
      { name: "Chemical Peel", price: "From $95" },
      { name: "Microdermabrasion", price: "From $110" },
      { name: "Dermaplaning", price: "From $85" },
      { name: "HydraFacial", price: "From $150" },
      { name: "LED Light Therapy Add-On", price: "$35" },
    ],
  },
  {
    title: "Massage Therapy",
    description: "Award-winning massage therapy since 2003. Voted Best Massage Therapist by Cary News.",
    services: [
      { name: "Swedish Massage (50 min)", price: "From $89" },
      { name: "Swedish Massage (80 min)", price: "From $120" },
      { name: "Deep Tissue Massage (50 min)", price: "From $99" },
      { name: "Deep Tissue Massage (80 min)", price: "From $135" },
      { name: "Hot Stone Massage Upgrade", price: "+$20" },
      { name: "Aromatherapy Upgrade", price: "+$15" },
      { name: "Medical Massage", price: "From $99" },
      { name: "Thai Reflexology", price: "From $70" },
    ],
  },
  {
    title: "Laser Treatments",
    description: "State-of-the-art laser technology for permanent results.",
    services: [
      { name: "Laser Hair Removal - Small Area", price: "From $75" },
      { name: "Laser Hair Removal - Medium Area", price: "From $150" },
      { name: "Laser Hair Removal - Large Area", price: "From $250" },
      { name: "Skin Rejuvenation / Photofacial", price: "From $200" },
      { name: "Vascular Laser (Rosacea)", price: "From $175" },
      { name: "Laser Hyperpigmentation Treatment", price: "From $200" },
      { name: "Skin Tightening", price: "From $250" },
    ],
  },
  {
    title: "Injectables & Aesthetics",
    description: "Administered by certified medical professionals for natural-looking results.",
    services: [
      { name: "Botox (per unit)", price: "From $12" },
      { name: "Dermal Fillers (per syringe)", price: "From $500" },
      { name: "Lip Filler", price: "From $500" },
      { name: "Kybella (double chin treatment)", price: "From $600" },
      { name: "CryoPen (skin tags/spots)", price: "From $75" },
    ],
  },
  {
    title: "Body Treatments",
    description: "Relaxing and results-driven treatments for the whole body.",
    services: [
      { name: "Body Wrap", price: "From $110" },
      { name: "Body Scrub", price: "From $95" },
      { name: "Rolf Structural Integration", price: "From $120" },
      { name: "Keravive Hair Treatment", price: "From $350" },
    ],
  },
  {
    title: "Waxing",
    description: "Quick, precise, and gentle waxing services.",
    services: [
      { name: "Eyebrow Wax", price: "$20" },
      { name: "Upper Lip Wax", price: "$12" },
      { name: "Full Face Wax", price: "$45" },
      { name: "Underarm Wax", price: "$25" },
      { name: "Full Leg Wax", price: "$65" },
      { name: "Bikini Wax", price: "From $35" },
      { name: "Brazilian Wax", price: "From $55" },
    ],
  },
  {
    title: "Chiropractic & Acupuncture",
    description: "Dr. David Sefried provides holistic chiropractic care and acupuncture.",
    services: [
      { name: "Chiropractic Adjustment", price: "From $65" },
      { name: "Acupuncture Session", price: "From $85" },
      { name: "Initial Consultation", price: "From $95" },
    ],
  },
];

function ServiceSection({ category, index }: { category: typeof serviceCategories[0]; index: number }) {
  const section = useInView(0.05);
  return (
    <div
      ref={section.ref}
      className={`transition-all duration-700 ${section.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="mb-6">
        <h3 className="text-2xl md:text-3xl font-heading font-medium text-navy mb-2">{category.title}</h3>
        <p className="text-text text-sm font-body font-light">{category.description}</p>
        <div className="w-8 h-px bg-blue mt-4" />
      </div>
      <div>
        {category.services.map((service) => (
          <a
            key={service.name}
            href="tel:919-238-5040"
            className="flex items-center justify-between py-4 border-b border-gray-100 group hover:border-blue/30 transition-colors cursor-pointer"
          >
            <span className="text-sm font-body font-light text-charcoal group-hover:text-blue transition-colors">{service.name}</span>
            <div className="flex items-center gap-3">
              <span className="text-sm font-body font-light text-blue">{service.price}</span>
              <span className="text-[10px] font-body font-medium text-blue opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-wide">Book</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <>
      <section className="relative h-[50vh] flex items-center justify-center bg-navy overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy/90 to-navy" />
        <div className="relative z-10 text-center">
          <p className="text-blue text-xs tracking-luxe uppercase font-body font-light mb-4 animate-fade-in">Our Expertise</p>
          <h1 className="text-5xl md:text-7xl font-heading font-medium text-white animate-fade-in-up">Services & Pricing</h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-text text-base font-body font-light leading-relaxed">
            From rejuvenating facials to advanced laser treatments, our team of licensed professionals is here to help you look and feel your best. All services include a consultation.
          </p>
          <p className="text-xs text-text/50 font-body font-light mt-4">*Prices are starting prices and may vary. Call for a personalized quote.</p>
        </div>
      </section>

      <section className="py-16 bg-ice">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {serviceCategories.map((cat, i) => (
            <ServiceSection key={cat.title} category={cat} index={i} />
          ))}
        </div>
      </section>

      <section className="py-16 bg-navy">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-medium text-white mb-6">Ready to Book?</h2>
          <p className="text-white/60 text-sm font-body font-light mb-8">Call us or book online to schedule your appointment.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/book" className="group px-10 py-4 bg-blue text-white text-xs tracking-elegant uppercase font-body font-medium hover:bg-blue-dark transition-all duration-300 flex items-center gap-2">
              Book Online <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="tel:919-238-5040" className="px-10 py-4 border border-white/30 text-white text-xs tracking-elegant uppercase font-body font-light hover:border-blue hover:text-blue transition-all duration-300">
              Call (919) 238-5040
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
