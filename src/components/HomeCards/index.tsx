import './style.css';
import HomeCard from './HomeCard';
import { useSelector } from 'react-redux';
import { results } from '../HomeSearch/homeSearchSlice';

const HomeCards = () => {
  const homeCardsData = useSelector(results);

  return (
    <section className="home-cards">
      {homeCardsData?.results &&
        homeCardsData.results.map((el) => <HomeCard {...el} key={el.id} />)}
    </section>
  );
};

export default HomeCards;
