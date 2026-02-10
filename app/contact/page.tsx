import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { ContactSection } from "@/components/landing/contact";
import { GoogleReviews } from "@/components/google-reviews";
import Image from "next/image";

export const metadata = {
    title: "Contact Us | LD Mobile Mechanic",
    description: "Get in touch with LD Mobile Mechanic in Mount Druitt. Call 0435 868 891 for 24/7 emergency service.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-rose-500/30">
            <Navbar />

            {/* Header */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=1920&auto=format&fit=crop"
                        alt="Mechanic Contact"
                        fill
                        className="object-cover object-center opacity-30"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent" />
                </div>
                <div className="container relative z-10 px-4 md:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400 mb-6">
                        Contact Us
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                        We are ready to help 24/7.
                    </p>
                </div>
            </section>

            <ContactSection />

            <GoogleReviews />

            <Footer />
        </main>
    );
}
