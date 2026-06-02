import { Metadata } from "next";
import { Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react";
import LeadForm from "@/components/custom/LeadForm";

export const metadata: Metadata = {
  title: "Contact & Bookings Delhi NCR | Rainbow Entertainment",
  description: "Contact Rainbow Entertainment, Delhi NCR. Submit our event query form to get free quotes for weddings, sangeet choreography, corporate meets, and live bands.",
  alternates: {
    canonical: "/contact"
  }
};

export default function ContactPage() {
  return (
    <div className="bg-white pt-24 pb-24">
      {/* Header Banner */}
      <section className="relative py-20 dark-section text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-dark via-charcoal to-charcoal-light opacity-80" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <span className="gold-gradient text-xs uppercase tracking-widest font-bold">Get In Touch</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mt-2">Connect With Our Team</h1>
          <p className="text-white/60 text-sm md:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
            Fill out the inquiry form or connect directly via phone or WhatsApp. Let's design something spectacular together.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Contact Info (Left) */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          <div>
            <span className="gold-gradient text-xs uppercase tracking-widest font-bold">Contact Details</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-charcoal mt-1">Direct Touchpoints</h2>
            <p className="text-gray-500 text-sm mt-3">
              Reach out directly. Our response time for email and WhatsApp queries is less than 2 hours.
            </p>
          </div>

          <div className="grid gap-4">
            {/* Phone */}
            <a
              href="tel:+919999999999"
              className="flex items-start gap-4 p-5 bg-gray-50 border border-gray-100 rounded-2xl hover:border-gold/30 hover:bg-white transition-all group"
            >
              <div className="p-3 bg-gold/10 text-gold rounded-xl group-hover:scale-105 transition-transform">
                <Phone className="w-5 h-5 fill-none" />
              </div>
              <div>
                <h4 className="text-xs uppercase font-bold tracking-wider text-gray-400">Call Now</h4>
                <p className="text-charcoal font-serif font-bold text-base md:text-lg mt-1">+91 99999 99999</p>
                <span className="text-[10px] text-gray-400 block mt-1">Available 9:00 AM - 10:00 PM IST</span>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919999999999?text=Hi%20Rainbow%20Entertainment,%20I'd%20like%20to%20inquire%20about%20booking%20event%20entertainment."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-5 bg-gray-50 border border-gray-100 rounded-2xl hover:border-green-600/30 hover:bg-white transition-all group"
            >
              <div className="p-3 bg-green-600/10 text-green-600 rounded-xl group-hover:scale-105 transition-transform">
                <MessageSquare className="w-5 h-5 fill-none" />
              </div>
              <div>
                <h4 className="text-xs uppercase font-bold tracking-wider text-gray-400">WhatsApp Us</h4>
                <p className="text-charcoal font-serif font-bold text-base md:text-lg mt-1">Chat Live Now</p>
                <span className="text-[10px] text-gray-400 block mt-1">Quick responses & catalogue sharing</span>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:info@rainbowentertainment.in"
              className="flex items-start gap-4 p-5 bg-gray-50 border border-gray-100 rounded-2xl hover:border-gold/30 hover:bg-white transition-all group"
            >
              <div className="p-3 bg-gold/10 text-gold rounded-xl group-hover:scale-105 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs uppercase font-bold tracking-wider text-gray-400">Email Address</h4>
                <p className="text-charcoal font-serif font-bold text-base md:text-lg mt-1">info@rainbowentertainment.in</p>
                <span className="text-[10px] text-gray-400 block mt-1">For corporate proposals and RFPs</span>
              </div>
            </a>

            {/* Address */}
            <div className="flex items-start gap-4 p-5 bg-gray-50 border border-gray-100 rounded-2xl">
              <div className="p-3 bg-gold/10 text-gold rounded-xl">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs uppercase font-bold tracking-wider text-gray-400">Head Office Location</h4>
                <p className="text-charcoal font-serif font-bold text-sm md:text-base mt-1">M-14, Greater Kailash II, New Delhi, 110048</p>
                <span className="text-[10px] text-gray-400 block mt-1">Prior appointment recommended</span>
              </div>
            </div>
          </div>
        </div>

        {/* Form and Map (Right) */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          {/* Lead Form Box */}
          <div className="bg-charcoal border border-gold/15 rounded-3xl p-6 md:p-8 shadow-xl text-white">
            <span className="gold-gradient text-xs uppercase tracking-widest font-bold">Online Inquiry Form</span>
            <h3 className="text-xl md:text-2xl font-serif font-bold text-white mt-1 mb-6">Describe Your Event Vision</h3>
            <LeadForm />
          </div>

          {/* Google Maps Embed */}
          <div className="rounded-3xl overflow-hidden border border-gray-100 h-80 shadow-sm relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14018.665977937402!2d77.23419999999999!3d28.5347!2m3!1f0!2f0!3f0!3m2!1i1024|2i768|4f13.1!3m3!1m2!1s0x390ce3c4ea0f6667%3A0xa1ea944f387db287!2sGreater%20Kailash%20II%2C%20New%20Delhi%2C%20Delhi%20110048!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map GK II, New Delhi"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
