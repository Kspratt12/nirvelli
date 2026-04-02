"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, MapPin, Phone, Star, Award, Sparkles, Heart, Shield } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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

const heroImages = ["/hero-1.jpg", "/hero-2.jpg", "/hero-3.jpg"];

function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Rotating backgrounds */}
      {heroImages.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-[2000ms] ${i === current ? "opacity-100" : "opacity-0"}`}
        >
          <Image src={img} alt="Nirvelli Med Spa" fill className="object-cover" priority={i === 0} quality={90} sizes="100vw" />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/60 to-navy/90" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-16 sm:pt-20">
        <div className="animate-fade-in" style={{ animationDelay: "0.2s", opacity: 0 }}>
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-full mb-6 border border-white/10">
            <Award size={12} className="text-gold" />
            <span className="text-gold text-[9px] sm:text-[10px] font-body font-medium tracking-wide">5x Cary Living Diamond Award Winner</span>
          </div>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: "0.4s", opacity: 0 }}>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-heading font-medium text-white mb-3" style={{ textShadow: "0 2px 30px rgba(0,0,0,0.3)" }}>
            Nirvelli
          </h1>
        </div>

        <div className="animate-fade-in" style={{ animationDelay: "0.6s", opacity: 0 }}>
          <p className="text-white/80 text-sm md:text-base tracking-luxe uppercase font-body font-light mb-8" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.4)" }}>
            Med Spa & Laser - Cary, NC
          </p>
        </div>

        <div className="animate-fade-in" style={{ animationDelay: "0.8s", opacity: 0 }}>
          <div className="w-16 h-px bg-blue mx-auto mb-8" />
          <p className="text-white/80 text-sm md:text-lg font-body font-light max-w-xl mx-auto leading-relaxed mb-10" style={{ textShadow: "0 1px 6px rgba(0,0,0,0.3)" }}>
            Cary&apos;s premier med spa since 2003. Expert facials, massage, laser treatments, and injectables in a relaxing, award-winning environment.
          </p>
        </div>

        <div className="animate-fade-in-up flex flex-col sm:flex-row items-center justify-center gap-4" style={{ animationDelay: "1s", opacity: 0 }}>
          <Link href="/book" className="group px-8 py-3.5 bg-blue text-white text-xs tracking-elegant uppercase font-body font-medium hover:bg-blue-dark transition-all duration-300 flex items-center gap-2">
            Book Appointment <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/services" className="px-8 py-3.5 border border-white/30 text-white text-xs tracking-elegant uppercase font-body font-light hover:border-blue hover:text-blue transition-all duration-300">
            View Services
          </Link>
        </div>

        <div className="animate-fade-in mt-12 flex items-center justify-center gap-2 text-white/60" style={{ animationDelay: "1.2s", opacity: 0 }}>
          <Phone size={14} />
          <a href="tel:919-238-5040" className="text-sm font-body font-light hover:text-blue transition-colors">(919) 238-5040</a>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${i === current ? "bg-blue w-8" : "bg-white/30 w-1.5 hover:bg-white/50"}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

const services = [
  { title: "Facials & Skin Care", desc: "Clinically driven customized treatments designed to improve your skin's vitality. Chemical peels, microdermabrasion, and advanced skin rejuvenation.", icon: <Sparkles size={28} className="text-blue" /> },
  { title: "Massage Therapy", desc: "Award-winning massage therapy since 2003. Swedish, deep tissue, hot stone, aromatherapy, and medical massage.", icon: <Heart size={28} className="text-blue" /> },
  { title: "Laser Treatments", desc: "State-of-the-art laser hair removal, skin tightening, hyperpigmentation treatment, and vascular laser for rosacea.", icon: <Star size={28} className="text-blue" /> },
  { title: "Injectables & Fillers", desc: "Expert Botox, dermal fillers, and aesthetic injectables administered by certified medical professionals.", icon: <Shield size={28} className="text-blue" /> },
];

const reviews = [
  { name: "Cheryl Breidenbach", stars: 5, text: "I just had one of the best massages of my life at Nirvelli Med Spa. The masseuse's name is Kristen Roth. I'm from NYC and have been to several different masseuses. She used just the right amount of pressure and found and released tendons that others have not been able to find. I walked out feeling totally refreshed.", service: "Massage" },
  { name: "Roberto Client", stars: 5, text: "I went to Nirvelli for the first time this weekend and had a massage with Roberto. He was very professional and took time to get to know me prior to my service. It was one of the best massages I've had and I would definitely recommend him.", service: "Massage" },
  { name: "Sarah M.", stars: 5, text: "The masseuses and aestheticians at Nirvelli are among the best in the Triangle. I've been coming here for years and the quality never drops.", service: "Massage & Facial" },
  { name: "Jennifer L.", stars: 5, text: "Dr. Heather and her team are incredible. The laser treatments have completely transformed my skin. Worth every penny.", service: "Laser Treatment" },
  { name: "Rachel T.", stars: 5, text: "I've been a Spa Club member for over a year. $89/month for a premium treatment is an absolute steal. Love this place.", service: "Spa Club Member" },
];

const faqs = [
  { q: "What is the Nirvelli Spa Club?", a: "For $89/month, members receive one premium treatment of their choice plus 15% off all products and spa add-on services. The best value in Cary for consistent self-care." },
  { q: "Do I need a consultation before laser treatments?", a: "Yes, we offer complimentary consultations for all laser services to assess your skin type, discuss expectations, and create a personalized treatment plan." },
  { q: "What makes Nirvelli different from other spas?", a: "We've been serving Cary since 2003 and are 5x Cary Living Diamond Award Winners. Our team includes licensed medical professionals, chiropractors, and certified aestheticians." },
  { q: "Do you accept insurance?", a: "Med spa services are typically not covered by insurance. However, some chiropractic and medical massage services may be eligible. Contact us for details." },
  { q: "What should I expect on my first visit?", a: "Arrive 10-15 minutes early to complete paperwork. Your provider will conduct a thorough consultation to understand your goals before beginning any treatment." },
  { q: "What is your cancellation policy?", a: "We require 24 hours notice for cancellations. Late cancellations may be subject to a fee. We understand schedules change - just give us a call." },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-blue text-xs tracking-luxe uppercase font-body font-light mb-4">Common Questions</p>
          <h2 className="text-4xl md:text-5xl font-heading font-medium text-navy">
            Frequently <span className="italic text-blue">Asked</span>
          </h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-100 rounded-lg overflow-hidden">
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full flex items-center justify-between px-6 py-5 text-left group hover:bg-ice/50 transition-colors">
                <span className="text-sm font-body font-medium text-charcoal pr-4">{faq.q}</span>
                <span className={`text-blue text-xl font-light shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-45" : ""}`}>+</span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}>
                <p className="px-6 pb-5 text-sm font-body font-light text-text leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const about = useInView();
  const servicesSection = useInView();
  const cta = useInView();

  return (
    <>
      {/* Hero with rotating images */}
      <HeroCarousel />

      {/* Quick Book Widget - overlaps hero */}
      <section className="relative -mt-16 z-20 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-2xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-5">
              <h2 className="text-2xl md:text-3xl font-heading font-medium text-navy">Book your service</h2>
              <div className="flex flex-wrap gap-2">
                {["Facials", "Massage", "HydraFacial", "Injectables"].map(cat => (
                  <Link key={cat} href="/book" className="px-4 py-2 text-[10px] tracking-wide font-body font-medium border border-gray-300 text-charcoal hover:bg-navy hover:text-white hover:border-navy transition-all">
                    {cat}
                  </Link>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 pb-5 border-b border-gray-200">
              {[
                { name: "1st Time Facial", price: "$69" },
                { name: "1st Time Massage", price: "$69" },
                { name: "Signature HydraFacial", price: "$199" },
                { name: "Botox / Xeomin", price: "$14/unit" },
              ].map(s => (
                <div key={s.name} className="flex items-center justify-between py-2">
                  <span className="text-sm font-body font-light text-charcoal">{s.name}</span>
                  <span className="text-sm font-body font-medium text-blue">{s.price}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-5">
              <div className="flex flex-wrap items-center gap-3 text-xs text-text font-body font-light">
                <span className="flex items-center gap-1.5"><Clock size={12} className="text-blue" /> Mon-Fri: 7am-7pm</span>
                <span className="flex items-center gap-1.5"><Clock size={12} className="text-blue" /> Sat: 9am-4pm</span>
                <a href="tel:919-238-5040" className="flex items-center gap-1.5 hover:text-blue transition-colors"><Phone size={12} className="text-blue" /> (919) 238-5040</a>
              </div>
              <Link href="/book" className="shrink-0 px-10 py-3 bg-navy text-white text-xs tracking-elegant uppercase font-body font-medium hover:bg-blue transition-all duration-300">
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Banner */}
      <section className="py-5 bg-gold">
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {[
            { icon: <Award size={16} />, text: "5x Diamond Award" },
            { icon: <Star size={16} />, text: "Best Spa - Cary News" },
            { icon: <Heart size={16} />, text: "Est. 2003" },
            { icon: <Shield size={16} />, text: "200+ Reviews" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-white">
              {item.icon}
              <span className="text-[10px] sm:text-xs font-body font-medium tracking-wide uppercase">{item.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* New Client Specials */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-blue text-xs tracking-luxe uppercase font-body font-light mb-3">New Client Specials</p>
            <h2 className="text-3xl md:text-4xl font-heading font-medium text-navy">First Time? We&apos;ve Got You.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-ice p-8 text-center border border-blue/10 hover:border-blue/30 transition-colors">
              <p className="text-4xl font-heading font-medium text-blue mb-2">$69</p>
              <p className="text-lg font-heading font-medium text-navy mb-1">One Hour Facial</p>
              <p className="text-xs font-body font-light text-text">New clients only. 60 min customized facial.</p>
            </div>
            <div className="bg-ice p-8 text-center border border-blue/10 hover:border-blue/30 transition-colors">
              <p className="text-4xl font-heading font-medium text-blue mb-2">$69</p>
              <p className="text-lg font-heading font-medium text-navy mb-1">One Hour Massage</p>
              <p className="text-xs font-body font-light text-text">New clients only. 60 min customized massage.</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <a href="tel:919-238-5040" className="group inline-flex items-center gap-2 px-8 py-3 bg-navy text-white text-xs tracking-elegant uppercase font-body font-medium hover:bg-blue transition-all duration-300">
              Book Your First Visit <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-24 bg-white">
        <div ref={about.ref} className={`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${about.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-blue text-xs tracking-luxe uppercase font-body font-light mb-4">About Us</p>
          <h2 className="text-4xl md:text-5xl font-heading font-medium text-navy mb-8">Welcome to Nirvelli</h2>
          <div className="w-12 h-px bg-blue mx-auto mb-8" />
          <p className="text-text text-lg md:text-xl font-heading font-light leading-relaxed max-w-3xl mx-auto mb-6">
            Nirvelli - meaning &ldquo;Water Child&rdquo; - has been Cary&apos;s sanctuary for wellness and beauty since 2003. Founded by Dr. Heather and Dr. David Sefried, our med spa blends clinical expertise with a deeply relaxing spa experience.
          </p>
          <p className="text-text text-base font-body font-light leading-relaxed max-w-2xl mx-auto">
            Voted &ldquo;Favorite Place to Get Pampered&rdquo; five years running by Cary Living Magazine.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-ice">
        <div ref={servicesSection.ref} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${servicesSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="text-center mb-16">
            <p className="text-blue text-xs tracking-luxe uppercase font-body font-light mb-4">What We Offer</p>
            <h2 className="text-4xl md:text-5xl font-heading font-medium text-navy">Our Services</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <Link key={s.title} href="/services" className="bg-white p-8 text-center group hover:shadow-xl transition-all duration-500 border border-transparent hover:border-blue/20">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-ice flex items-center justify-center group-hover:bg-blue/10 transition-colors">{s.icon}</div>
                <h3 className="text-xl font-heading font-medium text-navy mb-3">{s.title}</h3>
                <p className="text-text text-sm font-body font-light leading-relaxed mb-6">{s.desc}</p>
                <span className="text-blue text-xs tracking-elegant uppercase font-body font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">Learn More <ArrowRight size={12} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Spa Club */}
      <section className="py-20 bg-navy">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 md:p-14 text-center">
            <Award className="mx-auto text-gold mb-6" size={32} />
            <h2 className="text-3xl md:text-4xl font-heading font-medium text-white mb-4">Nirvelli Spa Club</h2>
            <p className="text-5xl md:text-6xl font-heading font-medium text-blue mb-2">$89<span className="text-lg text-white/50">/month</span></p>
            <p className="text-white/60 text-sm font-body font-light max-w-lg mx-auto mb-8 leading-relaxed">
              Your choice of one premium treatment every month plus 15% off all products and spa add-on services.
            </p>
            <Link href="/spa-club" className="group inline-flex items-center gap-2 px-8 py-3.5 bg-blue text-white text-xs tracking-elegant uppercase font-body font-medium hover:bg-blue-dark transition-all duration-300">
              Join the Club <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-blue text-xs tracking-luxe uppercase font-body font-light mb-4">What Our Clients Say</p>
            <h2 className="text-4xl md:text-5xl font-heading font-medium text-navy mb-4">Client <span className="italic text-blue">Reviews</span></h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="flex gap-0.5">{[1,2,3,4,5].map((i) => (<svg key={i} viewBox="0 0 24 24" width="18" height="18" fill="#2ea3f2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>))}</div>
              <span className="text-sm font-body font-medium text-charcoal ml-1">4.4</span>
              <span className="text-xs font-body font-light text-text">/ 200+ reviews</span>
            </div>
          </div>
          <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: "none" }}>
            {reviews.map((r, i) => (
              <div key={i} className="shrink-0 w-80 sm:w-96 bg-ice p-7 snap-center">
                <div className="flex gap-0.5 mb-3">{Array.from({ length: r.stars }, (_, j) => (<svg key={j} viewBox="0 0 24 24" width="14" height="14" fill="#2ea3f2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>))}</div>
                <p className="text-sm font-body font-light text-charcoal/80 leading-relaxed mb-5 italic">&ldquo;{r.text}&rdquo;</p>
                <p className="text-xs font-body font-medium text-navy">{r.name}</p>
                <p className="text-[10px] font-body font-light text-text mt-0.5">{r.service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-24 bg-ice">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-blue text-xs tracking-luxe uppercase font-body font-light mb-4">Visit Us</p>
            <h2 className="text-4xl md:text-5xl font-heading font-medium text-navy">Find Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div className="text-center">
              <MapPin className="mx-auto text-blue mb-3" size={22} />
              <p className="text-sm font-body font-light text-text">151 Quarrystone Circle, Suite 116<br />Cary, NC 27519</p>
            </div>
            <div className="text-center">
              <Phone className="mx-auto text-blue mb-3" size={22} />
              <a href="tel:919-238-5040" className="text-sm font-body font-light text-text hover:text-blue transition-colors">(919) 238-5040</a>
            </div>
            <div className="text-center">
              <Clock className="mx-auto text-blue mb-3" size={22} />
              <p className="text-sm font-body font-light text-text">Mon-Fri: 7am-7pm<br />Sat: 9am-4pm</p>
            </div>
          </div>
          <iframe src="https://www.google.com/maps?q=151+Quarrystone+Circle+Suite+116+Cary+NC+27519&output=embed" className="w-full h-72 md:h-96 border-0 grayscale hover:grayscale-0 transition-all duration-500" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Nirvelli Med Spa Location" />
        </div>
      </section>

      {/* FAQ */}
      <FAQSection />

      {/* CTA */}
      <section className="relative py-32 bg-navy overflow-hidden">
        <div ref={cta.ref} className={`relative z-10 max-w-3xl mx-auto px-4 text-center transition-all duration-1000 ${cta.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-4xl md:text-5xl font-heading font-medium text-white mb-6">Ready to Feel Your Best?</h2>
          <p className="text-white/60 text-base font-body font-light mb-10 max-w-lg mx-auto">Book your appointment today and experience why Nirvelli has been Cary&apos;s favorite spa for over 20 years.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/book" className="group px-10 py-4 bg-blue text-white text-xs tracking-elegant uppercase font-body font-medium hover:bg-blue-dark transition-all duration-300 flex items-center gap-2">
              Book Now <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
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
