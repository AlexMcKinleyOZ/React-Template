import React from "react"; 
import { Link } from 'react-router-dom';

interface ButtonProps {
    text: string;
    link: string;
    external?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, link, external = false }) => {
    if (external) {
        return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="btn">
            {text}
        </a>
        );
    }

    return (
        <Link to={link} className="btn">
            {text}
        </Link>
    );
};

export default Button;