import './style.css';
import HomeCard from './HomeCard';
import homeCardsData from './homeCardsData';
import { useEffect } from 'react';

interface HomeCardsPropsType {
  searchValue: string;
}

function HomeCards(props: HomeCardsPropsType) {
  const { searchValue } = props;

  useEffect(() => {
    console.log('------- ', searchValue, ' ---------------');
  }, [searchValue]);

  return (
    <section className="home-cards">
      {homeCardsData.map((el) => (
        <HomeCard {...el} key={el.num} />
      ))}
    </section>
  );
}

export default HomeCards;
