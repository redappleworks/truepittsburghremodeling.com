import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import ReviewCard from "@/components/ReviewCard";
import TrustBar from "@/components/TrustBar";
import ProcessSection from "@/components/ProcessSection";
import LocalSEOBlock from "@/components/LocalSEOBlock";
import CTAButton from "@/components/CTAButton";
import JsonLd from "@/components/JsonLd";
import { services } from "@/data/services";
import { featuredProjects } from "@/data/projects";
import { featuredReviews } from "@/data/reviews";
import {
    BUSINESS_NAME,
    BUSINESS_TAGLINE,
    BUSINESS_PHONE,
} from "@/lib/config";

export const metadata: Metadata = {
    title: `${BUSINESS_NAME} | Kitchen & Bathroom Remodeling in Pittsburgh, PA`,
    description: BUSINESS_TAGLINE,
};

export default function HomePage() {
    return (
        <>
            <JsonLd type="LocalBusiness" />

            {/* Hero Section */}
            <section
                className="relative pt-28 pb-16 md:pt-36 md:pb-24 px-4 min-h-[600px] md:min-h-[700px] flex items-center"
                style={{
                    backgroundImage: 'url(/projects/images/herobackground.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-black/50"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            Kitchen & Bathroom Remodeling in<br />Pittsburgh, PA
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                            Expert craftsmanship. Stunning results. Your dream space awaits.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <CTAButton href="/contact" size="lg">
                                Get a Free Estimate
                            </CTAButton>
                            <CTAButton
                                href={`tel:${BUSINESS_PHONE.replace(/[^0-9]/g, "")}`}
                                variant="outline"
                                size="lg"
                                className="border-white text-white hover:bg-white/20 hover:border-white/80"
                            >
                                <Phone className="w-5 h-5 mr-2" />
                                Call {BUSINESS_PHONE}
                            </CTAButton>
                        </div>
                        <a
                            href={`sms:${BUSINESS_PHONE.replace(/[^0-9]/g, "")}`}
                            className="inline-flex items-center gap-2 mt-4 text-white/70 hover:text-white transition-colors"
                        >
                            <MessageCircle className="w-5 h-5" />
                            Or text us at {BUSINESS_PHONE}
                        </a>
                    </div>
                </div>
            </section>

            {/* Trust Bar */}
            <TrustBar />

            {/* Services Section */}
            <section className="px-4 py-16 md:py-24">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                            Our Services
                        </h2>
                        <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                            From kitchen transformations to bathroom renovations, we handle
                            every detail of your project.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.slice(0, 4).map((service) => (
                            <ServiceCard key={service.id} service={service} />
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <Link
                            href="/services"
                            className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
                        >
                            View all services
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Featured Projects */}
            <section className="px-4 py-16 md:py-24 bg-white/50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                            Recent Projects
                        </h2>
                        <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                            See the transformations we&apos;ve completed for Pittsburgh homeowners.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {featuredProjects.map((project) => (
                            <ProjectCard key={project.slug} project={project} />
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <Link
                            href="/portfolio"
                            className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
                        >
                            View full portfolio
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="px-4 py-16 md:py-24">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                            How We Work
                        </h2>
                        <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                            A simple, straightforward process from first call to final walkthrough.
                        </p>
                    </div>
                    <ProcessSection />
                </div>
            </section>

            {/* Reviews Section */}
            <section className="px-4 py-16 md:py-24 bg-white/50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                            What Customers Say
                        </h2>
                        <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                            Real feedback from Pittsburgh homeowners we&apos;ve worked with.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {featuredReviews.map((review, index) => (
                            <ReviewCard key={index} review={review} />
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <Link
                            href="/reviews"
                            className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
                        >
                            Read all reviews
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Local SEO Block */}
            <section className="px-4 py-16 md:py-24">
                <div className="max-w-7xl mx-auto">
                    <LocalSEOBlock />
                </div>
            </section>

            {/* Final CTA */}
            <section className="px-4 py-16 md:py-24 bg-charcoal text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Transform Your Space?
                    </h2>
                    <p className="text-xl text-white/70 mb-8">
                        Get a free, no-obligation estimate for your kitchen or bathroom
                        remodel. We&apos;ll come to you, discuss your vision, and provide a
                        detailed proposal.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <CTAButton href="/contact" size="lg">
                            Get a Free Estimate
                        </CTAButton>
                        <CTAButton
                            href={`tel:${BUSINESS_PHONE.replace(/[^0-9]/g, "")}`}
                            variant="outline"
                            size="lg"
                            className="border-white text-white hover:bg-white hover:text-charcoal"
                        >
                            <Phone className="w-5 h-5 mr-2" />
                            Call {BUSINESS_PHONE}
                        </CTAButton>
                    </div>
                </div>
            </section>
        </>
    );
}
