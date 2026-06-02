"use client";

import { useState } from "react";
import Header from "@/components/custom/Header";
import Footer from "@/components/custom/Footer";
import FloatingCTA from "@/components/custom/FloatingCTA";

export default function WebsiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header onQuoteClick={() => setIsQuoteOpen(true)} />
      <main className="flex-grow">{children}</main>
      <Footer />
      <FloatingCTA
        forceOpenModal={isQuoteOpen}
        onModalClose={() => setIsQuoteOpen(false)}
      />
    </div>
  );
}
