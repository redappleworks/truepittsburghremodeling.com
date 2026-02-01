import { FileText, Sparkles, Clock, Shield } from "lucide-react";

const trustItems = [
    { icon: FileText, label: "Free Estimates" },
    { icon: Sparkles, label: "Clean Worksite" },
    { icon: Clock, label: "On-Time Projects" },
    { icon: Shield, label: "Quality Materials" },
];

export default function TrustBar() {
    return (
        <section className="bg-white/50 py-6 border-y border-charcoal/10">
            <div className="max-w-3xl mx-auto px-4">
                <div className="grid grid-cols-2 gap-6 md:gap-8">
                    {trustItems.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center gap-2 text-charcoal/80"
                        >
                            <item.icon className="w-5 h-5 text-accent flex-shrink-0" />
                            <span className="font-medium text-sm md:text-base">{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
