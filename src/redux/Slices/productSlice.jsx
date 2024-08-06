import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts } from "../../api";

export const fetchProductsAsync = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const response = await fetchProducts();
        console.log(response.data)
        return response.data;
    }
);

const initialState = {
    value: [],
    status: 'idle',
    error: null,
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.value = action.payload;
        },
        deleteProduct: (state, action) => {
            state.value = state.value.filter((user) => user.id !== action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchProductsAsync.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(fetchProductsAsync.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.value = action.payload;
          })
          .addCase(fetchProductsAsync.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          });
      },
})

export const { setProducts, deleteProduct } = productSlice.actions;

export default productSlice.reducer;