import { FC } from "react";

import Image from 'next/image';

// import { SectionTitle } from "@/components/SectionTitle";
import styles from './WorkExamples.module.css';

type Item = {
    src: string;
    height: number;
}

const LEFT_ITEMS: Item[] = [
    {
        src: '/workExamples/left_4.png',
        height: 600,
    },
    {
        src: '/workExamples/left_2.png',
        height: 300,
    },
    {
        src: '/workExamples/left_1.png',
        height: 300,
    },
    {
        src: '/workExamples/left_3.png',
        height: 600,
    },
];

const RIGHT_ITEMS: Item[] = [
    {
        src: '/workExamples/right_4.png',
        height: 400,
    },
    {
        src: '/workExamples/right_1.png',
        height: 500,
    },
    {
        src: '/workExamples/right_2.png',
        height: 600,
    },
    {
        src: '/workExamples/right_3.png',
        height: 300,
    },
];

const renderItem = ({ src, height }: Item) => {
    return (
        <div className={styles.Item}
            style={{ height }}
        >
            <Image
                className={styles.ItemImage}
                src={src}
                alt="g"
                fill
            />
        </div>
    );
};

export const WorkExamples: FC = () => {
    return (
        <div className={styles.WorkExamplesWrapper}>
            <div className={styles.WorkExamples}>
                {/* <SectionTitle text="Наши работы" /> */}
                <div className={styles.Content}>
                    <div className={styles.LeftColumn}>
                        {LEFT_ITEMS.map((item) => renderItem(item))}
                    </div>
                    <div className={styles.RightColumn}>
                        {RIGHT_ITEMS.map((item) => renderItem(item))}
                    </div>
                </div>
            </div>
        </div>
    );
};
