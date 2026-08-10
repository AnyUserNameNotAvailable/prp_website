import React from 'react';
import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FloatingCTA() {
    return (
        <>
            {/* Mobile: Floating phone button */}
            <a
                href="tel:+1234567890"
                className="md:hidden fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg shadow-primary/25 hover:scale-105 transition-transform"
            >
                <Phone className="w-5 h-5" />
            </a>

            {/* Desktop: Sticky side CTA */}
            <div className="hidden md:block fixed right-0 top-1/2 -translate-y-1/2 z-40">
                <Link
                    to="/referral"
                    className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded-l-xl text-sm font-medium shadow-lg shadow-primary/20 hover:pr-6 transition-all duration-300"
                    style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
                >
                    Request a Call
                </Link>
            </div>
        </>
    );
}