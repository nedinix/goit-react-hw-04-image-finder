import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryStyled } from './ImageGallery.styled';
import PropTypes from 'prop-types';

const ImageGallery = ({ images }) => {
  return (
    <ImageGalleryStyled>
      {images.map(({ id, webformatURL, tags }) => {
        return (
          <ImageGalleryItem key={id} imageLink={webformatURL} alt={tags} />
        );
      })}
    </ImageGalleryStyled>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      webformatURL: PropTypes.string,
      tags: PropTypes.string,
    })
  ),
};

export default ImageGallery;
