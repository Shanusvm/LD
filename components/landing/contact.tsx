"use client";

import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from "lucide-react";

export function ContactSection() {
    return (
        <section id="contact" className="py-24 bg-zinc-950 relative border-t border-white/5">
            <div className="container px-4 md:px-8">
                <div className="grid lg:grid-cols-2 gap-12">

                    {/* Info Side */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Visit Our Workshop</h2>
                            <p className="text-zinc-400">
                                Conveniently located in Mount Druitt. We offer comprehensive on-the-spot repairs and efficient mobile mechanic services.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-500 mt-1">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold">Location</h4>
                                    <p className="text-zinc-400">2/9 Stout Rd<br />Mount Druitt NSW 2770, Australia</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-500 mt-1">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold">Call Us</h4>
                                    <p className="text-zinc-400 font-bold mb-1">Mobile: 0435 868 891</p>
                                    <p className="text-zinc-400">Office: 0422 249 223</p>
                                    <p className="text-xs text-rose-400 mt-1">24/7 Urgent Services Available</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-500 mt-1">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold">Email</h4>
                                    <p className="text-zinc-400">ldmechanic.au@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-500 mt-1">
                                    <Clock className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold">Hours</h4>
                                    <div className="text-zinc-400 grid grid-cols-2 gap-x-8">
                                        <span>Mon - Sat:</span> <span>7:00 AM - 10:00 PM</span>
                                        <span>Sunday:</span> <span className="text-rose-400">Emergency Only</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-white/10">
                            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
                            <div className="flex gap-4">
                                {[Instagram, Facebook].map((Icon, i) => (
                                    <a key={i} href="#" className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-rose-600 hover:border-rose-600 transition-all">
                                        <Icon className="w-5 h-5" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Map Side */}
                    <div className="relative h-[500px] w-full rounded-2xl overflow-hidden glass border border-white/10">
                        {/* Real Map Location for 2/9 Stout Rd Mount Druitt */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.864350123456!2d150.817!3d-33.771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDQ2JzE1LjYiUyAxNTDCsDQ5JzAxLjIiRQ!5e0!3m2!1sen!2sau!4v1600000000000!5m2!1sen!2sau"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(90%) opacity(0.8)" }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0"
                        ></iframe>

                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_50px_rgba(0,0,0,0.8)]" />
                    </div>

                </div>
            </div>
        </section>
    );
}
