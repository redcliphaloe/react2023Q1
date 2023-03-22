import './Cards.css';
import Card from './Card';
import cardsData from './cardsData';

function Cards() {
  return (
    <section className="cards">
      {cardsData.map((el) => (
        <Card {...el} key={el.num} />
      ))}
    </section>
  );
}

export default Cards;
