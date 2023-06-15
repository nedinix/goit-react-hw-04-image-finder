import Modal from 'react-modal';
import { Image } from './Modal.styled';
// import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

Modal.setAppElement('#root');

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

const ModalImage = ({
  isOpen,
  onRequestClose,
  onAfterOpen,
  onAfterClose,
  image,
}) => {
  const { imageURL, tags } = image;
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      // onAfterOpen={disableBodyScroll}
      // onAfterClose={enableBodyScroll}
      style={modalStyle}
    >
      <Image src={imageURL} alt={tags} />
    </Modal>
  );
};

export default ModalImage;
