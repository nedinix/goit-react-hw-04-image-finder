import { Component } from 'react';
import Searchbar from './Searchbar';

class App extends Component {
  state = {
    searchQuery: '',
    page: 1,
    images: [],
    isLoading: false,
    isShowBtn: false,
    isEmpty: false,
    error: null,
  };

  handleSearchSubmit = ({ query }, action) => {
    this.setState(({ searchQuery }) => ({
      searchQuery: query,
    }));
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleSearchSubmit} />
      </div>
    );
  }
}
export default App;
