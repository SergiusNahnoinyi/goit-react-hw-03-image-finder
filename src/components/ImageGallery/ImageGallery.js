import s from './ImageGallery.module.css';
import { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem';
import axios from 'axios';

export default class ImageGallery extends Component {
  state = {
    images: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.imageName;
    const nextName = this.props.imageName;

    if (prevName !== nextName) {
      axios
        .get(
          `https://pixabay.com/api/?q=${nextName}&page=1&key=24778312-18f63a423fbed9787418fdc16&image_type=photo&orientation=horizontal&per_page=12`,
        )
        .then(response => response.data)
        .then(images => this.setState({ images }));
    }
  }

  render() {
    return (
      <ul className={s.Gallery}>
        <ImageGalleryItem />
      </ul>
    );
  }
}
