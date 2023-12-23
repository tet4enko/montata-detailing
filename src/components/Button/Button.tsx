import { FC } from "react";

import cn from 'classnames';

import styles from './Button.module.css';

interface ButtonProps {
    className?: string;
    type: 'primary' | 'secondary';
    text: string;
    onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({ className, text, type, onClick }) => {
    return (
        <button
            className={cn(styles.Button, className, styles[`Button_type_${type}`])}
            onClick={onClick}
        >
            {text}
        </button>
    );
};
