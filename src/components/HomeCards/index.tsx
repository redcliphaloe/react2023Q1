import './style.css';
import HomeCard from './HomeCard';
import { HomeCardAltData } from '../../specs/interfaces';

interface HomeCardsPropsType {
  homeCardsData: HomeCardAltData[];
}

function HomeCards(props: HomeCardsPropsType) {
  const { homeCardsData } = props;

  return (
    <section className="home-cards">
      {homeCardsData.map((el) => (
        <HomeCard {...el} key={el.id} />
      ))}
    </section>
  );
}

export default HomeCards;
