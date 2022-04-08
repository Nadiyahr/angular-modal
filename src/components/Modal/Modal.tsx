import React, {
  Dispatch, FC, SetStateAction, useEffect,
} from 'react';
import Form from '../Form/Form';
import './Modal.scss';

interface ModalProps {
  open: Dispatch<SetStateAction<boolean>>;
  onClose: () => void;
}

const Modal: FC<ModalProps> = (props) => {
  const { onClose, open } = props;

  const closeOnEscDown = (e: KeyboardEvent) => {
    if ((e.code || e.key) === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscDown);

    return function clean() {
      document.body.removeEventListener('keydown', closeOnEscDown);
    };
  }, []);

  if (!open) {
    return null;
  }

  return (
    <div role="presentation" className="modal" onClick={onClose}>
      <div role="presentation" className="modal__content" onClick={(e) => e.stopPropagation()}>
        <div className="modal__header">
          <h4 className="modal__title">Modal Component</h4>
        </div>
        <div className="modal__body">
          <Form />
        </div>
        <div className="modal__fotter">
          <button type="button" onClick={onClose}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
