"use client";

import { useState } from "react";

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQAccordionProps {
    items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className="space-y-4">
            {items.map((item, index) => (
                <div
                    key={index}
                    className="bg-white rounded-2xl border-2 border-charcoal/10 overflow-hidden"
                >
                    <button
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        className="w-full flex items-center justify-between p-5 text-left"
                        aria-expanded={openIndex === index}
                    >
                        <span className="font-semibold text-charcoal pr-4">
                            {item.question}
                        </span>
                        <span
                            className={`text-accent transition-transform ${openIndex === index ? "rotate-45" : ""
                                }`}
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 4v16m8-8H4"
                                />
                            </svg>
                        </span>
                    </button>
                    {openIndex === index && (
                        <div className="px-5 pb-5">
                            <p className="text-charcoal/70">{item.answer}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
