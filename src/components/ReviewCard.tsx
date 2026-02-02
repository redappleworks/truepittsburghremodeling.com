import { Star } from "lucide-react";
import { Review } from "@/data/reviews";

interface ReviewCardProps {
    review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
    return (
        <div className="bg-white rounded-2xl border-2 border-charcoal/10 p-6 shadow-card hover:shadow-card-hover transition-shadow h-full flex flex-col">
            {/* Stars */}
            <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                        key={i}
                        className={`w-5 h-5 ${i < review.rating
                            ? "fill-accent text-accent"
                            : "fill-charcoal/20 text-charcoal/20"
                            }`}
                    />
                ))}
            </div>

            {/* Quote */}
            <blockquote className="text-charcoal/80 mb-4 leading-relaxed flex-1">
                &ldquo;{review.text}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="pt-4 border-t border-charcoal/10 mt-auto">
                <p className="font-semibold text-charcoal">{review.author}</p>
                <p className="text-sm text-charcoal/60">
                    {review.location} • {review.projectType}
                </p>
            </div>
        </div>
    );
}
