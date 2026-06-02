"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Play, Star, Calendar, MessageSquare, ShieldCheck, Heart, Sparkles } from "lucide-react";
import Hero from "@/components/custom/Hero";
import ClientCarousel from "@/components/custom/ClientCarousel";
import { SERVICE_CATEGORIES } from "@/data/services";
import { TESTIMONIALS } from "@/data/testimonials";
import { BLOG_ARTICLES } from "@/data/blogs";

export default function HomePage() {
  const featuredBlogs = BLOG_ARTICLES.slice(0, 3);
  const featuredTestimonials = TESTIMONIALS.slice(0, 3);

  // We need to allow opening the quote modal. In Next.js, we can trigger the floating modal 
  // by firing a custom event or we can just scroll to the bottom call-to-action which contains a contact link,
  // or we can invoke a click on the floating quote button! Let's do a simple scroll to the contact banner
  // or trigger the quote modal via a custom window event that FloatingCTA listens to!
  // That's an extremely smart way: window.dispatchEvent(new Event("open-quote-modal")).
  // Wait, let's see if we added a listener in FloatingCTA? No, but we can easily call it or just scroll to the footer CTA.
  // Actually, we can trigger the quote modal by dispatching a custom event, but wait, a direct click or scrolling to contact is very easy.
  // Let's implement a window event trigger!
  const triggerQuoteModal = () => {
    // We can simulate click on the floating quote button
    const ctaButton = document.querySelector('[title="Get Free Quote"]') as HTMLButtonElement;
    if (ctaButton) {
      ctaButton.click();
    }
  };

  return (
    <div className="bg-white overflow-hidden">
      {/* Cinematic Hero */}
      <Hero onQuoteClick={triggerQuoteModal} />

      {/* Trust Badges Bar */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex gap-4 items-start">
            <div className="p-3 rounded-xl bg-gold/10 text-gold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-charcoal">Pan India Delivery</h3>
              <p className="text-gray-500 text-sm mt-1">Providing state-of-the-art staging, sound, and lighting network across major Indian cities.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="p-3 rounded-xl bg-gold/10 text-gold">
              <Heart className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-charcoal">Luxury Weddings</h3>
              <p className="text-gray-500 text-sm mt-1">Crafting custom ladies sangeet, bridal entries, and classical symphonic reception music.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="p-3 rounded-xl bg-gold/10 text-gold">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-charcoal">Celebrity Direct Bookings</h3>
              <p className="text-gray-500 text-sm mt-1">Direct relationships with TV artists, playback singers, sports stars, and top influencers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Categories Grid */}
      <section id="core-services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="gold-gradient text-xs uppercase tracking-widest font-bold">What We Offer</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-charcoal mt-2">Our Premium Services</h2>
            <p className="text-gray-500 text-sm md:text-base mt-4">
              Over two decades of experience designing production assets and booking live entertainment for luxury segments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICE_CATEGORIES.map((category) => (
              <div
                key={category.key}
                className="group bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:border-gold/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative overflow-hidden aspect-video rounded-2xl mb-6">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-charcoal group-hover:text-gold transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-500 text-xs md:text-sm mt-3 leading-relaxed">
                    {category.description}
                  </p>
                </div>
                <div className="mt-6 border-t border-gray-50 pt-4">
                  <Link
                    href={`/services#${category.key}`}
                    className="inline-flex items-center gap-1.5 text-xs uppercase font-bold tracking-widest text-gold hover:text-charcoal transition-colors"
                  >
                    Explore Categories
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Brands Marquee */}
      <ClientCarousel />

      {/* Testimonials (with Video reels) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="gold-gradient text-xs uppercase tracking-widest font-bold">Client Success Stories</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-charcoal mt-2">Over 1,000+ Unforgettable Events</h2>
            <p className="text-gray-500 text-sm mt-4">
              Here is what couples and top corporate companies say about our event management and sound setups.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gray-50 border border-gray-100 rounded-3xl p-8 relative flex flex-col justify-between"
              >
                <div>
                  {/* Rating */}
                  <div className="flex gap-1 text-gold mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>

                  <p className="text-gray-600 text-sm md:text-base italic leading-relaxed mb-8">
                    "{testimonial.reviewText}"
                  </p>

                  {/* Video Review Thumbnail if available */}
                  {testimonial.videoUrl && (
                    <div className="relative group rounded-2xl overflow-hidden aspect-video mb-6 border border-gray-200 shadow-sm cursor-pointer">
                      <img
                        src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=400&q=80"
                        alt="Video Testimonial Thumbnail"
                        className="w-full h-full object-cover filter brightness-[0.7] group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full bg-gold/90 flex items-center justify-center text-charcoal shadow-lg group-hover:scale-110 transition-transform">
                          <Play className="w-4 h-4 fill-charcoal translate-x-0.5" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Client Profile */}
                <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.clientName}
                    className="w-12 h-12 rounded-full object-cover border border-gold/30"
                  />
                  <div>
                    <h4 className="font-serif font-bold text-charcoal text-sm">{testimonial.clientName}</h4>
                    <p className="text-gold text-xs font-semibold uppercase mt-0.5">{testimonial.designation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Blog Articles */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <span className="gold-gradient text-xs uppercase tracking-widest font-bold">SEO Articles & Guides</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-charcoal mt-2">Latest Event Planning Insights</h2>
            </div>
            <Link
              href="/blog"
              className="gold-bg-gradient text-charcoal font-sans text-xs tracking-widest font-bold uppercase py-3.5 px-8 rounded-full hover:opacity-90 transition-all flex items-center gap-2 hover:scale-105 duration-300"
            >
              All Articles
              <ArrowUpRight className="w-3.5 h-3.5 text-charcoal" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredBlogs.map((article) => (
              <article
                key={article.id}
                className="bg-white border border-gray-100 rounded-3xl overflow-hidden group hover:shadow-xl hover:border-gold/20 transition-all duration-300 flex flex-col h-full"
              >
                <div className="relative overflow-hidden aspect-[16/10] shrink-0">
                  <img
                    src={article.coverImage}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 flex gap-1.5 flex-wrap">
                    {article.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-wider font-bold bg-charcoal/90 text-gold px-2.5 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <span className="text-gray-400 text-xs font-semibold">{article.publishedDate} &bull; {article.readTime}</span>
                    <h3 className="text-lg font-serif font-bold text-charcoal mt-2 line-clamp-2 group-hover:text-gold transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-500 text-xs md:text-sm mt-3 line-clamp-3 leading-relaxed">
                      {article.summary}
                    </p>
                  </div>
                  <div className="mt-6 border-t border-gray-50 pt-4">
                    <Link
                      href={`/blog/${article.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs uppercase font-bold tracking-widest text-gold hover:text-charcoal transition-colors"
                    >
                      Read Article
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Booking CTA Banner */}
      <section className="relative py-28 dark-section overflow-hidden text-center flex flex-col items-center">
        {/* Background Visual Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1920&q=80"
            alt="Event Stage Background"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/90 to-black" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center">
          <span className="gold-gradient text-xs uppercase tracking-widest font-bold">Let's Create Magic</span>
          <h2 className="text-3xl md:text-6xl font-serif font-bold text-white mt-4 tracking-tight leading-tight">
            Ready to Design an <span className="gold-gradient">Extraordinary</span> Event?
          </h2>
          <p className="text-white/60 text-sm md:text-lg mt-6 max-w-2xl leading-relaxed">
            Get direct pricing quotes for live Sufi bands, grand wedding orchestras, custom choreographies, and concert-grade sound rentals in Delhi NCR.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-10 w-full sm:w-auto">
            <button
              onClick={triggerQuoteModal}
              className="w-full sm:w-auto gold-bg-gradient text-charcoal font-sans text-xs tracking-widest font-bold uppercase py-4.5 px-10 rounded-full transition-all hover:scale-105 duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-charcoal" />
              Get Free Quote
            </button>
            <a
              href="https://wa.me/919999999999?text=Hi%20Rainbow%20Entertainment,%20I'd%20like%20to%20get%20information%20on%20booking%20event%20entertainment."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto border border-white/20 hover:border-gold bg-white/5 hover:bg-white/10 text-white font-sans text-xs tracking-widest font-bold uppercase py-4.5 px-10 rounded-full transition-all hover:scale-105 duration-300 flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-white text-white border-none" />
              WhatsApp Consult
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
