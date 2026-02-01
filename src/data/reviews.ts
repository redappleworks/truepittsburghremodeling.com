export interface Review {
    id: string;
    author: string;
    location: string;
    rating: number;
    text: string;
    projectType: "Kitchen" | "Bathroom" | "Full Renovation" | "Other";
    date: string;
    featured: boolean;
}

export const reviews: Review[] = [
    {
        id: "review-1",
        author: "Sarah M.",
        location: "Mt. Lebanon",
        rating: 5,
        text: "True Pittsburgh Remodeling transformed our outdated kitchen into a modern masterpiece. The team was professional, clean, and finished on schedule. We couldn't be happier with the results!",
        projectType: "Kitchen",
        date: "2024-11",
        featured: true,
    },
    {
        id: "review-2",
        author: "Michael T.",
        location: "Squirrel Hill",
        rating: 5,
        text: "They completely renovated our master bathroom and it looks like something out of a magazine. Great communication throughout the project. Highly recommend!",
        projectType: "Bathroom",
        date: "2024-10",
        featured: true,
    },
    {
        id: "review-3",
        author: "Jennifer & David K.",
        location: "Fox Chapel",
        rating: 5,
        text: "From the initial estimate to the final walkthrough, everything was handled professionally. Our kitchen remodel was a big investment and they made it worth every penny.",
        projectType: "Kitchen",
        date: "2024-09",
        featured: true,
    },
    {
        id: "review-4",
        author: "Robert P.",
        location: "Shadyside",
        rating: 5,
        text: "I appreciated how they protected our home during the renovation. Clean worksite every day, and the crew was always respectful. The bathroom looks amazing.",
        projectType: "Bathroom",
        date: "2024-08",
        featured: false,
    },
    {
        id: "review-5",
        author: "Lisa W.",
        location: "Lawrenceville",
        rating: 5,
        text: "We had both our kitchen and bathroom renovated. The coordination was seamless and the quality is excellent. Three months in and we still love walking into these rooms.",
        projectType: "Full Renovation",
        date: "2024-07",
        featured: false,
    },
    {
        id: "review-6",
        author: "Thomas H.",
        location: "Oakland",
        rating: 5,
        text: "Responsive, fair pricing, and quality craftsmanship. They helped us navigate some unexpected plumbing issues without blowing our budget. Would hire again.",
        projectType: "Bathroom",
        date: "2024-06",
        featured: false,
    },
    {
        id: "review-7",
        author: "Amanda C.",
        location: "Dormont",
        rating: 5,
        text: "True Pittsburgh Remodeling did an incredible job with our small bathroom. They maximized every inch of space and the design suggestions were spot on.",
        projectType: "Bathroom",
        date: "2024-05",
        featured: false,
    },
    {
        id: "review-8",
        author: "James & Mary B.",
        location: "Brookline",
        rating: 5,
        text: "After getting several estimates, we chose True Pittsburgh for their transparency and detailed proposal. The kitchen exceeded our expectations.",
        projectType: "Kitchen",
        date: "2024-04",
        featured: false,
    },
    {
        id: "review-9",
        author: "Christine L.",
        location: "Point Breeze",
        rating: 5,
        text: "The tile work in our bathroom is flawless. You can tell they take pride in their work. Very pleased with the attention to detail.",
        projectType: "Bathroom",
        date: "2024-03",
        featured: false,
    },
    {
        id: "review-10",
        author: "Daniel S.",
        location: "Bloomfield",
        rating: 5,
        text: "Great experience from start to finish. They helped us pick materials that fit our budget without sacrificing quality. Our new kitchen is beautiful.",
        projectType: "Kitchen",
        date: "2024-02",
        featured: false,
    },
    {
        id: "review-11",
        author: "Patricia N.",
        location: "Highland Park",
        rating: 5,
        text: "Renovating our 1920s bathroom was no small task, but they handled the challenges perfectly. They even preserved some original features we loved.",
        projectType: "Bathroom",
        date: "2024-01",
        featured: false,
    },
    {
        id: "review-12",
        author: "Kevin R.",
        location: "Sewickley",
        rating: 5,
        text: "Professional crew, clear communication, and a stunning result. Our guests always compliment our new kitchen. Couldn't have asked for a better experience.",
        projectType: "Kitchen",
        date: "2023-12",
        featured: false,
    },
];

export const featuredReviews = reviews.filter((r) => r.featured);
