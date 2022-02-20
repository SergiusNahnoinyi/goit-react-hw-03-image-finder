import s from './Button.module.css';

export default function Button({ onLoadMore }) {
  return (
    <button className={s.Button} type="button" onClick={() => onLoadMore()}>
      Load more
    </button>
  );
}
