import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import usersSaga from "../sagas/usersSaga";
import usersReducer from './userReducer'
import loggerMiddleware from "./loggerMiddleware";
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: {
        users: usersReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware, loggerMiddleware),
});

sagaMiddleware.run(usersSaga);

export default store;