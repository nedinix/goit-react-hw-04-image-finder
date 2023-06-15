import ReactModal from 'react-modal';
import { Image, CrossIcon } from './Modal.styled';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import PropTypes from 'prop-types';

ReactModal.setAppElement('#root');

const modalStyle = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: '1200',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    padding: '0',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'unset',
    border: 'unset',
  },
};

const Modal = ({ isOpen, onCloseModal, image }) => {
  const { imageURL, tags } = image;
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onCloseModal}
      onAfterOpen={() => disableBodyScroll(document)}
      onAfterClose={() => enableBodyScroll(document)}
      style={modalStyle}
      bodyOpenClassName={null}
    >
      <CrossIcon onClick={onCloseModal} size={32} />
      <Image src={imageURL} alt={tags} />
    </ReactModal>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      imageURL: PropTypes.string,
      tags: PropTypes.string,
    })
  ),
};

export default Modal;
