import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { GoogleReviews } from "@/components/google-reviews";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const metadata = {
    title: "Reviews | LD Mobile Mechanic",
    description: "See what our customers say about LD Mobile Mechanic in Mount Druitt.",
};

export default function ReviewsPage() {
    return (
        <main className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-rose-500/30">
            <Navbar />

            {/* Header */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1920&auto=format&fit=crop"
                        alt="Happy Customer Car"
                        fill
                        className="object-cover object-center opacity-20"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent" />
                </div>
                <div className="container relative z-10 px-4 md:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400 mb-6">
                        Customer Reviews
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                        See why Mount Druitt trusts us with their vehicles.
                    </p>
                </div>
            </section>

            <GoogleReviews />

            <div className="container px-4 text-center py-20 border-t border-white/5">
                <h2 className="text-3xl font-bold text-white mb-6">Have you used our service?</h2>
                <Button size="lg" className="bg-rose-600 hover:bg-rose-700 rounded-full" asChild>
                    <a href="https://business.google.com/n/13971716164542087389/profile" target="_blank" rel="noopener noreferrer">
                        Leave a Google Review
                    </a>
                </Button>
            </div>

            <Footer />
        </main>
    );
}
