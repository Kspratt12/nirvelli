"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle, Phone } from "lucide-react";

const BOOKING_URL = "https://clients.mindbodyonline.com/ASP/adm/adm_appt_search.asp?studioid=711769&prodGroupId=&page=&stype=&optForwardingLink=&nLgIn=&trn=0&lvl=&catid=&prodid=&date=4%2F4%2F2026&classid=0&view=&sSU=&qParam=&tg=&loc=1&vt=&justloggedin=&pMode=0";

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

export default function Acupuncture() {
  const intro = useInView();
  const facial = useInView();
  const benefits = useInView();
  const weight = useInView();

  return (
    <>
      {/* Hero */}
      <section className="relative h-[55vh] flex items-center justify-center overflow-hidden">
        <Image src="/acupuncture.png" alt="Acupuncture treatment in Cary NC" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/40 to-navy/80" />
        <div className="relative z-10 text-center px-4">
          <p className="text-blue text-xs tracking-luxe uppercase font-body font-medium mb-4 animate-fade-in">Natural Healing</p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-medium text-white animate-fade-in-up">
            Experienced Acupuncture<br />
            <span className="italic text-blue-light">Treatments in Cary, NC</span>
          </h1>
          <p className="text-white/70 text-sm md:text-base font-body font-light mt-4 max-w-xl mx-auto animate-fade-in" style={{ animationDelay: "0.3s", opacity: 0 }}>
            Facial rejuvenation, weight loss support, pain relief, and holistic wellness through traditional acupuncture.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-medium text-navy mb-4">Acupuncture Pricing</h2>
            <div className="section-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-ice p-6 text-center border border-blue/10 hover:border-blue/30 transition-colors">
              <p className="text-3xl font-heading font-medium text-blue mb-1">$130</p>
              <p className="text-sm font-heading font-medium text-navy mb-1">Facial Acupuncture</p>
              <p className="text-xs font-body font-light text-text">75 minutes</p>
            </div>
            <div className="bg-ice p-6 text-center border border-blue/10 hover:border-blue/30 transition-colors">
              <p className="text-3xl font-heading font-medium text-blue mb-1">$95</p>
              <p className="text-sm font-heading font-medium text-navy mb-1">Weight Loss — First Visit</p>
              <p className="text-xs font-body font-light text-text">Initial consultation + treatment</p>
            </div>
            <div className="bg-ice p-6 text-center border border-blue/10 hover:border-blue/30 transition-colors">
              <p className="text-3xl font-heading font-medium text-blue mb-1">$60</p>
              <p className="text-sm font-heading font-medium text-navy mb-1">Weight Loss — Follow-Up</p>
              <p className="text-xs font-body font-light text-text">Additional sessions</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 px-8 py-3.5 bg-blue text-white text-xs tracking-elegant uppercase font-body font-semibold hover:bg-blue-dark transition-all duration-300">
              Book Acupuncture <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* What is Acupuncture */}
      <section className="py-20 bg-cream">
        <div ref={intro.ref} className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${intro.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-blue text-xs tracking-luxe uppercase font-body font-medium mb-4">About the Treatment</p>
              <h2 className="text-3xl md:text-4xl font-heading font-medium text-navy mb-6">What is Acupuncture?</h2>
              <div className="section-divider mb-6" />
              <div className="space-y-4 text-text text-base font-body font-light leading-relaxed">
                <p>
                  Acupuncture is one of the oldest healing practices in the world, originating in China over 2,500 years ago. It involves the insertion of thin, sterile needles into specific points on the body to stimulate the nervous system and promote natural healing.
                </p>
                <p>
                  At Nirvelli Med Spa in Cary, NC, our acupuncture treatments are administered by experienced, licensed practitioners who combine traditional techniques with modern understanding of anatomy and physiology.
                </p>
                <p>
                  Whether you&apos;re seeking pain relief, stress reduction, anti-aging benefits, or weight loss support, acupuncture offers a natural, drug-free approach to wellness.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] img-zoom rounded-sm overflow-hidden">
              <Image src="/notable-benefits-of-acupuncture.png" alt="Benefits of acupuncture" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      {/* Facial Acupuncture */}
      <section className="py-20 bg-white">
        <div ref={facial.ref} className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${facial.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] img-zoom rounded-sm overflow-hidden order-2 lg:order-1">
              <Image src="/facial-acupuncture.png" alt="Facial acupuncture treatment" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-blue text-xs tracking-luxe uppercase font-body font-medium mb-4">Anti-Aging</p>
              <h2 className="text-3xl md:text-4xl font-heading font-medium text-navy mb-6">Facial Acupuncture</h2>
              <div className="section-divider mb-6" />
              <p className="text-text text-base font-body font-light leading-relaxed mb-4">
                Facial acupuncture is a natural alternative to Botox and fillers. By stimulating specific points on the face, it promotes collagen production, improves blood circulation, and rejuvenates the skin from within — with zero downtime.
              </p>
              <p className="text-text text-base font-body font-light leading-relaxed mb-6">
                Clients see visible improvements in fine lines, wrinkles, skin tone, and overall facial contour after a series of treatments. It&apos;s anti-aging that works with your body, not against it.
              </p>
              <div className="bg-ice p-5 mb-6">
                <p className="text-sm font-body font-semibold text-navy mb-1">Facial Acupuncture — $130</p>
                <p className="text-xs font-body font-light text-text">75-minute session. Natural, non-invasive anti-aging.</p>
              </div>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 text-blue text-sm font-body font-semibold hover:text-blue-dark transition-colors">
                Book Facial Acupuncture <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-ice">
        <div ref={benefits.ref} className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${benefits.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="text-center mb-12">
            <p className="text-blue text-xs tracking-luxe uppercase font-body font-medium mb-4">Proven Benefits</p>
            <h2 className="text-3xl md:text-4xl font-heading font-medium text-navy">Benefits of Acupuncture</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              "Improves collagen production for firmer skin",
              "Reduces fine lines and wrinkles naturally",
              "Tightens and tones facial muscles",
              "Improves blood circulation and lymphatic drainage",
              "Relieves chronic pain and tension",
              "Reduces stress, anxiety, and insomnia",
              "Supports digestive health and metabolism",
              "Boosts immune system function",
              "Balances hormones naturally",
              "Supports overall health and vitality",
            ].map((benefit) => (
              <div key={benefit} className="flex items-start gap-3 bg-white p-4">
                <CheckCircle size={18} className="text-blue shrink-0 mt-0.5" />
                <span className="text-sm font-body font-light text-charcoal">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weight Loss */}
      <section className="py-20 bg-white">
        <div ref={weight.ref} className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${weight.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-blue text-xs tracking-luxe uppercase font-body font-medium mb-4">Weight Management</p>
              <h2 className="text-3xl md:text-4xl font-heading font-medium text-navy mb-6">Acupuncture for Weight Loss</h2>
              <div className="section-divider mb-6" />
              <p className="text-text text-base font-body font-light leading-relaxed mb-4">
                Acupuncture supports weight loss by addressing the root causes that make losing weight difficult — stress, hormonal imbalances, and appetite control.
              </p>
              <div className="space-y-4 mb-6">
                {[
                  { title: "Stress Reduction", desc: "Lowers cortisol levels that contribute to belly fat storage and emotional eating." },
                  { title: "Hormonal Balance", desc: "Helps regulate thyroid, insulin, and other hormones that affect metabolism and weight." },
                  { title: "Appetite Control", desc: "Stimulates points that reduce cravings and help regulate hunger signals naturally." },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-blue shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-body font-semibold text-navy">{item.title}</p>
                      <p className="text-sm font-body font-light text-text">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-ice p-5 mb-6">
                <p className="text-sm font-body font-semibold text-navy mb-1">First Visit: $95 &nbsp;|&nbsp; Follow-Up: $60</p>
                <p className="text-xs font-body font-light text-text">Includes consultation and personalized treatment plan.</p>
              </div>
            </div>
            <div className="relative h-[400px] img-zoom rounded-sm overflow-hidden">
              <Image src="/acupuncture-for-weight-loss.png" alt="Acupuncture for weight loss in Cary NC" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/acupuncture.png" alt="" fill className="object-cover" sizes="100vw" />
        </div>
        <div className="absolute inset-0 bg-navy/90" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-medium text-white mb-6">
            Ready to Experience Acupuncture?
          </h2>
          <p className="text-white/60 text-sm font-body font-light mb-8 max-w-lg mx-auto">
            Book your acupuncture session today at Nirvelli Med Spa in Cary, NC. Serving Raleigh, Holly Springs, and the Triangle.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="group px-10 py-4 bg-blue text-white text-sm tracking-elegant uppercase font-body font-semibold hover:bg-blue-dark transition-all duration-300 flex items-center gap-2">
              Book Appointment <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="tel:919-297-0107" className="px-10 py-4 border border-white/30 text-white text-sm tracking-elegant uppercase font-body font-light hover:border-blue hover:text-blue transition-all duration-300 flex items-center gap-2">
              <Phone size={16} /> Call (919) 297-0107
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
