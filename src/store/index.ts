import { combineReducers, configureStore } from '@reduxjs/toolkit';
import productsSlice from './Products/productsSlice';

const rootReducer = combineReducers({
  products: productsSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
