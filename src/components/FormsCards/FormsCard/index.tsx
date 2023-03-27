import React from 'react';
import { FormsFormData } from '../../../specs/interfaces';
import './style.css';

class FormsCard extends React.Component {
  constructor(props: FormsFormData) {
    super(props);
  }

  render() {
    const formsFormData = this.props as FormsFormData;
    return (
      <div className="forms-card">
        <div
          className="forms-card__img"
          style={{ backgroundImage: `url(${formsFormData.photo})` }}
        ></div>
        <p className="forms-card__name">Name: {formsFormData.name}</p>
        <p className="forms-card__sex">Sex: {formsFormData.sex}</p>
        <p className="forms-card__birhDate">Date of birth: {formsFormData.birhDate}</p>
        <p className="forms-card__continent">Continent: {formsFormData.continent}</p>
      </div>
    );
  }
}

export default FormsCard;
