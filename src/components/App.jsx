import { useState, useEffect } from 'react';
import { Circles } from 'react-loader-spinner';
import s from '../components/App.module.css';
import Searchbar from '../components/Searchbar/Searchbar';
import ImageGallery from '../components/ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import Button from './Button/Button';
import { getFoto } from '../api/Api';

const App = () => {
  const [searchInput, setSearchInput] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [largeImage, setLargeImage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalHits, setTotalHits] = useState(0);

  useEffect(() => {
    getImage();
    // eslint-disable-next-line
  }, [searchInput, page]);

  const updatePage = () => {
    setPage(page + 1);
  };

  const handleSubmit = searchInput => {
    setSearchInput(searchInput);
    setPage(1);

    setImages([]);
    setError(false);
  };

  const getImage = () => {
    if (searchInput !== '') {
      setIsLoading(true);
      getFoto(searchInput, page)
        .then(response =>
          setImages(
            [...images, ...response.data.hits],
            setTotalHits(response.data.totalHits)
          )
        )
        .catch(error => setError('error'))
        .finally(setIsLoading(false));
    }
  };

  const togleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const onImageClick = data => {
    setLargeImage(data);
    togleModal();
  };

  return (
    <div className={s.app}>
      <Searchbar onSubmit={handleSubmit} />
      <ImageGallery page={page} images={images} onImageClick={onImageClick} />
      {isLoading && <Circles color="#00BFFF" height={60} width={60} />}
      {images.length !== 0 && totalHits > images.length && (
        <Button updatePage={updatePage} />
      )}
      {error && 'НАЖАЛЬ ВИНИКЛА ПОМИЛКА'}
      {isModalOpen && <Modal largeImage={largeImage} togleModal={togleModal} />}
    </div>
  );
};

export default App;
