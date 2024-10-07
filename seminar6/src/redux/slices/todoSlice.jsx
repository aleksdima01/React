import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    items: []
};

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: Date.now(),
                text: action.payload,
                isCompleted: false,
            }
            state.items.push(newTodo);
        },
        deleteTodo: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload)
        }
    }
})
console.log(todoSlice);
export const { addTodo, deleteTodo } = todoSlice.actions; // action creator
export default todoSlice.reducer;