import Link from "next/link";
import { areas } from "@/data/areas";

interface LocalSEOBlockProps {
    title?: string;
    description?: string;
    limit?: number;
}

export default function LocalSEOBlock({
    title = "Serving Pittsburgh and Surrounding Areas",
    description = "Aspen Remodeling provides quality kitchen and bathroom remodeling throughout Allegheny County.",
    limit = 12,
}: LocalSEOBlockProps) {
    const displayAreas = areas.slice(0, limit);

    return (
        <div className="bg-white rounded-2xl border-2 border-charcoal/10 p-6 md:p-8 shadow-card">
            <h3 className="text-2xl font-bold text-charcoal mb-3">{title}</h3>
            <p className="text-charcoal/70 mb-6">{description}</p>

            <div className="flex flex-wrap gap-3">
                {displayAreas.map((area) => (
                    <Link
                        key={area.slug}
                        href={`/areas/${area.slug}`}
                        className="px-4 py-2 bg-cream rounded-xl text-charcoal hover:bg-accent hover:text-white transition-colors text-sm font-medium"
                    >
                        {area.name}
                    </Link>
                ))}
            </div>

            <div className="mt-6 pt-6 border-t border-charcoal/10">
                <Link
                    href="/areas"
                    className="text-accent font-semibold hover:underline"
                >
                    View all service areas →
                </Link>
            </div>
        </div>
    );
}
