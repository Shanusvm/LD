import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { GoogleReviews } from "@/components/google-reviews";
import Image from "next/image";
import { MapPin, Phone, Mail, Award, Users, Warehouse } from "lucide-react";

export const metadata = {
    title: "About Us | LD Mobile Mechanic",
    description: "Learn about LD Mobile Mechanic, your trusted partner for premium auto repairs and roadside assistance in Mount Druitt.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-rose-500/30">
            <Navbar />

            {/* Header */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=1920&auto=format&fit=crop"
                        alt="Mechanic Workshop"
                        fill
                        className="object-cover object-center opacity-30"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent" />
                </div>
                <div className="container relative z-10 px-4 md:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400 mb-6">
                        About LD Mechanic
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                        Combining expert craftsmanship with transparency to keep you moving safely.
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-16 md:py-24 border-t border-white/5">
                <div className="container px-4 md:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-500 text-sm font-medium">
                                <Award className="w-4 h-4" />
                                <span>Our Mission</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white">
                                Trusted Partner for Riders & Drivers
                            </h2>
                            <p className="text-zinc-400 leading-relaxed text-lg">
                                At LD Mobile Mechanic, we aim to deliver reliable, high-quality, and efficient mobile mechanic services, ensuring customer satisfaction through convenient, on-the-spot repairs and maintenance.
                            </p>
                            <p className="text-zinc-400 leading-relaxed text-lg">
                                We strive to become the trusted partner for our community by combining expert craftsmanship, complete transparency, and exceptional service, fostering sustainable growth within Mount Druitt and beyond.
                            </p>
                        </div>
                        <div className="relative h-[400px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=800&auto=format&fit=crop"
                                alt="Mechanic working on engine"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Location / Stats */}
            <section className="py-16 bg-zinc-900/50">
                <div className="container px-4 md:px-8">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div className="p-6 rounded-2xl bg-zinc-950 border border-white/5">
                            <div className="w-12 h-12 mx-auto rounded-full bg-rose-500/10 flex items-center justify-center text-rose-500 mb-4">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">Our Workshop</h3>
                            <p className="text-zinc-400">Unit 2/9 Stout Rd<br />Mount Druitt NSW 2770</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-zinc-950 border border-white/5">
                            <div className="w-12 h-12 mx-auto rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 mb-4">
                                <Phone className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">Contact</h3>
                            <p className="text-zinc-400">Mobile: 0435 868 891<br />Office: 0422 249 223</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-zinc-950 border border-white/5">
                            <div className="w-12 h-12 mx-auto rounded-full bg-green-500/10 flex items-center justify-center text-green-500 mb-4">
                                <Warehouse className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">Services</h3>
                            <p className="text-zinc-400">Mobile & Workshop<br />7 Days / Week</p>
                        </div>
                    </div>
                </div>
            </section>

            <GoogleReviews />

            <Footer />
        </main>
    );
}
