"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Car, Menu, Phone } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    const navItems = [
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "About", href: "/about" },
        { label: "Reviews", href: "/reviews" },
        { label: "Contact", href: "/contact" },
    ];

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${isScrolled ? "h-16 glass border-white/10" : "h-24 bg-transparent"
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto h-full flex items-center justify-between px-4 md:px-8">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative flex items-center justify-center w-10 h-10 bg-primary rounded-xl overflow-hidden group-hover:scale-105 transition-transform">
                        <Car className="text-white w-6 h-6" />
                    </div>
                    <span className="text-2xl font-bold tracking-tight text-white">
                        LD <span className="text-primary">Mechanic</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="text-sm font-medium text-zinc-300 hover:text-primary transition-colors hover:glow"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* Action Buttons */}
                <div className="hidden md:flex items-center gap-4">
                    <div className="flex flex-col items-end mr-2">
                        <span className="text-[10px] text-zinc-400 uppercase tracking-wider">24/7 Support</span>
                        <span className="text-sm font-bold text-white flex items-center gap-1">
                            <Phone className="w-3 h-3 text-primary" /> 0435 868 891
                        </span>
                    </div>
                    <Button size="lg" className="rounded-full font-semibold shadow-[0_0_20px_rgba(225,29,72,0.3)] hover:shadow-[0_0_30px_rgba(225,29,72,0.6)] transition-all" asChild>
                        <Link href="/#booking">Book Appointment</Link>
                    </Button>
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                                <Menu />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="bg-zinc-950 border-zinc-800 text-white">
                            <nav className="flex flex-col gap-6 mt-10">
                                {navItems.map((item) => (
                                    <Link key={item.label} href={item.href} className="text-xl font-medium hover:text-primary">
                                        {item.label}
                                    </Link>
                                ))}
                                <Button className="w-full mt-4" asChild>
                                    <Link href="/#booking">Book Now</Link>
                                </Button>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </motion.header>
    );
}
