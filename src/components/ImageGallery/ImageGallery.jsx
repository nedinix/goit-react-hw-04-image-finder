import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryStyled } from './ImageGallery.styled';
import PropTypes from 'prop-types';

const ImageGallery = ({ images, onClickImage }) => {
  return (
    <ImageGalleryStyled>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => {
        return (
          <ImageGalleryItem
            key={id}
            imageLink={webformatURL}
            alt={tags}
            onClick={() => onClickImage(largeImageURL, tags)}
          />
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
  onClickImage: PropTypes.func.isRequired,
};

export default ImageGallery;
