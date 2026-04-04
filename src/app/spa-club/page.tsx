"use client";

import Image from "next/image";
import { useRef } from "react";
import { useInView } from "framer-motion";
import {
  Award,
  Check,
  Star,
  ArrowRight,
  Phone,
  Heart,
  Sparkles,
} from "lucide-react";

const BOOKING_URL =
  "https://clients.mindbodyonline.com/ASP/adm/adm_appt_search.asp?studioid=711769&prodGroupId=&page=&stype=&optForwardingLink=&nLgIn=&trn=0&lvl=&catid=&prodid=&date=4%2F4%2F2026&classid=0&view=&sSU=&qParam=&tg=&loc=1&vt=&justloggedin=&pMode=0";

const treatments = [
  {
    name: "Customized Facial",
    duration: "55 min",
    icon: Sparkles,
    description:
      "Tailored to your unique skin type with professional-grade products.",
  },
  {
    name: "Swedish Massage",
    duration: "50 min",
    icon: Heart,
    description:
      "Classic relaxation technique to ease tension and restore calm.",
  },
  {
    name: "Deep Tissue Massage",
    duration: "50 min",
    icon: Star,
    description:
      "Targeted pressure to release chronic muscle knots and tightness.",
  },
  {
    name: "Chemical Peel",
    duration: "",
    icon: Sparkles,
    description:
      "Reveal brighter, smoother skin with a professionally applied peel.",
  },
  {
    name: "Dermaplaning",
    duration: "",
    icon: Star,
    description:
      "Gentle exfoliation that removes dead skin cells and peach fuzz.",
  },
  {
    name: "Body Scrub",
    duration: "",
    icon: Heart,
    description:
      "Full-body exfoliation that leaves skin silky soft and renewed.",
  },
];

const benefits = [
  { text: "One premium treatment of your choice each month", highlight: true },
  { text: "15% off all retail products", highlight: false },
  { text: "15% off all spa add-on services", highlight: false },
  { text: "Priority booking access", highlight: false },
  { text: "Unused services roll over (up to 6 months)", highlight: true },
  { text: "Additional services at just $89 each", highlight: false },
];

function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: isInView ? "none" : "translateY(40px)",
        opacity: isInView ? 1 : 0,
        transition: `all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

export default function SpaClub() {
  return (
    <>
      {/* ───────── Hero ───────── */}
      <section className="relative h-[75vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="/mint-hot-stone-massage.jpg"
          alt="Hot stone massage at Nirvelli Day Spa"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/50 to-navy/80" />
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          <AnimatedSection>
            <Award className="mx-auto text-gold mb-6" size={36} />
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-blue text-xs tracking-luxe uppercase font-body font-light mb-4">
              Exclusive Membership
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-medium text-white mb-6">
              Spa Club
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <p className="text-white/70 text-lg md:text-xl font-body font-light leading-relaxed max-w-xl mx-auto">
              Your personal retreat. One premium treatment every month, member
              savings, and priority access to Cary&apos;s finest day spa.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <a
              href="tel:919-238-5040"
              className="group inline-flex items-center gap-3 mt-10 px-10 py-4 bg-blue text-white text-xs tracking-elegant uppercase font-body font-medium hover:bg-blue-dark transition-all duration-300"
            >
              <Phone size={14} />
              Call to Join Today
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* ───────── Editorial Intro ───────── */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <AnimatedSection>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-px bg-blue" />
                  <p className="text-blue text-xs tracking-luxe uppercase font-body font-light">
                    Why Spa Club
                  </p>
                </div>
                <h2 className="text-4xl md:text-5xl font-heading font-medium text-navy mb-8 leading-tight">
                  Self-Care, Simplified
                </h2>
                <p className="text-text text-base font-body font-light leading-relaxed mb-6">
                  Life moves fast. The Nirvelli Spa Club is designed for those
                  who believe wellness should never feel like an afterthought. For
                  $89 per month you receive one premium treatment of your choice,
                  exclusive discounts on products and add-ons, and the peace of
                  mind that your next appointment is always waiting.
                </p>
                <p className="text-text text-base font-body font-light leading-relaxed mb-8">
                  Unused treatments roll over for up to six months, so you never
                  lose what you have earned. It is the best value in Cary for
                  consistent, professional-grade self-care.
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-gold">
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                  </div>
                  <p className="text-charcoal text-sm font-body font-light">
                    Loved by hundreds of members in Cary
                  </p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="relative rounded-xl overflow-hidden aspect-[4/5]">
                <Image
                  src="/product-6.jpg"
                  alt="Nirvelli Med Spa products"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm p-6 rounded-lg">
                  <p className="text-navy text-sm font-heading font-medium mb-1">
                    The Best Value in Cary
                  </p>
                  <p className="text-text text-xs font-body font-light">
                    Premium treatments, personal attention, lasting results.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ───────── Pricing Card ───────── */}
      <section className="py-32 bg-cream">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-12 h-px bg-blue" />
                <p className="text-blue text-xs tracking-luxe uppercase font-body font-light">
                  Membership
                </p>
                <div className="w-12 h-px bg-blue" />
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-medium text-navy">
                One Plan. Endless Benefits.
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="max-w-lg mx-auto relative">
              {/* Decorative glow */}
              <div className="absolute -inset-1 bg-gradient-to-br from-blue/20 via-gold/10 to-blue/20 rounded-2xl blur-sm" />

              <div className="relative bg-gradient-to-br from-navy via-navy to-[#1a2744] text-white p-10 md:p-14 rounded-2xl shadow-2xl">
                {/* Badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-gold text-navy text-[10px] tracking-luxe uppercase font-body font-bold px-5 py-1.5 rounded-full">
                    Most Popular
                  </div>
                </div>

                <div className="text-center mb-10">
                  <Award className="mx-auto text-gold mb-5" size={32} />
                  <p className="text-blue text-xs tracking-luxe uppercase font-body font-light mb-5">
                    Monthly Membership
                  </p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-white/40 text-2xl font-heading">$</span>
                    <span className="text-7xl md:text-8xl font-heading font-medium text-white">
                      89
                    </span>
                  </div>
                  <p className="text-white/40 text-sm font-body font-light mt-2">
                    per month
                  </p>
                </div>

                <div className="space-y-4 mb-10">
                  {benefits.map((benefit) => (
                    <div key={benefit.text} className="flex items-start gap-3">
                      <div
                        className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                          benefit.highlight
                            ? "bg-gold/20"
                            : "bg-white/10"
                        }`}
                      >
                        <Check
                          size={12}
                          className={
                            benefit.highlight ? "text-gold" : "text-blue"
                          }
                        />
                      </div>
                      <span
                        className={`text-sm font-body font-light ${
                          benefit.highlight ? "text-white" : "text-white/70"
                        }`}
                      >
                        {benefit.text}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href="tel:919-238-5040"
                  className="group flex items-center justify-center gap-3 w-full py-4 bg-blue text-white text-xs tracking-elegant uppercase font-body font-medium hover:bg-blue-dark transition-all duration-300 rounded-lg"
                >
                  <Phone size={14} />
                  Call to Join: (919) 238-5040
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>

                <p className="text-white/30 text-xs font-body font-light text-center mt-4">
                  No contracts. Cancel anytime.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ───────── Treatment Grid ───────── */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-12 h-px bg-blue" />
                <p className="text-blue text-xs tracking-luxe uppercase font-body font-light">
                  Your Monthly Choice
                </p>
                <div className="w-12 h-px bg-blue" />
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-medium text-navy mb-4">
                Choose Your Treatment
              </h2>
              <p className="text-text text-base font-body font-light max-w-xl mx-auto">
                Every month, pick any one of these premium services as your
                included treatment.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatments.map((treatment, index) => {
              const Icon = treatment.icon;
              return (
                <AnimatedSection
                  key={treatment.name}
                  delay={index * 0.1}
                >
                  <div className="group relative bg-ice rounded-xl p-8 hover:bg-navy transition-all duration-500 cursor-default h-full">
                    <div className="flex items-center justify-between mb-4">
                      <Icon
                        size={20}
                        className="text-blue group-hover:text-gold transition-colors duration-500"
                      />
                      {treatment.duration && (
                        <span className="text-[11px] tracking-luxe uppercase font-body font-light text-text/50 group-hover:text-white/40 transition-colors duration-500">
                          {treatment.duration}
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-heading font-medium text-navy group-hover:text-white transition-colors duration-500 mb-2">
                      {treatment.name}
                    </h3>
                    <p className="text-sm font-body font-light text-text/70 group-hover:text-white/60 transition-colors duration-500">
                      {treatment.description}
                    </p>
                    <div className="absolute bottom-0 left-8 right-8 h-px bg-blue/0 group-hover:bg-gold/30 transition-all duration-500" />
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          <AnimatedSection delay={0.3}>
            <p className="text-center text-xs text-text/40 font-body font-light mt-10">
              Each additional service in the same month is also available at $89.
              Members save 15% on add-ons.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ───────── Benefits Highlight ───────── */}
      <section className="py-32 bg-ice">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-20">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-12 h-px bg-blue" />
                <p className="text-blue text-xs tracking-luxe uppercase font-body font-light">
                  Member Advantages
                </p>
                <div className="w-12 h-px bg-blue" />
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-medium text-navy">
                Why Members Love Spa Club
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Save Every Visit",
                description:
                  "15% off all retail products and add-on services. The more you visit, the more you save.",
                accent: "bg-gold/10",
                iconColor: "text-gold",
              },
              {
                icon: Sparkles,
                title: "Never Lose a Treatment",
                description:
                  "Unused monthly treatments roll over for up to six months. Your investment is always protected.",
                accent: "bg-blue/10",
                iconColor: "text-blue",
              },
              {
                icon: Award,
                title: "Priority Booking",
                description:
                  "As a member you are first in line for appointments. Get the times and therapists you prefer.",
                accent: "bg-gold/10",
                iconColor: "text-gold",
              },
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <AnimatedSection key={benefit.title} delay={index * 0.15}>
                  <div className="bg-white rounded-xl p-10 h-full shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div
                      className={`w-14 h-14 ${benefit.accent} rounded-xl flex items-center justify-center mb-6`}
                    >
                      <Icon size={24} className={benefit.iconColor} />
                    </div>
                    <h3 className="text-xl font-heading font-medium text-navy mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-sm font-body font-light text-text leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────── Comparison Table ───────── */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-12 h-px bg-blue" />
                <p className="text-blue text-xs tracking-luxe uppercase font-body font-light">
                  Compare
                </p>
                <div className="w-12 h-px bg-blue" />
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-medium text-navy">
                Member vs. Non-Member
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="rounded-xl overflow-hidden border border-ice">
              <div className="grid grid-cols-3 bg-navy text-white">
                <div className="p-5">
                  <p className="text-xs tracking-luxe uppercase font-body font-light text-white/50">
                    Benefit
                  </p>
                </div>
                <div className="p-5 text-center border-l border-white/10">
                  <p className="text-xs tracking-luxe uppercase font-body font-light text-white/50">
                    Non-Member
                  </p>
                </div>
                <div className="p-5 text-center border-l border-white/10 bg-blue/20">
                  <p className="text-xs tracking-luxe uppercase font-body font-medium text-gold">
                    Spa Club
                  </p>
                </div>
              </div>
              {[
                {
                  feature: "Monthly Treatment",
                  regular: "Full price",
                  member: "Included ($89)",
                },
                {
                  feature: "Product Discount",
                  regular: "None",
                  member: "15% off",
                },
                {
                  feature: "Add-On Discount",
                  regular: "None",
                  member: "15% off",
                },
                {
                  feature: "Priority Booking",
                  regular: "No",
                  member: "Yes",
                },
                {
                  feature: "Rollover Credits",
                  regular: "N/A",
                  member: "Up to 6 months",
                },
                {
                  feature: "Extra Services",
                  regular: "Full price",
                  member: "$89 each",
                },
              ].map((row, index) => (
                <div
                  key={row.feature}
                  className={`grid grid-cols-3 ${
                    index % 2 === 0 ? "bg-white" : "bg-ice/50"
                  }`}
                >
                  <div className="p-5">
                    <p className="text-sm font-body font-medium text-navy">
                      {row.feature}
                    </p>
                  </div>
                  <div className="p-5 text-center border-l border-ice">
                    <p className="text-sm font-body font-light text-text/50">
                      {row.regular}
                    </p>
                  </div>
                  <div className="p-5 text-center border-l border-ice bg-gold/5">
                    <p className="text-sm font-body font-medium text-navy">
                      {row.member}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ───────── Final CTA ───────── */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-navy" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue/10 via-transparent to-gold/5" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <Award className="mx-auto text-gold mb-6" size={36} />
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-heading font-medium text-white mb-6">
              Ready to Become a Member?
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-white/60 text-base font-body font-light mb-10 max-w-xl mx-auto leading-relaxed">
              Join the Nirvelli Spa Club today and make self-care a priority. Call
              our team to get started, or book your first treatment online.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:919-238-5040"
                className="group inline-flex items-center gap-3 px-10 py-4 bg-blue text-white text-xs tracking-elegant uppercase font-body font-medium hover:bg-blue-dark transition-all duration-300"
              >
                <Phone size={14} />
                Call (919) 238-5040
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-10 py-4 border border-white/20 text-white text-xs tracking-elegant uppercase font-body font-medium hover:bg-white/10 transition-all duration-300"
              >
                Book Online
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
