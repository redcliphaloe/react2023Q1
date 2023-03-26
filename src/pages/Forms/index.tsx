import React from 'react';
import PagesLinks from '../../components/PagesLinks';
import FormsForm from '../../components/FormsForm';
import FormsCards from '../../components/FormsCards';
import { FormsFormData } from '../../specs/interfaces';

class Home extends React.Component<
  React.ReactPropTypes,
  { formsFormData: FormsFormData[]; formsFormDataIdCounter: number }
> {
  constructor(props: React.ReactPropTypes) {
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
        <FormsCards />
      </>
    );
  }
}

export default Home;
