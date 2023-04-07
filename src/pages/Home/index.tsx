import { MutableRefObject, useEffect, useRef, useState } from 'react';
import PagesLinks from '../../components/PagesLinks';
import HomeSearch from '../../components/HomeSearch';
import HomeCards from '../../components/HomeCards';

function Home() {
  const [searchValue, setSearchValue] = useState('');
  const focusElementRef = useRef() as MutableRefObject<HTMLInputElement>;

  useEffect(() => focusElementRef.current.focus());

  const homeSearchProps = {
    searchRef: focusElementRef,
    sendSearchValue: (value: string) => setSearchValue(value),
  };

  return (
    <>
      <PagesLinks />
      <h1>Home</h1>
      <HomeSearch {...homeSearchProps} />
      <HomeCards {...{ searchValue }} />
    </>
  );
}

export default Home;
