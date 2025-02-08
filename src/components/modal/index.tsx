import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './index.css';

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  children: React.ReactNode;
}
const Modal: React.FC<ModalProps> = ({ title, open, onClose, onConfirm, children, ...rest }) => {
  
  return (
    <>
      {open && (
        <div className="modal-overlay">
          <div className="modal-container flex flex-col">
            <h3 className="text-[24px] font-bold text-center mt-1">{title}</h3>

            <div className="modal-body flex-1">{children}</div>
            {/* <div className="modal-footer mb-8"> */}
            <div className="modal-footer mb-8 pl-[45px]">
              <button onClick={() => onClose()}></button>
              <button onClick={() => onConfirm()}></button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

Modal.propTypes = {};

export default Modal;
