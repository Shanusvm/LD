import Link from "next/link";
import { Car, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 py-12 md:py-16">
            <div className="container px-4 md:px-8">
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="flex items-center justify-center w-8 h-8 bg-rose-600 rounded-lg">
                                <Car className="text-white w-5 h-5" />
                            </div>
                            <span className="text-xl font-bold text-white">LD Mechanic</span>
                        </Link>
                        <p className="text-zinc-500 text-sm leading-relaxed mb-4">
                            Driven to keep you moving. Reliable mobile mechanic and workshop services in Mount Druitt and surrounding areas.
                        </p>
                        <div className="flex gap-4">
                            {/* Social icons could go here */}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Express Services</h4>
                        <ul className="space-y-2 text-sm text-zinc-500">
                            <li><Link href="#services" className="hover:text-rose-500 transition-colors">Emergency Breakdown</Link></li>
                            <li><Link href="#services" className="hover:text-rose-500 transition-colors">Mobile Diagnostics</Link></li>
                            <li><Link href="#services" className="hover:text-rose-500 transition-colors">Pink Slips</Link></li>
                            <li><Link href="#services" className="hover:text-rose-500 transition-colors">Battery Replacement</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Contact Info</h4>
                        <ul className="space-y-3 text-sm text-zinc-500">
                            <li className="flex items-start gap-2">
                                <MapPin className="w-4 h-4 text-rose-500 mt-0.5" />
                                <span>2/9 Stout Rd<br />Mount Druitt NSW 2770</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="w-4 h-4 text-rose-500" />
                                <a href="tel:0435868891" className="hover:text-white">0435 868 891</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-rose-500" />
                                <a href="mailto:ldmechanic.au@gmail.com" className="hover:text-white">ldmechanic.au@gmail.com</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Working Hours</h4>
                        <ul className="space-y-2 text-sm text-zinc-500">
                            <li className="flex justify-between">
                                <span>Mon - Sat</span>
                                <span className="text-white">7:00 AM - 10:00 PM</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Sunday</span>
                                <span className="text-rose-500">Emergency Only</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
                    <p>&copy; {new Date().getFullYear()} LD Mobile Mechanic. All rights reserved.</p>
                    <div className="flex gap-6">
                        <span>ABN: [Your ABN]</span>
                        <span>Licensed Motor Mechanic</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
