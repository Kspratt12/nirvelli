"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

interface Message { role: "user" | "assistant"; content: string; }

function getDemoResponse(input: string): string {
  const lower = input.toLowerCase();

  if (lower.includes("hour") || lower.includes("open") || lower.includes("close"))
    return "Our hours are:\n- Monday: 9am - 7pm\n- Tue-Thu: 7am - 7pm\n- Friday: 8am - 7pm\n- Saturday: 9am - 4pm\n- Sunday: Closed\n\nWould you like to book an appointment?";

  if (lower.includes("book") || lower.includes("appointment") || lower.includes("schedule"))
    return "I'd love to help you book! You can:\n\n1. Use our [booking page](/book) to select a service, date, and time\n2. Call us at **(919) 238-5040**\n3. Email info@nirvelli.com\n\nNew clients get a **$69 facial or massage** on their first visit!";

  if (lower.includes("price") || lower.includes("cost") || lower.includes("how much"))
    return "Here's an overview:\n\n**Facials:** $69-$325\n**HydraFacial:** $199-$325\n**Massage:** $69-$135\n**Botox:** $14/unit\n**Fillers:** $875-$1,200\n**Waxing:** $10-$70\n**Nails:** $40-$85\n\n**New clients:** $69 for your first facial or massage!\n**Spa Club:** $89/month for a monthly treatment + 15% off";

  if (lower.includes("facial") || lower.includes("skin") || lower.includes("hydra"))
    return "We offer a full range of facials:\n\n- **1st Time Facial:** $69 (new clients)\n- **Calm Skin Facial:** $90\n- **Organic Eminence:** $100\n- **Dermaplaning:** $100\n- **Age Corrective:** $135\n- **Microneedling:** $325\n\n**HydraFacials:**\n- Signature: $199\n- Deluxe: $275\n- Platinum: $325";

  if (lower.includes("massage") || lower.includes("deep tissue") || lower.includes("swedish"))
    return "Our award-winning massage services:\n\n- **1st Time Massage:** $69 (new clients!)\n- **Swedish (50 min):** $89\n- **Swedish (80 min):** $120\n- **Deep Tissue (50 min):** $99\n- **Deep Tissue (80 min):** $135\n- **Hot Stone Upgrade:** +$20\n\nVoted Best Massage Therapist 5 years running!";

  if (lower.includes("botox") || lower.includes("inject") || lower.includes("filler") || lower.includes("lip"))
    return "Our injectables are administered by certified professionals under Dr. Hudak:\n\n- **Botox/Xeomin/Jeuveau:** $14/unit\n- **Restylane Kysse (lips):** $900\n- **Juvederm Voluma:** $1,100\n- **Sculptra:** $875 (lasts 7+ years!)\n- **Kybella (double chin):** $900\n- **Consultation:** $45\n\nJada Dillner, PA-C is available Saturdays!";

  if (lower.includes("club") || lower.includes("member") || lower.includes("$89"))
    return "**Nirvelli Spa Club - $89/month:**\n\n- One premium treatment of your choice each month\n- 15% off all products and add-on services\n- Unused services roll over (up to 6 months)\n- Additional services at $89 each\n\nWe also have a **HydraFacial Club** at $150/month and $225/month.\n\nCall (919) 238-5040 to join!";

  if (lower.includes("wax"))
    return "Our waxing services using premium Mermaid Wax:\n\n- Upper Lip: $10\n- Brow: $18\n- Brow/Chin/Lip Trio: $35\n- Brazilian (Female): $55\n- Brazilian (Male): $70\n- Full Leg: $60\n- Back/Chest: $65";

  if (lower.includes("nail") || lower.includes("mani") || lower.includes("pedi"))
    return "Nail services at Nirvelli:\n\n- Signature Manicure: $45\n- Signature Pedicure: $55\n- Dip Manicure: $60\n- Hot Stone Pedicure: $70\n- Deluxe Hot Stone Pedicure: $85\n- Gel X (Soft Tip): From $40\n\nClub members get manicures at $44.50!";

  if (lower.includes("location") || lower.includes("where") || lower.includes("address"))
    return "We're at **151 Quarrystone Circle, Suite 116, Cary, NC 27519**\n\nOff of High House Rd & Davis Dr.\n\nCall: **(919) 238-5040**\nEmail: info@nirvelli.com";

  if (lower.includes("new") || lower.includes("first"))
    return "Welcome! New clients enjoy special pricing:\n\n- **$69 One Hour Facial** (first visit)\n- **$69 One Hour Massage** (first visit)\n\nArrive 10-15 minutes early for paperwork. Your provider will start with a consultation to understand your goals.\n\nCall **(919) 238-5040** to book!";

  if (lower.includes("cancel"))
    return "We require **24 hours notice** for cancellations. Late cancellations may be subject to a fee. We understand schedules change - just give us a call at (919) 238-5040.";

  if (lower.includes("hi") || lower.includes("hello") || lower.includes("hey"))
    return "Hello! Welcome to Nirvelli Med Spa & Laser - Cary's 5x Diamond Award winning spa since 2003! How can I help you today? I can assist with services, pricing, booking, or anything else.";

  if (lower.includes("thank"))
    return "You're welcome! We look forward to seeing you at Nirvelli. Call **(919) 238-5040** anytime or visit our [booking page](/book).";

  return "I can help with:\n\n- **Services & Pricing** - facials, massage, injectables, waxing, nails\n- **Book an Appointment** - online or by phone\n- **New Client Specials** - $69 facial or massage\n- **Spa Club** - $89/month membership\n- **Hours & Location**\n\nWhat would you like to know?";
}

function renderContent(content: string) {
  return content.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\)|\n)/g).map((part, i) => {
    if (part === "\n") return <br key={i} />;
    if (part.startsWith("**") && part.endsWith("**")) return <strong key={i} className="font-medium text-navy">{part.slice(2, -2)}</strong>;
    const link = part.match(/\[(.*?)\]\((.*?)\)/);
    if (link) return <a key={i} href={link[2]} className="text-blue underline hover:text-blue-dark">{link[1]}</a>;
    return <span key={i}>{part}</span>;
  });
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hi! Welcome to Nirvelli Med Spa. I can help with services, pricing, booking, or anything else. What can I help you with?" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);
  useEffect(() => { if (isOpen && inputRef.current) inputRef.current.focus(); }, [isOpen]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg: Message = { role: "user", content: input.trim() };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);
    await new Promise(r => setTimeout(r, 500 + Math.random() * 400));
    setMessages(prev => [...prev, { role: "assistant", content: getDemoResponse(input) }]);
    setIsTyping(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-5 right-5 z-30 w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
          isOpen ? "bg-navy" : "bg-blue hover:bg-blue-dark"
        }`}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X size={20} className="text-white" /> : <MessageCircle size={20} className="text-white" />}
      </button>

      {isOpen && (
        <div className="fixed bottom-20 right-3 left-3 sm:left-auto sm:right-5 z-30 sm:w-96 h-[420px] sm:h-[500px] rounded-xl bg-white shadow-2xl border border-gray-100 flex flex-col overflow-hidden">
          <div className="bg-blue px-5 py-3 flex items-center gap-3 shrink-0 rounded-t-xl">
            <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
              <Bot size={14} className="text-white" />
            </div>
            <div>
              <h3 className="text-white text-sm font-body font-medium">Nirvelli Assistant</h3>
              <p className="text-white/60 text-[10px] font-body font-light">Ask us anything</p>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-2.5 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                {msg.role === "assistant" && (
                  <div className="w-6 h-6 rounded-full bg-blue/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Bot size={12} className="text-blue" />
                  </div>
                )}
                <div className={`max-w-[80%] px-4 py-2.5 text-sm font-body font-light leading-relaxed ${
                  msg.role === "user" ? "bg-blue text-white rounded-2xl rounded-br-md" : "bg-gray-100 text-charcoal rounded-2xl rounded-bl-md"
                }`}>
                  {renderContent(msg.content)}
                </div>
                {msg.role === "user" && (
                  <div className="w-6 h-6 rounded-full bg-blue flex items-center justify-center shrink-0 mt-0.5">
                    <User size={12} className="text-white" />
                  </div>
                )}
              </div>
            ))}
            {isTyping && (
              <div className="flex gap-2.5">
                <div className="w-6 h-6 rounded-full bg-blue/10 flex items-center justify-center shrink-0">
                  <Bot size={12} className="text-blue" />
                </div>
                <div className="bg-gray-100 rounded-2xl rounded-bl-md px-4 py-3 flex gap-1">
                  <span className="w-2 h-2 rounded-full bg-text/30 animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-2 h-2 rounded-full bg-text/30 animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-2 h-2 rounded-full bg-text/30 animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="border-t border-gray-100 px-4 py-3 shrink-0">
            <form onSubmit={e => { e.preventDefault(); sendMessage(); }} className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Ask about services, pricing..."
                className="flex-1 px-3 py-2.5 text-sm font-body font-light text-charcoal bg-gray-50 rounded-lg border-0 focus:outline-none focus:ring-1 focus:ring-blue/30 placeholder:text-gray-400"
              />
              <button type="submit" disabled={!input.trim() || isTyping} className="w-9 h-9 rounded-lg bg-blue flex items-center justify-center hover:bg-blue-dark transition-colors disabled:opacity-40 shrink-0">
                <Send size={15} className="text-white" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
