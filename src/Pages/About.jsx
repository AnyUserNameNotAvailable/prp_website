import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Shield, Users, Sparkles, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 32 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const values = [
    {
        icon: Heart,
        title: 'Compassion',
        body: 'We meet every client with dignity, empathy, and respect for their lived experience.',
    },
    {
        icon: Shield,
        title: 'Consistency',
        body: 'Families and referral partners can count on reliable communication, follow-through, and care.',
    },
    {
        icon: Users,
        title: 'Connection',
        body: 'We strengthen relationships between clients, families, providers, and the communities around them.',
    },
    {
        icon: Sparkles,
        title: 'Growth',
        body: 'Our work is focused on practical progress that supports confidence, independence, and stability.',
    },
];

const commitments = [
    'Person-centered planning tailored to each client’s goals and strengths',
    'Support for adolescents and adults living with behavioral health needs',
    'Skill-building that reinforces independence in daily life and community settings',
    'Collaboration with families, social workers, providers, and other referral partners',
];

const supportAreas = [
    'Communication and social skills',
    'Independent living and daily routines',
    'Stress, anger, and symptom management',
    'Resource navigation and vocational support',
    'Medication, nutrition, and self-care habits',
    'Community integration and confidence building',
];

function SectionLabel({ children }) {
    return (
        <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">{children}</p>
    );
}

export default function About() {
    return (
        <div className="pt-20">
            <section className="py-20 md:py-32 bg-muted/40">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div {...fadeUp()}>
                            <SectionLabel>About Us</SectionLabel>
                            <h1 className="font-heading text-4xl md:text-6xl font-medium tracking-tight mb-6">
                                A PRP team centered on dignity, trust, and practical support
                            </h1>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                Peace and Wellness Group provides psychiatric rehabilitation services that help
                                clients strengthen everyday skills, build healthy support systems, and move toward
                                greater independence.
                            </p>
                            <p className="text-muted-foreground leading-relaxed mb-10">
                                We serve Baltimore-area individuals and families with a relationship-based approach
                                that values collaboration, consistency, and meaningful progress at every step.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/referral">
                                    <Button size="lg" className="rounded-full px-8 h-14 text-base font-body gap-2">
                                        Make a Referral <ArrowRight className="w-4 h-4" />
                                    </Button>
                                </Link>
                                <Link to="/services">
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="rounded-full px-8 h-14 text-base font-body"
                                    >
                                        Explore Services
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div {...fadeUp(0.15)} className="relative">
                            <div className="rounded-3xl border border-border bg-background p-8 md:p-10 shadow-sm">
                                <SectionLabel>What Clients Can Expect</SectionLabel>
                                <div className="space-y-4">
                                    {commitments.map((item) => (
                                        <div key={item} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                                                {item}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="absolute -bottom-5 -right-5 h-24 w-24 rounded-3xl bg-primary/10 -z-10" />
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-28">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                        <motion.div {...fadeUp()}>
                            <SectionLabel>Our Story</SectionLabel>
                            <h2 className="font-heading text-4xl md:text-5xl font-medium tracking-tight mb-8">
                                Built to support lasting stability in everyday life
                            </h2>
                            <div className="space-y-5 text-muted-foreground leading-relaxed">
                                <p>
                                    Peace and Wellness Group was created to provide psychiatric rehabilitation that
                                    goes beyond symptom response alone. Our focus is helping clients strengthen the
                                    routines, relationships, and skills that make daily life more manageable.
                                </p>
                                <p>
                                    That means meeting people where they are, identifying goals that matter to them,
                                    and building steady progress through practical, individualized support.
                                </p>
                                <p>
                                    We partner closely with referral sources, caregivers, and community supports so
                                    every client receives care that is coordinated, responsive, and grounded in real
                                    needs.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div {...fadeUp(0.15)} className="rounded-3xl bg-primary text-primary-foreground p-10 md:p-12">
                            <SectionLabel>Our Mission</SectionLabel>
                            <h3 className="font-heading text-2xl md:text-3xl font-medium mb-6 text-primary-foreground">
                                Helping people build confidence, independence, and connection
                            </h3>
                            <p className="text-primary-foreground/85 leading-relaxed">
                                Our mission is to provide compassionate psychiatric rehabilitation services that
                                support emotional wellness, life skills, and community belonging for every client we
                                serve.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-32 bg-muted/40">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div {...fadeUp()} className="max-w-2xl mb-16">
                        <SectionLabel>Our Values</SectionLabel>
                        <h2 className="font-heading text-4xl md:text-5xl font-medium tracking-tight">
                            The principles behind our care
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                {...fadeUp(index * 0.1)}
                                className="bg-background rounded-2xl p-8 border border-border/50 flex flex-col gap-5"
                            >
                                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                                    <value.icon className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-heading text-lg font-medium mb-2">{value.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{value.body}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-32">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <motion.div {...fadeUp()}>
                            <SectionLabel>How We Help</SectionLabel>
                            <h2 className="font-heading text-4xl md:text-5xl font-medium tracking-tight mb-8">
                                Support that connects clinical goals to daily life
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {supportAreas.map((item, index) => (
                                    <motion.div
                                        key={item}
                                        {...fadeUp(index * 0.06)}
                                        className="rounded-2xl border border-border/60 bg-background p-5"
                                    >
                                        <p className="text-sm md:text-base text-foreground leading-relaxed">{item}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div {...fadeUp(0.15)} className="rounded-3xl bg-muted/60 border border-border/50 p-8 md:p-10">
                            <SectionLabel>Why Referral Partners Choose Us</SectionLabel>
                            <div className="space-y-5 text-muted-foreground leading-relaxed">
                                <p>
                                    We understand that referrals require trust. Our team works to make intake and
                                    communication clear, respectful, and responsive for both clients and partners.
                                </p>
                                <p>
                                    Whether a referral comes from a family member, social worker, provider, or court
                                    system, we focus on providing support that is compassionate, organized, and
                                    aligned with each client’s goals.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-32">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div {...fadeUp()} className="max-w-3xl mx-auto text-center">
                        <SectionLabel>Get Started</SectionLabel>
                        <h2 className="font-heading text-4xl md:text-5xl font-medium tracking-tight mb-6">
                            Ready to connect with our team?
                        </h2>
                        <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                            We are here to answer questions, discuss next steps, and help you begin the referral
                            process with confidence.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/referral">
                                <Button size="lg" className="rounded-full px-8 h-14 text-base font-body gap-2">
                                    Submit a Referral <ArrowRight className="w-4 h-4" />
                                </Button>
                            </Link>
                            <Link to="/services">
                                <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-base font-body">
                                    Review Service Areas
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
