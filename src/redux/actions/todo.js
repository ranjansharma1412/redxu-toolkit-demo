import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { APIClient, APIURLs } from '../../common';
import Action from '../ActionType';

 // use while need to perform asynchronous task
export const getTodos = createAsyncThunk(
    `${Action.reducer.TODO_REDUCER}/${Action.actionType.GET_TODOS}`,
    async (request, thunkAPI) => {
        console.log("===getTodos====sss==")
        let apiConfig = {
            method: 'GET',
            url: APIURLs.TODOS_URL
        }
        const response = await APIClient(apiConfig)
        console.log("==response===",response);
        return response;
    }
)

export const addTodos = createAsyncThunk(
    `${Action.reducer.TODO_REDUCER}/${Action.actionType.ADD_TODO}`,
    async (request, thunkAPI) => {
        let apiConfig = {
            method: 'POST',
            url: APIURLs.TODOS_URL,
            data: request
        }
        const response = await APIClient(apiConfig)
        return response;
    }
)