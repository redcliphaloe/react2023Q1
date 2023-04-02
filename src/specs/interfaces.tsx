import { MutableRefObject } from 'react';

export interface FormsFormData {
  id: number;
  photo: string;
  name: string;
  sex: string;
  birthDate: string;
  continent: string;
}

export interface HomeSearchPropTypes {
  focusedEl: MutableRefObject<HTMLInputElement>;
}
