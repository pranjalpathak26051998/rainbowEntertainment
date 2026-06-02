import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Rainbow Entertainment | Premium Event Management & Live Shows Delhi NCR",
    template: "%s | Rainbow Entertainment"
  },
  description: "Delhi NCR's trusted partner for luxury weddings, corporate events, celebrity management, live orchestra bands, and stage production. Over 20+ years of creating extraordinary experiences.",
  metadataBase: new URL("https://rainbowentertainment.in"), // Default base domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Rainbow Entertainment | Premium Event Management Delhi NCR",
    description: "Delhi NCR's trusted partner for luxury weddings, corporate events, celebrity management, and stage productions. Experience of 20+ years.",
    url: "https://rainbowentertainment.in",
    siteName: "Rainbow Entertainment",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full scroll-smooth antialiased`}
    >
      <body className="font-sans bg-white text-charcoal min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
