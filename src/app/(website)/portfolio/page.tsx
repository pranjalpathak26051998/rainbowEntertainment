import { Metadata } from "next";
import MasonryGallery from "@/components/custom/MasonryGallery";

export const metadata: Metadata = {
  title: "Event Portfolio & Highlights Gallery | Rainbow Entertainment",
  description: "Explore our masonry photo and video gallery showcasing luxury weddings, corporate brand launches, live Sufi concerts, and massive stage setups in Delhi NCR.",
  alternates: {
    canonical: "/portfolio"
  }
};

export default function PortfolioPage() {
  return (
    <div className="bg-charcoal pt-24 pb-24 text-white min-h-screen">
      {/* Header Banner */}
      <section className="relative py-20 text-center">
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <span className="gold-gradient text-xs uppercase tracking-widest font-bold">Visual Proof of Excellence</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mt-2">Our Event Portfolio</h1>
          <p className="text-white/60 text-sm md:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
            Click on any item to view details or play the live video highlights reel. Filter by event type using the category links.
          </p>
        </div>
      </section>

      {/* Filterable Masonry Gallery */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <MasonryGallery />
      </div>
    </div>
  );
}
