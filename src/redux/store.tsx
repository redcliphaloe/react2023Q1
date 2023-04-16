import { combineReducers, configureStore } from '@reduxjs/toolkit';
import homeSearchReducer from '../components/HomeSearch/homeSearchSlice';
import formsFormReducer from '../components/FormsForm/formsFormSlice';

const rootReducer = combineReducers({
  homeSearch: homeSearchReducer,
  formsForm: formsFormReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
