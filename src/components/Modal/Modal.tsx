import { FC, ReactNode } from "react";

import cn from 'classnames';

import styles from './Modal.module.css';

interface ModalProps {
    className?: string;
    visible: boolean;
    children: ReactNode;
    onClose: () => void;
}

export const Modal: FC<ModalProps> = ({ className, visible, children, onClose }) => {
    return (
        <div className={cn(styles.Modal, className, styles[`Modal_visible_${visible}`])}>
            <div
                className={cn(styles.ModalOverlay)}
                onClick={() => onClose()}
            />
            <div className={cn(styles.ModalContent)}>
                {children}
            </div>
        </div>
    );
};
