"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, CheckCircle, Heart, Shield, Users } from "lucide-react";

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

export default function About() {
  const story = useInView();
  const team = useInView();
  const values = useInView();

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image src="/staff.png" alt="Nirvelli Med Spa team" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/50 to-navy/80" />
        <div className="relative z-10 text-center">
          <p className="text-blue text-xs tracking-luxe uppercase font-body font-medium mb-4 animate-fade-in">Our Story</p>
          <h1 className="text-5xl md:text-7xl font-heading font-medium text-white animate-fade-in-up">About Nirvelli</h1>
          <p className="text-white/70 text-sm font-body font-light mt-4 animate-fade-in" style={{ animationDelay: "0.3s", opacity: 0 }}>
            Award-Winning Med Spa in Cary, NC Since 2003
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div ref={story.ref} className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${story.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Award className="text-gold mb-6" size={32} />
              <h2 className="text-4xl md:text-5xl font-heading font-medium text-navy mb-6">
                Providing Award-Winning Care Since <span className="italic text-blue">2002</span>
              </h2>
              <div className="section-divider mb-6" />
              <div className="space-y-4 text-text text-base font-body font-light leading-relaxed">
                <p>
                  <strong className="text-navy font-medium">Nirvelli</strong>, a Native American word meaning &ldquo;Water Child&rdquo; of Cherokee origin, was founded with a belief in the power of natural healing. Our name reflects our approach: gentle, restorative, and deeply effective.
                </p>
                <p>
                  Founded by <strong className="text-navy font-medium">Dr. Heather Sefried</strong> and <strong className="text-navy font-medium">Dr. David Sefried</strong>, Nirvelli has grown from a small wellness practice into one of the Triangle&apos;s most trusted med spas. For over 20 years, we&apos;ve been helping clients achieve real, visible results through medical-grade treatments and personalized care.
                </p>
                <p>
                  We&apos;ve been providing the Cary, NC area with the highest quality massage, acupuncture, facial, and laser services, combining clinical expertise with a deeply relaxing spa experience.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[450px] img-zoom rounded-sm overflow-hidden">
                <Image src="/our-massage-therapist-and-specialist.png" alt="Nirvelli Med Spa treatments" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
            </div>
          </div>

          {/* Awards & Recognition */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Award size={24} className="text-gold" />, title: "5x Diamond Award", desc: "Cary Living, \"Favorite Place to Get Pampered\"" },
              { icon: <Heart size={24} className="text-gold" />, title: "Best Spa", desc: "Voted Best Spa by Cary News, 5 years running" },
              { icon: <Users size={24} className="text-gold" />, title: "Best Massage", desc: "Voted Best Massage Therapist by Cary News" },
              { icon: <Shield size={24} className="text-gold" />, title: "20+ Years", desc: "Trusted by the Cary community since 2003" },
            ].map((award) => (
              <div key={award.title} className="bg-ice p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">{award.icon}</div>
                <h3 className="text-sm font-heading font-medium text-navy mb-1">{award.title}</h3>
                <p className="text-xs font-body font-light text-text">{award.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-cream">
        <div ref={team.ref} className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${team.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="text-center mb-16">
            <p className="text-blue text-xs tracking-luxe uppercase font-body font-medium mb-4">Our Experts</p>
            <h2 className="text-4xl md:text-5xl font-heading font-medium text-navy">Meet the <span className="italic text-blue">Leadership</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Dr. Heather */}
            <div className="bg-white overflow-hidden group hover:shadow-xl transition-all duration-500">
              <div className="relative h-72 img-zoom">
                <Image src="/dr-heather-2.png" alt="Dr. Heather Sefried" fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="p-6 text-center">
                <p className="text-blue text-xs tracking-elegant uppercase font-body font-semibold mb-2">Owner & Founder</p>
                <h3 className="text-xl font-heading font-medium text-navy mb-3">Dr. Heather Sefried, D.C.</h3>
                <p className="text-text text-sm font-body font-light leading-relaxed mb-4">
                  Born in Johnstown, Pennsylvania. Doctor of Chiropractic from Sherman College of Chiropractic (1999). Over 25 years of experience in holistic wellness and clinical aesthetics. The driving force behind Nirvelli&apos;s vision of combining clinical expertise with natural healing.
                </p>
                <div className="space-y-1">
                  {["Holistic Wellness", "Clinical Aesthetics", "Business Leadership"].map((s) => (
                    <span key={s} className="inline-block bg-ice text-navy text-[10px] font-body font-medium px-2 py-1 mr-1">{s}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Dr. David */}
            <div className="bg-white overflow-hidden group hover:shadow-xl transition-all duration-500">
              <div className="relative h-72 img-zoom">
                <Image src="/dr-david-sefried.png" alt="Dr. David Sefried" fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="p-6 text-center">
                <p className="text-blue text-xs tracking-elegant uppercase font-body font-semibold mb-2">Co-Owner & Chiropractor</p>
                <h3 className="text-xl font-heading font-medium text-navy mb-3">Dr. David Sefried, D.C.</h3>
                <p className="text-text text-sm font-body font-light leading-relaxed mb-4">
                  Provides chiropractic treatments and acupuncture through Preston Chiropractic and Acupuncture. Specializes in holistic pain management, facial acupuncture for anti-aging, and weight loss acupuncture programs.
                </p>
                <div className="space-y-1">
                  {["Chiropractic", "Acupuncture", "Pain Management"].map((s) => (
                    <span key={s} className="inline-block bg-ice text-navy text-[10px] font-body font-medium px-2 py-1 mr-1">{s}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Dr. Ed */}
            <div className="bg-white overflow-hidden group hover:shadow-xl transition-all duration-500">
              <div className="relative h-72 img-zoom">
                <Image src="/staff.png" alt="Dr. Ed Hagerich" fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="p-6 text-center">
                <p className="text-blue text-xs tracking-elegant uppercase font-body font-semibold mb-2">Chiropractor & Specialist</p>
                <h3 className="text-xl font-heading font-medium text-navy mb-3">Dr. Ed Hagerich, D.C.</h3>
                <p className="text-text text-sm font-body font-light leading-relaxed mb-4">
                  An experienced Doctor of Chiropractic bringing deep expertise in spinal health, pain management, and integrative wellness. Dr. Hagerich complements the team with his focus on comprehensive musculoskeletal care and holistic recovery.
                </p>
                <div className="space-y-1">
                  {["Spinal Health", "Pain Management", "Integrative Wellness"].map((s) => (
                    <span key={s} className="inline-block bg-ice text-navy text-[10px] font-body font-medium px-2 py-1 mr-1">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Nirvelli */}
      <section className="py-24 bg-white">
        <div ref={values.ref} className={`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${values.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="text-center mb-14">
            <h2 className="text-4xl font-heading font-medium text-navy mb-4">Why Choose <span className="italic text-blue">Nirvelli</span></h2>
            <p className="text-text text-base font-body font-light max-w-2xl mx-auto">
              We&apos;re not just a spa. We&apos;re a results-driven medical aesthetics practice with over two decades of proven outcomes.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              "20+ years of experience in medical aesthetics",
              "Medical-grade treatments with clinical-grade products",
              "Licensed chiropractors and medical professionals on staff",
              "Personalized care plans for every client",
              "Proven results backed by thousands of treatments",
              "Award-winning team recognized by the community",
              "Comprehensive services under one roof",
              "Serving Cary, Raleigh, Holly Springs & Morrisville",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle size={18} className="text-blue shrink-0 mt-0.5" />
                <span className="text-sm font-body font-light text-charcoal">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/hero-1.jpg" alt="" fill className="object-cover" sizes="100vw" />
        </div>
        <div className="absolute inset-0 bg-navy/90" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-medium text-white mb-6">Experience the Nirvelli Difference</h2>
          <p className="text-white/60 text-sm font-body font-light mb-8 max-w-lg mx-auto">
            See why we&apos;ve been Cary&apos;s most trusted med spa for over 20 years. Book your first visit today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 px-10 py-4 bg-blue text-white text-sm tracking-elegant uppercase font-body font-semibold hover:bg-blue-dark transition-all duration-300">
              Book Your Visit <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="tel:919-297-0107" className="px-10 py-4 border border-white/30 text-white text-sm tracking-elegant uppercase font-body font-light hover:border-blue hover:text-blue transition-all duration-300">
              Call (919) 297-0107
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
