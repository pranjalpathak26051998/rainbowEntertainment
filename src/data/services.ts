export interface FAQItem {
  question: string;
  answer: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  categoryKey: string;
  categoryName: string;
  shortDescription: string;
  description: string;
  features: string[];
  gallery: string[]; // Unsplash Image URLs
  videos: string[]; // YouTube Video IDs (or premium placeholder videos)
  faqs: FAQItem[];
  metaTitle: string;
  metaDescription: string;
}

export interface ServiceCategory {
  key: string;
  name: string;
  description: string;
  image: string;
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    key: "weddings",
    name: "Wedding Entertainment",
    description: "Curated entertainment setups, choreographies, and live music to make your special day truly magical.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80"
  },
  {
    key: "corporate",
    name: "Corporate Events",
    description: "Flawless stage management, celebrity engagements, and premium AV setups for dealer meets, annual days, and launches.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80"
  },
  {
    key: "live-music",
    name: "Live Entertainment",
    description: "Enchanting live bands, Sufi ensembles, Qawwali nights, and soulful singers for high-end celebrations.",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=800&q=80"
  },
  {
    key: "dance",
    name: "Dance Performances",
    description: "Energetic and visually spectacular dance troupes, folk performers, and global fusion dance styles.",
    image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80"
  },
  {
    key: "religious",
    name: "Religious Events",
    description: "Devotional environments with beautifully designed setups for Mata Ki Chowki, Jagran, and Bhajan Sandhyas.",
    image: "https://images.unsplash.com/photo-1609137144813-2d2076045229?auto=format&fit=crop&w=800&q=80"
  },
  {
    key: "celebrity",
    name: "Celebrity Management",
    description: "Exclusive access and bookings of TV artists, Bollywood stars, sports personalities, and influencers.",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80"
  },
  {
    key: "production",
    name: "Stage & Production",
    description: "State-of-the-art concert sound systems, LED screens, luxury DJ setups, anchors, and lighting choreography.",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80"
  }
];

export const SERVICES: Service[] = [
  // --- A. WEDDINGS ---
  {
    id: "ladies-sangeet",
    slug: "ladies-sangeet",
    title: "Ladies Sangeet",
    categoryKey: "weddings",
    categoryName: "Wedding Entertainment",
    shortDescription: "Traditional sangeet celebrations with professional female singers, dhol players, and thematic decor.",
    description: "Bring the vibrant rhythms and playful banter of traditional Punjabi and North Indian Ladies Sangeet to life. Rainbow Entertainment provides customized song lists, professional dhol/dholki setups, anchoring, and custom choreographies that integrate the family's history and favorite tracks into an unforgettable musical night.",
    features: [
      "Professional female folk singers & choristers",
      "Traditional Dholki & Dhol setups",
      "Custom comedy scripts and anchor interactions",
      "Luxurious low-seating mattress arrangements (Baithak style)",
      "High-end sound design tailored for acoustic melodies"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80"
    ],
    videos: ["dQw4w9WgXcQ"],
    faqs: [
      {
        question: "Do you provide custom script writing for family members?",
        answer: "Yes, our expert writers script the entire event, incorporating funny stories and relationships inside the family to keep the entertainment personal and engaging."
      },
      {
        question: "How long before the event should we book the Ladies Sangeet services?",
        answer: "We recommend booking at least 1-2 months in advance, especially during the peak wedding season in Delhi NCR."
      }
    ],
    metaTitle: "Ladies Sangeet Organizer Delhi NCR | Wedding Sangeet Planners",
    metaDescription: "Host an authentic and lively Ladies Sangeet with Delhi NCR's top planners. Specializing in folk singers, traditional dholki, and interactive family scripting."
  },
  {
    id: "mehndi-night",
    slug: "mehndi-night",
    title: "Mehndi Night Entertainment",
    categoryKey: "weddings",
    categoryName: "Wedding Entertainment",
    shortDescription: "Lively acoustic setups, bangle counters, and folk performances to light up your Mehndi function.",
    description: "Celebrate the starting of your wedding festivities with our customized Mehndi night setups. We blend traditional beauty with modern entertainment, featuring acoustic bands, folk dancers, handpan players, bangle-making stalls, and interactive activities for your guests.",
    features: [
      "Award-winning mehndi artists from across Delhi/Rajasthan",
      "Soulful acoustic singers or retro-pop duos",
      "Thematic marigold and pastel fabrics decor setup",
      "Interactive guest engagement stalls (bangles, tarot, live sketching)",
      "Premium cocktail lounge music curation"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1605001011156-cbf0b0f67a51?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80"
    ],
    videos: ["dQw4w9WgXcQ"],
    faqs: [
      {
        question: "Can you provide specific thematic decors like Rajasthani or Moroccan?",
        answer: "Absolutely! We design customized Mehndi layouts including traditional colorful Rajasthani umbrellas, puppets, and seating, or modern bohemian/Moroccan glass structures."
      }
    ],
    metaTitle: "Mehndi Night Organizer & Entertainment Delhi NCR",
    metaDescription: "Premium Mehndi night organization in Delhi. Interactive stalls, professional artists, acoustic music, and vibrant thematic decor setups."
  },
  {
    id: "choreography",
    slug: "choreography",
    title: "Wedding Choreography",
    categoryKey: "weddings",
    categoryName: "Wedding Entertainment",
    shortDescription: "Customized dance choreographies for the bride, groom, and family, taught by celebrity choreographers.",
    description: "Turn your family into stage stars! Our team of professional wedding choreographers creates custom dance concepts that suit dancers of all skill levels, from toddlers to grandparents. We handle music editing, backup dancers, visual graphics for LED screens, and stage entry styling.",
    features: [
      "Step-by-step video tutorials and in-person rehearsals in Delhi NCR",
      "Custom audio tracks and sound edits included",
      "Professional background dancers and props",
      "Skit-based storytelling choreographies (Pre-wedding love stories)",
      "High-definition rehearsal schedules fit for busy executives"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=800&q=80"
    ],
    videos: ["dQw4w9WgXcQ"],
    faqs: [
      {
        question: "What if some family members are shy or cannot dance?",
        answer: "Our choreographers are trained in making simple, elegant, and highly coordinated moves that look complex on stage but are very easy to execute, ensuring everyone is comfortable and happy."
      }
    ],
    metaTitle: "Best Wedding Choreographer in Delhi NCR | Sangeet Dance Classes",
    metaDescription: "Professional wedding dance choreography in Delhi. Custom dance routines, celebrity choreographers, family mashups, and background dancers."
  },
  {
    id: "bridal-entry",
    slug: "bridal-entry",
    title: "Bridal Entry Shows",
    categoryKey: "weddings",
    categoryName: "Wedding Entertainment",
    shortDescription: "Cinematic, jaw-dropping bridal entries featuring LED structures, cold pyros, and live classical instruments.",
    description: "The bridal entry is the most anticipated moment of any wedding. We make it absolutely legendary. From grand flower-shower umbrellas and traditional LED doli entries to custom soundtracks, floating stages, dry ice smoke machines, and surrounding classical instrumentalists (violinists, harpists, flutists), we design a entrance fit for royalty.",
    features: [
      "Thematic LED and floral carriage entries",
      "Cold pyro-technics and dry ice cloud effects (heavy fog)",
      "Live performance by international violinists or sitar players during walk",
      "Synchronized lighting and background score production",
      "Custom entry scripts read out by elite voice artists"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1549417229-aa67d3263c09?auto=format&fit=crop&w=800&q=80"
    ],
    videos: ["dQw4w9WgXcQ"],
    faqs: [
      {
        question: "Are cold pyros safe for indoor venues?",
        answer: "Yes, we use certified premium cold-burn pyrotechnics that do not emit smoke or heat, making them completely safe for indoor banquets and outdoor gardens alike."
      }
    ],
    metaTitle: "Luxury Bridal Entry Shows Delhi NCR | Grand Entrance Ideas",
    metaDescription: "Create a stunning first impression with our custom bridal entry concepts. Live violinists, dry ice clouds, cold pyros, and floral carriages."
  },
  {
    id: "wedding-dj",
    slug: "wedding-dj",
    title: "Wedding DJ",
    categoryKey: "weddings",
    categoryName: "Wedding Entertainment",
    shortDescription: "High-energy beats by top Delhi NCR wedding DJs, complete with 3D LED setups and visualizers.",
    description: "Music makes the party, and our DJs are masters at keeping the dance floor packed until the early hours. Rainbow Entertainment brings elite wedding DJs who mix Bollywood, Punjabi, Retro, Commercial, and electronic beats, alongside professional visuals displayed on 3D LED screens, top-tier audio systems, and intelligent concert lighting.",
    features: [
      "Elite resident DJs with international event experience",
      "High-end JBL/L-Acoustics sound system installation",
      "Custom 3D LED DJ booths and live graphic visualizers",
      "Synchronized light shows with DMX controls",
      "Pre-planned wedding party music consultations"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80"
    ],
    videos: ["dQw4w9WgXcQ"],
    faqs: [
      {
        question: "Do you take live song requests from guests?",
        answer: "Yes! Our DJs read the crowd and take requests while maintaining a smooth musical flow that matches the couple's music choices."
      }
    ],
    metaTitle: "Premium Wedding DJ Setup Delhi NCR | Best Sound & DJ",
    metaDescription: "Hire top wedding DJs in Delhi NCR. Custom 3D LED setups, state-of-the-art sound systems, and high-energy music tailored for premium celebrations."
  },
  {
    id: "wedding-orchestra",
    slug: "wedding-orchestra",
    title: "Wedding Orchestra",
    categoryKey: "weddings",
    categoryName: "Wedding Entertainment",
    shortDescription: "Grand symphonic orchestras performing classic Bollywood love themes and international melodies.",
    description: "Drape your wedding reception or dinner in luxury with a grand symphonic orchestra. Our wedding orchestra consists of 15 to 45 professional musicians, including strings, woodwinds, brass, and traditional Indian instruments playing instrumental masterpieces and classical arrangements of popular love songs.",
    features: [
      "15-45 piece professional orchestra lineups available",
      "Classical covers of Bollywood classics and global charts",
      "Gorgeously designed stage matching your venue's color scheme",
      "Special guest appearances by acclaimed vocalists",
      "Stunning acoustic balancing for comfortable guest conversations"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=800&q=80"
    ],
    videos: ["dQw4w9WgXcQ"],
    faqs: [
      {
        question: "Can the orchestra play during the wedding pheras?",
        answer: "Yes, we can structure a smaller classical instrumental ensemble (Flute, Sitar, Tabla, Santoor) to provide peaceful, matching background music during the sacred pheras ceremony."
      }
    ],
    metaTitle: "Grand Wedding Orchestra Band Delhi NCR | Symphony Live Music",
    metaDescription: "Premium wedding orchestra band in Delhi NCR. Classical symphonic covers of love themes, professional live instrumentalists, and custom stage design."
  },

  // --- B. CORPORATE ---
  {
    id: "product-launch",
    slug: "product-launch",
    title: "Product Launches",
    categoryKey: "corporate",
    categoryName: "Corporate Events",
    shortDescription: "Impactful, high-tech product launches using 3D projection mapping and holographic reveals.",
    description: "Launch your product with maximum impact. We design corporate launches that combine stunning technical production with creative storytelling. Using LED tunnels, 3D projection mapping, holographic presentations, and custom-produced laser shows, we ensure your brand leaves an unforgettable mark in the industry.",
    features: [
      "Holographic and mechanical product reveal mechanisms",
      "Full-room 3D projection mapping and laser shows",
      "Interactive media walls and registration desks",
      "Elite anchors and tech spokespersons",
      "Integrated live-streaming setups for global audiences"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80"
    ],
    videos: ["dQw4w9WgXcQ"],
    faqs: [
      {
        question: "Do you handle the graphic and video content production for the launch?",
        answer: "Yes! We have an in-house team of 3D motion designers and video editors who create all visual screen content, timers, and intro videos."
      }
    ],
    metaTitle: "Product Launch Event Management Delhi NCR",
    metaDescription: "Premium product launch organizers in Delhi. Specializing in high-tech reveals, projection mapping, LED stages, and professional anchors."
  },
  {
    id: "dealer-meet",
    slug: "dealer-meet",
    title: "Dealer Meets & Conferences",
    categoryKey: "corporate",
    categoryName: "Corporate Events",
    shortDescription: "End-to-end management for dealer meets, including venue booking, production, and artist management.",
    description: "Motivate and celebrate your network of business partners. We coordinate national and international dealer meets, handling venue bookings, premium stage production, custom corporate awards, live entertainment, and flawless coordination, ensuring a highly professional event that boosts dealer relationships.",
    features: [
      "Multi-lingual registration and hospitality management",
      "Custom trophy designs and professional award ceremonies",
      "Motivational keynote speaker bookings",
      "Lively evening entertainment (comedians, dance troupes, live singers)",
      "High-end corporate gift sourcing and branding"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80"
    ],
    videos: ["dQw4w9WgXcQ"],
    faqs: [],
    metaTitle: "Dealer Meet Event Organizers in Delhi NCR",
    metaDescription: "Professional dealer meets and conferences organizers in Delhi. End-to-end planning, premium sound, stage branding, and artist bookings."
  },
  {
    id: "annual-day",
    slug: "annual-day",
    title: "Corporate Annual Days",
    categoryKey: "corporate",
    categoryName: "Corporate Events",
    shortDescription: "Spectacular annual day celebrations featuring employee performances, custom themes, and star acts.",
    description: "Annual days are a celebration of your company's achievements. We bring a touch of luxury and energy to these events. From custom theme curation and employee talent grooming workshops to bringing in popular Bollywood performers, high-end sound and lights, and smooth scheduling, we manage it all.",
    features: [
      "Theme conceptualization and logo/branding design",
      "Choreographers for employee performances",
      "High-impact LED stage designs with live camera feeds",
      "Bollywood/Indie star bookings and hospitality",
      "Strict safety protocols and emergency management"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80"
    ],
    videos: ["dQw4w9WgXcQ"],
    faqs: [],
    metaTitle: "Corporate Annual Day Organizers Delhi NCR",
    metaDescription: "Design a memorable Annual Day celebration for your company in Delhi NCR. Custom themes, artist bookings, and full stage production."
  },

  // --- C. LIVE ENTERTAINMENT ---
  {
    id: "sufi-band",
    slug: "sufi-band",
    title: "Sufi Bands",
    categoryKey: "live-music",
    categoryName: "Live Entertainment",
    shortDescription: "Soulful Sufi nights with critically acclaimed bands performing contemporary and traditional melodies.",
    description: "Indulge in a evening of pure emotion and spiritual melody. Our Sufi bands combine traditional poetry with modern musical structures, rendering classics by Nusrat Fateh Ali Khan, Bulleh Shah, and Kabir, alongside modern Sufi Bollywood numbers. Perfectly suited for wedding receptions, cocktail dinners, and exclusive corporate get-togethers.",
    features: [
      "Award-winning Sufi vocalists and instrumentalists",
      "Rich fusion arrangements (Acoustic guitars, Keyboards, Flute, Tabla, Dholak)",
      "Vibrant Persian-carpet staging with warm, golden candlelight lighting",
      "Audience interaction and lyrical storytelling",
      "Impeccable acoustic setup for comfortable sound levels"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80"
    ],
    videos: ["dQw4w9WgXcQ"],
    faqs: [
      {
        question: "What is the typical duration of a Sufi Band performance?",
        answer: "A standard performance lasts for 2 to 3 hours, divided into two sets if required."
      }
    ],
    metaTitle: "Best Sufi Band Booking Delhi NCR | Sufi Nights Live",
    metaDescription: "Book the finest Sufi bands in Delhi NCR for your weddings and corporate events. Spiritual, high-energy fusion Sufi music with premium sound production."
  },
  {
    id: "orchestra-band",
    slug: "orchestra-band",
    title: "Orchestra Band",
    categoryKey: "live-music",
    categoryName: "Live Entertainment",
    shortDescription: "Versatile live orchestras covering classical, Bollywood retro, and modern chartbusters.",
    description: "Whether it is retro 70s Bollywood hits, upbeat pop anthems, or classical symphonies, our professional live Orchestra Band brings a massive sound and incredible stage energy. We configure the band size according to your requirements, complete with vocalists, brass section, key-players, and percussionists.",
    features: [
      "8-piece to 30-piece orchestra setups",
      "Dynamic song list spanning across multiple genres and languages",
      "State-of-the-art concert grade PA system",
      "Interactive stage performers and vocal duos",
      "Customized outfits to match the event's theme"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=800&q=80"
    ],
    videos: ["dQw4w9WgXcQ"],
    faqs: [],
    metaTitle: "Orchestra Band Booking in Delhi NCR | Live Music Event Planners",
    metaDescription: "Hire professional live orchestra bands in Delhi. High-energy performances covering classic retro to modern hits for weddings, concerts, and festivals."
  },

  // --- D. DANCE PERFORMANCES ---
  {
    id: "punjabi-bhangra",
    slug: "punjabi-bhangra-group",
    title: "Punjabi Bhangra Groups",
    categoryKey: "dance",
    categoryName: "Dance Performances",
    shortDescription: "High-voltage Bhangra & Gidda performances with live dhols, direct from Punjab's finest troupes.",
    description: "Inject raw energy and joy into your event with our professional Punjabi Bhangra and Gidda troupes. Our dancers bring colorful traditional costumes, massive synchronizations, live dhol beats, and acrobatic jumps that will have your guests standing on chairs and dancing along.",
    features: [
      "100% authentic dancers from Punjab's heritage clubs",
      "High-energy live Dhol players and folk singers",
      "Traditional vibrant costumes (Kurtas, Chadras, Pagris, and Phulkaris)",
      "Interactive Bhangra workshops during the event for guests",
      "Custom choreographies featuring traditional farming tools (Saaps and Chimtas)"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80"
    ],
    videos: ["dQw4w9WgXcQ"],
    faqs: [
      {
        question: "Can the Bhangra troupe welcome guests at the entry?",
        answer: "Yes, a live dhol welcome with dancers is one of our most popular entries for weddings and corporate galas."
      }
    ],
    metaTitle: "Best Punjabi Bhangra Group in Delhi NCR | Live Dhol Troupes",
    metaDescription: "Hire top Punjabi Bhangra groups in Delhi NCR. Colorful costumes, energetic performances, and authentic live dhol beats for weddings and festivals."
  },

  // --- E. RELIGIOUS EVENTS ---
  {
    id: "mata-ki-chowki",
    slug: "mata-ki-chowki",
    title: "Mata Ki Chowki",
    categoryKey: "religious",
    categoryName: "Religious Events",
    shortDescription: "Devotional bhajan singers, gorgeous floral darbars, and divine setups in Delhi NCR.",
    description: "Organize a spiritually fulfilling Mata Ki Chowki with Rainbow Entertainment. We handle the entire arrangement, including the installation of a grand Darbar (temple stage decoration), premium quality sound, bookings of elite bhajan singers, dholak players, organists, and distribution of prasad bags.",
    features: [
      "Renowned devotional bhajan singers and chorus vocalists",
      "Extravagant Darbar decorations with fresh flowers and LED lights",
      "Acoustically balanced sound so the mantras are crystal clear",
      "Pooja samagri list management and setup",
      "Professional stage layout with carpets and low-seating arrangements"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1609137144813-2d2076045229?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1545128485-c400e7702796?auto=format&fit=crop&w=800&q=80"
    ],
    videos: ["dQw4w9WgXcQ"],
    faqs: [
      {
        question: "How long does a Mata Ki Chowki typically last?",
        answer: "A standard Chowki lasts for 3 to 4 hours, usually starting in the evening and ending with Aarti and Prasad distribution."
      }
    ],
    metaTitle: "Mata Ki Chowki Organizers Delhi NCR | Bhajan Sandhya Planners",
    metaDescription: "Arrange a beautiful Mata Ki Chowki in Delhi. Devotional singers, exquisite floral Darbar decorations, and seamless event management."
  },

  // --- F. CELEBRITY MANAGEMENT ---
  {
    id: "celebrity-management",
    slug: "celebrity-management-delhi",
    title: "Celebrity Bookings & Management",
    categoryKey: "celebrity",
    categoryName: "Celebrity Management",
    shortDescription: "Direct bookings of Bollywood stars, TV artists, singers, and sports icons for your events.",
    description: "Add star power to your event. Rainbow Entertainment offers direct access to booking Bollywood actors, TV celebrities, famous stand-up comedians, top-tier DJs, playback singers, and sports personalities. We handle all contracts, rider requirements, flight logistics, VIP security, and green room setups.",
    features: [
      "Direct relationships with celebrity talent agencies in India",
      "Technical rider (sound, lighting, stage) validation according to artist contract",
      "End-to-end travel, premium hotels, and VVIP security transport",
      "Press conference and media interaction management",
      "Professional bouncers and crowd management deployment"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=800&q=80"
    ],
    videos: ["dQw4w9WgXcQ"],
    faqs: [
      {
        question: "Do you handle artist accommodation and flight tickets?",
        answer: "Yes, we handle all logistics, hospitality, bouncers, and technical requirements as dictated by the artist's riders."
      }
    ],
    metaTitle: "Celebrity Management Agency Delhi NCR | Book TV & Bollywood Stars",
    metaDescription: "Book top-tier Bollywood stars, playback singers, TV artists, and sports celebrities for weddings and corporate launches. Direct agency pricing and full hospitality management."
  },

  // --- G. STAGE PRODUCTION ---
  {
    id: "dj-setup",
    slug: "dj-setup-delhi",
    title: "Premium Sound & DJ Setups",
    categoryKey: "production",
    categoryName: "Stage & Production",
    shortDescription: "Concert-grade sound systems, trussing, 3D LED screens, and custom light engineering.",
    description: "A premium event demands flawless technical execution. We provide high-end sound rentals (JBL, L-Acoustics), professional trussing, custom-designed LED stages, and intelligent automated lighting packages controlled by veteran light designers. Perfect for festivals, fashion shows, corporate meets, and mega weddings.",
    features: [
      "JBL Vertec or L-Acoustics line-array sound systems",
      "Custom size P3/P2 LED video walls and stage arches",
      "Intelligent Sharpy beam lights, LED washes, and haze machines",
      "DTS-certified engineers and light program designers",
      "Dual backup silent generator setups for absolute safety"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80"
    ],
    videos: ["dQw4w9WgXcQ"],
    faqs: [
      {
        question: "Do you provide backups for power failure?",
        answer: "Yes, all our production packages include a primary and secondary backup generator system with automatic line switchers to ensure zero event interruptions."
      }
    ],
    metaTitle: "Sound & DJ Setup Rental Delhi NCR | Event Lights & LED",
    metaDescription: "Rent professional concert-grade sound, 3D LED video walls, smart lighting, and staging setups in Delhi NCR. Technical support included."
  }
];

export function getServicesByCategory(categoryKey: string): Service[] {
  return SERVICES.filter(service => service.categoryKey === categoryKey);
}

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find(service => service.slug === slug);
}
