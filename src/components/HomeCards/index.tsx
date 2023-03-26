import './style.css';
import HomeCard from './HomeCard';
import homeCardsData from './homeCardsData';

function HomeCards() {
  return (
    <section className="home-cards">
      {homeCardsData.map((el) => (
        <HomeCard {...el} key={el.num} />
      ))}
    </section>
  );
}

export default HomeCards;
