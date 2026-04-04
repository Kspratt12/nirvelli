"use client";

import Image from "next/image";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, ArrowRight, Send } from "lucide-react";

const BOOKING_URL =
  "https://clients.mindbodyonline.com/ASP/adm/adm_appt_search.asp?studioid=711769&prodGroupId=&page=&stype=&optForwardingLink=&nLgIn=&trn=0&lvl=&catid=&prodid=&date=4%2F4%2F2026&classid=0&view=&sSU=&qParam=&tg=&loc=1&vt=&justloggedin=&pMode=0";
const PHONE = "(919) 297-0107";
const PHONE_ALT = "(919) 238-5040";
const PHONE_HREF = "tel:919-297-0107";
const PHONE_ALT_HREF = "tel:919-238-5040";

const services = [
  "HydraFacial",
  "Laser Hair Removal",
  "Deep Tissue Massage",
  "Chemical Peel",
  "Cupping Therapy",
  "Nail Services",
  "Waxing",
  "Other",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const subject = encodeURIComponent(
      `New Inquiry from ${form.name}${form.service ? ` - ${form.service}` : ""}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService Interest: ${form.service || "Not specified"}\n\nMessage:\n${form.message}`
    );

    window.location.href = `mailto:info@nirvelli.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="/building-inside.png"
          alt="Inside Nirvelli Med Spa"
          fill
          className="object-cover"
          priority
          quality={90}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/40 to-navy/80" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="w-12 h-px bg-blue mx-auto mb-6" />
          <p className="text-xs tracking-elegant uppercase font-body font-medium text-blue-light mb-4">
            Get in Touch
          </p>
          <h1 className="text-5xl md:text-7xl font-heading font-medium text-white mb-4">
            Contact Us
          </h1>
          <p className="text-white/80 text-base md:text-lg font-body font-light max-w-xl mx-auto leading-relaxed">
            We would love to hear from you. Reach out to schedule a consultation
            or ask about our services.
          </p>
        </div>
      </section>

      {/* ─── CONTACT FORM + INFO ─── */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-20">
            {/* ── Form Column ── */}
            <div className="lg:col-span-3">
              <div className="w-12 h-px bg-blue mb-6" />
              <p className="text-xs tracking-elegant uppercase font-body font-medium text-blue mb-3">
                Send a Message
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-medium text-navy mb-4">
                How Can We Help?
              </h2>
              <p className="text-sm font-body font-light text-text leading-relaxed mb-10 max-w-lg">
                Fill out the form below and our team will get back to you
                within one business day. For immediate assistance, please call
                us directly.
              </p>

              {submitted ? (
                <div className="bg-ice rounded-xl p-10 text-center">
                  <div className="w-14 h-14 bg-blue/10 rounded-full flex items-center justify-center mx-auto mb-5">
                    <Send size={24} className="text-blue" />
                  </div>
                  <h3 className="text-2xl font-heading font-medium text-navy mb-3">
                    Thank You
                  </h3>
                  <p className="text-sm font-body font-light text-text leading-relaxed max-w-sm mx-auto mb-6">
                    Your email client should have opened with your message. If
                    it did not, please email us directly at{" "}
                    <a
                      href="mailto:info@nirvelli.com"
                      className="text-blue hover:underline"
                    >
                      info@nirvelli.com
                    </a>
                    .
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", email: "", phone: "", service: "", message: "" });
                    }}
                    className="text-sm font-body font-medium text-blue hover:text-blue-dark transition-colors inline-flex items-center gap-2"
                  >
                    Send Another Message <ArrowRight size={14} />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs tracking-elegant uppercase font-body font-medium text-navy mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full px-4 py-3.5 bg-ice border border-transparent rounded-lg text-sm font-body font-light text-navy placeholder:text-text/40 focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue/20 transition-all"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs tracking-elegant uppercase font-body font-medium text-navy mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@email.com"
                        className="w-full px-4 py-3.5 bg-ice border border-transparent rounded-lg text-sm font-body font-light text-navy placeholder:text-text/40 focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs tracking-elegant uppercase font-body font-medium text-navy mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="(919) 000-0000"
                        className="w-full px-4 py-3.5 bg-ice border border-transparent rounded-lg text-sm font-body font-light text-navy placeholder:text-text/40 focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue/20 transition-all"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="service"
                        className="block text-xs tracking-elegant uppercase font-body font-medium text-navy mb-2"
                      >
                        Service Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 bg-ice border border-transparent rounded-lg text-sm font-body font-light text-navy focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue/20 transition-all appearance-none"
                        style={{
                          backgroundImage:
                            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "right 16px center",
                        }}
                      >
                        <option value="">Select a service</option>
                        {services.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs tracking-elegant uppercase font-body font-medium text-navy mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help..."
                      className="w-full px-4 py-3.5 bg-ice border border-transparent rounded-lg text-sm font-body font-light text-navy placeholder:text-text/40 focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue/20 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group px-10 py-4 bg-blue text-white text-sm tracking-elegant uppercase font-body font-bold hover:bg-blue-dark transition-all duration-300 inline-flex items-center gap-3"
                  >
                    Send Message
                    <Send
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                </form>
              )}
            </div>

            {/* ── Info Column ── */}
            <div className="lg:col-span-2">
              <div className="bg-ice rounded-xl p-8 md:p-10 space-y-10">
                {/* Address */}
                <div>
                  <div className="w-8 h-px bg-blue mb-4" />
                  <h4 className="text-xs tracking-elegant uppercase font-body font-medium text-blue mb-3">
                    Visit Us
                  </h4>
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-blue mt-0.5 shrink-0" />
                    <div className="text-sm font-body font-light text-text leading-relaxed">
                      <p>151 Quarrystone Circle, Suite 116</p>
                      <p>Cary, NC 27519</p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <div className="w-8 h-px bg-blue mb-4" />
                  <h4 className="text-xs tracking-elegant uppercase font-body font-medium text-blue mb-3">
                    Call Us
                  </h4>
                  <div className="space-y-2.5">
                    <a
                      href={PHONE_ALT_HREF}
                      className="flex items-center gap-3 text-sm font-body font-light text-text hover:text-blue transition-colors"
                    >
                      <Phone size={18} className="text-blue shrink-0" />
                      {PHONE_ALT}
                    </a>
                    <a
                      href={PHONE_HREF}
                      className="flex items-center gap-3 text-sm font-body font-light text-text hover:text-blue transition-colors"
                    >
                      <Phone size={18} className="text-blue shrink-0" />
                      {PHONE}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div>
                  <div className="w-8 h-px bg-blue mb-4" />
                  <h4 className="text-xs tracking-elegant uppercase font-body font-medium text-blue mb-3">
                    Email Us
                  </h4>
                  <a
                    href="mailto:info@nirvelli.com"
                    className="flex items-center gap-3 text-sm font-body font-light text-text hover:text-blue transition-colors"
                  >
                    <Mail size={18} className="text-blue shrink-0" />
                    info@nirvelli.com
                  </a>
                </div>

                {/* Hours */}
                <div>
                  <div className="w-8 h-px bg-blue mb-4" />
                  <h4 className="text-xs tracking-elegant uppercase font-body font-medium text-blue mb-3">
                    Hours
                  </h4>
                  <div className="flex items-start gap-3">
                    <Clock size={18} className="text-blue mt-0.5 shrink-0" />
                    <div className="space-y-2 text-sm font-body font-light text-text">
                      <div>
                        <p className="text-navy font-medium">Monday</p>
                        <p>9am - 7pm</p>
                      </div>
                      <div>
                        <p className="text-navy font-medium">
                          Tuesday - Thursday
                        </p>
                        <p>7am - 7pm</p>
                      </div>
                      <div>
                        <p className="text-navy font-medium">Friday</p>
                        <p>8am - 7pm</p>
                      </div>
                      <div>
                        <p className="text-navy font-medium">Saturday</p>
                        <p>9am - 4pm</p>
                      </div>
                      <div>
                        <p className="text-navy font-medium">Sunday</p>
                        <p>Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Book CTA */}
                <div className="pt-2">
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-full px-6 py-4 bg-navy text-white text-sm tracking-elegant uppercase font-body font-bold hover:bg-navy/90 transition-all duration-300 flex items-center justify-center gap-2 rounded-lg"
                  >
                    Book Appointment
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MAP ─── */}
      <section className="py-32 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="w-12 h-px bg-blue mx-auto mb-6" />
            <p className="text-xs tracking-elegant uppercase font-body font-medium text-blue mb-3">
              Find Us
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-medium text-navy mb-4">
              Our Location
            </h2>
            <p className="text-sm font-body font-light text-text max-w-md mx-auto leading-relaxed">
              Located in the heart of Cary, NC. Convenient access from Raleigh,
              Apex, Morrisville, and the greater Triangle area.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps?q=151+Quarrystone+Circle+Suite+116+Cary+NC+27519&output=embed"
              className="w-full h-80 md:h-[480px] border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Nirvelli Med Spa Location"
            />
          </div>
        </div>
      </section>
    </>
  );
}
