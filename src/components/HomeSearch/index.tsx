import { ChangeEvent, MutableRefObject, useEffect, useState } from 'react';
import './style.css';

interface HomeSearchPropsType {
  focusedEl: MutableRefObject<HTMLInputElement>;
}

function HomeSearch(props: HomeSearchPropsType) {
  const storageKey = 'redcliphaloe-react2023Q1-home-search';
  const { focusedEl } = props;
  const [searchValue, setsearchValue] = useState(localStorage.getItem(storageKey) || '');

  useEffect(() => {
    localStorage.setItem(storageKey, searchValue);
  }, [searchValue]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setsearchValue(event.target.value);
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
