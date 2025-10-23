import React from "react"; 
import { Link } from 'react-router-dom';

interface ButtonProps {
    text: string;
    buttonLink: string;
    external?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, buttonLink, external = false }) => {
    if (external) {
        return (
        <a href={buttonLink} target="_blank" rel="noopener noreferrer" className="btn">
            {text}
        </a>
        );
    }

    return (
        <Link to={buttonLink} className="btn">
            {text}
        </Link>
    );
};

export default Button;