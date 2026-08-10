import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

export default function ReferralCTA() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section ref={ref} className="py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="relative rounded-3xl overflow-hidden"
                >
                    {/* Background */}
                    <div className="absolute inset-0 bg-accent" />
                    <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
                        <img
                            src="."
                            alt="Unfolding fern leaf symbolizing growth"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="relative z-10 px-8 py-16 md:px-16 md:py-24">
                        <div className="max-w-2xl">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={isInView ? { width: '3rem' } : {}}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="h-px bg-primary mb-8"
                            />
                            <h2 className="font-heading text-3xl md:text-5xl font-medium text-accent-foreground tracking-tight mb-6">
                                Begin the Conversation
                            </h2>
                            <p className="text-accent-foreground/70 text-lg mb-10 leading-relaxed">
                                Whether you're a family member, social worker, or healthcare professional —
                                we make the referral process simple, respectful, and confidential.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/referral">
                                    <Button size="lg" className="rounded-full px-8 text-base font-body group">
                                        Make a Referral
                                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>
                                <a href="tel:+1234567890">
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        className="rounded-full px-8 text-base font-body border-accent-foreground/20 text-accent-foreground hover:bg-accent-foreground/5"
                                    >
                                        Call Us Now
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}