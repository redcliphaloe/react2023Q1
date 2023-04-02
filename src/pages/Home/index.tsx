import { MutableRefObject, useEffect, useRef } from 'react';
import PagesLinks from '../../components/PagesLinks';
import HomeSearch from '../../components/HomeSearch';
import HomeCards from '../../components/HomeCards';

function Home() {
  const focusedEl = useRef() as MutableRefObject<HTMLInputElement>;

  useEffect(() => focusedEl.current.focus());

  return (
    <>
      <PagesLinks />
      <h1>Home</h1>
      <HomeSearch {...{ focusedEl: focusedEl }} />
      <HomeCards />
    </>
  );
}

export default Home;
