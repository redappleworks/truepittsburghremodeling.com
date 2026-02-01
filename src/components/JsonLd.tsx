import {
    BUSINESS_NAME,
    BUSINESS_PHONE,
    SITE_URL,
    GOOGLE_BUSINESS_PROFILE_URL,
} from "@/lib/config";
import { areas } from "@/data/areas";

interface JsonLdProps {
    type: "LocalBusiness" | "WebPage";
    pageTitle?: string;
    pageDescription?: string;
    pageUrl?: string;
}

export default function JsonLd({
    type,
    pageTitle,
    pageDescription,
    pageUrl,
}: JsonLdProps) {
    const areaServed = areas.map((area) => ({
        "@type": "City",
        name: `${area.name}, PA`,
    }));

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "HomeAndConstructionBusiness", "Contractor"],
        name: BUSINESS_NAME,
        description:
            "Quality kitchen and bathroom remodeling in Pittsburgh, PA. Clean workmanship, clear timelines, and a smooth experience from start to finish.",
        url: SITE_URL,
        telephone: BUSINESS_PHONE,
        areaServed: areaServed,
        address: {
            "@type": "PostalAddress",
            addressLocality: "Pittsburgh",
            addressRegion: "PA",
            addressCountry: "US",
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: 40.4406,
            longitude: -79.9959,
        },
        sameAs: [GOOGLE_BUSINESS_PROFILE_URL],
        priceRange: "$$",
        openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "08:00",
            closes: "18:00",
        },
    };

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: pageTitle,
        description: pageDescription,
        url: pageUrl || SITE_URL,
        isPartOf: {
            "@type": "WebSite",
            name: BUSINESS_NAME,
            url: SITE_URL,
        },
    };

    const schema = type === "LocalBusiness" ? localBusinessSchema : webPageSchema;

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
