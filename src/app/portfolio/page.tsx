import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import CTAButton from "@/components/CTAButton";
import { projects } from "@/data/projects";
import { BUSINESS_NAME } from "@/lib/config";

export const metadata: Metadata = {
    title: "Portfolio | Kitchen & Bathroom Remodeling Projects",
    description: `View the kitchen and bathroom remodeling projects completed by ${BUSINESS_NAME} in Pittsburgh, PA. Before and after photos of real transformations.`,
    openGraph: {
        title: "Portfolio | Kitchen & Bathroom Remodeling Projects",
        description: `Real remodeling projects from ${BUSINESS_NAME}. See our work in Pittsburgh and surrounding areas.`,
    },
};

export default function PortfolioPage() {
    return (
        <>
            {/* Header */}
            <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
                            Our Work
                        </h1>
                        <p className="text-xl text-charcoal/70 leading-relaxed">
                            Every project tells a story. Browse our portfolio to see the
                            kitchen and bathroom transformations we&apos;ve delivered for
                            Pittsburgh area homeowners.
                        </p>
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="px-4 pb-16 md:pb-24">
                <div className="max-w-7xl mx-auto">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project) => (
                            <ProjectCard key={project.slug} project={project} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="px-4 py-16 md:py-24 bg-charcoal text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready for Your Own Transformation?
                    </h2>
                    <p className="text-xl text-white/70 mb-8">
                        Let&apos;s discuss your vision. Get a free estimate today.
                    </p>
                    <CTAButton href="/contact" size="lg">
                        Get a Free Estimate
                    </CTAButton>
                </div>
            </section>
        </>
    );
}
