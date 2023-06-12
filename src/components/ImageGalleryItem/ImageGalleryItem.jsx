import { ImageGalleryItemStyled, ImageStyled } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ imageLink, alt }) => {
  return (
    <ImageGalleryItemStyled>
      <ImageStyled src={imageLink} alt={alt} />
    </ImageGalleryItemStyled>
  );
};

ImageGalleryItem.propTypes = {
  imageLink: PropTypes.string,
  alt: PropTypes.string,
};

export default ImageGalleryItem;
