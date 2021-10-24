import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../api/instance';

export const asyncGetProductsThunk = createAsyncThunk(
  'getProducts',
  async () => {
    try {
      const response: any = await instance.get('/products');
      console.log(response.data);
      return response.data;
    } catch (error) {}
  }
);
