import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Phone, Check, ArrowRight } from "lucide-react";
import CTAButton from "@/components/CTAButton";
import ProcessSection from "@/components/ProcessSection";
import { areas } from "@/data/areas";
import { services } from "@/data/services";
import { BUSINESS_NAME, BUSINESS_PHONE, SITE_URL } from "@/lib/config";

interface AreaPageProps {
    params: Promise<{
        area: string;
    }>;
}

export async function generateStaticParams() {
    return areas.map((area) => ({
        area: area.slug,
    }));
}

export async function generateMetadata({ params }: AreaPageProps): Promise<Metadata> {
    const resolvedParams = await params;
    const area = areas.find((a) => a.slug === resolvedParams.area);

    if (!area) {
        return {
            title: "Area Not Found",
        };
    }

    return {
        title: `Kitchen & Bathroom Remodeling in ${area.name}, PA`,
        description: `${BUSINESS_NAME} provides quality kitchen and bathroom remodeling services in ${area.name}, PA. Get a free estimate for your project.`,
        openGraph: {
            title: `Kitchen & Bathroom Remodeling in ${area.name}, PA`,
            description: `Professional remodeling services in ${area.name} from ${BUSINESS_NAME}.`,
            url: `${SITE_URL}/areas/${area.slug}`,
        },
    };
}

export default async function AreaPage({ params }: AreaPageProps) {
    const resolvedParams = await params;
    const area = areas.find((a) => a.slug === resolvedParams.area);

    if (!area) {
        notFound();
    }

    return (
        <>
            {/* Header */}
            <section className="pt-32 pb-12 md:pt-40 md:pb-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <Link
                        href="/areas"
                        className="inline-flex items-center gap-2 text-charcoal/60 hover:text-accent mb-6 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        All Service Areas
                    </Link>

                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
                            Kitchen & Bathroom Remodeling in {area.name}, PA
                        </h1>
                        <p className="text-xl text-charcoal/70 leading-relaxed mb-8">
                            {area.description}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <CTAButton href="/contact" size="lg">
                                Get a Free Estimate
                            </CTAButton>
                            <CTAButton
                                href={`tel:${BUSINESS_PHONE.replace(/[^0-9]/g, "")}`}
                                variant="outline"
                                size="lg"
                            >
                                <Phone className="w-5 h-5 mr-2" />
                                Call {BUSINESS_PHONE}
                            </CTAButton>
                        </div>
                    </div>
                </div>
            </section>

            {/* Highlights */}
            <section className="px-4 pb-16">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-white rounded-2xl border-2 border-charcoal/10 p-6 md:p-8 shadow-card">
                        <h2 className="text-2xl font-bold text-charcoal mb-6">
                            Why {area.name} Homeowners Choose {BUSINESS_NAME}
                        </h2>
                        <div className="grid sm:grid-cols-3 gap-6">
                            {area.highlights.map((highlight, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                    <span className="text-charcoal/80">{highlight}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="px-4 py-16 md:py-24 bg-white/50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-charcoal mb-8 text-center">
                        Our Services in {area.name}
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.slice(0, 5).map((service) => (
                            <div
                                key={service.id}
                                className="bg-white rounded-2xl border-2 border-charcoal/10 p-6 shadow-card"
                            >
                                <h3 className="text-lg font-bold text-charcoal mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-charcoal/70 text-sm">
                                    {service.shortDescription}
                                </p>
                            </div>
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

            {/* Process Section */}
            <section className="px-4 py-16 md:py-24">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-charcoal mb-12 text-center">
                        Our Process
                    </h2>
                    <ProcessSection />
                </div>
            </section>

            {/* Related Areas */}
            <section className="px-4 py-16 md:py-24 bg-white/50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl font-bold text-charcoal mb-6">
                        Also Serving Nearby Areas
                    </h2>
                    <div className="flex flex-wrap gap-3">
                        {areas
                            .filter((a) => a.slug !== area.slug)
                            .slice(0, 8)
                            .map((nearbyArea) => (
                                <Link
                                    key={nearbyArea.slug}
                                    href={`/areas/${nearbyArea.slug}`}
                                    className="px-4 py-2 bg-white border-2 border-charcoal/10 rounded-xl text-charcoal hover:bg-accent hover:text-white hover:border-accent transition-colors text-sm font-medium"
                                >
                                    {nearbyArea.name}
                                </Link>
                            ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="px-4 py-16 md:py-24 bg-charcoal text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Start Your {area.name} Project?
                    </h2>
                    <p className="text-xl text-white/70 mb-8">
                        Get a free, no-obligation estimate for your kitchen or bathroom
                        remodel.
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
                            Call {BUSINESS_PHONE}
                        </CTAButton>
                    </div>
                </div>
            </section>

            {/* Internal Links */}
            <section className="px-4 py-12 border-t border-charcoal/10">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-6 text-sm">
                        <Link href="/services" className="text-charcoal/60 hover:text-accent">
                            Our Services
                        </Link>
                        <Link href="/portfolio" className="text-charcoal/60 hover:text-accent">
                            View Portfolio
                        </Link>
                        <Link href="/reviews" className="text-charcoal/60 hover:text-accent">
                            Customer Reviews
                        </Link>
                        <Link href="/about" className="text-charcoal/60 hover:text-accent">
                            About Us
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
