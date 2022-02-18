import s from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ imageURL, name }) {
  return (
    <li className={s.Item}>
      <img className={s.ItemImage} src={imageURL} alt={name} />
    </li>
  );
}
