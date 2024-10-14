import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    result: null,
    amount: '',
    currency: '',
    loading: false,
    error: null,
    currencyList: [],
};

export const fetchExchange = createAsyncThunk('exchange/fetchExchange',
    async (_, thunkApi) => {              // {rejectWithValue,getState,dispatch}=thunkApi функции внутри thunkApi
        try {
            const { exchange } = thunkApi.getState();
            const response = await fetch("https://v6.exchangerate-api.com/v6/276b850ba7a1c710fc835a20/latest/RUB");
            if (!response.ok) {
                throw new Error({ message: response.status });
            }
            const data = await response.json();
            console.log(exchange)
            if (!exchange.currencyList.length) {
                thunkApi.dispatch(setCurrencyList(Object.keys(data.conversion_rates
                )));
                console.log(Object.keys(data.conversion_rates
                ))
            }
            return data.conversion_rates
            //попадет в payload 
        } catch (error) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
)

const exchangeSlice = createSlice({
    initialState,
    name: "exchange",
    reducers: {
        setAmount: (state, action) => {
            state.amount = action.payload;
        },
        setCurrency: (state, action) => {
            state.currency = action.payload;
        },
        setCurrencyList: (state, action) => {
            state.currencyList = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchExchange.pending, (state) => {  //ожидание
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchExchange.fulfilled, (state, action) => {  //успешно
                state.loading = false;
                if (state.currency && state.amount) {
                    state.result = (action.payload[state.currency] * state.amount).toFixed(2);
                }
            })
            .addCase(fetchExchange.rejected, (state, action) => { //ошибка
                state.loading = false;
                state.error = action.payload;
            })
    }
})

export const { setAmount, setCurrency, setCurrencyList } = exchangeSlice.actions;

export default exchangeSlice.reducer;