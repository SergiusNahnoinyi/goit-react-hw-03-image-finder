import s from './ImageGallery.module.css';
import { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem';
import Button from '../Button';
import axios from 'axios';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default class ImageGallery extends Component {
  state = {
    currentPage: 1,
    images: [],
    status: Status.IDLE,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.imageName;
    const nextName = this.props.imageName;
    const prevPage = prevState.currentPage;
    const currentPage = this.state.currentPage;

    if (prevName !== nextName) {
      this.setState({ currentPage: 1, images: [] }, () =>
        this.getImages(nextName, 1),
      );
    }
    if (prevPage <= currentPage && prevPage !== currentPage) {
      this.getImages(nextName, currentPage);
    }
  }

  getImages = (nextName, currentPage) => {
    axios.defaults.baseURL = 'https://pixabay.com/api/';
    const API_KEY = '24778312-18f63a423fbed9787418fdc16';

    axios
      .get(
        `?q=${nextName}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
      )
      .then(response => response.data.hits)
      .then(images => {
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          status: Status.RESOLVED,
        }));
      });
  };

  incrementPage = () => {
    this.setState(prevState => ({ currentPage: prevState.currentPage + 1 }));
  };

  render() {
    const { images, status } = this.state;

    if (status === 'idle') {
      return <ul className={s.Gallery}></ul>;
    }

    if (status === 'resolved') {
      return (
        <>
          <ul className={s.Gallery}>
            {images.map(image => (
              <ImageGalleryItem
                key={image.id}
                imageURL={image.webformatURL}
                name={image.tags}
              />
            ))}
          </ul>
          <Button onLoadMore={this.incrementPage} />
        </>
      );
    }
  }
}
