import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import s from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

export default function ImageGallery({ images, onImageClick, page }) {
  let itemRef = useRef(null);

  useEffect(() => {
    itemRef.current &&
      itemRef.current.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }, [images]);

  return (
    <ul className={s.list}>
      {images.map((image, idx) => (
        <li ref={(page - 1) * 12 + 1 === idx ? itemRef : null} key={image.id}>
          <ImageGalleryItem image={image} onImageClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onImageClick: PropTypes.func.isRequired,
  page: PropTypes.number,
};
