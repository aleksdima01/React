import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
    productsList: [],
    loading: false,
    error: null,
};

export const fetchProducts = createAsyncThunk('products/fetchProducts',
    async (_, thunkApi) => {              // {rejectWithValue,getState,dispatch}=thunkApi функции внутри thunkApi
        try {
            const response = await fetch("./data.json");
            if (!response.ok) {
                throw new Error({ message: response.status });
            }
            const data = await response.json();
            return data  //попадет в payload
        } catch (error) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
)

const productsSlice = createSlice({
    initialState,
    name: "products",
    reducers: {
        // setProductsList: (state, action) => {
        //     state.productsList = action.payload;
        // }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {  //ожидание
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {  //успешно
                state.loading = false;
                state.productsList = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => { //ошибка
                state.loading = false;
                state.error = action.payload;
            })
    }
})

export default productsSlice.reducer;