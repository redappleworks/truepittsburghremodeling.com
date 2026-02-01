"use client";

import { useState } from "react";
import { BUSINESS_PHONE } from "@/lib/config";

interface FormData {
    name: string;
    phone: string;
    email: string;
    zip: string;
    projectType: string;
    message: string;
    preferredContactMethod: string;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        phone: "",
        email: "",
        zip: "",
        projectType: "",
        message: "",
        preferredContactMethod: "",
    });
    const [status, setStatus] = useState<FormStatus>("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        setErrorMessage("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus("success");
                setFormData({
                    name: "",
                    phone: "",
                    email: "",
                    zip: "",
                    projectType: "",
                    message: "",
                    preferredContactMethod: "",
                });
            } else {
                setStatus("error");
                setErrorMessage(data.error || "Something went wrong. Please try again.");
            }
        } catch {
            setStatus("error");
            setErrorMessage("Unable to submit form. Please try again later.");
        }
    };

    if (status === "success") {
        return (
            <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8 text-center">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-charcoal mb-2">
                    Thank You for Reaching Out!
                </h3>
                <p className="text-charcoal/70 mb-4">
                    We&apos;ve received your request and will be in touch within 24 hours
                    using your preferred contact method.
                </p>
                <p className="text-charcoal/70">
                    Need immediate assistance? Call us at{" "}
                    <a
                        href={`tel:${BUSINESS_PHONE.replace(/[^0-9]/g, "")}`}
                        className="text-accent font-semibold"
                    >
                        {BUSINESS_PHONE}
                    </a>
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {status === "error" && (
                <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4 text-red-700">
                    {errorMessage}
                </div>
            )}

            <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                    <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-charcoal mb-2"
                    >
                        Full Name *
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-charcoal/20 rounded-xl focus:border-accent focus:outline-none transition-colors"
                        placeholder="John Smith"
                    />
                </div>

                {/* Phone */}
                <div>
                    <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-charcoal mb-2"
                    >
                        Phone Number *
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-charcoal/20 rounded-xl focus:border-accent focus:outline-none transition-colors"
                        placeholder="(412) 555-0199"
                    />
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {/* Email */}
                <div>
                    <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-charcoal mb-2"
                    >
                        Email Address *
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-charcoal/20 rounded-xl focus:border-accent focus:outline-none transition-colors"
                        placeholder="john@example.com"
                    />
                </div>

                {/* Zip */}
                <div>
                    <label
                        htmlFor="zip"
                        className="block text-sm font-semibold text-charcoal mb-2"
                    >
                        Zip Code *
                    </label>
                    <input
                        type="text"
                        id="zip"
                        name="zip"
                        required
                        value={formData.zip}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-charcoal/20 rounded-xl focus:border-accent focus:outline-none transition-colors"
                        placeholder="15213"
                        maxLength={10}
                    />
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {/* Project Type */}
                <div>
                    <label
                        htmlFor="projectType"
                        className="block text-sm font-semibold text-charcoal mb-2"
                    >
                        Project Type *
                    </label>
                    <select
                        id="projectType"
                        name="projectType"
                        required
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-charcoal/20 rounded-xl focus:border-accent focus:outline-none transition-colors bg-white"
                    >
                        <option value="">Select project type</option>
                        <option value="Kitchen">Kitchen Remodel</option>
                        <option value="Bathroom">Bathroom Remodel</option>
                        <option value="Full Renovation">Full Renovation</option>
                        <option value="Tile & Flooring">Tile & Flooring</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                {/* Preferred Contact Method */}
                <div>
                    <label
                        htmlFor="preferredContactMethod"
                        className="block text-sm font-semibold text-charcoal mb-2"
                    >
                        Preferred Contact Method *
                    </label>
                    <select
                        id="preferredContactMethod"
                        name="preferredContactMethod"
                        required
                        value={formData.preferredContactMethod}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-charcoal/20 rounded-xl focus:border-accent focus:outline-none transition-colors bg-white"
                    >
                        <option value="">Select method</option>
                        <option value="Call">Phone Call</option>
                        <option value="Text">Text Message</option>
                        <option value="Email">Email</option>
                    </select>
                </div>
            </div>

            {/* Message */}
            <div>
                <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-charcoal mb-2"
                >
                    Tell Us About Your Project
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-charcoal/20 rounded-xl focus:border-accent focus:outline-none transition-colors resize-none"
                    placeholder="Describe your project, timeline, or any questions you have..."
                />
            </div>

            {/* Submit */}
            <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full bg-accent text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-accent-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {status === "submitting" ? "Submitting..." : "Get Your Free Estimate"}
            </button>

            <p className="text-sm text-charcoal/60 text-center">
                We respect your privacy. Your information will only be used to respond
                to your inquiry.
            </p>
        </form>
    );
}
