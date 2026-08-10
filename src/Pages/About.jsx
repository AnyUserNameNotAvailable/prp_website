import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Heart, Shield, Users, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Hero from '@/components/home/Hero';

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 32 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const values = [
    {
        icon: Heart,
        title: 'Dignity First',
        body: 'Every individual we serve deserves to be treated with unconditional respect — regardless of diagnosis, history, or circumstance.',
    },
    {
        icon: Shield,
        title: 'Safety & Trust',
        body: 'We create environments where people feel genuinely safe to be vulnerable, grow, and take steps toward independence.',
    },
    {
        icon: Users,
        title: 'Community Belonging',
        body: 'Recovery doesn\'t happen in isolation. We connect individuals with their communities and build lasting support networks.',
    },
    {
        icon: Sparkles,
        title: 'Holistic Growth',
        body: 'We address the whole person — mental, emotional, social, and practical — with individualized plans that evolve over time.',
    },
];

const team = [
    {
        name: 'Geisha Ghraham',
        role: 'Founder & Director',
        bio: '.',
        initial: 'AM',
    },
];

const stats = [
    { value: '500+', label: 'Individuals Served' },
    { value: '15+', label: 'Years in Baltimore' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '24hr', label: 'Referral Response' },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
    return (
        <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">{children}</p>
    );
}

export default function About() {
    return (
        <div className="pt-20">

            {/* ── Hero ── */}
            <section className="relative py-24 md:py-36 bg-muted/40 overflow-hidden">
                <Hero />
            </section>

            {/* ── Stats ── */}
            <section className="py-16 border-b border-border">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((s, i) => (
                            <motion.div key={s.label} {...fadeUp(i * 0.1)} className="text-center">
                                <p className="font-heading text-4xl md:text-5xl font-medium text-primary mb-2">{s.value}</p>
                                <p className="text-sm text-muted-foreground tracking-wide uppercase">{s.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Our Story ── */}
            <section className="py-20 md:py-32">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <motion.div {...fadeUp(0)}>
                            <SectionLabel>Our Story</SectionLabel>
                            <h2 className="font-heading text-4xl md:text-5xl font-medium tracking-tight mb-8">
                                Born from a belief in human potential
                            </h2>
                            <div className="space-y-5 text-muted-foreground leading-relaxed">
                                <p>
                                    Peace and Wellness Group was founded in the heart of Baltimore with one foundational belief:
                                    that mental illness does not define a person, and that with the right support, every individual
                                    can live a meaningful, self-directed life.
                                </p>
                                <p>
                                    Our Psychiatric Rehabilitation Program (PRP) is built around evidence-based practices that
                                    address the social, emotional, and functional needs of adults and adolescents living with
                                    serious mental illness. We don't just manage symptoms — we partner with clients to build skills,
                                    strengthen relationships, and open doors.
                                </p>
                                <p>
                                    Over the years we have grown into a trusted resource for Baltimore's social workers, healthcare
                                    providers, families, and courts — but our core commitment has never changed. Every referral we
                                    receive is a person, not a case number.
                                </p>
                            </div>
                        </motion.div>

                        {/* Visual block */}
                        <motion.div {...fadeUp(0.15)} className="relative">
                            <div className="rounded-3xl bg-primary/8 border border-primary/10 p-10 md:p-14">
                                <blockquote className="font-heading text-2xl md:text-3xl font-medium leading-snug text-foreground mb-8">
                                    "Recovery is not the absence of struggle. It is the presence of possibility."
                                </blockquote>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                                        <span className="text-primary-foreground font-heading text-sm font-semibold">AM</span>
                                    </div>
                                    <div>
                                        <p className="font-medium text-sm">Dr. Angela Moore</p>
                                        <p className="text-xs text-muted-foreground">Founder & Clinical Director</p>
                                    </div>
                                </div>
                            </div>
                            {/* Floating accent */}
                            <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-2xl bg-primary/10 -z-10" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── Mission & Values ── */}
            <section className="py-20 md:py-32 bg-muted/40">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div {...fadeUp(0)} className="max-w-2xl mb-16">
                        <SectionLabel>Our Values</SectionLabel>
                        <h2 className="font-heading text-4xl md:text-5xl font-medium tracking-tight">
                            The principles that guide everything we do
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((v, i) => (
                            <motion.div
                                key={v.title}
                                {...fadeUp(i * 0.1)}
                                className="bg-background rounded-2xl p-8 border border-border/50 flex flex-col gap-5"
                            >
                                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                                    <v.icon className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-heading text-lg font-medium mb-2">{v.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{v.body}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Team ── */}
            <section className="py-20 md:py-32">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div {...fadeUp(0)} className="max-w-2xl mb-16">
                        <SectionLabel>Our Team</SectionLabel>
                        <h2 className="font-heading text-4xl md:text-5xl font-medium tracking-tight">
                            Experienced, compassionate, dedicated
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {team.map((member, i) => (
                            <motion.div
                                key={member.name}
                                {...fadeUp(i * 0.12)}
                                className="group"
                            >
                                <div className="bg-muted/50 rounded-3xl p-8 h-full border border-border/40 hover:border-primary/20 hover:bg-muted/70 transition-all duration-300">
                                    <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-6">
                                        <span className="text-primary-foreground font-heading font-semibold">{member.initial}</span>
                                    </div>
                                    <h3 className="font-heading text-xl font-medium mb-1">{member.name}</h3>
                                    <p className="text-primary text-sm font-medium mb-4">{member.role}</p>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Approach ── */}
            <section className="py-20 md:py-32 bg-muted/40">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div {...fadeUp(0)}>
                            <SectionLabel>Our Approach</SectionLabel>
                            <h2 className="font-heading text-4xl md:text-5xl font-medium tracking-tight mb-8">
                                Person-centered, evidence-based, community-rooted
                            </h2>
                            <div className="space-y-6">
                                {[
                                    {
                                        title: 'Individualized Service Plans',
                                        body: 'Every client receives a plan tailored to their unique goals, strengths, and circumstances — not a one-size-fits-all curriculum.',
                                    },
                                    {
                                        title: 'Trauma-Informed Care',
                                        body: 'Our entire team is trained to recognize the pervasive impact of trauma and to respond in ways that build safety, trust, and empowerment.',
                                    },
                                    {
                                        title: 'Family & Community Integration',
                                        body: 'We actively involve families and community supports — with client consent — because lasting recovery is built on relationships.',
                                    },
                                ].map((item, i) => (
                                    <motion.div key={item.title} {...fadeUp(i * 0.1)} className="flex gap-4">
                                        <div className="w-1.5 rounded-full bg-primary/30 flex-shrink-0 mt-1" />
                                        <div>
                                            <h4 className="font-heading font-medium mb-1">{item.title}</h4>
                                            <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Accent card */}
                        <motion.div {...fadeUp(0.15)}>
                            <div className="rounded-3xl bg-primary text-primary-foreground p-10 md:p-14">
                                <h3 className="font-heading text-2xl font-medium mb-6">Who We Serve</h3>
                                <div className="space-y-4 mb-10">
                                    {[
                                        'Adults living with serious mental illness',
                                        'Adolescents ages 12–17 with behavioral health needs',
                                        'Individuals transitioning from inpatient care',
                                        'People court-referred for psychiatric rehabilitation',
                                        'Those seeking to strengthen daily living skills',
                                    ].map((item) => (
                                        <div key={item} className="flex items-start gap-3 text-sm text-primary-foreground/85">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary-foreground/60 flex-shrink-0 mt-1.5" />
                                            {item}
                                        </div>
                                    ))}
                                </div>
                                <Link to="/referral">
                                    <Button
                                        variant="secondary"
                                        className="rounded-full gap-2 font-body"
                                    >
                                        Make a Referral <ArrowRight className="w-4 h-4" />
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="py-20 md:py-32">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div {...fadeUp(0)} className="max-w-3xl mx-auto text-center">
                        <SectionLabel>Get Started</SectionLabel>
                        <h2 className="font-heading text-4xl md:text-5xl font-medium tracking-tight mb-6">
                            Ready to take the next step?
                        </h2>
                        <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                            Whether you're a clinician, family member, or exploring options for yourself,
                            our team is ready to help you find the right path forward.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/referral">
                                <Button size="lg" className="rounded-full px-8 h-14 text-base font-body gap-2">
                                    Submit a Referral <ArrowRight className="w-4 h-4" />
                                </Button>
                            </Link>
                            <Link to="/services">
                                <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-base font-body">
                                    Explore Our Services
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

        </div>
    );
}