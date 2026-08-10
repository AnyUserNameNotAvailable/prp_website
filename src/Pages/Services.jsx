import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Users, Home as HomeIcon, Briefcase, Brain, Shield } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const services = [
    {
        icon: HomeIcon,
        title: 'Communication Interventions',
        description:
            'Enhance your interpersonal skills and relationships through personalized coaching and practice designed to rebuild confidence in social interactions. From basic conversation to complex social cues, we meet you where you are.',
        outcomes: ['Improved communication skills', 'Increased self-reported confidence', 'Stronger social connections'],
        image: 'community1.jpg',
        imageAlt: 'Person standing confidently by a sunlit window',
    },
    {
        icon: Users,
        title: 'Social Skills & Community Integration',
        description:
            'Guided practice in real-world social settings — from one-on-one conversation to group activities. We help rebuild the bridges between you and the world.',
        outcomes: ['75% of participants report stronger relationships', 'Reduced social isolation'],
        image: 'community2.jpg',
        imageAlt: 'Two people walking together on a sun-drenched path',
    },
    {
        icon: Heart,
        title: 'Anger and Stress Management',
        description:
            'Techniques and strategies to manage anger and stress effectively, promoting emotional regulation and overall well-being.',
        outcomes: ['Reduced anger episodes', 'Improved stress management skills'],
        image: 'office1.jpg',
        imageAlt: 'Person confidently browsing a farmers market',
    },
    {
        icon: Users,
        title: 'Independent Living Skills',
        description:
            'Guided practice in real-world settings — from managing daily routines to navigating community resources. We help build the skills needed for independent, fulfilling living.',
        outcomes: ['75% of participants report stronger relationships', 'Reduced social isolation'],
        image: 'livingskills.jpg',
        imageAlt: 'Two people walking together on a sun-drenched path',

    },
    {
        icon: Briefcase,
        title: 'Resource Navigation & Vocational Support',
        description:
            'Career interest assessments, resume building, interview skills, and supported employment placements. Discovering purpose through meaningful work.',
        outcomes: ['60% employment placement rate', 'Increased sense of purpose'],
        image: 'together.jpg',
        imageAlt: 'Person looking out at a cityscape from a rooftop terrace',
    },
    {
        icon: Brain,
        title: 'Symptom Management',
        description:
            'Developing personalized coping strategies and wellness routines. Learning to recognize triggers, practice self-regulation, and build resilience.',
        outcomes: ['Reduced crisis episodes', 'Greater self-awareness and control'],
        image: 'Meditate.jpg',
        imageAlt: 'Unfolding fern leaf symbolizing growth and renewal',
    },
    {
        icon: Shield,
        title: 'Nutrition & Medication Management',
        description:
            'Physical health support including nutrition guidance, exercise routines, sleep hygiene, and coordination with medical providers. A whole-person approach.',
        outcomes: ['Improved physical health markers', 'Better sleep quality'],
        image: 'Meds.jpg',
        imageAlt: 'Hands tending a community garden in golden light',
    },
    {
        icon: Heart,
        title: 'Hygiene & Self-Care',
        description:
            'Personalized support in maintaining daily hygiene routines, self-care practices, and overall personal well-being. Building confidence and independence through consistent habits.',
        outcomes: ['Improved personal hygiene', 'Increased self-confidence', 'Enhanced daily routines'],
        image: 'wash1.jpg',
        imageAlt: 'Person practicing self-care in a bright, clean environment',
    }
];

function ServiceCard({ service, index }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });
    const Icon = service.icon;
    const isEven = index % 2 === 0;

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${!isEven ? 'lg:direction-rtl' : ''
                }`}
        >
            <div className={`${!isEven ? 'lg:order-2' : ''}`}>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                    <img
                        src={service.image}
                        alt={service.imageAlt}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-2xl md:text-3xl font-medium mb-4">{service.title}</h3>
                <p className="text-muted-foreground text-base leading-relaxed mb-6">{service.description}</p>

                <div className="space-y-2 mb-8">
                    <p className="text-sm font-medium text-foreground">Measured Outcomes:</p>
                    {service.outcomes.map((outcome, i) => (
                        <div key={i} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{outcome}</span>
                        </div>
                    ))}
                </div>

                <Link to="/referral">
                    <Button variant="outline" className="rounded-full px-6 font-body text-sm group">
                        Begin This Journey
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </Link>
            </div>
        </motion.div>
    );
}

export default function Services() {
    const headerRef = useRef(null);
    const isHeaderInView = useInView(headerRef, { once: true });

    return (
        <div className="pt-20">
            {/* Hero */}
            <section ref={headerRef} className="py-20 md:py-32 bg-muted/40">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">
                            Our Services
                        </p>
                        <h1 className="font-heading text-4xl md:text-6xl font-medium tracking-tight mb-6">
                            Free Consultations
                        </h1>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            Each program is designed not as a clinical checklist, but as a living pathway —
                            adapted to your unique strengths, circumstances, and aspirations.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 md:py-28">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-24 md:space-y-32">
                    {services.map((service, index) => (
                        <ServiceCard key={service.title} service={service} index={index} />
                    ))}
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-20 md:py-28 bg-accent">
                <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="font-heading text-3xl md:text-4xl font-medium text-accent-foreground mb-6">
                        Every journey begins with a single step
                    </h2>
                    <p className="text-accent-foreground/70 text-lg mb-10">
                        Our team is ready to listen, answer your questions, and guide you through the referral process.
                    </p>
                    <Link to="/referral">
                        <Button size="lg" className="rounded-full px-10 text-base font-body">
                            Start the Conversation
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}