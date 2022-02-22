import { Component } from 'react';
import { ToastContainer } from 'react-toastify';

import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Modal from './components/Modal';

import 'react-toastify/dist/ReactToastify.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './App.css';

export default class App extends Component {
  state = {
    imageName: '',
    showModal: false,
  };

  handleFormSubmit = query => {
    this.setState({ imageName: query });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery imageName={this.state.imageName} />
        {this.state.showModal && <Modal onClose={this.toggleModal} />}
        <ToastContainer />
      </div>
    );
  }
}
