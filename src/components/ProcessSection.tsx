const processSteps = [
    {
        number: "01",
        title: "Free Consultation",
        description:
            "We visit your home, discuss your vision, and provide a detailed estimate—no pressure, no obligation.",
    },
    {
        number: "02",
        title: "Design & Planning",
        description:
            "We finalize materials, create a timeline, and handle all the details so you know exactly what to expect.",
    },
    {
        number: "03",
        title: "Quality Build",
        description:
            "Our team completes your project with clean workmanship, daily cleanup, and clear communication throughout.",
    },
];

export default function ProcessSection() {
    return (
        <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
                <div key={index} className="relative">
                    {/* Connector line (hidden on mobile and last item) */}
                    {index < processSteps.length - 1 && (
                        <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-charcoal/10" />
                    )}

                    <div className="relative bg-white rounded-2xl border-2 border-charcoal/10 p-6 text-center shadow-card">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent text-white text-xl font-bold mb-4">
                            {step.number}
                        </div>
                        <h3 className="text-xl font-bold text-charcoal mb-3">
                            {step.title}
                        </h3>
                        <p className="text-charcoal/70">{step.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
