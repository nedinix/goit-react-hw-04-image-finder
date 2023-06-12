import { Component } from 'react';
import { fetchImages } from 'api-service';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Loader from './Loader';

class App extends Component {
  abortCtrl;

  state = {
    searchQuery: '',
    page: 1,
    images: [],
    isLoading: false,
    isShowBtn: false,
    isEmpty: false,
    error: null,
  };

  async componentDidUpdate(_, prevState) {
    const { searchQuery, page } = this.state;
    if (prevState.searchQuery !== searchQuery || prevState.page !== page) {
      this.getImages(this.state);
      console.log('update');
    }
  }

  getImages = async ({ searchQuery, page }) => {
    try {
      if (this.abortCtrl) {
        this.abortCtrl.abort();
      }
      this.abortCtrl = new AbortController();
      this.setState({ isLoading: true });
      const response = await fetchImages(searchQuery, page, this.abortCtrl);
      console.log('response', response);
      const {
        data: { hits, totalHits },
        config: {
          params: { page: currentPage, per_page },
        },
      } = response;

      console.log('config page', currentPage);

      if (!hits.length) {
        this.setState({ isEmpty: true });
        return;
      }

      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        isShowBtn: currentPage < Math.ceil(totalHits / per_page),
      }));
    } catch (e) {
      this.setState({ error: e.message });
    } finally {
      this.setState({ isLoading: false });
      console.log(this.state);
    }
  };

  handleSearchSubmit = ({ query }) => {
    this.setState({
      searchQuery: query,
      page: 1,
      images: [],
      isLoading: false,
      isShowBtn: false,
      isEmpty: false,
      error: null,
    });
  };

  handleClickBtnLoadmore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, isEmpty, isLoading, isShowBtn } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <ImageGallery images={images} />
        {isEmpty && <p>Sorry. There are no images ... 😭</p>}
        {isShowBtn && <Button onClick={this.handleClickBtnLoadmore} />}
        {isLoading && <Loader />}
      </div>
    );
  }
}
export default App;
