import { FC } from "react";

import { Modal } from "@/components/Modal";
import { Platform } from "@/types";

import { Feedback } from "../Feedback/Feedback";

interface FeedbackModalProps {
    visible: boolean;
    onClose: () => void;
}

export const FeedbackModal: FC<FeedbackModalProps> = ({ visible, onClose }) => {
    return (
        <Modal
            visible={visible}
            onClose={onClose}
        >
            <Feedback
                platform={Platform.DESKTOP}
                onSuccess={onClose}
            />
        </Modal>
    );
};
