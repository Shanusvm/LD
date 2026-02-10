"use client";

import { Star, MapPin, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const reviews = [
    {
        author: "James Wilson",
        rating: 5,
        text: "Saved me when my car broke down on the highway. Arrived within 30 minutes, diagnosed the issue, and fixed it on the spot. Highly recommended!",
        date: "2 weeks ago"
    },
    {
        author: "Sarah Jenkins",
        rating: 5,
        text: "LD Mechanic provides honest and transparent service. They did my logbook service and pink slip at my home. So convenient and professional.",
        date: "1 month ago"
    },
    {
        author: "Michael Chang",
        rating: 5,
        text: "Best mobile mechanic in Mount Druitt. Fair pricing and they really know their stuff. Fixed an electrical issue two other shops couldn't find.",
        date: "3 months ago"
    },
    {
        author: "David Thompson",
        rating: 5,
        text: "Urgent battery replacement on a Sunday. Life saver! Great communication and very polite.",
        date: "4 months ago"
    },
    {
        author: "Emma Rodriguez",
        rating: 5,
        text: "Fast, reliable, and affordable. Booked them for a pre-purchase inspection and they saved me from buying a lemon. Detailed report given.",
        date: "1 month ago"
    },
    {
        author: "Robert O'Connor",
        rating: 5,
        text: "Actually showed up on time! Professional tools and setup. Did my brake pads in my driveway while I worked from home.",
        date: "2 months ago"
    },
    {
        author: "Lisa Paton",
        rating: 5,
        text: "My go-to mechanic now. Does the job right without adding unnecessary costs. Very trustworthy guys.",
        date: "5 months ago"
    },
    {
        author: "Ahmed K.",
        rating: 5,
        text: "Excellent service for my Toyota Hilux. Suspension work was done perfectly. Rides like new again. Thanks LD!",
        date: "3 weeks ago"
    }
];

export function GoogleReviews() {
    return (
        <section className="py-20 bg-zinc-950/50">
            <div className="container px-4 md:px-8">
                <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <div className="bg-white p-1 rounded-sm">
                                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                </svg>
                            </div>
                            <span className="text-xl font-bold text-white">Google Reviews</span>
                        </div>
                        <p className="text-zinc-400 max-w-lg">
                            Rated <span className="text-white font-bold">5.0 Stars</span> by our customers.
                            See why we are Mount Druitt's most trusted mobile mechanic.
                        </p>
                    </div>

                    <Button variant="outline" className="border-white/10 text-white hover:bg-white/10 gap-2" asChild>
                        <a href="https://business.google.com/n/13971716164542087389/profile" target="_blank" rel="noopener noreferrer">
                            Write a Review <MapPin className="w-4 h-4 text-rose-500" />
                        </a>
                    </Button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {reviews.map((review, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full bg-zinc-900 border-white/10 flex flex-col hover:border-rose-500/30 transition-colors">
                                <CardContent className="p-6 flex flex-col h-full">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 rounded-full bg-rose-600/20 text-rose-500 flex items-center justify-center font-bold text-xs">
                                                {review.author.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-white">{review.author}</p>
                                                <p className="text-xs text-zinc-500">{review.date}</p>
                                            </div>
                                        </div>
                                        <div className="flex text-yellow-500">
                                            {[...Array(review.rating)].map((_, j) => <Star key={j} className="w-3 h-3 fill-current" />)}
                                        </div>
                                    </div>
                                    <p className="text-zinc-300 text-sm leading-relaxed flex-grow">
                                        <Quote className="w-3 h-3 text-zinc-600 inline mr-1 mb-1 transform rotate-180" />
                                        {review.text}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Button variant="ghost" className="text-zinc-400 hover:text-white" asChild>
                        <a href="https://business.google.com/n/13971716164542087389/profile" target="_blank" rel="noopener noreferrer">
                            View More Reviews on Google
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
}
