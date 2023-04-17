import FormsCard from './FormsCard';
import './style.css';
import { useSelector } from 'react-redux';
import { cardsData } from '../FormsForm/formsFormSlice';

const FormsCards = () => {
  const formsFormData = useSelector(cardsData);

  return (
    <section className="forms-cards">
      {formsFormData.map((el) => (
        <FormsCard {...el} key={el.id} />
      ))}
    </section>
  );
};

export default FormsCards;
