import { createSlice } from '@reduxjs/toolkit';
import { HomeFetchData } from '../../specs/interfaces';
import { storageKey } from '../../specs/consts';

interface State {
  homeSearch: {
    value: string;
    data: HomeFetchData | null;
  };
}

export const homeSearchSlice = createSlice({
  name: 'homeSearch',
  initialState: {
    value: localStorage.getItem(storageKey) || '',
    data: null,
  },
  reducers: {
    changeValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeValue } = homeSearchSlice.actions;

export const homeSearchValue = (state: State) => state.homeSearch.value;

export default homeSearchSlice.reducer;
