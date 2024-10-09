
const loggerMiddleware = (store) => (next) => (action) => {            //так выглядит любой Middleware
    console.log('Dispatching', action);
    console.log('Состояние store до Action', store.getState());
    if (action.type === 'todo/addTodo') {
        action.payload = action.payload + '!!!'
    }
    const result = next(action);
    console.log(store);
    console.log('Состояние store после Action', store.getState());
    return result;
}

export default loggerMiddleware;
