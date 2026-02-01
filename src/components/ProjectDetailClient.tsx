"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, MapPin, Check, ZoomIn, Phone } from "lucide-react";
import CTAButton from "@/components/CTAButton";
import ImageLightbox from "@/components/ImageLightbox";
import { Project } from "@/data/projects";
import { BUSINESS_PHONE } from "@/lib/config";

interface ProjectDetailClientProps {
    project: Project;
}

export default function ProjectDetailClient({ project }: ProjectDetailClientProps) {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    const allImages = [project.beforeImage, project.afterImage, ...project.galleryImages];

    const openLightbox = (index: number) => {
        setLightboxIndex(index);
        setLightboxOpen(true);
    };

    return (
        <>
            {/* Header */}
            <section className="pt-32 pb-8 md:pt-40 md:pb-12 px-4">
                <div className="max-w-7xl mx-auto">
                    <Link
                        href="/portfolio"
                        className="inline-flex items-center gap-2 text-charcoal/60 hover:text-accent mb-6 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Portfolio
                    </Link>

                    <div className="flex flex-wrap items-center gap-4 mb-4">
                        <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                            {project.category}
                        </span>
                        <span className="flex items-center gap-1 text-charcoal/60 text-sm">
                            <MapPin className="w-4 h-4" />
                            {project.area}
                        </span>
                        <span className="flex items-center gap-1 text-charcoal/60 text-sm">
                            <Clock className="w-4 h-4" />
                            {project.timeline}
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                        {project.title}
                    </h1>
                    <p className="text-lg text-charcoal/70 max-w-3xl">
                        {project.description}
                    </p>
                </div>
            </section>

            {/* Before/After */}
            <section className="px-4 pb-12">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-lg font-semibold text-charcoal mb-3">Before</h3>
                            <div
                                className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group"
                                onClick={() => openLightbox(0)}
                            >
                                <Image
                                    src={project.beforeImage}
                                    alt={`${project.title} - Before`}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                    <ZoomIn className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-charcoal mb-3">After</h3>
                            <div
                                className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group"
                                onClick={() => openLightbox(1)}
                            >
                                <Image
                                    src={project.afterImage}
                                    alt={`${project.title} - After`}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                    <ZoomIn className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery */}
            {project.galleryImages.length > 0 && (
                <section className="px-4 pb-16">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-2xl font-bold text-charcoal mb-6">Project Gallery</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {project.galleryImages.map((image, index) => (
                                <div
                                    key={index}
                                    className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
                                    onClick={() => openLightbox(index + 2)}
                                >
                                    <Image
                                        src={image}
                                        alt={`${project.title} - Image ${index + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                        <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Features Sidebar */}
            <section className="px-4 pb-16 md:pb-24">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                            <h2 className="text-2xl font-bold text-charcoal mb-6">
                                Project Highlights
                            </h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {project.features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-3 bg-white rounded-xl border-2 border-charcoal/10 p-4"
                                    >
                                        <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                        <span className="text-charcoal/80">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl border-2 border-charcoal/10 p-6 shadow-card h-fit">
                            <h3 className="text-xl font-bold text-charcoal mb-4">
                                Want a Similar Transformation?
                            </h3>
                            <p className="text-charcoal/70 mb-6">
                                We&apos;d love to help with your {project.category.toLowerCase()}{" "}
                                project. Get a free estimate today.
                            </p>
                            <div className="space-y-3">
                                <CTAButton href="/contact" size="lg" className="w-full">
                                    Get a Free Estimate
                                </CTAButton>
                                <CTAButton
                                    href={`tel:${BUSINESS_PHONE.replace(/[^0-9]/g, "")}`}
                                    variant="outline"
                                    size="lg"
                                    className="w-full"
                                >
                                    <Phone className="w-5 h-5 mr-2" />
                                    Call {BUSINESS_PHONE}
                                </CTAButton>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            {lightboxOpen && (
                <ImageLightbox
                    images={allImages}
                    initialIndex={lightboxIndex}
                    onClose={() => setLightboxOpen(false)}
                />
            )}
        </>
    );
}
