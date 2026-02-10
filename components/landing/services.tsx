"use client";

import { motion, Variants } from "framer-motion";
import { Wrench, Gauge, Zap, Search, ShieldCheck, Battery, Bike } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ServiceItem {
    title: string;
    description: string;
    icon: LucideIcon;
    color: string;
}

const services: ServiceItem[] = [
    {
        title: "Emergency Breakdown",
        description: "24/7 Rapid response for battery jumps, flat tires, and engine failures. We come to you anywhere in Mount Druitt.",
        icon: Wrench,
        color: "text-rose-500",
    },
    {
        title: "Diagnostics & Repairs",
        description: "Advanced computer scanning to identify check engine lights and complex electrical issues on the spot.",
        icon: Search,
        color: "text-blue-500",
    },
    {
        title: "Performance Upgrades",
        description: "Unlock your vehicle's potential with specialized tuning, exhaust modifications, and turbo enhancements.",
        icon: Gauge,
        color: "text-amber-500",
    },
    {
        title: "Pink Slips & Safety",
        description: "Authorized e-Safety inspections (Pink Slips) to get your vehicle registered and road-legal quickly.",
        icon: ShieldCheck,
        color: "text-green-500",
    },
    {
        title: "Motorcycle Repairs",
        description: "Specialized service for bikes of all makes. From chain adjustments to full engine rebuilds.",
        icon: Bike,
        color: "text-purple-500",
    },
    {
        title: "Battery & Tires",
        description: "Mobile replacement for dead batteries and worn tires. We carry top brands to get you moving again.",
        icon: Battery,
        color: "text-teal-500",
    },
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 50 }
    },
};

export function Services() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section id="services" className="py-24 bg-zinc-950 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                {/* Optional: Add the service-bg.png here if desired for subtle texture */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-900/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl" />
            </div>

            <div className="container relative z-10 px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Our <span className="text-gradient">Services</span>
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
                        Professional automotive care delivered to your doorstep. From urgent breakdowns to routine logbook servicing.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="relative group h-full"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div
                                className={cn(
                                    "h-full p-8 rounded-2xl bg-zinc-900/50 border border-white/5 backdrop-blur-sm transition-all duration-300",
                                    "group-hover:bg-zinc-900/80 group-hover:border-rose-500/30 group-hover:shadow-[0_0_30px_rgba(225,29,72,0.15)]",
                                    "flex flex-col items-start"
                                )}
                            >
                                <div className={cn(
                                    "p-3 rounded-xl bg-zinc-950 border border-white/5 mb-6 transition-transform duration-300 group-hover:scale-110",
                                    service.color
                                )}>
                                    <service.icon className="w-8 h-8" />
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-rose-500 transition-colors">
                                    {service.title}
                                </h3>

                                <p className="text-zinc-400 leading-relaxed">
                                    {service.description}
                                </p>

                                {/* Hover line effect */}
                                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-rose-500 to-orange-500 transition-all duration-300 group-hover:w-full rounded-b-2xl" />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
