import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';

const services = [
    {
        id: 'independent-living',
        number: '01',
        title: 'Independent Living Skills',
        description: 'Building confidence in daily routines — from personal care to household management — so that home feels like home again.',
        image: 'https://media.base44.com/images/public/6a0b5e180fcc5bfa50838747/b6fad027f_generated_3e0797e3.png',
        imageAlt: 'Person standing confidently by a sunlit window',
    },
    {
        id: 'social-skills',
        number: '02',
        title: 'Social & Communication Skills',
        description: 'Rediscovering the art of connection through guided practice in real-world social environments.',
        image: 'https://media.base44.com/images/public/6a0b5e180fcc5bfa50838747/2afcf213c_generated_bc71a747.png',
        imageAlt: 'Two people walking together on a sun-drenched path',
    },
    {
        id: 'community-integration',
        number: '03',
        title: 'Community Integration',
        description: 'Meaningful participation in community life — volunteering, shopping, using public transit — building belonging.',
        image: 'https://media.base44.com/images/public/6a0b5e180fcc5bfa50838747/fd4b13103_generated_7a74ede0.png',
        imageAlt: 'Person confidently browsing a farmers market',
    },
    {
        id: 'vocational',
        number: '04',
        title: 'Vocational Exploration',
        description: 'Discovering purpose through career assessment, job preparation, and supported employment pathways.',
        image: 'https://media.base44.com/images/public/6a0b5e180fcc5bfa50838747/1e1741dd8_generated_289712a1.png',
        imageAlt: 'Person looking out at a cityscape from a rooftop terrace',
    },
];

export default function ServicesPreview() {
    const scrollRef = useRef(null);
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

    const scroll = (direction) => {
        if (!scrollRef.current) return;
        const cardWidth = scrollRef.current.firstChild?.offsetWidth || 400;
        scrollRef.current.scrollBy({
            left: direction === 'left' ? -cardWidth - 24 : cardWidth + 24,
            behavior: 'smooth',
        });
    };

    return (
        <section ref={sectionRef} className="py-24 md:py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
                >
                    <div>
                        <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">
                            Our Programs
                        </p>
                        <h2 className="font-heading text-3xl md:text-5xl font-medium tracking-tight">
                            A Gallery of Growth
                        </h2>
                    </div>

                    <div className="hidden md:flex items-center gap-3">
                        <button
                            onClick={() => scroll('left')}
                            className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Horizontal scroll gallery */}
            <div
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-6 lg:px-8 pb-4"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {services.map((service, index) => (
                    <motion.div
                        key={service.id}
                        initial={{ opacity: 0, x: 60 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: index * 0.15 }}
                        className="flex-shrink-0 w-[80vw] md:w-[55vw] lg:w-[40vw] snap-start group"
                    >
                        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6">
                            <img
                                src={service.image}
                                alt={service.imageAlt}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                                <span className="text-primary-foreground/60 font-heading text-5xl md:text-6xl font-light">
                                    {service.number}
                                </span>
                                <h3 className="font-heading text-2xl md:text-3xl text-primary-foreground mt-2">
                                    {service.title}
                                </h3>
                            </div>
                        </div>
                        <p className="text-muted-foreground text-base leading-relaxed mb-4 px-1">
                            {service.description}
                        </p>
                        <Link
                            to="/services"
                            className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all px-1"
                        >
                            See the Impact <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                ))}
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-12">
                <Link to="/services">
                    <Button variant="outline" size="lg" className="rounded-full px-8 font-body">
                        View All Services
                    </Button>
                </Link>
            </div>
        </section>
    );
}