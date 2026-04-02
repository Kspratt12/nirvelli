"use client";

import { useState } from "react";
import { Phone, MapPin, Clock, ArrowRight, Calendar, ChevronLeft, ChevronRight, Check } from "lucide-react";

const serviceOptions = [
  { category: "Facials", services: [
    { name: "1st Time Facial", price: "$69", duration: "60 min", note: "New clients" },
    { name: "Club OE Facial", price: "$89", duration: "60 min" },
    { name: "Calm Skin Facial", price: "$90", duration: "60 min" },
    { name: "Blueberry Smoothie Peel", price: "$95", duration: "60 min" },
    { name: "Organic Eminence Facial", price: "$100", duration: "60 min" },
    { name: "Dermaplaning", price: "$100", duration: "60 min" },
    { name: "Age Corrective Facial", price: "$135", duration: "60 min" },
    { name: "Microneedling", price: "$325", duration: "60 min" },
  ]},
  { category: "HydraFacial", services: [
    { name: "Signature HydraFacial", price: "$199", duration: "30 min" },
    { name: "Deluxe HydraFacial", price: "$275", duration: "60 min" },
    { name: "Platinum HydraFacial", price: "$325", duration: "90 min" },
  ]},
  { category: "Massage", services: [
    { name: "1st Time Massage", price: "$69", duration: "60 min", note: "New clients" },
    { name: "Swedish Massage", price: "$89", duration: "50 min" },
    { name: "Swedish Massage Extended", price: "$120", duration: "80 min" },
    { name: "Deep Tissue Massage", price: "$99", duration: "50 min" },
    { name: "Deep Tissue Extended", price: "$135", duration: "80 min" },
    { name: "Medical Massage", price: "$99", duration: "50 min" },
    { name: "Thai Reflexology", price: "$70", duration: "30 min" },
  ]},
  { category: "Injectables", services: [
    { name: "Botox / Xeomin / Jeuveau", price: "$14/unit", duration: "30 min" },
    { name: "Dysport", price: "$14/unit", duration: "30 min" },
    { name: "Restylane Kysse", price: "$900", duration: "30 min" },
    { name: "Juvederm Voluma", price: "$1,100", duration: "30 min" },
    { name: "Kybella", price: "$900", duration: "30 min" },
    { name: "Sculptra", price: "$875", duration: "30 min" },
    { name: "Injectable Consultation", price: "$45", duration: "30 min" },
  ]},
  { category: "Waxing", services: [
    { name: "Brow Wax", price: "$18", duration: "15 min" },
    { name: "Lip / Chin Wax", price: "$12", duration: "15 min" },
    { name: "Brow, Chin & Lip Trio", price: "$35", duration: "20 min" },
    { name: "Brazilian (Female)", price: "$55", duration: "30 min" },
    { name: "Full Leg Wax", price: "$60", duration: "45 min" },
  ]},
  { category: "Nails", services: [
    { name: "Signature Manicure", price: "$45", duration: "30 min" },
    { name: "Signature Pedicure", price: "$55", duration: "45 min" },
    { name: "Dip Manicure", price: "$60", duration: "45 min" },
    { name: "Signature Hot Stone Pedicure", price: "$70", duration: "60 min" },
    { name: "Deluxe Hot Stone Pedicure", price: "$85", duration: "60 min" },
  ]},
];

const timeSlots = [
  "7:00 AM", "7:30 AM", "8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM",
  "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
  "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM",
  "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM",
];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function Book() {
  const today = new Date();
  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [calMonth, setCalMonth] = useState(today.getMonth());
  const [calYear, setCalYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const daysInMonth = getDaysInMonth(calYear, calMonth);
  const firstDay = getFirstDayOfMonth(calYear, calMonth);
  const isSunday = (day: number) => new Date(calYear, calMonth, day).getDay() === 0;
  const isPast = (day: number) => new Date(calYear, calMonth, day) < new Date(today.getFullYear(), today.getMonth(), today.getDate());

  const prevMonth = () => {
    if (calMonth === 0) { setCalMonth(11); setCalYear(calYear - 1); }
    else setCalMonth(calMonth - 1);
    setSelectedDate(null);
  };
  const nextMonth = () => {
    if (calMonth === 11) { setCalMonth(0); setCalYear(calYear + 1); }
    else setCalMonth(calMonth + 1);
    setSelectedDate(null);
  };

  const handleBook = () => {
    const dateStr = selectedDate ? `${monthNames[calMonth]} ${selectedDate}, ${calYear}` : "";
    const msg = `Hi, I'd like to book a ${selectedService} (${selectedPrice}) on ${dateStr} at ${selectedTime}. My name is ${name} and my phone is ${phone}.`;
    window.location.href = `tel:919-238-5040`;
    alert(`Booking Request:\n\n${msg}\n\nPlease call (919) 238-5040 to confirm your appointment.`);
  };

  return (
    <>
      <section className="relative h-[40vh] flex items-center justify-center bg-navy overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy/90 to-navy" />
        <div className="relative z-10 text-center px-4">
          <Calendar className="mx-auto text-blue mb-4 animate-fade-in" size={28} />
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-medium text-white animate-fade-in-up">Book Appointment</h1>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Steps */}
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-10">
            {["Service", "Date & Time", "Confirm"].map((label, i) => (
              <div key={label} className="flex items-center gap-2 sm:gap-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-body font-medium transition-colors ${
                  step > i + 1 ? "bg-blue text-white" : step === i + 1 ? "bg-navy text-white" : "bg-gray-200 text-text"
                }`}>
                  {step > i + 1 ? <Check size={14} /> : i + 1}
                </div>
                <span className={`text-xs font-body font-medium hidden sm:inline ${step === i + 1 ? "text-navy" : "text-text/50"}`}>{label}</span>
                {i < 2 && <div className="w-8 sm:w-16 h-px bg-gray-200" />}
              </div>
            ))}
          </div>

          {/* Step 1: Select Service */}
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-heading font-medium text-navy mb-6 text-center">Choose Your Service</h2>

              {/* Category tabs */}
              <div className="flex flex-wrap gap-2 justify-center mb-8">
                {serviceOptions.map((cat) => (
                  <button
                    key={cat.category}
                    onClick={() => { setSelectedCategory(cat.category); setSelectedService(""); setSelectedPrice(""); }}
                    className={`px-4 py-2 text-xs tracking-wide font-body font-medium border transition-all ${
                      selectedCategory === cat.category ? "bg-navy text-white border-navy" : "bg-white text-charcoal border-gray-300 hover:border-navy"
                    }`}
                  >
                    {cat.category}
                  </button>
                ))}
              </div>

              {/* Service list */}
              {selectedCategory && (
                <div className="max-w-2xl mx-auto">
                  {serviceOptions.find(c => c.category === selectedCategory)?.services.map((s) => (
                    <button
                      key={s.name}
                      onClick={() => { setSelectedService(s.name); setSelectedPrice(s.price); }}
                      className={`w-full flex items-center justify-between py-4 px-4 border-b border-gray-100 text-left transition-colors ${
                        selectedService === s.name ? "bg-ice border-blue/30" : "hover:bg-ice/50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                          selectedService === s.name ? "border-blue" : "border-gray-300"
                        }`}>
                          {selectedService === s.name && <div className="w-2 h-2 rounded-full bg-blue" />}
                        </div>
                        <div>
                          <span className="text-sm font-body font-light text-charcoal">{s.name}</span>
                          <span className="text-xs text-text/50 ml-2">{s.duration}</span>
                          {s.note && <span className="text-[10px] text-blue ml-2 font-medium">{s.note}</span>}
                        </div>
                      </div>
                      <span className="text-sm font-body font-medium text-blue shrink-0">{s.price}</span>
                    </button>
                  ))}
                </div>
              )}

              {selectedService && (
                <div className="text-center mt-8">
                  <button onClick={() => setStep(2)} className="group px-10 py-3 bg-navy text-white text-xs tracking-elegant uppercase font-body font-medium hover:bg-blue transition-all duration-300 inline-flex items-center gap-2">
                    Next: Choose Date <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Step 2: Date & Time */}
          {step === 2 && (
            <div>
              <h2 className="text-2xl font-heading font-medium text-navy mb-2 text-center">Pick a Date & Time</h2>
              <p className="text-center text-sm text-text font-body font-light mb-8">{selectedService} - {selectedPrice}</p>

              {/* Calendar */}
              <div className="max-w-sm mx-auto bg-ice p-5 sm:p-6 mb-8">
                <div className="flex items-center justify-between mb-4">
                  <button onClick={prevMonth} className="p-1 hover:text-blue transition-colors"><ChevronLeft size={20} /></button>
                  <h3 className="text-sm font-body font-medium text-navy">{monthNames[calMonth]} {calYear}</h3>
                  <button onClick={nextMonth} className="p-1 hover:text-blue transition-colors"><ChevronRight size={20} /></button>
                </div>
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {dayNames.map(d => <div key={d} className="text-center text-[10px] font-body font-medium text-text/50 py-1">{d}</div>)}
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {Array.from({ length: firstDay }, (_, i) => <div key={`e${i}`} />)}
                  {Array.from({ length: daysInMonth }, (_, i) => {
                    const day = i + 1;
                    const disabled = isSunday(day) || isPast(day);
                    const selected = selectedDate === day;
                    return (
                      <button
                        key={day}
                        disabled={disabled}
                        onClick={() => setSelectedDate(day)}
                        className={`aspect-square flex items-center justify-center text-xs font-body rounded transition-all ${
                          disabled ? "text-gray-300 cursor-not-allowed" :
                          selected ? "bg-blue text-white font-medium" :
                          "text-charcoal hover:bg-blue/10"
                        }`}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>
                <p className="text-[10px] text-text/40 font-body font-light mt-3 text-center">Sundays - Closed</p>
              </div>

              {/* Time slots */}
              {selectedDate && (
                <div className="max-w-md mx-auto mb-8">
                  <h3 className="text-sm font-body font-medium text-navy mb-3 text-center">Available Times</h3>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                    {timeSlots.map(t => (
                      <button
                        key={t}
                        onClick={() => setSelectedTime(t)}
                        className={`py-2 text-xs font-body font-light border transition-all ${
                          selectedTime === t ? "bg-blue text-white border-blue" : "border-gray-200 text-charcoal hover:border-blue"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex items-center justify-center gap-4 mt-6">
                <button onClick={() => setStep(1)} className="px-6 py-3 border border-gray-300 text-xs tracking-elegant uppercase font-body font-light text-charcoal hover:border-navy transition-colors">
                  Back
                </button>
                {selectedDate && selectedTime && (
                  <button onClick={() => setStep(3)} className="group px-10 py-3 bg-navy text-white text-xs tracking-elegant uppercase font-body font-medium hover:bg-blue transition-all duration-300 inline-flex items-center gap-2">
                    Next: Confirm <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Step 3: Confirm */}
          {step === 3 && (
            <div className="max-w-md mx-auto">
              <h2 className="text-2xl font-heading font-medium text-navy mb-8 text-center">Confirm Your Booking</h2>

              <div className="bg-ice p-6 mb-8 space-y-4">
                <div className="flex justify-between">
                  <span className="text-xs font-body font-medium text-text uppercase tracking-wide">Service</span>
                  <span className="text-sm font-body font-medium text-navy">{selectedService}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs font-body font-medium text-text uppercase tracking-wide">Price</span>
                  <span className="text-sm font-body font-medium text-blue">{selectedPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs font-body font-medium text-text uppercase tracking-wide">Date</span>
                  <span className="text-sm font-body font-light text-charcoal">{monthNames[calMonth]} {selectedDate}, {calYear}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs font-body font-medium text-text uppercase tracking-wide">Time</span>
                  <span className="text-sm font-body font-light text-charcoal">{selectedTime}</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div>
                  <label className="block text-xs tracking-elegant uppercase font-body font-medium text-charcoal mb-2">Your Name</label>
                  <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Full name" className="w-full px-4 py-3 border border-gray-200 text-sm font-body font-light text-charcoal focus:border-blue focus:outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-xs tracking-elegant uppercase font-body font-medium text-charcoal mb-2">Phone Number</label>
                  <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="(919) 555-0000" className="w-full px-4 py-3 border border-gray-200 text-sm font-body font-light text-charcoal focus:border-blue focus:outline-none transition-colors" />
                </div>
              </div>

              <div className="flex items-center justify-center gap-4">
                <button onClick={() => setStep(2)} className="px-6 py-3 border border-gray-300 text-xs tracking-elegant uppercase font-body font-light text-charcoal hover:border-navy transition-colors">
                  Back
                </button>
                <button
                  onClick={handleBook}
                  disabled={!name || !phone}
                  className="group px-10 py-3 bg-blue text-white text-xs tracking-elegant uppercase font-body font-medium hover:bg-blue-dark transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed inline-flex items-center gap-2"
                >
                  Confirm Booking <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <p className="text-center text-[10px] text-text/40 font-body font-light mt-6">
                A team member will call to confirm your appointment within 24 hours.
              </p>
            </div>
          )}

          {/* Quick Contact */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <Phone className="mx-auto text-blue mb-3" size={20} />
              <a href="tel:919-238-5040" className="text-sm font-body font-light text-text hover:text-blue transition-colors block">(919) 238-5040</a>
            </div>
            <div className="text-center">
              <MapPin className="mx-auto text-blue mb-3" size={20} />
              <p className="text-sm font-body font-light text-text">151 Quarrystone Circle<br />Suite 116, Cary NC</p>
            </div>
            <div className="text-center">
              <Clock className="mx-auto text-blue mb-3" size={20} />
              <p className="text-sm font-body font-light text-text">Mon-Fri: 7am-7pm<br />Sat: 9am-4pm</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
