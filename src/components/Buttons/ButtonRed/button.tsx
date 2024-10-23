import React from 'react';
import style from "./style.module.css";

interface ButtonProps {
    text: string;
    onClick: () => void;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
    style?: React.CSSProperties;
}

const ButtonRed: React.FC<ButtonProps> = ({ text, onClick, disabled = false, type = "button" }) => {
    return (
        <button className={style.button} onClick={onClick} disabled={disabled} type={type}>
            {text}
        </button>
    );
}

export default ButtonRed;