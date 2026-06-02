import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, MessageSquare, Phone, Calendar, ShieldCheck, Film, Image as ImageIcon } from "lucide-react";
import { getServiceBySlug, SERVICES } from "@/data/services";
import LeadForm from "@/components/custom/LeadForm";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate dynamic SEO metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const service = getServiceBySlug(resolvedParams.slug);

  if (!service) {
    return {
      title: "Service Not Found",
      description: "The requested event management service could not be found."
    };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `/services/${service.slug}`
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://rainbowentertainment.in/services/${service.slug}`,
      type: "website",
      images: [
        {
          url: service.gallery[0] || "",
          width: 800,
          height: 600,
          alt: service.title
        }
      ]
    }
  };
}

// Enable Static Site Generation (SSG) for all services
export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug
  }));
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const service = getServiceBySlug(resolvedParams.slug);

  if (!service) {
    notFound();
  }

  // Schema.org JSON-LD Objects
  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.shortDescription,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Rainbow Entertainment",
      "image": "https://rainbowentertainment.in/logo.png",
      "telephone": "+91-99999-99999",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "M-14, Greater Kailash II",
        "addressLocality": "New Delhi",
        "addressRegion": "Delhi",
        "postalCode": "110048",
        "addressCountry": "IN"
      }
    }
  };

  const jsonLdFaq = service.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  return (
    <div className="bg-white pt-24 pb-20">
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
      />
      {jsonLdFaq && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
        />
      )}

      {/* Back Button & Category Tag */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-gold hover:text-charcoal transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Services
        </Link>
      </div>

      {/* Hero Header Banner */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        <div className="lg:col-span-2">
          <span className="text-gold text-xs uppercase tracking-widest font-bold font-sans">
            {service.categoryName}
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mt-1">
            {service.title}
          </h1>
          <p className="text-gray-500 text-sm md:text-base mt-4 leading-relaxed max-w-3xl">
            {service.shortDescription}
          </p>

          <div className="flex flex-wrap gap-6 items-center text-gray-500 text-xs mt-6 border-y border-gray-100 py-4">
            <span className="flex items-center gap-1.5">
              <ImageIcon className="w-4 h-4 text-gold" />
              Custom Photo Gallery
            </span>
            <span className="flex items-center gap-1.5">
              <Film className="w-4 h-4 text-gold" />
              Event Live Reel
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-gold" />
              20+ Years Trusted Execution
            </span>
          </div>

          {/* Narrative Content */}
          <div className="mt-8 text-gray-600 text-sm md:text-base leading-relaxed space-y-6 max-w-3xl">
            <p>{service.description}</p>
            
            <h3 className="text-xl font-serif font-bold text-charcoal pt-4 border-t border-gray-50">
              Key Features & Inclusions
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.features.map((feat, idx) => (
                <li key={idx} className="flex gap-2 items-start text-sm">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sidebar Inquiry Card */}
        <div className="bg-charcoal border border-gold/15 rounded-3xl p-6 md:p-8 shadow-xl text-white sticky top-28">
          <span className="gold-gradient text-xs uppercase tracking-widest font-bold">Fast Quote Request</span>
          <h3 className="text-xl md:text-2xl font-serif font-bold mt-1 text-white">Book {service.title}</h3>
          <p className="text-white/60 text-xs mt-2 mb-6">
            Get instant booking estimates for setups in Delhi NCR.
          </p>

          <LeadForm compact={true} />
          
          <div className="border-t border-white/5 pt-6 mt-6 flex flex-col gap-3">
            <a
              href="https://wa.me/919999999999?text=Hi,%20I'd%20like%20to%20inquire%20about%20booking%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-sans text-xs tracking-widest font-bold uppercase py-3 rounded-xl transition-all"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              WhatsApp Specialist
            </a>
            <a
              href="tel:+919999999999"
              className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-gold font-sans text-xs tracking-widest font-bold uppercase py-3 rounded-xl transition-all"
            >
              <Phone className="w-4 h-4 text-gold" />
              Call +91 99999 99999
            </a>
          </div>
        </div>
      </section>

      {/* Photo Gallery & Video Showreels */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mt-20 border-t border-gray-100 pt-16">
        <span className="gold-gradient text-xs uppercase tracking-widest font-bold">Visual Highlights</span>
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-charcoal mt-1 mb-8">
          Event Gallery & Video Reels
        </h2>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.gallery.map((imgUrl, i) => (
            <div key={i} className="relative overflow-hidden rounded-2xl aspect-[4/3] border border-gray-100 group shadow-sm">
              <img
                src={imgUrl}
                alt={`${service.title} Gallery Item ${i}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
          ))}
          {/* Video Player */}
          {service.videos.map((vidId, idx) => (
            <div key={idx} className="relative overflow-hidden rounded-2xl aspect-[4/3] border border-gray-100 shadow-sm md:col-span-2 lg:col-span-1">
              <iframe
                src={`https://www.youtube.com/embed/${vidId}`}
                title={`${service.title} Showreel`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Service Specific FAQs */}
      {service.faqs.length > 0 && (
        <section className="max-w-4xl mx-auto px-6 md:px-12 mt-24 border-t border-gray-100 pt-16">
          <span className="gold-gradient text-xs uppercase tracking-widest font-bold">Help Desk</span>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-charcoal mt-1 mb-8">
            Frequently Asked Questions
          </h2>

          <div className="grid gap-6">
            {service.faqs.map((faq, idx) => (
              <div key={idx} className="p-6 bg-gray-50 border border-gray-100 rounded-2xl">
                <h4 className="font-serif font-bold text-charcoal text-base">{faq.question}</h4>
                <p className="text-gray-500 text-xs md:text-sm mt-3 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
