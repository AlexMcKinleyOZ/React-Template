import React from 'react';
import '../assets/GridTools.scss';

interface ToolCardProps {
    img: string,
    alt: string,
}

const ToolCard: React.FC<ToolCardProps> = ({ img, alt }) => {
    return (
        <div className="tool-card">
            <img src={img} alt={alt} />
        </div>
    );
};

export default ToolCard;