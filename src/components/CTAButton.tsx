import Link from "next/link";

interface CTAButtonProps {
    href: string;
    variant?: "primary" | "secondary" | "outline";
    size?: "sm" | "md" | "lg";
    children: React.ReactNode;
    className?: string;
    external?: boolean;
}

export default function CTAButton({
    href,
    variant = "primary",
    size = "md",
    children,
    className = "",
    external = false,
}: CTAButtonProps) {
    const baseStyles =
        "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200";

    const variants = {
        primary: "bg-accent text-white hover:bg-accent-hover shadow-lg hover:shadow-xl",
        secondary: "bg-charcoal text-white hover:bg-charcoal/90",
        outline:
            "border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white",
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };

    const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    if (external) {
        return (
            <a
                href={href}
                className={combinedStyles}
                target="_blank"
                rel="noopener noreferrer"
            >
                {children}
            </a>
        );
    }

    // Handle tel: and sms: links
    if (href.startsWith("tel:") || href.startsWith("sms:")) {
        return (
            <a href={href} className={combinedStyles}>
                {children}
            </a>
        );
    }

    return (
        <Link href={href} className={combinedStyles}>
            {children}
        </Link>
    );
}
