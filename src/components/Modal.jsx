import './Modal.css';

const Modal = ({ header, body, footer }) => (
  <div className='modal'>
    <div className='modal__header'>{header}</div>
    <div className='modal__body'>{body}</div>
    <div className='modal__footer'>{footer}</div>
  </div>
);

export default Modal;
