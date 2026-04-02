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
    description: "Clinically driven treatments using medical-grade products. Exfoliate, extract, and re-hydrate for visible, long-lasting results.",
    services: [
      { name: "1st Time Facial", price: "$69", note: "60 min - New clients only" },
      { name: "Club OE Facial", price: "$89", note: "60 min - Members" },
      { name: "Calm Skin Facial", price: "$90", note: "60 min - Rosacea & irritated skin" },
      { name: "Blueberry Smoothie Peel Facial", price: "$95", note: "60 min" },
      { name: "Back Facial", price: "$85", note: "45 min" },
      { name: "Organic Eminence Facial", price: "$100", note: "60 min - Luxury organic" },
      { name: "Dermaplaning", price: "$100", note: "60 min" },
      { name: "Age Corrective Facial", price: "$135", note: "60 min - Ages 40+" },
      { name: "Microneedling", price: "$325", note: "60 min - Scars, sun damage, acne" },
      { name: "Brow Tint Add-On", price: "$20" },
      { name: "Lash Tint Add-On", price: "$25" },
      { name: "Brow & Lash Combo Add-On", price: "$35" },
    ],
  },
  {
    title: "HydraFacial",
    description: "Multi-step treatment using patented Vortex-Fusion technology to cleanse, exfoliate, extract, and hydrate. Gentler than microdermabrasion with equal or superior results.",
    services: [
      { name: "Signature HydraFacial", price: "$199", note: "30 min - Deep cleanse + antioxidants" },
      { name: "Deluxe HydraFacial", price: "$275", note: "60 min - Enhanced treatment" },
      { name: "Platinum HydraFacial", price: "$325", note: "90 min - Lymphatic drainage + Growth Factor" },
      { name: "HydraFacial Neck Add-On", price: "$50", note: "30 min" },
      { name: "HydraFacial Decollete", price: "$250", note: "30 min" },
      { name: "HydraFacial Club", price: "$150/mo", note: "Monthly HydraFacial Pure + 15% off" },
      { name: "HydraFacial Deluxe Club", price: "$225/mo", note: "Monthly Deluxe + 15% off" },
    ],
  },
  {
    title: "Massage Therapy",
    description: "Award-winning massage since 2003. Voted Best Massage Therapist 5 years running by Cary News.",
    services: [
      { name: "Swedish Massage (50 min)", price: "$89" },
      { name: "Swedish Massage (80 min)", price: "$120" },
      { name: "Deep Tissue Massage (50 min)", price: "$99" },
      { name: "Deep Tissue Massage (80 min)", price: "$135" },
      { name: "Hot Stone Upgrade", price: "+$20" },
      { name: "Aromatherapy Upgrade", price: "+$15" },
      { name: "Medical Massage", price: "$99", note: "50 min" },
      { name: "Thai Reflexology", price: "$70" },
      { name: "30 Min Foot Massage", price: "$45" },
    ],
  },
  {
    title: "Injectables & Fillers",
    description: "Under the guidance of Dr. Deborah Hudak and Jada Dillner, PA-C. Dr. Hudak is a top 10 injector in the country with 30+ years experience.",
    services: [
      { name: "Botox / Xeomin / Jeuveau", price: "$14/unit", note: "Lasts 3-4 months" },
      { name: "Dysport", price: "$14/unit", note: "Preferred for crow's feet" },
      { name: "Injectable Consultation", price: "$45", note: "30 min" },
      { name: "Restylane Kysse (lips)", price: "$900/syringe" },
      { name: "Restylane Lyft / Refyne / Defyne", price: "$875/syringe" },
      { name: "Juvederm Voluma", price: "$1,100/syringe" },
      { name: "Silikon 1000 (permanent lip filler)", price: "$150/0.1ml", note: "60+ years of use" },
      { name: "Kybella (double chin)", price: "$900", note: "Permanent fat reduction" },
      { name: "BellaFill (permanent volumizer)", price: "$1,200", note: "Triggers collagen production" },
      { name: "Sculptra", price: "$875", note: "Lasts 7+ years in 3 sessions" },
      { name: "Radiesse", price: "$975", note: "Lasts 18-24 months" },
      { name: "BellaFill Spot Test", price: "$25", note: "Required 28 days before BellaFill" },
      { name: "Partial Filler Injection Fee", price: "$30", note: "For leftover filler within 1 year" },
    ],
  },
  {
    title: "CryoPen",
    description: "Non-invasive dark spot corrector and skin tag removal using advanced cryotechnology. No needles, minimal downtime.",
    services: [
      { name: "1-3 Spots", price: "$150", note: "15 min" },
      { name: "4-6 Spots", price: "$250", note: "15 min" },
      { name: "7-9 Spots", price: "$325", note: "15 min" },
      { name: "10-15 Spots", price: "$450", note: "15 min" },
    ],
  },
  {
    title: "Body Waxing",
    description: "Using premium Mermaid Wax, specially formulated for sensitive skin. Smooth, silky skin that lasts 3-8 weeks.",
    services: [
      { name: "Upper Lip Wax", price: "$10" },
      { name: "Lip / Chin Wax", price: "$12" },
      { name: "Brow Wax", price: "$18" },
      { name: "Under Arm Wax", price: "$25" },
      { name: "Half Arm Wax", price: "$30" },
      { name: "Brow, Chin & Lip Trio", price: "$35" },
      { name: "Full Arm Wax", price: "$40" },
      { name: "Lower Leg Wax", price: "$45" },
      { name: "Brazilian (Female)", price: "$55" },
      { name: "Bikini Wax", price: "$55" },
      { name: "Full Leg Wax", price: "$60" },
      { name: "Back / Chest Wax", price: "$65" },
      { name: "Brazilian (Male)", price: "$70" },
    ],
  },
  {
    title: "Nails - Manicures & Pedicures",
    description: "Complete nail care with 40+ years of combined experience. Relax in our brand new pedicure chairs.",
    services: [
      { name: "Gel X (Soft Tip)", price: "From $40" },
      { name: "Club Manicure", price: "$44.50", note: "Members" },
      { name: "Club Hot Stone Pedicure", price: "$44.50", note: "Members" },
      { name: "Signature Manicure", price: "$45" },
      { name: "Liquid Gel Full Set", price: "From $50" },
      { name: "Signature Pedicure", price: "$55" },
      { name: "Dip Manicure", price: "$60" },
      { name: "Deluxe Manicure", price: "$60" },
      { name: "Jelly Pedicure", price: "$60" },
      { name: "Signature Shellac Manicure", price: "$55" },
      { name: "Signature Hot Stone Pedicure", price: "$70" },
      { name: "Deluxe Pedicure", price: "$70" },
      { name: "Deluxe Hot Stone Pedicure", price: "$85" },
      { name: "Liquid Gel Fill In", price: "From $30" },
      { name: "Gel Polish Change (hands)", price: "$25" },
      { name: "Gel Polish Change (feet)", price: "$30" },
      { name: "Regular Polish Change (feet)", price: "$20" },
      { name: "Gel Polish Removal", price: "$5" },
      { name: "Nail Art Add-On", price: "From $5" },
    ],
  },
  {
    title: "Chiropractic & Acupuncture",
    description: "Dr. David Sefried provides holistic chiropractic care and acupuncture services.",
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
        <p className="text-text text-sm font-body font-light leading-relaxed">{category.description}</p>
        <div className="w-8 h-px bg-blue mt-4" />
      </div>
      <div>
        {category.services.map((service) => (
          <a
            key={service.name}
            href="tel:919-238-5040"
            className="flex items-start justify-between py-4 border-b border-gray-100 group hover:border-blue/30 transition-colors cursor-pointer gap-4"
          >
            <div className="flex-1">
              <span className="text-sm font-body font-light text-charcoal group-hover:text-blue transition-colors">{service.name}</span>
              {service.note && <span className="text-xs text-text/60 ml-2">({service.note})</span>}
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <span className="text-sm font-body font-medium text-blue">{service.price}</span>
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
            From rejuvenating facials and HydraFacials to advanced laser treatments and injectables, our team of licensed professionals is here to help you look and feel your best.
          </p>
          <p className="text-xs text-text/50 font-body font-light mt-4">*Prices may vary. Call (919) 238-5040 for a personalized consultation.</p>
        </div>
      </section>

      <section className="py-16 bg-ice">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {serviceCategories.map((cat, i) => (
            <ServiceSection key={cat.title} category={cat} index={i} />
          ))}
        </div>
      </section>

      {/* Spa Club CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-medium text-navy mb-4">Save with Spa Club</h2>
          <p className="text-text text-sm font-body font-light mb-6">Starting at $89/month for one premium treatment + 15% off products and add-ons.</p>
          <Link href="/spa-club" className="group inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-white text-xs tracking-elegant uppercase font-body font-medium hover:bg-gold-light transition-all duration-300">
            View Membership Details <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <section className="py-16 bg-navy">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-medium text-white mb-6">Ready to Book?</h2>
          <p className="text-white/60 text-sm font-body font-light mb-8">Call us or visit to schedule your appointment.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:919-238-5040" className="group px-10 py-4 bg-blue text-white text-xs tracking-elegant uppercase font-body font-medium hover:bg-blue-dark transition-all duration-300 flex items-center gap-2">
              Call (919) 238-5040 <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <Link href="/book" className="px-10 py-4 border border-white/30 text-white text-xs tracking-elegant uppercase font-body font-light hover:border-blue hover:text-blue transition-all duration-300">
              Book Online
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
