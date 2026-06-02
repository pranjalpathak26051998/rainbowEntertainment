"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone, MessageSquare } from "lucide-react";
import { SERVICE_CATEGORIES } from "@/data/services";

interface HeaderProps {
  onQuoteClick: () => void;
}

export default function Header({ onQuoteClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when pathname changes
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-charcoal/95 backdrop-blur-md border-b border-white/5 py-4 shadow-lg"
          : "bg-gradient-to-b from-black/80 to-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="text-xl md:text-2xl font-serif font-bold tracking-wider text-white">
            RAINBOW<span className="gold-gradient block text-xs font-sans tracking-[0.3em] font-normal">ENTERTAINMENT</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            
            if (link.hasDropdown) {
              return (
                <div
                  key={link.name}
                  className="relative group py-2"
                  onMouseEnter={() => setActiveDropdown(true)}
                  onMouseLeave={() => setActiveDropdown(false)}
                >
                  <button
                    className={`flex items-center gap-1 font-sans text-sm tracking-wide font-medium transition-colors hover:text-gold ${
                      isActive ? "text-gold" : "text-white/80"
                    }`}
                  >
                    {link.name}
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  </button>
                  
                  {/* Dropdown Menu */}
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 w-64 bg-charcoal-light border border-white/10 rounded-xl shadow-2xl p-4 transition-all duration-300 ${
                      activeDropdown
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
                  >
                    <div className="grid gap-2">
                      <Link
                        href="/services"
                        className="text-xs text-gold hover:text-white uppercase tracking-wider font-bold border-b border-white/5 pb-2 mb-1"
                      >
                        All Service Categories
                      </Link>
                      {SERVICE_CATEGORIES.map((category) => (
                        <Link
                          key={category.key}
                          href={`/services#${category.key}`}
                          className="text-white/70 hover:text-gold text-sm font-medium hover:translate-x-1 transition-all py-1.5 rounded"
                        >
                          {category.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-sans text-sm tracking-wide font-medium transition-colors hover:text-gold ${
                  isActive ? "text-gold" : "text-white/80"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Call to Action Button */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+919999999999"
            className="flex items-center gap-2 text-white/80 hover:text-gold transition-colors text-sm font-medium"
          >
            <Phone className="w-4 h-4 text-gold" />
            <span>+91 99999 99999</span>
          </a>
          <button
            onClick={onQuoteClick}
            className="gold-bg-gradient hover:opacity-90 text-charcoal font-sans text-xs tracking-widest font-bold uppercase py-3 px-6 rounded-full transition-all hover:scale-105 duration-300 hover:shadow-[0_0_15px_rgba(212,175,55,0.4)]"
          >
            Get Free Quote
          </button>
        </div>

        {/* Mobile Menu Buttons */}
        <div className="flex lg:hidden items-center gap-4">
          <button
            onClick={onQuoteClick}
            className="gold-bg-gradient text-charcoal font-sans text-[10px] tracking-widest font-bold uppercase py-2 px-4 rounded-full transition-all"
          >
            Quote
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-gold p-1"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-[73px] left-0 w-full h-[calc(100vh-73px)] bg-charcoal border-t border-white/5 z-40 p-6 flex flex-col justify-between transition-transform duration-500 lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="overflow-y-auto pr-2">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

              if (link.hasDropdown) {
                return (
                  <div key={link.name} className="flex flex-col gap-3">
                    <button
                      onClick={() => setActiveDropdown(!activeDropdown)}
                      className={`flex justify-between items-center text-left text-lg font-medium transition-colors ${
                        isActive ? "text-gold" : "text-white"
                      }`}
                    >
                      {link.name}
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 ${
                          activeDropdown ? "rotate-180 text-gold" : ""
                        }`}
                      />
                    </button>
                    
                    <div
                      className={`grid gap-2 border-l border-white/10 pl-4 overflow-hidden transition-all duration-300 ${
                        activeDropdown ? "max-h-[350px] opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <Link
                        href="/services"
                        className="text-xs text-gold uppercase tracking-wider py-1 font-bold"
                      >
                        All Services Page
                      </Link>
                      {SERVICE_CATEGORIES.map((category) => (
                        <Link
                          key={category.key}
                          href={`/services#${category.key}`}
                          className="text-white/70 hover:text-gold text-sm py-1.5 transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {category.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-lg font-medium transition-colors ${
                    isActive ? "text-gold" : "text-white"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Mobile Contact Info */}
        <div className="border-t border-white/5 pt-6 mt-6 flex flex-col gap-4">
          <a
            href="tel:+919999999999"
            className="flex items-center gap-3 text-white/80 hover:text-gold transition-colors py-2"
          >
            <Phone className="w-5 h-5 text-gold" />
            <span className="text-base font-medium">+91 99999 99999</span>
          </a>
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-sans text-xs tracking-widest font-bold uppercase py-4 rounded-xl transition-all"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            WhatsApp Now
          </a>
        </div>
      </div>
    </header>
  );
}
