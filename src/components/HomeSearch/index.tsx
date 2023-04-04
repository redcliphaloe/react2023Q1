import { ChangeEvent, MutableRefObject, useEffect, useRef, useState } from 'react';
import './style.css';

interface HomeSearchPropsType {
  focusedEl: MutableRefObject<HTMLInputElement>;
}

function HomeSearch(props: HomeSearchPropsType) {
  const storageKey = 'redcliphaloe-react2023Q1-home-search';
  const { focusedEl } = props;
  const [searchValue, setSearchValue] = useState(localStorage.getItem(storageKey) || '');
  const storageValue = useRef(searchValue);

  useEffect(() => {
    storageValue.current = searchValue;
  }, [searchValue]);

  useEffect(() => {
    return () => {
      localStorage.setItem(storageKey, storageValue.current);
    };
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="search">
      <div className="search__img"></div>
      <input
        className="search__text"
        type="text"
        placeholder="Введите наименование"
        autoComplete="off"
        value={searchValue}
        onChange={handleChange}
        ref={focusedEl}
      />
      <button className="search__clear"></button>
    </div>
  );
}

export default HomeSearch;
