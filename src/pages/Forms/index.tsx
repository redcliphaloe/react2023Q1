import React from 'react';
import PagesLinks from '../../components/PagesLinks';
import FormsForm from '../../components/FormsForm';
import FormsCards from '../../components/FormsCards';
import { FormsFormData } from '../../specs/interfaces';

class Forms extends React.Component<
  object,
  { formsFormData: FormsFormData[]; formsFormDataIdCounter: number }
> {
  constructor(props: object) {
    super(props);
    this.state = {
      formsFormData: [],
      formsFormDataIdCounter: 0,
    };
  }

  getFormData = (data: FormsFormData) => {
    this.setState({
      formsFormData: [...this.state.formsFormData, data],
      formsFormDataIdCounter: data.id,
    });
  };

  render() {
    return (
      <>
        <PagesLinks />
        <h1>Forms</h1>
        <FormsForm sendData={this.getFormData} prevId={this.state.formsFormDataIdCounter} />
        <FormsCards formsFormData={this.state.formsFormData} />
      </>
    );
  }
}

export default Forms;
