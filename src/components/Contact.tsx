import React from 'react';
import '../assets/Contact.scss';
import { useTranslation } from 'react-i18next'

const Contact: React.FC = () => {
    const {t} = useTranslation();
    return (
        <section id="contact" className="contact-section">
            <h2>{t('contact.title')}</h2>
            <p>{t('contact.text')}</p>
        </section>
        );
    };

export default Contact;