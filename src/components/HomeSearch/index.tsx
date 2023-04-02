import React, { useEffect, useState } from 'react';
import { HomeSearchPropTypes } from '../../specs/interfaces';
import './style.css';

function HomeSearch(props: HomeSearchPropTypes) {
  const storageKey = 'redcliphaloe-react2023Q1-home-search';
  const { focusedEl } = props;
  const [searchValue, setsearchValue] = useState(localStorage.getItem(storageKey) || '');

  useEffect(() => {
    localStorage.setItem(storageKey, searchValue);
  }, [searchValue]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
