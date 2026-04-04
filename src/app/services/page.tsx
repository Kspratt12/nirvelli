"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const BOOKING_URL =
  "https://clients.mindbodyonline.com/ASP/adm/adm_appt_search.asp?studioid=711769&prodGroupId=&page=&stype=&optForwardingLink=&nLgIn=&trn=0&lvl=&catid=&prodid=&date=4%2F4%2F2026&classid=0&view=&sSU=&qParam=&tg=&loc=1&vt=&justloggedin=&pMode=0";

const serviceCategories = [
  {
    id: "facials",
    title: "Facials & Skin Care",
    description:
      "Clinically driven treatments using medical-grade products. Exfoliate, extract, and re-hydrate for visible, long-lasting results.",
    image: "/facial2.jpg",
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
    id: "hydrafacial",
    title: "HydraFacial",
    description:
      "Multi-step treatment using patented Vortex-Fusion technology to cleanse, exfoliate, extract, and hydrate. Gentler than microdermabrasion with equal or superior results.",
    image: "/hydrafacial.jpg",
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
    id: "massage",
    title: "Massage Therapy",
    description:
      "Award-winning massage since 2003. Voted Best Massage Therapist 5 years running by Cary News.",
    image: "/deep-tissue-massage.jpg",
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
    id: "injectables",
    title: "Injectables & Fillers",
    description:
      "Under the guidance of Dr. Deborah Hudak and Jada Dillner, PA-C. Dr. Hudak is a top 10 injector in the country with 30+ years experience.",
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
    id: "cryopen",
    title: "CryoPen",
    description:
      "Non-invasive dark spot corrector and skin tag removal using advanced cryotechnology. No needles, minimal downtime.",
    services: [
      { name: "1-3 Spots", price: "$150", note: "15 min" },
      { name: "4-6 Spots", price: "$250", note: "15 min" },
      { name: "7-9 Spots", price: "$325", note: "15 min" },
      { name: "10-15 Spots", price: "$450", note: "15 min" },
    ],
  },
  {
    id: "waxing",
    title: "Body Waxing",
    description:
      "Using premium Mermaid Wax, specially formulated for sensitive skin. Smooth, silky skin that lasts 3-8 weeks.",
    image: "/eyebrow-wax.jpg",
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
    id: "nails",
    title: "Nails - Manicures & Pedicures",
    description:
      "Complete nail care with 40+ years of combined experience. Relax in our brand new pedicure chairs.",
    image: "/nails.jpg",
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
    id: "chiropractic",
    title: "Chiropractic & Acupuncture",
    description:
      "Dr. David Sefried provides holistic chiropractic care and acupuncture services.",
    image: "/acupuncture.png",
    services: [
      { name: "Chiropractic Adjustment", price: "From $65" },
      { name: "Acupuncture Session", price: "From $85" },
      { name: "Initial Consultation", price: "From $95" },
    ],
  },
];

/* ---------- Service Section Component ---------- */
function ServiceSection({
  category,
  index,
}: {
  category: (typeof serviceCategories)[0];
  index: number;
}) {
  const section = useInView(0.05);
  const hasImage = !!category.image;
  const imageOnRight = index % 2 === 0;

  return (
    <div
      id={category.id}
      ref={section.ref}
      className={`scroll-mt-32 transition-all duration-700 ${
        section.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <div
        className={`${
          hasImage ? "grid grid-cols-1 lg:grid-cols-2 gap-12 items-start" : ""
        }`}
      >
        {/* Image (left side when imageOnRight is false) */}
        {hasImage && !imageOnRight && (
          <div className="relative rounded-xl overflow-hidden img-zoom hidden lg:block">
            <Image
              src={category.image!}
              alt={category.title}
              width={600}
              height={400}
              className="w-full h-[360px] object-cover"
            />
          </div>
        )}

        {/* Content */}
        <div className={hasImage ? "" : "max-w-3xl mx-auto"}>
          {/* Section header */}
          <div className="mb-8">
            <div className="w-12 h-px bg-blue mb-4" />
            <h3 className="text-2xl md:text-3xl font-heading font-medium text-navy mb-3">
              {category.title}
            </h3>
            <p className="text-text text-sm font-body font-light leading-relaxed max-w-xl">
              {category.description}
            </p>
          </div>

          {/* Service rows */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100/80 overflow-hidden">
            {category.services.map((service, i) => (
              <a
                key={service.name}
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-between px-5 py-4 group hover:bg-ice/60 transition-colors duration-200 ${
                  i < category.services.length - 1 ? "border-b border-gray-100" : ""
                }`}
              >
                <div className="flex-1 min-w-0 pr-4">
                  <span className="text-sm font-body font-light text-charcoal group-hover:text-navy transition-colors">
                    {service.name}
                  </span>
                  {service.note && (
                    <span className="block text-xs text-text/50 mt-0.5 font-body font-light">
                      {service.note}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-sm font-body font-semibold text-navy">
                    {service.price}
                  </span>
                  <ArrowRight
                    size={14}
                    className="text-blue opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Image (right side) */}
        {hasImage && imageOnRight && (
          <div className="relative rounded-xl overflow-hidden img-zoom hidden lg:block">
            <Image
              src={category.image!}
              alt={category.title}
              width={600}
              height={400}
              className="w-full h-[360px] object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
}

/* ---------- Page ---------- */
export default function Services() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 200;
      let current: string | null = null;
      for (const cat of serviceCategories) {
        const el = document.getElementById(cat.id);
        if (el && el.offsetTop <= scrollY) {
          current = cat.id;
        }
      }
      setActiveCategory(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* ===== Hero with Image Overlay ===== */}
      <section className="relative h-[55vh] min-h-[420px] flex items-center justify-center overflow-hidden">
        <Image
          src="/massage-2.jpg"
          alt="Premium spa services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/60 to-navy/80" />
        <div className="relative z-10 text-center px-4">
          <div className="w-12 h-px bg-blue mx-auto mb-6 animate-fade-in" />
          <p className="text-blue text-xs tracking-luxe uppercase font-body font-light mb-4 animate-fade-in">
            Our Expertise
          </p>
          <h1 className="text-5xl md:text-7xl font-heading font-medium text-white animate-fade-in-up">
            Services & Pricing
          </h1>
          <p className="text-white/60 text-sm font-body font-light mt-6 max-w-md mx-auto animate-fade-in">
            Curated treatments designed to renew your body, skin, and spirit
          </p>
        </div>
      </section>

      {/* ===== Category Navigation ===== */}
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto scrollbar-hide py-3">
            {serviceCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => scrollTo(cat.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-body font-medium transition-all duration-200 ${
                  activeCategory === cat.id
                    ? "bg-navy text-white"
                    : "text-text hover:bg-ice hover:text-navy"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* ===== Intro ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-text text-base font-body font-light leading-relaxed">
            From rejuvenating facials and HydraFacials to advanced laser treatments and
            injectables, our team of licensed professionals is here to help you look and
            feel your best.
          </p>
          <p className="text-xs text-text/50 font-body font-light mt-5">
            *Prices may vary. Call (919) 238-5040 for a personalized consultation.
          </p>
        </div>
      </section>

      {/* ===== Service Categories ===== */}
      <section className="py-32 bg-ice">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          {serviceCategories.map((cat, i) => (
            <ServiceSection key={cat.id} category={cat} index={i} />
          ))}
        </div>
      </section>

      {/* ===== Spa Club CTA ===== */}
      <section className="py-32 bg-cream">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg border border-gray-100/80 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left: content */}
              <div className="p-10 md:p-14 flex flex-col justify-center">
                <div className="w-12 h-px bg-blue mb-5" />
                <p className="text-blue text-xs tracking-luxe uppercase font-body font-light mb-3">
                  Exclusive Membership
                </p>
                <h2 className="text-3xl md:text-4xl font-heading font-medium text-navy mb-4">
                  Save with Spa Club
                </h2>
                <p className="text-text text-sm font-body font-light leading-relaxed mb-8">
                  Starting at $89/month for one premium treatment plus 15% off all products
                  and add-ons. Members also enjoy priority booking and seasonal perks.
                </p>
                <div>
                  <Link
                    href="/spa-club"
                    className="group inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-white text-xs tracking-elegant uppercase font-body font-medium rounded-xl hover:bg-gold-light transition-all duration-300"
                  >
                    View Membership Details
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                </div>
              </div>
              {/* Right: image */}
              <div className="relative min-h-[280px] md:min-h-0">
                <Image
                  src="/nails.jpg"
                  alt="Spa Club membership"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Ready to Book ===== */}
      <section className="relative py-32 overflow-hidden">
        <Image
          src="/hero-2.jpg"
          alt="Book your appointment"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy/85" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <div className="w-12 h-px bg-blue mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-heading font-medium text-white mb-5">
            Ready to Book?
          </h2>
          <p className="text-white/60 text-sm font-body font-light mb-10 max-w-md mx-auto">
            Schedule your appointment online or give us a call. Our team is ready to
            help you find the perfect treatment.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-10 py-4 bg-blue text-white text-xs tracking-elegant uppercase font-body font-medium rounded-xl hover:bg-blue-dark transition-all duration-300 flex items-center gap-2"
            >
              Book Online
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="tel:919-238-5040"
              className="px-10 py-4 border border-white/30 text-white text-xs tracking-elegant uppercase font-body font-light rounded-xl hover:border-blue hover:text-blue transition-all duration-300 flex items-center gap-2"
            >
              <Phone size={14} />
              (919) 238-5040
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
