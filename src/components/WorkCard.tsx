import React from 'react';
import Button from './Button';
import { useTranslation } from 'react-i18next'
import '../assets/GridWorks.scss';

interface WorkCardProps {
    img: string,
    alt: string,
    title: string,
    desc: string,
    link: string,
    tools: string,
}

const WorkCard: React.FC<WorkCardProps> = ({ img, alt, title, desc, link, tools }) => {
    const {t} = useTranslation();
    return (
        <>
        <div className="work-card">
            <h3>{title}</h3>
            <div className="work-card__image-frame">
                <img className="work-card__image" src={img} alt={alt} />
            </div>
            <p className="work-card__description">{desc}</p>
            <div className="work-card__lower">
                <p>Tools: {tools}</p>
                <Button text={t('works.link_btn')} buttonLink={link} external />
            </div>
        </div>
        </>
    );
};

export default WorkCard;