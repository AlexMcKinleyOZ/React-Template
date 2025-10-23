import React from 'react';
import '../assets/Contact.css';
import { useTranslation } from 'react-i18next'

const Contact: React.FC = () => {
    const {t} = useTranslation();
    return (
        <section id="contact" className="contact-section">
            <h2>{t('contact.title')}</h2>
        </section>
        );
    };

export default Contact;