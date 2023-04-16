import { ChangeEvent, KeyboardEvent, MutableRefObject, useEffect, useRef, useState } from 'react';
import './style.css';
import HomeSearchButton from './HomeSearchButton';
import Loader from '../Loader';
import useFetch from '../../services/useFetch';
import { storageKey } from '../../specs/consts';
import { homeSearchValue, changeValue } from './homeSearchSlice';
import { useDispatch, useSelector } from 'react-redux';

enum KeyCodes {
  enter = 'Enter',
}

const HomeSearch = () => {
  const focusElementRef = useRef() as MutableRefObject<HTMLInputElement>;
  const searchValue = useSelector(homeSearchValue);
  const dispatch = useDispatch();
  const [canFetch, setCanFetch] = useState(true);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeValue(event.target.value));
  };

  const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === KeyCodes.enter) {
      setCanFetch(true);
    }
  };

  useEffect(() => {
    focusElementRef.current.focus();
  }, []);

  const { error, isPending, data } = useFetch(searchValue, canFetch);

  useEffect(() => {
    setCanFetch(false);
    localStorage.setItem(storageKey, searchValue);
  }, [canFetch, searchValue]);

  const clearBtnProps = {
    className: 'search__clear',
    onClick: () => {
      dispatch(changeValue(''));
      focusElementRef.current.focus();
    },
  };

  const submitBtnProps = {
    className: 'search__submit',
    onClick: () => {
      setCanFetch(true);
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
        <HomeSearchButton {...submitBtnProps} />
      </div>
      {isPending && <Loader />}
      {!isPending && error && <div>{error}</div>}
      {!isPending && !error && !!data?.results.length && (
        <div style={{ display: 'inline-block' }}></div>
      )}
      {!isPending && !error && !data?.results.length && <div>No data found for this query</div>}
    </>
  );
};

export default HomeSearch;
