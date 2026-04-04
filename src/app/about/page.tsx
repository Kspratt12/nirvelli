"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
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
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image src="/staff.png" alt="Nirvelli Med Spa team" fill className="object-cover" quality={90} sizes="100vw" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/50 via-navy/30 to-navy/70" />
        <div className="relative z-10 text-center">
          <div className="animate-fade-in" style={{ animationDelay: "0.2s", opacity: 0 }}>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-px bg-blue" />
              <p className="text-blue text-xs tracking-luxe uppercase font-body font-semibold">Our Story</p>
              <div className="w-12 h-px bg-blue" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-semibold text-white animate-fade-in-up">About Nirvelli</h1>
          <p className="text-white/60 text-sm font-body font-light mt-4 animate-fade-in" style={{ animationDelay: "0.3s", opacity: 0 }}>
            Award-Winning Med Spa in Cary, NC Since 2003
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-32 bg-white">
        <div ref={story.ref} className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${story.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-px bg-blue" />
                <p className="text-blue text-xs tracking-luxe uppercase font-body font-semibold">Cary, NC &middot; Est. 2003</p>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-semibold text-navy mb-8 leading-[1.1]">
                Award-Winning Care<br />Since <span className="italic text-blue">2003</span>
              </h2>
              <div className="space-y-5 text-text font-body font-light leading-relaxed">
                <p className="text-lg">
                  <strong className="text-navy font-medium">Nirvelli</strong>, a Native American word meaning &ldquo;Water Child&rdquo; of Cherokee origin, was founded with a belief in the power of natural healing. Our name reflects our approach: gentle, restorative, and deeply effective.
                </p>
                <p className="text-base text-text/60">
                  Founded by <strong className="text-navy font-medium">Dr. Heather Sefried</strong> and <strong className="text-navy font-medium">Dr. David Sefried</strong>, Nirvelli has grown from a small wellness practice into one of the Triangle&apos;s most trusted med spas. For over 20 years, we&apos;ve been helping clients achieve real, visible results through medical-grade treatments and personalized care.
                </p>
                <p className="text-base text-text/60">
                  We&apos;ve been providing the Cary, NC area with the highest quality massage, acupuncture, facial, and laser services, combining clinical expertise with a deeply relaxing spa experience.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[520px] rounded-xl overflow-hidden">
                <Image src="/product-4-eminence-organic-skin-care.jpg" alt="Nirvelli Med Spa products" fill className="object-cover" quality={90} sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white shadow-2xl p-8 rounded-xl hidden md:block border border-gray-100">
                <div className="flex items-center gap-8">
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
          </div>

          {/* Awards */}
          <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Award size={24} className="text-gold" />, title: "5x Diamond Award", desc: "Cary Living, \"Favorite Place to Get Pampered\"" },
              { icon: <Heart size={24} className="text-gold" />, title: "Best Spa", desc: "Voted Best Spa by Cary News, 5 years running" },
              { icon: <Users size={24} className="text-gold" />, title: "Best Massage", desc: "Voted Best Massage Therapist by Cary News" },
              { icon: <Shield size={24} className="text-gold" />, title: "20+ Years", desc: "Trusted by the Cary community since 2003" },
            ].map((award) => (
              <div key={award.title} className="bg-ice p-7 rounded-xl text-center hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">{award.icon}</div>
                <h3 className="text-sm font-heading font-semibold text-navy mb-1">{award.title}</h3>
                <p className="text-xs font-body font-light text-text/60">{award.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-32 bg-cream">
        <div ref={team.ref} className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${team.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-px bg-blue" />
              <p className="text-blue text-xs tracking-luxe uppercase font-body font-semibold">Our Experts</p>
              <div className="w-12 h-px bg-blue" />
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-semibold text-navy">Meet the <span className="italic text-blue">Leadership</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Heather Sefried, D.C.",
                role: "Owner & Founder",
                image: "/dr-heather-2.png",
                position: "object-center",
                bio: "Born in Johnstown, Pennsylvania. Doctor of Chiropractic from Sherman College (1999). Over 25 years of experience in holistic wellness and clinical aesthetics. The driving force behind Nirvelli.",
                tags: ["Holistic Wellness", "Clinical Aesthetics", "Business Leadership"],
              },
              {
                name: "Dr. David Sefried, D.C.",
                role: "Co-Owner & Chiropractor",
                image: "/dr-david-sefried.png",
                position: "object-top",
                bio: "Provides chiropractic treatments and acupuncture through Preston Chiropractic. Specializes in holistic pain management, facial acupuncture, and weight loss programs.",
                tags: ["Chiropractic", "Acupuncture", "Pain Management"],
              },
              {
                name: "Dr. Ed Hagerich, D.C.",
                role: "Chiropractor & Specialist",
                image: "/staff3.jpg",
                position: "object-top",
                bio: "Deep expertise in spinal health, pain management, and integrative wellness. Focused on comprehensive musculoskeletal care and holistic recovery.",
                tags: ["Spinal Health", "Pain Management", "Integrative Wellness"],
              },
            ].map((member) => (
              <div key={member.name} className="group">
                <div className="relative h-80 rounded-xl overflow-hidden mb-6">
                  <Image src={member.image} alt={member.name} fill className={`object-cover ${member.position} transition-transform duration-700 group-hover:scale-105`} sizes="(max-width: 768px) 100vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="text-center">
                  <p className="text-blue text-xs tracking-elegant uppercase font-body font-bold mb-2">{member.role}</p>
                  <h3 className="text-xl font-heading font-semibold text-navy mb-3">{member.name}</h3>
                  <p className="text-text text-sm font-body font-light leading-relaxed mb-4 max-w-xs mx-auto">{member.bio}</p>
                  <div className="flex flex-wrap justify-center gap-1.5">
                    {member.tags.map((tag) => (
                      <span key={tag} className="bg-ice text-navy text-[10px] font-body font-medium px-3 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-32 bg-white">
        <div ref={values.ref} className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${values.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative h-[480px] rounded-xl overflow-hidden">
              <Image src="/our-massage-therapist-and-specialist.png" alt="Nirvelli Med Spa treatments" fill className="object-cover" quality={90} sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-px bg-blue" />
                <p className="text-blue text-xs tracking-luxe uppercase font-body font-semibold">The Difference</p>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-semibold text-navy mb-8 leading-[1.1]">
                Why Choose<br /><span className="italic text-blue">Nirvelli</span>?
              </h2>
              <p className="text-text text-lg font-body font-light leading-relaxed mb-10">
                We&apos;re not just a spa. We&apos;re a results-driven medical aesthetics practice with over two decades of proven outcomes.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "20+ years experience",
                  "Medical-grade treatments",
                  "Licensed practitioners",
                  "Personalized care plans",
                  "Proven, measurable results",
                  "Award-winning team",
                  "Comprehensive services",
                  "Serving the Triangle",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <CheckCircle size={15} className="text-blue shrink-0" />
                    <span className="text-sm font-body text-charcoal">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[450px]">
          <div className="bg-navy py-24 lg:py-32 px-8 md:px-16 lg:px-20 flex items-center relative overflow-hidden">
            <div className="absolute inset-0 lg:hidden">
              <Image src="/product-5.jpg" alt="" fill className="object-cover opacity-20" sizes="100vw" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-px bg-blue" />
                <p className="text-blue text-xs tracking-luxe uppercase font-body font-semibold">Visit Us</p>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-semibold text-white mb-6 leading-[1.1]">
                Experience the<br />Nirvelli <span className="italic text-blue">Difference</span>
              </h2>
              <p className="text-white/50 text-lg font-body font-light mb-10 max-w-md">
                See why we&apos;ve been Cary&apos;s most trusted med spa for over 20 years. Book your first visit today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="group px-10 py-4 bg-blue text-white text-sm tracking-elegant uppercase font-body font-bold hover:bg-blue-dark transition-all duration-300 inline-flex items-center gap-2">
                  Book Your Visit <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="tel:919-297-0107" className="px-10 py-4 border border-white/20 text-white text-sm tracking-elegant uppercase font-body font-light hover:border-blue hover:text-blue transition-all duration-300 inline-flex items-center gap-2">
                  (919) 297-0107
                </a>
              </div>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <Image src="/product-5.jpg" alt="Nirvelli products" fill className="object-cover" quality={90} sizes="50vw" />
          </div>
        </div>
      </section>
    </>
  );
}
