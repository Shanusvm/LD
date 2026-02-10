import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { GoogleReviews } from "@/components/google-reviews";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Wrench, Gauge, Zap, Snowflake, Activity, Disc, ArrowRight } from "lucide-react";

export const metadata = {
    title: "Our Services | LD Mobile Mechanic",
    description: "Comprehensive auto services including engine diagnostics, brake repairs, transmission servicing, and more in Mount Druitt.",
};

const servicesList = [
    {
        title: "Engine Diagnostics & Repairs",
        icon: Activity,
        description: "Advanced computerized diagnostics to pinpoint issues quickly. We handle check engine lights, misfiring, overheating, and timing belt replacements.",
        features: ["Computerized diagnostics", "Fuel system inspection", "Timing belt/chains", "Overheating solutions"]
    },
    {
        title: "Brake System Maintenance",
        icon: Disc,
        description: "Your safety is our priority. Comprehensive brake inspections, pad and rotor replacements, and ABS diagnostics to ensure stopping power.",
        features: ["Pad & rotor replacement", "Brake fluid flush", "ABS diagnostics", "Caliper servicing"]
    },
    {
        title: "Transmission Servicing",
        icon: Gauge,
        description: "Smooth gear shifting extends vehicle life. We offer fluid changes, filter replacements, and clutch inspections for both manual and automatic transmissions.",
        features: ["Fluid change & filter", "Clutch inspection", "Torque converter service", "Leak detection"]
    },
    {
        title: "Electrical System",
        icon: Zap,
        description: "Modern cars rely on complex electronics. We troubleshoot batteries, alternators, wiring, ECUs, and lighting systems.",
        features: ["Battery replacement", "Alternator repairs", "Wiring troubleshooting", "ECU diagnostics"]
    },
    {
        title: "Suspension & Steering",
        icon: Wrench,
        description: "Ensure a smooth ride and better handling. We fix shock absorbers, wheel alignment, bushings, and control arms.",
        features: ["Shock absorbers", "Wheel alignment", "Bushing repairs", "Steering inspection"]
    },
    {
        title: "Air Conditioning",
        icon: Snowflake,
        description: "Stay cool with our expert AC services. From gas refills and leak detection to compressor repairs and cabin air filters.",
        features: ["Gas refill", "Leak detection", "Compressor repair", "Cabin filter replacement"]
    }
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-rose-500/30">
            <Navbar />

            {/* Header */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=1920&auto=format&fit=crop"
                        alt="Car Engine Detail"
                        fill
                        className="object-cover object-center opacity-30"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent" />
                </div>
                <div className="container relative z-10 px-4 md:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400 mb-6">
                        Our Premium Services
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                        From routine maintenance to major overhauls, we bring the workshop to you or welcome you to ours.
                    </p>
                </div>
            </section>

            {/* Detailed Grid */}
            <section className="py-24 border-t border-white/5">
                <div className="container px-4 md:px-8">
                    <div className="grid md:grid-cols-2 gap-12">
                        {servicesList.map((service, idx) => (
                            <div key={idx} className="group relative bg-zinc-900/40 border border-white/5 rounded-2xl p-8 hover:bg-zinc-900/60 transition-colors">
                                <div className="absolute top-8 right-8 text-zinc-800 group-hover:text-rose-500/20 transition-colors">
                                    <service.icon className="w-24 h-24 stroke-1" />
                                </div>

                                <div className="relative z-10">
                                    <div className="w-12 h-12 rounded-lg bg-rose-500/10 flex items-center justify-center text-rose-500 mb-6">
                                        <service.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                                    <p className="text-zinc-400 mb-6 leading-relaxed bg-zinc-950/50 p-4 rounded-lg border border-white/5">
                                        {service.description}
                                    </p>
                                    <ul className="grid grid-cols-2 gap-2">
                                        {service.features.map(feature => (
                                            <li key={feature} className="flex items-center text-sm text-zinc-500">
                                                <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mr-2" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 text-center">
                        <h3 className="text-2xl font-bold text-white mb-6">Need something else?</h3>
                        <Button size="lg" className="rounded-full bg-rose-600 hover:bg-rose-700" asChild>
                            <Link href="/#contact">Contact Us for a Quote <ArrowRight className="ml-2 w-4 h-4" /></Link>
                        </Button>
                    </div>
                </div>
            </section>

            <GoogleReviews />

            <Footer />
        </main>
    );
}
