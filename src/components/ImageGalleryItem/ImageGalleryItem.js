const ImageGalleryItem = ({ imageLink, alt }) => {
  return (
    <li>
      <img src={imageLink} alt={alt} />
    </li>
  );
};

export default ImageGalleryItem;
