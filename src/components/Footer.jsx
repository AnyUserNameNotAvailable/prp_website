import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

const newsLinks = [
    {
        label: 'Psychiatric Times',
        href: 'https://www.psychiatrictimes.com',
        description: 'Research from the National Institute of Mental Health',
    },
    {
        label: 'Psych Central News',
        href: 'https://psychcentral.com/news',
        description: 'Clinical news and lived-experience perspectives',
    },
    {
        label: 'ScienceDaily – Mental Health',
        href: 'https://www.sciencedaily.com/news/mind_brain/mental_health/',
        description: 'Latest peer-reviewed research summaries',
    },
    {
        label: 'CDC Mental Health',
        href: 'https://www.cdc.gov/mental-health/index.html',
        description: 'Data, resources, and public health guidance',
    },
    {
        label: 'WebMD Mental Health News',
        href: 'https://www.webmd.com/mental-health/news/default.htm',
        description: 'Consumer-friendly coverage of new findings',
    },
];

export default function Footer() {
    return (
        <footer className="bg-accent text-accent-foreground">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
                                <span className="text-primary-foreground font-heading text-sm font-semibold">P</span>
                            </div>
                            <span className="font-heading text-xl font-semibold text-accent-foreground">
                                Peace and Wellness Group
                            </span>
                        </div>
                        <p className="text-accent-foreground/70 text-sm leading-relaxed max-w-xs">
                            A Psychiatric Rehabilitation Program dedicated to the restoration of dignity,
                            independence, and community belonging.
                        </p>
                    </div>

                    {/* Navigate */}
                    <div>
                        <h4 className="font-heading text-lg mb-6">Navigate</h4>
                        <div className="space-y-3">
                            {[
                                { label: 'Home', path: '/' },
                                { label: 'Our Services', path: '/services' },
                                { label: 'Make a Referral', path: '/referral' },
                            ].map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className="block text-sm text-accent-foreground/70 hover:text-primary transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Mental Health News */}
                    <div>
                        <h4 className="font-heading text-lg mb-6">Mental Health News</h4>
                        <div className="space-y-4">
                            {newsLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-start gap-2"
                                >
                                    <ExternalLink className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-accent-foreground/40 group-hover:text-primary transition-colors" />
                                    <div>
                                        <p className="text-sm text-accent-foreground/70 group-hover:text-primary transition-colors leading-snug">
                                            {link.label}
                                        </p>
                                        <p className="text-xs text-accent-foreground/40 leading-snug mt-0.5">
                                            {link.description}
                                        </p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Reach Us */}
                    <div>
                        <h4 className="font-heading text-lg mb-6">Reach Us</h4>
                        <div className="space-y-4">
                            <a
                                href="tel:+12026964604"
                                className="flex items-center gap-3 text-sm text-accent-foreground/70 hover:text-primary transition-colors"
                            >
                                <Phone className="w-4 h-4 flex-shrink-0" />
                                (202) 696-4604
                            </a>
                            <a
                                href="mailto:peacewellnessgroup@gmail.com"
                                className="flex items-center gap-3 text-sm text-accent-foreground/70 hover:text-primary transition-colors"
                            >
                                <Mail className="w-4 h-4 flex-shrink-0" />
                                peacewellnessgroup@gmail.com
                            </a>
                            <div className="flex items-start gap-3 text-sm text-accent-foreground/70">
                                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                                <span>3044 Greenmount Avenue, Baltimore, MD 21218</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-accent-foreground/10">
                    <p className="text-sm text-accent-foreground/40 text-center">
                        © {new Date().getFullYear()} Peace and Wellness Group. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}