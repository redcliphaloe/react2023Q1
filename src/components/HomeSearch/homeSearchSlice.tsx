import { createSlice } from '@reduxjs/toolkit';
import { HomeFetchData } from '../../specs/interfaces';
import { storageKey } from '../../specs/consts';

interface State {
  homeSearch: {
    text: string;
    results: HomeFetchData | null;
  };
}

export const homeSearchSlice = createSlice({
  name: 'homeSearch',
  initialState: {
    text: localStorage.getItem(storageKey) || '',
    results: null,
    canFetch: true,
  },
  reducers: {
    changeValue: (state, action) => {
      state.text = action.payload;
    },
    fetchData: (state, action) => {
      state.results = action.payload;
    },
  },
});

export const { changeValue, fetchData } = homeSearchSlice.actions;

export const text = (state: State) => state.homeSearch.text;

export const results = (state: State) => state.homeSearch.results;

export default homeSearchSlice.reducer;
