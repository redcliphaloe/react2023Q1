import PagesLinks from '../../components/PagesLinks';
import HomeSearch from '../../components/HomeSearch';
import HomeCards from '../../components/HomeCards';
import { useState } from 'react';
import { HomeFetchData } from '../../specs/interfaces';

function Home() {
  const [homeFetchData, setHomeFetchData] = useState<HomeFetchData | null>(null);
  return (
    <>
      <PagesLinks />
      <h1>Home</h1>
      <HomeSearch
        {...{ sendSearchValue: (data: HomeFetchData | null) => setHomeFetchData(data) }}
      />
      {homeFetchData?.results && <HomeCards {...{ homeCardsData: homeFetchData.results }} />}
    </>
  );
}

export default Home;
