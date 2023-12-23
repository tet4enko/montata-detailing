'use client';

import { FC } from "react";

import cn from 'classnames';

import styles from './SectionTitle.module.css';

type SectionTitleProps = {
    className?: string;
    text: string;
}

export const SectionTitle: FC<SectionTitleProps> = ({ text, className }) => {
    return (
        <h1 className={cn(styles.SectionTitle, className)}>
            {text}
        </h1>
    );
};
