import type { Metadata } from "next";
import { Star, MessageSquare, Clock, Award } from "lucide-react";
import ProcessSection from "@/components/ProcessSection";
import LocalSEOBlock from "@/components/LocalSEOBlock";
import CTAButton from "@/components/CTAButton";
import { BUSINESS_NAME, BUSINESS_PHONE } from "@/lib/config";

export const metadata: Metadata = {
    title: "About Us",
    description: `Learn about ${BUSINESS_NAME}, your trusted kitchen and bathroom remodeling contractor serving Pittsburgh, PA and surrounding areas.`,
    openGraph: {
        title: "About Us | Pittsburgh Kitchen & Bathroom Remodeling",
        description: `${BUSINESS_NAME} delivers quality remodeling with clean workmanship and clear timelines.`,
    },
};

const values = [
    {
        title: "Quality First",
        description:
            "We use quality materials and proven techniques. Every corner, every seam, every finish is done right.",
        icon: Award,
    },
    {
        title: "Clear Communication",
        description:
            "You'll always know what's happening with your project. No surprises, just updates.",
        icon: MessageSquare,
    },
    {
        title: "Clean Worksite",
        description:
            "We clean up every day. Your home stays livable throughout the project.",
        icon: Star,
    },
    {
        title: "On-Time Delivery",
        description:
            "We create realistic timelines and stick to them. Your project finishes when we say it will.",
        icon: Clock,
    },
];

export default function AboutPage() {
    return (
        <>
            {/* Header */}
            <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
                            About {BUSINESS_NAME}
                        </h1>
                        <p className="text-xl text-charcoal/70 leading-relaxed">
                            We&apos;re a Pittsburgh-based remodeling company focused on
                            delivering quality kitchen and bathroom transformations. Our
                            approach is simple: clear communication, clean workmanship, and a
                            smooth experience from estimate to final walkthrough.
                        </p>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="px-4 pb-16 md:pb-24">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-charcoal mb-6">
                                Why Pittsburgh Homeowners Choose Us
                            </h2>
                            <div className="space-y-4 text-charcoal/70 text-lg leading-relaxed">
                                <p>
                                    Remodeling your kitchen or bathroom is a significant
                                    investment. You want to work with someone who understands
                                    Pittsburgh homes, respects your time, and delivers results
                                    that last.
                                </p>
                                <p>
                                    That&apos;s what {BUSINESS_NAME} provides. We&apos;ve
                                    completed projects throughout Allegheny County—from historic
                                    row homes in Lawrenceville to newer builds in the South
                                    Hills. Each project teaches us something new, and we bring
                                    that experience to every estimate.
                                </p>
                                <p>
                                    Our team takes pride in the details. We protect your home
                                    during work, clean up daily, and communicate regularly.
                                    When the project is complete, you&apos;ll have a space that
                                    looks great and functions even better.
                                </p>
                            </div>
                        </div>
                        <div className="bg-white rounded-2xl border-2 border-charcoal/10 p-8 shadow-card">
                            <h3 className="text-xl font-bold text-charcoal mb-6">
                                Our Commitment
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                                    </div>
                                    <div>
                                        <strong className="text-charcoal">Free Estimates</strong>
                                        <p className="text-charcoal/60">
                                            Detailed proposals with no obligation
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                                    </div>
                                    <div>
                                        <strong className="text-charcoal">
                                            Transparent Pricing
                                        </strong>
                                        <p className="text-charcoal/60">
                                            You know exactly what you&apos;re paying for
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                                    </div>
                                    <div>
                                        <strong className="text-charcoal">
                                            Quality Workmanship
                                        </strong>
                                        <p className="text-charcoal/60">
                                            Built right the first time
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                                    </div>
                                    <div>
                                        <strong className="text-charcoal">Local Experience</strong>
                                        <p className="text-charcoal/60">
                                            We know Pittsburgh homes
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="px-4 py-16 md:py-24 bg-white/50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-12 text-center">
                        What We Stand For
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl border-2 border-charcoal/10 p-6 text-center shadow-card"
                            >
                                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <value.icon className="w-7 h-7 text-accent" />
                                </div>
                                <h3 className="text-lg font-bold text-charcoal mb-2">
                                    {value.title}
                                </h3>
                                <p className="text-charcoal/70 text-sm">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="px-4 py-16 md:py-24">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-12 text-center">
                        Our Process
                    </h2>
                    <ProcessSection />
                </div>
            </section>

            {/* Service Areas */}
            <section className="px-4 py-16 md:py-24 bg-white/50">
                <div className="max-w-7xl mx-auto">
                    <LocalSEOBlock
                        title="Areas We Serve"
                        description="True Pittsburgh Remodeling serves homeowners throughout Pittsburgh and Allegheny County."
                        limit={15}
                    />
                </div>
            </section>

            {/* CTA Section */}
            <section className="px-4 py-16 md:py-24 bg-charcoal text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Let&apos;s Talk About Your Project
                    </h2>
                    <p className="text-xl text-white/70 mb-8">
                        Ready to transform your kitchen or bathroom? Get a free, no-pressure
                        estimate.
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
        </>
    );
}
