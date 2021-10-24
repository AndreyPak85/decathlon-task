import { asyncGetProductsThunk } from './productsThunk';
import { createSlice } from '@reduxjs/toolkit';
import { env } from 'process';

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
    cart: [],
  },
  reducers: {
    addToCart(state, action) {
      if (state.cart.some((item) => item.product.id === action.payload.id)) {
        const indx = state.cart.findIndex(
          (item) => item.product.id === action.payload.id
        );
        ++state.cart[indx].count;
      } else {
        state.cart.push({ product: action.payload, count: 1 });
      }
    },
    plusCount(state, action) {
      const indx = state.cart.findIndex(
        (item) => item.product.id === action.payload
      );
      ++state.cart[indx].count;
    },
    minusCount(state, action) {
      const indx = state.cart.findIndex(
        (item) => item.product.id === action.payload
      );
      if (state.cart[indx].count === 1) {
        state.cart.splice(indx, 1);
      } else {
        --state.cart[indx].count;
      }
    },
  },
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
export const { addToCart, plusCount, minusCount } = productsSlice.actions;
