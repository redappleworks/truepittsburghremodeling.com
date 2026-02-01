export interface ServiceArea {
    slug: string;
    name: string;
    county: string;
    description: string;
    highlights: string[];
}

export const areas: ServiceArea[] = [
    {
        slug: "pittsburgh",
        name: "Pittsburgh",
        county: "Allegheny",
        description: "As Pittsburgh's trusted kitchen and bathroom remodeling contractor, True Pittsburgh Remodeling serves homeowners throughout the city. From historic row homes in the South Side to modern condos Downtown, we deliver quality craftsmanship tailored to Pittsburgh's unique architecture.",
        highlights: [
            "Serving all Pittsburgh neighborhoods",
            "Experience with historic homes",
            "Downtown to suburbs coverage",
        ],
    },
    {
        slug: "mt-lebanon",
        name: "Mt. Lebanon",
        county: "Allegheny",
        description: "Mt. Lebanon homeowners trust True Pittsburgh Remodeling for kitchen and bathroom renovations. We understand the character of Lebo homes and deliver updates that blend modern convenience with timeless appeal.",
        highlights: [
            "Experience with Mt. Lebanon homes",
            "Timeless design approach",
            "Local references available",
        ],
    },
    {
        slug: "squirrel-hill",
        name: "Squirrel Hill",
        county: "Allegheny",
        description: "Squirrel Hill's diverse housing stock—from Tudor homes to mid-century ranches—requires a contractor who understands different styles. True Pittsburgh Remodeling brings that expertise to every kitchen and bathroom project.",
        highlights: [
            "Tudor and period home experience",
            "Diverse architectural knowledge",
            "Quality-focused approach",
        ],
    },
    {
        slug: "shadyside",
        name: "Shadyside",
        county: "Allegheny",
        description: "Shadyside's beautiful row homes and Victorian properties deserve expert renovation. Our team specializes in updating kitchens and bathrooms while respecting the architectural integrity that makes Shadyside special.",
        highlights: [
            "Row home specialists",
            "Victorian renovation expertise",
            "Space-maximizing designs",
        ],
    },
    {
        slug: "fox-chapel",
        name: "Fox Chapel",
        county: "Allegheny",
        description: "Fox Chapel homeowners expect the highest quality, and True Pittsburgh Remodeling delivers. We provide premium kitchen and bathroom renovations with meticulous attention to detail and superior materials.",
        highlights: [
            "Premium materials and finishes",
            "High-end design capability",
            "Detailed craftsmanship",
        ],
    },
    {
        slug: "lawrenceville",
        name: "Lawrenceville",
        county: "Allegheny",
        description: "Lawrenceville's revitalized row homes and renovated properties are part of Pittsburgh's story. We help homeowners create modern kitchens and bathrooms that honor the neighborhood's industrial heritage.",
        highlights: [
            "Historic renovation experience",
            "Modern industrial aesthetic",
            "Row home expertise",
        ],
    },
    {
        slug: "oakland",
        name: "Oakland",
        county: "Allegheny",
        description: "From student housing to stately homes near Schenley Park, Oakland offers diverse remodeling opportunities. True Pittsburgh Remodeling provides quality renovations for landlords and homeowners alike.",
        highlights: [
            "Diverse property experience",
            "Investment property updates",
            "Quality at every budget",
        ],
    },
    {
        slug: "dormont",
        name: "Dormont",
        county: "Allegheny",
        description: "Dormont's tight-knit community deserves a local remodeling contractor they can trust. We've completed numerous kitchen and bathroom projects for Dormont families who appreciate quality workmanship.",
        highlights: [
            "Community-focused approach",
            "Bungalow and cape expertise",
            "Reasonable pricing",
        ],
    },
    {
        slug: "brookline",
        name: "Brookline",
        county: "Allegheny",
        description: "Brookline homeowners know the value of a well-maintained home. True Pittsburgh Remodeling helps you update your kitchen or bathroom with renovations that stand the test of time.",
        highlights: [
            "Value-focused renovations",
            "Classic home updates",
            "Long-lasting quality",
        ],
    },
    {
        slug: "point-breeze",
        name: "Point Breeze",
        county: "Allegheny",
        description: "Point Breeze's grand homes deserve grand renovations. Our team creates luxurious kitchens and spa-like bathrooms that match the elegance of this historic Pittsburgh neighborhood.",
        highlights: [
            "Luxury renovation experience",
            "Historic home preservation",
            "Elegant design solutions",
        ],
    },
    {
        slug: "bloomfield",
        name: "Bloomfield",
        county: "Allegheny",
        description: "Pittsburgh's Little Italy is home to charming row houses that benefit from thoughtful renovation. We help Bloomfield homeowners modernize while preserving the neighborhood's character.",
        highlights: [
            "Row house specialists",
            "Character preservation",
            "Thoughtful modernization",
        ],
    },
    {
        slug: "highland-park",
        name: "Highland Park",
        county: "Allegheny",
        description: "Highland Park's tree-lined streets and beautiful homes deserve quality remodeling. From Arts and Crafts bungalows to Colonial revivals, we respect your home's history while adding modern comfort.",
        highlights: [
            "Period-appropriate updates",
            "Arts and Crafts expertise",
            "Quality craftsmanship",
        ],
    },
    {
        slug: "sewickley",
        name: "Sewickley",
        county: "Allegheny",
        description: "Sewickley's charming village atmosphere and upscale homes require a contractor with refined taste. True Pittsburgh Remodeling delivers premium kitchen and bathroom renovations worthy of this prestigious community.",
        highlights: [
            "Upscale home experience",
            "Premium finishes",
            "Refined design sense",
        ],
    },
    {
        slug: "bethel-park",
        name: "Bethel Park",
        county: "Allegheny",
        description: "Bethel Park families trust True Pittsburgh Remodeling for kitchen and bathroom updates. We help you transform your home into the space your family deserves.",
        highlights: [
            "Family-home focus",
            "Practical design solutions",
            "Budget-friendly options",
        ],
    },
    {
        slug: "upper-st-clair",
        name: "Upper St. Clair",
        county: "Allegheny",
        description: "Upper St. Clair homeowners expect excellence, and we deliver. Our team creates stunning kitchens and bathrooms using premium materials and meticulous craftsmanship.",
        highlights: [
            "Premium quality standard",
            "High-end materials",
            "Excellence in execution",
        ],
    },
];

export const areaNames = areas.map((a) => a.name);
