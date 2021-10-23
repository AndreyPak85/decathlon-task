import { asyncGetProductsThunk } from './productsThunk';
import { createSlice } from '@reduxjs/toolkit';

export interface IProducts {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  title: string;
  rating: object;
}

const productsState: IProducts[] = [];

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    isLoading: false,
    products: productsState,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(asyncGetProductsThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(asyncGetProductsThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    });
    builder.addCase(asyncGetProductsThunk.rejected, (state, action) => {});
  },
});

export default productsSlice.reducer;
