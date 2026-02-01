import type { Metadata } from "next";
import Link from "next/link";
import CTAButton from "@/components/CTAButton";
import { areas } from "@/data/areas";
import { BUSINESS_NAME } from "@/lib/config";

export const metadata: Metadata = {
    title: "Service Areas",
    description: `${BUSINESS_NAME} provides kitchen and bathroom remodeling services throughout Pittsburgh, PA and Allegheny County.`,
    openGraph: {
        title: "Service Areas | Pittsburgh & Allegheny County",
        description: `Kitchen and bathroom remodeling in Pittsburgh and surrounding areas.`,
    },
};

export default function AreasPage() {
    return (
        <>
            {/* Header */}
            <section className="pt-32 pb-12 md:pt-40 md:pb-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
                            Areas We Serve
                        </h1>
                        <p className="text-xl text-charcoal/70 leading-relaxed">
                            {BUSINESS_NAME} provides kitchen and bathroom remodeling services
                            throughout Pittsburgh and Allegheny County. Select your area below
                            to learn more.
                        </p>
                    </div>
                </div>
            </section>

            {/* Areas Grid */}
            <section className="px-4 pb-16 md:pb-24">
                <div className="max-w-7xl mx-auto">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {areas.map((area) => (
                            <Link
                                key={area.slug}
                                href={`/areas/${area.slug}`}
                                className="group bg-white rounded-2xl border-2 border-charcoal/10 p-6 shadow-card hover:shadow-card-hover transition-all"
                            >
                                <h2 className="text-xl font-bold text-charcoal mb-2 group-hover:text-accent transition-colors">
                                    {area.name}, PA
                                </h2>
                                <p className="text-charcoal/60 text-sm mb-4">{area.county} County</p>
                                <ul className="space-y-1 mb-4">
                                    {area.highlights.slice(0, 2).map((highlight, i) => (
                                        <li key={i} className="text-sm text-charcoal/70 flex items-center gap-2">
                                            <span className="text-accent">✓</span>
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>
                                <span className="text-accent font-semibold text-sm group-hover:underline">
                                    Learn more →
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="px-4 py-16 md:py-24 bg-charcoal text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Serving Your Neighborhood
                    </h2>
                    <p className="text-xl text-white/70 mb-8">
                        Get a free estimate for your kitchen or bathroom remodel.
                    </p>
                    <CTAButton href="/contact" size="lg">
                        Get a Free Estimate
                    </CTAButton>
                </div>
            </section>
        </>
    );
}
