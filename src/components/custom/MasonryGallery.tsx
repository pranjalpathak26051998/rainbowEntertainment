"use client";

import { useState } from "react";
import { Play, X, ChevronLeft, ChevronRight, MapPin, Calendar } from "lucide-react";
import { GALLERY_ITEMS, GalleryItem } from "@/data/gallery";

interface MasonryGalleryProps {
  limit?: number;
  initialFilter?: string;
}

export default function MasonryGallery({ limit, initialFilter = "all" }: MasonryGalleryProps) {
  const [filter, setFilter] = useState(initialFilter);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { key: "all", name: "All Work" },
    { key: "weddings", name: "Weddings" },
    { key: "corporate", name: "Corporate" },
    { key: "concerts", name: "Concerts" },
    { key: "stage-shows", name: "Stage Shows" },
    { key: "religious-events", name: "Religious Events" }
  ];

  // Filter items
  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (filter === "all") return true;
    return item.category === filter;
  });

  const displayItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % displayItems.length);
    }
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + displayItems.length) % displayItems.length);
    }
  };

  const currentItem = lightboxIndex !== null ? displayItems[lightboxIndex] : null;

  return (
    <div className="w-full flex flex-col items-center">
      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10 w-full max-w-4xl px-4">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setFilter(cat.key)}
            className={`font-sans text-xs uppercase tracking-widest font-bold py-3 px-6 rounded-full border transition-all duration-300 cursor-pointer ${
              filter === cat.key
                ? "bg-gold text-charcoal border-gold shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                : "bg-transparent text-white/70 border-white/10 hover:text-white hover:border-white/30"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Masonry Columns (using Tailwind columns utility for authentic masonry grid heights) */}
      <div className="w-full columns-1 md:columns-2 lg:columns-3 gap-6 px-4 md:px-8">
        {displayItems.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => openLightbox(idx)}
            className="break-inside-avoid mb-6 group relative overflow-hidden rounded-2xl border border-white/5 bg-charcoal-light cursor-pointer zoom-trigger"
          >
            {/* Visual Media Wrapper */}
            <div className="relative overflow-hidden aspect-[4/3] md:aspect-auto">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover zoom-target"
                loading="lazy"
              />
              
              {/* Image dark overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark via-charcoal-dark/40 to-transparent opacity-60 md:opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-end p-6" />

              {/* Play Button for Video Items */}
              {item.type === "video" && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-gold/90 backdrop-blur-sm flex items-center justify-center text-charcoal shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-6 h-6 fill-charcoal translate-x-0.5" />
                </div>
              )}

              {/* Text metadata appearing on hover */}
              <div className="absolute bottom-0 left-0 w-full p-6 text-left transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-[10px] uppercase font-bold text-gold tracking-widest">{item.category.replace("-", " ")}</span>
                <h3 className="text-lg font-serif font-bold text-white mt-1 leading-tight">{item.title}</h3>
                
                <div className="flex gap-4 items-center text-white/50 text-xs mt-3">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-gold" />
                    {item.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-gold" />
                    {item.year}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {currentItem && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/70 hover:text-white p-2 rounded-lg bg-white/5 cursor-pointer z-50"
            aria-label="Close Gallery"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Controls */}
          <button
            onClick={showPrev}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-full bg-white/5 hover:bg-white/10 cursor-pointer z-50 transition-all"
            aria-label="Previous Item"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={showNext}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-full bg-white/5 hover:bg-white/10 cursor-pointer z-50 transition-all"
            aria-label="Next Item"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Contents */}
          <div
            className="relative w-full max-w-5xl max-h-[85vh] flex flex-col gap-4 text-center items-center justify-center z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {currentItem.type === "video" && currentItem.videoUrl ? (
              <div className="w-full aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                <iframe
                  src={`https://www.youtube.com/embed/${currentItem.videoUrl}?autoplay=1`}
                  title={currentItem.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            ) : (
              <img
                src={currentItem.imageUrl}
                alt={currentItem.title}
                className="max-w-full max-h-[70vh] object-contain rounded-lg border border-white/10 shadow-2xl"
              />
            )}

            {/* Info panel */}
            <div className="text-left w-full max-w-3xl px-4 mt-2">
              <span className="text-xs uppercase tracking-widest font-bold text-gold">
                {currentItem.category.replace("-", " ")} ({currentItem.type})
              </span>
              <h2 className="text-xl md:text-2xl font-serif font-bold text-white mt-1">
                {currentItem.title}
              </h2>
              <div className="flex gap-6 items-center text-white/60 text-xs md:text-sm mt-2 border-t border-white/5 pt-2">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-gold" />
                  {currentItem.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-gold" />
                  {currentItem.year}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
