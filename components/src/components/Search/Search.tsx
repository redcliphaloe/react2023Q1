import './Search.css';

function Search() {
  return (
    <div className="search">
      <div className="search__img"></div>
      <input
        className="search__text"
        type="text"
        placeholder="Введите наименование"
        autoComplete="off"
      />
      <button className="search__clear"></button>
    </div>
  );
}

export default Search;
