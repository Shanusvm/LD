"use client";

import { motion } from "framer-motion";

const brands = [
    "TOYOTA", "FORD", "BMW", "MERCEDES", "AUDI",
    "HONDA", "NISSAN", "HYUNDAI", "KIA", "MAZDA",
    "VOLKSWAGEN", "BOSCH", "CASTROL", "SNAP-ON",
    "SUBARU", "JEEP", "LAND ROVER", "LEXUS"
];

export function BrandMarquee() {
    return (
        <section className="py-8 md:py-12 bg-zinc-950 border-y border-white/5 overflow-hidden w-full">
            <div className="container px-4 md:px-8 mb-6 md:mb-8">
                <p className="text-xs md:text-sm text-center text-zinc-500 uppercase tracking-widest font-medium">
                    We Service All Makes & Models
                </p>
            </div>

            <div className="relative flex w-full overflow-hidden mask-linear-fade">
                {/* Gradient Masks for smooth fade edges - Wider on desktop */}
                <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />

                <motion.div
                    className="flex whitespace-nowrap items-center"
                    initial={{ x: 0 }}
                    animate={{ x: "-50%" }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 40, // Slower for readability on mobile
                    }}
                >
                    {/* Quadruple the list for seamless looping on ultra-wide screens */}
                    {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
                        <div
                            key={i}
                            className="mx-6 md:mx-12 text-xl md:text-4xl font-black text-zinc-800 select-none cursor-default hover:text-zinc-600 transition-colors uppercase tracking-tighter"
                            style={{ fontFamily: 'var(--font-outfit)' }}
                        >
                            {brand}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
