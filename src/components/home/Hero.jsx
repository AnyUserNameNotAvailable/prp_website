import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Carf from './Carf'; // Ensure you import your card component

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-end pb-20 md:pb-32 overflow-hidden">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted" />

            {/* Hero image overlay */}
            {/* <div className="absolute inset-0 opacity-20">
                <img
                    src="."
                    alt="Hands tending a community garden in golden light"
                    className="w-full h-full object-cover"
                />
            </div> */}

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
                {/* Grid container splitting the space 50/50 on desktop */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
                    
                    {/* Left Column: Text and Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        className="max-w-3xl"
                    >
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '4rem' }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="h-px bg-primary mb-8"
                        />

                        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-medium text-foreground tracking-tight mb-8">
                            Reclaiming the<br />
                            <span className="italic text-primary">Narrative</span> of the Self
                        </h1>

                        <p className="text-muted-foreground text-lg md:text-xl max-w-lg mb-12 font-light leading-relaxed">
                            A psychiatric rehabilitation program built on dignity, independence,
                            and the belief that every person holds the capacity for renewal.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/services" className="inline-block">
                                <Button size="lg" className="rounded-full px-8 text-base font-body">
                                    Discover the Path
                                </Button>
                            </Link>
                            <Link to="/referral" className="inline-block">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="rounded-full px-8 text-base font-body border-foreground/20 hover:bg-foreground/5"
                                >
                                    Make a Referral
                                </Button>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right Column: Card component taking up half the panel */}
                    <motion.div 
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="flex justify-right md:justify-end w-full"
                    >
                        <div className="w-full max-w-2xl">
                            <Carf />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
