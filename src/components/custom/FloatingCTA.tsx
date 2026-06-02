"use client";

import { useState } from "react";
import { Phone, MessageSquare, FileText, X } from "lucide-react";
import LeadForm from "./LeadForm";

interface FloatingCTAProps {
  forceOpenModal?: boolean;
  onModalClose?: () => void;
}

export default function FloatingCTA({ forceOpenModal = false, onModalClose }: FloatingCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    if (onModalClose) onModalClose();
  };

  const activeModal = isModalOpen || forceOpenModal;

  return (
    <>
      {/* Floating CTA Buttons Container */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        {/* Call Now */}
        <a
          href="tel:+919999999999"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-gold text-charcoal shadow-2xl hover:scale-110 hover:shadow-gold/30 transition-all duration-300"
          aria-label="Call Now"
          title="Call Now"
        >
          <Phone className="w-5 h-5 fill-charcoal" />
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/919999999999?text=Hi%20Rainbow%20Entertainment,%20I%20would%20like%20to%20inquire%20about%20booking%20event%20entertainment."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-green-600 text-white shadow-2xl hover:scale-110 hover:shadow-green-600/30 transition-all duration-300"
          aria-label="WhatsApp Us"
          title="WhatsApp Us"
        >
          <MessageSquare className="w-5 h-5 fill-white" />
        </a>

        {/* Get Quote */}
        <button
          onClick={openModal}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-crimson text-white shadow-2xl hover:scale-110 hover:shadow-crimson/30 transition-all duration-300 cursor-pointer"
          aria-label="Get Free Quote"
          title="Get Free Quote"
        >
          <FileText className="w-5 h-5" />
        </button>
      </div>

      {/* Quote Dialog Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={closeModal}
          />
          
          {/* Modal Content */}
          <div className="relative w-full max-w-2xl bg-charcoal border border-gold/20 rounded-2xl p-6 md:p-8 shadow-2xl z-10 overflow-y-auto max-h-[90vh]">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 text-white/50 hover:text-white rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="mb-6 pr-6">
              <span className="gold-gradient text-xs uppercase tracking-widest font-bold">Request Event Quotation</span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mt-1">Plan Your Luxury Event</h2>
              <p className="text-white/60 text-xs mt-1">
                Fill in the details below. Our luxury planners will curate a custom quotation within 2 hours.
              </p>
            </div>
            
            <LeadForm onSuccess={closeModal} compact={true} />
          </div>
        </div>
      )}
    </>
  );
}
