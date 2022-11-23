import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../core/apis';

const name = 'todo';
const initialState = {
    data: null,
    loading: false,
    error: null,
};

const TodoSlicer = createSlice({
    name,
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchTodos.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // add todo
            .addCase(addTodo.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(addTodo.fulfilled, (state, action) => {
                console.log('action', action)
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(addTodo.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // update todo
            .addCase(updateTodo.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(updateTodo.fulfilled, (state, action) => {
                console.log('action', action)
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(updateTodo.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // delete todo
            .addCase(deleteTodo.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(deleteTodo.fulfilled, (state, action) => {
                console.log('payload', action.payload)
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(deleteTodo.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
});

export const fetchTodos = createAsyncThunk(`${name}/fetchTodos`, async (request) => {
    const { data } = await api.get('todos');
    return data;
})

export const addTodo = createAsyncThunk(`${name}/addTodo`, async (request) => {
    const { data } = await api.post('addTodo', request);
    return data;
})
export const updateTodo = createAsyncThunk(`${name}/updateTodo`, async (request) => {
    const { data } = await api.put('updateTodo', request);
    return data;
})
export const deleteTodo = createAsyncThunk(`${name}/deleteTodo`, async (request) => {
    const { data } = await api.post('deleteTodo', request);
    console.log('response data delete', data);
    return data;
})

export default TodoSlicer;

