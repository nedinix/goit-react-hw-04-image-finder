import { ImageGalleryItemStyled, ImageStyled } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ imageLink, alt, onClick }) => {
  return (
    <ImageGalleryItemStyled onClick={onClick}>
      <ImageStyled src={imageLink} alt={alt} />
    </ImageGalleryItemStyled>
  );
};

ImageGalleryItem.propTypes = {
  imageLink: PropTypes.string,
  alt: PropTypes.string,
  onClick: PropTypes.func,
};

export default ImageGalleryItem;
