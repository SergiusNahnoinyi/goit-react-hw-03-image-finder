import s from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({
  imageURL,
  largeImage,
  name,
  onClick,
}) {
  return (
    <li className={s.Item} onClick={onClick}>
      <img
        className={s.ItemImage}
        src={imageURL}
        lowsrc={largeImage}
        alt={name}
      />
    </li>
  );
}
