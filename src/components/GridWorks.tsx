import React from 'react';
import worksData from '../data/works.json';
import WorkCard from './WorkCard';
import '../assets/GridWorks.scss';
import { useTranslation } from 'react-i18next'

const GridWorks: React.FC = () => {
    const {t} = useTranslation();
    return (
        <section id="works" className="works-section">
            <h2>{t('works.title')}</h2>
            <div className="grid-works">
            {worksData.map((work: any) => (
              <WorkCard 
                key={work.id}
                img={work.img} 
                alt={work.alt} 
                title={work.title}
                desc={work.desc} 
                link={work.link} 
                tools={work.tools}
            />
            ))}
            </div>
        </section>
        );
    };

export default GridWorks;