import { ChangeEvent, KeyboardEvent, MutableRefObject, useEffect, useRef, useState } from 'react';
import './style.css';
import HomeSearchButton from './HomeSearchButton';

interface HomeSearchPropsType {
  searchRef: MutableRefObject<HTMLInputElement>;
  sendSearchValue: (data: string) => void;
}

enum KeyCodes {
  enter = 'Enter',
}

function HomeSearch(props: HomeSearchPropsType) {
  const storageKey = 'redcliphaloe-react2023Q1-home-search';
  const { searchRef, sendSearchValue } = props;
  const [searchValue, setSearchValue] = useState(localStorage.getItem(storageKey) || '');
  const storageValue = useRef(searchValue);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };
  const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === KeyCodes.enter && searchValue) {
      sendSearchValue(searchValue);
    }
  };

  useEffect(() => {
    storageValue.current = searchValue;
  }, [searchValue]);

  useEffect(() => {
    return () => {
      localStorage.setItem(storageKey, storageValue.current);
    };
  }, []);

  sendSearchValue(searchValue);

  const clearBtnProps = {
    className: 'search__clear',
    onClick: () => {
      setSearchValue('');
      searchRef.current.focus();
    },
  };
  const submitBtnProps = {
    className: 'search__submit',
    onClick: () => {
      sendSearchValue(searchValue);
      searchRef.current.focus();
    },
  };

  return (
    <div className="search">
      <input
        className="search__text"
        type="text"
        placeholder="Введите наименование"
        autoComplete="off"
        value={searchValue}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
        ref={searchRef}
      />
      {searchValue && <HomeSearchButton {...clearBtnProps} />}
      {searchValue && <HomeSearchButton {...submitBtnProps} />}
    </div>
  );
}

export default HomeSearch;
