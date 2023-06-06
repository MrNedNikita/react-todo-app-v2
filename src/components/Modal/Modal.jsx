import React, { useEffect } from 'react';
import s from './Modal.module.css';
import Button from '../Button/Button';

const Modal = ({ isVisible = false, title, content, footer, onClose }) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  });

  return (!isVisible ? null : (
    <div className={s.modal} onClick={onClose}>
      <div className={s.modalDialog} onClick={e => e.stopPropagation()}>
        <div className={s.modalHeader}>
          <h3 className={s.modalTitle}>{title}</h3>
        </div>
        <div className={s.modalBody}>
          <div className={s.modalContent}>{content}</div>
        </div>
        <div className={s.modalFooter}>
          <Button text="Close" onClick={onClose}/>
        </div>
      </div>
    </div>
  ));
};

export default Modal;