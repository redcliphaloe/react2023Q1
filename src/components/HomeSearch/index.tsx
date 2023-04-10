import { ChangeEvent, KeyboardEvent, MutableRefObject, useEffect, useRef, useState } from 'react';
import './style.css';
import HomeSearchButton from './HomeSearchButton';
import Loader from '../Loader';
import useFetch from '../../services/useFetch';
import { HomeFetchData } from '../../specs/interfaces';

interface HomeSearchPropsType {
  sendSearchValue: (data: HomeFetchData | null) => void;
}

enum KeyCodes {
  enter = 'Enter',
}

function HomeSearch(props: HomeSearchPropsType) {
  const storageKey = 'redcliphaloe-react2023Q1-home-search';
  const { sendSearchValue } = props;
  const focusElementRef = useRef() as MutableRefObject<HTMLInputElement>;
  const [searchValue, setSearchValue] = useState(localStorage.getItem(storageKey) || '');
  const storageValue = useRef(searchValue);
  const [canFetch, setcanFetch] = useState(true);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };
  const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === KeyCodes.enter && searchValue) {
      setcanFetch(true);
    }
  };
  const { error, isPending, data } = useFetch(searchValue, canFetch);

  useEffect(() => {
    sendSearchValue(data);
    setcanFetch(false);
  }, [data, sendSearchValue]);

  useEffect(() => {
    storageValue.current = searchValue;
  }, [searchValue]);

  useEffect(() => {
    focusElementRef.current.focus();
    return () => {
      localStorage.setItem(storageKey, storageValue.current);
    };
  }, []);

  const clearBtnProps = {
    className: 'search__clear',
    onClick: () => {
      setSearchValue('');
      focusElementRef.current.focus();
    },
  };
  const submitBtnProps = {
    className: 'search__submit',
    onClick: () => {
      setcanFetch(true);
      focusElementRef.current.focus();
    },
  };

  return (
    <>
      <div className="search">
        <input
          className="search__text"
          type="text"
          placeholder="Введите наименование"
          autoComplete="off"
          value={searchValue}
          onChange={handleChange}
          onKeyUp={handleKeyUp}
          ref={focusElementRef}
        />
        {searchValue && <HomeSearchButton {...clearBtnProps} />}
        {searchValue && <HomeSearchButton {...submitBtnProps} />}
      </div>
      {isPending && <Loader />}
      {!isPending && error && <div>{error}</div>}
      {!isPending && !error && !!data?.results.length && (
        <div style={{ display: 'inline-block' }}></div>
      )}
      {!isPending && !error && !data?.results.length && <div>No data found for this query</div>}
    </>
  );
}

export default HomeSearch;
