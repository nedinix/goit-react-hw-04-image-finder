import ReactModal from 'react-modal';
import { Overlay, ModalStyled } from './Modal.styled';

const ModalImage = ({ image }) => {
  const { imageURL, tags } = image;
  return (
    <Overlay>
      <ModalStyled>
        <img src={imageURL} alt={tags} />
      </ModalStyled>
    </Overlay>
  );
};

ReactModal.setAppElement('#root');

export default ModalImage;
