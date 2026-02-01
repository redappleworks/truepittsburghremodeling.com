import type { Metadata } from "next";
import ServiceCard from "@/components/ServiceCard";
import FAQAccordion from "@/components/FAQAccordion";
import LocalSEOBlock from "@/components/LocalSEOBlock";
import CTAButton from "@/components/CTAButton";
import { services } from "@/data/services";
import { BUSINESS_NAME, BUSINESS_PHONE } from "@/lib/config";

export const metadata: Metadata = {
    title: "Kitchen & Bathroom Remodeling Services",
    description: `${BUSINESS_NAME} offers comprehensive kitchen remodeling, bathroom renovation, tile & flooring, painting, and full home renovations in Pittsburgh, PA.`,
    openGraph: {
        title: "Kitchen & Bathroom Remodeling Services | Pittsburgh, PA",
        description: `Professional remodeling services from ${BUSINESS_NAME}. Kitchen, bathroom, tile, flooring, and full renovations.`,
    },
};

const faqItems = [
    {
        question: "How long does a typical kitchen remodel take?",
        answer:
            "Most kitchen remodels take 4-6 weeks depending on scope. A simple refresh might be 2-3 weeks, while a complete gut renovation could take 8+ weeks. We provide a detailed timeline during your consultation.",
    },
    {
        question: "Do I need to move out during the remodel?",
        answer:
            "Usually not. We contain the work area and clean up daily. For kitchen remodels, you may want to set up a temporary kitchen space. Full renovations may require temporary accommodation depending on the scope.",
    },
    {
        question: "How much does a bathroom remodel cost?",
        answer:
            "Bathroom remodels in Pittsburgh typically range from $15,000 to $40,000+ depending on size, materials, and scope. We provide detailed, transparent estimates during your free consultation.",
    },
    {
        question: "Do you handle permits?",
        answer:
            "Yes, we handle all necessary permits for your project. We're familiar with local requirements in Pittsburgh and surrounding areas, ensuring your project is properly permitted and inspected.",
    },
    {
        question: "What is your payment structure?",
        answer:
            "We typically require a deposit to secure your project date, with progress payments tied to project milestones. Final payment is due upon completion and your satisfaction. Specific terms are outlined in your proposal.",
    },
];

export default function ServicesPage() {
    return (
        <>
            {/* Header */}
            <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
                            Our Remodeling Services
                        </h1>
                        <p className="text-xl text-charcoal/70 leading-relaxed">
                            {BUSINESS_NAME} provides comprehensive kitchen and bathroom
                            remodeling services throughout Pittsburgh, PA. From design
                            consultation to final walkthrough, we handle every detail with
                            precision and care.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="px-4 pb-16 md:pb-24">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        {services.map((service) => (
                            <ServiceCard key={service.id} service={service} showDetails />
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="px-4 py-16 md:py-24 bg-white/50">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-8 text-center">
                        Frequently Asked Questions
                    </h2>
                    <FAQAccordion items={faqItems} />
                </div>
            </section>

            {/* Local SEO Section */}
            <section className="px-4 py-16 md:py-24">
                <div className="max-w-7xl mx-auto">
                    <LocalSEOBlock />
                </div>
            </section>

            {/* CTA Section */}
            <section className="px-4 py-16 md:py-24 bg-charcoal text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Get Started?
                    </h2>
                    <p className="text-xl text-white/70 mb-8">
                        Contact us today for a free estimate on your remodeling project.
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
