import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-charcoal mb-4">404</h1>
                <h2 className="text-2xl font-semibold text-charcoal mb-4">
                    Page Not Found
                </h2>
                <p className="text-charcoal/70 mb-8 max-w-md">
                    Sorry, we couldn&apos;t find the page you&apos;re looking for. Let&apos;s
                    get you back on track.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/"
                        className="bg-accent text-white px-6 py-3 rounded-xl font-semibold hover:bg-accent-hover transition-colors"
                    >
                        Go Home
                    </Link>
                    <Link
                        href="/contact"
                        className="border-2 border-charcoal text-charcoal px-6 py-3 rounded-xl font-semibold hover:bg-charcoal hover:text-white transition-colors"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </div>
    );
}
