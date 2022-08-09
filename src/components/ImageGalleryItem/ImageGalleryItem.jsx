import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ onImageClick, image }) => {
  const { webformatURL, tags, largeImageURL } = image;

  return (
    <p className={s.item} onClick={() => onImageClick({ tags, largeImageURL })}>
      <img className={s.image} src={webformatURL} alt={tags} />
    </p>
  );
};

ImageGalleryItem.propTypes = {
  onImageClick: PropTypes.func.isRequired,
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }),
};

export default ImageGalleryItem;
