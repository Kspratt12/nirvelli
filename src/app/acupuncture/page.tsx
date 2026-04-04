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
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image src="/acupuncture.png" alt="Acupuncture treatment in Cary NC" fill className="object-cover" quality={90} sizes="100vw" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/50 via-navy/30 to-navy/70" />
        <div className="relative z-10 text-center px-4">
          <div className="animate-fade-in" style={{ animationDelay: "0.2s", opacity: 0 }}>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-px bg-blue" />
              <p className="text-blue text-xs tracking-luxe uppercase font-body font-semibold">Natural Healing</p>
              <div className="w-12 h-px bg-blue" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-semibold text-white animate-fade-in-up">
            Acupuncture
          </h1>
          <p className="text-white/70 text-base md:text-lg font-body font-light mt-4 max-w-xl mx-auto animate-fade-in" style={{ animationDelay: "0.3s", opacity: 0 }}>
            Facial rejuvenation, weight loss support, pain relief, and holistic wellness in Cary, NC.
          </p>
        </div>
      </section>

      {/* Pricing Bar */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { price: "$130", name: "Facial Acupuncture", note: "75 minutes" },
              { price: "$95", name: "Weight Loss, First Visit", note: "Consultation + treatment" },
              { price: "$60", name: "Weight Loss, Follow-Up", note: "Additional sessions" },
            ].map((item) => (
              <a key={item.name} href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="p-6 bg-ice rounded-2xl text-center border border-transparent hover:border-blue/20 hover:shadow-lg transition-all duration-300 group">
                <p className="text-3xl font-heading font-bold text-blue mb-2">{item.price}</p>
                <p className="text-sm font-heading font-semibold text-navy group-hover:text-blue transition-colors mb-1">{item.name}</p>
                <p className="text-xs font-body font-light text-text/50">{item.note}</p>
              </a>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 px-8 py-3.5 bg-navy text-white text-xs tracking-elegant uppercase font-body font-bold hover:bg-blue transition-all duration-300">
              Book Acupuncture <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* What is Acupuncture */}
      <section className="py-32 bg-cream">
        <div ref={intro.ref} className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${intro.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-px bg-blue" />
                <p className="text-blue text-xs tracking-luxe uppercase font-body font-semibold">About the Treatment</p>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-semibold text-navy mb-8 leading-[1.1]">
                What is<br /><span className="italic text-blue">Acupuncture</span>?
              </h2>
              <div className="space-y-5 text-text text-lg font-body font-light leading-relaxed">
                <p>
                  Acupuncture is one of the oldest healing practices in the world, originating in China over 2,500 years ago. It involves the insertion of thin, sterile needles into specific points on the body to stimulate the nervous system and promote natural healing.
                </p>
                <p className="text-base text-text/60">
                  At Nirvelli Med Spa in Cary, NC, our acupuncture treatments are administered by experienced, licensed practitioners who combine traditional techniques with modern understanding of anatomy and physiology.
                </p>
                <p className="text-base text-text/60">
                  Whether you&apos;re seeking pain relief, stress reduction, anti-aging benefits, or weight loss support, acupuncture offers a natural, drug-free approach to wellness.
                </p>
              </div>
            </div>
            <div className="relative h-[520px] rounded-xl overflow-hidden">
              <Image src="/notable-benefits-of-acupuncture.png" alt="Benefits of acupuncture" fill className="object-cover" quality={90} sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      {/* Facial Acupuncture */}
      <section className="py-32 bg-white">
        <div ref={facial.ref} className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${facial.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative h-[520px] rounded-xl overflow-hidden order-2 lg:order-1">
              <Image src="/facial-acupuncture.png" alt="Facial acupuncture treatment" fill className="object-cover" quality={90} sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-px bg-blue" />
                <p className="text-blue text-xs tracking-luxe uppercase font-body font-semibold">Anti-Aging</p>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-semibold text-navy mb-8 leading-[1.1]">
                Facial<br /><span className="italic text-blue">Acupuncture</span>
              </h2>
              <p className="text-text text-lg font-body font-light leading-relaxed mb-5">
                Facial acupuncture is a natural alternative to Botox and fillers. By stimulating specific points on the face, it promotes collagen production, improves blood circulation, and rejuvenates the skin from within, with zero downtime.
              </p>
              <p className="text-text/60 text-base font-body font-light leading-relaxed mb-8">
                Clients see visible improvements in fine lines, wrinkles, skin tone, and overall facial contour after a series of treatments. It&apos;s anti-aging that works with your body, not against it.
              </p>
              <div className="bg-ice rounded-xl p-6 mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-body font-semibold text-navy">Facial Acupuncture</p>
                    <p className="text-xs font-body font-light text-text/50">75-minute session. Natural, non-invasive anti-aging.</p>
                  </div>
                  <span className="text-2xl font-heading font-bold text-blue">$130</span>
                </div>
              </div>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 px-8 py-3.5 bg-navy text-white text-xs tracking-elegant uppercase font-body font-bold hover:bg-blue transition-all duration-300">
                Book Facial Acupuncture <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-32 bg-ice">
        <div ref={benefits.ref} className={`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${benefits.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-px bg-blue" />
              <p className="text-blue text-xs tracking-luxe uppercase font-body font-semibold">Proven Benefits</p>
              <div className="w-12 h-px bg-blue" />
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-semibold text-navy">Benefits of <span className="italic text-blue">Acupuncture</span></h2>
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
              <div key={benefit} className="flex items-start gap-3 bg-white p-5 rounded-xl border border-gray-100 hover:border-blue/20 hover:shadow-sm transition-all">
                <CheckCircle size={16} className="text-blue shrink-0 mt-0.5" />
                <span className="text-sm font-body text-charcoal">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weight Loss */}
      <section className="py-32 bg-white">
        <div ref={weight.ref} className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${weight.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-px bg-blue" />
                <p className="text-blue text-xs tracking-luxe uppercase font-body font-semibold">Weight Management</p>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-semibold text-navy mb-8 leading-[1.1]">
                Acupuncture for<br /><span className="italic text-blue">Weight Loss</span>
              </h2>
              <p className="text-text text-lg font-body font-light leading-relaxed mb-8">
                Acupuncture supports weight loss by addressing the root causes that make losing weight difficult: stress, hormonal imbalances, and appetite control.
              </p>
              <div className="space-y-5 mb-8">
                {[
                  { title: "Stress Reduction", desc: "Lowers cortisol levels that contribute to belly fat storage and emotional eating." },
                  { title: "Hormonal Balance", desc: "Helps regulate thyroid, insulin, and other hormones that affect metabolism." },
                  { title: "Appetite Control", desc: "Stimulates points that reduce cravings and help regulate hunger signals naturally." },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue/10 flex items-center justify-center shrink-0">
                      <CheckCircle size={18} className="text-blue" />
                    </div>
                    <div>
                      <p className="text-sm font-body font-semibold text-navy">{item.title}</p>
                      <p className="text-sm font-body font-light text-text/60">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-ice rounded-xl p-6">
                <p className="text-sm font-body font-semibold text-navy">First Visit: $95 &nbsp;|&nbsp; Follow-Up: $60</p>
                <p className="text-xs font-body font-light text-text/50 mt-1">Includes consultation and personalized treatment plan.</p>
              </div>
            </div>
            <div className="relative h-[520px] rounded-xl overflow-hidden">
              <Image src="/acupuncture-for-weight-loss.png" alt="Acupuncture for weight loss in Cary NC" fill className="object-cover" quality={90} sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[450px]">
          <div className="bg-navy py-24 lg:py-32 px-8 md:px-16 lg:px-20 flex items-center">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-px bg-blue" />
                <p className="text-blue text-xs tracking-luxe uppercase font-body font-semibold">Get Started</p>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-semibold text-white mb-6 leading-[1.1]">
                Ready to Experience<br /><span className="italic text-blue">Acupuncture</span>?
              </h2>
              <p className="text-white/50 text-lg font-body font-light mb-10 max-w-md">
                Book your session today. Serving Cary, Raleigh, Holly Springs, and the Triangle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="group px-10 py-4 bg-blue text-white text-sm tracking-elegant uppercase font-body font-bold hover:bg-blue-dark transition-all duration-300 inline-flex items-center gap-2">
                  Book Appointment <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="tel:919-297-0107" className="px-10 py-4 border border-white/20 text-white text-sm tracking-elegant uppercase font-body font-light hover:border-blue hover:text-blue transition-all duration-300 inline-flex items-center gap-2">
                  <Phone size={16} /> (919) 297-0107
                </a>
              </div>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <Image src="/acupuncture.png" alt="Acupuncture at Nirvelli" fill className="object-cover" quality={90} sizes="50vw" />
          </div>
        </div>
      </section>
    </>
  );
}
