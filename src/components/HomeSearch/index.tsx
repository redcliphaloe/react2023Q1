import React from 'react';
import './style.css';

class HomeSearch extends React.Component {
  #searchText = 'redcliphaloe-react2023Q1-home-search';

  constructor(props: React.ReactPropTypes) {
    super(props);
    this.state = {
      value: localStorage.getItem(this.#searchText) || '',
    };
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: event.target.value || '' }, () => {
      localStorage.setItem(this.#searchText, (this.state as React.ComponentState).value);
    });
  };

  render() {
    return (
      <div className="search">
        <div className="search__img"></div>
        <input
          className="search__text"
          type="text"
          placeholder="Введите наименование"
          autoComplete="off"
          value={(this.state as React.ComponentState).value}
          onChange={this.handleChange}
        />
        <button className="search__clear"></button>
      </div>
    );
  }
}

export default HomeSearch;
