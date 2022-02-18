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
        .then(response => response.data.hits)
        .then(images => this.setState({ images }));
    }
  }

  render() {
    const { images } = this.state;

    return (
      <ul className={s.Gallery}>
        {images &&
          images.map(image => (
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
