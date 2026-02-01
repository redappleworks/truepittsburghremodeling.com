"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { BUSINESS_NAME, BUSINESS_PHONE } from "@/lib/config";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-cream shadow-md ${isScrolled ? "py-3" : "py-4"}`}
        >
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <span className="text-xl md:text-2xl font-bold text-charcoal">
                        {BUSINESS_NAME}
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-charcoal/80 hover:text-accent font-medium transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Phone CTA */}
                <div className="hidden md:flex items-center gap-4">
                    <a
                        href={`tel:${BUSINESS_PHONE.replace(/[^0-9]/g, "")}`}
                        className="flex items-center gap-2 bg-accent text-white px-4 py-2 rounded-xl font-semibold hover:bg-accent-hover transition-colors"
                    >
                        <Phone className="w-4 h-4" />
                        {BUSINESS_PHONE}
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-charcoal"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                >
                    {isMobileMenuOpen ? (
                        <X className="w-6 h-6" />
                    ) : (
                        <Menu className="w-6 h-6" />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-cream border-t border-charcoal/10 absolute top-full left-0 right-0 shadow-lg">
                    <nav className="flex flex-col py-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="px-4 py-3 text-charcoal hover:bg-charcoal/5 font-medium"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="px-4 pt-4 border-t border-charcoal/10 mt-2">
                            <a
                                href={`tel:${BUSINESS_PHONE.replace(/[^0-9]/g, "")}`}
                                className="flex items-center justify-center gap-2 bg-accent text-white px-4 py-3 rounded-xl font-semibold"
                            >
                                <Phone className="w-4 h-4" />
                                Call {BUSINESS_PHONE}
                            </a>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
