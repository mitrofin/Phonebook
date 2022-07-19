import { createPortal } from 'react-dom';
import s from './Modal.module.scss';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children }) => {
  return createPortal(
    <div className={s.Overlay}>
      <div className={s.Modal}>{children}</div>
    </div>,
    modalRoot,
  );
};
export default Modal;
