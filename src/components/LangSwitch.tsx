import React from 'react';
import { useTranslation } from 'react-i18next';
import '../assets/LangSwitch.scss'

const LangSwitch: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="lang-switch">
      <button
        className={i18n.language === 'ja' ? 'active' : ''}
        onClick={() => changeLang('ja')}
      >
        日本語
      </button>
      <span>/</span>
      <button
        className={i18n.language === 'en' ? 'active' : ''}
        onClick={() => changeLang('en')}
      >
        EN
      </button>
    </div>
  );
};

export default LangSwitch;
