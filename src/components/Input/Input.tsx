import { FC, HTMLInputTypeAttribute } from "react";

import cn from 'classnames';

import styles from './Input.module.css';

interface InputProps {
    className?: string;
    value: string;
    placeholder?: string;
    type: HTMLInputTypeAttribute;
    onChange: (value: string) => void;
}

export const Input: FC<InputProps> = ({
    className,
    value,
    type,
    placeholder,
    onChange,
}) => {
    return (
        <input
            type={type}
            className={cn(styles.Input, className)}
            onChange={(e) => onChange(e.target.value)}
            value={value}
            placeholder={placeholder}
        />
    );
};
