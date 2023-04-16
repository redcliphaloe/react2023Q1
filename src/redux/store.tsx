import { combineReducers, configureStore } from '@reduxjs/toolkit';
import homeSearchReducer from '../components/HomeSearch/homeSearchSlice';

const rootReducer = combineReducers({
  homeSearch: homeSearchReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
