import React, { useEffect, useState, useRef } from 'react';
import { fetchImages } from 'api-service';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Loader from './Loader';
import { Container } from './App.styled';
import Modal from './Modal/Modal';
import PropTypes from 'prop-types';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [respData, setRespData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isShowBtn, setIsShowBtn] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState({});

  const abortCtrl = useRef();

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    if (searchQuery.includes('id/'))
      setSearchQuery(query => query.split('/')[1]);

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

        const {
          data: { hits, totalHits },
          config: {
            params: { page: currentPage, per_page },
          },
        } = response;

        const loadMoreButtonState =
          currentPage < Math.ceil(totalHits / per_page);

        hits.length
          ? setGalleryImagesToState(hits, loadMoreButtonState)
          : setIsEmpty(true);

        if (error !== null) setError(null);
      } catch (e) {
        setError(e.message);
        console.log(e.message);
      } finally {
        setIsLoading(false);
      }
    }
    getImages(searchQuery, page, abortCtrl.current);
  }, [searchQuery, page, error]);

  useEffect(() => {
    if (!respData.length) {
      return;
    }
    setIsEmpty(false);
    if (page > 1)
      window.scrollBy({
        top: window.innerHeight - 72 * 2.5,
        behavior: 'smooth',
      });
  }, [respData, page]);

  const setGalleryImagesToState = (newImages, btnState) => {
    if (newImages.length) {
      setIsEmpty(false);
    }
    setRespData(respData => [...respData, ...newImages]);
    setIsShowBtn(btnState);
  };

  const handleSearchSubmit = async ({ query }) => {
    if (!query) {
      return;
    }

    searchQuery === query
      ? setSearchQuery(`${Date.now()}id/${query}`)
      : setSearchQuery(query);
    setPage(1);
    setRespData([]);
    setIsLoading(false);
    setIsShowBtn(false);
    setIsEmpty(false);
    setError(null);
    setModalImage({});
  };

  const handleClickBtnLoadmore = () => setPage(page => page + 1);

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
        {isEmpty && (
          <p style={{ textAlign: 'center' }}>
            Sorry. There are no images ... 😭
          </p>
        )}
        {isShowBtn && <Button onClick={handleClickBtnLoadmore} />}
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
  page: PropTypes.number,
  images: PropTypes.array,
  isLoading: PropTypes.bool,
  isShowBtn: PropTypes.bool,
  isEmpty: PropTypes.bool,
  error: PropTypes.string,
  isModalOpen: PropTypes.bool,
  modalImage: PropTypes.object,
};

export default App;
