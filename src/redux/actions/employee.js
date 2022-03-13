import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { APIClient, APIURLs } from '../../common';
import Action from '../ActionType';

export const addEmployee = createAsyncThunk(
    `${Action.reducer.EMPLOYEE_REDUCER}/${Action.actionType.ADD_EMPLOYEE}`,
    async (request, thunkAPI) => {
        let apiConfig = {
            method: 'POST',
            url: APIURLs.ADD_EMPLOYEE,
            data: request
        }
        const response = await APIClient(apiConfig)
        return response;
    }
)

export const updateEmployee = createAsyncThunk(
    `${Action.reducer.EMPLOYEE_REDUCER}/${Action.actionType.UPDATE_EMPLOYEE}`,
    async (request,id, thunkAPI) => {
        let apiConfig = {
            method: 'PUT',
            url: `${APIURLs.UPDATE_EMPLOYEE}/${id}`,
            data: request
        }
        const response = await APIClient(apiConfig)
        return response;
    }
)

export const deleteEmployee = createAsyncThunk(
    `${Action.reducer.EMPLOYEE_REDUCER}/${Action.actionType.DELETE_EMPLOYEE}`,
    async (id, thunkAPI) => {
        let apiConfig = {
            method: 'DELETE',
            url: `${APIURLs.UPDATE_EMPLOYEE}/${id}`
        }
        const response = await APIClient(apiConfig)
        return response;
    }
)

export const getAllEmployee = createAsyncThunk(
    `${Action.reducer.EMPLOYEE_REDUCER}/${Action.actionType.GET_ALL_EMPLOYEE}`,
    async (request, thunkAPI) => {
        let apiConfig = {
            method: 'GET',
            url: `${APIURLs.GET_EMPLOYEE}`
        }
        const response = await APIClient(apiConfig)
        return response;
    }
)

export const getSingleEmployee = createAsyncThunk(
    `${Action.reducer.EMPLOYEE_REDUCER}/${Action.actionType.GET_SINGLE_EMPLOYEE}`,
    async (id, thunkAPI) => {
        let apiConfig = {
            method: 'GET',
            url: `${APIURLs.GET_EMPLOYEE}/${id}`
        }
        const response = await APIClient(apiConfig)
        return response;
    }
)
