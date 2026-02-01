import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MessageCircle, Star } from "lucide-react";
import ReviewCard from "@/components/ReviewCard";
import CTAButton from "@/components/CTAButton";
import { reviews } from "@/data/reviews";
import {
    BUSINESS_NAME,
    BUSINESS_PHONE,
    GOOGLE_BUSINESS_PROFILE_URL,
} from "@/lib/config";

export const metadata: Metadata = {
    title: "Customer Reviews",
    description: `Read what Pittsburgh homeowners say about ${BUSINESS_NAME}. Real reviews from real customers in Mt. Lebanon, Squirrel Hill, Shadyside, and more.`,
    openGraph: {
        title: "Customer Reviews | Pittsburgh Kitchen & Bathroom Remodeling",
        description: `See why Pittsburgh homeowners trust ${BUSINESS_NAME} for their remodeling projects.`,
    },
};

export default function ReviewsPage() {
    return (
        <>
            {/* Header */}
            <section className="pt-32 pb-12 md:pt-40 md:pb-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
                            What Our Customers Say
                        </h1>
                        <p className="text-xl text-charcoal/70 leading-relaxed mb-8">
                            Don&apos;t just take our word for it. Read reviews from Pittsburgh
                            homeowners who trusted us with their kitchen and bathroom
                            remodeling projects.
                        </p>

                        {/* Google Reviews CTA */}
                        <div className="bg-white rounded-2xl border-2 border-charcoal/10 p-6 inline-block shadow-card">
                            <div className="flex items-center gap-4">
                                <div className="flex gap-1">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Star key={i} className="w-6 h-6 fill-accent text-accent" />
                                    ))}
                                </div>
                                <div>
                                    <p className="font-semibold text-charcoal">
                                        5.0 on Google Reviews
                                    </p>
                                    <Link
                                        href={GOOGLE_BUSINESS_PROFILE_URL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-accent hover:underline text-sm"
                                    >
                                        See all reviews on Google →
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reviews Grid */}
            <section className="px-4 pb-16 md:pb-24">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {reviews.map((review, index) => (
                            <ReviewCard key={index} review={review} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Leave a Review CTA */}
            <section className="px-4 py-16 md:py-24 bg-white/50">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-charcoal mb-4">
                        Worked With Us Recently?
                    </h2>
                    <p className="text-xl text-charcoal/70 mb-8">
                        We&apos;d love to hear about your experience. Your feedback helps
                        other Pittsburgh homeowners find quality remodeling.
                    </p>
                    <Link
                        href={GOOGLE_BUSINESS_PROFILE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-charcoal text-white px-6 py-3 rounded-xl font-semibold hover:bg-charcoal/90 transition-colors"
                    >
                        <Star className="w-5 h-5" />
                        Leave a Google Review
                    </Link>
                </div>
            </section>

            {/* Final CTA */}
            <section className="px-4 py-16 md:py-24 bg-charcoal text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Start Your Project?
                    </h2>
                    <p className="text-xl text-white/70 mb-8">
                        Join our satisfied customers. Get a free, no-obligation estimate
                        today.
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
                    <a
                        href={`sms:${BUSINESS_PHONE.replace(/[^0-9]/g, "")}`}
                        className="inline-flex items-center gap-2 mt-4 text-white/70 hover:text-white transition-colors"
                    >
                        <MessageCircle className="w-5 h-5" />
                        Or text us at {BUSINESS_PHONE}
                    </a>
                </div>
            </section>
        </>
    );
}
