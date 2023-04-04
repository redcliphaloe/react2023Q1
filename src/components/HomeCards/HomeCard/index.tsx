import './style.css';

interface HomeCardData {
  num: string;
  name: string;
  count: string;
  year: string;
  shape: string;
  color: string;
  size: string;
  favorite: string;
}

function HomeCard(props: HomeCardData) {
  const { name, count, year, shape, color, size, favorite } = props;

  return (
    <div className="home-card">
      <h3 className="home-card__name">{name}</h3>
      <div className="home-card__img"></div>
      <p className="home-card__count">Количество: {count}</p>
      <p className="home-card__year">Год выхода: {year}</p>
      <p className="home-card__shape">Форма: {shape}</p>
      <p className="home-card__color">Цвет: {color}</p>
      <p className="home-card__size">Размер: {size}</p>
      <p className="home-card__favorite">Популярный: {favorite}</p>
    </div>
  );
}

export default HomeCard;
