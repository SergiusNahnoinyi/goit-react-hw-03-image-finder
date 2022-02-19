import s from './ImageGallery.module.css';
import { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem';
import axios from 'axios';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default class ImageGallery extends Component {
  state = {
    images: null,
    status: Status.IDLE,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.imageName;
    const nextName = this.props.imageName;

    if (prevName !== nextName) {
      axios
        .get(
          `https://pixabay.com/api/?q=${nextName}&page=1&key=24778312-18f63a423fbed9787418fdc16&image_type=photo&orientation=horizontal&per_page=12`,
        )
        .then(response => response.data.hits)
        .then(images => this.setState({ images, status: Status.RESOLVED }));
    }
  }

  render() {
    const { images, status } = this.state;

    if (status === 'idle') {
      return <ul className={s.Gallery}></ul>;
    }

    if (status === 'resolved') {
      return (
        <ul className={s.Gallery}>
          {images.map(image => (
            <ImageGalleryItem
              key={image.id}
              imageURL={image.webformatURL}
              name={image.tags}
            />
          ))}
        </ul>
      );
    }
  }
}
