import { createSlice } from '@reduxjs/toolkit';
import { FormsFormData } from '../../specs/interfaces';

interface FormsForm {
  newCardId: number;
  cardsData: FormsFormData[];
}

interface State {
  formsForm: FormsForm;
}

const initialState: FormsForm = {
  newCardId: 0,
  cardsData: [],
};

export const formsFormSlice = createSlice({
  name: 'formsForm',
  initialState,
  reducers: {
    submit: (state, action) => {
      state.newCardId += 1;
      state.cardsData.push(action.payload);
    },
  },
});

export const { submit } = formsFormSlice.actions;

export const newCardId = (state: State) => state.formsForm.newCardId;

export const cardsData = (state: State) => state.formsForm.cardsData;

export default formsFormSlice.reducer;
