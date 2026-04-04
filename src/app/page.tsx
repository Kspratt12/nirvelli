"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, MapPin, Phone, Star, Award, Sparkles, Heart, Shield, CheckCircle, Users, Calendar, Eye, Zap, Target, TrendingUp } from "lucide-react";
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
const heroImages = ["/main-hero-massage.jpg", "/main-hero-2-cupping-massage.jpg", "/main-hero-3.png"];

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
const quickBookCategories: Record<string, { name: string; price: string; duration: string; note?: string; icon: string }[]> = {
  "Facials": [
    { name: "1st Time Facial", price: "$69", duration: "60 min", note: "New clients", icon: "sparkles" },
    { name: "Club OE Facial", price: "$89", duration: "60 min", icon: "sparkles" },
    { name: "Organic Eminence Facial", price: "$100", duration: "60 min", icon: "sparkles" },
    { name: "Age Corrective Facial", price: "$135", duration: "60 min", icon: "sparkles" },
  ],
  "Massage": [
    { name: "1st Time Massage", price: "$69", duration: "60 min", note: "New clients", icon: "heart" },
    { name: "Swedish Massage", price: "$89", duration: "50 min", icon: "heart" },
    { name: "Deep Tissue Massage", price: "$99", duration: "50 min", icon: "heart" },
    { name: "Deep Tissue Extended", price: "$135", duration: "80 min", icon: "heart" },
  ],
  "HydraFacial": [
    { name: "Signature HydraFacial", price: "$199", duration: "30 min", icon: "zap" },
    { name: "Deluxe HydraFacial", price: "$275", duration: "60 min", icon: "zap" },
    { name: "Platinum HydraFacial", price: "$325", duration: "90 min", icon: "zap" },
  ],
  "Injectables": [
    { name: "Botox / Xeomin / Jeuveau", price: "$14/unit", duration: "30 min", icon: "target" },
    { name: "Dysport", price: "$14/unit", duration: "30 min", icon: "target" },
    { name: "Restylane Kysse (lips)", price: "$900", duration: "30 min", icon: "target" },
    { name: "Injectable Consultation", price: "$45", duration: "30 min", icon: "target" },
  ],
  "Waxing": [
    { name: "Brow Wax", price: "$18", duration: "15 min", icon: "eye" },
    { name: "Brow, Chin & Lip Trio", price: "$35", duration: "20 min", icon: "eye" },
    { name: "Brazilian (Female)", price: "$55", duration: "30 min", icon: "eye" },
    { name: "Full Leg Wax", price: "$60", duration: "45 min", icon: "eye" },
  ],
};

function QuickBookWidget() {
  const [activeTab, setActiveTab] = useState("Facials");
  const [selectedService, setSelectedService] = useState("");
  const tabs = Object.keys(quickBookCategories);

  return (
    <section className="relative z-20 py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-[0_20px_60px_rgba(0,0,0,0.12)] rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-navy via-navy to-blue/90 p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-semibold text-white">Book Your Service</h2>
                <p className="text-white/50 text-sm font-body font-light mt-1">Select a category to explore treatments</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {tabs.map(tab => (
                  <button
                    key={tab}
                    onClick={() => { setActiveTab(tab); setSelectedService(""); }}
                    className={`px-4 py-2 text-[11px] tracking-wide font-body font-semibold rounded-full transition-all duration-300 ${
                      activeTab === tab
                        ? "bg-white text-navy shadow-md"
                        : "bg-white/10 text-white/80 hover:bg-white/20"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="p-6 md:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {quickBookCategories[activeTab]?.map(service => (
                <button
                  key={service.name}
                  onClick={() => setSelectedService(service.name)}
                  className={`relative flex items-center justify-between p-5 rounded-xl border-2 transition-all duration-300 text-left group ${
                    selectedService === service.name
                      ? "border-blue bg-blue/5 shadow-md"
                      : "border-gray-100 hover:border-blue/30 hover:shadow-sm"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                      selectedService === service.name ? "bg-blue text-white" : "bg-ice text-blue group-hover:bg-blue/10"
                    }`}>
                      <Sparkles size={18} />
                    </div>
                    <div>
                      <p className={`text-sm font-body font-semibold transition-colors ${
                        selectedService === service.name ? "text-blue" : "text-navy"
                      }`}>{service.name}</p>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-[11px] text-text/50 font-body">{service.duration}</span>
                        {service.note && (
                          <span className="text-[10px] text-white bg-blue/80 px-2 py-0.5 rounded-full font-body font-semibold">{service.note}</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <span className={`text-lg font-heading font-bold transition-colors ${
                    selectedService === service.name ? "text-blue" : "text-navy"
                  }`}>{service.price}</span>
                  {selectedService === service.name && (
                    <div className="absolute top-2 right-2">
                      <CheckCircle size={16} className="text-blue" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Footer CTA */}
          <div className="px-6 md:px-8 pb-6 md:pb-8">
            <div className="bg-ice rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-4 text-xs text-text font-body">
                <span className="flex items-center gap-1.5 font-medium"><Clock size={13} className="text-blue" /> Mon–Fri: 7am–7pm</span>
                <span className="flex items-center gap-1.5 font-medium"><Clock size={13} className="text-blue" /> Sat: 9am–4pm</span>
                <a href={PHONE_HREF} className="flex items-center gap-1.5 font-semibold text-navy hover:text-blue transition-colors"><Phone size={13} className="text-blue" /> {PHONE}</a>
              </div>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="group shrink-0 px-8 py-3.5 bg-blue text-white text-xs tracking-elegant uppercase font-body font-bold hover:bg-blue-dark rounded-lg transition-all duration-300 inline-flex items-center gap-2 shadow-md hover:shadow-lg">
                Book Now <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
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
  const highlights = [
    { num: "20+", label: "Years Serving Cary", desc: "Trusted by the community since 2003" },
    { num: "5x", label: "Diamond Award Winner", desc: "Cary Living Magazine" },
    { num: "200+", label: "5-Star Reviews", desc: "Real clients, real results" },
  ];

  return (
    <section className="py-32 bg-white">
      <div ref={section.ref} className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${section.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-px bg-blue" />
              <p className="text-blue text-xs tracking-luxe uppercase font-body font-semibold">Cary, NC &middot; Est. 2003</p>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-heading font-semibold text-navy leading-[1.1] mb-8">
              Your Wellness<br />Deserves <span className="italic text-blue">Expert</span> Care.
            </h2>
            <p className="text-text text-lg font-body font-light leading-relaxed mb-6 max-w-lg">
              Nirvelli is Cary&apos;s premier med spa, where medical-grade treatments meet personalized attention. Every service is delivered by licensed practitioners who measure outcomes, not just effort.
            </p>
            <p className="text-text/60 text-base font-body font-light leading-relaxed mb-10 max-w-lg">
              From advanced facials and HydraFacials to therapeutic massage and acupuncture, we combine clinical expertise with a warm, welcoming environment you&apos;ll love coming back to.
            </p>
            <div className="flex items-center gap-3 text-sm font-body">
              <div className="flex gap-0.5">{[1,2,3,4,5].map((i) => (<svg key={i} viewBox="0 0 24 24" width="16" height="16" fill="#c4a265"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>))}</div>
              <span className="font-semibold text-navy">4.4 on Google</span>
              <span className="text-text/30">|</span>
              <span className="text-text/60 font-light">Trusted by 200+ Clients</span>
            </div>
          </div>
          <div className="relative">
            <div className="relative h-[520px] rounded-sm overflow-hidden">
              <Image src="/therapist-chair.jpg" alt="Nirvelli Med Spa treatment room" fill className="object-cover" quality={90} sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white shadow-xl p-8 hidden md:block">
              <div className="flex gap-10">
                {highlights.map((h) => (
                  <div key={h.label} className="text-center">
                    <p className="text-3xl font-heading font-bold text-blue">{h.num}</p>
                    <p className="text-xs font-body font-semibold text-navy mt-1">{h.label}</p>
                    <p className="text-[10px] font-body font-light text-text/50 mt-0.5">{h.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
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
      image: "/hydrafacial.jpg",
      link: "/facials",
    },
    {
      title: "Therapeutic Massage",
      headline: "Award-Winning Pain Relief & Relaxation",
      desc: "Swedish, deep tissue, hot stone, and medical massage from therapists voted Best in Cary 5 years running.",
      emotion: "Relieve tension and actually feel better.",
      image: "/massage-hd.jpg",
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
      image: "/laser-gentle-pro-max-hair-laser-removal.jpg",
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
        <div className="space-y-6">
          {services.map((s, i) => (
            <Link key={s.title} href={s.link} className={`group flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} bg-white overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue/15`}>
              <div className="relative w-full md:w-1/2 h-72 md:h-auto md:min-h-[320px] overflow-hidden">
                <Image src={s.image} alt={s.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-navy/30 via-transparent to-transparent" />
              </div>
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <span className="text-blue text-[10px] tracking-luxe uppercase font-body font-bold mb-3">{s.title}</span>
                <h3 className="text-2xl md:text-3xl font-heading font-semibold text-navy mb-4 group-hover:text-blue transition-colors leading-snug">{s.headline}</h3>
                <p className="text-text text-sm font-body font-light leading-relaxed mb-4">{s.desc}</p>
                <p className="text-blue/80 text-sm font-body font-medium italic mb-6">{s.emotion}</p>
                <span className="text-blue text-xs tracking-elegant uppercase font-body font-bold inline-flex items-center gap-1.5 group-hover:gap-3 transition-all">
                  Explore Treatment <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── WHAT TO EXPECT ─── */
function WhatToExpect() {
  const section = useInView();
  const steps = [
    { num: "01", title: "Book Online", desc: "Choose your service and schedule in under 60 seconds. Same-day spots available." },
    { num: "02", title: "Consultation", desc: "Your practitioner creates a custom plan tailored to your goals." },
    { num: "03", title: "Treatment", desc: "Relax while you receive your medical-grade treatment." },
    { num: "04", title: "Results", desc: "Walk out looking and feeling noticeably better." },
  ];

  return (
    <section className="py-32 bg-white">
      <div ref={section.ref} className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${section.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-blue" />
              <p className="text-blue text-xs tracking-luxe uppercase font-body font-semibold">Your Visit</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-semibold text-navy leading-[1.1] mb-6">
              Simple from<br />start to <span className="italic text-blue">finish</span>.
            </h2>
            <p className="text-text text-base font-body font-light leading-relaxed mb-10 max-w-sm">
              No pressure, no surprises, just expert care designed around you.
            </p>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="group px-10 py-4 bg-navy text-white text-sm tracking-elegant uppercase font-body font-bold hover:bg-blue transition-all duration-300 inline-flex items-center gap-2">
              Book Your First Visit <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="text-text/40 text-xs font-body font-light mt-3">Online booking takes less than 60 seconds</p>
          </div>
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {steps.map((step, i) => (
              <div key={step.num} className="relative p-8 bg-white rounded-2xl border border-gray-100 hover:border-blue/20 hover:shadow-xl transition-all duration-500 group overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue via-blue-light to-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue/10 to-blue/5 flex items-center justify-center group-hover:from-blue group-hover:to-blue-dark transition-all duration-500">
                    <span className="text-lg font-heading font-bold text-blue group-hover:text-white transition-colors duration-500">{step.num}</span>
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-navy">{step.title}</h3>
                </div>
                <p className="text-text text-sm font-body font-light leading-relaxed pl-16">{step.desc}</p>
              </div>
            ))}
          </div>
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
            Limited availability. New client spots fill quickly
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
    { image: "/hydrafacial-before-after.jpg", title: "HydraFacial", caption: "Visible improvement in skin texture, tone, and clarity. Real client results", outcome: "Smoother, clearer skin" },
    { image: "/blueberry-smoothie-peel-facial.jpg", title: "Clinical Peel", caption: "Targeting hyperpigmentation and uneven texture for lasting transformation", outcome: "Restored glow" },
    { image: "/deep-tissue-massage.jpg", title: "Deep Tissue", caption: "Chronic tension relief from our award-winning massage therapists", outcome: "Lasting relief" },
  ];

  return (
    <section className="py-32 bg-cream">
      <div ref={section.ref} className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${section.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-blue" />
            <p className="text-blue text-xs tracking-luxe uppercase font-body font-semibold">See the Difference</p>
            <div className="w-12 h-px bg-blue" />
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-semibold text-navy mb-5 leading-tight">
            Real Client <span className="italic text-blue">Results</span>
          </h2>
          <p className="text-text text-base font-body font-light max-w-md mx-auto leading-relaxed">
            Real treatments. Real people. Over 20 years of clinical experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {results.map((r) => (
            <div key={r.title} className="group cursor-pointer">
              <div className="relative h-80 rounded-xl overflow-hidden mb-5">
                <Image src={r.image} alt={r.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div>
                <p className="text-blue text-[10px] tracking-luxe uppercase font-body font-bold mb-1">{r.title}</p>
                <p className="text-sm font-body font-light text-text leading-relaxed mb-2">{r.caption}</p>
                <p className="text-navy text-sm font-body font-semibold flex items-center gap-2">
                  <CheckCircle size={13} className="text-blue" /> {r.outcome}
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
    <section className="py-32 bg-white">
      <div ref={section.ref} className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${section.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="relative h-[560px] rounded-xl overflow-hidden">
              <Image src="/team-pic.jpg" alt="Nirvelli Med Spa team in Cary NC" fill className="object-cover" quality={90} sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white shadow-2xl p-8 rounded-xl hidden md:block border border-gray-100">
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <p className="text-3xl font-heading font-bold text-blue">20+</p>
                  <p className="text-[10px] font-body font-medium tracking-wide uppercase text-text/60">Years</p>
                </div>
                <div className="w-px h-12 bg-gray-200" />
                <div className="text-center">
                  <p className="text-3xl font-heading font-bold text-blue">5x</p>
                  <p className="text-[10px] font-body font-medium tracking-wide uppercase text-text/60">Award Winner</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-blue" />
              <p className="text-blue text-xs tracking-luxe uppercase font-body font-semibold">Our Story</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-semibold text-navy mb-8 leading-[1.1]">
              Award-Winning Care<br />Since <span className="italic text-blue">2003</span>
            </h2>
            <p className="text-text text-lg font-body font-light leading-relaxed mb-5 max-w-lg">
              <strong className="text-navy font-medium">Nirvelli</strong>, meaning &ldquo;Water Child&rdquo; from Cherokee origin, blends clinical expertise with natural healing. For over two decades, we&apos;ve been Cary&apos;s trusted destination for results-driven wellness.
            </p>
            <p className="text-text/60 text-base font-body font-light leading-relaxed mb-10 max-w-lg">
              Founded by Dr. Heather and Dr. David Sefried, our med spa brings together licensed chiropractors, certified aestheticians, and award-winning massage therapists under one roof.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-10">
              {[
                "Diamond Award Winner",
                "Best Spa in Cary",
                "Licensed Practitioners",
                "Serving the Triangle",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <CheckCircle size={15} className="text-blue shrink-0" />
                  <span className="text-sm font-body text-charcoal">{item}</span>
                </div>
              ))}
            </div>
            <Link href="/about" className="group inline-flex items-center gap-2 px-8 py-3.5 bg-navy text-white text-xs tracking-elegant uppercase font-body font-bold hover:bg-blue transition-all duration-300">
              Our Full Story <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
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
      title: "D.C., Owner & Founder",
      image: "/dr-heather-2.png",
      position: "object-center",
      bio: "Doctor of Chiropractic from Sherman College. Over 25 years of experience in holistic wellness and clinical aesthetics. The driving force behind Nirvelli.",
    },
    {
      name: "Dr. David Sefried",
      title: "D.C., Co-Owner & Chiropractor",
      image: "/dr-david-sefried.png",
      position: "object-top",
      bio: "Specializing in chiropractic treatments and acupuncture. Expert in holistic pain management, facial acupuncture, and weight loss programs.",
    },
    {
      name: "Dr. Ed Hagerich",
      title: "D.C., Chiropractor & Specialist",
      image: "/staff3.jpg",
      position: "object-top",
      bio: "Deep expertise in spinal health, pain management, and integrative wellness. Focused on comprehensive musculoskeletal care and holistic recovery.",
    },
  ];

  return (
    <section className="py-32 bg-ice">
      <div ref={section.ref} className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${section.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-blue" />
            <p className="text-blue text-xs tracking-luxe uppercase font-body font-semibold">Our Experts</p>
            <div className="w-12 h-px bg-blue" />
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-semibold text-navy mb-5 leading-tight">
            Meet the <span className="italic text-blue">Team</span>
          </h2>
          <p className="text-text text-base font-body font-light max-w-md mx-auto leading-relaxed">
            Licensed professionals dedicated to your wellness and results.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.name} className="group">
              <div className="relative h-80 rounded-xl overflow-hidden mb-6">
                <Image src={member.image} alt={member.name} fill className={`object-cover ${member.position} transition-transform duration-700 group-hover:scale-105`} sizes="(max-width: 768px) 100vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-heading font-semibold text-navy mb-1">{member.name}</h3>
                <p className="text-blue text-xs tracking-elegant uppercase font-body font-bold mb-3">{member.title}</p>
                <p className="text-text text-sm font-body font-light leading-relaxed max-w-xs mx-auto">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── TESTIMONIALS ─── */
const reviews = [
  { name: "Raquel Reed", stars: 5, text: "I had been in pain for months from a past injury and stress. I had a massage done with Roberto and pain is gone! Roberto was AMAZING! He listened to my needs and provided feedback on how to help alleviate pain after the massage. He was polite, professional and effective.", highlight: "pain is gone", service: "Deep Tissue Massage" },
  { name: "Cheryl Breidenbach", stars: 5, text: "I just had one of the best massages of my life at Nirvelli Med Spa. The masseuse Kristen Roth used just the right amount of pressure and found and released tendons that others have not been able to find. I walked out feeling totally refreshed.", highlight: "one of the best massages of my life", service: "Massage" },
  { name: "Ivonne Ayala", stars: 5, text: "I got a first timers massage here and let me tell you it was absolutely incredible! The staff was super friendly from the moment you walked in. The atmosphere is the definition of relaxing. My masseuse was Kathryn and she was so amazing!", highlight: "absolutely incredible", service: "First Time Massage" },
  { name: "Abigail Kimball", stars: 5, text: "I had the signature pedicure with regular polish and it was amazing! I had such a good conversation and it was so relaxing! I can't wait to come back! Please, please, please schedule your nail services here! The service is amazing!!", highlight: "The service is amazing", service: "Nail Services" },
  { name: "Jessica Durdon", stars: 5, text: "I had a dip manicure and pedicure from Tiffany and it was probably the best nail set I've ever had and I've been to many places over the years. She was so thorough and made sure every detail was perfect.", highlight: "the best nail set I've ever had", service: "Manicure & Pedicure" },
  { name: "Ebony Bussey", stars: 5, text: "Visited Nirvelli for the first time last week. My massage was performed by Roberto. He did a fantastic job! It was the best massage I've had to date. He was very knowledgeable and professional. I would definitely recommend him.", highlight: "the best massage I've had to date", service: "Massage" },
];

function TestimonialsSection() {
  const section = useInView();
  return (
    <section className="py-32 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, rgba(46,163,242,0.4) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(196,162,101,0.3) 0%, transparent 50%)" }} />
      </div>
      <div ref={section.ref} className={`relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${section.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-blue" />
            <p className="text-blue text-xs tracking-luxe uppercase font-body font-semibold">Real Google Reviews</p>
            <div className="w-12 h-px bg-blue" />
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-semibold text-white mb-5 leading-tight">What Our Clients <span className="italic text-blue">Say</span></h2>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="flex gap-0.5">{[1,2,3,4,5].map((i) => (<svg key={i} viewBox="0 0 24 24" width="20" height="20" fill="#c4a265"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>))}</div>
            <span className="text-white font-body font-bold">4.3</span>
            <span className="text-white/40 font-body font-light">on Google</span>
            <span className="text-white/20">|</span>
            <span className="text-white/40 font-body font-light">114+ reviews</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.slice(0, 3).map((r, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500">
              <div className="flex items-center justify-between mb-5">
                <div className="flex gap-0.5">{Array.from({ length: r.stars }, (_, j) => (<svg key={j} viewBox="0 0 24 24" width="16" height="16" fill="#c4a265"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>))}</div>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" className="text-white/20"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
              </div>
              <p className="text-base font-body font-light text-white/80 leading-relaxed mb-6">
                &ldquo;{r.text.split(r.highlight).map((part, idx) => (
                  <span key={idx}>
                    {part}
                    {idx === 0 && <strong className="text-white font-bold">{r.highlight}</strong>}
                  </span>
                ))}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue to-blue-dark flex items-center justify-center">
                  <span className="text-xs font-heading font-semibold text-white">{r.name.split(" ").map(n => n[0]).join("")}</span>
                </div>
                <div>
                  <p className="text-sm font-body font-semibold text-white">{r.name}</p>
                  <p className="text-[11px] font-body font-light text-white/40">{r.service}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {reviews.slice(3).map((r, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500">
              <div className="flex items-center justify-between mb-5">
                <div className="flex gap-0.5">{Array.from({ length: r.stars }, (_, j) => (<svg key={j} viewBox="0 0 24 24" width="16" height="16" fill="#c4a265"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>))}</div>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" className="text-white/20"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
              </div>
              <p className="text-base font-body font-light text-white/80 leading-relaxed mb-6">
                &ldquo;{r.text.split(r.highlight).map((part, idx) => (
                  <span key={idx}>
                    {part}
                    {idx === 0 && <strong className="text-white font-bold">{r.highlight}</strong>}
                  </span>
                ))}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue to-blue-dark flex items-center justify-center">
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
    <section className="py-24 bg-navy relative overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/product-3.jpg" alt="" fill className="object-cover opacity-15" sizes="100vw" />
      </div>
      <div ref={section.ref} className={`relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${section.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 md:p-14 flex flex-col lg:flex-row items-center gap-10">
          <div className="relative hidden lg:block w-64 h-80 shrink-0 rounded-sm overflow-hidden">
            <Image src="/foot-massage.jpg" alt="Premium spa treatment" fill className="object-cover" quality={90} sizes="256px" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
          </div>
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

/* ─── LOCATION ─── */
function LocationSection() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-blue" />
              <p className="text-blue text-xs tracking-luxe uppercase font-body font-semibold">Visit Us</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-semibold text-navy leading-[1.1] mb-10">
              Located in<br /><span className="italic text-blue">Cary, NC</span>
            </h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-ice flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-blue" />
                </div>
                <div>
                  <p className="text-sm font-body font-semibold text-navy mb-0.5">Address</p>
                  <p className="text-sm font-body font-light text-text">151 Quarrystone Circle, Suite 116<br />Cary, NC 27519</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-ice flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-blue" />
                </div>
                <div>
                  <p className="text-sm font-body font-semibold text-navy mb-0.5">Phone</p>
                  <a href={PHONE_HREF} className="text-sm font-body font-light text-text hover:text-blue transition-colors">{PHONE}</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-ice flex items-center justify-center shrink-0">
                  <Clock size={18} className="text-blue" />
                </div>
                <div>
                  <p className="text-sm font-body font-semibold text-navy mb-0.5">Hours</p>
                  <p className="text-sm font-body font-light text-text">Mon–Fri: 7am–7pm<br />Sat: 9am–4pm</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3">
            <iframe src="https://www.google.com/maps?q=151+Quarrystone+Circle+Suite+116+Cary+NC+27519&output=embed" className="w-full h-[450px] border-0 rounded-xl shadow-lg" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Nirvelli Med Spa - Cary NC Location" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ (EXPANDED) ─── */
const faqs = [
  { q: "What should I expect on my first visit?", a: "Arrive 10–15 minutes early to complete paperwork. Your provider will start with a thorough consultation to understand your goals, skin type, and any concerns. Then you'll receive your personalized treatment in a relaxing, professional environment. New clients enjoy $69 facials and massages." },
  { q: "Does acupuncture hurt?", a: "Most clients feel little to no pain. Acupuncture needles are extremely thin, much thinner than injection needles. Many people describe the sensation as a slight tingling or pressure. Most clients find it deeply relaxing and some even fall asleep during treatment." },
  { q: "Are your treatments safe?", a: "Absolutely. All treatments are performed by licensed, trained professionals. We use FDA-approved products and medical-grade equipment. Every treatment begins with a consultation to ensure it's appropriate for your skin type, health conditions, and goals." },
  { q: "How soon will I see results?", a: "Many clients notice improvement after their first visit, especially with facials, HydraFacials, and massage. For treatments like acupuncture, laser, and injectables, optimal results typically develop over a series of sessions. Your provider will set clear expectations during your consultation." },
  { q: "What is the Nirvelli Spa Club?", a: "For $89/month, members receive one premium treatment of their choice plus 15% off all products and spa add-on services. Unused treatments roll over for up to 6 months. It's the best value in Cary for consistent self-care." },
  { q: "What makes Nirvelli different from other spas?", a: "We're not just a spa. We're a results-driven medical aesthetics practice. Our team includes licensed chiropractors, certified aestheticians, and medical professionals. We've been serving Cary since 2003, are 5x Cary Living Diamond Award Winners, and focus on measurable outcomes, not just relaxation." },
  { q: "Do you accept insurance?", a: "Med spa services are typically not covered by insurance. However, some chiropractic and medical massage services may be eligible. Contact us at (919) 297-0107 for details." },
  { q: "What areas do you serve?", a: "We're located in Cary, NC and proudly serve clients from Raleigh, Holly Springs, Morrisville, Apex, and throughout the Triangle area. Many clients drive 30+ minutes for our quality of care." },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section className="py-32 bg-ice">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-blue" />
            <p className="text-blue text-xs tracking-luxe uppercase font-body font-semibold">Common Questions</p>
            <div className="w-12 h-px bg-blue" />
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-semibold text-navy leading-tight">
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
    <section className="relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
        <div className="relative hidden lg:block">
          <Image src="/hero-4.jpg" alt="Nirvelli Med Spa experience" fill className="object-cover" quality={90} sizes="50vw" />
        </div>
        <div className="bg-navy py-24 lg:py-32 px-8 md:px-16 lg:px-20 flex items-center relative">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 30% 50%, rgba(46,163,242,0.4) 0%, transparent 50%)" }} />
          </div>
          <div ref={section.ref} className={`relative z-10 transition-all duration-1000 ${section.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-px bg-blue" />
              <p className="text-blue text-xs tracking-luxe uppercase font-body font-semibold">Start Today</p>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-heading font-semibold text-white mb-6 leading-[1.1]">
              Ready to See<br /><span className="italic text-blue">Results</span>?
            </h2>
            <p className="text-white/50 text-lg font-body font-light mb-10 max-w-md leading-relaxed">
              Experience why Nirvelli has been Cary&apos;s most trusted med spa for over 20 years.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="group px-10 py-4 bg-blue text-white text-sm tracking-elegant uppercase font-body font-bold hover:bg-blue-dark transition-all duration-300 inline-flex items-center gap-2">
                Book Appointment <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href={PHONE_HREF} className="px-10 py-4 border border-white/20 text-white text-sm tracking-elegant uppercase font-body font-light hover:border-blue hover:text-blue transition-all duration-300 inline-flex items-center gap-2">
                <Phone size={16} /> {PHONE}
              </a>
            </div>
            <p className="text-white/25 text-xs font-body font-light mt-4">Online booking takes less than 60 seconds</p>
          </div>
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
          <p className="text-[11px] font-body font-light text-text">Limited availability. Book today</p>
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
      <LocationSection />
      <FAQSection />
      <FinalCTA />
      <StickyCTA />
    </>
  );
}
