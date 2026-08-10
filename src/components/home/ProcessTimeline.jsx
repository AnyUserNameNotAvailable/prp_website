import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const steps = [
    {
        number: '01',
        title: 'Assessment',
        subtitle: 'Understanding Your Story',
        description:
            'A compassionate, strengths-based evaluation that listens to your goals, preferences, and personal history. No judgment — only clarity.',
    },
    {
        number: '02',
        title: 'Planning',
        subtitle: 'Charting the Course Together',
        description:
            'A collaborative rehabilitation plan shaped around what matters to you — your milestones, your pace, your definition of progress.',
    },
    {
        number: '03',
        title: 'Integration',
        subtitle: 'Skill Building in Real Life',
        description:
            'Hands-on practice in real-world settings. Our specialists walk alongside you as you develop skills for independent, fulfilling living.',
    },
    {
        number: '04',
        title: 'Flourishing',
        subtitle: 'Sustaining the Light',
        description:
            'Ongoing support, graduated independence, and community connections that endure long after formal services conclude.',
    },
];

export default function ProcessTimeline() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="process" ref={ref} className="py-24 md:py-32 bg-muted/40">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">
                        The Continuum of Care
                    </p>
                    <h2 className="font-heading text-3xl md:text-5xl font-medium tracking-tight mb-6">
                        A Clear, Compassionate Roadmap
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Recovery is not a straight line — but having a path makes all the difference.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* The gold "Horizon Line" */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border">
                        <motion.div
                            initial={{ height: 0 }}
                            animate={isInView ? { height: '100%' } : {}}
                            transition={{ duration: 2, ease: 'easeOut', delay: 0.3 }}
                            className="w-px bg-primary origin-top"
                        />
                    </div>

                    <div className="space-y-16 md:space-y-24">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 40 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.7, delay: 0.4 + index * 0.2 }}
                                className={`relative flex items-start gap-8 md:gap-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}
                            >
                                {/* Number dot */}
                                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

                                {/* Spacer for mobile */}
                                <div className="w-16 md:hidden flex-shrink-0" />

                                {/* Content */}
                                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-20 md:text-right' : 'md:pl-20'}`}>
                                    <span className="font-heading text-6xl md:text-8xl font-light text-border/80 leading-none block mb-2">
                                        {step.number}
                                    </span>
                                    <h3 className="font-heading text-2xl md:text-3xl font-medium mb-1">
                                        {step.title}
                                    </h3>
                                    <p className="text-primary text-sm font-medium mb-4">{step.subtitle}</p>
                                    <p className="text-muted-foreground text-base leading-relaxed max-w-md inline-block">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Empty space for opposite side */}
                                <div className="hidden md:block flex-1" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}