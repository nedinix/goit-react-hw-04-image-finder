import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images }) => {
  return (
    <ul>
      {images.map(({ id, webformatURL, tags }) => {
        return (
          <ImageGalleryItem key={id} imageLink={webformatURL} alt={tags} />
        );
      })}
    </ul>
  );
};

export default ImageGallery;
