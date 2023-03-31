import React from 'react';
import FormsCard from './FormsCard';
import { FormsFormData } from '../../specs/interfaces';
import './style.css';

class FormsCards extends React.Component<{ formsFormData: FormsFormData[] }> {
  render() {
    return (
      <section className="forms-cards">
        {this.props.formsFormData.map((el) => (
          <FormsCard {...el} key={el.id} />
        ))}
      </section>
    );
  }
}

export default FormsCards;
