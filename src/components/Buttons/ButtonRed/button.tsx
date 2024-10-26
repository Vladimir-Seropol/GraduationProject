import React from 'react';
import style from "./style.module.css";

interface ButtonProps {
    text: string;
    type: "button" | "submit" | "reset";
    onClick?: React.MouseEventHandler<HTMLButtonElement> | React.FormEventHandler<HTMLButtonElement>;
    children?: React.ReactNode;
    disabled?: boolean;
    style?: React.CSSProperties;
    
}

const ButtonRed: React.FC<ButtonProps> = ({ text, onClick,  disabled = false, type }) => {
    return (
        <button 
            className={style.button} 
            onClick={onClick} 
            disabled={disabled} 
            type={type}
        >
            {text}
        </button>
    );
}

export default ButtonRed;