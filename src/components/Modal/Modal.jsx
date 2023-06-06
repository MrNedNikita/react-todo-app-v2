import React from 'react';
import s from './Modal.module.css';

const Modal = ({ isVisible = false, title, content, footer, onClose }) => {
  const keydownHandler = ({ key }) => {
    switch (key) {
      case 'Escape':
        onClose();
        break;
      default:
    }
  };

  React.useEffect(() => {
    document.addEventListener('keydown', keydownHandler);
    return () => document.removeEventListener('keydown', keydownHandler);
  });

  return !isVisible ? null : (
    <div className={s.modal} onClick={onClose}>
      <div className={s.modalDialog} onClick={e => e.stopPropagation()}>
        <div className={s.modalHeader}>
          <h3 className={s.modalTitle}>{title}</h3>
          <span className={s.modalClose} onClick={onClose}>
            &times;
          </span>
        </div>
        <div className={s.modalBody}>
          <div className={s.modalContent}>{content}</div>
        </div>
        {footer && <div className={s.modalFooter} onClick={onClose}>{footer}</div>}
      </div>
    </div>
  );
};

export default Modal;