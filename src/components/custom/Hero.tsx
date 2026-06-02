"use client";

import { motion } from "framer-motion";
import { MessageSquare, Calendar, ChevronDown, CheckCircle2 } from "lucide-react";

interface HeroProps {
  onQuoteClick: () => void;
}

export default function Hero({ onQuoteClick }: HeroProps) {
  const stats = [
    { value: "20+", label: "Years Experience" },
    { value: "1000+", label: "Events Delivered" },
    { value: "Pan India", label: "Service Network" },
    { value: "100+", label: "Celebrity Collabs" }
  ];

  const handleScrollDown = () => {
    const nextSection = document.getElementById("core-services");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-between dark-section overflow-hidden">
      {/* Background Cinematic Video/Image Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-45 scale-105"
          poster="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1920&q=80"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-concert-stage-with-lights-and-smoke-41775-large.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark Gradients to soften the video and make text pop */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)]" />
      </div>

      {/* Hero Content (Center) */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex-grow flex flex-col justify-center items-center text-center pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 backdrop-blur-md mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-gold animate-ping" />
          <span className="text-xs uppercase tracking-widest font-bold text-gold-light">Delhi NCR's Premier Event Agency</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold text-white tracking-tight leading-[1.1] max-w-4xl"
        >
          Creating Extraordinary Events & <span className="gold-gradient">Entertainment Experiences</span> Since 20+ Years
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-white/70 text-base md:text-xl font-sans mt-6 max-w-2xl leading-relaxed"
        >
          Delhi NCR's Trusted Partner for Weddings, Corporate Events, Celebrity Management, Live Shows & Stage Production.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-10 w-full sm:w-auto"
        >
          <button
            onClick={onQuoteClick}
            className="w-full sm:w-auto gold-bg-gradient text-charcoal font-sans text-xs tracking-widest font-bold uppercase py-4 px-10 rounded-full transition-all hover:scale-105 duration-300 hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] flex items-center justify-center gap-2 cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-charcoal" />
            Get Free Quote
          </button>
          
          <a
            href="https://wa.me/919999999999?text=Hi%20Rainbow%20Entertainment,%20I'd%20like%20to%20get%20information%20on%20booking%20event%20entertainment."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto border border-white/20 hover:border-gold bg-white/5 hover:bg-white/10 text-white font-sans text-xs tracking-widest font-bold uppercase py-4 px-10 rounded-full transition-all hover:scale-105 duration-300 flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4 fill-white text-white border-none" />
            WhatsApp Now
          </a>
        </motion.div>
      </div>

      {/* Trust Bar & Scroll Down (Bottom) */}
      <div className="relative z-10 w-full bg-charcoal-dark/80 backdrop-blur-md border-t border-white/5 py-8">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Scroll Indicator */}
          <button
            onClick={handleScrollDown}
            className="hidden md:flex flex-col items-center gap-1 text-white/40 hover:text-gold transition-colors group cursor-pointer"
          >
            <span className="text-xs uppercase tracking-widest font-bold">Explore More</span>
            <ChevronDown className="w-4 h-4 animate-bounce group-hover:text-gold" />
          </button>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 w-full md:w-auto flex-grow md:justify-end">
            {stats.map((stat, i) => (
              <div key={i} className="text-center md:text-left border-l-2 border-gold/30 pl-4">
                <div className="text-2xl md:text-3xl font-serif font-bold text-white tracking-wide">
                  {stat.value}
                </div>
                <div className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-white/50 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
