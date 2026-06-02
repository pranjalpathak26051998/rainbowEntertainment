"use client";

import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Video, Image as ImageIcon, MessageSquare } from "lucide-react";
import { SERVICE_CATEGORIES, SERVICES, getServicesByCategory } from "@/data/services";

export default function ServicesPage() {
  const triggerQuoteModal = () => {
    const ctaButton = document.querySelector('[title="Get Free Quote"]') as HTMLButtonElement;
    if (ctaButton) ctaButton.click();
  };

  return (
    <div className="bg-white pt-24">
      {/* Header */}
      <section className="relative py-20 dark-section text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-dark via-charcoal to-charcoal-light opacity-80" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <span className="gold-gradient text-xs uppercase tracking-widest font-bold">Comprehensive Event Solutions</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mt-2">Our Entertainment & Production Services</h1>
          <p className="text-white/60 text-sm md:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
            Choose from our specialized categories. We handle everything from celebrity bookings and live orchestra bands to concert light systems.
          </p>
        </div>
      </section>

      {/* Category Anchors Navigator */}
      <section className="bg-gray-50 border-b border-gray-100 py-6 sticky top-[73px] z-30 shadow-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-6">
          {SERVICE_CATEGORIES.map((cat) => (
            <a
              key={cat.key}
              href={`#${cat.key}`}
              className="text-xs font-sans uppercase tracking-widest font-bold text-charcoal-light hover:text-gold transition-colors"
            >
              {cat.name.split(" ")[0]}
            </a>
          ))}
        </div>
      </section>

      {/* Categories Content Sections */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 space-y-28">
        {SERVICE_CATEGORIES.map((category) => {
          const categoryServices = getServicesByCategory(category.key);

          return (
            <section
              key={category.key}
              id={category.key}
              className="scroll-mt-28 border-b border-gray-100 pb-16 last:border-0"
            >
              {/* Category Info Header */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mb-12">
                <div className="lg:col-span-2">
                  <span className="gold-gradient text-xs uppercase tracking-widest font-bold">Category Details</span>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mt-1">
                    {category.name}
                  </h2>
                  <p className="text-gray-500 text-sm md:text-base mt-4 max-w-3xl leading-relaxed">
                    {category.description}
                  </p>
                </div>
                <div className="relative overflow-hidden rounded-2xl aspect-[16/9] border border-gray-100 shadow-sm">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                </div>
              </div>

              {/* Service Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryServices.map((service) => (
                  <div
                    key={service.id}
                    className="group bg-gray-50 hover:bg-white border border-gray-100 hover:border-gold/20 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      {/* Image Thumbnail */}
                      <div className="relative overflow-hidden aspect-video rounded-2xl mb-6">
                        <img
                          src={service.gallery[0] || category.image}
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/10" />
                      </div>
                      
                      <h3 className="text-xl font-serif font-bold text-charcoal group-hover:text-gold transition-colors">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-500 text-xs md:text-sm mt-3 leading-relaxed line-clamp-3">
                        {service.shortDescription}
                      </p>

                      {/* Highlighted bullets */}
                      <ul className="mt-4 space-y-2">
                        {service.features.slice(0, 2).map((feat, i) => (
                          <li key={i} className="flex gap-2 items-start text-xs text-gray-600">
                            <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 border-t border-gray-100 pt-4 flex justify-between items-center">
                      <div className="flex gap-3 text-gray-400">
                        <span title="Photo Gallery Included"><ImageIcon className="w-4 h-4" /></span>
                        <span title="Video Highlights Included"><Video className="w-4 h-4" /></span>
                      </div>
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs uppercase font-bold tracking-widest text-gold hover:text-charcoal transition-colors"
                      >
                        Details & Pricing
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* Booking Dialog Trigger Banner */}
      <section className="bg-charcoal text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-serif font-bold mb-4">Can't Find a Specific Service?</h2>
          <p className="text-white/60 text-xs md:text-sm max-w-xl mx-auto mb-8">
            Our software architects and coordinators offer fully customized setups. We can manage specific artist booking riders, custom trusses, or specific decoration demands.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={triggerQuoteModal}
              className="gold-bg-gradient text-charcoal font-sans text-xs tracking-widest font-bold uppercase py-4 px-8 rounded-full transition-all hover:scale-105 duration-300 cursor-pointer"
            >
              Get Free Quote
            </button>
            <a
              href="tel:+919999999999"
              className="border border-white/20 hover:border-gold px-8 py-4 rounded-full text-xs uppercase font-bold tracking-wider hover:bg-white/5 transition-all flex items-center justify-center gap-2"
            >
              Call Specialist
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
