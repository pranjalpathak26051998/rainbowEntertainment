"use client";

import { motion } from "framer-motion";
import { Star, ShieldCheck, Zap, Award, Check } from "lucide-react";

export default function AboutPage() {
  const whyChooseUs = [
    {
      icon: <Award className="w-6 h-6 text-gold" />,
      title: "20+ Years Experience",
      desc: "Delivering world-class event production and entertainment bookings in Delhi NCR and across India since 2006."
    },
    {
      icon: <Zap className="w-6 h-6 text-gold" />,
      title: "End-to-End Solutions",
      desc: "We coordinate everything—stage rentals, Trussing setups, P3 LED screens, wedding choreographers, and celebrity hospitality."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-gold" />,
      title: "Pan India Network",
      desc: "From destination weddings in Rajasthan/Goa to massive dealer conferences, our operations span across India."
    }
  ];

  const milestones = [
    { year: "2006", title: "Company Founded", desc: "Started as an boutique live music booking service in Greater Kailash, Delhi." },
    { year: "2012", title: "Production Expansion", desc: "Acquired high-end line array systems and trussing, launching full stage production services." },
    { year: "2018", title: "Celebrity Bookings", desc: "Began direct management of TV stars and Bollywood singers, securing exclusive client rates." },
    { year: "2024", title: "1000+ Events Milestone", desc: "Successfully completed over 1,000 corporate meets, luxury weddings, and concerts." }
  ];

  return (
    <div className="bg-white pt-24 overflow-hidden">
      {/* Page Header */}
      <section className="relative py-20 dark-section text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-dark via-charcoal to-charcoal-light opacity-80" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <span className="gold-gradient text-xs uppercase tracking-widest font-bold">Who We Are</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mt-2">Our Company Story</h1>
          <p className="text-white/60 text-sm md:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
            Since 20+ years, Rainbow Entertainment has been Delhi NCR's trusted partner for luxury weddings, corporate events, and live concert production.
          </p>
        </div>
      </section>

      {/* Story & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="gold-gradient text-xs uppercase tracking-widest font-bold">The Journey</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mt-2">Crafting Unforgettable Memories Since 2006</h2>
            <div className="text-gray-600 text-sm md:text-base mt-6 space-y-4 leading-relaxed">
              <p>
                Rainbow Entertainment was founded with a singular vision: to elevate live entertainment in India. We saw that premium events required more than just music; they needed seamless audio engineering, gorgeous staging, visual graphics, and meticulous hospitality.
              </p>
              <p>
                What began as a small team booking local ghazal and sufi singers in Delhi has grown into a full-scale corporate production house and luxury wedding planning partner. We serve clients PAN India, maintaining relationships with top Bollywood agencies.
              </p>
            </div>
            
            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 bg-gray-50 border border-gray-100 rounded-2xl">
                <h4 className="font-serif font-bold text-charcoal text-base">Our Mission</h4>
                <p className="text-gray-500 text-xs mt-2 leading-relaxed">To combine creative entertainment with robust staging and sound production to deliver flawless, spectacular events.</p>
              </div>
              <div className="p-6 bg-gray-50 border border-gray-100 rounded-2xl">
                <h4 className="font-serif font-bold text-charcoal text-base">Our Vision</h4>
                <p className="text-gray-500 text-xs mt-2 leading-relaxed">To remain Delhi NCR's most trusted agency for luxury couples, event curators, and brand directors looking for premium shows.</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80"
              alt="Luxury Wedding Banquet Setup"
              className="rounded-3xl shadow-2xl w-full object-cover border border-gray-100"
            />
            {/* Floating gold badge */}
            <div className="absolute -bottom-6 -left-6 bg-gold text-charcoal p-6 rounded-2xl shadow-xl flex items-center gap-3">
              <Star className="w-8 h-8 fill-charcoal text-charcoal" />
              <div>
                <div className="font-serif font-bold text-xl leading-none">20+ Years</div>
                <div className="text-[10px] uppercase font-bold tracking-widest mt-1">Industry Leader</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <div className="max-w-2xl mx-auto mb-16">
            <span className="gold-gradient text-xs uppercase tracking-widest font-bold">Execution Strength</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-charcoal mt-2">Why Rainbow Entertainment?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, idx) => (
              <div key={idx} className="bg-white border border-gray-100 rounded-3xl p-8 text-left shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-charcoal mb-3">{item.title}</h3>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{item.desc}</p>
                <ul className="mt-6 space-y-2">
                  {["Verified Artists", "No Middlemen Rates", "Dual Backup Generators"].map((tick) => (
                    <li key={tick} className="flex items-center gap-2 text-xs font-semibold text-charcoal-light">
                      <Check className="w-4 h-4 text-gold shrink-0" />
                      {tick}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Milestones */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="gold-gradient text-xs uppercase tracking-widest font-bold">Milestones</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-charcoal mt-2">Our Historic Timeline</h2>
          </div>

          <div className="relative border-l-2 border-gold/30 max-w-3xl mx-auto pl-8 space-y-12">
            {milestones.map((stone, idx) => (
              <div key={idx} className="relative">
                {/* Timeline node */}
                <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-gold border-4 border-white shadow-md flex items-center justify-center" />
                
                <span className="gold-gradient text-sm uppercase tracking-widest font-bold">{stone.year}</span>
                <h3 className="text-xl font-serif font-bold text-charcoal mt-1">{stone.title}</h3>
                <p className="text-gray-500 text-xs md:text-sm mt-2 leading-relaxed">{stone.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
