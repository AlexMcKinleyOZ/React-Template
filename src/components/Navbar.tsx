import React from 'react';
import { useTranslation } from 'react-i18next';
import LangSwitch from './LangSwitch'


const Navbar: React.FC = () => {
    const { t } = useTranslation();

    return (
        <header>
            <div className="header-inner">
                <div className="nav-left">
                    <h1 className="header-logo">Logo</h1>
                </div>
                <div className="nav-right">
                    <nav>
                        <a href="#top">{ t('header.top')}</a>
                        <a href="#tools">{ t('header.tools')}</a>
                        <a href="#works">{ t('header.works')}</a>
                        <a href="#contact">{ t('header.contact')}</a>
                    </nav>
                    <LangSwitch />
                </div>
            </div>
        </header>
    );
};

export default Navbar;