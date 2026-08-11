import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';


export default function PhilosophyBand() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section ref={ref} className="py-20 md:py-28 border-y border-border">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <blockquote className="font-heading text-2xl md:text-4xl lg:text-5xl font-light italic text-foreground/80 leading-snug max-w-4xl mx-auto">
                        "We do not fix people. We create the conditions
                        <span className="text-primary"> in which they remember </span>
                        how to flourish."
                    </blockquote>
                    <div className="mt-8 flex items-center justify-center gap-4">
                        <div className="w-8 h-px bg-primary" />
                        <span className="text-sm text-muted-foreground tracking-wider uppercase">Our Philosophy</span>
                        <div className="w-8 h-px bg-primary" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}