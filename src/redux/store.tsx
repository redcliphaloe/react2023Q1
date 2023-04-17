import { combineReducers, configureStore } from '@reduxjs/toolkit';
import homeSearchReducer from '../components/HomeSearch/homeSearchSlice';
import formsFormReducer from '../components/FormsForm/formsFormSlice';
import { unsplashApi } from '../services/unsplash';

const rootReducer = combineReducers({
  homeSearch: homeSearchReducer,
  formsForm: formsFormReducer,
  [unsplashApi.reducerPath]: unsplashApi.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(unsplashApi.middleware),
});

export default store;
