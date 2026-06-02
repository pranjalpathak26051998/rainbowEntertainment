import Link from "next/link";
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube, Compass } from "lucide-react";
import { SERVICE_CATEGORIES } from "@/data/services";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal border-t border-white/5 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Brand Column */}
        <div className="flex flex-col gap-6">
          <div>
            <span className="text-2xl font-serif font-bold tracking-wider text-white">
              RAINBOW<span className="gold-gradient block text-xs font-sans tracking-[0.3em] font-normal">ENTERTAINMENT</span>
            </span>
          </div>
          <p className="text-white/60 text-sm leading-relaxed">
            Delhi NCR's premier event management and entertainment agency. Designing luxury weddings, high-octane corporate events, live concerts, and exclusive celebrity bookings for over two decades.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-gold hover:text-charcoal transition-all" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-gold hover:text-charcoal transition-all" aria-label="Facebook">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-gold hover:text-charcoal transition-all" aria-label="Youtube">
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div>
          <h3 className="font-serif text-lg font-bold mb-6 text-gold">Quick Links</h3>
          <ul className="grid gap-3">
            {[
              { name: "About Company", href: "/about" },
              { name: "Our Services Portfolio", href: "/services" },
              { name: "Event Gallery", href: "/portfolio" },
              { name: "SEO Event Blogs", href: "/blog" },
              { name: "Contact & Inquiries", href: "/contact" },
              { name: "Inquiry Dashboard", href: "/admin" }
            ].map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-white/60 hover:text-gold text-sm transition-colors flex items-center gap-2 group"
                >
                  <Compass className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-gold transition-opacity" />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Column */}
        <div>
          <h3 className="font-serif text-lg font-bold mb-6 text-gold">Our Services</h3>
          <ul className="grid gap-3">
            {SERVICE_CATEGORIES.map((category) => (
              <li key={category.key}>
                <Link
                  href={`/services#${category.key}`}
                  className="text-white/60 hover:text-gold text-sm transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/40 group-hover:bg-gold transition-colors" />
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Column */}
        <div className="flex flex-col gap-6">
          <h3 className="font-serif text-lg font-bold text-gold">Get in Touch</h3>
          <ul className="grid gap-4">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
              <div className="text-sm text-white/60 leading-relaxed">
                <strong className="text-white block">Corporate Office:</strong>
                M-14, Greater Kailash II,<br />
                New Delhi, 110048, India
              </div>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-gold shrink-0" />
              <div className="text-sm text-white/60">
                <a href="tel:+919999999999" className="hover:text-gold transition-colors block">
                  +91 99999 99999
                </a>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-gold shrink-0" />
              <div className="text-sm text-white/60">
                <a href="mailto:info@rainbowentertainment.in" className="hover:text-gold transition-colors block">
                  info@rainbowentertainment.in
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <p className="text-white/40 text-xs">
          &copy; {currentYear} Rainbow Entertainment. All Rights Reserved. Designed for premium luxury.
        </p>
        <p className="text-white/40 text-xs flex items-center gap-2">
          <span>Delhi NCR's Leading Wedding Planner & Stage Show Organizers.</span>
        </p>
      </div>
    </footer>
  );
}
