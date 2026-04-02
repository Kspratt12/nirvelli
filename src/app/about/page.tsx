"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Heart } from "lucide-react";

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

  return (
    <>
      <section className="relative h-[50vh] flex items-center justify-center bg-navy overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy/90 to-navy" />
        <div className="relative z-10 text-center">
          <p className="text-blue text-xs tracking-luxe uppercase font-body font-light mb-4 animate-fade-in">Our Story</p>
          <h1 className="text-5xl md:text-7xl font-heading font-medium text-white animate-fade-in-up">About Nirvelli</h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div ref={story.ref} className={`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${story.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="text-center mb-16">
            <Award className="mx-auto text-gold mb-6" size={32} />
            <h2 className="text-4xl md:text-5xl font-heading font-medium text-navy mb-8">Our Story</h2>
            <div className="w-12 h-px bg-blue mx-auto mb-8" />
          </div>
          <div className="max-w-3xl mx-auto space-y-6 text-text text-base font-body font-light leading-relaxed">
            <p>
              <strong className="text-navy font-medium">Nirvelli</strong>, a Native American word meaning &ldquo;Water Child,&rdquo; was founded in 2003 by <strong className="text-navy font-medium">Dr. Heather Sefried</strong> and <strong className="text-navy font-medium">Dr. David Sefried</strong> with a vision to create a sanctuary where clinical expertise meets deep relaxation.
            </p>
            <p>
              What began as a small wellness practice in Cary, North Carolina has grown into one of the Triangle&apos;s most awarded and trusted med spas. For over 20 years, we have been helping our clients look and feel their absolute best through expert facials, massage therapy, laser treatments, injectables, and holistic wellness services.
            </p>
            <p>
              Our commitment to excellence has been recognized with the <strong className="text-navy font-medium">Cary Living Diamond Award for &ldquo;Favorite Place to Get Pampered&rdquo; five consecutive years</strong>, as well as <strong className="text-navy font-medium">&ldquo;Best Spa&rdquo; and &ldquo;Best Massage Therapist&rdquo;</strong> by the Cary News five years running.
            </p>
            <p>
              At Nirvelli, every treatment is personalized. Our team of licensed medical professionals, certified aestheticians, chiropractors, and award-winning massage therapists work together to create a comprehensive wellness experience that addresses your unique needs and goals.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-ice">
        <div ref={team.ref} className={`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${team.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="text-center mb-16">
            <p className="text-blue text-xs tracking-luxe uppercase font-body font-light mb-4">Leadership</p>
            <h2 className="text-4xl md:text-5xl font-heading font-medium text-navy">Meet the Founders</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Dr. Heather */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto rounded-full bg-navy/10 flex items-center justify-center mb-6">
                <span className="text-3xl font-heading text-navy/30">HS</span>
              </div>
              <p className="text-xs tracking-elegant uppercase font-body font-light text-blue mb-2">Owner & Founder</p>
              <h3 className="text-2xl font-heading font-medium text-navy mb-4">Dr. Heather Sefried, DC</h3>
              <p className="text-text text-sm font-body font-light leading-relaxed">
                Born and raised in Johnstown, Pennsylvania, Dr. Heather received her Doctor of Chiropractic degree from Sherman College of Chiropractic in 1999. Her passion for holistic wellness led her to create Nirvelli, where she combines chiropractic care with advanced aesthetic treatments.
              </p>
            </div>

            {/* Dr. David */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto rounded-full bg-navy/10 flex items-center justify-center mb-6">
                <span className="text-3xl font-heading text-navy/30">DS</span>
              </div>
              <p className="text-xs tracking-elegant uppercase font-body font-light text-blue mb-2">Co-Owner & Chiropractor</p>
              <h3 className="text-2xl font-heading font-medium text-navy mb-4">Dr. David Sefried, DC</h3>
              <p className="text-text text-sm font-body font-light leading-relaxed">
                Dr. David brings expertise in chiropractic care and acupuncture to Nirvelli. His holistic approach to wellness complements the spa&apos;s comprehensive menu of services, ensuring clients receive care that addresses both aesthetics and overall well-being.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-medium text-navy">Why Choose Nirvelli</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { title: "20+ Years of Excellence", desc: "Serving the Cary community since 2003 with consistent quality and care." },
              { title: "Medical Expertise", desc: "Licensed medical professionals, certified aestheticians, and chiropractors on staff." },
              { title: "Award-Winning Service", desc: "5x Cary Living Diamond Award Winner. Voted Best Spa and Best Massage Therapist." },
            ].map((v) => (
              <div key={v.title} className="text-center p-6">
                <Heart className="mx-auto text-blue mb-4" size={24} />
                <h3 className="text-lg font-heading font-medium text-navy mb-3">{v.title}</h3>
                <p className="text-text text-sm font-body font-light leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-medium text-white mb-6">Experience the Nirvelli Difference</h2>
          <Link href="/book" className="group inline-flex items-center gap-2 px-10 py-4 bg-blue text-white text-xs tracking-elegant uppercase font-body font-medium hover:bg-blue-dark transition-all duration-300">
            Book Your Visit <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
