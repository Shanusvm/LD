import type { Metadata } from "next";
import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { BrandMarquee } from "@/components/landing/brand-marquee";
import { Services } from "@/components/landing/services";
import { BookingSection } from "@/components/landing/booking-section";
import { ContactSection } from "@/components/landing/contact";
import { Footer } from "@/components/landing/footer";

export const metadata: Metadata = {
  title: "LD Mechanic | Luxury Auto Service & Repair",
  description: "Premier mobile mechanic and workshop in Mount Druitt. Specializing in diagnostics, engine repair, and maintenance for all makes and models. 24/7 Breakdown assist.",
  keywords: ["Auto Repair Mount Druitt", "Mobile Mechanic Sydney", "Car Diagnostics", "Pink Slips", "LD Mechanic"],
  openGraph: {
    title: "LD Mechanic | Luxury Auto Service",
    description: "Experience the next generation of auto service. We keep your vehicle performing at its peak. Located in Mount Druitt.",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-foreground selection:bg-rose-500/30">
      <Navbar />
      <Hero />
      <BrandMarquee />
      <Services />
      <BookingSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
