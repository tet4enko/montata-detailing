'use client';

import { FC } from "react";

import cn from 'classnames';

import styles from './BlockTitle.module.css';

type BlockTitleProps = {
    className?: string;
    text: string;
}

export const BlockTitle: FC<BlockTitleProps> = ({ text, className }) => {
    return (
        <h1 className={cn(styles.BlockTitle, className)}>
            {text}
        </h1>
    );
};
