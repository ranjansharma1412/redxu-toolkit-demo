import { createSlice } from '@reduxjs/toolkit'
import Action from '../ActionType';
// import { getTodos, addTodos } from '../actions/todo'

const initialState = {
    todos: [],
    gettodoLoader: false,
    todo: null,
    todoLoader: false,
}

export const todosSlice = createSlice({
    name: Action.reducer.TODO_REDUCER,
    initialState,
    reducers: {   // use this in regular redux toolkit
        getTodos: (state, action) => {
            state.todos = action.payload
        },
    },
    // extraReducers: (builder) => {    // use when using creatAsyncThunk
    //     builder.addCase(getTodos.pending, (state, action) => {
    //         state.gettodoLoader = true;
    //     })
    //         .addCase(getTodos.fulfilled, (state, action) => {
    //             state.gettodoLoader = false;
    //             state.todos = action.payload;
    //         })
    //         .addCase(getTodos.rejected, (state, action) => {
    //             state.gettodoLoader = false;
    //             state.todos = [];
    //         }),
    //         builder.addCase(addTodos.pending, (state, action) => {
    //             state.todoLoader = true;
    //         })
    //             .addCase(addTodos.fulfilled, (state, action) => {
    //                 state.todoLoader = false;
    //                 state.todo = action.payload;
    //             })
    //             .addCase(addTodos.rejected, (state, action) => {
    //                 state.todoLoader = false;
    //                 state.todo = null;
    //             })
    // },
})

// Action creators are generated for each case reducer function
export const {getTodos } = todosSlice.actions

export default todosSlice.reducer
