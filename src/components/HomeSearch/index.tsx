import { ChangeEvent, KeyboardEvent, MutableRefObject, useEffect, useRef } from 'react';
import './style.css';
import HomeSearchButton from './HomeSearchButton';
import Loader from '../Loader';
import {
  text,
  changeValue,
  results,
  skipApi,
  submitValue,
  isLoadingApi,
  errorTextApi,
} from './homeSearchSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useGetUnsplashDataByQueryQuery } from '../../services/unsplash';

enum KeyCodes {
  enter = 'Enter',
}

const HomeSearch = () => {
  const focusElementRef = useRef() as MutableRefObject<HTMLInputElement>;
  const searchValue = useSelector(text);
  const searchData = useSelector(results);
  const skip = useSelector(skipApi);
  const isLoading = useSelector(isLoadingApi);
  const errorText = useSelector(errorTextApi);
  const dispatch = useDispatch();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeValue(event.target.value));
  };

  const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === KeyCodes.enter) {
      dispatch(submitValue());
    }
  };

  useEffect(() => {
    focusElementRef.current.focus();
  }, []);

  useGetUnsplashDataByQueryQuery(searchValue, { skip });

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
      dispatch(submitValue());
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
      {isLoading && <Loader />}
      {!isLoading && errorText && <div>{errorText}</div>}
      {!isLoading && !errorText && !!searchData?.results.length && (
        <div style={{ display: 'inline-block' }}></div>
      )}
      {!isLoading && !errorText && !searchData?.results.length && (
        <div>No data found for this query</div>
      )}
    </>
  );
};

export default HomeSearch;
