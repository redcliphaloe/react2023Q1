import { createSlice } from '@reduxjs/toolkit';
import { HomeFetchData } from '../../specs/interfaces';
import { storageKey } from '../../specs/consts';
import { unsplashApi } from '../../services/unsplash';

interface HomeSearch {
  text: string;
  results: HomeFetchData | null;
  skipApi: boolean;
  isLoadingApi: boolean;
  errorTextApi: string;
}

interface State {
  homeSearch: HomeSearch;
}

const initialState: HomeSearch = {
  text: localStorage.getItem(storageKey) || '',
  results: null,
  skipApi: false,
  isLoadingApi: false,
  errorTextApi: '',
};

export const homeSearchSlice = createSlice({
  name: 'homeSearch',
  initialState,
  reducers: {
    changeValue: (state, action) => {
      state.text = action.payload;
    },
    submitValue: (state) => {
      state.skipApi = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(unsplashApi.endpoints.getUnsplashDataByQuery.matchPending, (state) => {
        state.results = null;
        state.skipApi = true;
        state.isLoadingApi = true;
        state.errorTextApi = '';
      })
      .addMatcher(unsplashApi.endpoints.getUnsplashDataByQuery.matchRejected, (state, action) => {
        state.results = null;
        state.skipApi = true;
        state.isLoadingApi = false;
        state.errorTextApi = 'error';
        if (JSON.parse(JSON.stringify(action.payload?.data)).errors) {
          state.errorTextApi = JSON.parse(JSON.stringify(action.payload?.data)).errors[0];
        }
      })
      .addMatcher(unsplashApi.endpoints.getUnsplashDataByQuery.matchFulfilled, (state, action) => {
        state.results = action.payload;
        state.skipApi = true;
        state.isLoadingApi = false;
        state.errorTextApi = '';
      });
  },
});

export const { changeValue, submitValue } = homeSearchSlice.actions;

export const text = (state: State) => state.homeSearch.text;

export const results = (state: State) => state.homeSearch.results;

export const skipApi = (state: State) => state.homeSearch.skipApi;

export const isLoadingApi = (state: State) => state.homeSearch.isLoadingApi;

export const errorTextApi = (state: State) => state.homeSearch.errorTextApi;

export default homeSearchSlice.reducer;
