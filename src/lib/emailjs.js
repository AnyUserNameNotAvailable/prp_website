import emailjs from '@emailjs/browser';

export const sendReferralEmail = (form) => {
    return emailjs.send(
        'Giesha',
        'Referral',
        {
            referrer_name: form.referrerName,
            referrer_role: form.referrerRole,
            referrer_email: form.referrerEmail,
            referrer_phone: form.referrerPhone,
            client_name: form.clientName,
            client_phone: form.clientPhone,
            relationship: form.relationship,
            message: form.message,
        },
        'B9SU0hxrYuHeBCNRo' // EmailJS public key
    );
};