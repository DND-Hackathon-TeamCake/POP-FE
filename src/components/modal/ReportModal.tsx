// ReportModal.tsx
import React from "react";
import Modal from "react-modal";
import styles from './ReportModal.module.scss';

interface ReportModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onSubmit: () => void;
}

// Modal 접근성용 root 설정
Modal.setAppElement("#__next"); // Next.js일 경우, 아니면 "#root"

const ReportModal = ({ isOpen, onRequestClose, onSubmit }: ReportModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={styles.container}
      overlayClassName="modal-overlay"
    >
      <div>
        {/* 닫기 버튼 */}
        <button
          onClick={onRequestClose}
        >
          &times;
        </button>

        <h2 className={styles.font1}>
          부적절한<br />메시지 신고하기
        </h2>
        <p className={styles.font2}>
          신고를 통해 POP을 함께 지켜주세요
        </p>
        <button
          onClick={onSubmit}
          className={styles.btn}
        >
          신고하기
        </button>
      </div>
    </Modal>
  );
};

export default ReportModal;
