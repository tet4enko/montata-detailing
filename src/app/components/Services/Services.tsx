import { FC } from "react";

import cn from 'classnames';
import Image from 'next/image';

import { SectionTitle } from "@/components/SectionTitle";

import styles from './Services.module.css';

type Item = {
    src: string;
    title: string;
    description: string;
    size: 's' | 'm'
}

const LEFT_ITEMS: Item[] = [
    {
        src: '/services/polirovka.jpg',
        title: 'Полировка кузова',
        description: 'От 1800 Р / деталь',
        size: 's',
    },
    {
        src: '/services/ceramic.jpg',
        title: 'Керамическое покрытие кузова',
        description: 'От 2300 Р / деталь',
        size: 'm',
    },
];

const RIGHT_ITEMS: Item[] = [
    {
        src: '/services/himchistka.jpg',
        title: 'Химчистка салона',
        description: 'От 1100 Р / деталь',
        size: 'm',
    },
    {
        src: '/services/plenka.png',
        title: 'Оклейка кузова',
        description: 'От 1450 Р / деталь',
        size: 's',
    },
];

const renderItem = ({ src, title, description, size }: Item, index: number) => {
    return (
        <div
            className={cn(styles.Item, styles[`Item_size_${size}`])}
            key={index}
        >
            <Image
                src={src}
                alt={title}
                title={title}
                fill
            />
            <div className={styles.ItemShadow} />
            <div className={styles.ItemText}>
                <div className={styles.ItemTitle}>
                    {title}
                </div>
                <div className={styles.ItemDescription}>
                    {description}
                </div>
            </div>
        </div>
    );
};

export const Services: FC = () => {
    return (
        <div className={styles.Services}>
            <SectionTitle text="Услуги" />
            <div className={styles.Description}>
                Индивидуальное обслуживание, гарантированный результат, использование сертифицированных автохимикатов — у нас вы будете чувствовать себя комфортно. Обратите внимание, что наши услуги предоставляются исключительно по предварительной записи.
            </div>
            <div className={styles.Content}>
                <div className={styles.LeftColumn}>
                    {LEFT_ITEMS.map((item, index) => renderItem(item, index))}
                </div>
                <div className={styles.RightColumn}>
                    {RIGHT_ITEMS.map((item, index) => renderItem(item, index))}
                </div>
            </div>
        </div>
    );
};
