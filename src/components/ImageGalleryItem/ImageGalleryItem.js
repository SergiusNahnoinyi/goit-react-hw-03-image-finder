import s from './ImageGalleryItem.module.css';

export default function ImageGalleryItem() {
  return (
    <li className={s.Item}>
      <img className={s.ItemImage} src="" alt="" />
    </li>
  );
}
