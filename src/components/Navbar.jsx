import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/aboutus' },
    { label: 'Services', path: '/services' },
    { label: 'Our Process', path: '/#process' },
    { label: 'Contact', path: '/referral' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        setMobileOpen(false);
    }, [location]);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? 'bg-background/70 backdrop-blur-xl border-b border-border/50 shadow-sm'
                    : 'bg-transparent'
                }`}
        >
            <nav className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-22">

                    <Link to="/" className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0">
                            <img
                                src="/Logo 2.png"
                                alt="Logo"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <span className="font-heading text-xl font-semibold tracking-tight text-foreground leading-none">
                            Peace and Wellness Group
                        </span>
                    </Link>

                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`text-sm font-medium transition-colors duration-300 hover:text-primary ${location.pathname === link.path
                                        ? 'text-primary'
                                        : 'text-muted-foreground'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        <a href="tel:+12026964604" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                            <Phone className="w-4 h-4" />
                            <span>(202) 696-4604</span>
                        </a>
                        <Link to="/referral">
                            <Button className="rounded-full px-6 font-body text-sm">
                                Make a Referral
                            </Button>
                        </Link>
                    </div>

                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden p-2 text-foreground"
                    >
                        {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </nav>

            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
                    >
                        <div className="px-6 py-6 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className="block text-lg font-heading text-foreground hover:text-primary transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <hr className="border-border" />
                            <Link to="/referral">
                                <Button className="w-full rounded-full font-body">
                                    Make a Referral
                                </Button>
                            </Link>
                            <a href="tel:+12026964604" className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Phone className="w-4 h-4" />
                                (202) 696-4604
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}