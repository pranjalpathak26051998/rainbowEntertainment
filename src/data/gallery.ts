export interface GalleryItem {
  id: string;
  title: string;
  category: "weddings" | "corporate" | "concerts" | "stage-shows" | "religious-events";
  imageUrl: string;
  type: "photo" | "video";
  videoUrl?: string; // YouTube Embed ID
  location: string;
  year: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  // --- Weddings ---
  {
    id: "gal-1",
    title: "Royal Grand Floral Varmala Stage",
    category: "weddings",
    imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    type: "photo",
    location: "The Leela Palace, New Delhi",
    year: "2025"
  },
  {
    id: "gal-2",
    title: "Cinematic Bridal Entry with Cold Pyros",
    category: "weddings",
    imageUrl: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
    type: "photo",
    location: "JW Marriott, Aerocity",
    year: "2025"
  },
  {
    id: "gal-3",
    title: "Sangeet Night Family Dance Performance",
    category: "weddings",
    imageUrl: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80",
    type: "video",
    videoUrl: "dQw4w9WgXcQ",
    location: "Taj Palace, New Delhi",
    year: "2026"
  },

  // --- Corporate ---
  {
    id: "gal-4",
    title: "Auto Expo Brand Car Launch",
    category: "corporate",
    imageUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
    type: "photo",
    location: "India Expo Mart, Greater Noida",
    year: "2025"
  },
  {
    id: "gal-5",
    title: "Annual Awards Gala LED Stage Design",
    category: "corporate",
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
    type: "photo",
    location: "Hyatt Regency, Gurugram",
    year: "2026"
  },
  {
    id: "gal-6",
    title: "Samsung Dealer Meet Keynote Highlight",
    category: "corporate",
    imageUrl: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80",
    type: "video",
    videoUrl: "dQw4w9WgXcQ",
    location: "Radisson Blu, Dwarka",
    year: "2025"
  },

  // --- Concerts ---
  {
    id: "gal-7",
    title: "Sufi Fusion Live Concert Night",
    category: "concerts",
    imageUrl: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=800&q=80",
    type: "photo",
    location: "Jawaharlal Nehru Stadium, Delhi",
    year: "2025"
  },
  {
    id: "gal-8",
    title: "Bollywood Playback Singer Live Performance",
    category: "concerts",
    imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
    type: "video",
    videoUrl: "dQw4w9WgXcQ",
    location: "Kingdom of Dreams, Gurugram",
    year: "2026"
  },

  // --- Stage Shows ---
  {
    id: "gal-9",
    title: "Premium Concert Light & Sound Trussing",
    category: "stage-shows",
    imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80",
    type: "photo",
    location: "Gymkhana Club, Sector 15, Faridabad",
    year: "2025"
  },
  {
    id: "gal-10",
    title: "International LED Tron Dance Act",
    category: "stage-shows",
    imageUrl: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=800&q=80",
    type: "photo",
    location: "ITC Grand Bharat, Gurugram",
    year: "2026"
  },

  // --- Religious Events ---
  {
    id: "gal-11",
    title: "Grand Flower Darbar - Mata Ka Jagran",
    category: "religious-events",
    imageUrl: "https://images.unsplash.com/photo-1609137144813-2d2076045229?auto=format&fit=crop&w=800&q=80",
    type: "photo",
    location: "Punjabi Bagh Club, Delhi",
    year: "2025"
  },
  {
    id: "gal-12",
    title: "Mata Ki Chowki Devotional Gathering",
    category: "religious-events",
    imageUrl: "https://images.unsplash.com/photo-1545128485-c400e7702796?auto=format&fit=crop&w=800&q=80",
    type: "video",
    videoUrl: "dQw4w9WgXcQ",
    location: "Siri Fort Auditorium, New Delhi",
    year: "2025"
  }
];
