import React from 'react';
import toolsData from '../data/tools.json';
import ToolCard from './ToolCard';
import '../assets/GridTools.scss';
import { useTranslation } from 'react-i18next'

const GridTools: React.FC = () => {
    const {t} = useTranslation();
    return (
        <section id="tools" className="tools-section">
            <h2>{t('tools.title')}</h2>
            <div className="grid-tools">
            {toolsData.map((tool: any) => (
              <ToolCard key={tool.id} img={tool.img} alt={tool.alt} />
            ))}
            </div>
        </section>
        );
    };

export default GridTools;