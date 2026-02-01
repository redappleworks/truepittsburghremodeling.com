"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ImageLightboxProps {
    images: string[];
    initialIndex?: number;
    onClose: () => void;
}

export default function ImageLightbox({
    images,
    initialIndex = 0,
    onClose,
}: ImageLightboxProps) {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);

    const goToPrevious = useCallback(() => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }, [images.length]);

    const goToNext = useCallback(() => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, [images.length]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowLeft") goToPrevious();
            if (e.key === "ArrowRight") goToNext();
        };

        document.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [onClose, goToPrevious, goToNext]);

    return (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
            {/* Close Button */}
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white/70 hover:text-white p-2 z-10"
                aria-label="Close lightbox"
            >
                <X className="w-8 h-8" />
            </button>

            {/* Navigation Arrows */}
            {images.length > 1 && (
                <>
                    <button
                        onClick={goToPrevious}
                        className="absolute left-4 text-white/70 hover:text-white p-2 z-10"
                        aria-label="Previous image"
                    >
                        <ChevronLeft className="w-10 h-10" />
                    </button>
                    <button
                        onClick={goToNext}
                        className="absolute right-4 text-white/70 hover:text-white p-2 z-10"
                        aria-label="Next image"
                    >
                        <ChevronRight className="w-10 h-10" />
                    </button>
                </>
            )}

            {/* Image */}
            <div className="relative w-full h-full max-w-5xl max-h-[80vh] mx-4">
                <Image
                    src={images[currentIndex]}
                    alt={`Image ${currentIndex + 1} of ${images.length}`}
                    fill
                    className="object-contain"
                    priority
                />
            </div>

            {/* Counter */}
            {images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm">
                    {currentIndex + 1} / {images.length}
                </div>
            )}

            {/* Thumbnails */}
            {images.length > 1 && (
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-2">
                    {images.map((image, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-16 h-12 relative rounded overflow-hidden border-2 transition-all ${index === currentIndex
                                    ? "border-white"
                                    : "border-white/30 opacity-60 hover:opacity-100"
                                }`}
                        >
                            <Image
                                src={image}
                                alt={`Thumbnail ${index + 1}`}
                                fill
                                className="object-cover"
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
