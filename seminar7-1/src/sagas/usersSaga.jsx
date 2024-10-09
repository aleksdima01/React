import { call, put, takeEvery } from 'redux-saga/effects';

function fetchUsersApi() {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json());
}

function* fetchUsers() {
    try {
        const data = yield call(fetchUsersApi);
        yield put({ type: "FETCH_USERS_SUCCESS", payload: data })
    } catch (error) {
        yield put({ type: "FETCH_USERS_FAILURE", payload: error.message || "Что-то пошло не так" })

    }
}

function* usersSaga() {
    yield takeEvery('FETCH_USERS_REQUEST', fetchUsers);
}

export default usersSaga;

// Рекомендации по библиотекам от преподавателя

// https://formik.org/
// https://react-hook-form.com/
// https://testing-library.com/docs/react-testing-library/intro/
// https://playwright.dev/docs/intro
// https://www.cypress.io/
// https://mobx.js.org/README.html
// https://tanstack.com/