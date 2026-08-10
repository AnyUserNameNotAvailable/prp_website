import React, { useState } from 'react';
import {
    AppBar, IconButton, Box, Button, Typography, Stack, Link
} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MenuIcon from '@mui/icons-material/Menu';

import {
    ToolbarStyled,
    Title,
} from './header.styles';

const Header = ({
    darkMode,
    setDarkMode,
    onNavigate = () => { },
}) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navigationLinks = [
        { label: 'Home', path: '/' },
        { label: 'About Us', path: '/aboutus' },
        { label: 'PRP Services', path: '/services' },
        { label: 'Individual Therapy', path: '/therapy' },
        { label: 'Resources', path: '/resources' },
        { label: 'Contact', path: '/contact' },
    ];

    const handleNavigation = (path) => {
        onNavigate(path);
        setMobileMenuOpen(false);
    };

    return (
        <AppBar position="sticky" sx={{
            backdropFilter: 'blur(10px)',
            bgcolor: (theme) => theme.palette.mode === 'dark'
                ? 'rgba(33,33,33,0.95)'
                : 'rgba(255,255,255,0.95)',
        }}>

            {/* TOP BAR (NEW - from original site) */}
            <Box
                sx={{
                    display: { xs: 'none', md: 'flex' },
                    justifyContent: 'space-between',
                    px: 4,
                    py: 1,
                    borderBottom: '1px solid rgba(0,0,0,0.1)',
                    fontSize: '0.85rem'
                }}
            >
                <Stack direction="row" spacing={3}>
                    <Link href="tel:4438600520" underline="none">
                        Don't hesitate to call us today! <strong>443-860-0520</strong>
                    </Link>
                    <Link href="mailto:Info@BMorePRP.org" underline="none">
                        Email: <strong>Info@BMorePRP.org</strong>
                    </Link>
                </Stack>

                <Stack direction="row" spacing={2}>
                    <Link href="https://www.facebook.com/bmoreprp" target="_blank">
                        <img src="https://www.bmoreprp.org/wp-content/themes/bmoreprpes307/images/fb-icon.png" alt="fb" width={18} />
                    </Link>
                    <Link href="https://www.instagram.com/bmore_prp" target="_blank">
                        <img src="https://www.bmoreprp.org/wp-content/themes/bmoreprpes307/images/ig-icon.png" alt="ig" width={18} />
                    </Link>
                </Stack>
            </Box>

            {/* MAIN NAVBAR */}
            <ToolbarStyled>

                {/* Logo */}
                <Box display="flex" alignItems="center" onClick={() => handleNavigation('/')} sx={{ cursor: 'pointer' }}>
                    <img
                        src="https://www.bmoreprp.org/wp-content/themes/bmoreprpes307/images/main-logo.png"
                        alt="Bmore PRP"
                        style={{ height: 40, marginRight: 10 }}
                    />
                    <Title variant="h6">Bmore PRP</Title>
                </Box>

                {/* Desktop Nav */}
                <Box
                    display={{ xs: 'none', md: 'flex' }}
                    sx={{ flexGrow: 1, justifyContent: 'center' }}
                >
                    {navigationLinks.map((link) => (
                        <Button key={link.path} onClick={() => handleNavigation(link.path)}>
                            {link.label}
                        </Button>
                    ))}
                </Box>

                {/* Right Side */}
                <Box display="flex" alignItems="center" gap={1}>

                    {/* Referral Buttons (from original site) */}
                    <Button
                        variant="outlined"
                        onClick={() => handleNavigation('/psychiatric-rehabilitation-send-your-referrals')}
                        sx={{ display: { xs: 'none', md: 'inline-flex' } }}
                    >
                        Adult Referral
                    </Button>

                    <Button
                        variant="contained"
                        onClick={() => handleNavigation('/psychiatric-rehabilitation-send-us-your-feedback/prp-referral-youth')}
                        sx={{ display: { xs: 'none', md: 'inline-flex' } }}
                    >
                        Youth Referral
                    </Button>

                    {/* Dark Mode */}
                    <IconButton onClick={() => setDarkMode(!darkMode)}>
                        {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                    </IconButton>

                    {/* Mobile Menu */}
                    <IconButton
                        sx={{ display: { xs: 'inline-flex', md: 'none' } }}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <MenuIcon />
                    </IconButton>
                </Box>
            </ToolbarStyled>

            {/* MOBILE MENU */}
            {mobileMenuOpen && (
                <Box sx={{ display: { xs: 'block', md: 'none' }, p: 2 }}>
                    {navigationLinks.map((link) => (
                        <Button
                            key={link.path}
                            fullWidth
                            onClick={() => handleNavigation(link.path)}
                        >
                            {link.label}
                        </Button>
                    ))}

                    {/* Contact Info (mobile) */}
                    <Box mt={2}>
                        <Typography variant="body2">443-860-0520</Typography>
                        <Typography variant="body2">Info@BMorePRP.org</Typography>
                    </Box>

                    {/* Referral Buttons */}
                    <Button fullWidth sx={{ mt: 2 }} variant="outlined">
                        Adult Referral
                    </Button>
                    <Button fullWidth sx={{ mt: 1 }} variant="contained">
                        Youth Referral
                    </Button>
                </Box>
            )}
        </AppBar>
    );
};

export default Header;