import React from 'react';
import Hero from '@/components/home/Hero';
import PhilosophyBand from '@/components/home/PhilosophyBand';
import ProcessTimeline from '@/components/home/ProcessTimeline';
import ReferralCTA from '@/components/home/ReferralCTA';
import Carf from '@/components/home/Carf';

export default function Home() {
    return (
        <>
            <Hero />
            <PhilosophyBand />
            <ProcessTimeline />
            <ReferralCTA />
        </>
    );
}