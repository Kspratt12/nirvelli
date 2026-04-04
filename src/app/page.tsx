"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, MapPin, Phone, Star, Award, Sparkles, Heart, Shield, CheckCircle, Users, Calendar, Download, Eye, Zap, Target, TrendingUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const BOOKING_URL = "https://clients.mindbodyonline.com/ASP/adm/adm_appt_search.asp?studioid=711769&prodGroupId=&page=&stype=&optForwardingLink=&nLgIn=&trn=0&lvl=&catid=&prodid=&date=4%2F4%2F2026&classid=0&view=&sSU=&qParam=&tg=&loc=1&vt=&justloggedin=&pMode=0";
const PHONE = "(919) 297-0107";
const PHONE_HREF = "tel:919-297-0107";

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

/* ─── HERO ─── */
const heroImages = ["/facial-acupuncture.png", "/our-massage-therapist-and-specialist.png", "/acupuncture.png"];

function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {heroImages.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-[2000ms] ${i === current ? "opacity-100" : "opacity-0"}`}
        >
          <Image src={img} alt="Nirvelli Med Spa treatment results" fill className="object-cover" priority={i === 0} quality={90} sizes="100vw" />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/50 via-navy/30 to-navy/80" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-16 sm:pt-20">
        {/* Micro-proof badge */}
        <div className="animate-fade-in" style={{ animationDelay: "0.2s", opacity: 0 }}>
          <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm px-5 py-2.5 rounded-full mb-8 shadow-md">
            <Award size={14} className="text-gold" />
            <span className="text-navy text-[10px] sm:text-xs font-body font-bold tracking-wide">5x Cary Living Diamond Award Winner</span>
          </div>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: "0.4s", opacity: 0 }}>
          <h1 className="font-heading font-semibold text-white mb-5 leading-[1.1]" style={{ textShadow: "0 2px 40px rgba(0,0,0,0.5)" }}>
            <span className="block text-5xl sm:text-7xl md:text-8xl text-blue-light">Real Results.</span>
            <span className="block text-3xl sm:text-4xl md:text-5xl font-medium mt-2">Advanced Med Spa Treatments</span>
            <span className="block text-2xl sm:text-3xl md:text-4xl font-light italic mt-1">in Cary, NC</span>
          </h1>
        </div>

        <div className="animate-fade-in" style={{ animationDelay: "0.7s", opacity: 0 }}>
          <p className="text-white/90 text-base md:text-lg font-body font-light max-w-xl mx-auto leading-relaxed mb-10" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.4)" }}>
            Clear skin. Pain relief. Anti-aging that works. Medical-grade treatments from licensed practitioners serving Cary, Raleigh &amp; the Triangle since 2003.
          </p>
        </div>

        <div className="animate-fade-in-up flex flex-col sm:flex-row items-center justify-center gap-4" style={{ animationDelay: "0.9s", opacity: 0 }}>
          <div className="text-center">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="group px-10 py-4 bg-blue text-white text-sm tracking-elegant uppercase font-body font-bold hover:bg-blue-dark transition-all duration-300 inline-flex items-center gap-2 pulse-cta">
              Book Appointment <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="text-white/50 text-[11px] font-body font-light mt-2">Takes less than 60 seconds</p>
          </div>
          <div className="text-center">
            <a href={PHONE_HREF} className="px-10 py-4 bg-white/95 backdrop-blur-sm text-navy text-sm tracking-elegant uppercase font-body font-semibold hover:bg-white transition-all duration-300 inline-flex items-center gap-2">
              <Phone size={16} /> {PHONE}
            </a>
            <p className="text-white/40 text-[11px] font-body font-light mt-2">Mon–Sat, same-day available</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${i === current ? "bg-blue w-8" : "bg-white/40 w-1.5 hover:bg-white/60"}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

/* ─── TRUST BAR ─── */
function TrustBar() {
  const items = [
    { icon: <Calendar size={18} />, text: "Serving Cary Since 2003" },
    { icon: <Award size={18} />, text: "Award-Winning Med Spa" },
    { icon: <Star size={18} />, text: "5-Star Client Experience" },
    { icon: <Shield size={18} />, text: "Experienced Licensed Practitioners" },
  ];

  return (
    <section className="py-5 bg-navy border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 flex flex-wrap items-center justify-center gap-6 md:gap-12">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2.5 text-white/90">
            <span className="text-gold">{item.icon}</span>
            <span className="text-xs sm:text-sm font-body font-medium tracking-wide">{item.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── QUICK BOOK ─── */
const quickBookCategories: Record<string, { name: string; price: string; duration: string; note?: string }[]> = {
  "Facials": [
    { name: "1st Time Facial", price: "$69", duration: "60 min", note: "New clients" },
    { name: "Club OE Facial", price: "$89", duration: "60 min" },
    { name: "Organic Eminence Facial", price: "$100", duration: "60 min" },
    { name: "Age Corrective Facial", price: "$135", duration: "60 min" },
  ],
  "Massage": [
    { name: "1st Time Massage", price: "$69", duration: "60 min", note: "New clients" },
    { name: "Swedish Massage", price: "$89", duration: "50 min" },
    { name: "Deep Tissue Massage", price: "$99", duration: "50 min" },
    { name: "Deep Tissue Extended", price: "$135", duration: "80 min" },
  ],
  "HydraFacial": [
    { name: "Signature HydraFacial", price: "$199", duration: "30 min" },
    { name: "Deluxe HydraFacial", price: "$275", duration: "60 min" },
    { name: "Platinum HydraFacial", price: "$325", duration: "90 min" },
  ],
  "Injectables": [
    { name: "Botox / Xeomin / Jeuveau", price: "$14/unit", duration: "30 min" },
    { name: "Dysport", price: "$14/unit", duration: "30 min" },
    { name: "Restylane Kysse (lips)", price: "$900", duration: "30 min" },
    { name: "Injectable Consultation", price: "$45", duration: "30 min" },
  ],
  "Waxing": [
    { name: "Brow Wax", price: "$18", duration: "15 min" },
    { name: "Brow, Chin & Lip Trio", price: "$35", duration: "20 min" },
    { name: "Brazilian (Female)", price: "$55", duration: "30 min" },
    { name: "Full Leg Wax", price: "$60", duration: "45 min" },
  ],
};

function QuickBookWidget() {
  const [activeTab, setActiveTab] = useState("Facials");
  const [selectedService, setSelectedService] = useState("");
  const tabs = Object.keys(quickBookCategories);

  return (
    <section className="relative -mt-16 z-20 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-2xl rounded-sm">
          <div className="p-5 md:p-8 pb-0">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-5">
              <h2 className="text-2xl md:text-3xl font-heading font-semibold text-navy">Book Your Service</h2>
              <div className="flex flex-wrap gap-1.5">
                {tabs.map(tab => (
                  <button
                    key={tab}
                    onClick={() => { setActiveTab(tab); setSelectedService(""); }}
                    className={`px-3 py-1.5 text-[10px] tracking-wide font-body font-medium border transition-all ${
                      activeTab === tab ? "bg-navy text-white border-navy" : "bg-white text-charcoal border-gray-300 hover:border-navy"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1 pb-5 border-b border-gray-200">
              {quickBookCategories[activeTab]?.map(service => (
                <label
                  key={service.name}
                  className="flex items-center justify-between py-2.5 cursor-pointer group"
                  onClick={() => setSelectedService(service.name)}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${
                      selectedService === service.name ? "border-blue" : "border-gray-300 group-hover:border-blue/50"
                    }`}>
                      {selectedService === service.name && <div className="w-2 h-2 rounded-full bg-blue" />}
                    </div>
                    <div>
                      <span className="text-sm font-body font-light text-charcoal group-hover:text-blue transition-colors">{service.name}</span>
                      <span className="text-[10px] text-text/40 ml-2">{service.duration}</span>
                      {service.note && <span className="text-[10px] text-blue ml-1 font-medium">{service.note}</span>}
                    </div>
                  </div>
                  <span className="text-sm font-body font-medium text-navy">{service.price}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="p-5 md:p-8 pt-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-3 text-xs text-text font-body font-light">
                <span className="flex items-center gap-1.5"><Clock size={12} className="text-blue" /> Mon–Fri: 7am–7pm</span>
                <span className="flex items-center gap-1.5"><Clock size={12} className="text-blue" /> Sat: 9am–4pm</span>
                <a href={PHONE_HREF} className="flex items-center gap-1.5 hover:text-blue transition-colors"><Phone size={12} className="text-blue" /> {PHONE}</a>
              </div>
              <div className="text-center">
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="shrink-0 px-10 py-3 bg-navy text-white text-xs tracking-elegant uppercase font-body font-semibold hover:bg-blue transition-all duration-300 inline-block">
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── WHY CLIENTS CHOOSE NIRVELLI ─── */
function WhyChooseUs() {
  const section = useInView();
  const reasons = [
    { icon: <Calendar size={28} className="text-blue" />, title: "20+ Years of Excellence", desc: "Trusted by the Cary community since 2003 with thousands of successful treatments and loyal clients." },
    { icon: <Shield size={28} className="text-blue" />, title: "Medical-Grade Treatments", desc: "Advanced technology and clinical-grade products for real, measurable results — not just pampering." },
    { icon: <Users size={28} className="text-blue" />, title: "Licensed Medical Professionals", desc: "Chiropractors, certified aestheticians, and trained specialists — not just spa technicians." },
    { icon: <Heart size={28} className="text-blue" />, title: "Personalized Treatment Plans", desc: "Every plan is customized to your unique skin, body, and wellness goals. No cookie-cutter treatments." },
    { icon: <TrendingUp size={28} className="text-blue" />, title: "Proven Results, Not Guesswork", desc: "Real transformations backed by experience and client reviews. We measure outcomes, not just effort." },
    { icon: <Award size={28} className="text-blue" />, title: "Award-Winning Service", desc: "5x Cary Living Diamond Award. Voted Best Spa & Best Massage Therapist by Cary News." },
  ];

  return (
    <section className="py-24 bg-white">
      <div ref={section.ref} className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${section.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="text-center mb-16">
          <p className="text-blue text-xs tracking-luxe uppercase font-body font-semibold mb-4">The Nirvelli Difference</p>
          <h2 className="text-4xl md:text-[3.25rem] font-heading font-semibold text-navy mb-5 leading-tight">
            Why Clients Choose <span className="italic text-blue">Nirvelli</span>
          </h2>
          <p className="text-text text-base font-body font-light max-w-xl mx-auto leading-relaxed">
            Over 20 years of delivering real results with medical-grade treatments and personalized care in Cary, NC.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((r) => (
            <div key={r.title} className="p-7 border border-gray-100 hover:border-blue/20 hover:shadow-lg transition-all duration-300 group">
              <div className="w-14 h-14 rounded-full bg-ice flex items-center justify-center mb-5 group-hover:bg-blue/10 transition-colors">
                {r.icon}
              </div>
              <h3 className="text-lg font-heading font-semibold text-navy mb-2">{r.title}</h3>
              <p className="text-text text-sm font-body font-light leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── SERVICES WITH EMOTIONAL OUTCOMES ─── */
function ServicesSection() {
  const section = useInView();
  const services = [
    {
      title: "Medical-Grade Facials",
      headline: "Clear, Healthy Skin That Glows",
      desc: "Treat acne, fine lines, sun damage, and uneven texture with clinically driven facials and HydraFacial technology.",
      emotion: "Feel confident in your skin again.",
      image: "/facial-acupuncture.png",
      link: "/facials",
    },
    {
      title: "Therapeutic Massage",
      headline: "Award-Winning Pain Relief & Relaxation",
      desc: "Swedish, deep tissue, hot stone, and medical massage from therapists voted Best in Cary 5 years running.",
      emotion: "Relieve tension and actually feel better.",
      image: "/our-massage-therapist-and-specialist.png",
      link: "/services",
    },
    {
      title: "Acupuncture",
      headline: "Natural Healing for Body & Mind",
      desc: "Facial rejuvenation, weight loss support, stress relief, and pain management through traditional acupuncture.",
      emotion: "Restore balance and reduce stress naturally.",
      image: "/acupuncture.png",
      link: "/acupuncture",
    },
    {
      title: "Laser Treatments",
      headline: "Advanced Skin Correction Technology",
      desc: "Laser hair removal, skin tightening, pigmentation correction, and vascular treatment with state-of-the-art technology.",
      emotion: "See real changes you can measure.",
      image: "/notable-benefits-of-acupuncture.png",
      link: "/services",
    },
  ];

  return (
    <section className="py-28 bg-ice">
      <div ref={section.ref} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${section.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="text-center mb-16">
          <p className="text-blue text-xs tracking-luxe uppercase font-body font-semibold mb-4">Our Treatments</p>
          <h2 className="text-4xl md:text-[3.25rem] font-heading font-semibold text-navy mb-5 leading-tight">
            Results-Driven <span className="italic text-blue">Services</span>
          </h2>
          <p className="text-text text-base font-body font-light max-w-xl mx-auto leading-relaxed">
            Medical-grade aesthetic treatments and wellness services for Cary, Raleigh, Holly Springs, and Morrisville.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {services.map((s) => (
            <Link key={s.title} href={s.link} className="group bg-white overflow-hidden hover:shadow-xl transition-all duration-500 border border-transparent hover:border-blue/10">
              <div className="relative h-64 sm:h-72 img-zoom">
                <Image src={s.image} alt={s.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-5">
                  <span className="bg-blue/90 text-white text-[10px] font-body font-bold tracking-wide uppercase px-3 py-1">{s.title}</span>
                </div>
              </div>
              <div className="p-7">
                <h3 className="text-xl font-heading font-semibold text-navy mb-2 group-hover:text-blue transition-colors">{s.headline}</h3>
                <p className="text-text text-sm font-body font-light leading-relaxed mb-3">{s.desc}</p>
                <p className="text-blue text-sm font-body font-medium italic mb-4">{s.emotion}</p>
                <span className="text-blue text-xs tracking-elegant uppercase font-body font-bold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn More <ArrowRight size={12} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── WHAT TO EXPECT (CONVERSION BOOSTER) ─── */
function WhatToExpect() {
  const section = useInView();
  const steps = [
    { num: "01", icon: <Calendar size={24} className="text-blue" />, title: "Book Your Appointment", desc: "Choose your service and schedule online in under 60 seconds. Same-day availability." },
    { num: "02", icon: <Eye size={24} className="text-blue" />, title: "Personalized Consultation", desc: "Your practitioner assesses your needs and creates a custom plan for your goals." },
    { num: "03", icon: <Target size={24} className="text-blue" />, title: "Targeted Treatment", desc: "Receive your medical-grade treatment in a relaxing, professional environment." },
    { num: "04", icon: <TrendingUp size={24} className="text-blue" />, title: "Real, Visible Results", desc: "Walk out looking and feeling better. See measurable improvement with each visit." },
  ];

  return (
    <section className="py-28 bg-white">
      <div ref={section.ref} className={`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${section.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="text-center mb-16">
          <p className="text-blue text-xs tracking-luxe uppercase font-body font-semibold mb-4">Your Visit</p>
          <h2 className="text-4xl md:text-[3.25rem] font-heading font-semibold text-navy mb-5 leading-tight">
            What to <span className="italic text-blue">Expect</span>
          </h2>
          <p className="text-text text-base font-body font-light max-w-xl mx-auto leading-relaxed">
            Your first visit is simple. No pressure, no surprises — just expert care designed around you.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={step.num} className="text-center relative">
              <div className="text-6xl font-heading font-bold text-ice mb-4 leading-none">{step.num}</div>
              <div className="w-14 h-14 rounded-full bg-ice flex items-center justify-center mx-auto mb-4 -mt-8 relative z-10">{step.icon}</div>
              <h3 className="text-base font-heading font-semibold text-navy mb-2">{step.title}</h3>
              <p className="text-text text-sm font-body font-light leading-relaxed">{step.desc}</p>
              {i < 3 && <div className="hidden lg:block absolute top-8 -right-4 w-8 h-px bg-blue/20" />}
            </div>
          ))}
        </div>
        <div className="text-center mt-14">
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="group px-10 py-4 bg-blue text-white text-sm tracking-elegant uppercase font-body font-bold hover:bg-blue-dark transition-all duration-300 inline-flex items-center gap-2 pulse-cta">
            Book Your First Visit <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="text-text/50 text-xs font-body font-light mt-3">Takes less than 60 seconds. New clients start at $69.</p>
        </div>
      </div>
    </section>
  );
}

/* ─── NEW CLIENT OFFER (WITH URGENCY) ─── */
function NewClientOffer() {
  const section = useInView();
  return (
    <section className="py-24 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, rgba(46,163,242,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(196,162,101,0.2) 0%, transparent 50%)" }} />
      </div>
      <div ref={section.ref} className={`relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${section.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 md:p-16">
          <p className="text-gold text-xs tracking-luxe uppercase font-body font-bold mb-5">New Client Special</p>
          <h2 className="text-6xl md:text-8xl font-heading font-bold text-white mb-2">
            <span className="gradient-text">$69</span>
          </h2>
          <p className="text-2xl md:text-3xl font-heading font-semibold text-white mb-3">One Hour Massage or Facial</p>
          <p className="text-white/50 text-sm font-body font-light mb-3 max-w-md mx-auto">
            First-time clients only. Experience award-winning treatments at a special introductory rate.
          </p>
          <p className="text-gold/80 text-xs font-body font-semibold tracking-wide uppercase mb-8">
            Limited availability — new client spots fill quickly
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="text-center">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="group px-10 py-4 bg-blue text-white text-sm tracking-elegant uppercase font-body font-bold hover:bg-blue-dark transition-all duration-300 inline-flex items-center gap-2 pulse-cta">
                Book Appointment Now <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="text-white/30 text-[11px] font-body font-light mt-2">Takes less than 60 seconds</p>
            </div>
            <a href={PHONE_HREF} className="px-10 py-4 border border-white/30 text-white text-sm tracking-elegant uppercase font-body font-light hover:border-gold hover:text-gold transition-all duration-300 inline-flex items-center gap-2">
              <Phone size={16} /> Call {PHONE}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── REAL CLIENT RESULTS ─── */
function ResultsSection() {
  const section = useInView();
  const results = [
    { image: "/facial-acupuncture.png", title: "Facial Acupuncture", caption: "Natural anti-aging — reduced fine lines and improved skin tone after a series of treatments", outcome: "Firmer, more youthful-looking skin" },
    { image: "/our-massage-therapist-and-specialist.png", title: "Deep Tissue Massage", caption: "Chronic tension relief and full-body relaxation from our award-winning massage therapists", outcome: "Pain relief that lasts" },
    { image: "/acupuncture.png", title: "Acupuncture Treatment", caption: "Stress reduction, hormonal balance, and natural pain management through traditional techniques", outcome: "Restored balance and vitality" },
  ];

  return (
    <section className="py-28 bg-cream">
      <div ref={section.ref} className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${section.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="text-center mb-16">
          <p className="text-blue text-xs tracking-luxe uppercase font-body font-semibold mb-4">See the Difference</p>
          <h2 className="text-4xl md:text-[3.25rem] font-heading font-semibold text-navy mb-5 leading-tight">
            Real Client <span className="italic text-blue">Results</span>
          </h2>
          <p className="text-text text-base font-body font-light max-w-xl mx-auto leading-relaxed">
            Real treatments. Real people. Real outcomes from over 20 years of clinical experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {results.map((r) => (
            <div key={r.title} className="bg-white overflow-hidden group hover:shadow-xl transition-all duration-500">
              <div className="relative h-64 img-zoom">
                <Image src={r.image} alt={r.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-navy text-[10px] font-body font-bold tracking-wide uppercase px-3 py-1">{r.title}</span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm font-body font-light text-text leading-relaxed mb-3">{r.caption}</p>
                <p className="text-blue text-sm font-body font-bold flex items-center gap-2">
                  <CheckCircle size={14} /> {r.outcome}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── ABOUT ─── */
function AboutSection() {
  const section = useInView();
  return (
    <section className="py-28 bg-white">
      <div ref={section.ref} className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${section.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <div className="relative h-[500px] img-zoom rounded-sm overflow-hidden">
              <Image src="/staff.png" alt="Nirvelli Med Spa team in Cary NC" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-navy text-white p-6 hidden md:block shadow-xl">
              <p className="text-3xl font-heading font-bold text-blue">20+</p>
              <p className="text-xs font-body font-light tracking-wide uppercase">Years Serving Cary</p>
            </div>
          </div>
          <div>
            <p className="text-blue text-xs tracking-luxe uppercase font-body font-semibold mb-4">About Nirvelli</p>
            <h2 className="text-4xl md:text-[3.25rem] font-heading font-semibold text-navy mb-6 leading-tight">
              Award-Winning Care<br />Since <span className="italic text-blue">2003</span>
            </h2>
            <div className="section-divider mb-6" />
            <p className="text-text text-base font-body font-light leading-relaxed mb-4 max-w-lg">
              <strong className="text-navy font-medium">Nirvelli</strong> — meaning &ldquo;Water Child&rdquo; from Cherokee origin — was founded with a vision to blend clinical expertise with natural healing. For over two decades, we&apos;ve been Cary&apos;s trusted destination for medical-grade aesthetics and wellness.
            </p>
            <p className="text-text text-base font-body font-light leading-relaxed mb-6 max-w-lg">
              Founded by Dr. Heather and Dr. David Sefried, our med spa brings together licensed chiropractors, certified aestheticians, and award-winning massage therapists under one roof.
            </p>
            <div className="space-y-3 mb-8">
              {[
                "5x Cary Living Diamond Award — \"Favorite Place to Get Pampered\"",
                "Voted Best Spa & Best Massage Therapist by Cary News",
                "Licensed chiropractors and medical professionals on staff",
                "Serving Cary, Raleigh, Holly Springs & Morrisville",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-blue shrink-0 mt-0.5" />
                  <span className="text-sm font-body font-light text-charcoal">{item}</span>
                </div>
              ))}
            </div>
            <Link href="/about" className="group inline-flex items-center gap-2 text-blue text-sm font-body font-bold hover:text-blue-dark transition-colors">
              Read Our Full Story <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── TEAM ─── */
function TeamSection() {
  const section = useInView();
  const team = [
    {
      name: "Dr. Heather Sefried",
      title: "D.C. — Owner & Founder",
      image: "/dr-heather-2.png",
      bio: "Doctor of Chiropractic from Sherman College. Over 25 years of experience in holistic wellness and clinical aesthetics. The driving force behind Nirvelli.",
    },
    {
      name: "Dr. David Sefried",
      title: "D.C. — Co-Owner & Chiropractor",
      image: "/dr-david-sefried.png",
      bio: "Specializing in chiropractic treatments and acupuncture. Expert in holistic pain management, facial acupuncture, and weight loss programs.",
    },
    {
      name: "Dr. Ed Hagerich",
      title: "D.C. — Chiropractor & Specialist",
      image: "/staff.png",
      bio: "Deep expertise in spinal health, pain management, and integrative wellness. Focused on comprehensive musculoskeletal care and holistic recovery.",
    },
  ];

  return (
    <section className="py-28 bg-ice">
      <div ref={section.ref} className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${section.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="text-center mb-16">
          <p className="text-blue text-xs tracking-luxe uppercase font-body font-semibold mb-4">Our Experts</p>
          <h2 className="text-4xl md:text-[3.25rem] font-heading font-semibold text-navy mb-5 leading-tight">
            Meet the <span className="italic text-blue">Team</span>
          </h2>
          <p className="text-text text-base font-body font-light max-w-xl mx-auto leading-relaxed">
            Licensed professionals with decades of combined experience dedicated to your wellness and results.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.name} className="bg-white group hover:shadow-xl transition-all duration-500 overflow-hidden">
              <div className="relative h-72 img-zoom">
                <Image src={member.image} alt={member.name} fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
              </div>
              <div className="p-7 text-center">
                <h3 className="text-xl font-heading font-semibold text-navy mb-1">{member.name}</h3>
                <p className="text-blue text-xs tracking-elegant uppercase font-body font-bold mb-3">{member.title}</p>
                <p className="text-text text-sm font-body font-light leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── TESTIMONIALS (UPGRADED) ─── */
const reviews = [
  { name: "Cheryl Breidenbach", stars: 5, text: "I just had one of the best massages of my life at Nirvelli Med Spa. The masseuse Kristen Roth used just the right amount of pressure and found and released tendons that others have not been able to find. I walked out feeling totally refreshed.", highlight: "one of the best massages of my life", service: "Massage" },
  { name: "Roberto's Client", stars: 5, text: "I went to Nirvelli for the first time this weekend and had a massage with Roberto. He was very professional and took time to get to know me prior to my service. It was one of the best massages I've had and I would definitely recommend him.", highlight: "I would definitely recommend him", service: "Massage" },
  { name: "Sarah M.", stars: 5, text: "The masseuses and aestheticians at Nirvelli are among the best in the Triangle. I've been coming here for years and the quality never drops.", highlight: "among the best in the Triangle", service: "Massage & Facial" },
  { name: "Jennifer L.", stars: 5, text: "Dr. Heather and her team are incredible. The laser treatments have completely transformed my skin. Worth every penny.", highlight: "completely transformed my skin", service: "Laser Treatment" },
  { name: "Rachel T.", stars: 5, text: "I've been a Spa Club member for over a year. $89/month for a premium treatment is an absolute steal. Love this place.", highlight: "an absolute steal", service: "Spa Club Member" },
];

function TestimonialsSection() {
  const section = useInView();
  return (
    <section className="py-28 bg-white overflow-hidden">
      <div ref={section.ref} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${section.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="text-center mb-14">
          <p className="text-blue text-xs tracking-luxe uppercase font-body font-semibold mb-4">Real Reviews</p>
          <h2 className="text-4xl md:text-[3.25rem] font-heading font-semibold text-navy mb-5 leading-tight">What Our Clients <span className="italic text-blue">Say</span></h2>
          <div className="flex items-center justify-center gap-2 mt-4 mb-3">
            <div className="flex gap-0.5">{[1,2,3,4,5].map((i) => (<svg key={i} viewBox="0 0 24 24" width="22" height="22" fill="#c4a265"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>))}</div>
            <span className="text-lg font-body font-bold text-navy ml-2">4.4</span>
            <span className="text-sm font-body font-light text-text">/ 200+ reviews</span>
          </div>
          <p className="text-navy text-sm font-body font-semibold">Trusted by 200+ clients in Cary, NC</p>
        </div>
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: "none" }}>
          {reviews.map((r, i) => (
            <div key={i} className="shrink-0 w-[340px] sm:w-[440px] bg-ice p-8 sm:p-10 snap-center border border-transparent hover:border-blue/10 transition-all">
              <div className="flex gap-0.5 mb-5">{Array.from({ length: r.stars }, (_, j) => (<svg key={j} viewBox="0 0 24 24" width="18" height="18" fill="#c4a265"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>))}</div>
              <p className="text-lg font-body font-light text-charcoal leading-relaxed mb-6">
                &ldquo;{r.text.split(r.highlight).map((part, idx) => (
                  <span key={idx}>
                    {part}
                    {idx === 0 && <strong className="text-navy font-bold text-xl">{r.highlight}</strong>}
                  </span>
                ))}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-navy flex items-center justify-center">
                  <span className="text-xs font-heading font-semibold text-white">{r.name.split(" ").map(n => n[0]).join("")}</span>
                </div>
                <div>
                  <p className="text-sm font-body font-bold text-navy">{r.name}</p>
                  <p className="text-[11px] font-body font-light text-text">{r.service}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── SPA CLUB ─── */
function SpaClubSection() {
  const section = useInView();
  return (
    <section className="py-24 bg-navy">
      <div ref={section.ref} className={`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${section.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 md:p-14 flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1 text-center lg:text-left">
            <Award className="text-gold mb-4 mx-auto lg:mx-0" size={32} />
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-white mb-3">Nirvelli Spa Club</h2>
            <p className="text-white/60 text-sm font-body font-light max-w-md leading-relaxed mb-6">
              Your choice of one premium treatment every month plus 15% off all products and spa add-on services. The best value in Cary for consistent self-care.
            </p>
            <div className="space-y-2 mb-6">
              {["Monthly premium treatment of your choice", "15% off all products & add-ons", "Unused services roll over (up to 6 months)"].map((perk) => (
                <div key={perk} className="flex items-center gap-2 justify-center lg:justify-start">
                  <CheckCircle size={14} className="text-blue shrink-0" />
                  <span className="text-sm font-body font-light text-white/80">{perk}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center">
            <p className="text-6xl md:text-7xl font-heading font-bold text-blue mb-1">$89</p>
            <p className="text-white/40 text-sm font-body font-light mb-6">per month</p>
            <Link href="/spa-club" className="group inline-flex items-center gap-2 px-8 py-3.5 bg-blue text-white text-xs tracking-elegant uppercase font-body font-bold hover:bg-blue-dark transition-all duration-300">
              View Membership <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── RESOURCES ─── */
function ResourcesSection() {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-blue text-xs tracking-luxe uppercase font-body font-semibold mb-4">Downloads</p>
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-navy">Patient Resources</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <a href="https://www.nirvelli.com/wp-content/uploads/Cosmetic-Patient-Consultation-Form.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-white p-5 border border-gray-100 hover:border-blue/30 hover:shadow-md transition-all group">
            <div className="w-12 h-12 rounded-full bg-ice flex items-center justify-center shrink-0 group-hover:bg-blue/10 transition-colors">
              <Download size={20} className="text-blue" />
            </div>
            <div>
              <p className="text-sm font-body font-semibold text-navy group-hover:text-blue transition-colors">Cosmetic Patient Consultation Form</p>
              <p className="text-xs font-body font-light text-text">PDF Download</p>
            </div>
          </a>
          <a href="https://www.nirvelli.com/wp-content/uploads/Cookbook-Purification.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-white p-5 border border-gray-100 hover:border-blue/30 hover:shadow-md transition-all group">
            <div className="w-12 h-12 rounded-full bg-ice flex items-center justify-center shrink-0 group-hover:bg-blue/10 transition-colors">
              <Download size={20} className="text-blue" />
            </div>
            <div>
              <p className="text-sm font-body font-semibold text-navy group-hover:text-blue transition-colors">Purification Cookbook</p>
              <p className="text-xs font-body font-light text-text">PDF Download</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── LOCATION ─── */
function LocationSection() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-blue text-xs tracking-luxe uppercase font-body font-semibold mb-4">Visit Us</p>
          <h2 className="text-4xl md:text-[3.25rem] font-heading font-semibold text-navy leading-tight">
            Located in <span className="italic text-blue">Cary, NC</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <MapPin className="mx-auto text-blue mb-3" size={24} />
            <p className="text-sm font-body font-light text-text">151 Quarrystone Circle, Suite 116<br />Cary, NC 27519</p>
          </div>
          <div className="text-center">
            <Phone className="mx-auto text-blue mb-3" size={24} />
            <a href={PHONE_HREF} className="text-base font-body font-semibold text-navy hover:text-blue transition-colors">{PHONE}</a>
          </div>
          <div className="text-center">
            <Clock className="mx-auto text-blue mb-3" size={24} />
            <p className="text-sm font-body font-light text-text">Mon–Fri: 7am–7pm<br />Sat: 9am–4pm</p>
          </div>
        </div>
        <iframe src="https://www.google.com/maps?q=151+Quarrystone+Circle+Suite+116+Cary+NC+27519&output=embed" className="w-full h-72 md:h-96 border-0 grayscale hover:grayscale-0 transition-all duration-500" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Nirvelli Med Spa - Cary NC Location" />
      </div>
    </section>
  );
}

/* ─── FAQ (EXPANDED) ─── */
const faqs = [
  { q: "What should I expect on my first visit?", a: "Arrive 10–15 minutes early to complete paperwork. Your provider will start with a thorough consultation to understand your goals, skin type, and any concerns. Then you'll receive your personalized treatment in a relaxing, professional environment. New clients enjoy $69 facials and massages." },
  { q: "Does acupuncture hurt?", a: "Most clients feel little to no pain. Acupuncture needles are extremely thin — much thinner than injection needles. Many people describe the sensation as a slight tingling or pressure. Most clients find it deeply relaxing and some even fall asleep during treatment." },
  { q: "Are your treatments safe?", a: "Absolutely. All treatments are performed by licensed, trained professionals. We use FDA-approved products and medical-grade equipment. Every treatment begins with a consultation to ensure it's appropriate for your skin type, health conditions, and goals." },
  { q: "How soon will I see results?", a: "Many clients notice improvement after their first visit — especially with facials, HydraFacials, and massage. For treatments like acupuncture, laser, and injectables, optimal results typically develop over a series of sessions. Your provider will set clear expectations during your consultation." },
  { q: "What is the Nirvelli Spa Club?", a: "For $89/month, members receive one premium treatment of their choice plus 15% off all products and spa add-on services. Unused treatments roll over for up to 6 months. It's the best value in Cary for consistent self-care." },
  { q: "What makes Nirvelli different from other spas?", a: "We're not just a spa — we're a results-driven medical aesthetics practice. Our team includes licensed chiropractors, certified aestheticians, and medical professionals. We've been serving Cary since 2003, are 5x Cary Living Diamond Award Winners, and focus on measurable outcomes, not just relaxation." },
  { q: "Do you accept insurance?", a: "Med spa services are typically not covered by insurance. However, some chiropractic and medical massage services may be eligible. Contact us at (919) 297-0107 for details." },
  { q: "What areas do you serve?", a: "We're located in Cary, NC and proudly serve clients from Raleigh, Holly Springs, Morrisville, Apex, and throughout the Triangle area. Many clients drive 30+ minutes for our quality of care." },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section className="py-28 bg-ice">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-blue text-xs tracking-luxe uppercase font-body font-semibold mb-4">Common Questions</p>
          <h2 className="text-4xl md:text-[3.25rem] font-heading font-semibold text-navy leading-tight">
            Frequently <span className="italic text-blue">Asked</span>
          </h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-lg overflow-hidden">
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full flex items-center justify-between px-6 py-5 text-left group hover:bg-ice/50 transition-colors">
                <span className="text-[15px] font-body font-semibold text-charcoal pr-4">{faq.q}</span>
                <span className={`text-blue text-xl font-light shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-45" : ""}`}>+</span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}>
                <p className="px-6 pb-5 text-sm font-body font-light text-text leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FINAL CTA ─── */
function FinalCTA() {
  const section = useInView();
  return (
    <section className="relative py-36 bg-navy overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <Image src="/hero-2.jpg" alt="" fill className="object-cover" sizes="100vw" />
      </div>
      <div className="absolute inset-0 bg-navy/90" />
      <div ref={section.ref} className={`relative z-10 max-w-3xl mx-auto px-4 text-center transition-all duration-1000 ${section.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-white mb-6 leading-tight">Ready to See <span className="italic text-blue">Results</span>?</h2>
        <p className="text-white/60 text-lg font-body font-light mb-12 max-w-lg mx-auto leading-relaxed">
          Book your appointment today. Experience why Nirvelli has been Cary&apos;s most trusted med spa for over 20 years.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="text-center">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="group px-12 py-5 bg-blue text-white text-sm tracking-elegant uppercase font-body font-bold hover:bg-blue-dark transition-all duration-300 inline-flex items-center gap-2 pulse-cta">
              Book Appointment <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="text-white/30 text-[11px] font-body font-light mt-2">Takes less than 60 seconds</p>
          </div>
          <a href={PHONE_HREF} className="px-12 py-5 border border-white/30 text-white text-sm tracking-elegant uppercase font-body font-light hover:border-blue hover:text-blue transition-all duration-300 inline-flex items-center gap-2">
            <Phone size={16} /> Call {PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── STICKY CTA (MOBILE + DESKTOP) ─── */
function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] py-3 px-4 transition-all duration-300">
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-3">
        <div className="hidden sm:block">
          <p className="text-sm font-body font-semibold text-navy">New clients: <span className="text-blue">$69</span> facial or massage</p>
          <p className="text-[11px] font-body font-light text-text">Limited availability — book today</p>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-none px-6 py-2.5 bg-blue text-white text-xs tracking-elegant uppercase font-body font-bold hover:bg-blue-dark transition-all text-center">
            Book Now
          </a>
          <a href={PHONE_HREF} className="flex-1 sm:flex-none px-6 py-2.5 border border-navy text-navy text-xs tracking-elegant uppercase font-body font-semibold hover:bg-navy hover:text-white transition-all text-center inline-flex items-center justify-center gap-1.5">
            <Phone size={13} /> Call
          </a>
        </div>
      </div>
    </div>
  );
}

/* ─── PAGE ─── */
export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <QuickBookWidget />
      <WhyChooseUs />
      <ServicesSection />
      <WhatToExpect />
      <NewClientOffer />
      <ResultsSection />
      <AboutSection />
      <TeamSection />
      <TestimonialsSection />
      <SpaClubSection />
      <ResourcesSection />
      <LocationSection />
      <FAQSection />
      <FinalCTA />
      <StickyCTA />
    </>
  );
}
