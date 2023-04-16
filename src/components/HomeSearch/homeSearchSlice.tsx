import { createSlice } from '@reduxjs/toolkit';
import { HomeFetchData } from '../../specs/interfaces';
import { storageKey } from '../../specs/consts';

interface HomeSearch {
  text: string;
  results: HomeFetchData | null;
}

interface State {
  homeSearch: HomeSearch;
}

const initialState: HomeSearch = {
  text: localStorage.getItem(storageKey) || '',
  results: null,
};

export const homeSearchSlice = createSlice({
  name: 'homeSearch',
  initialState,
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
