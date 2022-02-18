import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';

import './App.css';

export default class App extends Component {
  state = {
    imageName: '',
  };

  handleFormSubmit = query => {
    this.setState({ imageName: query });
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery imageName={this.state.imageName} />
        <ToastContainer />
      </div>
    );
  }
}
