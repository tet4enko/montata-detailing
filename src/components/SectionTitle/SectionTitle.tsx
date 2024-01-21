'use client';

import { FC } from "react";

import cn from 'classnames';

import { Platform } from "@/types";

import styles from './SectionTitle.module.css';

type SectionTitleProps = {
    platform: Platform;
    className?: string;
    text: string;
}

export const SectionTitle: FC<SectionTitleProps> = ({ text, className, platform }) => {
    return (
        <h1 className={cn(styles.SectionTitle, styles[`SectionTitle_platform_${platform}`] ,className)}>
            {text}
        </h1>
    );
};
