export interface Testimonial {
  id: string;
  clientName: string;
  designation: string;
  reviewText: string;
  avatar: string;
  videoUrl?: string; // YouTube Embed ID for video review
  eventType: "wedding" | "corporate" | "concert" | "religious" | "celebrity";
}

export interface BrandLogo {
  name: string;
  logoUrl: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    clientName: "Meera & Rohan Mehta",
    designation: "Bride & Groom (Luxury Wedding)",
    reviewText: "Rainbow Entertainment made our wedding at The Leela, Gurugram, absolutely magical! The bridal entry with the live violinist and cold pyros made me feel like royalty. The family choreography was flawless, and the guest engagement stalls were a massive hit. Best wedding entertainment planners in Delhi NCR!",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
    videoUrl: "dQw4w9WgXcQ",
    eventType: "wedding"
  },
  {
    id: "test-2",
    clientName: "Arvind Singhal",
    designation: "VP HR, Samsung India",
    reviewText: "We hired Rainbow Entertainment for our Annual Corporate Meet with over 800 employees. The stage production, the sound setup, and the TV Artist bookings were managed perfectly. The technical support was exceptional—their dual generator backup saved the day during a local voltage drop. Outstanding work!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    videoUrl: "dQw4w9WgXcQ",
    eventType: "corporate"
  },
  {
    id: "test-3",
    clientName: "Aditi Rao",
    designation: "Founder, Zenith Media",
    reviewText: "The Sufi band they booked for our client cocktail dinner was incredible. The staging with warm candlelights and low carpet seats set a beautiful, luxury atmosphere. Our clients could not stop praising the performance. Five stars for booking and production execution!",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    eventType: "concert"
  },
  {
    id: "test-4",
    clientName: "Kapil Dev Sharma",
    designation: "Organizer, Mata Ki Chowki",
    reviewText: "For our family's Mata Ki Chowki, Rainbow Entertainment created an incredibly beautiful floral Darbar. The bhajan singers they booked created a divine environment. The sound balancing was soft and respectful for our elders. Deeply grateful for their services.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    eventType: "religious"
  }
];

export const BRAND_LOGOS: BrandLogo[] = [
  {
    name: "Samsung India",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg"
  },
  {
    name: "Coca-Cola",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg"
  },
  {
    name: "Google India",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
  },
  {
    name: "DLF India",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/90/DLF_logo.svg"
  },
  {
    name: "Mercedes-Benz India",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Benz_logo.svg"
  },
  {
    name: "Pepsi India",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Pepsi_logo_2014.svg"
  }
];
