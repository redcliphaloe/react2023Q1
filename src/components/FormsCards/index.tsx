import FormsCard from './FormsCard';
import { FormsFormData } from '../../specs/interfaces';
import './style.css';

interface FormsCardsPropsType {
  formsFormData: FormsFormData[];
}

function FormsCards(props: FormsCardsPropsType) {
  const { formsFormData } = props;

  return (
    <section className="forms-cards">
      {formsFormData.map((el) => (
        <FormsCard {...el} key={el.id} />
      ))}
    </section>
  );
}

export default FormsCards;
