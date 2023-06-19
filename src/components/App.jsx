import React, { useEffect, useState, useRef } from 'react';
import { fetchImages } from 'api-service';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Loader from './Loader';
import { Container } from './App.styled';
import Modal from './Modal/Modal';
import PropTypes from 'prop-types';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [respData, setRespData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isShowLoadmoreButton, setIsShowLoadmoreButton] = useState(false);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState({});

  const abortCtrl = useRef();

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    const normalizedSearchQuery = searchQuery.includes('id/')
      ? searchQuery.split('/')[1]
      : searchQuery;

    async function getImages(query, page, abortCtrl) {
      if (abortCtrl) abortCtrl.abort();
      abortCtrl = new AbortController();

      try {
        setIsLoading(true);
        const response = await fetchImages({
          query,
          page,
          abortCtrl,
        });

        const { hits, totalHits } = response.data;
        const { page: currentPage, per_page } = response.config.params;

        const isShowLoadmoreButton =
          currentPage < Math.ceil(totalHits / per_page);

        if (!hits.length) throw new Error('Sorry. There are no images ... 😭');
        setRespData(respData => [...respData, ...hits]);
        setIsShowLoadmoreButton(isShowLoadmoreButton);
        setError(null);
      } catch (e) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    }
    getImages(normalizedSearchQuery, currentPage, abortCtrl.current);
  }, [searchQuery, currentPage]);

  useEffect(() => {
    if (currentPage > 1)
      window.scrollBy({
        top: window.innerHeight - 72 * 2.5,
        behavior: 'smooth',
      });
  }, [respData, currentPage]);

  const handleSearchSubmit = async ({ query }) => {
    query === searchQuery
      ? setSearchQuery(`${Date.now()}id/${query}`)
      : setSearchQuery(query);
    setCurrentPage(1);
    setRespData([]);
    setIsLoading(false);
    setIsShowLoadmoreButton(false);
    setError(null);
    setModalImage({});
  };

  const handleClickBtnLoadmore = () =>
    setCurrentPage(currentPage => currentPage + 1);

  const openModal = (link, tags) => {
    setIsModalOpen(true);
    setModalImage({ imageURL: link, alt: tags });
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <Container>
      <Searchbar onSubmit={handleSearchSubmit} />
      <main>
        <ImageGallery images={respData} onClickImage={openModal} />
        {isShowLoadmoreButton && <Button onClick={handleClickBtnLoadmore} />}
        {isLoading && <Loader />}
        {error && <p style={{ textAlign: 'center', color: 'red' }}>{error}</p>}
        <Modal
          isOpen={isModalOpen}
          onCloseModal={closeModal}
          image={modalImage}
        />
      </main>
    </Container>
  );
};

App.propTypes = {
  searchQuery: PropTypes.string,
  currentPage: PropTypes.number,
  images: PropTypes.array,
  isLoading: PropTypes.bool,
  isShowLoadmoreButton: PropTypes.bool,
  isEmpty: PropTypes.bool,
  error: PropTypes.string,
  isModalOpen: PropTypes.bool,
  modalImage: PropTypes.object,
};

export default App;
