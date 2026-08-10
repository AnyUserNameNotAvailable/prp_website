import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { CheckCircle2, Phone, Mail, MapPin, User, Baby } from 'lucide-react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';
import { sendReferralEmail } from '@/lib/emailjs';

const emptyAdultForm = {
    referrerName: '',
    referrerRole: '',
    referrerEmail: '',
    referrerPhone: '',
    clientName: '',
    clientPhone: '',
    clientDOB: '',
    clientGender: '',
    relationship: '',
    insuranceType: '',
    presentingConcerns: '',
    message: '',
};

const emptyChildForm = {
    referrerName: '',
    referrerRole: '',
    referrerEmail: '',
    referrerPhone: '',
    clientName: '',
    clientDOB: '',
    clientGender: '',
    clientSchool: '',
    clientGrade: '',
    guardianName: '',
    guardianPhone: '',
    guardianRelationship: '',
    relationship: '',
    insuranceType: '',
    presentingConcerns: '',
    message: '',
};

function SidebarContacts() {
    return (
        <>
            <div className="bg-muted/60 rounded-2xl p-8">
                <h3 className="font-heading text-lg font-medium mb-6">Reach Us Directly</h3>
                <div className="space-y-5">
                    <a href="tel:+12026964604" className="flex items-center gap-4 group">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                            <Phone className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">Call Us</p>
                            <p className="font-medium group-hover:text-primary transition-colors">(202) 696-4604</p>
                        </div>
                    </a>
                    <a href="mailto:peacewellnessgroup@gmail.com" className="flex items-center gap-4 group">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                            <Mail className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">Email</p>
                            <p className="font-medium group-hover:text-primary transition-colors">peacewellnessgroup@gmail.com</p>
                        </div>
                    </a>
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <MapPin className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">Visit</p>
                            <p className="font-medium">3044 Greenmount Avenue, Baltimore, MD 21218</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-muted/60 rounded-2xl p-8">
                <h3 className="font-heading text-lg font-medium mb-4">What Happens Next?</h3>
                <div className="space-y-4">
                    {[
                        { step: '1', text: 'We review your referral within 24 hours.' },
                        { step: '2', text: 'A team member contacts you to discuss next steps.' },
                        { step: '3', text: 'We schedule a no-obligation initial assessment.' },
                        { step: '4', text: 'Together, we begin building a personalized plan.' },
                    ].map((item) => (
                        <div key={item.step} className="flex items-start gap-3">
                            <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-semibold flex items-center justify-center flex-shrink-0 mt-0.5">
                                {item.step}
                            </span>
                            <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

function AdultForm({ onSuccess }) {
    const [form, setForm] = useState(emptyAdultForm);
    const handleChange = (field, value) => setForm((prev) => ({ ...prev, [field]: value }));

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.referrerName || !form.referrerEmail || !form.clientName) {
            toast.error('Please fill in all required fields.');
            return;
        }
        try {
            await sendReferralEmail({ ...form, formType: 'adult' });
            toast.success('Referral sent successfully!');
            onSuccess();
        } catch (error) {
            console.error(error);
            toast.error('Failed to send referral. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-8">
            {/* Referrer */}
            <div>
                <h3 className="font-heading text-xl font-medium mb-6">Your Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label>Full Name *</Label>
                        <Input value={form.referrerName} onChange={(e) => handleChange('referrerName', e.target.value)} placeholder="Your full name" className="rounded-xl h-12 text-base" />
                    </div>
                    <div className="space-y-2">
                        <Label>Your Role</Label>
                        <Select value={form.referrerRole} onValueChange={(v) => handleChange('referrerRole', v)}>
                            <SelectTrigger className="rounded-xl h-12 text-base"><SelectValue placeholder="Select your role" /></SelectTrigger>
                            <SelectContent>
                                <SelectItem value="social_worker">Social Worker</SelectItem>
                                <SelectItem value="family_member">Family Member</SelectItem>
                                <SelectItem value="healthcare">Healthcare Provider</SelectItem>
                                <SelectItem value="case_manager">Case Manager</SelectItem>
                                <SelectItem value="self">Self-Referral</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label>Email *</Label>
                        <Input type="email" value={form.referrerEmail} onChange={(e) => handleChange('referrerEmail', e.target.value)} placeholder="your@email.com" className="rounded-xl h-12 text-base" />
                    </div>
                    <div className="space-y-2">
                        <Label>Phone</Label>
                        <Input type="tel" value={form.referrerPhone} onChange={(e) => handleChange('referrerPhone', e.target.value)} placeholder="(123) 456-7890" className="rounded-xl h-12 text-base" />
                    </div>
                </div>
            </div>

            <hr className="border-border" />

            {/* Adult client */}
            <div>
                <h3 className="font-heading text-xl font-medium mb-6">Adult's Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label>Full Name *</Label>
                        <Input value={form.clientName} onChange={(e) => handleChange('clientName', e.target.value)} placeholder="Full name" className="rounded-xl h-12 text-base" />
                    </div>
                    <div className="space-y-2">
                        <Label>Date of Birth</Label>
                        <Input type="date" value={form.clientDOB} onChange={(e) => handleChange('clientDOB', e.target.value)} className="rounded-xl h-12 text-base" />
                    </div>
                    <div className="space-y-2">
                        <Label>Phone</Label>
                        <Input type="tel" value={form.clientPhone} onChange={(e) => handleChange('clientPhone', e.target.value)} placeholder="(123) 456-7890" className="rounded-xl h-12 text-base" />
                    </div>
                    <div className="space-y-2">
                        <Label>Gender Identity</Label>
                        <Select value={form.clientGender} onValueChange={(v) => handleChange('clientGender', v)}>
                            <SelectTrigger className="rounded-xl h-12 text-base"><SelectValue placeholder="Select" /></SelectTrigger>
                            <SelectContent>
                                <SelectItem value="male">Male</SelectItem>
                                <SelectItem value="female">Female</SelectItem>
                                <SelectItem value="nonbinary">Non-binary</SelectItem>
                                <SelectItem value="other">Other / Prefer to self-describe</SelectItem>
                                <SelectItem value="not_stated">Prefer not to say</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label>Insurance Type</Label>
                        <Select value={form.insuranceType} onValueChange={(v) => handleChange('insuranceType', v)}>
                            <SelectTrigger className="rounded-xl h-12 text-base"><SelectValue placeholder="Select" /></SelectTrigger>
                            <SelectContent>
                                <SelectItem value="medicaid">Medicaid</SelectItem>
                                <SelectItem value="medicare">Medicare</SelectItem>
                                <SelectItem value="private">Private Insurance</SelectItem>
                                <SelectItem value="self_pay">Self-Pay</SelectItem>
                                <SelectItem value="unknown">Unknown</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label>Your Relationship to the Individual</Label>
                        <Input value={form.relationship} onChange={(e) => handleChange('relationship', e.target.value)} placeholder="e.g., Case Manager, Parent, Self" className="rounded-xl h-12 text-base" />
                    </div>
                    <div className="md:col-span-2 space-y-2">
                        <Label>Presenting Concerns</Label>
                        <Select value={form.presentingConcerns} onValueChange={(v) => handleChange('presentingConcerns', v)}>
                            <SelectTrigger className="rounded-xl h-12 text-base"><SelectValue placeholder="Primary reason for referral" /></SelectTrigger>
                            <SelectContent>
                                <SelectItem value="depression">Depression / Mood</SelectItem>
                                <SelectItem value="anxiety">Anxiety / Stress</SelectItem>
                                <SelectItem value="trauma">Trauma / PTSD</SelectItem>
                                <SelectItem value="substance">Substance Use</SelectItem>
                                <SelectItem value="grief">Grief / Loss</SelectItem>
                                <SelectItem value="relationship">Relationship / Family</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </div>

            <hr className="border-border" />

            <div className="space-y-2">
                <Label>Additional Information</Label>
                <Textarea value={form.message} onChange={(e) => handleChange('message', e.target.value)} placeholder="Share anything that will help us understand how we can best support this individual..." className="rounded-xl min-h-[120px] text-base resize-none" />
            </div>

            <Button type="submit" size="lg" className="w-full rounded-xl h-14 text-base font-body">
                Submit Adult Referral
            </Button>

            <p className="text-xs text-muted-foreground text-center">
                All information is kept strictly confidential and handled in accordance with HIPAA regulations.
            </p>
        </form>
    );
}

function ChildForm({ onSuccess }) {
    const [form, setForm] = useState(emptyChildForm);
    const handleChange = (field, value) => setForm((prev) => ({ ...prev, [field]: value }));

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.referrerName || !form.referrerEmail || !form.clientName || !form.guardianName) {
            toast.error('Please fill in all required fields.');
            return;
        }
        try {
            await sendReferralEmail({ ...form, formType: 'child' });
            toast.success('Referral sent successfully!');
            onSuccess();
        } catch (error) {
            console.error(error);
            toast.error('Failed to send referral. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-8">
            {/* Referrer */}
            <div>
                <h3 className="font-heading text-xl font-medium mb-6">Your Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label>Full Name *</Label>
                        <Input value={form.referrerName} onChange={(e) => handleChange('referrerName', e.target.value)} placeholder="Your full name" className="rounded-xl h-12 text-base" />
                    </div>
                    <div className="space-y-2">
                        <Label>Your Role</Label>
                        <Select value={form.referrerRole} onValueChange={(v) => handleChange('referrerRole', v)}>
                            <SelectTrigger className="rounded-xl h-12 text-base"><SelectValue placeholder="Select your role" /></SelectTrigger>
                            <SelectContent>
                                <SelectItem value="social_worker">Social Worker</SelectItem>
                                <SelectItem value="family_member">Family Member</SelectItem>
                                <SelectItem value="healthcare">Healthcare Provider</SelectItem>
                                <SelectItem value="case_manager">Case Manager</SelectItem>
                                <SelectItem value="school_counselor">School Counselor</SelectItem>
                                <SelectItem value="teacher">Teacher</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label>Email *</Label>
                        <Input type="email" value={form.referrerEmail} onChange={(e) => handleChange('referrerEmail', e.target.value)} placeholder="your@email.com" className="rounded-xl h-12 text-base" />
                    </div>
                    <div className="space-y-2">
                        <Label>Phone</Label>
                        <Input type="tel" value={form.referrerPhone} onChange={(e) => handleChange('referrerPhone', e.target.value)} placeholder="(123) 456-7890" className="rounded-xl h-12 text-base" />
                    </div>
                </div>
            </div>

            <hr className="border-border" />

            {/* Child info */}
            <div>
                <h3 className="font-heading text-xl font-medium mb-6">Child's Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label>Full Name *</Label>
                        <Input value={form.clientName} onChange={(e) => handleChange('clientName', e.target.value)} placeholder="Child's full name" className="rounded-xl h-12 text-base" />
                    </div>
                    <div className="space-y-2">
                        <Label>Date of Birth</Label>
                        <Input type="date" value={form.clientDOB} onChange={(e) => handleChange('clientDOB', e.target.value)} className="rounded-xl h-12 text-base" />
                    </div>
                    <div className="space-y-2">
                        <Label>Gender Identity</Label>
                        <Select value={form.clientGender} onValueChange={(v) => handleChange('clientGender', v)}>
                            <SelectTrigger className="rounded-xl h-12 text-base"><SelectValue placeholder="Select" /></SelectTrigger>
                            <SelectContent>
                                <SelectItem value="male">Male</SelectItem>
                                <SelectItem value="female">Female</SelectItem>
                                <SelectItem value="nonbinary">Non-binary</SelectItem>
                                <SelectItem value="other">Other / Prefer to self-describe</SelectItem>
                                <SelectItem value="not_stated">Prefer not to say</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label>Grade Level</Label>
                        <Select value={form.clientGrade} onValueChange={(v) => handleChange('clientGrade', v)}>
                            <SelectTrigger className="rounded-xl h-12 text-base"><SelectValue placeholder="Select grade" /></SelectTrigger>
                            <SelectContent>
                                {['Pre-K', 'Kindergarten', '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th'].map((g) => (
                                    <SelectItem key={g} value={g.toLowerCase().replace(' ', '_')}>{g}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="md:col-span-2 space-y-2">
                        <Label>School Name</Label>
                        <Input value={form.clientSchool} onChange={(e) => handleChange('clientSchool', e.target.value)} placeholder="Current school" className="rounded-xl h-12 text-base" />
                    </div>
                    <div className="space-y-2">
                        <Label>Insurance Type</Label>
                        <Select value={form.insuranceType} onValueChange={(v) => handleChange('insuranceType', v)}>
                            <SelectTrigger className="rounded-xl h-12 text-base"><SelectValue placeholder="Select" /></SelectTrigger>
                            <SelectContent>
                                <SelectItem value="medicaid">Medicaid</SelectItem>
                                <SelectItem value="chip">CHIP</SelectItem>
                                <SelectItem value="private">Private Insurance</SelectItem>
                                <SelectItem value="self_pay">Self-Pay</SelectItem>
                                <SelectItem value="unknown">Unknown</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label>Presenting Concerns</Label>
                        <Select value={form.presentingConcerns} onValueChange={(v) => handleChange('presentingConcerns', v)}>
                            <SelectTrigger className="rounded-xl h-12 text-base"><SelectValue placeholder="Primary reason for referral" /></SelectTrigger>
                            <SelectContent>
                                <SelectItem value="behavioral">Behavioral Issues</SelectItem>
                                <SelectItem value="anxiety">Anxiety / Worry</SelectItem>
                                <SelectItem value="depression">Depression / Sadness</SelectItem>
                                <SelectItem value="trauma">Trauma / Abuse</SelectItem>
                                <SelectItem value="adhd">ADHD / Attention</SelectItem>
                                <SelectItem value="academic">Academic Struggles</SelectItem>
                                <SelectItem value="family">Family Changes</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </div>

            <hr className="border-border" />

            {/* Guardian info */}
            <div>
                <h3 className="font-heading text-xl font-medium mb-6">Parent / Guardian Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label>Guardian Full Name *</Label>
                        <Input value={form.guardianName} onChange={(e) => handleChange('guardianName', e.target.value)} placeholder="Parent or guardian name" className="rounded-xl h-12 text-base" />
                    </div>
                    <div className="space-y-2">
                        <Label>Guardian Phone</Label>
                        <Input type="tel" value={form.guardianPhone} onChange={(e) => handleChange('guardianPhone', e.target.value)} placeholder="(123) 456-7890" className="rounded-xl h-12 text-base" />
                    </div>
                    <div className="space-y-2">
                        <Label>Relationship to Child</Label>
                        <Select value={form.guardianRelationship} onValueChange={(v) => handleChange('guardianRelationship', v)}>
                            <SelectTrigger className="rounded-xl h-12 text-base"><SelectValue placeholder="Select" /></SelectTrigger>
                            <SelectContent>
                                <SelectItem value="mother">Mother</SelectItem>
                                <SelectItem value="father">Father</SelectItem>
                                <SelectItem value="stepparent">Stepparent</SelectItem>
                                <SelectItem value="grandparent">Grandparent</SelectItem>
                                <SelectItem value="foster_parent">Foster Parent</SelectItem>
                                <SelectItem value="legal_guardian">Legal Guardian</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label>Your Relationship to the Child</Label>
                        <Input value={form.relationship} onChange={(e) => handleChange('relationship', e.target.value)} placeholder="e.g., Teacher, Counselor, Parent" className="rounded-xl h-12 text-base" />
                    </div>
                </div>
            </div>

            <hr className="border-border" />

            <div className="space-y-2">
                <Label>Additional Information</Label>
                <Textarea value={form.message} onChange={(e) => handleChange('message', e.target.value)} placeholder="Share any additional context that will help us best support this child and family..." className="rounded-xl min-h-[120px] text-base resize-none" />
            </div>

            <Button type="submit" size="lg" className="w-full rounded-xl h-14 text-base font-body">
                Submit Child Referral
            </Button>

            <p className="text-xs text-muted-foreground text-center">
                All information is kept strictly confidential and handled in accordance with HIPAA regulations.
            </p>
        </form>
    );
}

export default function Referral() {
    const [activeTab, setActiveTab] = useState('adult');
    const [submitted, setSubmitted] = useState(false);

    const headerRef = useRef(null);
    const isHeaderInView = useInView(headerRef, { once: true });

    if (submitted) {
        return (
            <div className="pt-20 min-h-screen flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-md text-center px-6"
                >
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="font-heading text-3xl font-medium mb-4">Thank You</h2>
                    <p className="text-muted-foreground mb-8">
                        Your referral has been received. A member of our team will reach out within one business day to
                        discuss next steps.
                    </p>
                    <Button
                        variant="outline"
                        className="rounded-full px-8 font-body"
                        onClick={() => setSubmitted(false)}
                    >
                        Submit Another Referral
                    </Button>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="pt-20">
            {/* Header */}
            <section ref={headerRef} className="py-20 md:py-28 bg-muted/40">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">
                            Referral Portal
                        </p>
                        <h1 className="font-heading text-4xl md:text-6xl font-medium tracking-tight mb-6">
                            The Referral Concierge
                        </h1>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            A simple, confidential process designed to respect your time and the dignity of the individual you're referring.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
                        {/* Form panel */}
                        <div className="lg:col-span-3">
                            {/* Tab switcher */}
                            <div className="flex gap-2 mb-8 p-1 bg-muted/60 rounded-2xl w-fit">
                                <button
                                    type="button"
                                    onClick={() => setActiveTab('adult')}
                                    className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                                        activeTab === 'adult'
                                            ? 'bg-background shadow-sm text-foreground'
                                            : 'text-muted-foreground hover:text-foreground'
                                    }`}
                                >
                                    <User className="w-4 h-4" />
                                    Adult Referral
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setActiveTab('child')}
                                    className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                                        activeTab === 'child'
                                            ? 'bg-background shadow-sm text-foreground'
                                            : 'text-muted-foreground hover:text-foreground'
                                    }`}
                                >
                                    <Baby className="w-4 h-4" />
                                    Child Referral
                                </button>
                            </div>

                            <div className="bg-background/60 backdrop-blur-xl border border-border/50 rounded-3xl p-8 md:p-12 shadow-lg">
                                <AnimatePresence mode="wait">
                                    {activeTab === 'adult' ? (
                                        <motion.div
                                            key="adult"
                                            initial={{ opacity: 0, x: -12 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 12 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <AdultForm onSuccess={() => setSubmitted(true)} />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="child"
                                            initial={{ opacity: 0, x: 12 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -12 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <ChildForm onSuccess={() => setSubmitted(true)} />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-2 space-y-8">
                            <SidebarContacts />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
