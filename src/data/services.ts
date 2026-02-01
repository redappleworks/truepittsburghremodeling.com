export interface Service {
    id: string;
    title: string;
    shortDescription: string;
    description: string;
    icon: string;
    image: string;
    whatsIncluded: string[];
}

export const services: Service[] = [
    {
        id: "kitchen-remodeling",
        title: "Kitchen Remodeling",
        shortDescription: "Transform your kitchen into a functional, beautiful space.",
        description:
            "Your kitchen is the heart of your home. We create kitchens that work for your lifestyle—whether you need more storage, better flow, or a complete transformation. From cabinet selection to countertop installation, we handle every detail with precision and care.",
        icon: "chef-hat",
        image: "/services/images/kitchen.png",
        whatsIncluded: [
            "Custom cabinetry design and installation",
            "Countertop selection and installation (granite, quartz, butcher block)",
            "Backsplash tile work",
            "Lighting updates and under-cabinet lighting",
            "Flooring installation",
            "Sink and faucet replacement",
            "Appliance installation coordination",
        ],
    },
    {
        id: "bathroom-remodeling",
        title: "Bathroom Remodeling",
        shortDescription: "Create a relaxing retreat with modern finishes.",
        description:
            "Transform your bathroom into a spa-like retreat or a functional family space. We specialize in walk-in showers, updated vanities, and tile work that lasts. Every bathroom we complete is built for daily use and designed to impress.",
        icon: "bath",
        image: "/services/images/bathroom.png",
        whatsIncluded: [
            "Shower and tub installation (walk-in, freestanding, tub-to-shower conversions)",
            "Vanity and countertop installation",
            "Tile flooring and wall tile",
            "Toilet replacement",
            "Lighting and ventilation updates",
            "Plumbing fixture upgrades",
            "Accessibility modifications when needed",
        ],
    },
    {
        id: "tile-flooring",
        title: "Tile & Flooring",
        shortDescription: "Quality flooring that stands up to Pittsburgh weather.",
        description:
            "The right flooring transforms a room. We install tile, luxury vinyl, and hardwood throughout Pittsburgh homes. Our installations are precise, durable, and designed to handle everything from muddy boots to holiday gatherings.",
        icon: "grid-3x3",
        image: "/services/images/flooring.png",
        whatsIncluded: [
            "Porcelain and ceramic tile installation",
            "Luxury vinyl plank (LVP) flooring",
            "Hardwood flooring installation",
            "Subfloor preparation and repair",
            "Heated floor systems",
            "Transitions and trim work",
            "Grout sealing and maintenance guidance",
        ],
    },
    {
        id: "painting-drywall",
        title: "Painting & Drywall",
        shortDescription: "Clean finishes that complete your renovation.",
        description:
            "Good paint and drywall work is the foundation of a finished look. We handle drywall repairs, texture matching, and interior painting with attention to detail. The result is walls that look smooth and professional.",
        icon: "paint-roller",
        image: "/services/images/painting.png",
        whatsIncluded: [
            "Drywall installation and repair",
            "Texture matching for seamless repairs",
            "Interior painting (walls, ceilings, trim)",
            "Cabinet painting and refinishing",
            "Minor carpentry and trim installation",
            "Color consultation",
            "Proper surface preparation",
        ],
    },
    {
        id: "full-renovations",
        title: "Full Renovations",
        shortDescription: "Complete transformations for kitchen and bath together.",
        description:
            "When you're ready for a complete transformation, we coordinate everything. Multiple rooms, full layouts, all finishes—we manage the project from start to finish so you don't have to juggle contractors.",
        icon: "home",
        image: "/services/images/full-renovation.png",
        whatsIncluded: [
            "Complete project management",
            "Kitchen and bathroom combination projects",
            "Layout changes and wall modifications",
            "Plumbing and electrical coordination",
            "Permit handling when required",
            "Multi-phase scheduling",
            "Single point of contact throughout",
        ],
    },
];

export const serviceNames = services.map((s) => s.title);
