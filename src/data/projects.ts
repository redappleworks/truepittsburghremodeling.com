export interface Project {
    slug: string;
    title: string;
    area: string;
    category: "Kitchen" | "Bathroom" | "Full Renovation";
    timeline: string;
    shortDescription: string;
    description: string;
    features: string[];
    beforeImage: string;
    afterImage: string;
    galleryImages: string[];
    featured: boolean;
}

export const projects: Project[] = [
    {
        slug: "mt-lebanon-kitchen-transformation",
        title: "Modern Kitchen Transformation",
        area: "Mt. Lebanon",
        category: "Kitchen",
        timeline: "4 weeks",
        shortDescription: "Complete kitchen overhaul with custom cabinetry and quartz countertops.",
        description: "This Mt. Lebanon kitchen was transformed from a dated 1990s layout into a bright, modern space. We removed a partition wall to open the kitchen to the living area, installed custom shaker cabinets, and added a stunning waterfall quartz island. The homeowners now have a functional, beautiful kitchen perfect for entertaining.",
        features: [
            "Custom shaker-style cabinetry",
            "Quartz waterfall island",
            "Under-cabinet LED lighting",
            "New stainless steel appliances",
            "Porcelain tile flooring",
        ],
        beforeImage: "/projects/images/kitchen-modern.png",
        afterImage: "/projects/images/kitchen-modern.png",
        galleryImages: [
            "/projects/images/kitchen-modern.png",
        ],
        featured: true,
    },
    {
        slug: "squirrel-hill-master-bath",
        title: "Spa-Inspired Master Bathroom",
        area: "Squirrel Hill",
        category: "Bathroom",
        timeline: "3 weeks",
        shortDescription: "Luxurious master bath with walk-in shower and freestanding tub.",
        description: "This Squirrel Hill master bathroom was completely reimagined as a spa-like retreat. We installed a frameless glass walk-in shower with rainfall showerhead, a freestanding soaking tub, and custom double vanity. Heated floors and modern fixtures complete this tranquil escape.",
        features: [
            "Frameless glass walk-in shower",
            "Freestanding soaking tub",
            "Heated porcelain tile floors",
            "Custom double vanity",
            "Rainfall showerhead",
        ],
        beforeImage: "/projects/images/bathroom-spa.png",
        afterImage: "/projects/images/bathroom-spa.png",
        galleryImages: [
            "/projects/images/bathroom-spa.png",
        ],
        featured: true,
    },
    {
        slug: "shadyside-contemporary-kitchen",
        title: "Contemporary Kitchen Redesign",
        area: "Shadyside",
        category: "Kitchen",
        timeline: "5 weeks",
        shortDescription: "Sleek contemporary kitchen with European-style cabinets.",
        description: "This Shadyside row home kitchen was transformed with a contemporary European aesthetic. Flat-panel cabinets in a warm gray tone pair perfectly with white quartz countertops. We maximized storage with floor-to-ceiling uppers and added a breakfast bar for casual dining.",
        features: [
            "European flat-panel cabinetry",
            "White quartz countertops",
            "Floor-to-ceiling storage",
            "Breakfast bar seating",
            "Integrated appliances",
        ],
        beforeImage: "/projects/images/kitchen-contemporary.png",
        afterImage: "/projects/images/kitchen-contemporary.png",
        galleryImages: [
            "/projects/images/kitchen-contemporary.png",
        ],
        featured: true,
    },
    {
        slug: "fox-chapel-guest-bath",
        title: "Elegant Guest Bathroom",
        area: "Fox Chapel",
        category: "Bathroom",
        timeline: "2 weeks",
        shortDescription: "Classic guest bath renovation with timeless finishes.",
        description: "This Fox Chapel guest bathroom was updated with timeless elegance in mind. We installed marble-look porcelain tile, a furniture-style vanity, and brushed brass fixtures. The result is a welcoming space for guests that will look beautiful for years to come.",
        features: [
            "Marble-look porcelain tile",
            "Furniture-style vanity",
            "Brushed brass fixtures",
            "Frameless mirror",
            "New lighting fixtures",
        ],
        beforeImage: "/projects/images/fox-chapel-before.png",
        afterImage: "/projects/images/fox-chapel-after.png",
        galleryImages: [
            "/projects/images/fox-chapel-before.png",
            "/projects/images/fox-chapel-after.png",
        ],
        featured: false,
    },
    {
        slug: "lawrenceville-full-renovation",
        title: "Complete Home Renovation",
        area: "Lawrenceville",
        category: "Full Renovation",
        timeline: "8 weeks",
        shortDescription: "Gut renovation of kitchen and two bathrooms in a historic home.",
        description: "This Lawrenceville row house received a complete gut renovation of its kitchen and two bathrooms. We preserved original architectural details while modernizing all mechanical systems. The kitchen features an open layout with shaker cabinets and butcher block island, while both bathrooms were updated with classic subway tile and period-appropriate fixtures.",
        features: [
            "Complete gut renovation",
            "Preserved historic details",
            "New plumbing and electrical",
            "Custom kitchen with island",
            "Two fully renovated bathrooms",
        ],
        beforeImage: "/projects/images/lawrenceville-before.png",
        afterImage: "/projects/images/lawrenceville-after.png",
        galleryImages: [
            "/projects/images/lawrenceville-before.png",
            "/projects/images/lawrenceville-after.png",
        ],
        featured: false,
    },
    {
        slug: "oakland-small-bath-remodel",
        title: "Small Bath Big Impact",
        area: "Oakland",
        category: "Bathroom",
        timeline: "2 weeks",
        shortDescription: "Smart updates maximize this compact bathroom space.",
        description: "This Oakland apartment bathroom proved that small spaces can have big impact. We replaced the vanity with a floating design to open up floor space, installed large-format tile to reduce grout lines, and added a glass shower enclosure. Strategic lighting and a large mirror complete the transformation.",
        features: [
            "Floating vanity design",
            "Large-format porcelain tile",
            "Glass shower enclosure",
            "LED mirror with storage",
            "Space-saving fixtures",
        ],
        beforeImage: "/projects/images/oakland-before.png",
        afterImage: "/projects/images/oakland-after.png",
        galleryImages: [
            "/projects/images/oakland-before.png",
            "/projects/images/oakland-after.png",
        ],
        featured: false,
    },
];

export const featuredProjects = projects.filter((p) => p.featured);
