import React, { useState } from 'react';
import PagesLinks from '../../components/PagesLinks';
import FormsForm from '../../components/FormsForm';
import FormsCards from '../../components/FormsCards';
import { FormsFormData } from '../../specs/interfaces';

function Forms() {
  const [formsFormData, setFormsFormData] = useState<FormsFormData[]>([]);
  const [formsFormDataIdCounter, setFormsFormDataIdCounter] = useState(0);

  const getFormData = (data: FormsFormData) => {
    setFormsFormData([...formsFormData, data]);
    setFormsFormDataIdCounter(data.id);
  };

  const formsFormProps = { sendData: getFormData, prevId: formsFormDataIdCounter };
  const formsCardsProps = { formsFormData: formsFormData };

  return (
    <>
      <PagesLinks />
      <h1>Forms</h1>
      <FormsForm {...formsFormProps} />
      <FormsCards {...formsCardsProps} />
    </>
  );
}

export default Forms;
