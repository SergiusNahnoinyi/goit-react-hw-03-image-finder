import s from './ImageGallery.module.css';
import { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem';

export default class ImageGallery extends Component {
  state = {};

  render() {
    return (
      <ul className={s.Gallery}>
        <ImageGalleryItem />
      </ul>
    );
  }
}
