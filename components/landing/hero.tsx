"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Clock, ShieldCheck, MapPin } from "lucide-react";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 animate-slow-zoom"
                    style={{ backgroundImage: "url('/hero-bg.png')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-950/70 to-zinc-950/30" />
            </div>

            <div className="container relative z-10 px-4 md:px-8 mt-20">
                <div className="max-w-4xl"> {/* Limit text width only, let container span full */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-500 text-sm font-medium mb-6 animate-pulse">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
                            </span>
                            24/7 Emergency Services Available
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-200 to-zinc-400 mb-6 leading-tight">
                            Driven to Keep <br />
                            <span className="text-white">You Moving</span>
                        </h1>

                        <p className="text-xl text-zinc-300 mb-8 leading-relaxed max-w-2xl">
                            Premium mobile mechanic available 24/7 in Mount Druitt and surrounding areas.
                            We bring the workshop to you with expert diagnostics and repairs.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <Button size="lg" className="rounded-full text-lg h-14 px-8 bg-rose-600 hover:bg-rose-700 shadow-[0_0_30px_rgba(225,29,72,0.4)] hover:shadow-[0_0_50px_rgba(225,29,72,0.6)] transition-all group" asChild>
                                <a href="tel:0435868891">
                                    <Phone className="mr-2 h-5 w-5" /> Call Now: 0435 868 891
                                </a>
                            </Button>
                            <Button size="lg" variant="outline" className="rounded-full text-lg h-14 px-8 border-white/20 hover:bg-white/10 backdrop-blur-sm transition-all" asChild>
                                <Link href="/services">
                                    View Services <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                        </div>

                        {/* Service Stats / Quick Info */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10 mb-12">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-white/5">
                                    <Clock className="w-5 h-5 text-rose-500" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-2xl font-bold text-white">45m</span>
                                    <span className="text-xs text-zinc-500 uppercase">Avg. Arrival</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-white/5">
                                    <ShieldCheck className="w-5 h-5 text-rose-500" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-2xl font-bold text-white">12mo</span>
                                    <span className="text-xs text-zinc-500 uppercase">Warranty</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 col-span-2 md:col-span-1">
                                <div className="p-2 rounded-lg bg-white/5">
                                    <MapPin className="w-5 h-5 text-rose-500" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm font-bold text-white">Mount Druitt</span>
                                    <span className="text-xs text-zinc-500 uppercase">Local Expert</span>
                                </div>
                            </div>
                        </div>

                        {/* Trust Bar (Restored) */}
                        <div className="border-t border-white/10 bg-black/20 backdrop-blur-sm -mx-4 md:-mx-8 px-4 md:px-8">
                            <div className="py-6 flex flex-wrap justify-start md:justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                                {/* Partner Logos */}
                                {["Toyota", "Ford", "Bosch", "Castrol", "Snap-on"].map((brand) => (
                                    <span key={brand} className="text-xl md:text-2xl font-bold text-white tracking-widest uppercase">{brand}</span>
                                ))}
                            </div>
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}
