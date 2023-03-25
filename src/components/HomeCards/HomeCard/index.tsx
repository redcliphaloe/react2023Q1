import React from 'react';
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

class Card extends React.Component {
  constructor(props: HomeCardData) {
    super(props);
  }

  render() {
    const homeCardData = this.props as HomeCardData;
    return (
      <div className="home-card">
        <h3 className="home-card__name">{homeCardData.name}</h3>
        <div className="home-card__img"></div>
        <p className="home-card__count">Количество: {homeCardData.count}</p>
        <p className="home-card__year">Год выхода: {homeCardData.year}</p>
        <p className="home-card__shape">Форма: {homeCardData.shape}</p>
        <p className="home-card__color">Цвет: {homeCardData.color}</p>
        <p className="home-card__size">Размер: {homeCardData.size}</p>
        <p className="home-card__favorite">Популярный: {homeCardData.favorite}</p>
      </div>
    );
  }
}

export default Card;
