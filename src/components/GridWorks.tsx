import React from 'react';
import worksData from '../data/works.json';
import WorkCard from './WorkCard';
import '../assets/GridWorks.scss';
import { useTranslation } from 'react-i18next'

const GridWorks: React.FC = () => {
    const {t} = useTranslation();
    return (
        <section id="works" className="grid-works">
            <h2>{t('works.title')}</h2>
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
        </section>
        );
    };

export default GridWorks;