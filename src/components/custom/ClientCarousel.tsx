"use client";

import { BRAND_LOGOS } from "@/data/testimonials";

export default function ClientCarousel() {
  // Double the list to support seamless infinite loop scrolling
  const duplicatedLogos = [...BRAND_LOGOS, ...BRAND_LOGOS, ...BRAND_LOGOS];

  return (
    <div className="w-full overflow-hidden bg-charcoal-dark border-y border-white/5 py-12 relative">
      {/* Side gradient masks */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-charcoal-dark to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-charcoal-dark to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-6 text-center">
        <span className="gold-gradient text-xs uppercase tracking-widest font-bold">Trusted by Corporate Leaders</span>
        <h2 className="text-xl md:text-2xl font-serif font-bold text-white mt-1">Our Prestigious Brand Collaborations</h2>
      </div>

      {/* Marquee Wrapper */}
      <div className="flex overflow-hidden select-none mt-6">
        <div className="flex gap-16 md:gap-24 items-center animate-infinite-scroll min-w-full">
          {duplicatedLogos.map((logo, idx) => (
            <div
              key={`${logo.name}-${idx}`}
              className="flex items-center justify-center shrink-0 w-32 md:w-40 h-12 relative group"
            >
              {/* Logo images via standard img since we need vector SVG links */}
              <img
                src={logo.logoUrl}
                alt={`${logo.name} Logo`}
                className="max-w-full max-h-full object-contain filter grayscale brightness-[4] opacity-40 group-hover:grayscale-0 group-hover:brightness-100 group-hover:opacity-100 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
