import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Carf() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section ref={ref} className="py-20 md:py-28 border-y border-border bg-background">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    // Grid: Stacks vertically on mobile, splits 1/3 image and 2/3 text on desktop
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
                >
                    {/* Left Side: Image Container */}
                    <div className="flex justify-center md:justify-start">
                        <div className="w-32 h-32 md:w-48 md:h-48 rounded-2xl overflow-hidden">
                            <img
                                src="/CARF.png"
                                alt="CARF Accreditation Seal"
                                className="w-full h-full object-contain p-4 bg-white"
                            />
                        </div>
                    </div>

                    {/* Right Side: Explanation Text (spans 2 columns on desktop) */}
                    <div className="md:col-span-2 space-y-4 text-left">
                        <span className="text-xs font-semibold tracking-wider text-primary uppercase">
                            Gold Standard Certification
                        </span>
                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                            Our CARF® Accreditation
                        </h2>
                        <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                            CARF (Commission on Accreditation of Rehabilitation Facilities) is an independent, 
                            nonprofit organization that evaluates health and human service providers. This accreditation 
                            ensures our programs meet strict, internationally recognized standards for quality, safety, 
                            and patient-centered care so you can confidently flourish.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
