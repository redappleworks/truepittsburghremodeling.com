import type { Metadata } from "next";
import { Phone, MessageCircle, Clock, CheckCircle, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { BUSINESS_NAME, BUSINESS_PHONE, SERVICE_AREAS_SHORT } from "@/lib/config";

export const metadata: Metadata = {
    title: "Get a Free Estimate",
    description: `Contact ${BUSINESS_NAME} for a free kitchen or bathroom remodeling estimate in Pittsburgh, PA. Call, text, or fill out our form.`,
    openGraph: {
        title: "Get a Free Estimate | Pittsburgh Kitchen & Bathroom Remodeling",
        description: `Contact ${BUSINESS_NAME} today for your free remodeling consultation.`,
    },
};

export default function ContactPage() {
    return (
        <>
            {/* Header */}
            <section className="pt-32 pb-12 md:pt-40 md:pb-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
                            Get a Free Estimate
                        </h1>
                        <p className="text-xl text-charcoal/70 leading-relaxed">
                            Ready to transform your kitchen or bathroom? Fill out the form
                            below, and we&apos;ll get back to you within 24 hours to schedule
                            your free consultation.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="px-4 pb-16 md:pb-24">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Form */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-2xl border-2 border-charcoal/10 p-6 md:p-8 shadow-card">
                                <ContactForm />
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            {/* Phone/Text CTA */}
                            <div className="bg-white rounded-2xl border-2 border-charcoal/10 p-6 shadow-card">
                                <h3 className="text-lg font-bold text-charcoal mb-4">
                                    Prefer to Call or Text?
                                </h3>
                                <div className="space-y-3">
                                    <a
                                        href={`tel:${BUSINESS_PHONE.replace(/[^0-9]/g, "")}`}
                                        className="flex items-center gap-3 bg-accent text-white px-4 py-3 rounded-xl font-semibold hover:bg-accent-hover transition-colors justify-center"
                                    >
                                        <Phone className="w-5 h-5" />
                                        Call {BUSINESS_PHONE}
                                    </a>
                                    <a
                                        href={`sms:${BUSINESS_PHONE.replace(/[^0-9]/g, "")}`}
                                        className="flex items-center gap-3 border-2 border-charcoal text-charcoal px-4 py-3 rounded-xl font-semibold hover:bg-charcoal hover:text-white transition-colors justify-center"
                                    >
                                        <MessageCircle className="w-5 h-5" />
                                        Text {BUSINESS_PHONE}
                                    </a>
                                </div>
                            </div>

                            {/* What to Expect */}
                            <div className="bg-white rounded-2xl border-2 border-charcoal/10 p-6 shadow-card">
                                <h3 className="text-lg font-bold text-charcoal mb-4">
                                    What to Expect
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                        <div>
                                            <strong className="text-charcoal">24-hour response</strong>
                                            <p className="text-sm text-charcoal/60">
                                                We&apos;ll reach out within one business day
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                        <div>
                                            <strong className="text-charcoal">Free consultation</strong>
                                            <p className="text-sm text-charcoal/60">
                                                In-home visit to discuss your project
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                        <div>
                                            <strong className="text-charcoal">Detailed estimate</strong>
                                            <p className="text-sm text-charcoal/60">
                                                Itemized proposal with no hidden costs
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            {/* Service Areas */}
                            <div className="bg-white rounded-2xl border-2 border-charcoal/10 p-6 shadow-card">
                                <h3 className="text-lg font-bold text-charcoal mb-4 flex items-center gap-2">
                                    <MapPin className="w-5 h-5 text-accent" />
                                    Service Areas
                                </h3>
                                <p className="text-charcoal/70 text-sm">
                                    We serve {SERVICE_AREAS_SHORT.join(", ")} and surrounding Allegheny County
                                    communities.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
