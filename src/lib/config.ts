// Business Configuration
export const BUSINESS_NAME = "Aspen Remodeling";
export const BUSINESS_PHONE = "(555) 123-4567";
export const BUSINESS_EMAIL = "contact@aspenremodeling.com";
export const BUSINESS_TAGLINE = "Kitchen & Bathroom Remodeling in Pittsburgh, PA";

// Google Business Profile URL (update with actual URL when available)
export const GOOGLE_BUSINESS_PROFILE_URL = "https://g.page/r/PLACEHOLDER";

// Contact Form Settings
export const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL || "contact@redappleworks.com";
export const CONTACT_FROM_EMAIL = "Aspen Remodeling <contact@redappleworks.com>";

// Feature Flags
export const IS_LICENSED_AND_INSURED = false; // Set to true only if verified

// Service Areas
export const PRIMARY_SERVICE_AREA = "Pittsburgh, PA";
export const SERVICE_AREAS_SHORT = ["Pittsburgh", "Mt. Lebanon", "Squirrel Hill", "Shadyside", "Fox Chapel"];

// Site URL (update for production)
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://aspenremodeling.com";

// Metadata defaults
export const DEFAULT_METADATA = {
    title: `${BUSINESS_NAME} | Kitchen & Bathroom Remodeling Pittsburgh, PA`,
    description: `${BUSINESS_NAME} delivers quality kitchen and bathroom remodeling in Pittsburgh, PA. Clean workmanship, clear timelines, and a smooth experience. Get a free estimate today.`,
    keywords: [
        "kitchen remodeling Pittsburgh",
        "bathroom remodeling Pittsburgh",
        "Pittsburgh contractor",
        "home renovation Pittsburgh PA",
        "kitchen renovation",
        "bathroom renovation",
    ],
};
