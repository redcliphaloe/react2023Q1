import { FormsFormData } from '../../../specs/interfaces';
import './style.css';

function FormsCard(props: FormsFormData) {
  const { photo, name, sex, birthDate, continent } = props;

  return (
    <div className="forms-card">
      <div className="forms-card__img" style={{ backgroundImage: `url(${photo})` }}></div>
      <p className="forms-card__name">Name: {name}</p>
      <p className="forms-card__sex">Sex: {sex}</p>
      <p className="forms-card__birhDate">Date of birth: {birthDate}</p>
      <p className="forms-card__continent">Continent: {continent}</p>
    </div>
  );
}

export default FormsCard;
