import React from 'react';
import Button from './Button';
import { useTranslation } from 'react-i18next'

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
        <div className="work-card">
            <div className="pair-box">
                <div className="pair-a">
                    <img src={img} alt={alt} />
                </div>
                <div className="pair-b">
                    <h3>{title}</h3>
                    <p>{desc}</p>
                    <p>Tools: {tools}</p>
                </div> 
            </div>
            {/* <Button text={t('works.link_btn')} link={link}/> */}
        </div>
    );
};

export default WorkCard;