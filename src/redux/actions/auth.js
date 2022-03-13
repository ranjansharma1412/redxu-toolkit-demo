import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { APIClient, APIURLs } from '../../common';
import Action from '../ActionType';

export const signUp = createAsyncThunk(
    `${Action.reducer.USER_REDUCER}/${Action.actionType.SIGN_UP}`,
    async (request, thunkAPI) => {
        let apiConfig = {
            method: 'POST',
            url: APIURLs.SIGN_UP_URL,
            data: request
        }
        const response = await APIClient(apiConfig)
        return response;
    }
)

export const signIn = createAsyncThunk(
    `${Action.reducer.USER_REDUCER}/${Action.actionType.SIGN_IN}`,
    async (request, thunkAPI) => {
        let apiConfig = {
            method: 'POST',
            url: APIURLs.SIGN_IN_URL,
            data: request
        }
        const response = await APIClient(apiConfig)
        return response;
    }
)
