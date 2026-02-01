import Link from "next/link";
import { Phone, Mail, MapPin, Star } from "lucide-react";
import {
    BUSINESS_NAME,
    BUSINESS_PHONE,
    BUSINESS_EMAIL,
    GOOGLE_BUSINESS_PROFILE_URL,
    PRIMARY_SERVICE_AREA,
} from "@/lib/config";

const quickLinks = [
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/about", label: "About Us" },
    { href: "/reviews", label: "Reviews" },
    { href: "/areas", label: "Service Areas" },
    { href: "/contact", label: "Contact" },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-charcoal text-white">
            <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
                <div className="grid md:grid-cols-3 gap-10">
                    {/* Business Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">{BUSINESS_NAME}</h3>
                        <div className="space-y-3 text-white/70">
                            <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 flex-shrink-0" />
                                <span>Serving {PRIMARY_SERVICE_AREA}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone className="w-4 h-4 flex-shrink-0" />
                                <a href={`tel:${BUSINESS_PHONE.replace(/[^0-9]/g, "")}`} className="hover:text-white">
                                    {BUSINESS_PHONE}
                                </a>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail className="w-4 h-4 flex-shrink-0" />
                                <a href={`mailto:${BUSINESS_EMAIL}`} className="hover:text-white">
                                    {BUSINESS_EMAIL}
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <nav className="grid grid-cols-2 gap-2">
                            {quickLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-white/70 hover:text-white transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* CTA */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Ready to Get Started?</h3>
                        <p className="text-white/70 mb-4">
                            Get a free estimate for your kitchen or bathroom project.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block bg-accent text-white px-6 py-3 rounded-xl font-semibold hover:bg-accent-hover transition-colors"
                        >
                            Get a Free Estimate
                        </Link>
                        <a
                            href={GOOGLE_BUSINESS_PROFILE_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 mt-4 text-white/70 hover:text-white transition-colors"
                        >
                            <Star className="w-4 h-4" />
                            <span>Leave us a review on Google</span>
                        </a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-10 pt-6 border-t border-white/10 text-center text-white/50 text-sm">
                    <p>
                        © {currentYear} {BUSINESS_NAME}. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
