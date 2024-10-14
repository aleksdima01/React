import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: '',
    loading: false,
    error: null,
};

export const fetchJoke = createAsyncThunk('joke/fetchJoke',
    async (url, thunkApi) => {              // {rejectWithValue,getState,dispatch}=thunkApi функции внутри thunkApi
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error({ message: response.status });
            }
            const data = await response.json();
            return data.value  //попадет в payload (только value, а не весь объект)
        } catch (error) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
)

const jokeSlice = createSlice({
    initialState,
    name: "joke",
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchJoke.pending, (state) => {  //ожидание
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchJoke.fulfilled, (state, action) => {  //успешно
                state.loading = false;
                state.value = action.payload;
            })
            .addCase(fetchJoke.rejected, (state, action) => { //ошибка
                state.loading = false;
                state.error = action.payload;
            })
    }
})

export default jokeSlice.reducer;