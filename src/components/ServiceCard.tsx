import Link from "next/link";
import Image from "next/image";
import { ChefHat, Bath, Grid3X3, PaintRoller, Home, ArrowRight } from "lucide-react";
import { Service } from "@/data/services";

interface ServiceCardProps {
    service: Service;
    showDetails?: boolean;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    "chef-hat": ChefHat,
    "bath": Bath,
    "grid-3x3": Grid3X3,
    "paint-roller": PaintRoller,
    "home": Home,
};

export default function ServiceCard({ service, showDetails = false }: ServiceCardProps) {
    const IconComponent = iconMap[service.icon] || Home;

    return (
        <div className="bg-white rounded-2xl border-2 border-charcoal/10 overflow-hidden shadow-card hover:shadow-card-hover transition-shadow">
            {/* Image */}
            <div className="relative h-48 w-full">
                <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                />
            </div>

            <div className="p-6">

                {/* Title */}
                <h3 className="text-xl font-bold text-charcoal mb-2">{service.title}</h3>

                {/* Description */}
                <p className="text-charcoal/70 mb-4">
                    {showDetails ? service.description : service.shortDescription}
                </p>

                {/* What's Included */}
                {showDetails && (
                    <div className="mb-4">
                        <h4 className="font-semibold text-charcoal mb-2">What&apos;s Included:</h4>
                        <ul className="space-y-1">
                            {service.whatsIncluded.map((item, index) => (
                                <li key={index} className="flex items-start gap-2 text-sm text-charcoal/70">
                                    <span className="text-accent mt-1">•</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* CTA */}
                <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
                >
                    Get a Free Estimate
                    <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </div>
    );
}
