import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts } from "../api/useProducts";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const products = await fetchProducts();
    return products;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? null;
      });
  },
});

export default productsSlice.reducer;
