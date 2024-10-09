import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import usersSaga from "../sagas/usersSaga";
import usersReducer from './userReducer'
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: {
        users: usersReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(usersSaga);

export default store;