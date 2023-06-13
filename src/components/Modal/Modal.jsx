import ReactModal from 'react-modal';
import { Overlay, ModalStyled } from './Modal.styled';

const Modal = ({ isOpen, onRequestClose, imageURL, imageAlt }) => {
  return (
    <ReactModal isOpen={isOpen} onRequestClose={onRequestClose}>
      <Overlay>
        <ModalStyled>
          <img src={imageURL} alt={imageAlt} />
          <span>text</span>
        </ModalStyled>
      </Overlay>
    </ReactModal>
  );
};

ReactModal.setAppElement('#root');

export default Modal;
