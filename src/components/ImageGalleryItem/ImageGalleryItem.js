import s from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ imageURL, name, onClick }) {
  return (
    <li className={s.Item} onClick={onClick}>
      <img className={s.ItemImage} src={imageURL} alt={name} />
    </li>
  );
}
