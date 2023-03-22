import React from 'react';
import './Card.css';

interface CardData {
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
  constructor(props: CardData) {
    super(props);
  }

  render() {
    const cardData = this.props as CardData;
    return (
      <div className="card">
        <h3 className="card__name">{cardData.name}</h3>
        <div className="card__img"></div>
        <p className="card__count">Количество: {cardData.count}</p>
        <p className="card__year">Год выхода: {cardData.year}</p>
        <p className="card__shape">Форма: {cardData.shape}</p>
        <p className="card__color">Цвет: {cardData.color}</p>
        <p className="card__size">Размер: {cardData.size}</p>
        <p className="card__favorite">Популярный: {cardData.favorite}</p>
      </div>
    );
  }
}

export default Card;
